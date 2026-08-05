import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { services, trades } from "@/lib/content";
import { navLinks, siteConfig } from "@/lib/site";

const socials = [
  { Icon: FaXTwitter, label: "Qostara on X", href: siteConfig.social.x },
  {
    Icon: FaLinkedinIn,
    label: "Qostara on LinkedIn",
    href: siteConfig.social.linkedin,
  },
  {
    Icon: FaYoutube,
    label: "Qostara on YouTube",
    href: siteConfig.social.youtube,
  },
];

export function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="shell pt-16 pb-10 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_2.65fr] lg:gap-16">
          <div>
            <Logo inverted />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-400">
              {siteConfig.description}
            </p>

            <form className="mt-8 max-w-sm">
              <label
                htmlFor="newsletter-email"
                className="text-sm font-medium text-white"
              >
                Monthly estimating brief
              </label>
              <div className="mt-3 flex flex-col gap-2.5 sm:flex-row">
                <Input
                  id="newsletter-email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  className="h-11 rounded-full border-white/15 bg-white/5 text-white placeholder:text-ink-500 focus-visible:border-signal-400 focus-visible:ring-signal-500/30"
                />
                <Button
                  type="submit"
                  className="h-11 shrink-0 rounded-full bg-signal-600 px-5 text-white hover:bg-signal-500"
                >
                  Subscribe
                  <ArrowRight data-icon="inline-end" />
                </Button>
              </div>
              <p className="mt-2.5 text-xs text-ink-500">
                No spam. Unsubscribe any time.
              </p>
            </form>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-10 sm:grid-cols-4"
          >
            <FooterColumn heading="Company">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </FooterColumn>

            <FooterColumn heading="Services">
              {services.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link href="/services" className="footer-link">
                    {service.title}
                  </Link>
                </li>
              ))}
            </FooterColumn>

            <FooterColumn heading="Trades">
              {trades.slice(0, 6).map((trade) => (
                <li key={trade.slug}>
                  <Link href="/trades" className="footer-link">
                    {trade.name}
                  </Link>
                </li>
              ))}
            </FooterColumn>

            <FooterColumn heading="Contact">
              <li>
                <a href={siteConfig.phoneHref} className="footer-link">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="footer-link"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-sm leading-relaxed text-ink-400">
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.city}
              </li>
              <li className="text-sm text-ink-500">{siteConfig.hours}</li>
            </FooterColumn>
          </nav>
        </div>

        <div className="mt-14 flex flex-col-reverse items-center gap-6 border-t border-white/10 pt-8 sm:flex-row sm:justify-between">
          <p className="text-sm text-ink-500">
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <ul className="flex items-center gap-5">
              {["Privacy", "Terms", "Security"].map((item) => (
                <li key={item}>
                  <Link
                    href="/contact"
                    className="text-sm text-ink-500 transition hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex items-center gap-2">
              {socials.map(({ Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noreferrer"
                    className="flex size-9 items-center justify-center rounded-full bg-white/5 text-ink-300 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
                  >
                    <Icon className="size-3.5" aria-hidden />
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

function FooterColumn({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{heading}</h3>
      <ul className="mt-4 space-y-3 [&_.footer-link]:inline-block [&_.footer-link]:text-sm [&_.footer-link]:text-ink-400 [&_.footer-link]:transition [&_.footer-link]:duration-300 [&_.footer-link]:hover:translate-x-0.5 [&_.footer-link]:hover:text-white">
        {children}
      </ul>
    </div>
  );
}
