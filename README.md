# BLT Rocketry — Liquid SpaceShot Roadmap

A GitHub Pages roadmap for BLT Rocketry's April 2030 Liquid SpaceShot goal.

## Website files

The site itself needs these files at the repository root:

- `index.html` — self-contained website (HTML + CSS + JavaScript)
- `roadmap.json` — shared roadmap data used by GitHub sync

Do **not** add the old `script.js` or `styles.css` back; they are no longer used.

## GitHub Pages

Publish from the `main` branch and `/ (root)` in **Settings → Pages**.

## Shared GitHub auto-sync

The `worker/` folder contains the Cloudflare Worker that securely updates `roadmap.json` through the GitHub API. The GitHub token is stored only as a Worker secret and is never put into the public website.

Follow **[README-SYNC.md](README-SYNC.md)** for the full setup.

## Editing behavior

- Every edit saves to the current browser immediately.
- Once GitHub sync is configured, changes are automatically pushed after about 2.5 seconds of inactivity.
- The header shows sync state: Local only, Changes pending, Syncing, Saved to GitHub, or Sync failed.
- Appearance/workstream color changes are synced along with roadmap goals.
