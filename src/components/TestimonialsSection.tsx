import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "A Deluve transformou completamente a nossa infraestrutura tecnológica. O ROI superou todas as expectativas.",
    author: "Carlos Mendes",
    role: "CTO, FinPay Solutions",
  },
  {
    quote: "Profissionais excepcionais. Entregaram o projecto antes do prazo e com qualidade superior ao esperado.",
    author: "Ana Rodrigues",
    role: "CEO, HealthTech Moz",
  },
  {
    quote: "A automação implementada pela Deluve reduziu os nossos custos operacionais em mais de 40%. Recomendo sem hesitar.",
    author: "Pedro Silva",
    role: "Director de Operações, RetailMax",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Testemunhos</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
            O que dizem os nossos <span className="text-gradient">parceiros</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-border bg-card"
            >
              <Quote className="text-primary/30 mb-4" size={32} />
              <p className="text-foreground leading-relaxed mb-6">{t.quote}</p>
              <div>
                <div className="font-display font-semibold text-foreground">{t.author}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
