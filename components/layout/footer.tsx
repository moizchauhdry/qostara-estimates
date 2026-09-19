import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { tradeGroups } from "@/lib/content";
import { serviceHref, servicePages } from "@/lib/services";
import { navLinks, siteConfig } from "@/lib/site";

const socials = [
  { Icon: FaXTwitter, label: `${siteConfig.name} on X`, href: siteConfig.social.x },
  {
    Icon: FaLinkedinIn,
    label: `${siteConfig.name} on LinkedIn`,
    href: siteConfig.social.linkedin,
  },
  {
    Icon: FaYoutube,
    label: `${siteConfig.name} on YouTube`,
    href: siteConfig.social.youtube,
  },
];

export function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="shell min-w-0 pt-16 pb-10 sm:pt-20">
        <div className="grid min-w-0 gap-12 lg:grid-cols-[1.35fr_2.65fr] lg:gap-16">
          <div className="min-w-0">
            <Logo inverted />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-pretty text-ink-400">
              {siteConfig.description}
            </p>

            <Button
              asChild
              className="mt-8 h-11 rounded-full bg-signal-600 px-6 text-white hover:bg-signal-500"
            >
              <Link href="/contact">
                Request an Estimate
                <ArrowUpRight data-icon="inline-end" />
              </Link>
            </Button>
          </div>

          <nav
            aria-label="Footer"
            className="grid min-w-0 grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-10"
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
              {servicePages.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={serviceHref(service.slug)}
                    className="footer-link"
                  >
                    {service.navLabel}
                  </Link>
                </li>
              ))}
            </FooterColumn>

            <FooterColumn heading="Trades">
              {tradeGroups.map((group) => (
                <li key={group.slug}>
                  <Link href="/trades" className="footer-link">
                    {group.name}
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
                  className="footer-link break-all"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-sm leading-relaxed break-words text-ink-400">
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
    <div className="min-w-0">
      <h3 className="text-sm font-semibold text-white">{heading}</h3>
      <ul className="mt-4 space-y-3 [&_.footer-link]:inline-block [&_.footer-link]:max-w-full [&_.footer-link]:text-sm [&_.footer-link]:break-words [&_.footer-link]:text-ink-400 [&_.footer-link]:transition [&_.footer-link]:duration-300 [&_.footer-link]:hover:translate-x-0.5 [&_.footer-link]:hover:text-white">
        {children}
      </ul>
    </div>
  );
}
