# Canaray Website — Vision POC

Greenfield frontend proof of concept for a modern Canaray digital experience.

This is **not** connected to Canaray production systems (booking, referrals, auth, uploads, chat, or 3D rendering). Flows are simulated for stakeholder demonstration.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) (port 3001 so it doesn’t conflict with other local apps on 3000).

## Deploy (client showcase)

Prefer **Cloudflare Pages** for demos: clean URL, preview deploys, no `basePath` required.

### Cloudflare Pages (recommended)

1. Push this repo to GitHub
2. In [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → connect the repo
3. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node version:** `20` (set `NODE_VERSION=20` if needed)
4. Deploy — share the `*.pages.dev` URL with the client

Optional: add a custom domain later (e.g. `demo.yourdomain.com`).

### GitHub Pages (alternative)

Uses `basePath=/Canaray-Website`, so the site will live at:

`https://<your-username>.github.io/Canaray-Website/`

1. Repo **Settings → Pages → Source:** GitHub Actions
2. Push to `main` (workflow: `.github/workflows/deploy-github-pages.yml`)
3. Or run the **Deploy to GitHub Pages** workflow manually

Local GitHub Pages build (PowerShell):

```powershell
$env:GITHUB_PAGES="true"; npm run build:gh-pages
```

## Stack

- Next.js (App Router) + React + TypeScript
- Static export (`output: "export"`) for Pages hosting
- CSS Modules + shared design tokens
- Public Canaray media referenced where useful for the demo

## Key routes

| Route | Purpose |
| --- | --- |
| `/` | Homepage vision |
| `/patients` | Patient hub |
| `/dentists` | Dentist hub |
| `/book` | Demo booking flow |
| `/kiosk` | Touch / kiosk booking layout |
| `/refer` | Demo referral + conceptual pricing |
| `/order-report` | Upload & order report demo |
| `/technology` | 3D reporting vision + simulated viewer |
| `/cases` | Example case demos |
| `/services` | Service catalog |
| `/locations` | Clinic locations |
| `/login` | Demo professional login |
| `/login/forgot` | Forgot-password UX demo |

## Notes

- Demo banner appears site-wide so stakeholders never confuse this with production.
- Booking progress persists in `sessionStorage` within the tab.
- Referral pricing is generated locally and labeled as conceptual.
