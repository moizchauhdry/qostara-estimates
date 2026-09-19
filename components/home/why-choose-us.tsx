import { Stagger, StaggerItem } from "@/components/motion/reveal";
import {
  Section,
  SectionHeading,
  type Tone,
} from "@/components/shared/section";
import { whyChooseUs } from "@/lib/content";

export function WhyChooseUs({ tone = "white" }: { tone?: Tone }) {
  return (
    <Section id="why-qostara" tone={tone}>
      <SectionHeading
        eyebrow="Why Qostara"
        title="Why Work With Qostara Estimates?"
      />

      <Stagger
        as="ul"
        className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-6"
      >
        {whyChooseUs.map((item, index) => {
          const Icon = item.Icon;
          // Five cards on a six-column grid: three across the top, two wider below.
          const span = index < 3 ? "lg:col-span-2" : "lg:col-span-3";
          return (
            <StaggerItem as="li" key={item.title} className={span}>
              <article className="group relative h-full overflow-hidden rounded-2xl bg-white p-7 ring-1 ring-ink-950/6 transition duration-500 hover:ring-signal-200/80 sm:p-8">
                <div
                  aria-hidden
                  className="absolute -top-10 -right-10 size-28 rounded-full bg-signal-500/5 transition duration-500 group-hover:bg-signal-500/10"
                />
                <span className="relative inline-flex size-11 items-center justify-center rounded-xl bg-ink-950 text-white">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="relative mt-5 text-lg font-semibold text-ink-950">
                  {item.title}
                </h3>
                <p className="relative mt-2.5 text-sm leading-relaxed text-ink-500">
                  {item.description}
                </p>
              </article>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
