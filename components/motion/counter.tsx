"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

type CounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
};

/**
 * Counts up when scrolled into view. The finished figure is always present in
 * the DOM for assistive tech and crawlers; only the animated copy is hidden
 * from the accessibility tree, so nobody hears "0" or a stream of numbers.
 */
export function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.8,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || reduced) return;

    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: setDisplay,
    });

    return () => controls.stop();
  }, [inView, reduced, value, duration]);

  // Prefer-reduced-motion visitors get the final figure immediately; everyone
  // else sees the animated value once the section has entered the viewport.
  const shown = reduced ? value : display;

  const format = (input: number) =>
    input.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });

  return (
    <span ref={ref} className={className}>
      <span aria-hidden className="tabular-nums">
        {prefix}
        {format(shown)}
        {suffix}
      </span>
      <span className="sr-only">
        {prefix}
        {format(value)}
        {suffix}
      </span>
    </span>
  );
}
