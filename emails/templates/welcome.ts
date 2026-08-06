import { emailBrand } from "../brand";
import {
  emailContactBlock,
  emailCtaBand,
  emailDocument,
  emailFeatureCards,
  emailHeroSection,
  emailParagraph,
  emailStats,
  emailTestimonial,
} from "../components";
import { firstName, withDefaults, type BaseEmailVars } from "../types";

export type WelcomeEmailVars = BaseEmailVars;

export function welcomeEmail(vars: WelcomeEmailVars = {}) {
  const v = withDefaults(vars);
  const name = firstName(v.customer_name);

  const html = emailDocument({
    preheader: `Welcome to ${emailBrand.name} — precise estimates that help you win more bids.`,
    title: `Welcome to ${emailBrand.name}`,
    unsubscribeUrl: v.unsubscribe_url,
    children: [
      emailHeroSection({
        badge: "Welcome",
        headline: `Glad you’re here, ${name}.`,
        description: `You’re set up with ${emailBrand.name}. From quantity takeoffs to bid-ready packages, we turn drawings into numbers you can trust.`,
        primaryCta: { href: v.cta_link, label: "Start a project" },
        secondaryCta: {
          href: `${emailBrand.url}/services`,
          label: "Explore services",
        },
        imageUrl:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Architect reviewing construction drawings",
      }),
      emailFeatureCards([
        {
          icon: "01",
          title: "Submit drawings",
          description: "PDF, DWG, or Revit — we scope the set before work begins.",
        },
        {
          icon: "02",
          title: "Get bid-ready numbers",
          description: "Clear takeoffs, assumptions, and exclusions your team can defend.",
        },
        {
          icon: "03",
          title: "Win with confidence",
          description: "Faster turnaround and fewer surprises between bid and buyout.",
        },
        {
          icon: "04",
          title: "Talk to estimators",
          description: "Senior reviewers on every package — not a black-box spreadsheet.",
        },
      ]),
      emailStats(),
      emailTestimonial(),
      emailCtaBand({
        headline: "Ready when you are",
        body: "Share a set and we’ll confirm scope, timeline, and fee before any work starts.",
        primaryHref: v.cta_link,
        primaryLabel: "Request an estimate",
        secondaryHref: `mailto:${emailBrand.email}`,
        secondaryLabel: "Email the team",
      }),
      emailContactBlock(),
    ].join("\n"),
  });

  return {
    subject: `Welcome to ${emailBrand.name}, ${name}`,
    html,
    text: `Welcome to ${emailBrand.name}, ${name}.\n\nStart a project: ${v.cta_link}\n\n${emailBrand.email} · ${emailBrand.phone}`,
  };
}
