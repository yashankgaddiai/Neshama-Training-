import { motion } from 'motion/react';

export default function FinalCTA({ onEnroll }: { onEnroll: () => void }) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-16 sm:py-32 px-4 sm:px-8 bg-surface"
    >
      <div className="max-w-5xl mx-auto rounded-3xl bg-primary text-white p-10 sm:p-16 md:p-20 text-center relative overflow-hidden shadow-2xl">
        <div className="relative z-10">
          <span className="text-secondary font-bold uppercase text-[0.75rem] tracking-[0.2em] mb-4 block">
            Ready to Begin?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Start Your AI Engineering Journey
          </h2>
          <p className="text-base sm:text-lg text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed">
            Talk to a counsellor about the next batch, scholarships and EMI options. Call +91 81434 59888 or +91 95501 43619.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-10">
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onEnroll}
              className="w-full sm:w-auto bg-secondary text-primary px-8 py-4 rounded-full font-bold text-base hover:shadow-xl transition-all"
            >
              Book Free Counselling
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/enroll/"
              className="w-full sm:w-auto text-center bg-white text-primary px-8 py-4 rounded-full font-bold text-base hover:shadow-xl transition-all"
            >
              Enroll Now
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://wa.me/918143459888"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-base transition-all flex items-center justify-center gap-2"
            >
              
              Chat on WhatsApp
            </motion.a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/60">
            <span>• 12 Weeks Comprehensive Program</span>
            <span>• Live AI Engineering Sessions</span>
            <span>• Career Track from Week 1</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
