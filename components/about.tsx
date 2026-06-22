"use client";

import SectionHeading from "./section-heading";
import AnimatedWrapper from "./animated-wrapper";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="About"
          title="Building Digital Solutions That Solve Real Business Problems"
        />

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start mt-4">
          {/* Content */}
          <AnimatedWrapper delay={0.1}>
            <div className="space-y-5">
              <p className="text-muted text-base md:text-lg leading-relaxed">
                I help businesses automate repetitive tasks, streamline
                workflows, and build modern websites that improve productivity
                and save valuable time.
              </p>
              <p className="text-muted text-base md:text-lg leading-relaxed">
                By combining AI-powered automation with clean, conversion-focused
                web design, I deliver solutions that genuinely impact how
                businesses operate — reducing manual work so teams can focus on
                what matters most.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="w-12 h-px bg-gradient-to-r from-primary to-primary-lighter" />
                <span className="text-sm font-medium text-primary">
                  Results-driven approach
                </span>
              </div>
            </div>
          </AnimatedWrapper>

          {/* Education Card */}
          <AnimatedWrapper delay={0.2}>
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8 hover:shadow-lg hover:shadow-primary/[0.04] transition-all duration-500">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/[0.07] flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground">
                    Technical Background
                  </h3>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="p-4 bg-accent/60 rounded-xl">
                  <p className="font-medium text-foreground text-sm">Bachelor&apos;s Degree in Computer Science &amp; Engineering</p>
                  <p className="text-muted text-sm mt-1">
                    Specialization in Artificial Intelligence &amp; Machine Learning
                  </p>
                  <div className="flex flex-col gap-1.5 mt-3 text-xs text-muted">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={12} className="text-primary" />
                      <span>MLR Institute Of Technology</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-primary" />
                      <span>2021 - 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
}
