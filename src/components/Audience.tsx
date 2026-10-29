import { motion } from 'motion/react';

export default function Audience() {
  const audiences = [
    "You want to understand Generative AI, RAG, and Prompt Engineering.",
    "You are a fresher, student, or career switcher.",
    "You’ve tried tutorials but haven’t built real projects.",
    "You want hands-on experience with Custom GPTs and AI tools.",
    "You are a developer upgrading to AI-native skills.",
    "You want a portfolio of live AI applications."
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-16 sm:py-32 px-4 sm:px-8 bg-surface-container-low"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase text-[0.75rem] tracking-[0.2em] mb-4 block">
            Who Is This For?
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-primary">Is this the right fit for you?</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((audience, i) => (
            <div key={i} className="flex items-start gap-4 p-8 rounded-2xl bg-white shadow-soft">
              
              <span className="text-lg font-bold text-primary leading-tight">{audience}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
