import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  /** Preset background washes keep the page rhythm from repeating itself. */
  tone?: "white" | "brand" | "slate" | "dark";
  className?: string;
  children: ReactNode;
};

const tones = {
  white: "bg-white",
  brand: "bg-gradient-to-b from-white via-brand-50/50 to-white",
  slate: "bg-gradient-to-b from-white via-slate-100/70 to-white",
  dark: "bg-gradient-to-b from-brand-950 via-brand-900 to-brand-950",
} as const;

/**
 * Every marketing section shares the same vertical rhythm, max width, and
 * gutters. Centralising it here means spacing changes happen in one place.
 */
export function Section({
  id,
  tone = "white",
  className = "",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-20 sm:py-28 lg:py-32 ${tones[tone]} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
}: SectionHeadingProps) {
  const isDark = tone === "dark";
  const isCentered = align === "center";

  return (
    <div
      data-reveal
      className={`max-w-3xl ${isCentered ? "mx-auto text-center" : ""}`}
    >
      <p
        className={`text-xs font-semibold tracking-[0.18em] uppercase ${
          isDark ? "text-brand-300" : "text-brand-600"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-5 text-4xl leading-[1.08] font-semibold text-balance sm:text-5xl lg:text-6xl ${
          isDark ? "text-white" : ""
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 max-w-2xl text-lg leading-relaxed text-pretty sm:text-xl ${
            isCentered ? "mx-auto" : ""
          } ${isDark ? "text-brand-100" : "text-slate-500"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
