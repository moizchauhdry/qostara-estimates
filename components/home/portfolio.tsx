import { MapPin } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { ProjectVisual } from "@/components/shared/graphics";
import { Section, SectionHeading } from "@/components/shared/section";
import { projects } from "@/lib/content";

export function Portfolio() {
  return (
    <Section id="portfolio" tone="surface">
      <SectionHeading
        eyebrow="Featured projects"
        title="Recent work across sectors and scales"
        description="A sample of jobs where Qostara's takeoffs and cost models helped contractors bid — and win."
      />

      <Stagger
        as="ul"
        className="mt-14 grid gap-6 sm:grid-cols-2"
      >
        {projects.map((project) => (
          <StaggerItem as="li" key={project.title}>
            <article className="panel group overflow-hidden transition duration-500 hover:-translate-y-1.5 hover:shadow-lifted">
              <ProjectVisual
                variant={project.variant}
                className="aspect-[16/10] w-full"
              />
              <div className="p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-signal-50 px-2.5 py-1 text-xs font-semibold text-signal-700 ring-1 ring-signal-100">
                    {project.type}
                  </span>
                  <span className="text-xs text-ink-400">{project.completed}</span>
                </div>
                <h3 className="mt-3 text-xl font-semibold text-ink-950">
                  {project.title}
                </h3>
                <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <dt className="text-ink-400">Budget</dt>
                    <dd className="mt-0.5 font-semibold text-ink-900 tabular-nums">
                      {project.budget}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-ink-400">Location</dt>
                    <dd className="mt-0.5 flex items-center gap-1.5 font-medium text-ink-900">
                      <MapPin className="size-3.5 text-signal-600" aria-hidden />
                      {project.location}
                    </dd>
                  </div>
                </dl>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
