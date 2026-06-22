"use client";

import SectionHeading from "./section-heading";
import AnimatedWrapper from "./animated-wrapper";
import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  { name: "n8n", logo: "/skills/n8n.svg" },
  { name: "Python", logo: "/skills/python.svg" },
  { name: "Java", logo: "/skills/java.svg" },
  { name: "JavaScript", logo: "/skills/javascript.svg" },
  { name: "HTML", logo: "/skills/html.svg" },
  { name: "CSS", logo: "/skills/css.svg" },
  { name: "Git", logo: "/skills/git.svg" },
  { name: "GitHub", logo: "/skills/github.svg", invert: true },
  { name: "Firebase", logo: "/skills/firebase.svg" },
  { name: "Supabase", logo: "/skills/supabase.svg" },
  { name: "Google Workspace", logo: "/skills/google-icon.svg" },
  { name: "VS Code", logo: "/skills/vscode-icon.svg" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Skills & Tools"
          title="Technologies I Work With"
          description="The tools and technologies I use to build reliable, scalable solutions."
        />

        <div className="flex overflow-hidden group [mask-image:_linear-gradient(to_right,transparent_0,_black_100px,_black_calc(100%-100px),transparent_100%)] py-4 gap-4 md:gap-5">
          <div className="animate-marquee flex shrink-0 items-center justify-around gap-4 md:gap-5 min-w-full">
            {skills.map((skill, i) => (
              <AnimatedWrapper key={skill.name} delay={i * 0.02} className="shrink-0">
                <motion.div
                  whileHover={{ y: -4, scale: 1.04 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="flex flex-col items-center justify-center gap-3 bg-card rounded-2xl border border-border p-3 sm:p-4 hover:shadow-lg hover:shadow-primary/[0.05] hover:border-primary/20 transition-all duration-400 cursor-default aspect-square w-[100px] sm:w-[125px]"
                >
                  <div className="w-10 h-10 flex items-center justify-center shrink-0">
                    <Image
                      src={skill.logo}
                      alt={skill.name}
                      width={36}
                      height={36}
                      className={`w-9 h-9 object-contain group-hover:scale-110 transition-transform duration-300 ${
                        skill.invert ? "invert opacity-90" : ""
                      }`}
                    />
                  </div>
                  <span className="text-[11px] sm:text-xs font-medium text-muted group-hover:text-foreground transition-colors duration-300 text-center leading-tight">
                    {skill.name}
                  </span>
                </motion.div>
              </AnimatedWrapper>
            ))}
          </div>
          
          <div aria-hidden="true" className="animate-marquee flex shrink-0 items-center justify-around gap-4 md:gap-5 min-w-full">
            {skills.map((skill) => (
              <div key={skill.name} className="shrink-0">
                <div className="flex flex-col items-center justify-center gap-3 bg-card rounded-2xl border border-border p-3 sm:p-4 hover:shadow-lg hover:shadow-primary/[0.05] hover:border-primary/20 transition-all duration-400 cursor-default aspect-square w-[100px] sm:w-[125px]">
                  <div className="w-10 h-10 flex items-center justify-center shrink-0">
                    <Image
                      src={skill.logo}
                      alt={skill.name}
                      width={36}
                      height={36}
                      className={`w-9 h-9 object-contain transition-transform duration-300 ${
                        skill.invert ? "invert opacity-90" : ""
                      }`}
                    />
                  </div>
                  <span className="text-[11px] sm:text-xs font-medium text-muted transition-colors duration-300 text-center leading-tight">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
