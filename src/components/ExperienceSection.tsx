import { motion } from "framer-motion";
import { Briefcase, Info } from "lucide-react";
import webediaLogo from "@/assets/webedia-logo.jpeg";
import ouesoLogo from "@/assets/oueso-logo.jpeg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const experiences = [
  {
    title: "Technicien IT Helpdesk",
    company: "Ouéso",
    location: "Noisy-le-Grand",
    period: "Février — Mars 2026",
    logo: ouesoLogo,
    tasks: [
      { text: "Gestion de matériels (informatiques & logistiques)" },
      { text: "Mise en place de pare-feu pfSense", tooltip: "pfSense est un pare-feu/routeur open source basé sur FreeBSD. Lors de ce stage, j'ai configuré et déployé pfSense pour sécuriser le réseau de l'entreprise : règles de filtrage, NAT, VPN et supervision du trafic." },
      { text: "Maintenance des ordinateurs" },
      { text: "Conception de page web" },
    ],
  },
  {
    title: "Technicien IT Helpdesk",
    company: "WEBEDIA",
    location: "Levallois-Perret",
    period: "Juin — Juillet 2022",
    logo: webediaLogo,
    tasks: [
      { text: "Gestion du matériel informatique" },
      { text: "Assistance utilisateurs" },
      { text: "Gestion des tickets d'incidents" },
      { text: "Onboarding & Offboarding" },
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary mb-2 tracking-wider">05.</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-16">
            Expérience
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-gradient border border-border rounded-xl p-8 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                {exp.logo ? (
                  <img src={exp.logo} alt={exp.company} className="w-10 h-10 rounded-lg object-contain mt-1" />
                ) : (
                  <div className="mt-1 p-2 rounded-lg bg-primary/10">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-lg font-bold font-display text-foreground">
                    {exp.title}
                  </h3>
                  <p className="font-mono text-xs text-primary/70 mt-1">
                    {exp.company} · {exp.location} · {exp.period}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {exp.tasks.map((task) => (
                      <li key={task.text} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {task.text}
                        {task.tooltip && (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Info className="w-4 h-4 text-primary/60 hover:text-primary cursor-help flex-shrink-0" />
                              </TooltipTrigger>
                              <TooltipContent side="top" className="max-w-xs text-xs">
                                {task.tooltip}
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
