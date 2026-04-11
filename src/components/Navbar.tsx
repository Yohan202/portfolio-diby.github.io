import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "À propos", href: "#apropos" },
  { label: "Compétences", href: "#competences" },
  { label: "Projets", href: "#projets" },
  { label: "Expérience", href: "#experience" },
  { label: "Formations", href: "#formations" },
  { label: "Veille", href: "#veille" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : ""
      }`}
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-mono text-primary font-bold text-sm tracking-wider">
          YD<span className="animate-blink">_</span>
        </a>
        <div className="flex items-center gap-8">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden md:inline-flex font-mono text-xs text-muted-foreground hover:text-primary transition-colors tracking-wider"
            >
              <span className="text-primary mr-1">0{i + 2}.</span>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
