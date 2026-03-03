import { Mail, MapPin, Phone, ArrowUpRight, Linkedin, Github, Twitter } from "lucide-react";

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
              <p className="text-hero-foreground/40 mt-6 max-w-lg text-lg leading-relaxed">
                Let's turn your vision into a scalable, high-impact product. Get in touch and let's start building together.
              </p>
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
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3">
            <span className="text-2xl font-display font-bold tracking-tight">
              deluve<span className="text-primary">.</span>
            </span>
            <p className="text-hero-foreground/30 text-sm mt-3 leading-relaxed">
              Technology Startup Studio based in Maputo, Mozambique. We create, develop, and accelerate innovative startups.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" className="w-9 h-9 rounded-full border border-hero-foreground/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                <Linkedin size={14} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-hero-foreground/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                <Github size={14} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-hero-foreground/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                <Twitter size={14} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-display font-semibold text-sm mb-4">Services</h4>
            <div className="flex flex-col gap-2.5 text-sm text-hero-foreground/40">
              <a href="#services" className="hover:text-hero-foreground transition-colors">Software Development</a>
              <a href="#services" className="hover:text-hero-foreground transition-colors">IT Consulting</a>
              <a href="#services" className="hover:text-hero-foreground transition-colors">Process Automation</a>
              <a href="#services" className="hover:text-hero-foreground transition-colors">Data & Analytics</a>
              <a href="#services" className="hover:text-hero-foreground transition-colors">Mobile Solutions</a>
            </div>
          </div>

          {/* Company */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-display font-semibold text-sm mb-4">Company</h4>
            <div className="flex flex-col gap-2.5 text-sm text-hero-foreground/40">
              <a href="#" className="hover:text-hero-foreground transition-colors">About Us</a>
              <a href="#cases" className="hover:text-hero-foreground transition-colors">Case Studies</a>
              <a href="#platforms" className="hover:text-hero-foreground transition-colors">Tech Stack</a>
              <a href="#faq" className="hover:text-hero-foreground transition-colors">FAQ</a>
              <a href="#contact" className="hover:text-hero-foreground transition-colors">Careers</a>
            </div>
          </div>

          {/* Resources */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-display font-semibold text-sm mb-4">Resources</h4>
            <div className="flex flex-col gap-2.5 text-sm text-hero-foreground/40">
              <a href="#" className="hover:text-hero-foreground transition-colors">Blog</a>
              <a href="#" className="hover:text-hero-foreground transition-colors">Documentation</a>
              <a href="#" className="hover:text-hero-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-hero-foreground transition-colors">Terms of Service</a>
            </div>
          </div>

          {/* Contact */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="font-display font-semibold text-sm mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-hero-foreground/40">
              <a href="mailto:info@deluve.com" className="flex items-center gap-2 hover:text-hero-foreground transition-colors">
                <Mail size={14} className="text-primary" /> info@deluve.com
              </a>
              <span className="flex items-center gap-2">
                <Phone size={14} className="text-primary" /> +258 84 000 0000
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-primary" /> Maputo, Mozambique
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-hero-foreground/5 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-hero-foreground/20">
          <span>© {new Date().getFullYear()} Deluve. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-hero-foreground/50 transition-colors">Privacy</a>
            <a href="#" className="hover:text-hero-foreground/50 transition-colors">Terms</a>
            <a href="#" className="hover:text-hero-foreground/50 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
