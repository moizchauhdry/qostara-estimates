import Link from "next/link";
import { ArrowUpRight, Upload } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { BlueprintGrid, GlowField } from "@/components/shared/graphics";
import { Button } from "@/components/ui/button";

export function ContactBanner() {
  return (
    <section className="shell py-10 sm:py-14">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-ink-950 px-8 py-14 text-center sm:px-12 sm:py-16 lg:px-16">
          <GlowField tone="signal" className="opacity-80" />
          <BlueprintGrid
            tone="dark"
            size={48}
            className="opacity-50 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_40%,transparent_100%)]"
          />

          <div className="relative mx-auto max-w-2xl">
            <p className="eyebrow justify-center text-signal-300">
              <span aria-hidden className="h-px w-6 bg-signal-400/50" />
              Ready when you are
            </p>
            <h2 className="mt-5 text-3xl font-semibold text-balance text-white sm:text-4xl lg:text-5xl">
              Ready to win more bids?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-300 sm:text-lg">
              Upload your drawings and we will scope a free preliminary review
              within one business day — no commitment required.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                asChild
                className="h-12 rounded-full bg-signal-600 px-7 text-base text-white shadow-signal hover:bg-signal-500"
              >
                <Link href="/contact">
                  <Upload data-icon="inline-start" />
                  Upload Plans
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full border-white/20 bg-transparent px-7 text-base text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/pricing">
                  View pricing
                  <ArrowUpRight data-icon="inline-end" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
