import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowUpRight, Linkedin, Github, Twitter } from "lucide-react";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const linkVariants = {
    initial: { opacity: 0.6 },
    hover: { opacity: 1, x: 4, color: "var(--color-primary)" },
  };

  return (
    <footer id="contact" className="bg-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-gradient-to-tl from-primary/10 to-transparent blur-3xl"
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* CTA Section */}
      <div className="section-padding border-b border-white/10 backdrop-blur-sm relative z-10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-12 gap-8 items-end"
          >
            <div className="md:col-span-7">
              <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">Let's Create Magic</span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mt-4">
                Ready to<br />
                <span className="text-gradient">innovate?</span>
              </h2>
              <p className="text-white/60 mt-6 max-w-lg text-base leading-relaxed">
                Turn your vision into a scalable, high-impact product. Let's collaborate and build something extraordinary together.
              </p>
            </div>

            <div className="md:col-span-5 flex md:justify-end">
              <motion.div
                className="group relative"
                whileHover={{ scale: 1.05 }}
              >
                {/* Button halo */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-primary/50 to-transparent blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10" />
                
                <a
                  href="mailto:info@deluve.com"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg transition-all group/btn"
                >
                  <Mail size={18} />
                  Get in Touch
                  <motion.div whileHover={{ x: 2, y: -2 }}>
                    <ArrowUpRight size={16} />
                  </motion.div>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-12">
          {/* Brand */}
          <motion.div
            className="col-span-2 md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-3xl font-display font-bold tracking-tight">
              deluve<span className="text-gradient">.</span>
            </span>
            <p className="text-white/50 text-sm mt-4 leading-relaxed">
              Startup Studio & IT Consulting based in Maputo, Mozambique. We create and accelerate innovative digital solutions.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Github, label: "GitHub" },
                { icon: Twitter, label: "Twitter" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="group/social relative"
                  whileHover={{ y: -4 }}
                >
                  {/* Social icon glow */}
                  <div className="absolute -inset-1 rounded-full bg-primary/20 blur-md opacity-0 group-hover/social:opacity-100 transition-opacity -z-10" />
                  
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
                    <social.icon size={16} />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Sections */}
          {[
            {
              title: "Services",
              links: [
                "Software Development",
                "IT Consulting",
                "Process Automation",
                "Data & Analytics",
              ],
            },
            {
              title: "Company",
              links: [
                "About Us",
                "Case Studies",
                "Team",
                "Blog",
                "Careers",
              ],
            },
            {
              title: "Resources",
              links: [
                "Documentation",
                "Privacy Policy",
                "Terms of Service",
                "Contact",
              ],
            },
          ].map((section, sectionIdx) => (
            <motion.div
              key={sectionIdx}
              className="col-span-1 md:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (sectionIdx + 1) * 0.1 }}
            >
              <h4 className="font-display font-semibold text-base mb-5 text-white">{section.title}</h4>
              <div className="flex flex-col gap-3">
                {section.links.map((link, idx) => (
                  <motion.a
                    key={idx}
                    href="#"
                    className="text-white/50 text-sm hover:text-primary transition-colors relative group/link"
                    variants={linkVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    {link}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-transparent group-hover/link:w-full transition-all duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            className="col-span-2 md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="font-display font-semibold text-base mb-5 text-white">Get in Touch</h4>
            <div className="space-y-4">
              <motion.a
                href="mailto:info@deluve.com"
                className="flex items-center gap-3 text-white/50 hover:text-primary transition-colors group/contact"
                whileHover={{ x: 4 }}
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover/contact:bg-primary/20 transition-colors">
                  <Mail size={16} className="text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase text-white/30 font-semibold">Email</span>
                  <span className="text-sm">info@deluve.com</span>
                </div>
              </motion.a>

              <motion.div
                className="flex items-center gap-3 text-white/50"
                whileHover={{ x: 4 }}
              >
                <div className="p-2 rounded-lg bg-primary/10">
                  <Phone size={16} className="text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase text-white/30 font-semibold">Phone</span>
                  <span className="text-sm">+258 84 000 0000</span>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 text-white/50"
                whileHover={{ x: 4 }}
              >
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin size={16} className="text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase text-white/30 font-semibold">Location</span>
                  <span className="text-sm">Maputo, Mozambique</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-16 pt-8" />

        {/* Footer bottom */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-sm text-white/40">
            © {currentYear} Deluve. All rights reserved.
          </span>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((item, i) => (
              <motion.a
                key={i}
                href="#"
                className="text-sm text-white/40 hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
