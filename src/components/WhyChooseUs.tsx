import { motion } from "framer-motion";
import { TrendingUp, Shield, Zap, Users } from "lucide-react";

const reasons = [
  {
    icon: TrendingUp,
    title: "ROI Mensurável",
    description: "Estratégias baseadas em dados que geram resultados concretos e retorno sobre investimento comprovado.",
  },
  {
    icon: Shield,
    title: "Parceria de Longo Prazo",
    description: "Trabalhamos lado a lado com os nossos clientes, construindo relações duradouras e de confiança mútua.",
  },
  {
    icon: Zap,
    title: "Automação Inteligente",
    description: "Otimizamos processos com automação avançada, aumentando a eficiência e reduzindo custos operacionais.",
  },
  {
    icon: Users,
    title: "Equipa Multidisciplinar",
    description: "Profissionais especializados em diversas tecnologias e áreas de negócio para soluções completas.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Porquê Nós</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
            A diferença que a <span className="text-gradient">Deluve</span> faz
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="text-primary" size={22} />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
