import { motion } from "framer-motion";

const platforms = [
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  { name: "Canonical", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" },
];

const textPlatforms = [
  { name: "Zoho", initials: "Z" },
  { name: "Hikvision", initials: "HK" },
  { name: "Hyper-V", initials: "HV" },
];

const PlatformsSection = () => {
  return (
    <section id="platforms" className="section-padding bg-section-alt">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Plataformas</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
            Tecnologias que <span className="text-gradient">dominamos</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Trabalhamos com as melhores plataformas do mercado para entregar soluções robustas.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-card border border-border flex items-center justify-center p-4 group-hover:border-primary/30 group-hover:shadow-lg transition-all">
                <img src={p.logo} alt={p.name} className="w-12 h-12 md:w-14 md:h-14 object-contain" />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">{p.name}</span>
            </motion.div>
          ))}
          {textPlatforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (platforms.length + i) * 0.08 }}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-card border border-border flex items-center justify-center group-hover:border-primary/30 group-hover:shadow-lg transition-all">
                <span className="text-2xl font-display font-bold text-foreground">{p.initials}</span>
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">{p.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
