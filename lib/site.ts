import { siteValues } from "@/lib/site-values";

/**
 * Public site details come from lib/site-values.ts. A NEXT_PUBLIC_* variable
 * set at build time overrides the matching value; empty or whitespace-only
 * values are ignored, so a blank line in `.env` never wipes out a value.
 *
 * NEXT_PUBLIC_* variables must be referenced literally (process.env.NEXT_PUBLIC_X)
 * so Next.js can inline them at build time — never index process.env dynamically.
 */
function envOr(value: string | undefined, fallback: string) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : fallback;
}

const phone = envOr(process.env.NEXT_PUBLIC_PHONE, siteValues.phone);
const addressLocality = envOr(
  process.env.NEXT_PUBLIC_ADDRESS_LOCALITY,
  siteValues.address.locality,
);
const addressRegion = envOr(
  process.env.NEXT_PUBLIC_ADDRESS_REGION,
  siteValues.address.region,
);
const addressPostalCode = envOr(
  process.env.NEXT_PUBLIC_ADDRESS_POSTAL_CODE,
  siteValues.address.postalCode,
);

export const siteConfig = {
  name: envOr(process.env.NEXT_PUBLIC_SITE_NAME, siteValues.name),
  legalName: envOr(process.env.NEXT_PUBLIC_LEGAL_NAME, siteValues.legalName),
  shortTagline: envOr(
    process.env.NEXT_PUBLIC_SHORT_TAGLINE,
    siteValues.shortTagline,
  ),
  tagline: envOr(process.env.NEXT_PUBLIC_TAGLINE, siteValues.tagline),
  description: envOr(
    process.env.NEXT_PUBLIC_DESCRIPTION,
    siteValues.description,
  ),
  url: envOr(process.env.NEXT_PUBLIC_SITE_URL, siteValues.url).replace(
    /\/+$/,
    "",
  ),
  email: envOr(process.env.NEXT_PUBLIC_EMAIL, siteValues.email),
  phone,
  // Defaults to a tel: link built from the display phone number.
  phoneHref: envOr(
    process.env.NEXT_PUBLIC_PHONE_HREF,
    `tel:${phone.replace(/[^\d+]/g, "")}`,
  ),
  address: {
    line1: envOr(
      process.env.NEXT_PUBLIC_ADDRESS_LINE1,
      siteValues.address.line1,
    ),
    locality: addressLocality,
    region: addressRegion,
    postalCode: addressPostalCode,
    country: envOr(
      process.env.NEXT_PUBLIC_ADDRESS_COUNTRY,
      siteValues.address.country,
    ),
    /** Display line, e.g. "Anaheim, CA 92805" */
    city: `${addressLocality}, ${addressRegion} ${addressPostalCode}`,
  },
  hours: envOr(process.env.NEXT_PUBLIC_HOURS, siteValues.hours),
  social: {
    linkedin: envOr(
      process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN,
      siteValues.social.linkedin,
    ),
    facebook: envOr(
      process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK,
      siteValues.social.facebook,
    ),
    instagram: envOr(
      process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM,
      siteValues.social.instagram,
    ),
    x: envOr(process.env.NEXT_PUBLIC_SOCIAL_X, siteValues.social.x),
    youtube: envOr(
      process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE,
      siteValues.social.youtube,
    ),
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Trades", href: "/trades" },
  { label: "Contact", href: "/contact" },
] as const;
