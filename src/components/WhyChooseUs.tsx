import { motion } from "framer-motion";
import { TrendingUp, Shield, Zap, Users } from "lucide-react";

const reasons = [
  {
    icon: TrendingUp,
    title: "Measurable ROI",
    description: "Data-driven strategies that deliver concrete results and proven return on investment.",
    number: "01",
  },
  {
    icon: Shield,
    title: "Long-Term Partnership",
    description: "We work side by side with our clients, building lasting relationships based on mutual trust.",
    number: "02",
  },
  {
    icon: Zap,
    title: "Smart Automation",
    description: "Optimized processes through advanced automation, increasing efficiency and reducing costs.",
    number: "03",
  },
  {
    icon: Users,
    title: "Multidisciplinary Team",
    description: "Professionals specialized across diverse technologies and business domains for complete solutions.",
    number: "04",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding bg-hero relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left sticky heading */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32"
            >
              <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">Why Deluve</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-hero-foreground mt-4 leading-[1.1]">
                Built different.<br />
                <span className="text-hero-foreground/30">By design.</span>
              </h2>
              <p className="text-hero-foreground/40 mt-6 leading-relaxed">
                We don't just deliver projects — we engineer competitive advantages that compound over time.
              </p>
            </motion.div>
          </div>

          {/* Right cards */}
          <div className="lg:col-span-7 space-y-4">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex gap-6 p-6 md:p-8 rounded-2xl border border-hero-foreground/5 bg-hero-foreground/[0.02] hover:border-primary/20 hover:bg-hero-foreground/[0.04] transition-all duration-500"
              >
                <span className="text-4xl font-display font-bold text-hero-foreground/10 group-hover:text-primary/30 transition-colors shrink-0">
                  {reason.number}
                </span>
                <div>
                  <h3 className="text-lg font-display font-semibold text-hero-foreground mb-2">{reason.title}</h3>
                  <p className="text-hero-foreground/40 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
