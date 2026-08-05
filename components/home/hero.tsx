import Link from "next/link";
import { ArrowUpRight, Check, Play } from "lucide-react";
import { TakeoffDrawing, GlowField, BlueprintGrid } from "@/components/shared/graphics";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

const promises = [
  "3–5 day turnaround",
  "CSI-formatted reports",
  "Addendum support included",
];

const floatCards = [
  { label: "Win rate lift", value: "+22%", detail: "after 90 days" },
  { label: "Avg. accuracy", value: "98.4%", detail: "vs awarded cost" },
  { label: "Active bids", value: "47", detail: "this week" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-surface via-white to-white">
      <GlowField tone="mixed" />
      <BlueprintGrid
        className="opacity-70 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_40%,transparent_100%)]"
        size={64}
      />

      <div className="shell relative grid items-center gap-12 pt-16 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pt-24 lg:pb-28">
        <div>
          <Reveal>
            <p className="eyebrow text-signal-600">
              <span aria-hidden className="h-px w-6 bg-signal-500/50" />
              Construction cost estimating
            </p>
            <h1 className="mt-6 max-w-xl text-[2.6rem] leading-[1.05] font-semibold text-balance sm:text-5xl lg:text-[3.5rem]">
              Estimates precise enough to{" "}
              <span className="bg-gradient-to-br from-signal-600 via-signal-500 to-marker-500 bg-clip-text text-transparent">
                win the bid
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-pretty text-ink-500 sm:text-lg">
              Qostara turns drawings into bid-ready quantity takeoffs and cost
              models — so general contractors and specialty trades bid with
              confidence, not guesswork.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="h-12 rounded-full bg-signal-600 px-7 text-base text-white shadow-signal hover:bg-signal-700 hover:shadow-signal-lifted"
            >
              <Link href="/contact">
                Get Free Estimate
                <ArrowUpRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-ink-200 bg-white/80 px-7 text-base text-ink-800 backdrop-blur hover:bg-white"
            >
              <Link href="/services">
                <Play data-icon="inline-start" className="size-3.5 fill-current" />
                See how it works
              </Link>
            </Button>
          </Reveal>

          <Reveal delay={0.18}>
            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2.5">
              {promises.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-ink-500"
                >
                  <Check
                    className="size-4 shrink-0 text-signal-600"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15} y={32} className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-signal-500/15 via-transparent to-marker-400/15 blur-2xl" />
          <div className="panel relative overflow-hidden p-3 sm:p-4">
            <TakeoffDrawing />
          </div>

          {floatCards.map((card, index) => (
            <div
              key={card.label}
              className={`glass absolute hidden px-4 py-3 sm:block ${
                index === 0
                  ? "-top-3 -left-2 lg:-left-8"
                  : index === 1
                    ? "top-1/3 -right-2 lg:-right-6"
                    : "-bottom-2 left-8 lg:left-12"
              }`}
            >
              <p className="text-[0.6875rem] font-semibold tracking-[0.12em] text-ink-400 uppercase">
                {card.label}
              </p>
              <p className="mt-1 text-xl font-semibold tracking-tight text-ink-950 tabular-nums">
                {card.value}
              </p>
              <p className="text-xs text-ink-500">{card.detail}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
