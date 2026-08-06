import { emailBrand } from "../brand";
import { emailFooter, emailHeader } from "./header-footer";
import { escapeHtml } from "./ui";

const { colors, fonts, url, name } = emailBrand;

export type EmailDocumentOptions = {
  preheader: string;
  title?: string;
  children: string;
  showNav?: boolean;
  unsubscribeUrl?: string;
};

/**
 * Outer shell: MSO conditionals, fluid container, mobile CSS.
 * Compatible with Gmail, Apple Mail, Outlook, Yahoo, Outlook 365.
 */
export function emailDocument({
  preheader,
  title = name,
  children,
  showNav = true,
  unsubscribeUrl,
}: EmailDocumentOptions) {
  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="x-apple-disable-message-reformatting" />
  <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no" />
  <meta name="color-scheme" content="light" />
  <meta name="supported-color-schemes" content="light" />
  <title>${escapeHtml(title)}</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style type="text/css">
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
    a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; }
    u + #body a { color: inherit; text-decoration: none; }
    #MessageViewBody a { color: inherit; text-decoration: none; }
    .email-container { width: 100% !important; max-width: 600px !important; }
    @media only screen and (max-width: 620px) {
      .email-container { width: 100% !important; }
      .fluid { max-width: 100% !important; height: auto !important; }
      .stack-on-mobile { width: 100% !important; display: block !important; }
      .stack-on-mobile td { display: block !important; width: 100% !important; box-sizing: border-box !important; padding-left: 0 !important; padding-right: 0 !important; }
      .stack-stat { display: block !important; width: 50% !important; float: left !important; }
      .hide-on-mobile { display: none !important; max-height: 0 !important; overflow: hidden !important; }
      .px-mobile { padding-left: 20px !important; padding-right: 20px !important; }
      .hero-title { font-size: 26px !important; line-height: 1.25 !important; }
    }
  </style>
</head>
<body id="body" style="margin:0;padding:0;background-color:${colors.background};">
  <div style="display:none;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;">
    ${escapeHtml(preheader)}
    ${"&nbsp;&zwnj;".repeat(40)}
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${colors.background};">
    <tr>
      <td align="center" style="padding:24px 12px;">
        <!--[if mso]>
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0"><tr><td>
        <![endif]-->
        <table role="presentation" class="email-container" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;background-color:${colors.white};border:1px solid ${colors.border};border-radius:20px;overflow:hidden;">
          <tr>
            <td>
              ${emailHeader({ showNav })}
            </td>
          </tr>
          <tr>
            <td class="px-mobile" style="padding:32px 32px 8px;font-family:${fonts.family};color:${colors.dark};">
              ${children}
            </td>
          </tr>
          <tr>
            <td>
              ${emailFooter({ unsubscribeUrl })}
            </td>
          </tr>
        </table>
        <!--[if mso]></td></tr></table><![endif]-->
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;">
          <tr>
            <td style="padding:16px 8px 8px;text-align:center;">
              <p style="margin:0;color:${colors.muted};font-family:${fonts.family};font-size:11px;">
                You’re receiving this email from <a href="${url}" style="color:${colors.muted};">${escapeHtml(name)}</a>.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`.trim();
}
