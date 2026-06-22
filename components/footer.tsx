import { ArrowUp, Mail, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border text-foreground">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <span className="font-[family-name:var(--font-heading)] text-sm font-semibold">
                  VB
                </span>
              </div>
              <span className="font-[family-name:var(--font-heading)] font-semibold text-lg">
                Vishal Balasaani
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Helping businesses automate, scale, and save time through AI
              automations and modern websites.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] font-semibold text-sm mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] font-semibold text-sm mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:vishalbalasaani04@gmail.com"
                className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
              >
                <Mail size={14} />
                vishalbalasaani04@gmail.com
              </a>
              <a
                href="tel:8520936604"
                className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
              >
                <Phone size={14} />
                8520936604
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted/80">
            © {new Date().getFullYear()} Vishal Balasaani. All rights reserved.
          </p>
          <a
            href="#home"
            className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 text-primary transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
