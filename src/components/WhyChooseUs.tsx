import { motion } from "framer-motion";
import { TrendingUp, Shield, Zap, Users } from "lucide-react";

const reasons = [
  {
    icon: TrendingUp,
    title: "Measurable ROI",
    description: "Data-driven strategies that deliver concrete results and proven return on investment.",
  },
  {
    icon: Shield,
    title: "Long-Term Partnership",
    description: "We work side by side with our clients, building lasting relationships based on mutual trust.",
  },
  {
    icon: Zap,
    title: "Smart Automation",
    description: "Optimized processes through advanced automation, increasing efficiency and reducing costs.",
  },
  {
    icon: Users,
    title: "Multidisciplinary Team",
    description: "Professionals specialized across diverse technologies and business domains for complete solutions.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding bg-hero relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">Why Deluve</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-hero-foreground mt-4 leading-[1.1]">
            Built different<span className="text-primary">.</span>
          </h2>
          <p className="text-hero-foreground/40 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            We don't just deliver projects — we engineer competitive advantages that compound over time.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-8 rounded-2xl border border-hero-foreground/5 bg-hero-foreground/[0.02] hover:border-primary/20 hover:bg-hero-foreground/[0.05] transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                <reason.icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-display font-semibold text-hero-foreground mb-3">{reason.title}</h3>
              <p className="text-hero-foreground/40 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
