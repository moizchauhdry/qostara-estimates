"use client";

import { Star } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Section, SectionHeading } from "@/components/shared/section";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeading
        eyebrow="Testimonials"
        title="What estimators and GCs say about Qostara"
        description="Real feedback from the people who stake their bid calendars on our numbers."
      />

      <Reveal className="relative mt-14">
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
          aria-label="Client testimonials"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((item) => (
              <CarouselItem
                key={item.name}
                className="pl-4 md:basis-1/2 lg:basis-1/2"
              >
                <figure className="panel flex h-full flex-col p-7 sm:p-8">
                  <span className="flex gap-0.5" aria-label={`${item.rating} out of 5 stars`}>
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <Star
                        key={index}
                        className="size-4 fill-marker-400 text-marker-400"
                        aria-hidden
                      />
                    ))}
                  </span>
                  <blockquote className="mt-5 flex-1 text-base leading-relaxed text-pretty text-ink-700 sm:text-lg">
                    “{item.quote}”
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-3.5">
                    <Avatar className="size-11 ring-2 ring-white">
                      <AvatarFallback className="bg-gradient-to-br from-signal-100 to-signal-200 text-sm font-semibold text-signal-800">
                        {item.initials}
                      </AvatarFallback>
                    </Avatar>
                    <span>
                      <span className="block font-semibold text-ink-950">
                        {item.name}
                      </span>
                      <span className="block text-sm text-ink-500">
                        {item.role}, {item.company}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex items-center justify-center gap-3">
            <CarouselPrevious className="static translate-y-0 rounded-full" />
            <CarouselNext className="static translate-y-0 rounded-full" />
          </div>
        </Carousel>
      </Reveal>
    </Section>
  );
}
