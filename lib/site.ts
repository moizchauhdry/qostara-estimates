/**
 * Empty or whitespace-only env values fall back to the default, so a blank
 * line in `.env` never wipes out a value.
 *
 * NEXT_PUBLIC_* variables must be referenced literally (process.env.NEXT_PUBLIC_X)
 * so Next.js can inline them at build time — never index process.env dynamically.
 */
function envOr(value: string | undefined, fallback: string) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : fallback;
}

const phone = envOr(process.env.NEXT_PUBLIC_PHONE, "+1 (415) 555-0182");
const addressLine1 = envOr(
  process.env.NEXT_PUBLIC_ADDRESS_LINE1,
  "420 Market Street, Suite 800",
);
const addressLocality = envOr(
  process.env.NEXT_PUBLIC_ADDRESS_LOCALITY,
  "San Francisco",
);
const addressRegion = envOr(process.env.NEXT_PUBLIC_ADDRESS_REGION, "CA");
const addressPostalCode = envOr(
  process.env.NEXT_PUBLIC_ADDRESS_POSTAL_CODE,
  "94105",
);

export const siteConfig = {
  name: envOr(process.env.NEXT_PUBLIC_SITE_NAME, "Qostara"),
  legalName: envOr(process.env.NEXT_PUBLIC_LEGAL_NAME, "Qostara Estimates"),
  shortTagline: envOr(process.env.NEXT_PUBLIC_SHORT_TAGLINE, "Estimates"),
  tagline: envOr(
    process.env.NEXT_PUBLIC_TAGLINE,
    "Construction estimates that win more bids",
  ),
  description: envOr(
    process.env.NEXT_PUBLIC_DESCRIPTION,
    "Qostara is a construction cost estimating firm that turns drawings into precise, bid-ready takeoffs — so general contractors and specialty trades win more work with fewer surprises.",
  ),
  // Origin only, no trailing slash.
  url: envOr(
    process.env.NEXT_PUBLIC_SITE_URL,
    "https://qostaraestimates.com",
  ).replace(/\/+$/, ""),
  email: envOr(process.env.NEXT_PUBLIC_EMAIL, "hello@qostaraestimates.com"),
  phone,
  // Defaults to a tel: link built from the display phone number.
  phoneHref: envOr(
    process.env.NEXT_PUBLIC_PHONE_HREF,
    `tel:${phone.replace(/[^\d+]/g, "")}`,
  ),
  address: {
    line1: addressLine1,
    locality: addressLocality,
    region: addressRegion,
    postalCode: addressPostalCode,
    country: envOr(process.env.NEXT_PUBLIC_ADDRESS_COUNTRY, "US"),
    /** Display line, e.g. "San Francisco, CA 94105" */
    city: `${addressLocality}, ${addressRegion} ${addressPostalCode}`,
  },
  hours: envOr(
    process.env.NEXT_PUBLIC_HOURS,
    "Mon–Fri, 7:00am–6:00pm PT",
  ),
  social: {
    linkedin: envOr(
      process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN,
      "https://www.linkedin.com/",
    ),
    facebook: envOr(
      process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK,
      "https://www.facebook.com/",
    ),
    instagram: envOr(
      process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM,
      "https://www.instagram.com/",
    ),
    x: envOr(process.env.NEXT_PUBLIC_SOCIAL_X, "https://x.com/"),
    youtube: envOr(
      process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE,
      "https://www.youtube.com/",
    ),
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Trades", href: "/trades" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;
