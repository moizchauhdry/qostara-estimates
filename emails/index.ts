/**
 * Qostara email template system
 *
 * Table-based, inline-CSS HTML emails with Outlook VML buttons.
 * Import a template function, pass variables, send `{ subject, html, text }` via SMTP.
 */

export { emailBrand } from "./brand";
export {
  getEmailLogoUrl,
  getInlineLogoAttachment,
  usesInlineLogo,
  LOGO_CONTENT_ID,
} from "./assets";
export * from "./components";
export * from "./types";

export { welcomeEmail } from "./templates/welcome";
export {
  quoteRequestConfirmationEmail,
  internalQuoteNotificationEmail,
} from "./templates/quote-request";
export { estimateReadyEmail } from "./templates/estimate-ready";
export { projectUpdateEmail } from "./templates/project-update";
export { invoiceEmail, paymentConfirmationEmail } from "./templates/billing";
export {
  appointmentConfirmationEmail,
  meetingReminderEmail,
} from "./templates/meetings";
export { passwordResetEmail, emailVerificationEmail } from "./templates/auth";
export {
  newsletterEmail,
  promotionalCampaignEmail,
  serviceAnnouncementEmail,
} from "./templates/marketing";
export { thankYouEmail, followUpEmail } from "./templates/relationship";

export const emailTemplates = [
  "welcome",
  "quote-request-confirmation",
  "estimate-ready",
  "project-update",
  "invoice",
  "payment-confirmation",
  "appointment-confirmation",
  "meeting-reminder",
  "password-reset",
  "email-verification",
  "newsletter",
  "promotional-campaign",
  "service-announcement",
  "thank-you",
  "follow-up",
] as const;

export type EmailTemplateId = (typeof emailTemplates)[number];
