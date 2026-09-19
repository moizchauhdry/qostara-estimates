import { Reveal } from "@/components/motion/reveal";
import { Photo } from "@/components/shared/photo";
import { Section } from "@/components/shared/section";
import { images } from "@/lib/images";

export function Intro() {
  return (
    <Section id="approach">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="min-w-0">
          <p className="eyebrow text-signal-600">
            <span aria-hidden className="h-px w-6 bg-signal-500/50" />
            Our approach
          </p>
          <h2 className="mt-5 text-[2rem] leading-[1.1] font-semibold text-balance sm:text-4xl lg:text-5xl">
            Your Plans. Our Expertise. A Clearer Path to Your Bid.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-pretty text-ink-500 sm:text-lg">
            <p>
              Estimating a construction project requires more than measuring
              quantities. It requires understanding drawings, specifications,
              materials, labor requirements, subcontractor scopes, and current
              project costs.
            </p>
            <p>
              At Qostara Estimates, our estimating team reviews your project
              documents, performs detailed quantity takeoffs, develops
              trade-specific estimates, and organizes the information into a
              professional bid-ready format.
            </p>
            <p>
              Whether you need a single-trade takeoff or a complete multi-trade
              estimate, we help turn complex construction documents into usable
              cost information.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} y={32} className="relative min-w-0">
          <div
            aria-hidden
            className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-signal-500/15 via-transparent to-marker-400/15 blur-2xl"
          />
          <Photo
            image={images.planningTeam}
            sizes="(min-width: 1024px) 560px, 100vw"
            className="aspect-[4/3] rounded-3xl shadow-float ring-1 ring-ink-950/8"
          />
        </Reveal>
      </div>
    </Section>
  );
}
