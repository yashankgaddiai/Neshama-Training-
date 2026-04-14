import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section className="py-32 px-8">
      <div className="max-w-5xl mx-auto rounded-xl bg-primary text-white p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Your future as an AI engineer starts right here.</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">Join the next cohort and start building products that matter. Seats are limited to 50 students to ensure quality support.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary text-primary px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all"
            >
              Enroll Now — $999
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/20 px-10 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-all"
            >
              Contact Sales
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
