import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary mb-2 tracking-wider">08.</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Contact
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Vous avez un projet en tête ou souhaitez simplement discuter ?
            N'hésitez pas à me contacter.
          </p>

          <a
            href="mailto:dibyyohan02@gmail.com"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity glow"
          >
            <Mail className="w-4 h-4" />
            Envoyer un email
          </a>

          <div className="flex justify-center gap-6 mt-12">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
