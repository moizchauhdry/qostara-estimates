import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { ContactBanner } from "@/components/home/contact-banner";
import { Faq } from "@/components/home/faq";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { PageHero } from "@/components/shared/page-hero";
import { Section, SectionHeading } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import {
  faqs,
  processSteps,
  services,
  whyChooseUs,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Construction cost estimation, material takeoff, quantity surveying, bid preparation, design-build estimates, and labor cost analysis — delivered by certified estimators.",
};

const serviceFaqs = faqs.slice(0, 6);

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Every stage of preconstruction,{" "}
            <span className="bg-gradient-to-br from-signal-600 to-signal-500 bg-clip-text text-transparent">
              one partner
            </span>
          </>
        }
        description="From first look at the drawings to the sealed bid package — Qostara delivers quantity takeoffs, cost models, and proposal support built for the bid calendar."
        actions={
          <>
            <Button
              asChild
              className="h-12 rounded-full bg-signal-600 px-7 text-base text-white shadow-signal hover:bg-signal-700"
            >
              <Link href="/contact">
                Get a quote
                <ArrowUpRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-ink-200 px-7 text-base text-ink-950 hover:bg-surface"
            >
              <Link href="/pricing">View pricing</Link>
            </Button>
          </>
        }
      />

      <Section id="services-detail" tone="surface">
        <SectionHeading
          eyebrow="What we do"
          title="Estimating services built for the bid calendar"
          description="Each service includes a named estimator, dual review, and deliverables your supers can trace back to the drawing set."
        />

        <Stagger as="ul" className="mt-14 space-y-6">
          {services.map((service) => {
            const Icon = service.Icon;
            return (
              <StaggerItem as="li" key={service.slug}>
                <article className="panel overflow-hidden p-7 sm:p-8 lg:p-10">
                  <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:gap-10">
                    <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-signal-50 to-signal-100 text-signal-600 ring-1 ring-signal-200/70">
                      <Icon className="size-6" aria-hidden />
                    </span>

                    <div>
                      <h3 className="text-2xl font-semibold text-ink-950">
                        {service.title}
                      </h3>
                      <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink-500">
                        {service.description}
                      </p>

                      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                        {service.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex items-start gap-2.5 text-sm text-ink-600"
                          >
                            <Check
                              className="mt-0.5 size-4 shrink-0 text-signal-600"
                              aria-hidden
                            />
                            {benefit}
                          </li>
                        ))}
                      </ul>

                      <Button
                        asChild
                        className="mt-8 h-11 rounded-full bg-signal-600 px-6 text-white shadow-signal hover:bg-signal-700"
                      >
                        <Link href="/contact">
                          Request this service
                          <ArrowUpRight data-icon="inline-end" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Why teams choose Qostara"
          title="The advantages that show up on every deliverable"
          description="Accuracy, speed, and transparency — without the overhead of a full in-house department."
        />

        <Stagger
          as="ul"
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {whyChooseUs.map((item) => {
            const Icon = item.Icon;
            return (
              <StaggerItem as="li" key={item.title}>
                <article className="group relative overflow-hidden rounded-2xl bg-white p-7 ring-1 ring-ink-950/6 transition duration-500 hover:ring-signal-200/80 sm:p-8">
                  <div
                    aria-hidden
                    className="absolute -top-10 -right-10 size-28 rounded-full bg-signal-500/5 transition duration-500 group-hover:bg-signal-500/10"
                  />
                  <span className="relative inline-flex size-11 items-center justify-center rounded-xl bg-ink-950 text-white">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="relative mt-5 text-lg font-semibold text-ink-950">
                    {item.title}
                  </h3>
                  <p className="relative mt-2.5 text-sm leading-relaxed text-ink-500">
                    {item.description}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      <Section id="process" tone="ink" className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(36,103,160,0.22),transparent_70%)]"
        />

        <SectionHeading
          eyebrow="How it works"
          tone="dark"
          title="Six steps from drawings to a sealed bid"
          description="A clear process, a named estimator, and a deliverable your supers can actually use on site."
        />

        <Stagger
          as="ol"
          className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute top-[2.25rem] right-8 left-8 hidden h-px bg-gradient-to-r from-transparent via-signal-400/40 to-transparent lg:block"
          />

          {processSteps.map((step) => (
            <StaggerItem as="li" key={step.step}>
              <article className="relative h-full rounded-2xl bg-white/5 p-7 ring-1 ring-white/10 backdrop-blur-sm transition duration-500 hover:bg-white/8 hover:ring-signal-400/40 sm:p-8">
                <span className="inline-flex size-11 items-center justify-center rounded-full bg-signal-600 text-sm font-semibold text-white shadow-signal tabular-nums">
                  {step.step}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-300">
                  {step.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section tone="surface">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center text-signal-600">
            <span aria-hidden className="h-px w-6 bg-signal-500/50" />
            Why Qostara
          </p>
          <h2 className="mt-5 text-[2rem] leading-[1.1] font-semibold text-balance sm:text-4xl">
            Fewer jobs. Higher standards. Numbers you can defend.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-500 sm:text-lg">
            We take fewer accounts than the big outsourcing shops so every
            takeoff receives a peer review before it leaves the desk. Dual
            review, CSI-formatted deliverables, and a named estimator from
            kickoff through award — that is the Qostara difference.
          </p>
          <Button
            asChild
            className="mt-8 h-11 rounded-full bg-signal-600 px-6 text-white shadow-signal hover:bg-signal-700"
          >
            <Link href="/about">
              Learn about our team
              <ArrowUpRight data-icon="inline-end" />
            </Link>
          </Button>
        </Reveal>
      </Section>

      <Faq items={serviceFaqs} id="services-faq" />
      <ContactBanner />
    </>
  );
}
