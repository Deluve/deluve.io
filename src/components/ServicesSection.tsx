import { motion } from "framer-motion";
import { Code, Cloud, Cog, BarChart3, Database, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Software Development",
    description: "Custom web and mobile applications built for performance, security, and scale.",
    span: "lg:col-span-3",
    highlight: "Web • APIs • Integrations",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Migration, management, and optimization across AWS, GCP, and hybrid environments.",
    span: "lg:col-span-3",
    highlight: "AWS • GCP • Hybrid",
  },
  {
    icon: Cog,
    title: "Process Automation",
    description: "Automated workflows that maximize operational efficiency and cut costs.",
    span: "lg:col-span-2",
    highlight: "RPA • Workflows • Ops",
  },
  {
    icon: BarChart3,
    title: "IT Consulting",
    description: "Strategic analysis and technology roadmaps for results-driven digital transformation.",
    span: "lg:col-span-2",
    highlight: "Strategy • Architecture",
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description: "Intelligent data solutions for evidence-based decision making.",
    span: "lg:col-span-2",
    highlight: "BI • Dashboards • Insights",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
        />
      </div>

      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">Services</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-4 leading-[1.1]">
              What we do<span className="text-primary">.</span>
            </h2>
            <div className="mt-5 h-px w-32 bg-gradient-to-r from-primary/60 to-transparent" />
          </div>
          <div className="max-w-sm rounded-xl border border-border bg-card/70 px-4 py-3 backdrop-blur-sm">
            <p className="text-muted-foreground text-sm leading-relaxed">
              End-to-end solutions for every stage of your technology journey.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className={`group relative p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-500 overflow-hidden ${service.span}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -right-10 -top-10 w-28 h-28 rounded-full border border-primary/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                  <service.icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="text-xs text-muted-foreground/40 font-mono">0{i + 1}</span>
              </div>

              <div className="relative z-10">
                <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-4">
                  {service.highlight}
                </span>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>

                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Explore service
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
