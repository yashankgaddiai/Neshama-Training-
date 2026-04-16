import { ArrowUpRight, Calendar, Clock, GraduationCap, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onEnroll: () => void;
}

export default function Hero({ onEnroll }: HeroProps) {
  return (
    <header className="pt-16 sm:pt-20 pb-20 sm:pb-24 px-4 sm:px-8 overflow-hidden bg-surface">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 flex flex-col items-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-primary text-[0.7rem] sm:text-[0.75rem] font-bold uppercase tracking-widest mb-6 border border-secondary/30">
             Live Online Course · 8 Weeks · Beginner Friendly
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] text-primary mb-6 sm:mb-8 tracking-tight max-w-4xl">
            Become an AI Engineer in 8 Weeks — From Scratch
          </h1>
          <p className="text-lg sm:text-xl text-on-surface-variant mb-8 sm:mb-10 max-w-2xl leading-relaxed">
            Learn Generative AI, master Prompt Engineering, build RAG pipelines, create Custom GPTs, and ship real AI products using AI-Assisted Development — even if you've never written a line of code.
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-10 sm:mb-12">
            {[
              { icon: <Calendar size={18} />, text: "Starts Soon" },
              { icon: <Clock size={18} />, text: "8 Weeks (Live + Recorded)" },
              { icon: <ShieldCheck size={18} />, text: "Zero Experience Needed" },
              { icon: <GraduationCap size={18} />, text: "Certificate Included" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold text-primary">
                <div className="text-secondary">{item.icon}</div>
                {item.text}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto px-4 sm:px-0">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onEnroll}
              className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all w-full sm:w-auto"
            >
              Enroll Now — Reserve My Seat 
            </motion.button>
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/neshama training brochure 2026 (2).pdf"
              download="Neshama Training Brochure 2026.pdf"
              className="border border-outline/20 px-8 py-4 rounded-full font-bold text-lg text-primary hover:bg-surface-container-low transition-all flex items-center justify-center w-full sm:w-auto"
            >
              Download Free Brochure
            </motion.a>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-[10px] sm:text-xs font-bold text-outline uppercase tracking-wider">
            <span>• Limited seats per cohort</span>
            <span>• Lifetime access to recordings</span>
            <span>• Mentor support</span>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
