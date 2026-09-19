import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { Photo } from "@/components/shared/photo";
import { Section, SectionHeading } from "@/components/shared/section";
import { audiences } from "@/lib/content";
import { images } from "@/lib/images";

export function Audiences() {
  return (
    <Section id="who-we-serve">
      <SectionHeading
        eyebrow="Who we serve"
        title="Built for Contractors Who Need Reliable Numbers"
      />

      <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <Photo
          image={images.scheduleBoard}
          sizes="(min-width: 1024px) 480px, 100vw"
          className="aspect-[4/3] rounded-3xl shadow-float ring-1 ring-ink-950/8 lg:aspect-auto lg:min-h-full"
        />

        <Stagger as="ul" className="grid gap-4 sm:grid-cols-2">
          {audiences.map((item) => {
            const Icon = item.Icon;
            return (
              <StaggerItem as="li" key={item.title}>
                <article className="group h-full rounded-2xl bg-white p-6 ring-1 ring-ink-950/6 transition duration-500 hover:ring-signal-200/80 sm:p-7">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-ink-950 text-white">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-ink-950">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-500">
                    {item.description}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </Section>
  );
}
