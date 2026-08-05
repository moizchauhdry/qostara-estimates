import { Clock, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import { ContactForm } from "./contact-form";
import { SectionHeading } from "./section";

type ContactMethod = {
  Icon: LucideIcon;
  label: string;
  value: string;
  detail: string;
  href?: string;
};

const methods: ContactMethod[] = [
  {
    Icon: Mail,
    label: "Email us",
    value: "sales@quotely.com",
    detail: "Answered within one business day.",
    href: "mailto:sales@quotely.com",
  },
  {
    Icon: Phone,
    label: "Call the team",
    value: "+1 (415) 555-0138",
    detail: "Mon–Fri, 8am–6pm PT.",
    href: "tel:+14155550138",
  },
  {
    Icon: MapPin,
    label: "Head office",
    value: "548 Market Street, San Francisco",
    detail: "Visits by appointment.",
  },
  {
    Icon: Clock,
    label: "Onboarding slots",
    value: "Next available: this week",
    detail: "45-minute setup call with a specialist.",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-gradient-to-b from-white via-brand-50/60 to-white py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Contact"
            align="left"
            title="Let's price your first job together"
            description="Tell us how you quote today and we will show you the same job estimated in Quotely — no slide deck, no pressure."
          />

          <ul data-reveal-group className="mt-12 space-y-4">
            {methods.map(({ Icon, label, value, detail, href }) => {
              const content = (
                <>
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600 ring-1 ring-brand-200/60 transition duration-500 ease-smooth group-hover:from-brand-500 group-hover:to-brand-600 group-hover:text-white group-hover:shadow-brand">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold tracking-[0.12em] text-brand-600 uppercase">
                      {label}
                    </span>
                    <span className="mt-1.5 block font-semibold text-slate-900">
                      {value}
                    </span>
                    <span className="mt-0.5 block text-sm text-slate-500">
                      {detail}
                    </span>
                  </span>
                </>
              );

              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      className="card lift group flex items-start gap-4 p-5 hover:ring-brand-200/70 sm:p-6"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="card group flex items-start gap-4 p-5 sm:p-6">
                      {content}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div data-reveal>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
