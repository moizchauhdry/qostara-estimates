import { readFileSync } from "node:fs";
import { join } from "node:path";

/** Content-ID used for the inline logo attachment in outbound mail */
export const LOGO_CONTENT_ID = "qostara-logo";

function publicBrandPath(filename: string) {
  return join(process.cwd(), "public", "brand", filename);
}

/**
 * Logo URL for email HTML.
 * Prefer a public HTTPS URL when the site (or CDN) is live; otherwise use a
 * CID so Resend can embed `public/brand/logo.png` as an inline attachment.
 */
export function getEmailLogoUrl(options?: { preview?: boolean }) {
  const preview =
    options?.preview || process.env.EMAIL_PREVIEW === "1";

  if (preview) {
    const buffer = readFileSync(publicBrandPath("logo.png"));
    return `data:image/png;base64,${buffer.toString("base64")}`;
  }

  const hosted =
    process.env.EMAIL_LOGO_URL ||
    (process.env.EMAIL_ASSET_BASE_URL
      ? `${process.env.EMAIL_ASSET_BASE_URL.replace(/\/$/, "")}/brand/logo.png`
      : null);

  if (hosted) return hosted;

  return `cid:${LOGO_CONTENT_ID}`;
}

/** Inline logo attachment for Resend (`contentId` → `cid:qostara-logo` in HTML) */
export function getInlineLogoAttachment() {
  return {
    filename: "logo.png",
    content: readFileSync(publicBrandPath("logo.png")),
    contentType: "image/png" as const,
    contentId: LOGO_CONTENT_ID,
  };
}
