"use client";

import SectionHeading from "./section-heading";
import AnimatedWrapper from "./animated-wrapper";
import { Zap, Bot, Globe } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Zap,
    title: "AI Automations",
    description:
      "Automate repetitive business tasks and workflows to save time and reduce errors.",
  },
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "Custom AI assistants for business operations, customer support, and internal processes.",
  },
  {
    icon: Globe,
    title: "Business Websites",
    description:
      "Professional websites designed for growth, conversions, and a premium brand experience.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Services"
          title="Solutions That Drive Business Growth"
          description="Streamline operations, automate processes, and build your digital presence with tailored solutions."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mt-12">
          {services.map((service, i) => (
            <AnimatedWrapper key={service.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group bg-card rounded-2xl border border-border p-7 md:p-8 h-full hover:shadow-2xl hover:shadow-primary/[0.06] hover:border-primary/20 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/[0.07] flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-muted leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
