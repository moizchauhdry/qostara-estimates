import { emailBrand } from "../brand";
import {
  emailContactBlock,
  emailCtaBand,
  emailDocument,
  emailHeroSection,
  emailHighlightBox,
  emailInfoTable,
  emailParagraph,
  emailTestimonial,
} from "../components";
import { firstName, withDefaults, type ProjectEmailVars } from "../types";

export type EstimateReadyVars = ProjectEmailVars & {
  summary?: string;
  download_link?: string;
};

export function estimateReadyEmail(vars: EstimateReadyVars = {}) {
  const v = withDefaults(vars);
  const name = firstName(v.customer_name);
  const download = v.download_link || v.cta_link;

  const html = emailDocument({
    preheader: `Your estimate${v.estimate_number ? ` ${v.estimate_number}` : ""} for ${v.project_name || "your project"} is ready to review.`,
    title: "Your estimate is ready",
    unsubscribeUrl: v.unsubscribe_url,
    children: [
      emailHeroSection({
        badge: "Estimate ready",
        badgeTone: "success",
        headline: `${name}, your numbers are ready.`,
        description: `We’ve finished the package${v.project_name ? ` for ${v.project_name}` : ""}. Review the takeoff, assumptions, and exclusions — then tell us if you need revisions before bid day.`,
        primaryCta: { href: download, label: "View estimate" },
        secondaryCta: {
          href: `mailto:${emailBrand.email}?subject=Revision%20request%20${encodeURIComponent(v.estimate_number || "")}`,
          label: "Request revisions",
        },
        imageUrl:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Estimator reviewing bid documents on a desk",
      }),
      emailInfoTable([
        ["Estimate #", v.estimate_number || "—"],
        ["Project", v.project_name || "—"],
        ["Type", v.project_type || "—"],
        ["Delivered", v.date],
        ["Bid date", v.bid_date || "—"],
      ]),
      emailHighlightBox({
        title: "What’s included",
        body:
          v.summary ||
          "Quantity takeoff, unit pricing where scoped, marked-up assumptions, and a clear exclusion list so your bid team can move fast.",
        tone: "primary",
      }),
      emailTestimonial(),
      emailCtaBand({
        headline: "Need a walkthrough?",
        body: "Book 15 minutes with the estimator who worked your set.",
        primaryHref: v.cta_link,
        primaryLabel: "Schedule a call",
      }),
      emailParagraph(
        "This estimate is confidential and intended for your bid team only.",
        { muted: true },
      ),
      emailContactBlock(),
    ].join("\n"),
  });

  return {
    subject: `Estimate ready${v.estimate_number ? `: ${v.estimate_number}` : ""}${v.project_name ? ` — ${v.project_name}` : ""}`,
    html,
    text: `Hi ${name},\n\nYour estimate is ready: ${download}\n\nEstimate #: ${v.estimate_number || "—"}\nProject: ${v.project_name || "—"}`,
  };
}
