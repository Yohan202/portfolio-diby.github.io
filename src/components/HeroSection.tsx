import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="relative z-10 max-w-4xl w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-sm text-primary mb-6 tracking-wider"
        >
          ~ $ whoami
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-[0.95] mb-6"
        >
          <span className="text-foreground">Yohan</span>
          <br />
          <span className="text-gradient">DIBY</span>
          <span className="text-primary animate-blink">_</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10"
        >
          Je suis un étudiant de 2ème année de BTS SIO (Services Informatiques aux Organisations) option SISR
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex gap-4"
        >
          <a
            href="#projets"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity glow"
          >
            Voir mes réalisations
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium text-sm hover:border-primary hover:text-primary transition-colors"
          >
            Me contacter
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="w-5 h-5 text-muted-foreground animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
