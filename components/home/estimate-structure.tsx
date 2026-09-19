import { Check } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Photo } from "@/components/shared/photo";
import { Section } from "@/components/shared/section";
import { estimateComponents } from "@/lib/content";
import { images } from "@/lib/images";

export function EstimateStructure() {
  return (
    <Section id="estimate-structure" tone="surface">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal y={32} className="relative order-last min-w-0 lg:order-first">
          <Photo
            image={images.costBreakdown}
            sizes="(min-width: 1024px) 560px, 100vw"
            className="aspect-[4/3] rounded-3xl shadow-float ring-1 ring-ink-950/8"
          />
        </Reveal>

        <div className="min-w-0">
          <Reveal>
            <p className="eyebrow text-signal-600">
              <span aria-hidden className="h-px w-6 bg-signal-500/50" />
              The deliverable
            </p>
            <h2 className="mt-5 text-[2rem] leading-[1.1] font-semibold text-balance sm:text-4xl lg:text-5xl">
              Detailed Estimates. Organized Information.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-pretty text-ink-500 sm:text-lg">
              A Qostara estimate can be structured around:
            </p>
          </Reveal>

          <Stagger
            as="ul"
            className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2"
          >
            {estimateComponents.map((item) => (
              <StaggerItem as="li" key={item}>
                <span className="flex items-center gap-2.5 text-sm font-medium text-ink-800">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-signal-600 text-white">
                    <Check className="size-3" aria-hidden />
                  </span>
                  {item}
                </span>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1}>
            <p className="mt-6 text-sm leading-relaxed text-ink-500">
              The exact estimate structure is tailored to your project and
              scope.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
