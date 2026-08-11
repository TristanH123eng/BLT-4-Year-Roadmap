# BLT Roadmap Sync Worker

Use this folder as the Cloudflare Workers Builds root directory.

Cloudflare Git build settings:
- Root directory: `worker`
- Build command: leave blank
- Deploy command: `npx wrangler deploy`
- Production branch: `main`

The Worker name in Cloudflare must be `blt-roadmap-sync` (or change `name` in `wrangler.jsonc` to exactly match the Cloudflare Worker name).

The non-secret GitHub/repository settings are already configured in `wrangler.jsonc`.

Add these in Cloudflare as encrypted Secrets, never commit their values to GitHub:
- `GITHUB_TOKEN`
- `BLT_SYNC_KEY`
