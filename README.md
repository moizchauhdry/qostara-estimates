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

### Local

1. Create an API key at https://resend.com/api-keys
2. Copy `.env.example` to `.env` (or `.env.local`) and set:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL` — with `onboarding@resend.dev`, this **must** be the email on your Resend account
   - `CONTACT_FROM_EMAIL` — e.g. `Qostara <onboarding@resend.dev>`
3. Restart `npm run dev`

### Vercel (required for production)

`.env` is **not** uploaded to Vercel. Add the same keys in the dashboard:

1. Open the project → **Settings** → **Environment Variables**
2. Add for **Production** (and Preview if you want):

| Name | Example value |
|------|----------------|
| `RESEND_API_KEY` | `re_...` |
| `CONTACT_TO_EMAIL` | your Resend account email |
| `CONTACT_FROM_EMAIL` | `Qostara <onboarding@resend.dev>` |

3. **Redeploy** after saving (env changes do not apply to old deployments)

Until you verify `qostaraestimates.com` in Resend, keep using `onboarding@resend.dev` and only send to your Resend account email. After domain verification, set:

```
CONTACT_FROM_EMAIL=Qostara <hello@qostaraestimates.com>
CONTACT_TO_EMAIL=hello@qostaraestimates.com
```

Drawing uploads (PDF/DWG, up to 25 MB) are attached to the notification email.

## Email templates

Premium HTML emails live in [`emails/`](./emails). Contact form submissions send a branded internal notification plus a customer confirmation via Resend. See [`emails/README.md`](./emails/README.md) for all 15 templates and usage.

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
