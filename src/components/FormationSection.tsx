import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const formations = [
  {
    title: "BTS SIO option SISR",
    school: "Insertec",
    location: "Noisy-Le-Grand",
    period: "Depuis septembre 2025",
  },
  {
    title: "Bachelor — Administration d'Infrastructures Sécurisées",
    school: "ESIEA",
    location: "Ivry-sur-Seine",
    period: "Mars 2023 — Janvier 2025",
    detail: "Titre RNCP niveau 6",
  },
  {
    title: "BTS SIO option SISR",
    school: "IEF2I",
    location: "Vincennes",
    period: "Novembre 2021 — Juin 2022",
  },
];

const FormationSection = () => {
  return (
    <section id="formations" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary mb-2 tracking-wider">06.</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-16">
            Formations
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {formations.map((f, i) => (
              <motion.div
                key={`${f.title}-${f.school}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex items-start gap-6"
              >
                <div className="relative z-10 mt-1 p-2 rounded-lg bg-primary/10 border border-border">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold font-display text-foreground">{f.title}</h3>
                  {f.detail && (
                    <span className="inline-block font-mono text-xs text-primary bg-primary/10 px-2 py-0.5 rounded mt-1">
                      {f.detail}
                    </span>
                  )}
                  <p className="font-mono text-xs text-muted-foreground mt-1">
                    {f.school} · {f.location}
                  </p>
                  <p className="font-mono text-xs text-primary/70 mt-0.5">{f.period}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormationSection;
