# Qostara — Construction Cost Estimating

Premium marketing site for **Qostara**, a construction cost estimating firm. Built with Next.js App Router, TypeScript, Tailwind CSS v4, shadcn/ui, Lucide, and Framer Motion.

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home — hero, services, process, trades, portfolio, testimonials, FAQ |
| `/about` | Company story, values, team, timeline |
| `/services` | Detailed estimating services |
| `/trades` | Trades covered |
| `/pricing` | Plans + comparison table |
| `/contact` | Contact form with drawing upload |
| `/blog` | Blog listing (placeholder content) |

## Stack

- **Next.js 16** (App Router) + React 19
- **TypeScript**
- **Tailwind CSS v4** + shadcn/ui
- **Framer Motion** for scroll reveals, counters, and carousels
- **Lucide React** icons

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # ESLint
```

## Contact form email

Submissions are sent with [Resend](https://resend.com).

1. Create an API key at https://resend.com/api-keys
2. Copy `.env.example` to `.env.local` and set `RESEND_API_KEY`
3. For local testing, keep `CONTACT_FROM_EMAIL` as `Qostara <onboarding@resend.dev>` (Resend only delivers to the account owner’s email)
4. For production, verify `qostaraestimates.com` in Resend and set `CONTACT_FROM_EMAIL` / `CONTACT_TO_EMAIL` to your real addresses

Drawing uploads (PDF/DWG, up to 25 MB) are attached to the notification email.

## Architecture

```
app/                  # Routes + SEO (sitemap, robots, metadata)
components/
  home/               # Home page sections
  layout/             # Navbar, footer, logo
  shared/             # Section, page hero, graphics
  motion/             # Reveal, stagger, counter
  contact/            # Contact form
  ui/                 # shadcn primitives
lib/
  content.ts          # Typed site content
  site.ts             # Nav + company config
  utils.ts            # cn()
```

## Design tokens

| Role | Value |
|------|-------|
| Primary (ink) | `#0F172A` |
| Secondary (signal) | `#2563EB` |
| Accent (marker) | `#F59E0B` |
| Background | `#FFFFFF` |
| Surface | `#F8FAFC` |
