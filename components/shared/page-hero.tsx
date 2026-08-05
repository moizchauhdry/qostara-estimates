import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";
import { BlueprintGrid, GlowField } from "@/components/shared/graphics";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  actions?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-surface via-white to-white">
      <GlowField />
      <BlueprintGrid
        size={64}
        className="opacity-60 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_40%,transparent_100%)]"
      />
      <div className="shell relative py-16 sm:py-20 lg:py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center text-signal-600">
            <span aria-hidden className="h-px w-6 bg-signal-500/50" />
            {eyebrow}
          </p>
          <h1 className="mt-5 text-4xl leading-[1.08] font-semibold text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-pretty text-ink-500 sm:text-lg">
            {description}
          </p>
          {actions && (
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {actions}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
