import { motion } from 'motion/react';

export default function Problem() {
  const problems = [
    {
      title: "Tutorial Hell",
      description: "Watching endless videos but never actually building anything that works in production. Passive learning leads to active failure."
    },
    {
      title: "AI Moving Too Fast",
      description: "Feeling left behind as new models drop weekly. You need a mental framework to adapt, not just a list of commands."
    },
    {
      title: "Thin Profile",
      description: "No live projects to show recruiters. Your GitHub is empty and your resume doesn't scream 'AI Specialist.'"
    }
  ];

  return (
    <section className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <span className="text-primary font-bold uppercase text-[0.75rem] tracking-[0.2em] mb-4 block">
            The Reality Check
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-primary">
            Are you stuck in tutorial hell while others get hired?
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-10 rounded-lg bg-surface-container-low hover:bg-white transition-all shadow-soft group"
            >
              <h3 className="text-xl font-bold mb-4">{problem.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
