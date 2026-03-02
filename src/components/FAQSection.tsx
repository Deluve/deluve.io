import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Que tipo de empresas a Deluve atende?",
    a: "Trabalhamos com startups em fase inicial, empresas em crescimento e organizações estabelecidas que buscam inovação tecnológica e transformação digital.",
  },
  {
    q: "Quanto tempo demora um projecto típico?",
    a: "Depende da complexidade, mas um MVP pode ser entregue em 4-8 semanas. Projectos mais complexos seguem roadmaps personalizados com entregas incrementais.",
  },
  {
    q: "Quais tecnologias vocês utilizam?",
    a: "Utilizamos um stack moderno incluindo AWS, GCP, React, Node.js, Python, além de plataformas como Zoho, WordPress, Hikvision e soluções de virtualização Hyper-V.",
  },
  {
    q: "Como funciona o modelo de consultoria?",
    a: "Começamos com um diagnóstico completo, seguido de um plano estratégico com KPIs claros. Acompanhamos a implementação e medimos resultados continuamente.",
  },
  {
    q: "Oferecem suporte pós-implementação?",
    a: "Sim, oferecemos planos de suporte contínuo com SLAs definidos, monitoramento proativo e manutenção evolutiva dos sistemas implementados.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-section-alt">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
