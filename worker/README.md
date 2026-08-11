# BLT Roadmap Worker

Cloudflare Git build settings:
- Root directory: `worker`
- Build command: leave blank
- Deploy command: `npx wrangler deploy`
- Production branch: `main`

Runtime secrets required in Cloudflare:
- `GITHUB_TOKEN`
- `BLT_SYNC_KEY`
- `SITE_PASSWORD`

`SITE_PASSWORD` is the password BLT members enter on the website. Never commit any of these secret values to GitHub.
