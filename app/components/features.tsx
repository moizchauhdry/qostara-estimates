import {
  Clock,
  Gauge,
  LineChart,
  Plug,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeading } from "./section";

type Feature = {
  Icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    Icon: Gauge,
    title: "Estimates in under 5 minutes",
    description:
      "Start from a template, drag in saved line items, and let smart pricing apply your margins, taxes, and discounts automatically.",
  },
  {
    Icon: Workflow,
    title: "Approvals that move themselves",
    description:
      "Clients review, e-sign, and pay a deposit in one link. Approved estimates convert to invoices and jobs without re-entry.",
  },
  {
    Icon: LineChart,
    title: "Know what closes",
    description:
      "See open value, win rate, and average deal size by service, rep, and region — so you can quote the work worth winning.",
  },
  {
    Icon: Clock,
    title: "Follow-ups on autopilot",
    description:
      "Quotely nudges quiet clients on your schedule and pings you the moment an estimate is opened or a question comes in.",
  },
  {
    Icon: Plug,
    title: "Connects to your stack",
    description:
      "Two-way sync with QuickBooks, Xero, Stripe, and HubSpot, plus a REST API and webhooks for everything else.",
  },
  {
    Icon: ShieldCheck,
    title: "Enterprise-grade security",
    description:
      "SOC 2 Type II, SSO with SAML, granular roles, and a full audit trail on every version of every estimate you send.",
  },
];

export function Features() {
  return (
    <Section id="features" tone="brand">
      <SectionHeading
        eyebrow="Features"
        title="Everything you need between the lead and the deposit"
        description="Replace the spreadsheet, the PDF, and the chase-up email with one workflow your whole team can run."
      />

      <ul
        data-reveal-group
        className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
      >
        {features.map(({ Icon, title, description }) => (
          <li
            key={title}
            className="card lift group p-8 hover:ring-brand-200/70 sm:p-9"
          >
            <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600 ring-1 ring-brand-200/60 transition duration-500 ease-smooth group-hover:from-brand-500 group-hover:to-brand-600 group-hover:text-white group-hover:shadow-brand group-hover:ring-brand-500/40">
              <Icon
                className="size-6 transition-transform duration-500 ease-smooth group-hover:scale-110"
                aria-hidden
              />
            </span>
            <h3 className="mt-7 text-xl font-semibold">{title}</h3>
            <p className="mt-3 leading-relaxed text-slate-500">{description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
