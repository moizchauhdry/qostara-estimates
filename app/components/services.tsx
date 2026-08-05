import {
  ArrowUpRight,
  BarChart3,
  FileSignature,
  LayoutTemplate,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeading } from "./section";

type Service = {
  Icon: LucideIcon;
  title: string;
  description: string;
  deliverables: string[];
};

const services: Service[] = [
  {
    Icon: LayoutTemplate,
    title: "Estimate design & templates",
    description:
      "We turn your price book into branded templates your crew can send from the driveway, with margins already built in.",
    deliverables: [
      "Custom template library",
      "Reusable line items and price books",
      "Optional upgrades clients can toggle",
    ],
  },
  {
    Icon: FileSignature,
    title: "Approvals & deposits",
    description:
      "One link where clients review the scope, sign, and pay — so the job is funded before you order materials.",
    deliverables: [
      "Legally binding e-signatures",
      "Card and ACH deposits via Stripe",
      "Invoices generated on approval",
    ],
  },
  {
    Icon: BarChart3,
    title: "Pipeline reporting",
    description:
      "Every estimate feeds a live forecast, so you know which services, reps, and regions are actually worth quoting.",
    deliverables: [
      "Win rate by service and rep",
      "Margin alerts before you send",
      "Forecasts your accountant trusts",
    ],
  },
  {
    Icon: Rocket,
    title: "Onboarding & migration",
    description:
      "A specialist imports your historical pricing and trains the team, so you are quoting in Quotely the same week.",
    deliverables: [
      "Price book imported for you",
      "Team training in one session",
      "A named contact for 90 days",
    ],
  },
];

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="Services"
        title="Done-for-you quoting, end to end"
        description="Quotely is software plus the people who set it up. Pick the parts you need — we handle the migration, the templates, and the training."
      />

      <ul
        data-reveal-group
        className="mt-20 grid gap-6 lg:grid-cols-2 lg:gap-8"
      >
        {services.map(({ Icon, title, description, deliverables }) => (
          <li key={title}>
            <article className="card lift group flex h-full flex-col p-8 hover:ring-brand-200/70 sm:p-10">
              <div className="flex items-start justify-between gap-6">
                <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600 ring-1 ring-brand-200/60 transition duration-500 ease-smooth group-hover:from-brand-500 group-hover:to-brand-600 group-hover:text-white group-hover:shadow-brand group-hover:ring-brand-500/40">
                  <Icon
                    className="size-6 transition-transform duration-500 ease-smooth group-hover:scale-110"
                    aria-hidden
                  />
                </span>
                <ArrowUpRight
                  className="size-5 shrink-0 text-slate-300 transition duration-500 ease-smooth group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600"
                  aria-hidden
                />
              </div>

              <h3 className="mt-7 text-xl font-semibold sm:text-2xl">{title}</h3>
              <p className="mt-3 leading-relaxed text-slate-500">
                {description}
              </p>

              <ul className="mt-7 space-y-3 border-t border-slate-900/5 pt-7">
                {deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-600"
                  >
                    <span
                      className="size-1.5 shrink-0 rounded-full bg-brand-500"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 underline-offset-4 transition-colors duration-300 hover:text-brand-700 hover:underline"
              >
                Talk to a specialist
                <span className="sr-only"> about {title.toLowerCase()}</span>
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
