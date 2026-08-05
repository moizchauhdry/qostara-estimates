import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
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
    <Section id="services" tone="surface">
      <SectionHeading eyebrow="Services" title={heading} description={description} />

      <Stagger
        as="ul"
        className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {items.map((service) => {
          const Icon = service.Icon;
          return (
            <StaggerItem as="li" key={service.slug}>
              <article className="panel group flex h-full flex-col p-7 transition duration-500 ease-smooth hover:-translate-y-1.5 hover:shadow-lifted hover:ring-signal-200/70 sm:p-8">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-signal-50 to-signal-100 text-signal-600 ring-1 ring-signal-200/70 transition duration-500 group-hover:from-signal-600 group-hover:to-signal-700 group-hover:text-white group-hover:shadow-signal">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-6 text-lg font-semibold text-ink-950">
                  {service.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-500">
                  {service.short}
                </p>
                <Button
                  asChild
                  variant="link"
                  className="mt-6 h-auto justify-start px-0 text-signal-600 hover:text-signal-700"
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
