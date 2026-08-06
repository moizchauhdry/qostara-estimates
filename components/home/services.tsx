import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { BlueprintGrid } from "@/components/shared/graphics";
import { Section, SectionHeading } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/content";

export function Services({
  limit,
  heading = "Estimating services built for the bid calendar",
  description = "From first look at the drawings to the sealed bid package — one partner for every stage of preconstruction.",
}: {
  limit?: number;
  heading?: string;
  description?: string;
}) {
  const items = limit ? services.slice(0, limit) : services;

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
        className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {items.map((service) => {
          const Icon = service.Icon;
          return (
            <StaggerItem as="li" key={service.slug}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white/5 p-7 ring-1 ring-white/10 backdrop-blur-sm transition duration-500 ease-smooth hover:-translate-y-1 hover:bg-white/8 hover:ring-signal-400/40 sm:p-8">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-signal-600 text-white shadow-signal transition duration-500 group-hover:bg-signal-500 group-hover:shadow-signal-lifted">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-6 text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-300">
                  {service.short}
                </p>
                <Button
                  asChild
                  variant="link"
                  className="mt-6 h-auto justify-start px-0 text-signal-300 hover:text-white"
                >
                  <Link href="/services">
                    Learn more
                    <ArrowUpRight data-icon="inline-end" />
                  </Link>
                </Button>
              </article>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
