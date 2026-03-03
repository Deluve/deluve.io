import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Monitor, CreditCard, ShoppingCart, BarChart3, Smartphone, Database } from "lucide-react";

const cases = [
  {
    tag: "CRM",
    title: "Custom CRM Platform",
    description: "End-to-end customer relationship management with pipeline automation and analytics.",
    fullDescription: "A fully custom CRM built for a sales-driven organization. Features include automated lead scoring, pipeline management with drag-and-drop stages, 360° customer profiles, and real-time analytics dashboards. The platform integrates with email, calendars, and third-party tools for a seamless workflow.",
    status: "Live",
    metrics: ["5x lead conversion", "360° customer view"],
    icon: Database,
  },
  {
    tag: "POS",
    title: "Cloud-Based POS",
    description: "Modern point-of-sale with real-time inventory sync and multi-location support.",
    fullDescription: "A cloud-native POS system designed for retail chains operating across 50+ locations. It features real-time inventory synchronization, offline-first architecture for uninterrupted sales, multi-currency support, and advanced reporting. The system handles thousands of transactions daily with 99.9% uptime.",
    status: "Live",
    metrics: ["99.9% uptime", "50+ locations"],
    icon: ShoppingCart,
  },
  {
    tag: "Payments",
    title: "Payment Gateway",
    description: "Unified payment processing with smart routing, fraud detection and reconciliation.",
    fullDescription: "A PCI-compliant payment gateway that unifies multiple payment methods — cards, mobile money, and bank transfers — into a single API. Features include intelligent transaction routing for optimal success rates, real-time fraud detection with ML models, and automated reconciliation across all channels.",
    status: "Live",
    metrics: ["3x transactions", "PCI compliant"],
    icon: CreditCard,
  },
  {
    tag: "ERP",
    title: "Enterprise ERP Suite",
    description: "Integrated enterprise resource planning for finance, HR and supply chain management.",
    fullDescription: "A comprehensive ERP suite that consolidates finance, human resources, procurement, and supply chain operations into a single platform. It delivers real-time reporting, automated workflows, and role-based access control, resulting in a 40% reduction in operational costs.",
    status: "Live",
    metrics: ["40% cost reduction", "Real-time reports"],
    icon: BarChart3,
  },
  {
    tag: "Analytics",
    title: "BI Dashboard",
    description: "Business intelligence platform with real-time data visualization and predictive analytics.",
    fullDescription: "A powerful BI platform that connects to 10+ data sources and delivers custom KPI dashboards, predictive analytics, and automated report generation. Built for executive teams who need actionable insights at a glance.",
    status: "Live",
    metrics: ["10+ data sources", "Custom KPIs"],
    icon: Monitor,
  },
  {
    tag: "Mobile",
    title: "Fleet Management App",
    description: "Cross-platform mobile app for real-time fleet tracking and route optimization.",
    fullDescription: "A cross-platform mobile application for fleet operators that provides real-time GPS tracking, intelligent route optimization, driver behavior monitoring, and fuel consumption analytics. The app reduced fuel costs by 30% and improved delivery times significantly.",
    status: "Live",
    metrics: ["30% fuel savings", "GPS tracking"],
    icon: Smartphone,
  },
];

const CaseStudies = () => {
  const [selected, setSelected] = useState(0);
  const active = cases[selected];
  const Icon = active.icon;

  return (
    <section id="cases" className="section-padding bg-hero relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">#Projects</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-hero-foreground mt-4 leading-[1.1]">
            Successful Cases<span className="text-primary">.</span>
          </h2>
        </motion.div>

        {/* Grid + Preview layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left: Project cards grid */}
          <div className="grid grid-cols-2 gap-4">
            {cases.map((item, i) => {
              const ItemIcon = item.icon;
              const isActive = selected === i;
              return (
                <motion.button
                  key={item.title}
                  onClick={() => setSelected(i)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`group relative text-left rounded-2xl border p-5 transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-primary/10 border-primary/40"
                      : "bg-hero-foreground/[0.03] border-hero-foreground/5 hover:border-hero-foreground/15"
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-hero-foreground/5 flex items-center justify-center mb-4">
                    <ItemIcon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className={`text-base font-display font-bold mb-2 transition-colors ${
                    isActive ? "text-primary" : "text-hero-foreground"
                  }`}>
                    {item.title}
                  </h3>
                  <p className="text-hero-foreground/40 text-xs leading-relaxed mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                      {item.status}
                    </span>
                    {isActive && (
                      <ArrowRight className="w-4 h-4 text-primary" />
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right: Preview panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-hero-foreground/[0.03] border border-hero-foreground/5 rounded-2xl p-8 flex flex-col justify-between min-h-[480px]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1.5 rounded-full">
                      {active.tag}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                      {active.status}
                    </span>
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-display font-bold text-hero-foreground mb-6">
                  {active.title}
                </h3>

                {/* Mock preview area */}
                <div className="w-full aspect-video rounded-xl bg-hero-foreground/[0.05] border border-hero-foreground/5 mb-6 flex items-center justify-center overflow-hidden">
                  <div className="flex flex-col items-center gap-3 text-hero-foreground/20">
                    <Icon className="w-16 h-16" />
                    <span className="text-sm font-display font-semibold">{active.title}</span>
                  </div>
                </div>

                <p className="text-hero-foreground/50 text-sm leading-relaxed">
                  {active.fullDescription}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-hero-foreground/5">
                {active.metrics.map((m) => (
                  <span key={m} className="text-xs bg-hero-foreground/5 text-hero-foreground/60 px-3 py-1.5 rounded-full">
                    {m}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
