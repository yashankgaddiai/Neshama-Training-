import { motion } from 'motion/react';
import { Cpu, Wrench, GitFork, Terminal, Network, Layers, CheckCircle2 } from 'lucide-react';

export default function AgenticAI() {
  const pillars = [
    {
      icon: <Cpu className="text-secondary" size={22} />,
      title: "Agent Architecture",
      items: [
        "Planning + reasoning loops",
        "State + memory",
        "Tool selection",
        "Task decomposition"
      ]
    },
    {
      icon: <Wrench className="text-secondary" size={22} />,
      title: "Tools & Actions",
      items: [
        "Function calling + APIs",
        "Databases + search",
        "Files + code execution",
        "Tool validation"
      ]
    },
    {
      icon: <GitFork className="text-secondary" size={22} />,
      title: "Orchestration",
      items: [
        "LangChain + LangGraph",
        "LlamaIndex",
        "Sequential + parallel flows",
        "Router patterns"
      ]
    },
    {
      icon: <Terminal className="text-secondary" size={22} />,
      title: "Coding Agents",
      items: [
        "Codex + Claude Code",
        "Hermes Agent + Grok",
        "Cursor",
        "GitHub Copilot"
      ]
    },
    {
      icon: <Network className="text-secondary" size={22} />,
      title: "MCP",
      items: [
        "Clients + servers",
        "Tools + resources",
        "Prompts",
        "Custom MCP servers"
      ]
    },
    {
      icon: <Layers className="text-secondary" size={22} />,
      title: "Multi-Agent Systems",
      items: [
        "Supervisor + worker agents",
        "Research + coding agents",
        "Reviewer agent",
        "Result aggregation"
      ]
    }
  ];

  return (
    <motion.section 
      id="agentic"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 sm:py-32 px-4 sm:px-8 bg-surface"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase text-[0.75rem] tracking-[0.2em] mb-3 block">
            A Dedicated Engineering Track
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
            Agentic AI Deep Dive
          </h2>
          <p className="text-base sm:text-lg text-on-surface-variant">
            Build agents that plan, select tools, execute tasks, inspect results and return verified outputs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((item, i) => (
            <div 
              key={i} 
              className="p-7 rounded-3xl bg-surface-container-low border border-outline-variant/30 hover:shadow-soft transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
              <ul className="space-y-2.5 mt-auto">
                {item.items.map((line, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-on-surface-variant font-medium">
                    <CheckCircle2 size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                    <span>{line}</span>
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
