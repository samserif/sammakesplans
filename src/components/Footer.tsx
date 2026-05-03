import { Instagram, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background text-foreground border-t border-border" role="contentinfo">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-xs text-muted-foreground font-sans">
            © {currentYear} Samantha Provenza | Group Trip Designer & Travel Advisor. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/sam_makesplans/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Follow on Instagram"
            >
              <Instagram size={18} aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/sprovenza/?skipRedirect=true"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Connect on LinkedIn"
            >
              <Linkedin size={18} aria-hidden="true" />
            </a>
            <a
              href="mailto:samantha.provenza@fora.travel"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email Samantha Provenza"
            >
              <Mail size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
