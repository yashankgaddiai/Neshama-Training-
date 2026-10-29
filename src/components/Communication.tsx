import { motion } from 'motion/react';

export default function Communication() {
  const practices = [
    "Standups",
    "Stakeholder updates",
    "Project presentations",
    "Communication exercises"
  ];

  const pillars = [
    {
      num: "01",
      title: "Clarity",
      desc: "Explain progress, challenges and decisions without ambiguity."
    },
    {
      num: "02",
      title: "Brevity",
      desc: "Share meaningful updates without unnecessary detail."
    },
    {
      num: "03",
      title: "Actionability",
      desc: "Make next steps, owners and required decisions explicit."
    },
    {
      num: "04",
      title: "Accountability",
      desc: "Identify risks early, escalate blockers and propose solutions."
    },
    {
      num: "05",
      title: "Stakeholder Alignment",
      desc: "Adapt your message for teammates, managers and nontechnical stakeholders."
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 sm:py-32 px-4 sm:px-8 bg-surface"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase text-[0.75rem] tracking-[0.2em] mb-3 block">
            Beyond Technical Skills
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
            High-Signal Communication
          </h2>
          <p className="text-base sm:text-lg text-on-surface-variant">
            Make progress visible, identify risks early and turn updates into action. Building industry-ready engineers who take ownership and deliver real outcomes.
          </p>
        </div>

        {/* Feature Quote & Practices Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-primary text-white max-w-4xl mx-auto mb-16 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-3">
            Mindset Shift
          </span>
          <blockquote className="text-xl sm:text-2xl font-bold mb-6 italic max-w-2xl mx-auto">
            “Move from completing assignments to owning meaningful engineering outcomes.”
          </blockquote>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-xs uppercase font-bold text-white/60 tracking-wider">Practice:</span>
            {practices.map((p, i) => (
              <span 
                key={i} 
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 text-white border border-white/20"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* 5 Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {pillars.map((item, i) => (
            <div 
              key={i} 
              className="p-6 rounded-3xl bg-surface-container-low border border-outline-variant/30 flex flex-col"
            >
              <span className="text-2xl font-black text-primary/30 mb-2">
                {item.num}
              </span>
              <h3 className="text-lg font-bold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mt-auto">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
