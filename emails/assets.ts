import { readFileSync } from "node:fs";
import { join } from "node:path";
import { siteConfig } from "@/lib/site";

/** Content-ID used for the inline logo attachment in outbound mail */
export const LOGO_CONTENT_ID = "qostara-logo";

function publicBrandPath(filename: string) {
  return join(process.cwd(), "public", "brand", filename);
}

function hostedAssetBase() {
  if (process.env.EMAIL_ASSET_BASE_URL) {
    return process.env.EMAIL_ASSET_BASE_URL.replace(/\/$/, "");
  }

  // Vercel provides these at runtime — prefer production URL when present
  const vercelHost =
    process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  if (vercelHost) {
    return `https://${vercelHost.replace(/^https?:\/\//, "")}`;
  }

  if (process.env.NODE_ENV === "production") {
    return siteConfig.url.replace(/\/$/, "");
  }

  return null;
}

/**
 * Logo URL for email HTML.
 * On Vercel/production we use a public HTTPS URL (filesystem CID often fails
 * in serverless). Locally we fall back to an inline CID attachment.
 */
export function getEmailLogoUrl(options?: { preview?: boolean }) {
  const preview = options?.preview || process.env.EMAIL_PREVIEW === "1";

  if (preview) {
    const buffer = readFileSync(publicBrandPath("logo.png"));
    return `data:image/png;base64,${buffer.toString("base64")}`;
  }

  if (process.env.EMAIL_LOGO_URL) {
    return process.env.EMAIL_LOGO_URL;
  }

  const base = hostedAssetBase();
  if (base) {
    return `${base}/brand/logo.png`;
  }

  return `cid:${LOGO_CONTENT_ID}`;
}

export function usesInlineLogo() {
  return getEmailLogoUrl().startsWith("cid:");
}

/** Inline logo attachment for SMTP (`cid` → `cid:qostara-logo` in HTML) */
export function getInlineLogoAttachment() {
  try {
    return {
      filename: "logo.png",
      content: readFileSync(publicBrandPath("logo.png")),
      contentType: "image/png" as const,
      cid: LOGO_CONTENT_ID,
    };
  } catch (error) {
    console.error("Could not read email logo from disk:", error);
    return null;
  }
}
