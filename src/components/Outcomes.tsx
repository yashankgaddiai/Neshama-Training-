import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Outcomes() {
  const outcomes = [
    "🖥️ A live deployed AI app",
    "🔍 A working RAG pipeline",
    "🤖 A Custom GPT you built",
    "📁 A strong portfolio",
    "📋 Interview readiness",
    "📜 A certificate of completion"
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-16 sm:py-24 px-4 sm:px-8 bg-primary text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold uppercase text-[0.75rem] tracking-[0.2em] mb-4 block">
            🎓 Outcomes
          </span>
          <h2 className="text-4xl font-bold tracking-tight">By the end, you get:</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, i) => (
            <div key={i} className="flex items-center gap-4 p-6 rounded-xl bg-white/5 border border-white/10">
              <CheckCircle2 className="text-secondary flex-shrink-0" size={24} />
              <span className="text-lg font-bold">{outcome}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
