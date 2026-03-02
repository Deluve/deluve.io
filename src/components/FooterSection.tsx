import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contact" className="bg-hero text-hero-foreground">
      {/* CTA */}
      <div className="section-padding border-b border-hero-foreground/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1]">
                Ready to<br />
                <span className="text-gradient">innovate?</span>
              </h2>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <a
                href="mailto:info@deluve.com"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover:bg-primary/90 transition-colors group"
              >
                <Mail size={18} /> 
                Get in Touch
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer info */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <span className="text-2xl font-display font-bold tracking-tight">
              deluve<span className="text-primary">.</span>
            </span>
            <p className="text-hero-foreground/30 text-sm mt-2">Technology Startup Studio</p>
          </div>

          <div className="md:col-span-4">
            <div className="space-y-3 text-sm text-hero-foreground/40">
              <span className="inline-flex items-center gap-2"><Mail size={14} /> info@deluve.com</span><br/>
              <span className="inline-flex items-center gap-2"><Phone size={14} /> +258 84 000 0000</span><br/>
              <span className="inline-flex items-center gap-2"><MapPin size={14} /> Maputo, Mozambique</span>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="flex flex-col gap-2 text-sm text-hero-foreground/40 md:items-end">
              <a href="#services" className="hover:text-hero-foreground transition-colors">Services</a>
              <a href="#cases" className="hover:text-hero-foreground transition-colors">Work</a>
              <a href="#platforms" className="hover:text-hero-foreground transition-colors">Platforms</a>
              <a href="#faq" className="hover:text-hero-foreground transition-colors">FAQ</a>
            </div>
          </div>
        </div>

        <div className="border-t border-hero-foreground/5 mt-12 pt-8 text-center text-xs text-hero-foreground/20">
          © {new Date().getFullYear()} Deluve. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
