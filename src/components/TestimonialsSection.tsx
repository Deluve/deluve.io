import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

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
  {
    quote: "Their payment gateway integration was flawless. We saw a 3x increase in successful transactions within the first month.",
    author: "Fatima Hassan",
    role: "CFO, QuickPay Africa",
  },
  {
    quote: "The CRM solution they built gave us complete visibility into our sales pipeline. Game changer for our team.",
    author: "João Tembe",
    role: "Sales Director, Nexus Corp",
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
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-4 leading-[1.1]">
              Client voices<span className="text-primary">.</span>
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {testimonials.map((t, i) => (
              <div
                key={t.author}
                className="flex-shrink-0 w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] p-8 rounded-2xl border border-border bg-card flex flex-col justify-between"
              >
                <div>
                  <Quote className="text-primary/20 mb-6" size={32} />
                  <p className="text-foreground leading-relaxed">{t.quote}</p>
                </div>
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="font-display font-semibold text-foreground">{t.author}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === selectedIndex ? "bg-primary w-6" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
