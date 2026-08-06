import { emailBrand } from "../brand";

const { colors, fonts } = emailBrand;

export function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function nl2br(value: string) {
  return escapeHtml(value).replaceAll("\n", "<br />");
}

/** Bulletproof CTA button with VML fallback for Outlook */
export function emailButton({
  href,
  label,
  variant = "primary",
}: {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "accent" | "success";
}) {
  const backgrounds = {
    primary: colors.primary,
    secondary: colors.white,
    accent: colors.accent,
    success: colors.success,
  };
  const textColors = {
    primary: colors.white,
    secondary: colors.dark,
    accent: colors.dark,
    success: colors.white,
  };
  const borders = {
    primary: colors.primary,
    secondary: colors.border,
    accent: colors.accent,
    success: colors.success,
  };

  const bg = backgrounds[variant];
  const color = textColors[variant];
  const border = borders[variant];

  return `
<!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${escapeHtml(href)}" style="height:48px;v-text-anchor:middle;width:220px;" arcsize="50%" stroke="f" fillcolor="${bg}">
  <w:anchorlock/>
  <center style="color:${color};font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:bold;">
    ${escapeHtml(label)}
  </center>
</v:roundrect>
<![endif]-->
<!--[if !mso]><!-->
<a href="${escapeHtml(href)}" target="_blank" style="display:inline-block;background-color:${bg};border:1px solid ${border};border-radius:999px;color:${color};font-family:${fonts.family};font-size:15px;font-weight:700;line-height:48px;text-align:center;text-decoration:none;padding:0 28px;mso-padding-alt:0;min-width:160px;">
  ${escapeHtml(label)}
</a>
<!--<![endif]-->`.trim();
}

export function emailDivider() {
  return `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0;">
  <tr>
    <td style="padding:8px 0 24px;border:0;">
      <div style="height:1px;background-color:${colors.border};line-height:1px;font-size:1px;">&nbsp;</div>
    </td>
  </tr>
</table>`.trim();
}

export function emailHeading(text: string, as: "h1" | "h2" | "h3" = "h1") {
  const sizes = { h1: "28px", h2: "22px", h3: "18px" };
  const weights = { h1: "700", h2: "700", h3: "600" };
  const margins = { h1: "0 0 12px", h2: "0 0 10px", h3: "0 0 8px" };

  return `<${as} style="margin:${margins[as]};color:${colors.dark};font-family:${fonts.family};font-size:${sizes[as]};font-weight:${weights[as]};line-height:1.3;letter-spacing:-0.02em;">${escapeHtml(text)}</${as}>`;
}

export function emailParagraph(text: string, opts?: { muted?: boolean }) {
  return `<p style="margin:0 0 16px;color:${opts?.muted ? colors.muted : colors.dark};font-family:${fonts.family};font-size:16px;line-height:1.65;">${nl2br(text)}</p>`;
}

export function emailBadge({
  label,
  tone = "primary",
}: {
  label: string;
  tone?: "primary" | "success" | "accent" | "danger";
}) {
  const map = {
    primary: { bg: colors.softBlue, color: colors.primary },
    success: { bg: "#F0FDF4", color: "#15803D" },
    accent: { bg: colors.softAmber, color: "#B45309" },
    danger: { bg: "#FEF2F2", color: colors.danger },
  };
  const t = map[tone];
  return `<span style="display:inline-block;background-color:${t.bg};color:${t.color};font-family:${fonts.family};font-size:12px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;padding:6px 12px;border-radius:999px;">${escapeHtml(label)}</span>`;
}

export function emailInfoRow(label: string, value: string) {
  return `
<tr>
  <td style="padding:10px 0;border-bottom:1px solid ${colors.border};color:${colors.muted};font-family:${fonts.family};font-size:14px;width:38%;vertical-align:top;">${escapeHtml(label)}</td>
  <td style="padding:10px 0;border-bottom:1px solid ${colors.border};color:${colors.dark};font-family:${fonts.family};font-size:14px;font-weight:600;vertical-align:top;">${escapeHtml(value)}</td>
</tr>`.trim();
}

