const GITHUB_API_VERSION = "2026-03-10";
const SESSION_TTL_MS = 12 * 60 * 60 * 1000;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin");
    const cors = corsHeaders(origin, env);

    if (request.method === "OPTIONS") {
      if (!originAllowed(origin, env)) return json({ error: "Origin not allowed" }, 403, cors);
      return new Response(null, { status: 204, headers: cors });
    }

    if (origin && !originAllowed(origin, env)) {
      return json({ error: "Origin not allowed" }, 403, cors);
    }

    if (url.pathname === "/health" && request.method === "GET") {
      return json({
        ok: true,
        service: "BLT Roadmap Sync",
        repo: `${env.GITHUB_OWNER}/${env.GITHUB_REPO}`,
        branch: env.GITHUB_BRANCH || "main",
        path: env.ROADMAP_PATH || "roadmap.json",
        passwordProtection: Boolean(env.SITE_PASSWORD)
      }, 200, cors);
    }

    if (url.pathname === "/auth/login" && request.method === "POST") {
      return login(request, env, cors);
    }

    if (url.pathname === "/auth/check" && request.method === "GET") {
      const valid = await requestAuthenticated(request, env);
      return valid ? json({ ok: true }, 200, cors) : json({ error: "Authentication required" }, 401, cors);
    }

    if (url.pathname !== "/roadmap") {
      return json({ error: "Not found" }, 404, cors);
    }

    if (!(await requestAuthenticated(request, env))) {
      return json({ error: "Authentication required" }, 401, cors);
    }

    if (request.method === "GET") {
      return getRoadmap(env, cors);
    }

    if (request.method === "PUT") {
      if (!env.BLT_SYNC_KEY || !timingSafeEqual(request.headers.get("X-BLT-Sync-Key") || "", env.BLT_SYNC_KEY)) {
        return json({ error: "Invalid workspace write key" }, 401, cors);
      }

      const contentLength = Number(request.headers.get("Content-Length") || 0);
      if (contentLength > 524288) return json({ error: "Roadmap payload is too large" }, 413, cors);

      let payload;
      try {
        payload = await request.json();
      } catch {
        return json({ error: "Request body must be valid JSON" }, 400, cors);
      }

      const validationError = validateRoadmap(payload);
      if (validationError) return json({ error: validationError }, 400, cors);

      return putRoadmap(payload, env, cors);
    }

    return json({ error: "Method not allowed" }, 405, cors);
  }
};


async function login(request, env, cors) {
  if (!env.SITE_PASSWORD || !env.BLT_SYNC_KEY) {
    return json({ error: "Password protection is not configured" }, 500, cors);
  }
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Request body must be valid JSON" }, 400, cors);
  }
  const password = String(body?.password || "");
  if (!timingSafeEqual(password, env.SITE_PASSWORD)) {
    await new Promise(resolve => setTimeout(resolve, 350));
    return json({ error: "Invalid password" }, 401, cors);
  }
  const token = await createSessionToken(env);
  return json({ ok: true, token, expiresIn: SESSION_TTL_MS / 1000 }, 200, { ...cors, "Cache-Control": "no-store" });
}

async function requestAuthenticated(request, env) {
  if (!env.SITE_PASSWORD || !env.BLT_SYNC_KEY) return false;
  const header = request.headers.get("Authorization") || "";
  if (!header.startsWith("Bearer ")) return false;
  return verifySessionToken(header.slice(7), env);
}

async function createSessionToken(env) {
  const payload = base64UrlEncodeText(JSON.stringify({ exp: Date.now() + SESSION_TTL_MS, scope: "blt-roadmap" }));
  const signature = await hmacSign(payload, env.BLT_SYNC_KEY);
  return `${payload}.${signature}`;
}

async function verifySessionToken(token, env) {
  try {
    const [payload, signature] = String(token).split(".");
    if (!payload || !signature) return false;
    const expected = await hmacSign(payload, env.BLT_SYNC_KEY);
    if (!timingSafeEqual(signature, expected)) return false;
    const data = JSON.parse(base64UrlDecodeText(payload));
    return data?.scope === "blt-roadmap" && Number(data?.exp) > Date.now();
  } catch {
    return false;
  }
}

async function hmacSign(value, secret) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(String(secret)),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(value));
  return base64UrlEncodeBytes(new Uint8Array(signature));
}

function base64UrlEncodeText(text) {
  return base64UrlEncodeBytes(new TextEncoder().encode(text));
}

