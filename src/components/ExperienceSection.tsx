import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Technicien IT Helpdesk",
    company: "WEBEDIA",
    location: "Levallois-Perret",
    period: "Juin — Juillet 2022",
    tasks: [
      "Gestion du matériel informatique",
      "Assistance auprès des utilisateurs",
      "Gestion des tickets",
      "Installation des postes de travail",
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
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-gradient border border-border rounded-xl p-8 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-lg bg-primary/10">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold font-display text-foreground">
                    {exp.title}
                  </h3>
                  <p className="font-mono text-xs text-primary/70 mt-1">
                    {exp.company} · {exp.location} · {exp.period}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {exp.tasks.map((task) => (
                      <li key={task} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {task}
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
