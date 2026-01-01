import { Instagram } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border" role="contentinfo">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <a href="#" className="font-serif text-xl font-medium text-foreground">
              Sam Makes Plans
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              Fora Advanced Certified Advisor
            </p>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8" aria-label="Footer navigation">
            <a
              href="#services"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </a>
            <a
              href="#process"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Process
            </a>
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Follow on Instagram (opens in new tab)"
            >
              <Instagram size={20} aria-hidden="true" />
            </a>
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Sam Makes Plans. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Travel services provided through{" "}
            <a
              href="https://www.foratravel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Fora Travel
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
