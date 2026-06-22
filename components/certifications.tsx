"use client";

import SectionHeading from "./section-heading";
import AnimatedWrapper from "./animated-wrapper";
import { Award, ExternalLink } from "lucide-react";
import Image from "next/image";

const certifications = [
  {
    title: "Deloitte Forage Certificate",
    issuer: "Deloitte via Forage",
    description:
      "Professional certification demonstrating technology consulting and analytics skills.",
    image: "", // Empty string uses the sleek default Award icon
    link: "/Deloitte_Certification.pdf",
  },
  {
    title: "Scientific Computing with Python",
    issuer: "freeCodeCamp",
    description:
      "Developer Certification representing approximately 300 hours of coursework and building Python projects.",
    image: "",
    link: "https://freecodecamp.org/certification/fcc960a3290-b734-459b-9e9a-6e70e432ef3d/scientific-computing-with-python-v7",
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 relative">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Certifications"
          title="Professional Credentials"
          description="Industry-recognized certifications validating expertise in technology and consulting."
        />

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 mt-16">
          {certifications.map((cert, i) => (
            <AnimatedWrapper key={cert.title} delay={i * 0.1}>
              <div className="group bg-card hover:bg-white/[0.02] border border-border hover:border-white/10 rounded-2xl p-3 sm:p-4 transition-all duration-300 flex items-center gap-4 sm:gap-5 h-full">
                {/* Small Image */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 bg-accent border border-white/5 flex items-center justify-center">
                  {cert.image ? (
                    <>
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                    </>
                  ) : (
                    <Award className="w-6 h-6 text-muted" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-[family-name:var(--font-heading)] text-sm sm:text-base font-semibold text-foreground mb-1 truncate">
                    {cert.title}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] font-semibold text-primary uppercase tracking-wider mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-xs sm:text-sm text-muted line-clamp-2 leading-relaxed mb-2 sm:mb-3">
                    {cert.description}
                  </p>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] sm:text-xs font-medium text-foreground hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    <ExternalLink size={12} /> View Credential
                  </a>
                </div>
              </div>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
