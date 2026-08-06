import { emailBrand } from "../brand";
import {
  emailContactBlock,
  emailDocument,
  emailHeroSection,
  emailHighlightBox,
  emailInfoTable,
  emailParagraph,
} from "../components";
import { firstName, withDefaults, type ProjectEmailVars } from "../types";

export type ProjectUpdateVars = ProjectEmailVars & {
  update_title?: string;
  update_body?: string;
  status?: string;
  percent_complete?: string;
};

export function projectUpdateEmail(vars: ProjectUpdateVars = {}) {
  const v = withDefaults(vars);
  const name = firstName(v.customer_name);

  const html = emailDocument({
    preheader: `${v.update_title || "Project update"}${v.project_name ? ` — ${v.project_name}` : ""}.`,
    title: "Project update",
    unsubscribeUrl: v.unsubscribe_url,
    children: [
      emailHeroSection({
        badge: v.status || "In progress",
        badgeTone: "primary",
        headline: v.update_title || "Here’s where things stand.",
        description: `Hi ${name} — a quick update${v.project_name ? ` on ${v.project_name}` : " on your estimate"}.`,
        primaryCta: { href: v.cta_link, label: "Open project" },
      }),
      emailInfoTable([
        ["Project", v.project_name || "—"],
        ["Estimate #", v.estimate_number || "—"],
        ["Status", v.status || "In progress"],
        ["Progress", v.percent_complete ? `${v.percent_complete}%` : "—"],
        ["Date", v.date],
      ]),
      emailHighlightBox({
        title: "Update",
        body:
          v.update_body ||
          "We’ve completed the primary takeoff and are validating quantities against the latest addendum. You’ll receive the package on the agreed delivery date.",
        tone: "primary",
      }),
      emailParagraph(
        "Questions or a new addendum? Reply to this email and we’ll fold it into the set.",
        { muted: true },
      ),
      emailContactBlock(),
    ].join("\n"),
  });

  return {
    subject: `Update${v.project_name ? `: ${v.project_name}` : ""} — ${emailBrand.name}`,
    html,
    text: `Hi ${name},\n\n${v.update_title || "Project update"}\n\n${v.update_body || ""}\n\nOpen: ${v.cta_link}`,
  };
}
