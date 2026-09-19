import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { Section, SectionHeading } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { tradeGroups } from "@/lib/content";

export function TradesGrid({ showCta = true }: { showCta?: boolean }) {
  return (
    <Section id="trades" tone="surface">
      <SectionHeading
        eyebrow="Trades"
        title="Estimates Across Major Construction Trades"
        description="Our estimating capabilities can support individual trades or complete project scopes."
      />

      <Stagger
        as="ul"
        className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {tradeGroups.map((group) => {
          const Icon = group.Icon;
          return (
            <StaggerItem as="li" key={group.slug}>
              <article className="panel group h-full p-6 transition duration-500 ease-smooth hover:-translate-y-1 hover:shadow-lifted hover:ring-signal-200/70 sm:p-7">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-signal-50 to-signal-100 text-signal-600 ring-1 ring-signal-200/70 transition duration-500 group-hover:from-signal-600 group-hover:to-signal-700 group-hover:text-white group-hover:shadow-signal">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink-950">
                  {group.name}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-ink-600"
                    >
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-signal-600"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
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
              Explore all trades
              <ArrowUpRight data-icon="inline-end" />
            </Link>
          </Button>
        </div>
      )}
    </Section>
  );
}
