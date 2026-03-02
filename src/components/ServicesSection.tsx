import { motion } from "framer-motion";
import { Code, Cloud, Cog, BarChart3, Smartphone, Database } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Desenvolvimento de Software",
    description: "Aplicações web e mobile à medida, com foco em performance, segurança e escalabilidade.",
  },
  {
    icon: Cloud,
    title: "Infraestrutura Cloud",
    description: "Migração, gestão e otimização de infraestruturas em AWS, GCP e ambientes híbridos.",
  },
  {
    icon: Cog,
    title: "Automação de Processos",
    description: "Implementação de workflows automatizados para maximizar a eficiência operacional.",
  },
  {
    icon: BarChart3,
    title: "Consultoria IT",
    description: "Análise estratégica e roadmaps tecnológicos para transformação digital orientada a resultados.",
  },
  {
    icon: Smartphone,
    title: "Aceleração de Startups",
    description: "Do MVP ao produto final — acompanhamos startups em todas as fases de crescimento.",
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description: "Soluções de dados inteligentes para tomada de decisões baseadas em evidências.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-section-alt">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Serviços</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">
            Nossos Serviços <span className="text-gradient">Principais</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Soluções completas para cada etapa da sua jornada tecnológica.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <service.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
