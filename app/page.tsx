import { Audiences } from "@/components/home/audiences";
import { ContactBanner } from "@/components/home/contact-banner";
import { EstimateStructure } from "@/components/home/estimate-structure";
import { Hero } from "@/components/home/hero";
import { Intro } from "@/components/home/intro";
import { ProcessTimeline } from "@/components/home/process-timeline";
import { Serving } from "@/components/home/serving";
import { Services } from "@/components/home/services";
import { TradesGrid } from "@/components/home/trades-grid";
import { WhyChooseUs } from "@/components/home/why-choose-us";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <TradesGrid />
      <ProcessTimeline />
      <Audiences />
      <EstimateStructure />
      <WhyChooseUs />
      <Serving />
      <ContactBanner />
    </>
  );
}