export function emailInfoTable(rows: Array<[string, string]>) {
  return `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:8px 0 24px;">
  ${rows.map(([label, value]) => emailInfoRow(label, value)).join("")}
</table>`.trim();
}

export type FeatureCard = {
  title: string;
  description: string;
  icon?: string;
};

export function emailFeatureCards(cards: FeatureCard[]) {
  const rows: string[] = [];
  for (let i = 0; i < cards.length; i += 2) {
    const left = cards[i];
    const right = cards[i + 1];
    rows.push(`
<tr>
  <td width="50%" valign="top" style="padding:0 6px 12px 0;">
    ${featureCardInner(left)}
  </td>
  <td width="50%" valign="top" style="padding:0 0 12px 6px;">
    ${right ? featureCardInner(right) : "&nbsp;"}
  </td>
</tr>`);
  }

  return `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="stack-on-mobile" style="margin:8px 0 24px;">
  ${rows.join("")}
</table>`.trim();
}

function featureCardInner(card: FeatureCard) {
  return `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${colors.white};border:1px solid ${colors.border};border-radius:16px;">
  <tr>
    <td style="padding:20px;">
      ${
        card.icon
          ? `<div style="width:40px;height:40px;border-radius:12px;background-color:${colors.softBlue};color:${colors.primary};font-family:${fonts.family};font-size:18px;font-weight:700;line-height:40px;text-align:center;margin-bottom:12px;">${escapeHtml(card.icon)}</div>`
          : ""
      }
      <p style="margin:0 0 6px;color:${colors.dark};font-family:${fonts.family};font-size:16px;font-weight:700;line-height:1.35;">${escapeHtml(card.title)}</p>
      <p style="margin:0;color:${colors.muted};font-family:${fonts.family};font-size:14px;line-height:1.55;">${escapeHtml(card.description)}</p>
    </td>
  </tr>
</table>`.trim();
}

export function emailHighlightBox({
  title,
  body,
  tone = "primary",
}: {
  title?: string;
  body: string;
  tone?: "primary" | "accent" | "success";
}) {
  const borders = {
    primary: colors.primary,
    accent: colors.accent,
    success: colors.success,
  };
  const bgs = {
    primary: colors.softBlue,
    accent: colors.softAmber,
    success: "#F0FDF4",
  };

  return `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 24px;">
  <tr>
    <td style="background-color:${bgs[tone]};border-left:4px solid ${borders[tone]};border-radius:12px;padding:18px 20px;">
      ${title ? `<p style="margin:0 0 6px;color:${colors.dark};font-family:${fonts.family};font-size:15px;font-weight:700;">${escapeHtml(title)}</p>` : ""}
      <p style="margin:0;color:${colors.dark};font-family:${fonts.family};font-size:15px;line-height:1.6;">${nl2br(body)}</p>
    </td>
  </tr>
</table>`.trim();
}

export function emailStats(
  stats: Array<{ value: string; label: string }> = [...emailBrand.stats],
) {
  const cells = stats
    .slice(0, 4)
    .map(
      (stat) => `
<td width="25%" valign="top" style="padding:8px;text-align:center;" class="stack-stat">
  <p style="margin:0 0 4px;color:${colors.dark};font-family:${fonts.family};font-size:22px;font-weight:700;letter-spacing:-0.02em;line-height:1.2;">${escapeHtml(stat.value)}</p>
  <p style="margin:0;color:${colors.muted};font-family:${fonts.family};font-size:12px;line-height:1.4;">${escapeHtml(stat.label)}</p>
</td>`,
    )
    .join("");

  return `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:8px 0 28px;background-color:${colors.background};border:1px solid ${colors.border};border-radius:16px;">
  <tr>
    <td style="padding:16px 8px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="stack-on-mobile">
        <tr>${cells}</tr>
      </table>
    </td>
  </tr>
</table>`.trim();
}

