import { Check } from "lucide-react";
import { ProcessTimeline } from "@/components/home/process-timeline";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Photo } from "@/components/shared/photo";
import { Section } from "@/components/shared/section";
import { images } from "@/lib/images";
import type { ServiceBody, ServiceSection } from "@/lib/services";
import { cn } from "@/lib/utils";

type Tone = "white" | "surface";

/** Bodies compact enough to sit in a column beside a photo. */
function fitsBesideImage(body: ServiceBody) {
  return (
    body.kind === "none" || body.kind === "chips" || body.kind === "checklist"
  );
}

export function ServiceSections({ sections }: { sections: ServiceSection[] }) {
  let lightIndex = 0;

  return (
    <>
      {sections.map((section) => {
        if (section.body.kind === "steps") {
          return (
            <ProcessTimeline
              key={section.id}
              id={section.id}
              eyebrow={section.eyebrow}
              title={section.title}
              steps={section.body.items.map((item, index) => ({
                ...item,
                step: String(index + 1).padStart(2, "0"),
              }))}
            />
          );
        }

        const tone: Tone = lightIndex++ % 2 === 0 ? "white" : "surface";
        return <SectionBlock key={section.id} section={section} tone={tone} />;
      })}
    </>
  );
}

function SectionBlock({
  section,
  tone,
}: {
  section: ServiceSection;
  tone: Tone;
}) {
  const { body, image } = section;
  const split = Boolean(image) && fitsBesideImage(body);

  if (split && image) {
    return (
      <Section id={section.id} tone={tone}>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div
            className={cn(
              "min-w-0",
              section.imageSide === "left" && "lg:order-last",
            )}
          >
            <Reveal>
              <SectionCopy section={section} align="left" />
            </Reveal>
            <div className="mt-8">
              <Body body={body} tone={tone} align="left" />
            </div>
            <Footnote text={section.footnote} align="left" />
          </div>

          <Reveal y={32} className="relative min-w-0">
            <Photo
              image={images[image]}
              sizes="(min-width: 1024px) 560px, 100vw"
              className="aspect-[4/3] rounded-3xl shadow-float ring-1 ring-ink-950/8"
            />
          </Reveal>
        </div>
      </Section>
    );
  }

  return (
    <Section id={section.id} tone={tone}>
      <Reveal className="mx-auto max-w-3xl text-center">
        <SectionCopy section={section} align="center" />
      </Reveal>
      <div className="mt-12">
        <Body body={body} tone={tone} align="center" />
      </div>
      <Footnote text={section.footnote} align="center" />
    </Section>
  );
}

function SectionCopy({
  section,
  align,
}: {
  section: ServiceSection;
  align: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <>
      {section.eyebrow && (
        <p
          className={cn(
            "eyebrow text-signal-600",
            centered && "justify-center",
          )}
        >
          <span aria-hidden className="h-px w-6 bg-signal-500/50" />
          {section.eyebrow}
        </p>
      )}
      <h2 className="mt-5 text-[2rem] leading-[1.1] font-semibold text-balance sm:text-4xl">
        {section.title}
      </h2>
      {section.paragraphs && (
        <div
          className={cn(
            "mt-5 space-y-4 text-base leading-relaxed text-pretty text-ink-500 sm:text-lg",
            centered && "mx-auto max-w-2xl",
          )}
        >
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      )}
    </>
  );
}

function Footnote({
  text,
  align,
}: {
  text?: string;
  align: "left" | "center";
}) {
  if (!text) return null;
  return (
    <Reveal
      className={cn(
        "mt-8 text-base leading-relaxed text-pretty text-ink-700 sm:text-lg",
        align === "center" && "mx-auto max-w-2xl text-center",
      )}
    >
      <p>{text}</p>
    </Reveal>
  );
}

function Body({
  body,
  tone,
  align,
}: {
  body: ServiceBody;
  tone: Tone;
  align: "left" | "center";
}) {
  const centered = align === "center";

  switch (body.kind) {
    case "none":
      return null;

    case "chips":
      return (
        <Stagger
          as="ul"
          className={cn(
            "flex flex-wrap gap-2.5",
            centered && "justify-center",
          )}
        >
          {body.items.map((item) => (
            <StaggerItem as="li" key={item}>
              <span
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-ink-800 ring-1 ring-ink-950/8",
                  tone === "white" ? "bg-surface" : "bg-white",
                )}
              >
                <Check
                  className="size-3.5 shrink-0 text-signal-600"
                  aria-hidden
                />
                {item}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      );

    case "checklist":
      return (
        <Stagger
          as="ul"
          className={cn(
            "grid gap-3",
            centered ? "mx-auto max-w-4xl sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2",
          )}
        >
          {body.items.map((item) => (
            <StaggerItem as="li" key={item}>
              <span
                className={cn(
                  "flex h-full items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-medium text-ink-800 ring-1 ring-ink-950/6",
                  tone === "white" ? "bg-surface" : "bg-white",
                )}
              >
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-signal-600 text-white">
                  <Check className="size-3.5" aria-hidden />
                </span>
                {item}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      );

    case "formula":
      return (
        <Reveal>
          <ul
            className={cn(
              "flex flex-wrap items-center gap-x-3 gap-y-3",
              centered && "justify-center",
            )}
          >
            {body.items.map((item, index) => (
              <li key={item} className="flex items-center gap-3">
                {index > 0 && (
                  <span
                    aria-hidden
                    className="text-lg font-semibold text-marker-600"
                  >
                    +
                  </span>
                )}
                <span className="rounded-full bg-ink-950 px-4 py-2 text-sm font-semibold text-white">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      );

    case "cards":
      return (
        <Stagger
          as="ul"
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {body.items.map((item) => (
            <StaggerItem as="li" key={item.title}>
              <article
                className={cn(
                  "h-full rounded-2xl p-7 ring-1 ring-ink-950/6 transition duration-500 hover:-translate-y-1 hover:shadow-lifted hover:ring-signal-200/80",
                  tone === "white" ? "bg-surface" : "bg-white",
                )}
              >
                <span
                  aria-hidden
                  className="block h-1 w-8 rounded-full bg-signal-600"
                />
                <h3 className="mt-5 text-lg font-semibold text-ink-950">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-500">
                  {item.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      );

    case "groups":
      return (
        <Stagger
          as="ul"
          className={cn(
            "grid gap-5 sm:grid-cols-2",
            body.items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3",
          )}
        >
          {body.items.map((group) => (
            <StaggerItem as="li" key={group.title}>
              <article
                className={cn(
                  "h-full rounded-2xl p-7 ring-1 ring-ink-950/6",
                  tone === "white" ? "bg-surface" : "bg-white",
                )}
              >
                <h3 className="text-lg font-semibold text-ink-950">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-ink-600"
                    >
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-signal-600"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      );

    case "flow":
      return (
        <Stagger
          as="ol"
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {body.items.map((item, index) => (
            <StaggerItem as="li" key={item}>
              <div
                className={cn(
                  "flex h-full items-center gap-4 rounded-2xl p-5 ring-1 ring-ink-950/6",
                  tone === "white" ? "bg-surface" : "bg-white",
                )}
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-signal-600 text-sm font-semibold text-white shadow-signal tabular-nums">
                  {index + 1}
                </span>
                <span className="text-sm font-semibold text-ink-950">
                  {item}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      );

    case "steps":
      // Rendered as its own dark band by ServiceSections, never through here.
      return null;
  }
}
