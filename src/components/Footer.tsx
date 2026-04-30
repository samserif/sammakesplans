import { Instagram } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background text-foreground border-t border-border" role="contentinfo">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <a href="#" className="font-display font-black text-primary text-2xl shadow-inner">
              Samantha Provenza
            </a>
            <p className="text-xs text-muted-foreground mt-1 font-sans">
              Travel Designer · Fora Travel · New York, NY
            </p>
          </div>

          <div className="flex items-center gap-8">
            <nav className="flex items-center gap-6" aria-label="Footer navigation">
              <a href="#how-it-works" className="text-xs tracking-[0.16em] text-muted-foreground hover:text-primary transition-colors font-sans font-medium">
                How it works
              </a>
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
