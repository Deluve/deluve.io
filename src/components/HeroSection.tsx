import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-hero overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-hero via-hero/90 to-hero/50" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 rounded-full px-4 py-1.5 mb-8">
              <Rocket size={14} className="text-primary" />
              <span className="text-sm font-medium text-primary">Startup Studio & IT Consulting</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-hero-foreground leading-[1.1] mb-6"
          >
            Transformamos ideias em{" "}
            <span className="text-gradient">negócios escaláveis</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-hero-foreground/60 max-w-xl mb-10 leading-relaxed"
          >
            Criamos, desenvolvemos e aceleramos startups inovadoras. Automação, consultoria IT e desenvolvimento de software para resultados mensuráveis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-lg hover:bg-primary/90 transition-colors text-base"
            >
              Iniciar Projecto <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border border-hero-foreground/20 text-hero-foreground font-semibold px-7 py-3.5 rounded-lg hover:bg-hero-foreground/5 transition-colors text-base"
            >
              Nossos Serviços
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex gap-10 md:gap-16 mt-16 pt-10 border-t border-hero-foreground/10"
          >
            {[
              { value: "50+", label: "Projectos Entregues" },
              { value: "98%", label: "Satisfação dos Clientes" },
              { value: "15+", label: "Tecnologias Dominadas" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-display font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-hero-foreground/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
