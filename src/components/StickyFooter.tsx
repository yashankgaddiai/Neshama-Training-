import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

export default function StickyFooter({ onEnroll }: { onEnroll: () => void }) {
  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-outline-variant/40 py-3 sm:py-3.5 px-4 sm:px-8 z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.06)]"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-4">
        <div>
          <h4 className="font-bold text-primary text-sm sm:text-base leading-tight">
            Full-Stack AI Engineering · Python + MERN + GenAI
          </h4>
          <p className="text-xs text-on-surface-variant font-medium hidden sm:block">
            3-Month Program · Live + Recorded · Career Track from Week 1
          </p>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:+918143459888"
            className="border border-outline-variant/40 hover:border-primary text-primary px-4 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all flex items-center gap-1.5 whitespace-nowrap"
          >
            <Phone size={14} className="text-secondary" />
            <span>Call</span>
          </a>
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onEnroll}
            className="bg-primary text-white px-5 sm:px-7 py-2.5 rounded-full font-bold text-xs sm:text-sm hover:shadow-lg transition-all whitespace-nowrap"
          >
            Apply Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
