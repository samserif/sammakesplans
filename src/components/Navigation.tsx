import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#story", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#value", label: "Why Me" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-background/90 backdrop-blur-md py-4" : "bg-transparent py-6"
        }`}
        role="banner"
      >
        <nav className="container mx-auto px-6 lg:px-12 flex items-center justify-between" aria-label="Main navigation">
          <a href="#" className="flex items-baseline gap-1" aria-label="Sam Makes Plans - Home">
            <span className="font-display font-extrabold text-primary-foreground text-sm tracking-[0.15em]">Sam Makes</span>
            <span className="font-script text-mustard text-xl">plans</span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs tracking-[0.15em] text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 font-display relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary-foreground hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </motion.header>
    </>
  );
};
