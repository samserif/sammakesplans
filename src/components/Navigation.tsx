import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#story", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
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
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-md py-4 border-b border-border/70"
            : "bg-background/70 backdrop-blur-sm py-6"
        }`}
        role="banner"
      >
        <nav className="container mx-auto px-6 lg:px-12 flex items-center justify-between" aria-label="Main navigation">
          <a href="#" className="flex flex-col leading-none" aria-label="Samantha Provenza - Home">
            <span className="font-display font-black text-primary text-2xl shadow-none">SP</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-sans font-medium tracking-[0.16em] text-muted-foreground hover:text-primary transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-primary hover:after:w-full after:transition-all after:duration-300"
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
