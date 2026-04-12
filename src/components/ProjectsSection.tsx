import { motion } from "framer-motion";
import { ExternalLink, Server } from "lucide-react";

const projects = [

  {
    title: "Mise en place d'un pare-feu pfSense",
    description: "Installation et configuration d'un pare-feu pfSense pour sécuriser un réseau local : règles de filtrage, NAT, VPN et supervision du trafic.",
    tech: ["pfSense", "Firewall", "NAT", "VPN", "Réseau"],
    color: "220 70% 50%",
    period: "",
    location: "",
  },
  {
    title: "Déploiement d'application web avec Docker",
    description: "Conteneurisation et déploiement d'applications web à l'aide de Docker et Docker Compose pour assurer la portabilité et la reproductibilité des environnements.",
    tech: ["Docker", "Docker Compose", "Linux", "Apache", "PHP"],
    color: "200 75% 50%",
    period: "",
    location: "",
  },
  {
    title: "Installation et configuration de GLPI",
    description: "Déploiement de GLPI pour la gestion de parc informatique et le suivi des tickets d'incidents (ITSM). Configuration des plugins et intégration avec Active Directory.",
    tech: ["GLPI", "ITSM", "MariaDB", "Apache", "Active Directory"],
    color: "280 60% 55%",
    period: "",
    location: "",
  },
  {
    title: "Serveur Windows ADDS, DHCP, DNS",
    description: "Mise en place d'un serveur Windows Server avec les rôles Active Directory Domain Services, DHCP et DNS pour la gestion centralisée d'un réseau d'entreprise.",
    tech: ["Windows Server", "ADDS", "DHCP", "DNS", "GPO"],
    color: "210 65% 50%",
    period: "",
    location: "",
  },
  {
    title: "EasyVM",
    description: "Création automatisée de machines virtuelles en quelques clics via une interface web. Orchestration avec Docker, automatisation Ansible et hébergement sur Azure.",
    tech: ["Ansible", "Docker", "Apache", "MariaDB", "PHP", "Azure"],
    color: "174 72% 56%",
    period: "Déc. 2023 — Jan. 2024",
    location: "ESIEA Ivry-sur-Seine",
  },
  {
    title: "DIV — Automatisation VLAN",
    description: "Automatisation des configurations de VLANs pour différents types d'utilisateurs, avec gestion dynamique de l'adressage IP sur un réseau hébergé localement.",
    tech: ["Ansible", "PHPMyAdmin", "Linux", "CCNA", "\n"],
    color: "190 80% 45%",
    period: "Avr. — Juil. 2023",
    location: "ESIEA Ivry-sur-Seine",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projets" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary mb-2 tracking-wider">03.</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-16">
            Projets
          </h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group card-gradient border border-border rounded-xl p-8 hover:border-primary/30 transition-all duration-300"
              style={{ boxShadow: `0 0 0px hsl(${project.color} / 0)` }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 40px -10px hsl(${project.color} / 0.15)`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0px hsl(${project.color} / 0)`;
              }}
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold font-display text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3 text-muted-foreground">
                  <Server className="w-4 h-4 hover:text-primary transition-colors cursor-pointer" />
                  <ExternalLink className="w-4 h-4 hover:text-primary transition-colors cursor-pointer" />
                </div>
              </div>
              {(project.period || project.location) && (
                <p className="font-mono text-xs text-primary/70 mb-4">
                  {[project.period, project.location].filter(Boolean).join(" · ")}
                </p>
              )}
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="font-mono text-xs text-primary/80 bg-primary/10 px-2.5 py-1 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
