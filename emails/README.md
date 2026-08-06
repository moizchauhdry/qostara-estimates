# Qostara Email Template System

Production-ready, table-based HTML emails for transactional and marketing use. Built for Gmail, Apple Mail, Outlook, Yahoo, and Outlook 365.

## Design

- Brand colors: primary `#2563EB`, dark `#0F172A`, accent `#F59E0B`, surface `#F8FAFC`
- Web-safe typography (Arial / Helvetica)
- Bulletproof buttons with **VML** for Outlook
- Preheader, header, hero, cards, stats, testimonial, CTA band, contact block, footer
- Mobile-first fluid layout (`max-width: 600px`)

## Templates

| ID | Function | Use |
|----|----------|-----|
| Welcome | `welcomeEmail` | New client / account |
| Quote request confirmation | `quoteRequestConfirmationEmail` | After contact form |
| Internal enquiry | `internalQuoteNotificationEmail` | Inbox notification |
| Estimate ready | `estimateReadyEmail` | Deliverable ready |
| Project update | `projectUpdateEmail` | Status updates |
| Invoice | `invoiceEmail` | Billing |
| Payment confirmation | `paymentConfirmationEmail` | Receipt |
| Appointment confirmation | `appointmentConfirmationEmail` | Booked call |
| Meeting reminder | `meetingReminderEmail` | Upcoming call |
| Password reset | `passwordResetEmail` | Auth |
| Email verification | `emailVerificationEmail` | Auth |
| Newsletter | `newsletterEmail` | Content |
| Promotional campaign | `promotionalCampaignEmail` | Offers |
| Service announcement | `serviceAnnouncementEmail` | Product/news |
| Thank you | `thankYouEmail` | Relationship |
| Follow-up | `followUpEmail` | Nurture |

## Usage

```ts
import { Resend } from "resend";
import { estimateReadyEmail } from "@/emails";

const email = estimateReadyEmail({
  customer_name: "Jordan Reyes",
  project_name: "Harborline Logistics Hub",
  estimate_number: "QST-2048",
  project_type: "Material takeoff",
  bid_date: "March 28, 2026",
  cta_link: "https://qostaraestimates.com/estimates/QST-2048",
});

await new Resend(process.env.RESEND_API_KEY).emails.send({
  from: "Qostara <hello@qostaraestimates.com>",
  to: "jordan@company.com",
  subject: email.subject,
  html: email.html,
  text: email.text,
});
```

## Logo

Emails embed `public/brand/logo.png` as an **inline CID attachment** (`cid:qostara-logo`) so the logo shows even when the production domain is not serving assets yet.

When the site is live, you can switch to a hosted URL:

```bash
EMAIL_LOGO_URL=https://qostaraestimates.com/brand/logo.png
# or
EMAIL_ASSET_BASE_URL=https://qostaraestimates.com
```

Always include `getInlineLogoAttachment()` when sending via Resend if you are still using the CID fallback.

Common placeholders (pass as object keys — values are escaped in HTML):

- `customer_name`, `company_name`, `cta_link`, `date`, `unsubscribe_url`
- `project_name`, `estimate_number`, `project_type`, `bid_date`
- `amount`, `invoice_number`, `due_date`, `payment_method`
- `meeting_title`, `meeting_date`, `meeting_time`, `meeting_link`
- `reset_link`, `verify_link`, `code`, `expires_in`

## Preview

```bash
npx tsx emails/preview.ts welcome
npx tsx emails/preview.ts estimate-ready
```

Opens rendered HTML under `.email-preview-<id>.html` in the project root.

## Structure

```
emails/
  brand.ts              # Colors, contact, social, stats
  types.ts              # Shared variable types
  components/           # Header, footer, hero, cards, buttons…
  templates/            # One module per email family
  index.ts              # Public exports
  preview.ts            # Local HTML preview helper
  README.md
```
