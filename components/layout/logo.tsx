import Image from "next/image";
import lockupDark from "@/public/brand/logo-inverted.png";
import lockup from "@/public/brand/logo.png";
import markDark from "@/public/brand/mark-inverted.png";
import mark from "@/public/brand/mark.png";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * The Qostara lockup: the magnifier-and-rule mark beside the wordmark.
 * `inverted` swaps in the light artwork for placement on ink surfaces.
 */
export function Logo({
  inverted = false,
  markOnly = false,
  className,
}: {
  inverted?: boolean;
  markOnly?: boolean;
  className?: string;
}) {
  const source = markOnly
    ? inverted
      ? markDark
      : mark
    : inverted
      ? lockupDark
      : lockup;

  return (
    <Image
      src={source}
      alt={`${siteConfig.name} — ${siteConfig.shortTagline}`}
      priority
      sizes="200px"
      className={cn(
        "w-auto transition duration-500 ease-smooth group-hover:scale-[1.03]",
        markOnly ? "h-9" : "h-8 sm:h-9",
        className,
      )}
    />
  );
}
