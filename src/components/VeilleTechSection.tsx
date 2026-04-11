import { motion } from "framer-motion";
import { Rss, ExternalLink } from "lucide-react";

const veilles = [
  {
    title: "Cybersécurité",
    description: "Suivi des dernières vulnérabilités, CVE, et bonnes pratiques de sécurisation des infrastructures (ANSSI, CERT-FR, etc.).",
  },
  {
    title: "Cloud & Virtualisation",
    description: "Évolutions des technologies de conteneurisation (Docker, Kubernetes) et des solutions cloud (Azure, AWS).",
  },
  {
    title: "Réseaux & Infrastructures",
    description: "Nouveautés en matière de protocoles réseau, SDN, et équipements (Cisco, HPE).",
  },
];

const VeilleTechSection = () => {
  return (
    <section id="veille" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary mb-2 tracking-wider">07.</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-16">
            Veille technologique
          </h2>
        </motion.div>

        <div className="space-y-6">
          {veilles.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-gradient border border-border rounded-xl p-6 hover:border-primary/30 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Rss className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display text-foreground group-hover:text-primary transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VeilleTechSection;
