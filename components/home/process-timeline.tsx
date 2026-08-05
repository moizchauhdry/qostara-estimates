import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { Section, SectionHeading } from "@/components/shared/section";
import { processSteps } from "@/lib/content";

export function ProcessTimeline() {
  return (
    <Section id="process" tone="ink" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(37,99,235,0.22),transparent_70%)]"
      />

      <SectionHeading
        eyebrow="How it works"
        tone="dark"
        title="Six steps from drawings to a sealed bid"
        description="A clear process, a named estimator, and a deliverable your supers can actually use on site."
      />

      <Stagger
        as="ol"
        className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {/* Animated connector line on large screens */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-[2.25rem] right-8 left-8 hidden h-px bg-gradient-to-r from-transparent via-signal-400/40 to-transparent lg:block"
        />

        {processSteps.map((step) => (
          <StaggerItem as="li" key={step.step}>
            <article className="relative h-full rounded-2xl bg-white/5 p-7 ring-1 ring-white/10 backdrop-blur-sm transition duration-500 hover:bg-white/8 hover:ring-signal-400/40 sm:p-8">
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-signal-600 text-sm font-semibold text-white shadow-signal tabular-nums">
                {step.step}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-300">
                {step.description}
              </p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
