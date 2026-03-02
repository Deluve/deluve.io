import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    tag: "Fintech",
    title: "Plataforma de Pagamentos Digital",
    description: "Desenvolvimento de uma solução de pagamentos mobile-first com integração a múltiplos provedores, processando milhares de transações diárias.",
    metrics: ["3x mais transações", "99.9% uptime", "40% redução de custos"],
  },
  {
    tag: "Saúde",
    title: "Sistema de Gestão Hospitalar",
    description: "Automação completa de processos hospitalares com integração de IoT para monitoramento em tempo real de pacientes e recursos.",
    metrics: ["60% mais eficiência", "200+ dispositivos IoT", "Zero downtime"],
  },
  {
    tag: "Retail",
    title: "E-commerce com IA Integrada",
    description: "Plataforma de comércio eletrónico com recomendações inteligentes e gestão automatizada de inventário via machine learning.",
    metrics: ["45% mais vendas", "2x conversão", "Inventário automatizado"],
  },
];

const CaseStudies = () => {
  return (
    <section id="cases" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Case Studies</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
            Projectos que <span className="text-gradient">geram impacto</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {cases.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-hero rounded-2xl p-8 flex flex-col justify-between min-h-[380px] overflow-hidden hover:scale-[1.02] transition-transform duration-300"
            >
              <div>
                <span className="inline-block bg-primary/20 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-6">
                  {item.tag}
                </span>
                <h3 className="text-2xl font-display font-bold text-hero-foreground mb-3">{item.title}</h3>
                <p className="text-hero-foreground/60 text-sm leading-relaxed">{item.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {item.metrics.map((m) => (
                  <span key={m} className="text-xs bg-hero-foreground/10 text-hero-foreground/80 px-3 py-1.5 rounded-full">
                    {m}
                  </span>
                ))}
              </div>

              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-hero-foreground/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                <ArrowUpRight className="text-hero-foreground/50 group-hover:text-primary-foreground transition-colors" size={18} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
