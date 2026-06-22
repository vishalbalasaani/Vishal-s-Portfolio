"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface AnimatedWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
}

const getVariants = (direction: string, distance: number = 30): Variants => {
  const directions: Record<string, { x?: number; y?: number }> = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  return {
    hidden: {
      opacity: 0,
      ...directions[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };
};

export default function AnimatedWrapper({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.5,
}: AnimatedWrapperProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      variants={getVariants(direction)}
      className={className}
    >
      {children}
    </motion.div>
  );
}
