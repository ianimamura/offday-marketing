# OffDay Marketing Site

Informational marketing website for **OffDay** (offdaygames.com). This project is **standalone** and has **no connection to the OffDay app codebase**. It only directs users to the app at [app.offdaygames.com](https://app.offdaygames.com).

- **Purpose:** Single-page marketing site to convert local sports organizers into app users.
- **Deployment:** Intended for its own subdomain (e.g. `offdaygames.com` or `www.offdaygames.com`), separate from `app.offdaygames.com`.
- **Repository:** This project has its own GitHub repository and release cycle.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **UI:** React 19, Lucide React, class-variance-authority

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command   | Description        |
|----------|--------------------|
| `npm run dev`   | Development server |
| `npm run build` | Production build   |
| `npm run start` | Start production   |
| `npm run lint`  | Run ESLint         |

## Own GitHub repository & subdomain

This project has no remotes by default. To use its own repo and subdomain:

1. **Create a new repository on GitHub** (e.g. `offday-marketing` or `offday-website`). Do not initialize with a README (this folder is already a repo).
2. **Add it as `origin` and push:**
   ```bash
   git remote add origin https://github.com/YOUR_ORG/offday-marketing.git
   git add .
   git commit -m "OffDay marketing site — informational only"
   git push -u origin main
   ```
3. **Deploy** (e.g. Vercel): New project → Import this GitHub repo → set your subdomain (e.g. `offdaygames.com` or `www.offdaygames.com`).

No env vars or app backend connection is required—the site is informational and only links to the app.
