import { Menu } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-header shadow-soft h-20">
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center h-full">
        <div className="text-2xl font-black text-primary">Neshama Training : AI Engineering Masterclass</div>
        <div className="hidden md:flex gap-8 items-center">
          <a className="text-on-surface-variant hover:text-primary font-bold text-sm tracking-tight transition-all duration-300" href="#curriculum">Curriculum</a>
          <a className="text-on-surface-variant hover:text-primary font-bold text-sm tracking-tight transition-all duration-300" href="#projects">Projects</a>
          <a className="text-on-surface-variant hover:text-primary font-bold text-sm tracking-tight transition-all duration-300" href="#outcomes">Outcomes</a>
          <a className="text-on-surface-variant hover:text-primary font-bold text-sm tracking-tight transition-all duration-300" href="#faq">FAQ</a>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-secondary text-primary px-6 py-2.5 rounded-full font-bold text-sm hover:opacity-90 transition-all duration-300"
          >
            Enroll Now
          </motion.button>
        </div>
        <button className="md:hidden text-primary">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}
