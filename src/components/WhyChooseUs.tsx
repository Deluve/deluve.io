import { motion } from "framer-motion";
import { TrendingUp, Shield, Zap, Users, ArrowUpRight } from "lucide-react";

const reasons = [
  {
    icon: TrendingUp,
    title: "Measurable ROI",
    description: "Data-driven strategies that deliver concrete results and proven return on investment.",
    highlight: "Business Growth",
  },
  {
    icon: Shield,
    title: "Long-Term Partnership",
    description: "We work side by side with our clients, building lasting relationships based on mutual trust.",
    highlight: "Trust & Reliability",
  },
  {
    icon: Zap,
    title: "Smart Automation",
    description: "Optimized processes through advanced automation, increasing efficiency and reducing costs.",
    highlight: "Efficiency Boost",
  },
  {
    icon: Users,
    title: "Multidisciplinary Team",
    description: "Professionals specialized across diverse technologies and business domains for complete solutions.",
    highlight: "Expert Talent",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding bg-neutral-900 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary/8 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">Why Deluve</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-4 leading-[1.1]">
            Built different<span className="text-primary">.</span>
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl text-sm leading-relaxed">
            We don't just deliver projects — we engineer competitive advantages that compound over time.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group relative p-8 rounded-2xl border border-white/20 bg-white/10 hover:border-primary/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -right-12 -top-12 w-32 h-32 rounded-full border border-primary/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <span className="inline-flex items-center rounded-full border border-white/20 px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-white/60 mb-6">
                  {reason.highlight}
                </span>

                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                  <reason.icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                <h3 className="text-lg font-display font-semibold text-white mb-3">{reason.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">{reason.description}</p>

                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Learn more
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

export default WhyChooseUs;
