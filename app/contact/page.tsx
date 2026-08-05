import type { Metadata } from "next";
import Link from "next/link";
import {
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { Faq } from "@/components/home/faq";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { faqs } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Datum for construction cost estimates, quantity takeoffs, and bid support. Upload drawings or book a scoping call — we reply within one business day.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact — ${siteConfig.name}`,
    description:
      "Upload plans, ask about pricing, or book a scoping call with our estimating team.",
    url: `${siteConfig.url}/contact`,
  },
};

const contactFaqs = faqs.slice(0, 5);

type ContactMethod = {
  label: string;
  value: string;
  href?: string;
  Icon: typeof Phone;
};

const contactMethods: ContactMethod[] = [
  {
    label: "Phone",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
    Icon: Phone,
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    Icon: Mail,
  },
  {
    label: "Office",
    value: `${siteConfig.address.line1}, ${siteConfig.address.city}`,
    Icon: MapPin,
  },
  {
    label: "Hours",
    value: siteConfig.hours,
    Icon: Clock3,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's scope your next bid"
        description="Upload drawings, ask about pricing, or book a 15-minute scoping call. A senior estimator replies within one business day — usually sooner."
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal className="space-y-8">
            <div>
              <p className="eyebrow text-signal-600">
                <span aria-hidden className="h-px w-6 bg-signal-500/50" />
                Reach us directly
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-ink-950 sm:text-3xl">
                Talk to an estimator, not a ticket queue
              </h2>
              <p className="mt-3 max-w-md text-base leading-relaxed text-ink-500">
                Prefer the phone? Call during business hours and you will reach
                someone who has actually opened a set of plans this week.
              </p>
            </div>

            <ul className="space-y-4">
              {contactMethods.map(({ label, value, href, Icon }) => (
                <li key={label}>
                  <div className="panel flex gap-4 p-5 transition duration-300 hover:shadow-lifted">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-signal-50 text-signal-600 ring-1 ring-signal-100">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold tracking-[0.12em] text-ink-400 uppercase">
                        {label}
                      </p>
                      {href ? (
                        <Link
                          href={href}
                          className="mt-1 block text-base font-medium text-ink-950 transition hover:text-signal-600"
                        >
                          {value}
                        </Link>
                      ) : (
                        <p className="mt-1 text-base font-medium text-ink-950">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div
              className="panel relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-ink-100 via-surface to-signal-50"
              aria-label="Map placeholder"
            >
              <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] [background-size:32px_32px]" />
              <div className="relative text-center">
                <MapPin
                  className="mx-auto size-8 text-signal-600"
                  aria-hidden
                />
                <p className="mt-3 text-sm font-semibold text-ink-800">Map</p>
                <p className="mt-1 text-xs text-ink-500">
                  {siteConfig.address.line1}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-marker-200 bg-marker-50/80 px-5 py-4 ring-1 ring-marker-200/60">
              <p className="text-sm font-semibold text-marker-800">
                Business hours
              </p>
              <p className="mt-1 text-sm leading-relaxed text-marker-900/80">
                {siteConfig.hours}. Messages sent after hours are queued for the
                next business morning — rush bid dates are flagged in your
                subject line.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </Section>

      <Faq items={contactFaqs} id="contact-faq" />
    </>
  );
}
