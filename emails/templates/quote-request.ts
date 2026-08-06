import { emailBrand } from "../brand";
import {
  emailContactBlock,
  emailDocument,
  emailHeroSection,
  emailHighlightBox,
  emailInfoTable,
  emailParagraph,
} from "../components";
import {
  firstName,
  withDefaults,
  type ProjectEmailVars,
} from "../types";

export type QuoteRequestConfirmationVars = ProjectEmailVars & {
  message?: string;
  phone?: string;
  drawing_filename?: string;
};

export function quoteRequestConfirmationEmail(
  vars: QuoteRequestConfirmationVars = {},
) {
  const v = withDefaults(vars);
  const name = firstName(v.customer_name);

  const rows: Array<[string, string]> = [
    ["Reference date", v.date],
    ["Project type", v.project_type || "—"],
    ["Company", v.company_name || "—"],
  ];
  if (v.project_name) rows.push(["Project", v.project_name]);
  if (v.phone) rows.push(["Phone", v.phone]);
  if (v.drawing_filename) rows.push(["Upload", v.drawing_filename]);

  const html = emailDocument({
    preheader: `We received your enquiry${v.project_type ? ` for ${v.project_type}` : ""}. Expect a reply within one business day.`,
    title: "We received your request",
    unsubscribeUrl: v.unsubscribe_url,
    children: [
      emailHeroSection({
        badge: "Request received",
        badgeTone: "success",
        headline: `Thanks, ${name} — you’re in the queue.`,
        description:
          "Our team is reviewing your details. A senior estimator will confirm scope, timeline, and next steps within one business day.",
        primaryCta: { href: v.cta_link, label: "Add more details" },
        secondaryCta: {
          href: `mailto:${emailBrand.email}`,
          label: "Email us",
        },
      }),
      emailInfoTable(rows),
      v.message
        ? emailHighlightBox({
            title: "Your message",
            body: v.message,
            tone: "primary",
          })
        : "",
      emailParagraph(
        "If anything is urgent — bid date, missing sheets, or a walkthrough — reply to this email and we’ll prioritize.",
        { muted: true },
      ),
      emailContactBlock(),
    ].join("\n"),
  });

  return {
    subject: `We received your estimate request — ${emailBrand.name}`,
    html,
    text: `Hi ${name},\n\nWe received your estimate request. Expect a reply within one business day.\n\n${emailBrand.email} · ${emailBrand.phone}`,
  };
}

/** Internal notification for the Qostara inbox */
export function internalQuoteNotificationEmail(
  vars: QuoteRequestConfirmationVars & { email?: string },
) {
  const v = withDefaults(vars);
  const rows: Array<[string, string]> = [
    ["Name", v.customer_name || "—"],
    ["Email", vars.email || "—"],
    ["Company", v.company_name || "—"],
    ["Phone", vars.phone || "—"],
    ["Project type", v.project_type || "—"],
    ["Date", v.date],
  ];
  if (vars.drawing_filename) rows.push(["Drawing", vars.drawing_filename]);

  const html = emailDocument({
    preheader: `New enquiry from ${v.customer_name || "a prospect"} — ${v.project_type || "estimate request"}`,
    title: "New contact enquiry",
    showNav: false,
    unsubscribeUrl: v.unsubscribe_url,
    children: [
      emailHeroSection({
        badge: "New enquiry",
        badgeTone: "accent",
        headline: "A new estimate request just landed.",
        description: `${v.customer_name || "Someone"} submitted the contact form. Reply from your inbox — reply-to is set to the prospect.`,
        primaryCta: {
          href: vars.email ? `mailto:${vars.email}` : v.cta_link,
          label: "Reply to prospect",
        },
      }),
      emailInfoTable(rows),
      vars.message
        ? emailHighlightBox({
            title: "Message",
            body: vars.message,
            tone: "accent",
          })
        : "",
    ].join("\n"),
  });

  return {
    subject: `New enquiry: ${v.project_type || "Contact"} — ${v.customer_name || "Unknown"}`,
    html,
    text: `New enquiry from ${v.customer_name}\nEmail: ${vars.email}\nType: ${v.project_type}\n\n${vars.message || ""}`,
  };
}
