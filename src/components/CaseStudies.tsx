import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Monitor, CreditCard, ShoppingCart, BarChart3, Smartphone, Database } from "lucide-react";

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

];

const CaseStudies = () => {
  const [selected, setSelected] = useState(0);
  const previewRef = useRef<HTMLDivElement>(null);
  const active = cases[selected];
  const Icon = active.icon;

  return (
    <section id="cases" className="section-padding bg-background relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute -bottom-40 left-1/4 w-96 h-96 rounded-full bg-primary/8 blur-3xl"
        />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">#Projects</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-4 leading-[1.1]">
            Successful Cases<span className="text-primary">.</span>
          </h2>
        </motion.div>

        {/* Grid + Preview layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left: Project cards grid */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-1 lg:gap-3">
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
                    whileHover={{ y: -2 }}
                    className={`group relative text-left rounded-xl border p-4 transition-all duration-300 cursor-pointer overflow-hidden ${
                      isActive
                        ? "bg-primary/10 border-primary/30 shadow-lg shadow-primary/10"
                        : "bg-card border-border hover:border-primary/20"
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <ItemIcon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                      </div>
                      <h3 className={`text-sm font-display font-bold mb-1 transition-colors ${
                        isActive ? "text-primary" : "text-foreground"
                      }`}>
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-2 mt-3">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                        <span className="text-[11px] font-semibold text-primary uppercase">
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Right: Preview panel */}
          <AnimatePresence mode="wait">
            <motion.div
              ref={previewRef}
              key={selected}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-2 bg-card border border-border rounded-2xl p-6 md:p-8 flex flex-col justify-between overflow-hidden group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-semibold text-primary uppercase tracking-[0.15em] bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
                    {active.tag}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary uppercase">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                    {active.status}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-[1.1]">
                  {active.title}
                </h3>

                {/* Icon preview area */}
                <div className="w-full aspect-video rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 mb-6 flex items-center justify-center overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center gap-4"
                  >
                    <div className="w-20 h-20 rounded-2xl bg-primary/15 flex items-center justify-center">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                    <span className="text-sm font-display font-semibold text-foreground">{active.title}</span>
                  </motion.div>
                </div>

                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                  {active.fullDescription}
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2 pt-6 border-t border-border">
                {active.metrics.map((m) => (
                  <motion.span
                    key={m}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-xs bg-primary/10 text-primary font-semibold px-3 py-2 rounded-lg border border-primary/20"
                  >
                    {m}
                  </motion.span>
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
