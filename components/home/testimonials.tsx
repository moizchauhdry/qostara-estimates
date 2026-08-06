import { Quote, Star } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { BlueprintGrid } from "@/components/shared/graphics";
import { Section, SectionHeading } from "@/components/shared/section";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      tone="surface"
      className="relative isolate overflow-hidden"
    >
      <BlueprintGrid
        tone="light"
        size={64}
        className="opacity-50 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_35%,transparent_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 size-[28rem] -translate-x-1/2 rounded-full bg-signal-500/10 blur-3xl"
      />

      <SectionHeading
        eyebrow="Testimonials"
        title="What estimators and GCs say about Qostara"
        description="Real feedback from the people who stake their bid calendars on our numbers."
      />

      <Stagger
        as="ul"
        className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:gap-6"
      >
        {testimonials.map((item) => (
          <StaggerItem as="li" key={item.name}>
            <figure className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-7 ring-1 ring-ink-950/6 transition duration-500 hover:shadow-lifted hover:ring-signal-200/70 sm:p-8">
              <div
                aria-hidden
                className="absolute -top-8 -right-8 size-28 rounded-full bg-signal-500/5 transition duration-500 group-hover:bg-signal-500/10"
              />

              <div className="relative flex items-start justify-between gap-4">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-ink-950 text-white transition duration-500 group-hover:bg-signal-600">
                  <Quote className="size-4" aria-hidden />
                </span>
                <span
                  className="flex gap-0.5"
                  aria-label={`${item.rating} out of 5 stars`}
                >
                  {Array.from({ length: item.rating }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="size-3.5 fill-marker-400 text-marker-400"
                      aria-hidden
                    />
                  ))}
                </span>
              </div>

              <blockquote className="relative mt-6 flex-1 text-base leading-relaxed text-pretty text-ink-700 sm:text-[1.0625rem]">
                “{item.quote}”
              </blockquote>

              <figcaption className="relative mt-8 flex items-center gap-3.5 border-t border-ink-950/6 pt-6">
                <Avatar className="size-11 shrink-0 ring-2 ring-surface">
                  <AvatarFallback className="bg-gradient-to-br from-signal-100 to-signal-200 text-sm font-semibold text-signal-800">
                    {item.initials}
                  </AvatarFallback>
                </Avatar>
                <span className="min-w-0">
                  <span className="block truncate font-semibold text-ink-950">
                    {item.name}
                  </span>
                  <span className="block truncate text-sm text-ink-500">
                    {item.role}
                    <span className="text-ink-300"> · </span>
                    {item.company}
                  </span>
                </span>
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
