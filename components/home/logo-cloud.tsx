import { Counter } from "@/components/motion/counter";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Section } from "@/components/shared/section";
import { trustLogos, trustStats } from "@/lib/content";

export function LogoCloud() {
  return (
    <Section tone="white" className="!py-14 sm:!py-16">
      <Reveal>
        <p className="text-center text-sm font-medium text-ink-400">
          Trusted by contractors who bid to win
        </p>
      </Reveal>

      <Stagger
        as="ul"
        className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:gap-x-14"
      >
        {trustLogos.map((name) => (
          <StaggerItem as="li" key={name}>
            <span className="text-sm font-semibold tracking-[-0.01em] text-ink-300 transition hover:text-ink-700 sm:text-base">
              {name}
            </span>
          </StaggerItem>
        ))}
      </Stagger>

      <dl className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {trustStats.map((stat) => (
          <div
            key={stat.label}
            className="panel flex flex-col items-center px-6 py-7 text-center"
          >
            <dt className="order-2 mt-2 text-sm text-ink-500">{stat.label}</dt>
            <dd className="order-1 text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
