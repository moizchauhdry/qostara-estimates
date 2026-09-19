import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Photo } from "@/components/shared/photo";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950">
      <Photo
        image={images.sunsetSite}
        sizes="100vw"
        preload
        className="absolute inset-0 -z-10 bg-ink-950"
        imageClassName="object-[72%_center] lg:object-center"
      />
      {/* Darkens the photo where the copy sits; the building and crane stay clear on the right. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-ink-950/70 lg:bg-transparent lg:bg-gradient-to-r lg:from-ink-950/90 lg:via-ink-950/55 lg:to-transparent"
      />

      <div className="shell relative flex min-h-[34rem] items-center py-20 sm:min-h-[38rem] lg:min-h-[42rem] lg:py-28">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow text-marker-300">
              <span aria-hidden className="h-px w-6 bg-marker-300/60" />
              Qostara Estimates
            </p>
            <h1 className="mt-6 text-[2.5rem] leading-[1.05] font-semibold text-balance text-white sm:text-5xl lg:text-[3.5rem]">
              Construction Estimating Built for Confident Bidding
            </h1>
            <p className="mt-5 text-lg font-semibold text-marker-300 sm:text-xl">
              Accurate Takeoffs. Detailed Estimates. Better Bids.
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-pretty text-ink-200 sm:text-lg">
              Qostara Estimates provides professional construction estimating,
              quantity takeoff, MEP estimating, and shop drawing services for
              contractors, subcontractors, builders, developers, and
              construction professionals.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-pretty text-ink-200">
              We turn construction plans and specifications into clear,
              detailed, and actionable cost information—helping you understand
              project requirements, prepare competitive bids, and make better
              decisions before construction begins.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="h-12 rounded-full bg-signal-600 px-7 text-base text-white shadow-signal hover:bg-signal-500 hover:shadow-signal-lifted"
            >
              <Link href="/contact">
                Request an Estimate
                <ArrowUpRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-white/30 bg-white/10 px-7 text-base text-white backdrop-blur hover:bg-white/20 hover:text-white"
            >
              <a href={siteConfig.phoneHref}>
                <Phone data-icon="inline-start" />
                Talk to an Estimator
              </a>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
