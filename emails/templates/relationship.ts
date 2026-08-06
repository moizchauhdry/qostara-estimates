import { emailBrand } from "../brand";
import {
  emailContactBlock,
  emailCtaBand,
  emailDocument,
  emailHeroSection,
  emailParagraph,
  emailStats,
  emailTestimonial,
} from "../components";
import { firstName, withDefaults, type ProjectEmailVars } from "../types";

export function thankYouEmail(vars: ProjectEmailVars = {}) {
  const v = withDefaults(vars);
  const name = firstName(v.customer_name);

  const html = emailDocument({
    preheader: `Thank you for choosing ${emailBrand.name}${v.project_name ? ` for ${v.project_name}` : ""}.`,
    title: "Thank you",
    unsubscribeUrl: v.unsubscribe_url,
    children: [
      emailHeroSection({
        badge: "Thank you",
        badgeTone: "success",
        headline: `Thank you, ${name}.`,
        description: `We appreciate the trust${v.project_name ? ` on ${v.project_name}` : ""}. If the estimate helped you win — or if you need a follow-up package — we’re ready for the next set.`,
        primaryCta: { href: v.cta_link, label: "Start another project" },
        secondaryCta: {
          href: `${emailBrand.url}/contact`,
          label: "Leave feedback",
        },
        imageUrl:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Modern commercial building exterior",
      }),
      emailStats(),
      emailTestimonial(),
      emailCtaBand({
        headline: "Refer a GC or trade partner",
        body: "Know a team that needs cleaner takeoffs? Send them our way.",
        primaryHref: `${emailBrand.url}/contact`,
        primaryLabel: "Share Qostara",
      }),
      emailContactBlock(),
    ].join("\n"),
  });

  return {
    subject: `Thank you from ${emailBrand.name}`,
    html,
    text: `Hi ${name},\n\nThank you for working with ${emailBrand.name}.\n\nStart another project: ${v.cta_link}`,
  };
}

export function followUpEmail(vars: ProjectEmailVars & { follow_up_note?: string } = {}) {
  const v = withDefaults(vars);
  const name = firstName(v.customer_name);

  const html = emailDocument({
    preheader: `Checking in${v.project_name ? ` on ${v.project_name}` : ""} — anything else you need before bid day?`,
    title: "Following up",
    unsubscribeUrl: v.unsubscribe_url,
    children: [
      emailHeroSection({
        badge: "Follow-up",
        headline: `Quick check-in, ${name}.`,
        description:
          vars.follow_up_note ||
          `Wanted to follow up${v.project_name ? ` on ${v.project_name}` : " on your recent enquiry"}. If you have addenda, a tighter bid date, or another trade to price, we can jump back in.`,
        primaryCta: { href: v.cta_link, label: "Reply / continue" },
        secondaryCta: {
          href: `mailto:${emailBrand.email}`,
          label: "Email the team",
        },
      }),
      emailParagraph(
        "No pressure — if the timing isn’t right, we’ll keep the door open for your next pursuit.",
        { muted: true },
      ),
      emailCtaBand({
        headline: "Still bidding this month?",
        body: "Send the latest set and we’ll confirm turnaround today.",
        primaryHref: `${emailBrand.url}/contact`,
        primaryLabel: "Send drawings",
      }),
      emailContactBlock(),
    ].join("\n"),
  });

  return {
    subject: `Following up${v.project_name ? ` — ${v.project_name}` : ""} | ${emailBrand.name}`,
    html,
    text: `Hi ${name},\n\n${vars.follow_up_note || "Just checking in."}\n\nContinue: ${v.cta_link}`,
  };
}
