import { motion } from "framer-motion";
import { User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="apropos" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary mb-2 tracking-wider">01.</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-16">
            À propos de moi
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card-gradient border border-border rounded-xl p-8"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <User className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-display text-foreground mb-1">Yohan DIBY</h3>
              <p className="font-mono text-xs text-primary/70">Étudiant BTS SIO option SISR</p>
            </div>
          </div>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Passionné par l'informatique et les nouvelles technologies, je suis actuellement en 2ème année de BTS SIO (Services Informatiques aux Organisations), option SISR (Solutions d'Infrastructure, Systèmes et Réseaux).
            </p>
            <p>
              Mon parcours m'a permis de développer des compétences solides en administration systèmes et réseaux, virtualisation, automatisation et sécurité des infrastructures IT. Je suis curieux, rigoureux et toujours à la recherche de nouveaux défis techniques.
            </p>
            <p>
              En dehors de l'informatique, je m'intéresse aux arts martiaux, à la musique et aux jeux vidéo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
