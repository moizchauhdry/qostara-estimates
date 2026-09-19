import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Audiences } from "@/components/home/audiences";
import { ContactBanner } from "@/components/home/contact-banner";
import { Serving } from "@/components/home/serving";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/shared/page-hero";
import { Photo } from "@/components/shared/photo";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Qostara Estimates provides professional estimating and preconstruction support — quantity takeoffs, MEP estimating, and shop drawing services for the construction industry.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About — ${siteConfig.name}`,
    description:
      "Professional estimating and preconstruction support for contractors, subcontractors, builders, and developers.",
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Qostara Estimates"
        title="Professional Estimating and Preconstruction Support"
        description="Qostara Estimates provides professional construction estimating, quantity takeoff, MEP estimating, and shop drawing services for contractors, subcontractors, builders, developers, and construction professionals."
        actions={
          <Button
            asChild
            className="h-12 rounded-full bg-signal-600 px-7 text-base text-white shadow-signal hover:bg-signal-700"
          >
            <Link href="/contact">
              Request an Estimate
              <ArrowUpRight data-icon="inline-end" />
            </Link>
          </Button>
        }
      />

      <Section id="what-we-do" tone="surface">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal y={32} className="relative min-w-0">
            <Photo
              image={images.usNetwork}
              sizes="(min-width: 1024px) 560px, 100vw"
              className="aspect-[4/3] rounded-3xl shadow-float ring-1 ring-ink-950/8"
            />
          </Reveal>

          <Reveal className="min-w-0">
            <p className="eyebrow text-signal-600">
              <span aria-hidden className="h-px w-6 bg-signal-500/50" />
              What we do
            </p>
            <h2 className="mt-5 text-[2rem] leading-[1.1] font-semibold text-balance sm:text-4xl lg:text-5xl">
              Clear, Detailed, and Actionable Cost Information
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-pretty text-ink-500 sm:text-lg">
              <p>
                We turn construction plans and specifications into clear,
                detailed, and actionable cost information—helping you
                understand project requirements, prepare competitive bids, and
                make better decisions before construction begins.
              </p>
              <p>
                Estimating a construction project requires more than measuring
                quantities. It requires understanding drawings, specifications,
                materials, labor requirements, subcontractor scopes, and
                current project costs.
              </p>
              <p>
                Our estimating team reviews your project documents, performs
                detailed quantity takeoffs, develops trade-specific estimates,
                and organizes the information into a professional bid-ready
                format.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Audiences />
      <WhyChooseUs tone="surface" />
      <Serving tone="white" />
      <ContactBanner />
    </>
  );
}
