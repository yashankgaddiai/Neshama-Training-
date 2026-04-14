import { Brain, Zap, Rocket, Briefcase, Users, MessageSquare, Search, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

export default function Learn() {
  const items = [
    {
      icon: <Brain className="text-secondary" />,
      title: "Generative AI",
      description: "Understand how Large Language Models (LLMs) like ChatGPT and Claude work."
    },
    {
      icon: <MessageSquare className="text-secondary" />,
      title: "Prompt Engineering",
      description: "Learn system prompts, few-shot examples, structured outputs, and evaluation frameworks."
    },
    {
      icon: <Search className="text-secondary" />,
      title: "Retrieval-Augmented Generation (RAG)",
      description: "Build AI systems that answer questions from your own documents."
    },
    {
      icon: <Cpu className="text-secondary" />,
      title: "Custom GPTs & MCP",
      description: "Create AI tools and connect them to real-world systems using Model Context Protocol (MCP)."
    },
    {
      icon: <Zap className="text-secondary" />,
      title: "AI-Assisted Development",
      description: "Build applications using tools like Cursor AI, Claude Code, and V0."
    },
    {
      icon: <Rocket className="text-secondary" />,
      title: "Deploy Real AI Products",
      description: "Launch full-stack AI applications live on the internet."
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-32 px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-primary font-bold uppercase text-[0.75rem] tracking-[0.2em] mb-4 block">
            📚 What You'll Learn
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-primary mb-6">
            Go from Zero to Shipping Real AI Products
          </h2>
          <p className="text-xl text-on-surface-variant max-w-2xl">
            No jargon. No fluff. Practical GenAI skills you can use and discuss in interviews from day one.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="p-8 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:shadow-soft transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">{item.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
