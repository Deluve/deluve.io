import { Mail, MapPin, Phone } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contact" className="bg-hero text-hero-foreground">
      {/* CTA */}
      <div className="section-padding border-b border-hero-foreground/10">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Pronto para <span className="text-gradient">inovar</span>?
          </h2>
          <p className="text-hero-foreground/60 mb-8">
            Entre em contacto e descubra como podemos transformar a sua visão em realidade.
          </p>
          <a
            href="mailto:info@deluve.com"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors text-base"
          >
            <Mail size={18} /> Fale Connosco
          </a>
        </div>
      </div>

      {/* Footer info */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-2xl font-display font-bold tracking-tight">
              deluve<span className="text-primary">.</span>
            </span>
            <p className="text-hero-foreground/40 text-sm mt-1">Technology Startup Studio</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 text-sm text-hero-foreground/50">
            <span className="inline-flex items-center gap-2"><Mail size={14} /> info@deluve.com</span>
            <span className="inline-flex items-center gap-2"><Phone size={14} /> +258 84 000 0000</span>
            <span className="inline-flex items-center gap-2"><MapPin size={14} /> Maputo, Moçambique</span>
          </div>
        </div>

        <div className="border-t border-hero-foreground/10 mt-8 pt-8 text-center text-sm text-hero-foreground/30">
          © {new Date().getFullYear()} Deluve. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
