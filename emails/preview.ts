/**
 * Local preview helper — renders a template to /tmp for browser review.
 *
 *   npx tsx emails/preview.ts welcome
 *   npx tsx emails/preview.ts estimate-ready
 */

import { writeFileSync } from "node:fs";
import { join } from "node:path";
import {
  appointmentConfirmationEmail,
  emailTemplates,
  emailVerificationEmail,
  estimateReadyEmail,
  followUpEmail,
  invoiceEmail,
  meetingReminderEmail,
  newsletterEmail,
  passwordResetEmail,
  paymentConfirmationEmail,
  projectUpdateEmail,
  promotionalCampaignEmail,
  quoteRequestConfirmationEmail,
  serviceAnnouncementEmail,
  thankYouEmail,
  welcomeEmail,
  type EmailTemplateId,
} from "./index";

const sample = {
  customer_name: "Jordan Reyes",
  company_name: "Northline Builders",
  project_name: "Harborline Logistics Hub",
  estimate_number: "QST-2048",
  project_type: "Construction cost estimation",
  bid_date: "March 28, 2026",
  amount: "$4,850.00",
  invoice_number: "INV-1192",
  due_date: "April 15, 2026",
  payment_method: "ACH",
  meeting_title: "Estimate scoping call",
  meeting_date: "March 12, 2026",
  meeting_time: "10:00 AM PT",
  meeting_link: "https://meet.qostaraestimates.com/scoping",
  reset_link: "https://qostaraestimates.com/reset?token=demo",
  verify_link: "https://qostaraestimates.com/verify?token=demo",
  code: "847291",
  expires_in: "60 minutes",
  issue_title: "March estimating notes",
  issue_summary: "Addenda discipline, MEP checklists, and turnaround SLAs.",
  offer_title: "Priority turnaround this month",
  offer_detail: "Book a commercial package before month-end and get priority queue + a scope review call.",
  announcement_title: "Expanded MEP capacity",
  announcement_body:
    "We’ve added senior MEP estimators and published clearer turnaround SLAs for commercial packages.",
  message:
    "Bid date is March 28. Looking for CSI Div 3–9 takeoff with unit prices where possible.",
  cta_link: "https://qostaraestimates.com/contact",
  unsubscribe_url: "https://qostaraestimates.com/unsubscribe",
};

const renderers: Record<EmailTemplateId, () => { subject: string; html: string }> = {
  welcome: () => welcomeEmail(sample),
  "quote-request-confirmation": () => quoteRequestConfirmationEmail(sample),
  "estimate-ready": () => estimateReadyEmail(sample),
  "project-update": () =>
    projectUpdateEmail({
      ...sample,
      status: "In review",
      percent_complete: "70",
      update_title: "Primary takeoff complete",
      update_body:
        "We’ve finished Div 3–9 quantities and are validating against Addendum 2.",
    }),
  invoice: () => invoiceEmail(sample),
  "payment-confirmation": () => paymentConfirmationEmail(sample),
  "appointment-confirmation": () => appointmentConfirmationEmail(sample),
  "meeting-reminder": () => meetingReminderEmail(sample),
  "password-reset": () => passwordResetEmail(sample),
  "email-verification": () => emailVerificationEmail(sample),
  newsletter: () => newsletterEmail(sample),
  "promotional-campaign": () => promotionalCampaignEmail(sample),
  "service-announcement": () => serviceAnnouncementEmail(sample),
  "thank-you": () => thankYouEmail(sample),
  "follow-up": () =>
    followUpEmail({
      ...sample,
      follow_up_note:
        "Wanted to check whether you’d like us to price the electrical addendum before Friday.",
    }),
};

const id = (process.argv[2] || "welcome") as EmailTemplateId;

if (!emailTemplates.includes(id)) {
  console.error(`Unknown template "${id}".\nAvailable:\n- ${emailTemplates.join("\n- ")}`);
  process.exit(1);
}

process.env.EMAIL_PREVIEW = "1";

const email = renderers[id]();
const out = join(process.cwd(), `.email-preview-${id}.html`);
writeFileSync(out, email.html, "utf8");
console.log(`Subject: ${email.subject}`);
console.log(`Wrote:   ${out}`);
console.log(`Open:    open "${out}"`);
