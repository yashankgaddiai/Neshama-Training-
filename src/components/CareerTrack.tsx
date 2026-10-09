import { motion } from 'motion/react';
import { CheckCircle2, TrendingUp } from 'lucide-react';

export default function CareerTrack() {
  const timeline = [
    {
      badge: "W1",
      period: "WEEK 1",
      title: "Profile Foundation",
      items: [
        "LinkedIn headline & About",
        "Skills & featured section",
        "GitHub profile README",
        "Portfolio structure"
      ]
    },
    {
      badge: "W2–4",
      period: "WEEKS 2–4",
      title: "Build the Signal",
      items: [
        "Commit foundation work",
        "Document first AI projects",
        "Publish learning updates",
        "Add projects to portfolio"
      ]
    },
    {
      badge: "W5–8",
      period: "WEEKS 5–8",
      title: "Showcase AI Engineering",
      items: [
        "RAG project case study",
        "Architecture diagrams + demos",
        "Technical LinkedIn posts",
        "GitHub repository cleanup"
      ]
    },
    {
      badge: "W9–10",
      period: "WEEKS 9–10",
      title: "Demonstrate Agentic Skills",
      items: [
        "Agent project write-up",
        "MCP workflow docs",
        "Coding-agent showcase",
        "Demo video / walkthrough"
      ]
    },
    {
      badge: "W11–12",
      period: "WEEKS 11–12",
      title: "Get Interview Ready",
      items: [
        "AI Engineer resume + ATS projects",
        "Mock interviews + project defense",
        "Recruiter outreach + job search"
      ]
    }
  ];

  return (
    <motion.section 
      id="career"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 sm:py-32 px-4 sm:px-8 bg-surface-container-low"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase text-[0.75rem] tracking-[0.2em] mb-3 block">
            Professional Presence Grows With Technical Skills
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
            Career Track from Week 1
          </h2>
          <p className="text-base sm:text-lg text-on-surface-variant">
            Career preparation runs in parallel throughout the program, with concentrated interview practice in the final weeks.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {timeline.map((item, i) => (
            <div 
              key={i} 
              className="p-6 rounded-3xl bg-white border border-outline-variant/30 shadow-soft flex flex-col relative"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-xl bg-primary text-white text-xs font-black flex items-center justify-center">
                  {item.badge}
                </span>
                <span className="text-[10px] font-black uppercase tracking-wider text-secondary">
                  {item.period}
                </span>
              </div>

              <h3 className="text-lg font-bold text-primary mb-4">
                {item.title}
              </h3>

              <ul className="space-y-2 mt-auto">
                {item.items.map((point, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-on-surface-variant font-medium">
                    <CheckCircle2 size={14} className="text-secondary mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
