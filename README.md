# BLT Roadmap — GitHub Auto-Sync Setup

The website is still a static GitHub Pages site. A tiny Cloudflare Worker acts as the secure bridge that writes `roadmap.json` to GitHub.

## What goes where

- `index.html` — the BLT roadmap website on GitHub Pages.
- `roadmap.json` — the shared source of truth. The Worker updates this file automatically.
- `worker/worker.js` — the secure sync API.
- `GITHUB_TOKEN` — stored only as a Cloudflare Worker secret. Never put it in `index.html` or in your repository.
- `BLT_SYNC_KEY` — a separate shared editor password. Editors enter this into the roadmap's Sync panel. It is not a GitHub token.

## 1. Put the new site files in GitHub

Upload/replace these in the root of `TristanH123eng/BLT-4-Year-Roadmap`:

- `index.html`
- `roadmap.json`
- optionally the `worker/` folder and this README for documentation

Do not restore the old `script.js` or `styles.css`; the current `index.html` is self-contained.

## 2. Create a fine-grained GitHub personal access token

In GitHub:

1. Open **Settings**.
2. Open **Developer settings**.
3. Open **Personal access tokens → Fine-grained tokens**.
4. Choose **Generate new token**.
5. Name it something like `BLT Roadmap Sync`.
6. Choose an expiration period you are comfortable renewing.
7. Resource owner: `TristanH123eng`.
8. Repository access: **Only select repositories** → `BLT-4-Year-Roadmap`.
9. Under **Repository permissions**, set **Contents** to **Read and write**.
10. Leave unrelated permissions disabled.
11. Generate the token and copy it immediately.

Treat that token like a password. Do not paste it into the roadmap website and do not commit it to GitHub.

## 3. Create the Cloudflare Worker

You can use the Cloudflare dashboard; no local CLI is required.

1. Create/sign in to a Cloudflare account.
2. Go to **Workers & Pages** and create a Worker named `blt-roadmap-sync`.
3. Open the Worker editor and replace the starter code with `worker/worker.js` from this project.
4. Deploy it once.
5. Open the Worker's **Settings → Variables and Secrets**.

Add these normal variables:

| Name | Value |
| --- | --- |
| `GITHUB_OWNER` | `TristanH123eng` |
| `GITHUB_REPO` | `BLT-4-Year-Roadmap` |
| `GITHUB_BRANCH` | `main` |
| `ROADMAP_PATH` | `roadmap.json` |
| `ALLOWED_ORIGIN` | `https://tristanh123eng.github.io` |

Add these as **Secret** values, not plaintext variables:

| Secret | Value |
| --- | --- |
| `GITHUB_TOKEN` | the fine-grained GitHub token from step 2 |
| `BLT_SYNC_KEY` | a long random password/key that you create for BLT editors |

For `BLT_SYNC_KEY`, use a password manager to generate a random key of at least 24 characters. This is the key you can share with trusted club members who should be able to edit the roadmap. Do not use your GitHub password.

Deploy/save the Worker configuration and copy its public URL. It will look similar to:

`https://blt-roadmap-sync.<your-workers-subdomain>.workers.dev`

## 4. Connect the roadmap website

Open your deployed BLT roadmap.

1. Click **Local only** in the top-right.
2. Paste the Worker URL into **Sync service URL**.
3. Paste the exact same `BLT_SYNC_KEY` into **Workspace write key**.
4. Leave **Auto-sync changes** enabled.
5. Click **Test connection**.
6. Click **Save settings**.
7. Click the sync indicator again and choose **Push now** for the first sync.

After that, edits are saved locally immediately and pushed to `roadmap.json` roughly 2.5 seconds after the last change. The top-right indicator shows **Changes pending**, **Syncing…**, **Saved to GitHub**, or **Sync failed**.

## 5. Set up other BLT editors

Each editor only needs:

- the normal roadmap URL,
- the Worker URL,
- the shared `BLT_SYNC_KEY`.

They do **not** need your GitHub token. Their browser stores the Worker URL and workspace key locally.

## Notes

- The Worker only accepts browser requests from the configured GitHub Pages origin.
- Reads are allowed without the workspace key; writes require it.
- Every successful web sync creates a Git commit that updates `roadmap.json`.
- If two people save at almost the same time, the Worker retries one normal GitHub SHA conflict. The latest successful save is the shared state.
- If you rotate the GitHub token, replace only the `GITHUB_TOKEN` Worker secret.
- If an editor should lose write access, rotate `BLT_SYNC_KEY` in the Worker and give the new key only to current editors.
- If you later add a custom domain, update `ALLOWED_ORIGIN` to that domain's origin.
