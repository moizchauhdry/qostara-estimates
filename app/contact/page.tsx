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
import { Photo } from "@/components/shared/photo";
import { Section } from "@/components/shared/section";
import { faqs } from "@/lib/content";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Send your plans and project requirements to Qostara Estimates. Our team will review your documents and help determine the estimating services your project requires.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact — ${siteConfig.name}`,
    description:
      "Send your plans and project requirements to the Qostara Estimates team.",
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
        title="Ready to Build Your Next Bid?"
        description="Send us your plans and project requirements. Our team will review your documents and help determine the estimating services your project requires."
      />

      <Section tone="white">
        <div className="grid w-full min-w-0 gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="min-w-0 space-y-8">
            <div>
              <p className="eyebrow text-signal-600">
                <span aria-hidden className="h-px w-6 bg-signal-500/50" />
                Reach us directly
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-balance text-ink-950 sm:text-3xl">
                Talk to an Estimator
              </h2>
              <p className="mt-3 max-w-md text-base leading-relaxed text-pretty text-ink-500">
                Prefer to talk it through? Reach the Qostara Estimates team
                directly, or use the form to request an estimate.
              </p>
            </div>

            <ul className="space-y-4">
              {contactMethods.map(({ label, value, href, Icon }) => (
                <li key={label} className="min-w-0">
                  <div className="panel flex gap-4 p-5 transition duration-300 hover:shadow-lifted">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-signal-50 text-signal-600 ring-1 ring-signal-100">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold tracking-[0.12em] text-ink-400 uppercase">
                        {label}
                      </p>
                      {href ? (
                        <Link
                          href={href}
                          className="mt-1 block break-words text-base font-medium text-ink-950 transition hover:text-signal-600"
                        >
                          {value}
                        </Link>
                      ) : (
                        <p className="mt-1 break-words text-base font-medium text-ink-950">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <Photo
              image={images.estimatorsReview}
              sizes="(min-width: 1024px) 560px, 100vw"
              className="aspect-[4/3] max-w-full rounded-2xl shadow-soft ring-1 ring-ink-950/6"
            />

            <div className="rounded-2xl border border-marker-200 bg-marker-50/80 px-5 py-4 ring-1 ring-marker-200/60">
              <p className="text-sm font-semibold text-marker-800">
                Business hours
              </p>
              <p className="mt-1 text-sm leading-relaxed text-pretty text-marker-900/80">
                {siteConfig.hours}. Include your bid date in your message so we
                can plan around it.
              </p>
            </div>
          </Reveal>

          <Reveal className="min-w-0" delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </Section>

      <Faq items={contactFaqs} id="contact-faq" />
    </>
  );
}
