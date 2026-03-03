import { motion } from "framer-motion";

const mainPlatforms = [
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg", size: "large" },
  { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg", size: "large" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", size: "large" },
];

const allPlatforms = [
  { name: "Red Hat", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redhat/redhat-original.svg", size: "small" },
  { name: "Cloudflare", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg", size: "small" },
  { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg", size: "small" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", size: "small" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", size: "small" },
  { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg", size: "small" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", size: "small" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", size: "small" },
  { name: "Hyper-V", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hyperv/hyperv-original.svg", size: "small" },
];

const PlatformsSection = () => {
  return (
    <section id="platforms" className="section-padding bg-background relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute -top-40 right-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">Technology</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-4 leading-[1.1]">
            Our trusted stack<span className="text-primary">.</span>
          </h2>
          <div className="mt-5 h-px w-32 bg-gradient-to-r from-primary/60 to-transparent mx-auto" />
          <p className="text-muted-foreground mt-6 text-sm leading-relaxed">
            Enterprise-grade platforms powering innovation and scalability.
          </p>
        </motion.div>

        {/* Main platforms - Hero cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {mainPlatforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative p-10 rounded-3xl border border-border bg-gradient-to-br from-card to-card/50 hover:border-primary/40 transition-all duration-500 flex flex-col items-center justify-center min-h-[280px] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full border border-primary/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col items-center gap-6">
                <div className="w-24 h-24 rounded-2xl bg-primary/15 flex items-center justify-center group-hover:bg-primary group-hover:scale-125 transition-all duration-500">
                  <img 
                    src={p.logo} 
                    alt={p.name}
                    className="w-14 h-14 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                  />
                </div>
                <span className="font-display font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                  {p.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary platforms - Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allPlatforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ scale: 1.08, y: -4 }}
              className="group relative p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:bg-primary/5 transition-all duration-400 flex flex-col items-center justify-center gap-3 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -right-8 -top-8 w-16 h-16 rounded-full border border-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <img 
                  src={p.logo} 
                  alt={p.name}
                  className="w-6 h-6 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                />
              </div>
              <span className="font-medium text-foreground text-xs text-center group-hover:text-primary transition-colors line-clamp-2">
                {p.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
