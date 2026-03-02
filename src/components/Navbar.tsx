import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Work", href: "#cases" },
  { label: "Platforms", href: "#platforms" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-hero/95 backdrop-blur-xl border-b border-white/5" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between h-20 px-6">
        <a href="#" className="text-2xl font-display font-bold text-hero-foreground tracking-tight">
          deluve<span className="text-primary">.</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-hero-foreground/50 hover:text-hero-foreground px-4 py-2 rounded-full hover:bg-white/5 transition-all font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center bg-primary text-primary-foreground text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-primary/90 transition-colors"
        >
          Get in Touch
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden text-hero-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-hero/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="flex flex-col gap-1 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-hero-foreground/60 hover:text-hero-foreground py-3 px-4 rounded-xl hover:bg-white/5 transition-all font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="bg-primary text-primary-foreground text-sm font-semibold px-5 py-3 rounded-full text-center hover:bg-primary/90 transition-colors mt-2"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
