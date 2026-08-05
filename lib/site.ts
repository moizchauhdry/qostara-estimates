export const siteConfig = {
  name: "Datum",
  legalName: "Datum Estimating Co.",
  tagline: "Construction estimates that win more bids",
  description:
    "Datum is a construction cost estimating firm that turns drawings into precise, bid-ready takeoffs — so general contractors and specialty trades win more work with fewer surprises.",
  url: "https://datumestimates.com",
  email: "hello@datumestimates.com",
  phone: "+1 (415) 555-0182",
  phoneHref: "tel:+14155550182",
  address: {
    line1: "420 Market Street, Suite 800",
    city: "San Francisco, CA 94105",
  },
  hours: "Mon–Fri, 7:00am–6:00pm PT",
  social: {
    linkedin: "https://www.linkedin.com/",
    x: "https://x.com/",
    youtube: "https://www.youtube.com/",
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
