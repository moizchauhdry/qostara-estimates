/**
 * The site's public details, in one committed file. Edit values here and
 * they ship with the code — no `.env` needed on the server, which matters
 * because `.env` is gitignored and the cPanel deploy pulls from git.
 *
 * Everything here is public (it renders on the site), so never put secrets
 * such as SMTP_PASS in this file; those belong in the server's environment.
 *
 * A NEXT_PUBLIC_* variable, if set at build time, still overrides the matching
 * value here — see lib/site.ts.
 */
export const siteValues = {
  // Origin only, no trailing slash.
  url: "https://qostaraestimates.com",
  name: "Qostara",
  legalName: "Qostara Estimates",
  shortTagline: "Estimates",
  tagline: "Construction Estimating Built for Confident Bidding",
  description:
    "Professional construction estimating, quantity takeoffs, MEP estimating, and shop drawing services for today's construction industry.",

  email: "info@qostaraestimates.com",
  phone: "+1 (929) 412-2507",
  hours: "Mon–Fri, 6:00am–3:00pm PT",

  address: {
    line1: "1921 S Union St",
    locality: "Anaheim",
    region: "CA",
    postalCode: "92805",
    country: "US",
  },

  social: {
    linkedin: "https://www.linkedin.com/",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    x: "https://x.com/",
    youtube: "https://www.youtube.com/",
  },
} as const;
