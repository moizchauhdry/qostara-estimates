import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ContactBanner } from "@/components/home/contact-banner";
import { Faq } from "@/components/home/faq";
import { ProcessTimeline } from "@/components/home/process-timeline";
import { Services } from "@/components/home/services";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Construction Estimating Services",
  description:
    "Quantity takeoff, construction estimating, mechanical, electrical, and plumbing estimating, and shop drawing and detailing services from Qostara Estimates.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Our Construction Estimating Services"
        description="Professional construction estimating, quantity takeoff, MEP estimating, and shop drawing services for contractors, subcontractors, builders, developers, and construction professionals."
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
      <Services
        heading="Takeoffs, MEP Estimates, and Shop Drawings"
        description="Explore each service to see what we review, what the estimate or drawing package can include, and how the process works."
      />
      <WhyChooseUs />
      <ProcessTimeline />
      <Faq />
      <ContactBanner />
    </>
  );
}
