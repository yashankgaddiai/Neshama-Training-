import { motion } from 'motion/react';
import { Calendar, CheckCircle2 } from 'lucide-react';

export default function Roadmap() {
  const months = [
    {
      month: "MONTH 01",
      title: "LLM & AI Application Engineering",
      weeks: [
        { code: "W01", name: "Engineer Setup + Career Foundation" },
        { code: "W02", name: "Generative AI & LLM Fundamentals" },
        { code: "W03", name: "Prompt Engineering + LLM APIs" },
        { code: "W04", name: "AI-Assisted Development + AI Copilot" }
      ]
    },
    {
      month: "MONTH 02",
      title: "RAG & AI Product Engineering",
      weeks: [
        { code: "W05", name: "Embeddings + Vector Databases" },
        { code: "W06", name: "RAG + Advanced RAG" },
        { code: "W07", name: "FastAPI + React + AI Product Architecture" },
        { code: "W08", name: "Full-Stack AI Product + Deployment" }
      ]
    },
    {
      month: "MONTH 03",
      title: "Agentic AI + Production + Career",
      weeks: [
        { code: "W09", name: "Agent Fundamentals + Tool Calling" },
        { code: "W10", name: "Codex + Claude Code + Hermes + Grok + MCP" },
        { code: "W11", name: "Multi-Agent Systems + Memory + Evaluation" },
        { code: "W12", name: "Capstone + Resume + Mock Interviews + Career Readiness" }
      ]
    }
  ];

  return (
    <motion.section 
      id="roadmap"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-16 sm:py-28 px-4 sm:px-8 bg-surface-container-low"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase text-[0.75rem] tracking-[0.2em] mb-3 block">
            Three Months · Eight Modules · A Parallel Career Track
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
            12-Week Roadmap
          </h2>
          <p className="text-base sm:text-lg text-on-surface-variant">
            From foundational setup and LLMs to production RAG, coding agents, and capstone deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {months.map((item, i) => (
            <div 
              key={i} 
              className="p-8 rounded-3xl bg-white border border-outline-variant/30 shadow-soft flex flex-col relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black uppercase tracking-wider text-secondary bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
                  {item.month}
                </span>
                <Calendar size={18} className="text-primary/40" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-6">
                {item.title}
              </h3>
              <div className="space-y-4 mt-auto">
                {item.weeks.map((w, j) => (
                  <div key={j} className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low border border-outline-variant/20">
                    <span className="text-xs font-black text-primary bg-white px-2 py-1 rounded border border-outline-variant/40 shrink-0">
                      {w.code}
                    </span>
                    <span className="text-sm font-semibold text-primary leading-tight self-center">
                      {w.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
