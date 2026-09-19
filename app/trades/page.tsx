import type { Metadata } from "next";
import { ContactBanner } from "@/components/home/contact-banner";
import { ServiceSections } from "@/components/services/service-sections";
import { PageHero } from "@/components/shared/page-hero";
import { tradeGroups } from "@/lib/content";
import type { ServiceSection } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Estimates Across Major Construction Trades",
  description:
    "Qostara Estimates supports individual trades or complete project scopes — general construction, structural and architectural, MEP, and site and civil work.",
  alternates: { canonical: "/trades" },
  openGraph: {
    title: `Estimates Across Major Construction Trades — ${siteConfig.name}`,
    description:
      "Our estimating capabilities can support individual trades or complete project scopes.",
    url: `${siteConfig.url}/trades`,
  },
};

const sections: ServiceSection[] = tradeGroups.map((group, index) => ({
  id: group.slug,
  title: group.name,
  body: { kind: "chips", items: group.items },
  image: group.image,
  imageSide: index % 2 === 0 ? "right" : "left",
}));

export default function TradesPage() {
  return (
    <>
      <PageHero
        eyebrow="Trades"
        title="Estimates Across Major Construction Trades"
        description="Our estimating capabilities can support individual trades or complete project scopes."
      />
      <ServiceSections sections={sections} />
      <ContactBanner />
    </>
  );
}