function base64UrlEncodeBytes(bytes) {
  let binary = "";
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function base64UrlDecodeText(value) {
  const normalized = String(value).replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized + "=".repeat((4 - normalized.length % 4) % 4);
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, ch => ch.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function requiredConfig(env) {
  const required = ["GITHUB_TOKEN", "GITHUB_OWNER", "GITHUB_REPO"];
  const missing = required.filter(key => !env[key]);
  if (missing.length) throw new Error(`Missing Worker configuration: ${missing.join(", ")}`);
}

function githubHeaders(env) {
  return {
    "Accept": "application/vnd.github+json",
    "Authorization": `Bearer ${env.GITHUB_TOKEN}`,
    "X-GitHub-Api-Version": GITHUB_API_VERSION,
    "User-Agent": "BLT-Roadmap-Sync"
  };
}

function repoFileUrl(env) {
  const owner = encodeURIComponent(env.GITHUB_OWNER);
  const repo = encodeURIComponent(env.GITHUB_REPO);
  const path = String(env.ROADMAP_PATH || "roadmap.json").split("/").map(encodeURIComponent).join("/");
  return `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
}

async function getRoadmap(env, cors) {
  try {
    requiredConfig(env);
    const branch = env.GITHUB_BRANCH || "main";
    const response = await fetch(`${repoFileUrl(env)}?ref=${encodeURIComponent(branch)}`, {
      headers: githubHeaders(env)
    });

    if (response.status === 404) return json({ error: "roadmap.json does not exist yet" }, 404, cors);
    if (!response.ok) return githubError(response, cors, "Could not read roadmap.json from GitHub");

    const file = await response.json();
    const text = decodeBase64(file.content || "");
    let payload;
    try {
      payload = JSON.parse(text);
    } catch {
      return json({ error: "roadmap.json exists but is not valid JSON" }, 502, cors);
    }

    return json(payload, 200, {
      ...cors,
      "Cache-Control": "no-store",
      "X-BLT-GitHub-SHA": file.sha || ""
    });
  } catch (error) {
    return json({ error: error.message || "Worker configuration error" }, 500, cors);
  }
}

async function putRoadmap(payload, env, cors) {
  try {
    requiredConfig(env);
    const branch = env.GITHUB_BRANCH || "main";
    const fileUrl = repoFileUrl(env);
    const headers = githubHeaders(env);

    let existingSha = null;
    const current = await fetch(`${fileUrl}?ref=${encodeURIComponent(branch)}`, { headers });
    if (current.ok) {
      existingSha = (await current.json()).sha || null;
    } else if (current.status !== 404) {
      return githubError(current, cors, "Could not inspect the current roadmap.json");
    }

    const canonical = {
      ...payload,
      schemaVersion: 1,
      club: "BLT Rocketry",
      mission: "Liquid SpaceShot",
      updatedAt: new Date().toISOString()
    };

    const body = {
      message: "Update BLT roadmap from website",
      content: encodeBase64(JSON.stringify(canonical, null, 2) + "\n"),
      branch
    };
    if (existingSha) body.sha = existingSha;

    let update = await fetch(fileUrl, {
      method: "PUT",
      headers: { ...headers, "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    // One retry covers the common case where two editors save at almost the same time.
    if (update.status === 409) {
      const latest = await fetch(`${fileUrl}?ref=${encodeURIComponent(branch)}`, { headers });
      if (latest.ok) {
        body.sha = (await latest.json()).sha;
        update = await fetch(fileUrl, {
          method: "PUT",
          headers: { ...headers, "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });
      }
    }

    if (!update.ok) return githubError(update, cors, "GitHub rejected the roadmap update");
    const result = await update.json();
    return json({
      ok: true,
      sha: result.content?.sha || result.commit?.sha || null,
      commit: result.commit?.html_url || null,
      updatedAt: canonical.updatedAt
    }, 200, cors);
  } catch (error) {
    return json({ error: error.message || "Could not update GitHub" }, 500, cors);
  }
}

function validateRoadmap(payload) {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) return "Payload must be an object";
  if (!Array.isArray(payload.goals)) return "Payload must contain a goals array";
  if (payload.goals.length > 1000) return "Too many goals";
  if (JSON.stringify(payload).length > 524288) return "Roadmap payload is too large";
  for (const goal of payload.goals) {
    if (!goal || typeof goal !== "object") return "Every goal must be an object";
    if (!goal.id || !goal.title) return "Every goal needs an id and title";
  }
  return "";
}

async function githubError(response, cors, fallback) {
  const body = await response.json().catch(() => ({}));
  const detail = body.message ? `: ${body.message}` : "";
  return json({ error: `${fallback}${detail}`, githubStatus: response.status }, response.status, cors);
}

function allowedOrigins(env) {
  return String(env.ALLOWED_ORIGIN || "https://tristanh123eng.github.io")
    .split(",")
    .map(value => value.trim())
    .filter(Boolean);
}

function originAllowed(origin, env) {
  if (!origin) return true;
  return allowedOrigins(env).includes(origin);
}

function corsHeaders(origin, env) {
  const allowed = origin && originAllowed(origin, env) ? origin : allowedOrigins(env)[0] || "null";
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "GET,PUT,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type,X-BLT-Sync-Key,Authorization",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin"
  };
}

function json(value, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(value), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
      ...extraHeaders
    }
  });
}

function timingSafeEqual(a, b) {
  const left = new TextEncoder().encode(String(a));
  const right = new TextEncoder().encode(String(b));
  if (left.length !== right.length) return false;
  let diff = 0;
  for (let i = 0; i < left.length; i++) diff |= left[i] ^ right[i];
  return diff === 0;
}

function encodeBase64(text) {
  const bytes = new TextEncoder().encode(text);
  let binary = "";
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
}

function decodeBase64(base64) {
  const binary = atob(String(base64).replace(/\s/g, ""));
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}
