import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { Section, SectionHeading } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { trades } from "@/lib/content";

export function TradesGrid({
  limit,
  showCta = true,
}: {
  limit?: number;
  showCta?: boolean;
}) {
  const items = limit ? trades.slice(0, limit) : trades;

  return (
    <Section id="trades">
      <SectionHeading
        eyebrow="Trades we cover"
        title="Every trade on the drawing set — measured and priced"
        description="Specialty estimators for concrete, steel, MEP, finishes, and site work. No generalists guessing at your scope."
      />

      <Stagger
        as="ul"
        className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
      >
        {items.map((trade) => {
          const Icon = trade.Icon;
          return (
            <StaggerItem as="li" key={trade.slug}>
              <Link
                href="/trades"
                className="panel group flex h-full flex-col items-start gap-4 p-5 transition duration-500 ease-smooth hover:-translate-y-1 hover:shadow-lifted hover:ring-signal-200/70 sm:p-6"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-surface text-ink-800 ring-1 ring-ink-950/6 transition group-hover:bg-signal-600 group-hover:text-white group-hover:shadow-signal">
                  <Icon className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink-950 sm:text-base">
                    {trade.name}
                  </span>
                  <span className="mt-1.5 block text-xs leading-relaxed text-ink-500 sm:text-sm">
                    {trade.description}
                  </span>
                </span>
              </Link>
            </StaggerItem>
          );
        })}
      </Stagger>

      {showCta && (
        <div className="mt-10 flex justify-center">
          <Button
            asChild
            variant="outline"
            className="h-11 rounded-full border-ink-200 px-6"
          >
            <Link href="/trades">
              View all trades
              <ArrowUpRight data-icon="inline-end" />
            </Link>
          </Button>
        </div>
      )}
    </Section>
  );
}
