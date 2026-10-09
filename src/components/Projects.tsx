import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'llm' | 'rag' | 'agents'>('all');

  const filterTabs = [
    { key: 'all', label: 'All 12' },
    { key: 'llm', label: 'LLM Apps' },
    { key: 'rag', label: 'RAG & Products' },
    { key: 'agents', label: 'Agents & MCP' },
  ];

  const allProjects = [
    {
      id: "01",
      title: "AI Copilot",
      tech: "LLM APIs + Streaming",
      category: "llm",
      categoryName: "LLM Apps",
      description: "Multi-model assistant with configurable instructions and real-time streaming."
    },
    {
      id: "02",
      title: "Prompt Lab",
      tech: "Prompt Engineering",
      category: "llm",
      categoryName: "LLM Apps",
      description: "Test, compare and evaluate model outputs across diverse prompts and architectures."
    },
    {
      id: "03",
      title: "AI Productivity Board",
      tech: "MERN + AI",
      category: "llm",
      categoryName: "LLM Apps",
      description: "AI-assisted tasks and productivity workflows embedded directly into a modern web stack."
    },
    {
      id: "04",
      title: "Knowledge Vault",
      tech: "Embeddings + RAG",
      category: "rag",
      categoryName: "RAG & Products",
      description: "Chat with uploaded documents using grounded retrieval and vector semantic similarity."
    },
    {
      id: "05",
      title: "Business Knowledge Assistant",
      tech: "Advanced RAG",
      category: "rag",
      categoryName: "RAG & Products",
      description: "Answer domain-specific business questions using private corporate knowledge and reranking."
    },
    {
      id: "06",
      title: "AI Operations Workspace",
      tech: "Python + React + DB",
      category: "rag",
      categoryName: "RAG & Products",
      description: "Complete full-stack AI product with secure APIs, authentication, and state management."
    },
    {
      id: "07",
      title: "ResearchPilot",
      tech: "Agents + Tools",
      category: "agents",
      categoryName: "Agents & MCP",
      description: "Autonomous research agent with step-by-step planning and dynamic tool execution."
    },
    {
      id: "08",
      title: "Workflow Agent",
      tech: "Agents + APIs",
      category: "agents",
      categoryName: "Agents & MCP",
      description: "Execute multi-step operational workflows and coordinate automated business tasks."
    },
    {
      id: "09",
      title: "DevOps Copilot",
      tech: "Coding Agents",
      category: "agents",
      categoryName: "Agents & MCP",
      description: "Repository-aware coding, testing and review workflow leveraging state-of-the-art agents."
    },
    {
      id: "10",
      title: "MCP Command Center",
      tech: "MCP + Agents",
      category: "agents",
      categoryName: "Agents & MCP",
      description: "Connect AI agents to external tools, databases, and systems via Model Context Protocol."
    },
    {
      id: "11",
      title: "Multimodal AI Studio",
      tech: "Vision + Audio + LLM",
      category: "llm",
      categoryName: "LLM Apps",
      description: "Combine text, image and audio AI capabilities into a unified interactive application."
    },
    {
      id: "12",
      title: "Autonomous Business Agent",
      tech: "RAG + Multi-Agent",
      category: "agents",
      categoryName: "Agents & MCP",
      description: "Business assistant with memory, tool selection, supervisor workflows and automated verification."
    }
  ];

  const filtered = activeFilter === 'all' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeFilter);

  return (
    <motion.section 
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 sm:py-32 px-4 sm:px-8 bg-surface"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-primary font-bold uppercase text-[0.75rem] tracking-[0.2em] mb-3 block">
            AI Is the Core Product Layer
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
            AI-Native Project Portfolio
          </h2>
          <p className="text-base sm:text-lg text-on-surface-variant">
            From model APIs and grounded retrieval to agentic workflows and production systems.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4 mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key as any)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border ${
                  isActive
                    ? 'bg-primary text-white border-primary shadow-md'
                    : 'bg-surface-container-low text-on-surface-variant border-outline-variant/30 hover:border-outline hover:text-primary'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((proj) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="p-7 rounded-3xl bg-surface-container-low border border-outline-variant/30 hover:shadow-soft transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-black text-primary/40 uppercase tracking-widest">
                      Project {proj.id}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-2.5 py-1 rounded-full border border-secondary/20">
                      {proj.categoryName}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-primary mb-2">
                    {proj.title}
                  </h3>
                  
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-primary/70 bg-white px-2.5 py-1 rounded-md border border-outline-variant/30 inline-block">
                      {proj.tech}
                    </span>
                  </div>

                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
