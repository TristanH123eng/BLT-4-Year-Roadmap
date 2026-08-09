# BLT Liquid SpaceShot Roadmap

A modern, browser-based roadmap for BLT Rocketry's April 2030 Liquid SpaceShot mission.

## Easiest GitHub Pages deployment

This build is intentionally robust: **`index.html` is fully self-contained**. Its CSS and JavaScript are embedded directly in the page, so GitHub Pages cannot accidentally serve `script.js` as page text.

1. Open your GitHub repository.
2. Delete/replace the old `index.html`.
3. Upload the new `index.html` from this folder to the repository root.
4. Commit the change.
5. In **Settings → Pages**, use **Deploy from a branch**, branch `main`, folder `/ (root)`.
6. Wait about a minute, then hard-refresh the site (`Ctrl+Shift+R` on Windows/Linux or `Cmd+Shift+R` on Mac).

Only `index.html` is required for the live site. `styles.css` and `script.js` are also included as readable source copies for future development, but the deployed page does not depend on them.

## Features

- April 2030 Liquid SpaceShot target
- Nested goals and subgoals
- Add, edit, delete, and reorganize goals
- Not started / In progress / Blocked / Complete states
- Search and filters
- Automatic overall mission progress
- Countdown and timeline
- Local browser persistence
- JSON export/import
- Responsive mission-control dashboard UI

## Data persistence

Roadmap edits are stored in the current browser using `localStorage`. Use **Export** to create a JSON backup and **Import** to move a roadmap between computers.

## Source files

- `index.html` — production, self-contained GitHub Pages build
- `styles.css` — source copy of the styling
- `script.js` — source copy of the application logic

BLT Rocketry — Liquid SpaceShot target: **April 2030**.
