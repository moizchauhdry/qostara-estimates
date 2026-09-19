import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { BlueprintGrid } from "@/components/shared/graphics";
import { Photo } from "@/components/shared/photo";
import { Section, SectionHeading } from "@/components/shared/section";
import { images } from "@/lib/images";
import { serviceHref, servicePages } from "@/lib/services";

export function Services({
  heading = "Our Construction Estimating Services",
  description,
}: {
  heading?: string;
  description?: string;
}) {
  return (
    <Section
      id="services"
      tone="ink"
      className="relative isolate overflow-hidden"
    >
      <BlueprintGrid
        tone="dark"
        size={64}
        className="opacity-45 [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,#000_30%,transparent_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_45%_at_50%_0%,rgba(36,103,160,0.26),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-0 size-[24rem] rounded-full bg-marker-500/10 blur-3xl"
      />

      <SectionHeading
        eyebrow="Services"
        tone="dark"
        title={heading}
        description={description}
      />

      <Stagger
        as="ul"
        className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-6"
      >
        {servicePages.map((service, index) => {
          const Icon = service.Icon;
          // Five cards on a six-column grid: three across the top, two wider below.
          const span = index < 3 ? "lg:col-span-2" : "lg:col-span-3";
          return (
            <StaggerItem as="li" key={service.slug} className={span}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm transition duration-500 ease-smooth hover:-translate-y-1 hover:bg-white/8 hover:ring-signal-400/40">
                <Photo
                  image={images[service.image]}
                  sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
                  className="aspect-[16/9] bg-ink-900"
                  imageClassName="transition duration-700 ease-smooth group-hover:scale-105"
                />
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-signal-600 text-white shadow-signal transition duration-500 group-hover:bg-signal-500 group-hover:shadow-signal-lifted">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {service.cardTitle}
                  </h3>
                  <div className="mt-2.5 flex-1 space-y-3 text-sm leading-relaxed text-ink-300">
                    {service.cardDescription.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <Link
                    href={serviceHref(service.slug)}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-signal-300 transition hover:text-white after:absolute after:inset-0 after:content-['']"
                  >
                    {service.cardCta}
                    <ArrowUpRight className="size-4" aria-hidden />
                  </Link>
                </div>
              </article>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
