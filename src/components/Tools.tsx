import { motion } from 'motion/react';
import { Cpu, Terminal, Layers, Database, Code, Cloud, HardDrive } from 'lucide-react';

export default function Tools() {
  const categories = [
    {
      title: "AI Models & APIs",
      icon: <Cpu className="text-secondary" size={18} />,
      tools: ["OpenAI", "Claude / Anthropic", "Gemini", "Grok", "OpenRouter"]
    },
    {
      title: "Coding Agents",
      icon: <Terminal className="text-secondary" size={18} />,
      tools: ["Codex", "Claude Code", "Hermes Agent", "Cursor", "GitHub Copilot"]
    },
    {
      title: "AI Frameworks",
      icon: <Layers className="text-secondary" size={18} />,
      tools: ["LangChain", "LangGraph", "LlamaIndex", "Hugging Face"]
    },
    {
      title: "RAG & Vector",
      icon: <Database className="text-secondary" size={18} />,
      tools: ["Pinecone", "FAISS", "ChromaDB", "Embeddings"]
    },
    {
      title: "Full-Stack",
      icon: <Code className="text-secondary" size={18} />,
      tools: ["Python", "FastAPI", "JavaScript", "React", "Node.js", "Express", "MongoDB", "SQL"]
    },
    {
      title: "Ship & Deploy",
      icon: <Cloud className="text-secondary" size={18} />,
      tools: ["Git", "GitHub", "Postman", "Swagger / OpenAPI", "Docker", "Vercel", "AWS"]
    },
    {
      title: "Local AI",
      icon: <HardDrive className="text-secondary" size={18} />,
      tools: ["Ollama", "Open-source models", "Local inference"]
    }
  ];

  return (
    <motion.section 
      id="tools"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 sm:py-32 px-4 sm:px-8 bg-surface-container-low"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase text-[0.75rem] tracking-[0.2em] mb-3 block">
            Tools Taught Through Practical Workflows
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
            AI Tools & Technology Stack
          </h2>
          <p className="text-base sm:text-lg text-on-surface-variant">
            Hands-on with the models, agents and frameworks used to build real AI products today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div 
              key={i} 
              className="p-6 rounded-3xl bg-white border border-outline-variant/30 shadow-soft flex flex-col"
            >
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-outline-variant/20">
                <div className="p-2 rounded-xl bg-surface-container">
                  {cat.icon}
                </div>
                <h3 className="font-bold text-primary text-base">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {cat.tools.map((tool, j) => (
                  <span 
                    key={j} 
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-surface-container-low text-primary border border-outline-variant/30 hover:border-secondary transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
