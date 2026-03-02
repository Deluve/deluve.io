import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    tag: "Fintech",
    title: "Digital Payments Platform",
    description: "Mobile-first payment solution integrated with multiple providers, processing thousands of daily transactions.",
    metrics: ["3x more transactions", "99.9% uptime", "40% cost reduction"],
  },
  {
    tag: "Healthcare",
    title: "Hospital Management System",
    description: "Full process automation with IoT integration for real-time patient and resource monitoring.",
    metrics: ["60% more efficiency", "200+ IoT devices", "Zero downtime"],
  },
  {
    tag: "Retail",
    title: "AI-Powered E-commerce",
    description: "E-commerce platform with intelligent recommendations and automated inventory management via machine learning.",
    metrics: ["45% more sales", "2x conversion", "Automated inventory"],
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
          className="mb-16"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">Case Studies</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-hero-foreground mt-4 leading-[1.1]">
            Impact-driven<br />
            <span className="text-hero-foreground/30">results.</span>
          </h2>
        </motion.div>

        {/* Stacked asymmetric cards */}
        <div className="space-y-4">
          {cases.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group grid md:grid-cols-12 gap-6 bg-hero-foreground/[0.03] border border-hero-foreground/5 rounded-2xl p-6 md:p-8 hover:border-primary/20 transition-all duration-500"
            >
              <div className="md:col-span-2 flex items-start">
                <span className="inline-block bg-primary/15 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>
              <div className="md:col-span-6">
                <h3 className="text-2xl font-display font-bold text-hero-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-hero-foreground/40 text-sm leading-relaxed">{item.description}</p>
              </div>
              <div className="md:col-span-3 flex flex-wrap md:flex-col gap-2 md:gap-3 justify-start">
                {item.metrics.map((m) => (
                  <span key={m} className="text-xs bg-hero-foreground/5 text-hero-foreground/60 px-3 py-1.5 rounded-full">
                    {m}
                  </span>
                ))}
              </div>
              <div className="md:col-span-1 flex items-start justify-end">
                <div className="w-10 h-10 rounded-full border border-hero-foreground/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                  <ArrowUpRight className="text-hero-foreground/30 group-hover:text-primary-foreground transition-colors" size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
