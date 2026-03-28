import { Instagram } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-primary text-primary-foreground" role="contentinfo">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Email CTA */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-primary-foreground/50 font-display block mb-3">Ready?</span>
          <a
            href="https://www.foratravel.com/advisor/samantha-provenza"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary-foreground uppercase tracking-wide hover:text-mustard transition-colors duration-300"
          >
            Schedule a Discovery Call →
          </a>
        </div>

        <div className="border-t border-primary-foreground/15 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <a href="#" className="font-display text-sm font-extrabold text-primary-foreground uppercase tracking-[0.2em]">
              Sam Makes <span className="font-script text-mustard text-lg normal-case">plans</span>
            </a>
            <p className="text-xs text-primary-foreground/40 mt-1 font-sans">
              Powered by{" "}
              <a href="https://www.foratravel.com" target="_blank" rel="noopener noreferrer" className="text-mustard hover:underline">
                Fora Travel
              </a>
            </p>
          </div>

          <div className="flex items-center gap-8">
            <nav className="flex items-center gap-6" aria-label="Footer navigation">
              <a href="#story" className="text-xs uppercase tracking-[0.2em] text-primary-foreground/50 hover:text-primary-foreground transition-colors font-display">
                About
              </a>
              <a href="#services" className="text-xs uppercase tracking-[0.2em] text-primary-foreground/50 hover:text-primary-foreground transition-colors font-display">
                Services
              </a>
            </nav>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/50 hover:text-mustard transition-colors"
              aria-label="Follow on Instagram"
            >
              <Instagram size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <p className="text-xs text-primary-foreground/30 mt-8 font-sans">
          © {currentYear} Sam Makes Plans. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
