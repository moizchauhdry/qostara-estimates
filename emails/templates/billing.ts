import { emailBrand } from "../brand";
import {
  emailButton,
  emailContactBlock,
  emailDocument,
  emailHeroSection,
  emailInfoTable,
  emailParagraph,
} from "../components";
import { firstName, withDefaults, type MoneyEmailVars } from "../types";

export type InvoiceEmailVars = MoneyEmailVars;

export function invoiceEmail(vars: InvoiceEmailVars = {}) {
  const v = withDefaults(vars);
  const name = firstName(v.customer_name);

  const html = emailDocument({
    preheader: `Invoice ${v.invoice_number || ""} for ${v.amount || "your project"} is ready. Due ${v.due_date || "on receipt"}.`,
    title: "Invoice",
    showNav: false,
    unsubscribeUrl: v.unsubscribe_url,
    children: [
      emailHeroSection({
        badge: "Invoice",
        badgeTone: "accent",
        headline: `Invoice ${v.invoice_number || ""}`.trim(),
        description: `Hi ${name}, thanks for partnering with ${emailBrand.name}. Your invoice is ready for payment.`,
        primaryCta: { href: v.cta_link, label: "Pay invoice" },
        secondaryCta: {
          href: v.cta_link,
          label: "Download PDF",
        },
      }),
      emailInfoTable([
        ["Invoice #", v.invoice_number || "—"],
        ["Estimate #", v.estimate_number || "—"],
        ["Project", v.project_name || "—"],
        ["Amount due", v.amount || "—"],
        ["Issued", v.date],
        ["Due date", v.due_date || "Upon receipt"],
      ]),
      `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 24px;"><tr><td align="center">${emailButton({ href: v.cta_link, label: "Pay now", variant: "primary" })}</td></tr></table>`,
      emailParagraph(
        "Payments are processed securely. If your AP team needs a W-9 or remittance details, reply to this email.",
        { muted: true },
      ),
      emailContactBlock(),
    ].join("\n"),
  });

  return {
    subject: `Invoice ${v.invoice_number || ""} — ${v.amount || emailBrand.name}`,
    html,
    text: `Hi ${name},\n\nInvoice ${v.invoice_number}: ${v.amount}\nDue: ${v.due_date || "Upon receipt"}\nPay: ${v.cta_link}`,
  };
}

export function paymentConfirmationEmail(vars: MoneyEmailVars = {}) {
  const v = withDefaults(vars);
  const name = firstName(v.customer_name);

  const html = emailDocument({
    preheader: `Payment received${v.amount ? ` — ${v.amount}` : ""}. Thank you.`,
    title: "Payment confirmed",
    showNav: false,
    unsubscribeUrl: v.unsubscribe_url,
    children: [
      emailHeroSection({
        badge: "Paid",
        badgeTone: "success",
        headline: "Payment received. Thank you.",
        description: `Hi ${name}, we’ve confirmed your payment${v.amount ? ` of ${v.amount}` : ""}. A receipt is available anytime from your project link.`,
        primaryCta: { href: v.cta_link, label: "View receipt" },
      }),
      emailInfoTable([
        ["Invoice #", v.invoice_number || "—"],
        ["Amount", v.amount || "—"],
        ["Method", v.payment_method || "—"],
        ["Project", v.project_name || "—"],
        ["Date", v.date],
      ]),
      emailParagraph(
        "Keep this email for your records. Questions about the receipt? Just reply.",
        { muted: true },
      ),
      emailContactBlock(),
    ].join("\n"),
  });

  return {
    subject: `Payment confirmed${v.amount ? ` — ${v.amount}` : ""}`,
    html,
    text: `Hi ${name},\n\nPayment confirmed: ${v.amount}\nInvoice: ${v.invoice_number}\nReceipt: ${v.cta_link}`,
  };
}
