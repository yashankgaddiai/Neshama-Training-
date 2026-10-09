import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Outcomes() {
  const finishItems = [
    "Python + MERN foundation access",
    "LLM application development experience",
    "Prompt engineering capability",
    "Working RAG system",
    "Vector database experience",
    "AI Agent and multi-agent experience",
    "MCP and tool-integration experience",
    "Hands-on Codex, Claude Code, Hermes Agent & Grok",
    "Multiple GitHub repositories",
    "Portfolio-ready case studies",
    "LinkedIn profile developed from Week 1",
    "Live-deployed AI application",
    "AI Engineer resume",
    "Mock interview experience",
    "Corporate readiness preparation",
    "Certificate of completion"
  ];

  const glance = [
    { label: "Duration", value: "3 Months / 12 Weeks" },
    { label: "Mode", value: "Live + Recorded" },
    { label: "Foundation", value: "Python + MERN recorded content" },
    { label: "Live Focus", value: "LLMs, Prompt Engineering, RAG, Agents, MCP, AI Products, Deployment" },
    { label: "Agentic Stack", value: "LangChain, LangGraph, LlamaIndex, Codex, Claude Code, Hermes Agent, Grok, MCP" },
    { label: "Career Track", value: "LinkedIn + GitHub + Portfolio from Week 1; Resume + Mock Interviews + Corporate Readiness" },
    { label: "Project Portfolio", value: "AI Copilot, RAG system, Full-Stack AI product, Research Agent, Coding Agent, MCP system, Autonomous Business Agent" },
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
        {/* What Students Finish With */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase text-[0.75rem] tracking-[0.2em] mb-3 block">
            A Practical Portfolio and a Professional Profile
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
            What Students Finish With
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-24">
          {finishItems.map((item, i) => (
            <div 
              key={i} 
              className="flex items-start gap-3 p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:shadow-soft transition-all"
            >
              <CheckCircle2 className="text-secondary flex-shrink-0 mt-0.5" size={18} />
              <span className="text-xs sm:text-sm font-semibold text-primary leading-snug">{item}</span>
            </div>
          ))}
        </div>

        {/* Program at a Glance */}
        <div className="p-8 sm:p-12 rounded-[2.5rem] bg-primary text-white shadow-xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-secondary font-bold uppercase text-[0.75rem] tracking-[0.2em] mb-2 block">
              Build, Deploy & Get Interview-Ready
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Program at a Glance
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {glance.map((g, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-secondary mb-1">
                  {g.label}
                </span>
                <p className="text-sm sm:text-base font-semibold text-white/90 leading-relaxed">
                  {g.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
