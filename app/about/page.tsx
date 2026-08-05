import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ContactBanner } from "@/components/home/contact-banner";
import { Statistics } from "@/components/home/statistics";
import { Counter } from "@/components/motion/counter";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { PageHero } from "@/components/shared/page-hero";
import { Section, SectionHeading } from "@/components/shared/section";
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { team, timeline, values } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the Datum team — construction cost estimators who treat accuracy as the product. Founded in 2008, serving contractors nationwide.",
};

const foundingStats = [
  { value: 2008, suffix: "", label: "Year founded" },
  { value: 18, suffix: "+", label: "Years in practice" },
  { value: 500, suffix: "+", label: "Active clients" },
  { value: 25, suffix: "+", label: "Estimators on staff" },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            Estimating built on craft,{" "}
            <span className="bg-gradient-to-br from-signal-600 to-signal-500 bg-clip-text text-transparent">
              not volume
            </span>
          </>
        }
        description={`${siteConfig.name} is a construction cost estimating firm that grew from a two-person desk in San Francisco into a distributed team serving general contractors, specialty trades, and owners across the United States.`}
        actions={
          <>
            <Button
              asChild
              className="h-12 rounded-full bg-signal-600 px-7 text-base text-white shadow-signal hover:bg-signal-700"
            >
              <Link href="/contact">
                Work with us
                <ArrowUpRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-ink-200 px-7 text-base text-ink-950 hover:bg-surface"
            >
              <Link href="/services">Our services</Link>
            </Button>
          </>
        }
      />

      <Section tone="surface">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow text-signal-600">
              <span aria-hidden className="h-px w-6 bg-signal-500/50" />
              Our story
            </p>
            <h2 className="mt-5 text-[2rem] leading-[1.1] font-semibold text-balance sm:text-4xl">
              From a Bay Area desk to a national estimating practice
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-500 sm:text-lg">
              <p>
                Amelia Rowe founded Datum in 2008 after a decade as a chief
                estimator at a mid-market general contractor. She saw smaller
                firms competing against nationals with a fraction of the
                preconstruction depth — and built Datum to close that gap.
              </p>
              <p>
                Today we are a team of twenty-five-plus estimators, quantity
                surveyors, and client success leads. We take fewer jobs than the
                big outsourcing shops so every takeoff survives a peer review and
                a superintendent&apos;s scrutiny on site.
              </p>
              <p>
                Whether you are bidding a tilt-up warehouse or pricing a
                design-build healthcare pursuit, you get a named estimator who
                knows your standards — not a rotating queue.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="panel p-8 sm:p-10">
              <p className="text-sm font-semibold tracking-wide text-signal-600 uppercase">
                At a glance
              </p>
              <ul className="mt-8 grid grid-cols-2 gap-8">
                {foundingStats.map((stat) => (
                  <li key={stat.label}>
                    <p className="text-3xl font-semibold tracking-tight text-ink-950 tabular-nums sm:text-4xl">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-2 text-sm font-medium text-ink-500">
                      {stat.label}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Purpose"
          title="What drives every takeoff we deliver"
          description="Two commitments that shape how we scope work, staff accounts, and review deliverables before they leave the desk."
        />

        <Stagger className="mt-14 grid gap-5 lg:grid-cols-2">
          <StaggerItem>
            <article className="panel h-full p-8 sm:p-10">
              <p className="eyebrow text-marker-600">
                <span aria-hidden className="h-px w-6 bg-marker-500/50" />
                Mission
              </p>
              <h3 className="mt-5 text-2xl font-semibold text-ink-950">
                Give every contractor bid-ready numbers they can defend
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink-500">
                We turn drawings into precise quantity takeoffs and cost models
                — CSI-formatted, source-referenced, and reviewed by a second
                estimator before delivery. Accuracy is the product, not a
                marketing line.
              </p>
            </article>
          </StaggerItem>
          <StaggerItem>
            <article className="panel h-full bg-gradient-to-br from-ink-950 to-ink-900 p-8 ring-ink-800 sm:p-10">
              <p className="eyebrow text-signal-300">
                <span aria-hidden className="h-px w-6 bg-signal-400/50" />
                Vision
              </p>
              <h3 className="mt-5 text-2xl font-semibold text-white">
                Preconstruction depth for the mid-market
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink-300">
                We believe growing contractors and specialty trades deserve the
                same estimating rigour as the nationals — without the overhead
                of a full in-house department or the opacity of a black-box
                outsourcing shop.
              </p>
            </article>
          </StaggerItem>
        </Stagger>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="Values"
          title="How we work when the bid date is close"
          description="These principles show up in every scope review, every peer check, and every conversation with your team."
        />

        <Stagger
          as="ul"
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {values.map((value) => {
            const Icon = value.Icon;
            return (
              <StaggerItem as="li" key={value.title}>
                <article className="panel flex h-full flex-col p-7 sm:p-8">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-ink-950 text-white">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-ink-950">
                    {value.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-500">
                    {value.description}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      <Section id="team">
        <SectionHeading
          eyebrow="Team"
          title="Meet the people behind your numbers"
          description="Senior estimators lead every account. You always know who is on your set and how to reach them."
        />

        <Stagger
          as="ul"
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {team.map((member) => (
            <StaggerItem as="li" key={member.name}>
              <article className="panel flex h-full flex-col p-7 sm:p-8">
                <Avatar size="lg" className="size-14">
                  <AvatarFallback className="bg-signal-100 text-base font-semibold text-signal-700">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <h3 className="mt-5 text-lg font-semibold text-ink-950">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-signal-600">
                  {member.role}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">
                  {member.bio}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="Timeline"
          title="Eighteen years of measured growth"
          description="We expanded deliberately — adding capacity only when quality could scale with it."
        />

        <div className="relative mx-auto mt-14 max-w-2xl">
          <div
            aria-hidden
            className="absolute top-0 bottom-0 left-[1.125rem] w-px bg-gradient-to-b from-signal-200 via-signal-400/60 to-transparent sm:left-1/2 sm:-translate-x-px"
          />

          <ol className="space-y-10">
            {timeline.map((item, index) => (
              <Reveal key={item.year} delay={index * 0.05}>
                <li className="relative grid gap-4 sm:grid-cols-2 sm:gap-8">
                  <div
                    className={`flex items-start gap-4 sm:justify-end sm:pr-8 ${
                      index % 2 === 1 ? "sm:order-2 sm:justify-start sm:pl-8 sm:pr-0" : ""
                    }`}
                  >
                    <span
                      aria-hidden
                      className="relative z-10 inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-signal-600 text-xs font-semibold text-white shadow-signal sm:absolute sm:top-0 sm:left-1/2 sm:-translate-x-1/2"
                    >
                      {item.year.slice(2)}
                    </span>
                    <div
                      className={`panel flex-1 p-6 sm:max-w-xs ${
                        index % 2 === 1 ? "sm:ml-auto" : "sm:mr-auto"
                      }`}
                    >
                      <p className="text-sm font-semibold text-signal-600 tabular-nums">
                        {item.year}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-ink-950">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div
                    aria-hidden
                    className={`hidden sm:block ${index % 2 === 1 ? "sm:order-1" : ""}`}
                  />
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <Statistics />
      <ContactBanner />
    </>
  );
}
