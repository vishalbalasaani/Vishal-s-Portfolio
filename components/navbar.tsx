"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showFullName, setShowFullName] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -40% 0px" }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });
    
    const interval = setInterval(() => {
      setShowFullName(prev => !prev);
    }, 2500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith("#")) {
      const sectionId = href.substring(1);
      setActiveSection(sectionId);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isOpen ? "bg-background shadow-md" : scrolled ? "glass shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex h-16 md:h-18 items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="relative flex items-center gap-2 group w-[160px] md:w-[200px] justify-start"
          >
            <motion.div 
              className="flex items-center transition-transform duration-300 group-hover:scale-105"
            >
              <AnimatePresence mode="wait">
                {showFullName ? (
                  <motion.div
                    key="full"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="relative flex flex-col items-start justify-center"
                  >
                    <span className="text-foreground font-[family-name:var(--font-heading)] text-xs md:text-sm font-bold tracking-widest whitespace-nowrap">
                      VISHAL BALASAANI
                    </span>
                    <motion.div
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      exit={{ scaleX: 0, opacity: 0 }}
                      transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
                      style={{ originX: 0 }}
                      className="absolute -bottom-1.5 left-0 right-0 h-[1px] bg-gradient-to-r from-primary via-primary to-transparent"
                    />
                  </motion.div>
                ) : (
                  <motion.span
                    key="short"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="text-foreground font-[family-name:var(--font-heading)] text-lg md:text-xl font-bold tracking-wide"
                  >
                    VB
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 group ${
                  activeSection === link.href.substring(1) ? "text-foreground" : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
                {/* Animated Underline */}
                <span 
                  className={`absolute left-4 right-4 bottom-1.5 h-[2px] bg-[#39393A] transition-transform duration-300 origin-center rounded-full ${
                    activeSection === link.href.substring(1) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`} 
                />
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#39393A] rounded-lg hover:bg-[#4A4A4B] transition-colors duration-200"
          >
            Let&apos;s Talk
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-background border-t border-border/50 shadow-2xl"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`relative block px-3 py-2.5 text-sm font-medium transition-colors group w-max ${
                      activeSection === link.href.substring(1) ? "text-foreground" : "text-muted hover:text-foreground"
                    }`}
                  >
                    {link.label}
                    <span 
                      className={`absolute left-3 right-3 bottom-1.5 h-[2px] bg-[#39393A] transition-transform duration-300 origin-left rounded-full ${
                        activeSection === link.href.substring(1) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`} 
                    />
                  </motion.a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="block mt-3 text-center px-5 py-2.5 text-sm font-medium text-white bg-[#39393A] rounded-lg hover:bg-[#4A4A4B] transition-colors"
              >
                Let&apos;s Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
