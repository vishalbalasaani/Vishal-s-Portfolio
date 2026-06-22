"use client";

import SectionHeading from "./section-heading";
import AnimatedWrapper from "./animated-wrapper";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

type Project = {
  title: string;
  description: string;
  techStack?: string;
  image: string;
  github: string;
  demo?: string;
};

const automationProjects: Project[] = [
  {
    title: "AI Lead Gen & Qualification",
    description: "Automated lead qualification system that scores prospects and notifies sales teams in real time.",
    techStack: "n8n • OpenRouter • Sheets • Telegram • Gmail",
    image: "/projects/lead.png",
    github: "https://github.com/vishalbalasaani/AI-Lead-Generation-Qualification-Automation.git",
  },
  {
    title: "AI ATS Resume Screening",
    description: "Matches resumes with job descriptions, generating ATS scores and identifying skill gaps automatically.",
    techStack: "n8n • OpenRouter • Sheets • PDF Processing • Gmail",
    image: "/projects/ats.png",
    github: "https://github.com/vishalbalasaani/AI-ATS-Resume-Screeening-Automation.git",
  },
  {
    title: "AI Telegram Productivity Assistant",
    description: "Tracks tasks and analyzes productivity directly in Telegram, delivering personalized efficiency insights.",
    techStack: "Telegram API • n8n • AI Models • Sheets",
    image: "/projects/telegram.png",
    github: "https://github.com/vishalbalasaani/AI-Telegram-Productivity-Assistant.git",
  }
];

const websiteProjects: Project[] = [
  {
    title: "Crave House – Cloud Kitchen",
    description: "Modern cloud kitchen website allowing customers to browse desserts and place seamless WhatsApp orders.",
    techStack: "HTML • CSS • JS • WhatsApp API",
    image: "/projects/crave.png",
    github: "https://github.com/vishalbalasaani/CraveHouse.Kitchen.git",
    demo: "https://crave-house-kitchen.vercel.app/",
  }

];

const ProjectCard = ({ project }: { project: Project }) => (
  <motion.div
    whileHover={{ y: -3 }}
    transition={{ duration: 0.2, ease: "easeOut" }}
    className="group bg-card hover:bg-white/[0.02] border border-border hover:border-white/10 rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col h-full shadow-lg"
  >
    {/* Content Body */}
    <div className="flex-1 flex flex-col">
      <h4 className="text-base sm:text-lg font-bold text-foreground mb-1.5 tracking-tight">
        {project.title}
      </h4>
      <p className="text-xs sm:text-sm text-muted line-clamp-3 mb-3 leading-relaxed">
        {project.description}
      </p>

      {project.techStack && (
        <div className="mb-4">
          <p className="text-[10px] font-semibold tracking-wider uppercase text-primary/70 mb-0.5">Tech Stack</p>
          <p className="text-xs text-muted/90 font-medium font-[family-name:var(--font-geist-mono)]">
            {project.techStack}
          </p>
        </div>
      )}

      {/* Footer Links */}
      <div className="mt-auto flex items-center gap-4 pt-3 border-t border-white/5">
        {project.demo && project.demo !== "#" && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-muted hover:text-foreground transition-colors inline-flex items-center gap-1.5"
          >
            <ExternalLink size={14} /> Live Demo
          </a>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-muted hover:text-foreground transition-colors inline-flex items-center gap-1.5"
        >
          <GithubIcon size={14} /> GitHub
        </a>
      </div>
    </div>
  </motion.div>
);

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Projects"
          title="Recent Work & Case Studies"
          description="Real solutions built for real business problems."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mt-16">
          {/* Column 1: Automations */}
          <div>
            <AnimatedWrapper delay={0.1} className="mb-8">
              <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-foreground flex items-center gap-3">
                <span className="w-8 h-px bg-primary/50 block" />
                Automations & AI Agents
              </h3>
            </AnimatedWrapper>

            <div className="space-y-4">
              {automationProjects.map((project, i) => (
                <AnimatedWrapper key={project.title} delay={0.2 + i * 0.1}>
                  <ProjectCard project={project} />
                </AnimatedWrapper>
              ))}
            </div>
          </div>

          {/* Column 2: Websites */}
          <div>
            <AnimatedWrapper delay={0.3} className="mb-8">
              <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-foreground flex items-center gap-3">
                <span className="w-8 h-px bg-primary/50 block" />
                Websites
              </h3>
            </AnimatedWrapper>

            <div className="space-y-4">
              {websiteProjects.map((project, i) => (
                <AnimatedWrapper key={project.title} delay={0.4 + i * 0.1}>
                  <ProjectCard project={project} />
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
