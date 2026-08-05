"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Section, SectionHeading } from "./section";

type Plan = {
  name: string;
  tagline: string;
  monthly: number;
  annual: number;
  cta: string;
  features: string[];
  popular?: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    tagline: "For solo operators sending their first quotes.",
    monthly: 19,
    annual: 15,
    cta: "Start free trial",
    features: [
      "Up to 25 estimates per month",
      "3 branded templates",
      "E-signatures and online approval",
      "Stripe deposit collection",
      "Email support",
    ],
  },
  {
    name: "Professional",
    tagline: "For growing teams that quote every day.",
    monthly: 49,
    annual: 39,
    cta: "Start free trial",
    popular: true,
    features: [
      "Unlimited estimates",
      "Unlimited templates and price books",
      "Automated follow-up sequences",
      "Win-rate and pipeline analytics",
      "QuickBooks, Xero, and HubSpot sync",
      "Priority support",
    ],
  },
  {
    name: "Business",
    tagline: "For multi-crew operations that need control.",
    monthly: 99,
    annual: 79,
    cta: "Talk to sales",
    features: [
      "Everything in Professional",
      "Approval rules and margin guardrails",
      "SAML SSO and granular roles",
      "Full audit trail and API access",
      "Dedicated success manager",
      "99.9% uptime SLA",
    ],
  },
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <Section id="pricing" tone="brand">
      <SectionHeading
        eyebrow="Pricing"
        title="Simple pricing that scales with the work"
        description="Every plan includes a 14-day free trial. No setup fees, no per-estimate charges."
      />

      <div data-reveal className="mt-14 flex justify-center">
        <div
          role="radiogroup"
          aria-label="Billing period"
          className="inline-flex items-center gap-1 rounded-full bg-slate-100/90 p-1.5 ring-1 ring-slate-900/5 shadow-inner"
        >
          {[
            { label: "Monthly", annual: false },
            { label: "Annual", annual: true },
          ].map((option) => {
            const isActive = option.annual === isAnnual;
            return (
              <button
                key={option.label}
                type="button"
                role="radio"
                aria-checked={isActive}
                onClick={() => setIsAnnual(option.annual)}
                className={`flex cursor-pointer items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition duration-300 ease-smooth ${
                  isActive
                    ? "bg-white text-slate-900 shadow-soft"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {option.label}
                {option.annual && (
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-semibold transition-colors duration-300 ${
                      isActive
                        ? "bg-brand-600 text-white"
                        : "bg-brand-100 text-brand-700"
                    }`}
                  >
                    −20%
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <ul
        data-reveal-group
        className="mx-auto mt-18 grid max-w-md gap-8 lg:max-w-none lg:grid-cols-3 lg:items-center lg:gap-6"
      >
        {plans.map((plan) => (
          <li key={plan.name}>
            <PlanCard plan={plan} isAnnual={isAnnual} />
          </li>
        ))}
      </ul>

      <p className="mt-14 text-center text-slate-500">
        Need more than 50 seats or on-premise deployment?{" "}
        <a
          href="#contact"
          className="font-semibold text-brand-600 underline-offset-4 transition-colors hover:text-brand-700 hover:underline"
        >
          Contact our enterprise team
        </a>
        .
      </p>
    </Section>
  );
}

function PlanCard({ plan, isAnnual }: { plan: Plan; isAnnual: boolean }) {
  const price = isAnnual ? plan.annual : plan.monthly;

  return (
    <div
      className={`relative flex h-full flex-col rounded-3xl p-9 transition duration-500 ease-smooth sm:p-10 ${
        plan.popular
          ? "bg-gradient-to-br from-brand-600 via-brand-600 to-brand-500 shadow-brand hover:-translate-y-1.5 hover:shadow-brand-lifted lg:scale-[1.04]"
          : "card lift"
      }`}
    >
      {plan.popular && (
        <span className="absolute top-0 right-9 -translate-y-1/2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-brand-700 shadow-soft sm:right-10">
          Most popular
        </span>
      )}

      <h3
        className={`text-xl font-semibold ${plan.popular ? "text-white" : ""}`}
      >
        {plan.name}
      </h3>
      <p
        className={`mt-2 text-sm leading-relaxed ${
          plan.popular ? "text-brand-100" : "text-slate-500"
        }`}
      >
        {plan.tagline}
      </p>

      <p className="mt-8 flex items-baseline gap-2">
        <span
          className={`text-5xl font-semibold tracking-tight tabular-nums sm:text-6xl ${
            plan.popular ? "text-white" : "text-slate-900"
          }`}
        >
          ${price}
        </span>
        <span
          className={`text-sm ${
            plan.popular ? "text-brand-100" : "text-slate-500"
          }`}
        >
          per user / month
        </span>
      </p>
      <p
        className={`mt-2 text-xs ${
          plan.popular ? "text-brand-200" : "text-slate-400"
        }`}
      >
        {isAnnual ? "Billed annually" : "Billed monthly"}
      </p>

      <a
        href="#signup"
        className={`pill mt-9 px-6 py-3.5 ${
          plan.popular
            ? "bg-white text-brand-700 shadow-soft hover:shadow-lifted"
            : "bg-brand-600 text-white shadow-brand hover:bg-brand-700 hover:shadow-brand-lifted"
        }`}
      >
        {plan.cta}
      </a>

      <ul className="mt-10 space-y-4">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-3.5">
            <span
              className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${
                plan.popular ? "bg-white/20" : "bg-brand-50 ring-1 ring-brand-100"
              }`}
              aria-hidden
            >
              <Check
                className={`size-3 ${
                  plan.popular ? "text-white" : "text-brand-600"
                }`}
              />
            </span>
            <span
              className={`text-sm leading-relaxed ${
                plan.popular ? "text-white" : "text-slate-600"
              }`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
