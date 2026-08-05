import { Section, SectionHeading } from "./section";

type Stat = {
  value: string;
  label: string;
  detail: string;
};

const stats: Stat[] = [
  {
    value: "3.2×",
    label: "Faster to send",
    detail: "Median time from site visit to delivered estimate.",
  },
  {
    value: "38%",
    label: "Higher win rate",
    detail: "Average lift in the first two quarters on Quotely.",
  },
  {
    value: "$4.8B",
    label: "Quoted in 2025",
    detail: "Total value of estimates sent through the platform.",
  },
  {
    value: "12,400",
    label: "Teams onboard",
    detail: "From solo operators to 500-seat field organisations.",
  },
];

export function Statistics() {
  return (
    <Section
      id="statistics"
      tone="dark"
      className="relative isolate overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 -z-10 size-[32rem] rounded-full bg-brand-600/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-32 -z-10 size-[30rem] rounded-full bg-brand-500/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_40%,transparent_100%)]"
      />

      <SectionHeading
        eyebrow="By the numbers"
        tone="dark"
        title="The results teams see once quoting stops being manual"
        description="Aggregated from 1,800 accounts that tracked their pipeline for at least 90 days before and after switching."
      />

      <dl
        data-reveal-group
        className="mt-20 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4 lg:gap-x-8"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="raise border-t border-white/15 pt-8 hover:border-brand-400/60"
          >
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <p className="bg-gradient-to-br from-white to-brand-200 bg-clip-text text-5xl font-semibold tracking-[-0.03em] text-transparent tabular-nums sm:text-6xl">
                {stat.value}
              </p>
              <p className="mt-4 text-base font-semibold text-white">
                {stat.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-brand-200">
                {stat.detail}
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
