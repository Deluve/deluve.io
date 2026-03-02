import { motion } from "framer-motion";

const platforms = [
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  { name: "Canonical", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" },
];

const textPlatforms = [
  { name: "Zoho" },
  { name: "Hikvision" },
  { name: "Hyper-V" },
];

const allPlatforms = [
  ...platforms.map(p => ({ ...p, type: "logo" as const })),
  ...textPlatforms.map(p => ({ ...p, type: "text" as const, logo: "" })),
];

const PlatformsSection = () => {
  return (
    <section id="platforms" className="section-padding bg-hero relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto mb-20"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">Platforms</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-hero-foreground mt-4 leading-[1.1]">
            Our tech stack<span className="text-primary">.</span>
          </h2>
          <p className="text-hero-foreground/40 mt-4 text-sm">
            We work with industry-leading platforms to deliver robust, scalable solutions.
          </p>
        </motion.div>

        {/* Horizontal marquee-style strip */}
        <div className="overflow-hidden">
          <motion.div 
            className="flex gap-6 animate-scroll-left"
            style={{ width: "max-content" }}
          >
            {[...allPlatforms, ...allPlatforms].map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="flex items-center gap-4 px-8 py-5 rounded-full border border-hero-foreground/5 bg-hero-foreground/[0.02] hover:border-primary/20 transition-all shrink-0"
              >
                {p.type === "logo" ? (
                  <img src={p.logo} alt={p.name} className="w-8 h-8 object-contain opacity-60" />
                ) : (
                  <span className="text-lg font-display font-bold text-hero-foreground/60">{p.name[0]}</span>
                )}
                <span className="text-sm font-medium text-hero-foreground/50">{p.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
