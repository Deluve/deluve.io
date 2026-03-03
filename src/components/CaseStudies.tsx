import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const cases = [
  {
    tag: "CRM",
    title: "Custom CRM Platform",
    description: "End-to-end customer relationship management with pipeline automation and analytics.",
    status: "Live",
    metrics: ["5x lead conversion", "360° customer view"],
  },
  {
    tag: "POS",
    title: "Cloud-Based POS",
    description: "Modern point-of-sale with real-time inventory sync and multi-location support.",
    status: "Live",
    metrics: ["99.9% uptime", "50+ locations"],
  },
  {
    tag: "Payments",
    title: "Payment Gateway",
    description: "Unified payment processing with smart routing, fraud detection and reconciliation.",
    status: "Live",
    metrics: ["3x transactions", "PCI compliant"],
  },
  {
    tag: "ERP",
    title: "Enterprise ERP Suite",
    description: "Integrated enterprise resource planning for finance, HR and supply chain management.",
    status: "Live",
    metrics: ["40% cost reduction", "Real-time reports"],
  },
  {
    tag: "Analytics",
    title: "BI Dashboard",
    description: "Business intelligence platform with real-time data visualization and predictive analytics.",
    status: "Live",
    metrics: ["10+ data sources", "Custom KPIs"],
  },
  {
    tag: "Mobile",
    title: "Fleet Management App",
    description: "Cross-platform mobile app for real-time fleet tracking and route optimization.",
    status: "Live",
    metrics: ["30% fuel savings", "GPS tracking"],
  },
];

const CaseStudies = () => {
  return (
    <section id="cases" className="section-padding bg-hero relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto relative z-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between"
        >
          <div>
            <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">Projects</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-hero-foreground mt-4 leading-[1.1]">
              Successful Cases<span className="text-primary">.</span>
            </h2>
          </div>
        </motion.div>
      </div>

      {/* Horizontal scrolling strip — like DigitalView */}
      <div className="relative">
        <div className="flex gap-4 animate-marquee-cases hover:[animation-play-state:paused]">
          {[...cases, ...cases].map((item, i) => (
            <div
              key={`${item.title}-${i}`}
              className="group flex-shrink-0 w-[320px] md:w-[380px] bg-hero-foreground/[0.03] border border-hero-foreground/5 rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-display font-bold text-sm">{item.tag.slice(0, 2)}</span>
                  </div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">{item.tag}</span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  {item.status}
                </span>
              </div>

              <h3 className="text-lg font-display font-bold text-hero-foreground mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-hero-foreground/40 text-sm leading-relaxed mb-5">{item.description}</p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-hero-foreground/5">
                {item.metrics.map((m) => (
                  <span key={m} className="text-xs bg-hero-foreground/5 text-hero-foreground/60 px-3 py-1.5 rounded-full">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
