import { cn } from "@/lib/utils";

/**
 * The mark is a survey datum: a benchmark triangle resting on a reference
 * line — the fixed point every measurement on a site is taken from.
 */
export function Logo({
  inverted = false,
  className,
}: {
  inverted?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("group flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "flex size-9 items-center justify-center rounded-xl transition duration-500 ease-smooth group-hover:scale-105",
          inverted
            ? "bg-white shadow-lifted"
            : "bg-gradient-to-br from-ink-800 to-ink-950 shadow-soft",
        )}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
          className={cn("size-5", inverted ? "text-ink-950" : "text-white")}
        >
          <path d="M12 5.5 18.5 16h-13z" fill="currentColor" />
          <path
            d="M3.5 19.5h17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 5.5v14"
            stroke="#f59e0b"
            strokeWidth="1.6"
            strokeLinecap="round"
            opacity="0.9"
          />
        </svg>
      </span>
      <span
        className={cn(
          "text-[1.0625rem] font-semibold tracking-[-0.02em]",
          inverted ? "text-white" : "text-ink-950",
        )}
      >
        Datum
        <span className={inverted ? "text-signal-300" : "text-signal-600"}>
          .
        </span>
      </span>
    </span>
  );
}
