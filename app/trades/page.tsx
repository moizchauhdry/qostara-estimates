import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ContactBanner } from "@/components/home/contact-banner";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { PageHero } from "@/components/shared/page-hero";
import { Section, SectionHeading } from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { trades } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Trades We Cover",
  description:
    "Datum estimates every trade on the drawing set — concrete, steel, MEP, finishes, and site work — with dedicated specialty estimators for each scope.",
  alternates: { canonical: "/trades" },
  openGraph: {
    title: `Trades We Cover — ${siteConfig.name}`,
    description:
      "Specialty estimators for concrete, steel, MEP, finishes, and site work. No generalists guessing at your scope.",
    url: `${siteConfig.url}/trades`,
  },
};

const industryMap = trades.reduce<Record<string, string[]>>((acc, trade) => {
  for (const industry of trade.industries) {
    if (!acc[industry]) acc[industry] = [];
    acc[industry].push(trade.name);
  }
  return acc;
}, {});

const sortedIndustries = Object.entries(industryMap).sort(([a], [b]) =>
  a.localeCompare(b),
);

export default function TradesPage() {
  return (
    <>
      <PageHero
        eyebrow="Trades we cover"
        title="Every trade on the drawing set — measured and priced"
        description="Dedicated specialty estimators for concrete, steel, MEP, finishes, and site work. No generalists guessing at your scope."
      />

      <Section id="all-trades" tone="surface">
        <SectionHeading
          eyebrow="Specialty coverage"
          title="Twelve trades, each with a named estimator"
          description="Every card below represents a dedicated estimating practice — not a line item in a generalist's spreadsheet."
        />

        <Stagger
          as="ul"
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {trades.map((trade) => {
            const Icon = trade.Icon;
            return (
              <StaggerItem as="li" key={trade.slug}>
                <article className="panel group flex h-full flex-col p-7 transition duration-500 ease-smooth hover:-translate-y-1.5 hover:shadow-lifted hover:ring-signal-200/70 sm:p-8">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-signal-50 to-signal-100 text-signal-600 ring-1 ring-signal-200/70 transition duration-500 group-hover:from-signal-600 group-hover:to-signal-700 group-hover:text-white group-hover:shadow-signal">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h2 className="mt-6 text-lg font-semibold text-ink-950">
                    {trade.name}
                  </h2>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-500">
                    {trade.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {trade.industries.map((industry) => (
                      <Badge
                        key={industry}
                        variant="outline"
                        className="border-ink-200 bg-surface text-ink-600"
                      >
                        {industry}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    asChild
                    variant="link"
                    className="mt-6 h-auto justify-start px-0 text-signal-600 hover:text-signal-700"
                  >
                    <Link href="/contact">
                      Request an estimate
                      <ArrowUpRight data-icon="inline-end" />
                    </Link>
                  </Button>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      <Section id="industries">
        <SectionHeading
          eyebrow="Industries served"
          title="From healthcare campuses to tilt-up warehouses"
          description="Our trade teams work across project types every day — the same estimators who priced your last bid know the nuances of your sector."
        />

        <Stagger
          as="ul"
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {sortedIndustries.map(([industry, tradeNames]) => (
            <StaggerItem as="li" key={industry}>
              <article className="panel h-full p-6 sm:p-7">
                <h3 className="text-base font-semibold text-ink-950">
                  {industry}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {tradeNames.join(", ")}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <ContactBanner />
    </>
  );
}
