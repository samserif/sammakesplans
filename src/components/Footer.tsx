import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-primary text-primary-foreground" role="contentinfo">
      <div className="container mx-auto px-6">
        {/* CTA */}
        <div className="text-center mb-12">
          <h3 className="font-display text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4 uppercase">
            Ready to Start Planning?
          </h3>
          <p className="text-primary-foreground/70 mb-6 font-sans max-w-lg mx-auto">
            Schedule a free 15-minute discovery call and let's see if we're a fit.
          </p>
          <Button variant="hero" size="xl" asChild>
            <a href="https://www.foratravel.com/advisor/samantha-provenza" target="_blank" rel="noopener noreferrer">
              Schedule a Discovery Call
            </a>
          </Button>
        </div>

        <div className="border-t border-primary-foreground/15 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#" className="font-display text-lg font-extrabold text-primary-foreground uppercase">
              Sam Makes <span className="font-script text-accent text-xl normal-case">plans</span>
            </a>
            <p className="text-sm text-primary-foreground/50 mt-1 font-sans">
              Powered by{" "}
              <a
                href="https://www.foratravel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Fora Travel
              </a>
            </p>
          </div>

          <nav className="flex items-center gap-6" aria-label="Footer navigation">
            <a href="#story" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors font-sans">
              My Story
            </a>
            <a href="#services" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors font-sans">
              Services
            </a>
            <a href="#value" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors font-sans">
              Why Me
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-accent transition-colors"
              aria-label="Follow on Instagram"
            >
              <Instagram size={20} aria-hidden="true" />
            </a>
          </nav>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-primary-foreground/40 font-sans">
            © {currentYear} Sam Makes Plans. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
