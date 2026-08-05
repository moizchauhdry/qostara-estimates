import { ContactBanner } from "@/components/home/contact-banner";
import { Faq } from "@/components/home/faq";
import { Hero } from "@/components/home/hero";
import { LogoCloud } from "@/components/home/logo-cloud";
import { Portfolio } from "@/components/home/portfolio";
import { ProcessTimeline } from "@/components/home/process-timeline";
import { Services } from "@/components/home/services";
import { Statistics } from "@/components/home/statistics";
import { Testimonials } from "@/components/home/testimonials";
import { TradesGrid } from "@/components/home/trades-grid";
import { WhyChooseUs } from "@/components/home/why-choose-us";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <Services />
      <WhyChooseUs />
      <ProcessTimeline />
      <TradesGrid />
      <Portfolio />
      <Testimonials />
      <Statistics />
      <Faq />
      <ContactBanner />
    </>
  );
}
