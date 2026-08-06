/** Brand tokens for Qostara transactional & marketing emails */

export const emailBrand = {
  name: "Qostara",
  legalName: "Qostara Estimates",
  tagline: "Construction estimates that win more bids",
  url: "https://qostaraestimates.com",
  email: "hello@qostaraestimates.com",
  phone: "+1 (415) 555-0182",
  phoneHref: "tel:+14155550182",
  address: "420 Market Street, Suite 800, San Francisco, CA 94105",
  hours: "Mon–Fri, 7:00am–6:00pm PT",
  /** Prefer EMAIL_LOGO_URL / EMAIL_ASSET_BASE_URL; falls back to cid:qostara-logo */
  logo: "cid:qostara-logo",
  logoInverted: "cid:qostara-logo-inverted",
  mark: "cid:qostara-mark",
  social: {
    linkedin: "https://www.linkedin.com/",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    x: "https://x.com/",
    youtube: "https://www.youtube.com/",
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
