# Elkhart Transportation — Website

Regional transportation company website serving Elkhart, Indiana.
Services: NEMT, Factory/Shift Transport, General Rides.

## Quick Start for Claude Code (VS Code)

1. Open this folder in VS Code: `File > Open Folder`
2. Click the **Spark icon** in the sidebar to open Claude Code
3. Open `docs/CLAUDE_CODE_INSTRUCTIONS.md`
4. Follow the numbered prompts in order (Step 1 → Step 7)

## Tech Stack
- Plain HTML, CSS, JavaScript — no build tools needed
- Google Fonts (DM Sans) via CDN
- Formspree for contact form
- Deploy to any VPS with Nginx

## Pages
- `/index.html` — Homepage
- `/src/pages/services.html` — All services
- `/src/pages/nemt.html` — NEMT / Medical transport
- `/src/pages/factory-transport.html` — Factory & shift transport
- `/src/pages/about.html` — About the company
- `/src/pages/contact.html` — Contact & service area

## Deployment
Push to GitHub → pull on VPS → serve with Nginx.
See `docs/CLAUDE_CODE_INSTRUCTIONS.md` for full deployment steps.
