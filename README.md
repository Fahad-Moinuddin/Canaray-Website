# Canaray Website — Vision POC

Greenfield frontend proof of concept for a modern Canaray digital experience.

This is **not** connected to Canaray production systems (booking, referrals, auth, uploads, chat, or 3D rendering). Flows are simulated for stakeholder demonstration.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) (port 3001 so it doesn’t conflict with other local apps on 3000).

## Stack

- Next.js (App Router) + React + TypeScript
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
