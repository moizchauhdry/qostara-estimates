import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { BlueprintGrid, GlowField } from "@/components/shared/graphics";
import { Photo } from "@/components/shared/photo";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/images";
import type { ServicePage } from "@/lib/services";

export function ServiceHero({ page }: { page: ServicePage }) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-surface via-white to-white">
      <GlowField />
      <BlueprintGrid
        size={64}
        className="opacity-60 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_40%,transparent_100%)]"
      />

      <div className="shell relative grid items-center gap-12 py-14 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-24">
        <Reveal className="min-w-0">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-signal-600 transition hover:text-signal-700"
          >
            <ArrowLeft className="size-4" aria-hidden />
            All services
          </Link>
          <h1 className="mt-5 text-4xl leading-[1.08] font-semibold text-balance sm:text-5xl">
            {page.title}
          </h1>
          <p className="mt-5 text-xl leading-snug font-semibold text-balance text-signal-700 sm:text-2xl">
            {page.headline}
          </p>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-pretty text-ink-500 sm:text-lg">
            {page.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Button
            asChild
            className="mt-8 h-12 rounded-full bg-signal-600 px-7 text-base text-white shadow-signal hover:bg-signal-700 hover:shadow-signal-lifted"
          >
            <Link href="/contact">
              {page.cta.label}
              <ArrowUpRight data-icon="inline-end" />
            </Link>
          </Button>
        </Reveal>

        <Reveal delay={0.12} y={32} className="relative min-w-0">
          <div
            aria-hidden
            className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-signal-500/15 via-transparent to-marker-400/15 blur-2xl"
          />
          <Photo
            image={images[page.image]}
            sizes="(min-width: 1024px) 560px, 100vw"
            preload
            className="aspect-[4/3] rounded-3xl shadow-float ring-1 ring-ink-950/8"
          />
        </Reveal>
      </div>
    </section>
  );
}
