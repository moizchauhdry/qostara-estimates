import type { Metadata } from "next";
import Link from "next/link";
import { Check, Minus } from "lucide-react";
import { ContactBanner } from "@/components/home/contact-banner";
import { Faq } from "@/components/home/faq";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { PageHero } from "@/components/shared/page-hero";
import { Section, SectionHeading } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import {
  faqs,
  pricingComparison,
  pricingPlans,
} from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for construction cost estimating — single-project takeoffs, monthly retainers, and enterprise estimating desks.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: `Pricing — ${siteConfig.name}`,
    description:
      "From one-off takeoffs to embedded estimating capacity — plans that match how your team bids.",
    url: `${siteConfig.url}/pricing`,
  },
};

const pricingFaqs = faqs.filter((_, index) =>
  [1, 4, 5, 7, 9].includes(index),
);

function FeatureCheck({ included }: { included: boolean }) {
  if (included) {
    return (
      <span className="inline-flex size-6 items-center justify-center rounded-full bg-signal-50 ring-1 ring-signal-100">
        <Check className="size-3.5 text-signal-600" aria-hidden />
        <span className="sr-only">Included</span>
      </span>
    );
  }

  return (
    <span className="inline-flex size-6 items-center justify-center rounded-full bg-ink-50 ring-1 ring-ink-100">
      <Minus className="size-3.5 text-ink-300" aria-hidden />
      <span className="sr-only">Not included</span>
    </span>
  );
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Estimating capacity that scales with your pipeline"
        description="From one-off takeoffs to embedded estimating desks — transparent plans built for how contractors actually bid."
      />

      <Section id="plans" tone="surface">
        <SectionHeading
          eyebrow="Plans"
          title="Choose the engagement that fits your bid calendar"
          description="Every plan includes a scoped kickoff call and a CSI-formatted deliverable. No hidden per-sheet fees."
        />

        <Stagger
          as="ul"
          className="mx-auto mt-14 grid max-w-md gap-6 lg:max-w-none lg:grid-cols-3 lg:items-stretch lg:gap-5"
        >
          {pricingPlans.map((plan) => (
            <StaggerItem as="li" key={plan.name}>
              <article
                className={cn(
                  "relative flex h-full flex-col rounded-2xl p-8 transition duration-500 ease-smooth sm:p-9",
                  plan.highlighted
                    ? "bg-gradient-to-br from-signal-600 via-signal-600 to-signal-700 text-white shadow-signal-lifted ring-1 ring-signal-500/30 lg:-translate-y-2"
                    : "panel hover:-translate-y-1 hover:shadow-lifted",
                )}
              >
                {plan.highlighted && (
                  <span className="absolute top-0 right-8 -translate-y-1/2 rounded-full bg-white px-3.5 py-1 text-xs font-semibold text-signal-700 shadow-soft">
                    Most popular
                  </span>
                )}

                <h2
                  className={cn(
                    "text-xl font-semibold",
                    !plan.highlighted && "text-ink-950",
                  )}
                >
                  {plan.name}
                </h2>
                <p
                  className={cn(
                    "mt-2 text-sm leading-relaxed",
                    plan.highlighted ? "text-signal-100" : "text-ink-500",
                  )}
                >
                  {plan.description}
                </p>

                <p className="mt-8 flex items-baseline gap-2">
                  <span
                    className={cn(
                      "text-4xl font-semibold tracking-tight tabular-nums sm:text-5xl",
                      !plan.highlighted && "text-ink-950",
                    )}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={cn(
                      "text-sm",
                      plan.highlighted ? "text-signal-200" : "text-ink-400",
                    )}
                  >
                    {plan.period}
                  </span>
                </p>

                <Button
                  asChild
                  className={cn(
                    "mt-8 h-11 w-full rounded-full text-sm font-semibold",
                    plan.highlighted
                      ? "bg-white text-signal-700 shadow-soft hover:bg-signal-50 hover:text-signal-800"
                      : "bg-signal-600 text-white shadow-signal hover:bg-signal-500",
                  )}
                >
                  <Link href="/contact">{plan.cta}</Link>
                </Button>

                <ul className="mt-8 flex-1 space-y-3.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span
                        className={cn(
                          "mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full",
                          plan.highlighted
                            ? "bg-white/20"
                            : "bg-signal-50 ring-1 ring-signal-100",
                        )}
                        aria-hidden
                      >
                        <Check
                          className={cn(
                            "size-3",
                            plan.highlighted
                              ? "text-white"
                              : "text-signal-600",
                          )}
                        />
                      </span>
                      <span
                        className={cn(
                          "text-sm leading-relaxed",
                          plan.highlighted ? "text-signal-50" : "text-ink-600",
                        )}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section id="compare">
        <SectionHeading
          eyebrow="Compare"
          title="See what is included in each plan"
          description="A side-by-side look at deliverables and support — so you know exactly what you are buying before the kickoff call."
        />

        <Reveal className="mt-14">
          <div className="panel overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-ink-100 hover:bg-transparent">
                  <TableHead className="h-14 px-6 text-sm font-semibold text-ink-950">
                    Feature
                  </TableHead>
                  <TableHead className="h-14 px-4 text-center text-sm font-semibold text-ink-950">
                    Single Project
                  </TableHead>
                  <TableHead className="h-14 px-4 text-center text-sm font-semibold text-signal-600">
                    Growth Retainer
                  </TableHead>
                  <TableHead className="h-14 px-4 text-center text-sm font-semibold text-ink-950">
                    Enterprise Desk
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pricingComparison.map((row) => (
                  <TableRow
                    key={row.feature}
                    className="border-ink-100 hover:bg-surface/60"
                  >
                    <TableCell className="px-6 py-4 text-sm font-medium text-ink-800">
                      {row.feature}
                    </TableCell>
                    <TableCell className="px-4 py-4 text-center">
                      <FeatureCheck included={row.single} />
                    </TableCell>
                    <TableCell className="bg-signal-50/40 px-4 py-4 text-center">
                      <FeatureCheck included={row.growth} />
                    </TableCell>
                    <TableCell className="px-4 py-4 text-center">
                      <FeatureCheck included={row.enterprise} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Reveal>
      </Section>

      <Faq items={pricingFaqs} id="pricing-faq" />
      <ContactBanner />
    </>
  );
}
