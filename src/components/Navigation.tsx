import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#story", label: "My Story" },
  { href: "#services", label: "Services" },
  { href: "#value", label: "Why Me" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-background/90 backdrop-blur-md shadow-soft py-4" : "bg-transparent py-6"
        }`}
        role="banner"
      >
        <nav className="container mx-auto px-6 flex items-center justify-between" aria-label="Main navigation">
          <a href="#" className="flex items-baseline gap-1 text-2xl tracking-tight" aria-label="Sam Makes Plans - Home">
            <span className="font-display font-extrabold text-foreground uppercase text-lg">Sam Makes</span>
            <span className="font-script text-primary text-2xl">plans</span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 font-sans"
              >
                {link.label}
              </a>
            ))}
            <Button variant="hero" size="default" asChild>
              <a href="https://www.foratravel.com/advisor/samantha-provenza" target="_blank" rel="noopener noreferrer">
                Start Planning
              </a>
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
              role="menu"
              aria-label="Mobile navigation menu"
            >
              <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2 font-sans"
                    role="menuitem"
                  >
                    {link.label}
                  </a>
                ))}
                <Button variant="hero" size="lg" className="mt-4" asChild>
                  <a href="https://www.foratravel.com/advisor/samantha-provenza" target="_blank" rel="noopener noreferrer">
                    Start Planning
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};
