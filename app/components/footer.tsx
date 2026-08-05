import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Logo } from "./logo";

const footerNav = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Templates", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Construction", href: "#services" },
      { label: "Home services", href: "#services" },
      { label: "Agencies", href: "#services" },
      { label: "Manufacturing", href: "#services" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Help center", href: "#faq" },
      { label: "API docs", href: "#" },
      { label: "Estimate guides", href: "#" },
      { label: "Community", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Customers", href: "#testimonials" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

const socials = [
  { Icon: FaXTwitter, label: "Quotely on X" },
  { Icon: FaLinkedinIn, label: "Quotely on LinkedIn" },
  { Icon: FaGithub, label: "Quotely on GitHub" },
  { Icon: FaYoutube, label: "Quotely on YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-brand-950 via-brand-950 to-brand-900 text-brand-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          data-reveal
          className="relative mt-24 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 px-8 py-16 shadow-brand-lifted sm:px-12 sm:py-20 lg:px-16"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -top-28 -right-20 size-80 rounded-full bg-white/15 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-16 size-72 rounded-full bg-brand-300/25 blur-3xl"
          />
          <div className="relative flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
            <div className="max-w-xl">
              <h2 className="text-4xl leading-[1.1] font-semibold text-balance text-white sm:text-5xl">
                Send your next estimate in five minutes
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-pretty text-brand-50">
                Join 12,000+ teams quoting faster, following up smarter, and
                getting paid sooner.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:shrink-0">
              <a
                href="#signup"
                className="pill bg-white px-7 py-4 text-base text-brand-700 shadow-lifted hover:shadow-float"
              >
                Start free trial
                <ArrowRight className="size-4" aria-hidden />
              </a>
              <a
                href="#demo"
                className="pill border border-white/40 px-7 py-4 text-base text-white transition-colors hover:bg-white/12"
              >
                Book a demo
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-16 py-20 sm:py-24 lg:grid-cols-[1.4fr_2.6fr] lg:gap-20">
          <div>
            <Logo inverted />
            <p className="mt-6 max-w-sm leading-relaxed text-brand-200">
              Quotely is the estimating platform for teams that win work on
              speed and clarity, not on discounts.
            </p>

            <form className="mt-8 max-w-sm">
              <label
                htmlFor="newsletter-email"
                className="block text-sm font-medium text-white"
              >
                Monthly product digest
              </label>
              <div className="mt-3 flex flex-col gap-2.5 sm:flex-row">
                <input
                  id="newsletter-email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white transition duration-300 placeholder:text-brand-300/70 focus:border-brand-400 focus:bg-white/10 focus:outline-none"
                />
                <button
                  type="submit"
                  className="pill shrink-0 bg-brand-600 px-6 py-3 text-sm text-white shadow-brand hover:bg-brand-500 hover:shadow-brand-lifted"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-3 text-xs text-brand-300">
                No spam. Unsubscribe any time.
              </p>
            </form>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-10 sm:grid-cols-4"
          >
            {footerNav.map((group) => (
              <div key={group.heading}>
                <h3 className="text-sm font-semibold text-white">
                  {group.heading}
                </h3>
                <ul className="mt-5 space-y-3.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="inline-block text-sm text-brand-200 transition duration-300 ease-smooth hover:translate-x-1 hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex flex-col-reverse items-center gap-8 border-t border-white/10 py-10 sm:flex-row sm:justify-between">
          <p className="text-sm text-brand-300">
            © {new Date().getFullYear()} Quotely, Inc. All rights reserved.
          </p>
          <div className="flex flex-col-reverse items-center gap-6 sm:flex-row sm:gap-10">
            <ul className="flex items-center gap-6">
              {["Privacy", "Terms", "Security"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-brand-300 transition-colors duration-300 hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="flex items-center gap-2.5">
              {socials.map(({ Icon, label }) => (
                <li key={label}>
                  <a
                    href="#"
                    aria-label={label}
                    className="raise flex size-10 items-center justify-center rounded-full bg-white/5 text-brand-200 ring-1 ring-white/10 hover:bg-white/12 hover:text-white"
                  >
                    <Icon className="size-4" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
