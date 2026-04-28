import { Instagram } from "lucide-react";

const intakeUrl = "https://www.foratravel.com/intake/KXd4bQ64FK";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background text-foreground border-t border-border" role="contentinfo">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <span className="text-xs tracking-[0.2em] text-muted-foreground font-sans font-medium block mb-3">Ready?</span>
          <a
            href={intakeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground hover:text-primary transition-colors duration-300"
          >
            Start the intake form →
          </a>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <a href="#" className="font-display text-base font-black text-foreground">
              Samantha Provenza
            </a>
            <p className="text-xs text-muted-foreground mt-1 font-sans">
              Travel Designer · Fora Travel · New York, NY
            </p>
          </div>

          <div className="flex items-center gap-8">
            <nav className="flex items-center gap-6" aria-label="Footer navigation">
              <a href="#story" className="text-xs tracking-[0.16em] text-muted-foreground hover:text-primary transition-colors font-sans font-medium">
                About
              </a>
              <a href="#services" className="text-xs tracking-[0.16em] text-muted-foreground hover:text-primary transition-colors font-sans font-medium">
                Services
              </a>
            </nav>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Follow on Instagram"
            >
              <Instagram size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <p className="text-xs text-muted-foreground mt-8 font-sans">
          © {currentYear} Samantha Provenza. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
