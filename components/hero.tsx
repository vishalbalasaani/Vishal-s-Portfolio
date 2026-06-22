"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ===== PHOTO — absolute positioned, right side, gradient blend ===== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Photo container — positioned to the right */}
        <div
          className="absolute top-0 right-0 bottom-0 w-full md:w-[60%] lg:w-[55%]"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 20%, black 100%)",
            maskImage: "linear-gradient(to right, transparent 0%, black 20%, black 100%)"
          }}
        >
          <div
            className="absolute inset-0 flex items-end justify-center md:justify-end"
            style={{
              WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 15%, black 100%)",
              maskImage: "linear-gradient(to top, transparent 0%, black 15%, black 100%)"
            }}
          >
            <img
              src="/my-photo-final.png?v=1"
              alt="Profile Picture"
              className="w-[90%] md:w-[80%] lg:w-[70%] h-auto object-contain object-bottom mix-blend-lighten"
            />
          </div>

          {/* Left gradient blend — fades photo into background */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #0A0A0A 0%, #0A0A0A 5%, rgba(10,10,10,0.95) 15%, rgba(10,10,10,0.7) 30%, rgba(10,10,10,0.3) 45%, transparent 65%)",
            }}
          />

          {/* Bottom gradient blend */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, #0A0A0A 0%, rgba(10,10,10,0.6) 15%, transparent 35%)",
            }}
          />

          {/* Top gradient blend */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, #0A0A0A 0%, rgba(10,10,10,0.4) 8%, transparent 20%)",
            }}
          />

          {/* Subtle brand color tint overlay */}
          <div className="absolute inset-0 bg-primary/[0.03]" />
        </div>

        {/* Mobile overlay — stronger fade for text readability */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.7) 40%, rgba(10,10,10,0.9) 100%)",
          }}
        />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 w-full pt-28 pb-20 md:pt-32 md:pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-xl lg:max-w-lg"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-wide text-white/90 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
              AI Automations &middot; AI Agents &middot; Websites
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="mt-6 font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-[3.25rem] font-semibold text-foreground leading-[1.15] tracking-tight"
          >
            Helping Businesses Save Time Through{" "}
            <span className="text-[#63595C] tracking-wide">AI Automations</span> And Modern
            Websites
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="mt-5 text-muted text-base md:text-lg leading-relaxed max-w-lg"
          >
            I build AI-powered workflows, automation systems, and business
            websites that help companies reduce manual work, generate leads,
            and improve efficiency.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-[#39393A] rounded-xl hover:bg-[#4A4A4B] transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/25 hover:-translate-y-0.5"
            >
              Book Free Consultation
              <ArrowRight size={16} />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-foreground bg-white/5 backdrop-blur-sm border border-border rounded-xl hover:border-primary/30 hover:bg-white/10 transition-all duration-300"
            >
              View Projects
              <ChevronRight size={16} />
            </a>
          </motion.div>

          {/* Trust text */}
          <motion.p
            variants={itemVariants}
            className="mt-8 text-xs text-muted tracking-wide uppercase flex items-center gap-2"
          >
            <span className="w-8 h-px bg-primary/30" />
            Helping Businesses Automate, Scale, And Save Time
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
