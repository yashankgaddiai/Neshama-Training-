import { motion } from 'motion/react';
import { Compass, Film, Zap, Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Blueprint() {
  const cards = [
    {
      icon: <Compass className="text-secondary" size={24} />,
      title: "Program Model",
      items: [
        "3 months / 12 weeks",
        "Live + Recorded",
        "Python + MERN + GenAI",
        "Project-led learning"
      ]
    },
    {
      icon: <Film className="text-secondary" size={24} />,
      title: "Recorded Foundations",
      items: [
        "Python fundamentals",
        "HTML / CSS / JavaScript",
        "React + Redux Toolkit",
        "Node / Express / MongoDB"
      ]
    },
    {
      icon: <Zap className="text-secondary" size={24} />,
      title: "Live AI Engineering",
      items: [
        "LLMs + Prompt Engineering",
        "RAG + Vector Databases",
        "Agents + MCP + Coding Agents",
        "AI product architecture + deployment"
      ]
    },
    {
      icon: <Briefcase className="text-secondary" size={24} />,
      title: "Career from Week 1",
      items: [
        "LinkedIn + GitHub + Portfolio",
        "Resume + Mock Interviews",
        "Corporate Readiness",
        "Recruiter outreach"
      ]
    }
  ];

  return (
    <motion.section 
      id="blueprint"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-16 sm:py-24 px-4 sm:px-8 bg-surface-container-low"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase text-[0.75rem] tracking-[0.2em] mb-3 block">
            3-Month Full-Stack AI Engineer Program
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
            Program Blueprint
          </h2>
          <p className="text-base sm:text-lg text-on-surface-variant">
            A 12-week journey built around recorded foundations, live AI engineering, real projects and career preparation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cards.map((card, i) => (
            <div 
              key={i} 
              className="p-6 sm:p-7 rounded-2xl bg-white border border-outline-variant/30 shadow-soft hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-5">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{card.title}</h3>
              <ul className="space-y-2.5 mt-auto">
                {card.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-on-surface-variant font-medium">
                    <CheckCircle2 size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-outline-variant/30 shadow-soft max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-sm sm:text-base font-bold text-primary">How it works →</span>
            <p className="text-sm text-on-surface-variant">
              Live time focuses on AI Engineering, product building and agentic systems. Python and MERN foundations remain available as recorded learning.
            </p>
          </div>
          <a 
            href="#curriculum"
            className="text-xs font-bold uppercase tracking-wider text-primary hover:text-secondary whitespace-nowrap flex items-center gap-1 transition-colors"
          >
            View curriculum <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </motion.section>
  );
}
