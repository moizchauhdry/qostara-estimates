import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { Section, SectionHeading } from "@/components/shared/section";
import { whyChooseUs } from "@/lib/content";

export function WhyChooseUs() {
  return (
    <Section id="why-qostara">
      <SectionHeading
        eyebrow="Why Qostara"
        title="The estimating partner that treats accuracy as the product"
        description="We take fewer jobs than the big outsourcing shops — so every takeoff can survive a peer review and a superintendent's scrutiny."
      />

      <Stagger
        as="ul"
        className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {whyChooseUs.map((item) => {
          const Icon = item.Icon;
          return (
            <StaggerItem as="li" key={item.title}>
              <article className="group relative overflow-hidden rounded-2xl bg-white p-7 ring-1 ring-ink-950/6 transition duration-500 hover:ring-signal-200/80 sm:p-8">
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
