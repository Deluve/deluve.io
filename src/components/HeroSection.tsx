import { motion } from "framer-motion";
import { ArrowRight, ArrowDownRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10 pt-32 pb-20 min-h-screen flex flex-col justify-between">
        {/* Top row - tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-hero-foreground/40 uppercase tracking-[0.3em]">
            Startup Studio & IT Consulting
          </span>
        </motion.div>

        {/* Main headline - asymmetric */}
        <div className="flex-1 flex items-center py-12">
          <div className="w-full">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-[6.5rem] font-display font-bold text-hero-foreground leading-[0.95] tracking-tight"
            >
              We build
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-5xl md:text-7xl lg:text-[6.5rem] font-display font-bold text-gradient leading-[0.95] tracking-tight md:ml-[15%]"
            >
              the future.
            </motion.h1>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12 md:mt-16">
              <div />
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <p className="text-lg text-hero-foreground/50 leading-relaxed max-w-md">
                  We create, develop, and accelerate innovative startups through automation, IT consulting, and advanced software development.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-full hover:bg-primary/90 transition-colors"
                  >
                    Start a Project <ArrowRight size={18} />
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center gap-2 text-hero-foreground/50 font-medium px-7 py-3.5 rounded-full hover:text-hero-foreground transition-colors"
                  >
                    Explore Services
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom stats - horizontal scroll feel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-3 border-t border-hero-foreground/10 pt-8"
        >
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "15+", label: "Technologies Mastered" },
          ].map((stat, i) => (
            <div key={stat.label} className={`${i > 0 ? "border-l border-hero-foreground/10 pl-8" : ""}`}>
              <div className="text-3xl md:text-5xl font-display font-bold text-hero-foreground">{stat.value}</div>
              <div className="text-xs md:text-sm text-hero-foreground/30 mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDownRight size={20} className="text-hero-foreground/20" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
