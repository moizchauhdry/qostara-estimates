"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds to wait before this element starts moving. */
  delay?: number;
  /** Distance travelled, in pixels. Use 0 for a pure fade. */
  y?: number;
  once?: boolean;
};

/**
 * Scroll-triggered entrance used across every section. Motion is skipped
 * entirely when the visitor prefers reduced motion — the element simply
 * renders in its final state rather than animating faster.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
}: RevealProps) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

type StaggerProps = {
  children: ReactNode;
  className?: string;
  /** Renders as a list when the children are semantically list items. */
  as?: "div" | "ul" | "ol";
};

/** Parent that cascades its `StaggerItem` children into view one after another. */
export function Stagger({ children, className, as = "div" }: StaggerProps) {
  const reduced = useReducedMotion();
  const Component = motion[as];

  if (reduced) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  return (
    <Component
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </Component>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
};

export function StaggerItem({
  children,
  className,
  as = "div",
}: StaggerItemProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  const Component = motion[as];

  return (
    <Component className={className} variants={itemVariants}>
      {children}
    </Component>
  );
}
