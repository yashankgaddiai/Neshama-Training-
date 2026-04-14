import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function FinalCTA({ onEnroll }: { onEnroll: () => void }) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-32 px-8 bg-surface"
    >
      <div className="max-w-5xl mx-auto rounded-3xl bg-primary text-white p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover"></div>
        <div className="relative z-10">
          <span className="text-secondary font-bold uppercase text-[0.75rem] tracking-[0.2em] mb-4 block">
            🔥 Final CTA
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Start Your AI Engineering Career Today</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">Generative AI is the biggest hiring wave in tech. Build a portfolio that proves your skills.</p>
          
          <div className="flex flex-col items-center gap-8">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onEnroll}
              className="bg-secondary text-primary px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all"
            >
              👉 Enroll Now — Reserve My Seat 🚀
            </motion.button>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl">
              {[
                "Lifetime access",
                "Certificate",
                "Mentor support",
                "Job-ready portfolio"
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider opacity-80">
                  <CheckCircle2 size={14} className="text-secondary" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
