import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

type Tone = "white" | "surface" | "ink";

const toneStyles: Record<Tone, string> = {
  white: "bg-white",
  surface: "bg-surface",
  ink: "bg-ink-950 text-ink-300",
};

type SectionProps = {
  id?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
};

/**
 * One source of truth for section rhythm: vertical padding, max width, and
 * gutters. Changing the page's spacing means editing this file only.
 */
export function Section({
  id,
  tone = "white",
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-28 py-20 sm:py-24 lg:py-28",
        toneStyles[tone],
        className,
      )}
    >
      <div className="shell">{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const isDark = tone === "dark";
  const isCentered = align === "center";

  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        isCentered && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "eyebrow",
            isCentered && "justify-center",
            isDark ? "text-signal-300" : "text-signal-600",
          )}
        >
          <span
            aria-hidden
            className={cn(
              "h-px w-6",
              isDark ? "bg-signal-400/60" : "bg-signal-500/50",
            )}
          />
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "mt-5 text-[2rem] leading-[1.1] font-semibold text-balance sm:text-4xl lg:text-5xl",
          isDark && "text-white",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-relaxed text-pretty sm:text-lg",
            isCentered && "mx-auto",
            isDark ? "text-ink-300" : "text-ink-500",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
