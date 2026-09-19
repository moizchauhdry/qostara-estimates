import { cn } from "@/lib/utils";

/**
 * Faint drafting grid. Rendered with layered gradients rather than an image so
 * it stays crisp at any zoom and costs nothing to download.
 */
export function BlueprintGrid({
  className,
  tone = "light",
  size = 56,
}: {
  className?: string;
  tone?: "light" | "dark";
  size?: number;
}) {
  const line =
    tone === "dark" ? "rgba(255,255,255,0.06)" : "rgba(11,27,41,0.055)";

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage: `linear-gradient(to right, ${line} 1px, transparent 1px), linear-gradient(to bottom, ${line} 1px, transparent 1px)`,
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  );
}

/** Slow-drifting colour wash used behind hero and banner sections. */
export function GlowField({
  className,
  tone = "signal",
}: {
  className?: string;
  tone?: "signal" | "marker" | "mixed";
}) {
  const primary =
    tone === "marker" ? "bg-marker-400/25" : "bg-signal-500/20";
  const secondary =
    tone === "mixed" ? "bg-marker-400/20" : "bg-signal-300/25";

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      <div
        className={cn(
          "animate-drift absolute -top-32 -left-24 size-[min(28rem,100vw)] rounded-full blur-3xl",
          primary,
        )}
      />
      <div
        className={cn(
          "animate-drift absolute -top-24 -right-32 size-[min(26rem,100vw)] rounded-full blur-3xl [animation-delay:-8s]",
          secondary,
        )}
      />
    </div>
  );
}
