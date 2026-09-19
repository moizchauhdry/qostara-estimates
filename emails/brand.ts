import { siteConfig } from "@/lib/site";

/**
 * Brand tokens for Qostara transactional & marketing emails.
 * Company details and links come from lib/site.ts, which reads them from .env
 * (NEXT_PUBLIC_*), so the site and the emails never drift apart.
 */

function envOr(value: string | undefined, fallback: string) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : fallback;
}

const unsplash = (photo: string) =>
  `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=1200&q=80`;

export const emailBrand = {
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  tagline: siteConfig.tagline,
  url: siteConfig.url,
  email: siteConfig.email,
  phone: siteConfig.phone,
  phoneHref: siteConfig.phoneHref,
  address: `${siteConfig.address.line1}, ${siteConfig.address.city}`,
  hours: siteConfig.hours,
  /** Prefer EMAIL_LOGO_URL / EMAIL_ASSET_BASE_URL; falls back to cid:qostara-logo */
  logo: "cid:qostara-logo",
  logoInverted: "cid:qostara-logo-inverted",
  mark: "cid:qostara-mark",
  social: siteConfig.social,
  /** Hero images per template; override with EMAIL_IMAGE_* in .env */
  images: {
    welcome: envOr(
      process.env.EMAIL_IMAGE_WELCOME,
      unsplash("photo-1503387762-592deb58ef4e"),
    ),
    estimateReady: envOr(
      process.env.EMAIL_IMAGE_ESTIMATE_READY,
      unsplash("photo-1454165804606-c3d57bc86b40"),
    ),
    relationship: envOr(
      process.env.EMAIL_IMAGE_RELATIONSHIP,
      unsplash("photo-1486406146926-c627a92ad1ab"),
    ),
    newsletter: envOr(
      process.env.EMAIL_IMAGE_NEWSLETTER,
      unsplash("photo-1541888946425-d81bb19240f5"),
    ),
    promotion: envOr(
      process.env.EMAIL_IMAGE_PROMOTION,
      unsplash("photo-1504307651254-35680f356dfd"),
    ),
  },
  colors: {
    primary: "#2563EB",
    primaryDark: "#1D4ED8",
    dark: "#0F172A",
    muted: "#64748B",
    accent: "#F59E0B",
    background: "#F8FAFC",
    white: "#FFFFFF",
    border: "#E5E7EB",
    success: "#22C55E",
    danger: "#EF4444",
    softBlue: "#EFF6FF",
    softAmber: "#FFFBEB",
  },
  fonts: {
    family:
      "Arial, Helvetica, Verdana, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  stats: [
    { value: "10,000+", label: "Projects completed" },
    { value: "98%", label: "Customer satisfaction" },
    { value: "18+", label: "Years of experience" },
    { value: "500+", label: "Active clients" },
  ],
  testimonial: {
    quote:
      "Qostara’s takeoffs are the cleanest we receive. We bid faster and with more confidence — and our hit rate shows it.",
    name: "Marcus Chen",
    company: "Northline Builders",
    role: "Chief Estimator",
    rating: 5,
  },
} as const;

export type EmailBrand = typeof emailBrand;
