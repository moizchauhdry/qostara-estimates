import { emailBrand } from "../brand";
import {
  emailBadge,
  emailButton,
  escapeHtml,
  nl2br,
} from "./ui";

const { colors, fonts } = emailBrand;

export function emailHeroSection({
  badge,
  badgeTone = "primary",
  headline,
  description,
  primaryCta,
  secondaryCta,
  imageUrl,
  imageAlt = "Construction estimating",
}: {
  badge?: string;
  badgeTone?: "primary" | "success" | "accent" | "danger";
  headline: string;
  description: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  imageUrl?: string;
  imageAlt?: string;
}) {
  return `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 28px;">
  <tr>
    <td>
      ${badge ? `<div style="margin:0 0 14px;">${emailBadge({ label: badge, tone: badgeTone })}</div>` : ""}
      <h1 class="hero-title" style="margin:0 0 12px;color:${colors.dark};font-family:${fonts.family};font-size:32px;font-weight:700;line-height:1.2;letter-spacing:-0.03em;">${escapeHtml(headline)}</h1>
      <p style="margin:0 0 22px;color:${colors.muted};font-family:${fonts.family};font-size:16px;line-height:1.65;">${nl2br(description)}</p>
      ${
        primaryCta
          ? `<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
              <td style="padding-right:10px;">${emailButton(primaryCta)}</td>
              ${
                secondaryCta
                  ? `<td>${emailButton({ ...secondaryCta, variant: "secondary" })}</td>`
                  : ""
              }
            </tr></table>`
          : ""
      }
      ${
        imageUrl
          ? `<div style="margin-top:24px;">
              <img class="fluid" src="${escapeHtml(imageUrl)}" width="536" alt="${escapeHtml(imageAlt)}" style="display:block;width:100%;max-width:536px;height:auto;border-radius:16px;border:1px solid ${colors.border};" />
            </div>`
          : ""
      }
    </td>
  </tr>
</table>`.trim();
}
