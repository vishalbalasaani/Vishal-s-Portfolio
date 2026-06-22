"use client";

import { useState } from "react";
import SectionHeading from "./section-heading";
import AnimatedWrapper from "./animated-wrapper";
import { Send, Mail, Phone, MapPin } from "lucide-react";

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Project requirement is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    // Form submission logic — integrate with Formspree, EmailJS, or API route
    console.log("Form data:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Get In Touch"
          title="Let's Build Something Together"
          description="Have a project in mind? Tell me about your business and I'll get back to you within 24 hours."
        />

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 mt-4">
          {/* Form */}
          <AnimatedWrapper delay={0.1} className="lg:col-span-3">
            <form
              noValidate
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl border border-border p-6 md:p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`w-full px-4 py-3 text-sm bg-background border ${errors.name ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : 'border-border focus:border-primary/40 focus:ring-primary/20'} rounded-xl focus:outline-none focus:ring-2 transition-all placeholder:text-muted/60`}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className={`w-full px-4 py-3 text-sm bg-background border ${errors.email ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : 'border-border focus:border-primary/40 focus:ring-primary/20'} rounded-xl focus:outline-none focus:ring-2 transition-all placeholder:text-muted/60`}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Phone Number <span className="text-primary">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className={`w-full px-4 py-3 text-sm bg-background border ${errors.phone ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : 'border-border focus:border-primary/40 focus:ring-primary/20'} rounded-xl focus:outline-none focus:ring-2 transition-all placeholder:text-muted/60`}
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1.5">{errors.phone}</p>}
                </div>
                <div>
                  <label
                    htmlFor="contact-company"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Company Name{" "}
                    <span className="text-muted text-xs">(Optional)</span>
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="w-full px-4 py-3 text-sm bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all placeholder:text-muted/60"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Project Requirement <span className="text-primary">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your business, website, automation, AI agent, or workflow requirement."
                  className={`w-full px-4 py-3 text-sm bg-background border ${errors.message ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : 'border-border focus:border-primary/40 focus:ring-primary/20'} rounded-xl focus:outline-none focus:ring-2 transition-all placeholder:text-muted/60 resize-none`}
                />
                {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-white bg-[#39393A] rounded-xl hover:bg-[#4A4A4B] transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/25 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitted ? (
                  "Message Sent ✓"
                ) : (
                  <>
                    Let&apos;s Build Something
                    <Send size={15} />
                  </>
                )}
              </button>
            </form>
          </AnimatedWrapper>

          {/* Contact Info */}
          <AnimatedWrapper delay={0.2} className="lg:col-span-2">
            <div className="space-y-6">
              <div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:vishalbalasaani04@gmail.com"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#39393A] transition-colors">
                      <Mail className="w-4 h-4 text-muted group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-muted">Email</p>
                      <p className="text-sm font-medium text-foreground group-hover:text-white transition-colors">
                        vishalbalasaani04@gmail.com
                      </p>
                    </div>
                  </a>

                  <a href="tel:8520936604" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#39393A] transition-colors">
                      <Phone className="w-4 h-4 text-muted group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-muted">Phone</p>
                      <p className="text-sm font-medium text-foreground group-hover:text-white transition-colors">
                        8520936604
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#39393A] transition-colors">
                      <MapPin className="w-4 h-4 text-muted group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-muted">Location</p>
                      <p className="text-sm font-medium text-foreground">
                        India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-px bg-border" />

              <div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground mb-4">
                  Connect
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/vishal-balasaani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#39393A] text-muted hover:text-white transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon size={18} />
                  </a>
                  <a
                    href="https://github.com/vishalbalasaani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#39393A] text-muted hover:text-white transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <GithubIcon size={18} />
                  </a>
                </div>
              </div>

              {/* Trust signal */}
              <div className="mt-6 p-5 bg-accent/60 rounded-xl border border-primary/10">
                <p className="text-sm text-primary font-medium mb-1">
                  💬 Free Consultation
                </p>
                <p className="text-xs text-muted leading-relaxed">
                  I typically respond within 24 hours. Let&apos;s discuss how I can
                  help your business save time and grow.
                </p>
              </div>
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
}
