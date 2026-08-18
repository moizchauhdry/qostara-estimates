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

Submissions are sent through the cPanel mailbox over SMTP (`qostaraestimates.com:465`). IMAP (993) and POP3 (995) are only for reading mail in Outlook/Apple Mail — the website does not need them.

### Local and cPanel

Copy `.env.example` to `.env` and set:

| Name | Example value |
|------|----------------|
| `SMTP_HOST` | `qostaraestimates.com` |
| `SMTP_PORT` | `465` |
| `SMTP_USER` | `info@qostaraestimates.com` |
| `SMTP_PASS` | the mailbox password |
| `CONTACT_TO_EMAIL` | `info@qostaraestimates.com` |
| `CONTACT_FROM_EMAIL` | `Qostara <info@qostaraestimates.com>` |

`CONTACT_FROM_EMAIL` must use the authenticated mailbox. Restart `npm run dev` (local) or the Node app (cPanel) after changing `.env`.

Drawing uploads (PDF/DWG, up to 25 MB) are attached to the notification email.

## Email templates

Premium HTML emails live in [`emails/`](./emails). Contact form submissions send a branded internal notification plus a customer confirmation via SMTP. See [`emails/README.md`](./emails/README.md) for all 15 templates and usage.

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
