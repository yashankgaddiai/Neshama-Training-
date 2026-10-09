import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar({ onEnroll }: { onEnroll?: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { label: "Brochure", href: "#brochure" },
    { label: "Curriculum", href: "#curriculum" },
    { label: "Instructors", href: "#instructors" },
    { label: "Projects", href: "#projects" },
    { label: "Career Track", href: "#career" },
    { label: "Fees", href: "#fees" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="sticky top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-between items-center h-18">
        <a href="#" className="flex items-center gap-3 text-left group">
          <img 
            src="/logo.png" 
            alt="Neshama Training Logo" 
            className="w-10 h-10 sm:w-11 sm:h-11 object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-105" 
          />
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-black tracking-tight text-primary leading-tight">Neshama Training</span>
            <span className="text-[11px] sm:text-xs font-black text-blue-600 tracking-tight mt-0.5">Delivering Excellence in Every Training Experience</span>
          </div>
        </a>

        <div className="hidden lg:flex gap-7 items-center">
          {links.map((link) => (
            <a 
              key={link.label}
              className="text-on-surface-variant hover:text-primary font-bold text-sm tracking-tight transition-colors duration-200" 
              href={link.href}
            >
              {link.label}
            </a>
          ))}
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onEnroll}
            className="bg-primary text-white px-6 py-2 rounded-full font-bold text-sm hover:shadow-md transition-all"
          >
            Apply Now
          </motion.button>
        </div>

        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-primary p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-surface border-b border-outline-variant/30 px-6 py-4 flex flex-col gap-3"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-primary font-bold text-base py-1"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onEnroll?.();
              }}
              className="bg-primary text-white py-3 rounded-full font-bold text-center mt-2"
            >
              Apply Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
