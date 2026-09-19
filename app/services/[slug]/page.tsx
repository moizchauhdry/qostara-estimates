import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactBanner } from "@/components/home/contact-banner";
import { ServiceHero } from "@/components/services/service-hero";
import { ServiceSections } from "@/components/services/service-sections";
import {
  getServicePage,
  serviceHref,
  servicePages,
} from "@/lib/services";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.metaDescription,
    alternates: { canonical: serviceHref(page.slug) },
    openGraph: {
      title: `${page.title} — ${siteConfig.name}`,
      description: page.metaDescription,
      url: `${siteConfig.url}${serviceHref(page.slug)}`,
    },
  };
}

export default async function ServicePage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.summary,
    url: `${siteConfig.url}${serviceHref(page.slug)}`,
    provider: { "@type": "ProfessionalService", name: siteConfig.legalName },
    areaServed: "United States",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero page={page} />
      <ServiceSections sections={page.sections} />
      <ContactBanner
        title={page.closing.title}
        paragraphs={page.closing.paragraphs}
        primary={{ label: page.closing.label, href: "/contact" }}
        secondary={null}
      />
    </>
  );
}
