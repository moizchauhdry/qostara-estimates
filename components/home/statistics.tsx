import { Counter } from "@/components/motion/counter";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { BlueprintGrid } from "@/components/shared/graphics";
import { Section, SectionHeading } from "@/components/shared/section";
import { impactStats } from "@/lib/content";

export function Statistics() {
  return (
    <Section
      id="impact"
      tone="ink"
      className="relative isolate overflow-hidden"
    >
      <BlueprintGrid
        tone="dark"
        size={72}
        className="opacity-60 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_35%,transparent_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 size-[28rem] rounded-full bg-signal-600/25 blur-3xl"
      />

      <SectionHeading
        eyebrow="By the numbers"
        tone="dark"
        title="The results of treating estimating as a craft"
        description="Aggregated across active accounts that have bid with Datum for at least one year."
      />

      <Stagger
        as="ul"
        className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-6"
      >
        {impactStats.map((stat) => (
          <StaggerItem as="li" key={stat.label}>
            <div className="border-t border-white/15 pt-7">
              <p className="bg-gradient-to-br from-white to-signal-200 bg-clip-text text-4xl font-semibold tracking-tight text-transparent tabular-nums sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm font-medium text-ink-300">
                {stat.label}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