export function emailTestimonial(
  data: typeof emailBrand.testimonial = emailBrand.testimonial,
) {
  const stars = "★★★★★".slice(0, data.rating);
  return `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:8px 0 28px;background-color:${colors.white};border:1px solid ${colors.border};border-radius:16px;">
  <tr>
    <td style="padding:24px;">
      <p style="margin:0 0 12px;color:${colors.accent};font-size:16px;letter-spacing:2px;">${stars}</p>
      <p style="margin:0 0 18px;color:${colors.dark};font-family:${fonts.family};font-size:17px;font-style:italic;line-height:1.6;">“${escapeHtml(data.quote)}”</p>
      <table role="presentation" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="width:44px;height:44px;border-radius:999px;background-color:${colors.softBlue};color:${colors.primary};font-family:${fonts.family};font-size:14px;font-weight:700;text-align:center;line-height:44px;vertical-align:middle;">
            ${escapeHtml(data.name.split(" ").map((n: string) => n[0]).join("").slice(0, 2))}
          </td>
          <td style="padding-left:12px;vertical-align:middle;">
            <p style="margin:0;color:${colors.dark};font-family:${fonts.family};font-size:14px;font-weight:700;">${escapeHtml(data.name)}</p>
            <p style="margin:2px 0 0;color:${colors.muted};font-family:${fonts.family};font-size:13px;">${escapeHtml(data.role)}, ${escapeHtml(data.company)}</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`.trim();
}

export function emailCtaBand({
  headline,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  headline: string;
  body: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:8px 0 8px;background:linear-gradient(135deg, ${colors.dark} 0%, #1E3A5F 100%);border-radius:20px;">
  <tr>
    <td style="padding:32px 28px;text-align:center;">
      <h2 style="margin:0 0 10px;color:${colors.white};font-family:${fonts.family};font-size:22px;font-weight:700;line-height:1.3;letter-spacing:-0.02em;">${escapeHtml(headline)}</h2>
      <p style="margin:0 0 22px;color:#CBD5E1;font-family:${fonts.family};font-size:15px;line-height:1.6;">${escapeHtml(body)}</p>
      ${emailButton({ href: primaryHref, label: primaryLabel, variant: "primary" })}
      ${
        secondaryHref && secondaryLabel
          ? `<div style="height:12px;line-height:12px;font-size:12px;">&nbsp;</div>
             <a href="${escapeHtml(secondaryHref)}" style="color:#93C5FD;font-family:${fonts.family};font-size:14px;font-weight:600;text-decoration:none;">${escapeHtml(secondaryLabel)} →</a>`
          : ""
      }
    </td>
  </tr>
</table>`.trim();
}

export function emailContactBlock() {
  const { phone, email, url, address, hours, phoneHref } = emailBrand;
  const items = [
    ["Phone", phone, phoneHref],
    ["Email", email, `mailto:${email}`],
    ["Website", url.replace(/^https?:\/\//, ""), url],
    ["Office", address, undefined],
    ["Hours", hours, undefined],
  ] as const;

  return `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:24px 0;background-color:${colors.background};border:1px solid ${colors.border};border-radius:16px;">
  <tr>
    <td style="padding:22px 24px;">
      <p style="margin:0 0 14px;color:${colors.dark};font-family:${fonts.family};font-size:15px;font-weight:700;">Contact</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        ${items
          .map(
            ([label, value, href]) => `
          <tr>
            <td style="padding:6px 0;color:${colors.muted};font-family:${fonts.family};font-size:13px;width:88px;vertical-align:top;">${label}</td>
            <td style="padding:6px 0;color:${colors.dark};font-family:${fonts.family};font-size:13px;font-weight:600;vertical-align:top;">
              ${href ? `<a href="${href}" style="color:${colors.dark};text-decoration:none;">${escapeHtml(value)}</a>` : escapeHtml(value)}
            </td>
          </tr>`,
          )
          .join("")}
      </table>
    </td>
  </tr>
</table>`.trim();
}
