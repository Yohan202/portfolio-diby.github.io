import { motion } from "framer-motion";

const skills = [
  { category: "Réseaux", items: ["Routage Inter-VLAN", "STP / HSRP / VTP", "EtherChannel", "Switch Cisco Catalyst / HPE Comware"] },
  { category: "Systèmes", items: ["Administration Windows Server", "Administration Linux (Debian)", "GLPI (ITSM)"] },
  { category: "Certif. Cisco CCNA", items: ["Introduction auréseaux", "Commutations & Routages"] },
  { category: "Virtualisation & Cloud", items: ["VMware Workstation & ESXi", "Microsoft Azure", "Docker", "Proxmox"] },
  { category: "Automatisation & Scripting", items: ["Ansible", "Python", "Bash"] },
];

const SkillsSection = () => {
  return (
    <section id="competences" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary mb-2 tracking-wider">02.</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-16">
            Compétences
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="card-gradient border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
            >
              <h3 className="font-mono text-primary text-sm mb-5 tracking-wider">
                {`{${group.category}}`}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-secondary-foreground text-sm text-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
