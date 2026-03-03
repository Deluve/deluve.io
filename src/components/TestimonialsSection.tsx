import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Deluve completely transformed our technology infrastructure. The ROI exceeded all expectations.",
    author: "Carlos Mendes",
    role: "CTO, FinPay Solutions",
  },
  {
    quote: "Exceptional professionals. They delivered the project ahead of schedule with superior quality.",
    author: "Ana Rodrigues",
    role: "CEO, HealthTech Moz",
  },
  {
    quote: "The automation implemented by Deluve reduced our operational costs by over 40%. I recommend without hesitation.",
    author: "Pedro Silva",
    role: "Director of Operations, RetailMax",
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
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-4 leading-[1.1]">
            Client voices<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-border bg-card flex flex-col justify-between"
            >
              <div>
                <Quote className="text-primary/20 mb-6" size={32} />
                <p className="text-foreground leading-relaxed">{t.quote}</p>
              </div>
              <div className="mt-8 pt-6 border-t border-border">
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
