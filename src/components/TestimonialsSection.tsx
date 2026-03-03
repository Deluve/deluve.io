import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const testimonials = [
  {
    quote: "Deluve completely transformed our technology infrastructure. The ROI exceeded all expectations.",
    author: "Carlos Mendes",
    role: "CTO, FinPay Solutions",
    rating: 5,
  },
  {
    quote: "Exceptional professionals. They delivered the project ahead of schedule with superior quality.",
    author: "Ana Rodrigues",
    role: "CEO, HealthTech Moz",
    rating: 5,
  },
  {
    quote: "The automation implemented by Deluve reduced our operational costs by over 40%. I recommend without hesitation.",
    author: "Pedro Silva",
    role: "Director of Operations, RetailMax",
    rating: 5,
  },
  {
    quote: "Their payment gateway integration was flawless. We saw a 3x increase in successful transactions within the first month.",
    author: "Fatima Hassan",
    role: "CFO, QuickPay Africa",
    rating: 5,
  },
  {
    quote: "The CRM solution they built gave us complete visibility into our sales pipeline. Game changer for our team.",
    author: "João Tembe",
    role: "Sales Director, Nexus Corp",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section className="section-padding bg-black relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/8 blur-3xl"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-4 leading-[1.1]">
              Client voices<span className="text-primary">.</span>
            </h2>
            <div className="mt-5 h-px w-32 bg-gradient-to-r from-primary/60 to-transparent" />
          </div>
          <div className="flex items-center gap-3">
            <motion.button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-xl border border-white/20 bg-white/5 flex items-center justify-center hover:bg-primary hover:border-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/5 disabled:hover:border-white/20"
            >
              <ChevronLeft size={20} className="text-white" />
            </motion.button>
            <motion.button
              onClick={scrollNext}
              disabled={!canScrollNext}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-xl border border-white/20 bg-white/5 flex items-center justify-center hover:bg-primary hover:border-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/5 disabled:hover:border-white/20"
            >
              <ChevronRight size={20} className="text-white" />
            </motion.button>
          </div>
        </motion.div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group"
              >
                <div className="relative p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-primary/30 transition-all duration-500 flex flex-col justify-between h-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -right-12 -top-12 w-32 h-32 rounded-full border border-primary/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <Quote className="text-primary/40" size={36} />
                      <div className="flex gap-1">
                        {Array.from({ length: t.rating }).map((_, idx) => (
                          <Star key={idx} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                    <p className="text-white/80 leading-relaxed text-base mb-8">"{t.quote}"</p>
                  </div>

                  <div className="relative z-10 pt-6 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                        <span className="text-primary font-display font-bold text-lg">
                          {t.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-display font-semibold text-white">{t.author}</div>
                        <div className="text-sm text-white/50">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === selectedIndex ? "bg-primary w-8" : "bg-white/20 w-2 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
