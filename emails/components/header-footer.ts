import { getEmailLogoUrl } from "../assets";
import { emailBrand } from "../brand";
import { escapeHtml } from "./ui";

const { colors, fonts, name, url, legalName, social, email, phone, address } =
  emailBrand;

export function emailHeader({
  showNav = true,
}: {
  showNav?: boolean;
} = {}) {
  const nav = [
    { label: "Services", href: `${url}/services` },
    { label: "Pricing", href: `${url}/pricing` },
    { label: "Contact", href: `${url}/contact` },
  ];

  const logoSrc = getEmailLogoUrl();

  return `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td style="padding:28px 32px 20px;border-bottom:1px solid ${colors.border};">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td align="left" valign="middle" style="vertical-align:middle;">
            <a href="${url}" target="_blank" style="text-decoration:none;">
              <img src="${logoSrc}" width="140" height="38" alt="${escapeHtml(name)}" style="display:block;border:0;outline:none;text-decoration:none;height:38px;width:auto;max-width:140px;" />
            </a>
          </td>
          ${
            showNav
              ? `<td align="right" valign="middle" class="hide-on-mobile" style="vertical-align:middle;">
            ${nav
              .map(
                (item) =>
                  `<a href="${item.href}" style="display:inline-block;margin-left:16px;color:${colors.muted};font-family:${fonts.family};font-size:13px;font-weight:600;text-decoration:none;">${escapeHtml(item.label)}</a>`,
              )
              .join("")}
          </td>`
              : ""
          }
        </tr>
      </table>
    </td>
  </tr>
</table>`.trim();
}

export function emailFooter({
  unsubscribeUrl = "{{unsubscribe_url}}",
}: {
  unsubscribeUrl?: string;
} = {}) {
  const socialLinks = [
    { label: "LinkedIn", href: social.linkedin },
    { label: "X", href: social.x },
    { label: "YouTube", href: social.youtube },
    { label: "Facebook", href: social.facebook },
    { label: "Instagram", href: social.instagram },
  ];

  const year = new Date().getFullYear();

  return `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td style="padding:28px 32px 12px;border-top:1px solid ${colors.border};">
      <p style="margin:0 0 14px;color:${colors.muted};font-family:${fonts.family};font-size:13px;line-height:1.6;text-align:center;">
        ${socialLinks
          .map(
            (s) =>
              `<a href="${s.href}" style="color:${colors.muted};text-decoration:none;margin:0 8px;font-weight:600;">${escapeHtml(s.label)}</a>`,
          )
          .join("")}
      </p>
      <p style="margin:0 0 8px;color:${colors.dark};font-family:${fonts.family};font-size:13px;font-weight:700;text-align:center;">${escapeHtml(legalName)}</p>
      <p style="margin:0 0 4px;color:${colors.muted};font-family:${fonts.family};font-size:12px;line-height:1.6;text-align:center;">${escapeHtml(address)}</p>
      <p style="margin:0 0 16px;color:${colors.muted};font-family:${fonts.family};font-size:12px;line-height:1.6;text-align:center;">
        <a href="mailto:${email}" style="color:${colors.muted};text-decoration:none;">${escapeHtml(email)}</a>
        &nbsp;·&nbsp;
        <a href="tel:+14155550182" style="color:${colors.muted};text-decoration:none;">${escapeHtml(phone)}</a>
      </p>
      <p style="margin:0 0 8px;color:${colors.muted};font-family:${fonts.family};font-size:12px;line-height:1.6;text-align:center;">
        <a href="${url}/privacy" style="color:${colors.muted};text-decoration:underline;">Privacy Policy</a>
        &nbsp;·&nbsp;
        <a href="${url}/terms" style="color:${colors.muted};text-decoration:underline;">Terms</a>
        &nbsp;·&nbsp;
        <a href="${escapeHtml(unsubscribeUrl)}" style="color:${colors.muted};text-decoration:underline;">Unsubscribe</a>
      </p>
      <p style="margin:0;color:${colors.muted};font-family:${fonts.family};font-size:12px;text-align:center;">
        © ${year} ${escapeHtml(legalName)}. All rights reserved.
      </p>
    </td>
  </tr>
</table>`.trim();
}
