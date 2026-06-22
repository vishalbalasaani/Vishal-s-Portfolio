"use client";

import AnimatedWrapper from "./animated-wrapper";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-xl"
      }`}
    >
      {label && (
        <AnimatedWrapper>
          <span className="inline-block text-sm font-medium tracking-wider uppercase text-primary mb-3">
            {label}
          </span>
        </AnimatedWrapper>
      )}
      <AnimatedWrapper delay={0.1}>
        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-foreground leading-tight tracking-tight">
          {title}
        </h2>
      </AnimatedWrapper>
      {description && (
        <AnimatedWrapper delay={0.2}>
          <p className="mt-4 text-muted text-base md:text-lg leading-relaxed">
            {description}
          </p>
        </AnimatedWrapper>
      )}
    </div>
  );
}
