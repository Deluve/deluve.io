import { motion } from "framer-motion";
import { Code, Cloud, Cog, BarChart3, Smartphone, Database } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Software Development",
    description: "Custom web and mobile applications built for performance, security, and scale.",
    size: "large",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Migration, management, and optimization across AWS, GCP, and hybrid environments.",
    size: "small",
  },
  {
    icon: Cog,
    title: "Process Automation",
    description: "Automated workflows that maximize operational efficiency and cut costs.",
    size: "small",
  },
  {
    icon: BarChart3,
    title: "IT Consulting",
    description: "Strategic analysis and technology roadmaps for results-driven digital transformation.",
    size: "small",
  },
  {
    icon: Smartphone,
    title: "Startup Acceleration",
    description: "From MVP to final product — we support startups through every growth phase.",
    size: "small",
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description: "Intelligent data solutions for evidence-based decision making.",
    size: "large",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16"
        >
          <div>
            <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">Services</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-4 leading-[1.1]">
              What we do<span className="text-primary">.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
            End-to-end solutions for every stage of your technology journey.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`group relative p-8 rounded-2xl border border-border bg-card hover:border-primary/20 transition-all duration-500 ${
                service.size === "large" ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                  <service.icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="text-xs text-muted-foreground/40 font-mono">0{i + 1}</span>
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
