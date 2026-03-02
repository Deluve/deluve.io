import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What types of companies does Deluve serve?",
    a: "We work with early-stage startups, growing companies, and established organizations seeking technological innovation and digital transformation.",
  },
  {
    q: "How long does a typical project take?",
    a: "It depends on complexity, but an MVP can be delivered in 4-8 weeks. More complex projects follow personalized roadmaps with incremental deliveries.",
  },
  {
    q: "What technologies do you use?",
    a: "We use a modern stack including AWS, GCP, React, Node.js, Python, plus platforms like Zoho, WordPress, Hikvision, and Hyper-V virtualization solutions.",
  },
  {
    q: "How does the consulting model work?",
    a: "We start with a comprehensive diagnosis, followed by a strategic plan with clear KPIs. We monitor implementation and continuously measure results.",
  },
  {
    q: "Do you offer post-implementation support?",
    a: "Yes, we offer continuous support plans with defined SLAs, proactive monitoring, and evolutionary maintenance of implemented systems.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left heading */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">FAQ</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-4 leading-[1.1]">
                Questions<span className="text-primary">?</span><br />
                <span className="text-muted-foreground/40">Answers.</span>
              </h2>
              <p className="text-muted-foreground mt-6 text-sm leading-relaxed">
                Everything you need to know about working with us. Can't find the answer? Reach out directly.
              </p>
            </motion.div>
          </div>

          {/* Right accordion */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Accordion type="single" collapsible className="space-y-2">
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="border-b border-border px-0 data-[state=open]:border-primary/20"
                  >
                    <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline hover:text-primary transition-colors py-6 text-base">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
