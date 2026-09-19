import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Photo } from "@/components/shared/photo";
import {
  Section,
  SectionHeading,
  type Tone,
} from "@/components/shared/section";
import { projectScales } from "@/lib/content";
import { images } from "@/lib/images";

export function Serving({ tone = "surface" }: { tone?: Tone }) {
  return (
    <Section id="project-scale" tone={tone}>
      <SectionHeading
        eyebrow="Project scale"
        title="Serving Projects of Different Sizes and Complexity"
        description="From smaller residential projects to large commercial and industrial developments, Qostara Estimates provides scalable estimating support based on your project requirements."
      />

      <Stagger
        as="ul"
        className="mt-14 grid gap-5 sm:grid-cols-3 sm:gap-6"
      >
        {projectScales.map((scale) => (
          <StaggerItem as="li" key={scale.label}>
            <figure className="group relative overflow-hidden rounded-3xl shadow-lifted ring-1 ring-ink-950/8">
              <Photo
                image={images[scale.image]}
                sizes="(min-width: 1024px) 380px, (min-width: 640px) 33vw, 100vw"
                className="aspect-[4/5] sm:aspect-[3/4]"
                imageClassName="transition duration-700 ease-smooth group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 text-lg font-semibold text-white">
                {scale.label}
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal delay={0.1} className="mx-auto mt-10 max-w-2xl text-center">
        <p className="text-base leading-relaxed text-pretty text-ink-500 sm:text-lg">
          Whether you are preparing your next bid or developing an early
          project budget, our team can help you build a clearer cost picture.
        </p>
      </Reveal>
    </Section>
  );
}
