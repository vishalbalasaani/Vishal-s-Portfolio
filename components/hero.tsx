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
        {/* Photo container — vertically centered to align with text */}
        <div className="absolute inset-y-0 right-0 w-full md:w-[60%] lg:w-[55%] flex items-center justify-end">
          
          {/* Mask applied directly to the image wrapper so the fade tightly follows the image size */}
          <div 
            className="relative w-[85%] sm:w-[75%] md:w-[80%] lg:w-[75%] xl:w-[70%] aspect-square md:mr-8 lg:mr-12"
            style={{
              WebkitMaskImage: "radial-gradient(circle at 50% 50%, black 45%, transparent 75%)",
              maskImage: "radial-gradient(circle at 50% 50%, black 45%, transparent 75%)"
            }}
          >
            <img
              src="/my-photo-final.png?v=1"
              alt="Profile Picture"
              className="w-full h-full object-contain mix-blend-lighten opacity-95"
            />
          </div>

          {/* Left gradient blend — fades photo into background horizontally */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #0A0A0A 0%, rgba(10,10,10,0.9) 15%, transparent 45%)",
            }}
          />

          {/* Bottom gradient blend */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, #0A0A0A 0%, rgba(10,10,10,0.7) 15%, transparent 35%)",
            }}
          />

          {/* Top gradient blend */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, #0A0A0A 0%, rgba(10,10,10,0.5) 10%, transparent 25%)",
            }}
          />
        </div>

        {/* Mobile overlay — stronger fade for text readability so text pops over the image */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.7) 50%, rgba(10,10,10,0.9) 100%)",
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
