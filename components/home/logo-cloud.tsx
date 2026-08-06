import { Counter } from "@/components/motion/counter";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { trustPartners, trustStats } from "@/lib/content";

/** Compact trust strip — meant to sit inside the hero, not as its own section. */
export function TrustBand() {
  return (
    <div id="trust" className="relative border-t border-ink-950/8">
      <div className="shell py-10 sm:py-12 lg:py-14">
        <Reveal className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow text-signal-600">
              <span aria-hidden className="h-px w-6 bg-signal-500/50" />
              Social proof
            </p>
            <h2 className="mt-3 text-xl font-semibold tracking-tight text-ink-950 sm:text-2xl">
              Trusted by contractors who bid to win
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-500">
            Takeoff volume from GCs and specialty trades across commercial,
            healthcare, and industrial pursuits.
          </p>
        </Reveal>

        <Stagger
          as="ul"
          className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-ink-950/8 ring-1 ring-ink-950/6 sm:grid-cols-4"
        >
          {trustStats.map((stat) => (
            <StaggerItem as="li" key={stat.label} className="bg-white/80 px-5 py-6 backdrop-blur-sm sm:px-6">
              <p className="bg-gradient-to-br from-ink-950 via-ink-800 to-signal-600 bg-clip-text text-2xl font-semibold tracking-tight text-transparent tabular-nums sm:text-3xl">
                <Counter
                  value={stat.value}
                  prefix={"prefix" in stat ? stat.prefix : undefined}
                  suffix={stat.suffix}
                  decimals={"decimals" in stat ? stat.decimals : 0}
                />
              </p>
              <p className="mt-2 text-sm font-semibold text-ink-950">
                {stat.label}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-ink-500">
                {stat.detail}
              </p>
            </StaggerItem>
          ))}
        </Stagger>

        <Stagger
          as="ul"
          className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          {trustPartners.map((partner) => (
            <StaggerItem as="li" key={partner.name}>
              <div className="group flex items-center gap-2.5 rounded-full bg-white/70 py-1.5 pr-3.5 pl-1.5 ring-1 ring-ink-950/6 transition duration-300 hover:bg-white hover:ring-signal-200/80">
                <span className="flex size-7 items-center justify-center rounded-full bg-ink-950 text-[10px] font-bold tracking-wide text-white transition duration-300 group-hover:bg-signal-600">
                  {partner.mark}
                </span>
                <span className="text-sm font-medium text-ink-700">
                  {partner.name}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </div>
  );
}
