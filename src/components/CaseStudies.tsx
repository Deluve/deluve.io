import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    tag: "CRM",
    title: "Custom CRM Platform",
    description: "End-to-end customer relationship management system with pipeline automation, analytics dashboards, and multi-channel communication integration.",
    metrics: ["5x lead conversion", "360° customer view", "30% less churn"],
  },
  {
    tag: "POS",
    title: "Cloud-Based POS System",
    description: "Modern point-of-sale solution with real-time inventory sync, multi-location support, and offline-first architecture for uninterrupted operations.",
    metrics: ["99.9% uptime", "50+ locations", "Real-time sync"],
  },
  {
    tag: "Payments",
    title: "Payment Gateway Integration",
    description: "Unified payment processing layer connecting multiple providers with smart routing, fraud detection, and comprehensive reconciliation engine.",
    metrics: ["3x more transactions", "40% cost reduction", "PCI compliant"],
  },
];

const CaseStudies = () => {
  return (
    <section id="cases" className="section-padding bg-hero relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">Case Studies</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-hero-foreground mt-4 leading-[1.1]">
            Impact-driven results<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {cases.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col justify-between bg-hero-foreground/[0.03] border border-hero-foreground/5 rounded-2xl p-8 hover:border-primary/20 transition-all duration-500"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-block bg-primary/15 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-hero-foreground/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                    <ArrowUpRight className="text-hero-foreground/30 group-hover:text-primary-foreground transition-colors" size={16} />
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-hero-foreground mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-hero-foreground/40 text-sm leading-relaxed mb-6">{item.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-hero-foreground/5">
                {item.metrics.map((m) => (
                  <span key={m} className="text-xs bg-hero-foreground/5 text-hero-foreground/60 px-3 py-1.5 rounded-full">
                    {m}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
