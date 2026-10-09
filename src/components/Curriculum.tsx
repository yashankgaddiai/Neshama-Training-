import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, CheckCircle2, FolderGit2, Sparkles, BookOpen } from 'lucide-react';

export default function Curriculum() {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    {
      id: "module-01",
      number: "01",
      title: "Module 01 — Python Foundations",
      badge: "Recorded Foundation",
      outcome: "Build a solid Python base and begin using AI as a development assistant.",
      sections: [
        {
          heading: "Recorded Core",
          items: [
            "Python syntax, variables and data types",
            "Conditional statements and loops",
            "Lists, tuples, sets and dictionaries",
            "Functions, modules and packages",
            "OOP fundamentals",
            "File handling and exception handling",
            "JSON, HTTP and API basics",
            "Git and GitHub fundamentals"
          ]
        },
        {
          heading: "AI-Assisted Coding",
          items: [
            "Using AI to explain code",
            "AI-assisted debugging",
            "Code generation and refactoring",
            "Structured AI outputs",
            "Introduction to LLM API usage"
          ]
        }
      ],
      deliverables: [
        "AI Quiz Studio — generate structured quizzes from natural-language topics.",
        "Code Insight — analyze source code and generate AI-powered explanations."
      ]
    },
    {
      id: "module-02",
      number: "02",
      title: "Module 02 — Web & MERN Foundations",
      badge: "Recorded Foundation",
      outcome: "Build the web foundation needed to ship AI-powered interfaces.",
      sections: [
        {
          heading: "Frontend",
          items: [
            "HTML and semantic structure",
            "CSS layout and responsive design",
            "Modern JavaScript and ES6+",
            "Promises and Async/Await",
            "Fetch API and browser APIs",
            "React components, props, state and hooks",
            "Routing and forms",
            "Redux Toolkit fundamentals"
          ]
        },
        {
          heading: "Backend",
          items: [
            "Node.js fundamentals",
            "Express.js and REST APIs",
            "MongoDB and data modeling",
            "Authentication basics",
            "Frontend/backend integration",
            "Streaming responses in the browser"
          ]
        }
      ],
      deliverables: [
        "AI Productivity Board — AI-assisted task and productivity workflow.",
        "Smart Content Desk — generate, rewrite, summarize and organize content."
      ]
    },
    {
      id: "module-03",
      number: "03",
      title: "Module 03 — LLM Engineering",
      badge: "Live AI Engineering",
      outcome: "Build production-style AI features on top of modern LLM APIs.",
      sections: [
        {
          heading: "Week 1–2 Topics & Prompt Engineering",
          items: [
            "Generative AI fundamentals & LLM architecture",
            "Tokens, tokenization, context windows, transformers & attention",
            "Parameters, inference, temperature, Top-P & output limits",
            "Hallucinations and model limitations",
            "System and user prompts, zero-shot and few-shot prompting",
            "Role prompting & prompt templates",
            "Structured JSON outputs, optimization & evaluation"
          ]
        },
        {
          heading: "LLM APIs & Integration",
          items: [
            "OpenAI API, Anthropic / Claude API, Google Gemini API",
            "Grok API concepts",
            "OpenRouter multi-model aggregation",
            "Streaming responses in real time",
            "Function calling & tool execution",
            "Error handling, rate limits and cost awareness"
          ]
        }
      ],
      deliverables: [
        "Neshama AI Copilot — multi-model assistant with streaming and configurable instructions.",
        "Prompt Lab — experiment, compare and evaluate prompt outputs."
      ]
    },
    {
      id: "module-04",
      number: "04",
      title: "Module 04 — RAG & Knowledge Engineering",
      badge: "Live AI Engineering",
      outcome: "Build AI systems that can answer questions using private or domain-specific information.",
      sections: [
        {
          heading: "Retrieval Foundations & RAG Pipeline",
          items: [
            "Embeddings, semantic similarity, vector representations",
            "Vector databases: FAISS, ChromaDB, Pinecone",
            "Indexing and metadata, similarity retrieval",
            "Document ingestion and processing pipelines",
            "Chunking strategies & embedding generation",
            "Context construction, prompt assembly & answer generation"
          ]
        },
        {
          heading: "Advanced RAG & Quality Grounding",
          items: [
            "Metadata filtering & query rewriting",
            "Hybrid search (BM25 + Dense Vectors) & Reranking",
            "Context optimization & retrieval evaluation",
            "Groundedness metrics & hallucination reduction"
          ]
        }
      ],
      deliverables: [
        "Knowledge Vault — document upload, embeddings, retrieval and grounded answers.",
        "Business Knowledge Assistant — domain-specific RAG for organizational information."
      ]
    },
    {
      id: "module-05",
      number: "05",
      title: "Module 05 — Full-Stack AI Product Engineering",
      badge: "Live AI Product Development",
      outcome: "Turn individual AI capabilities into complete software products.",
      sections: [
        {
          heading: "Backend & Application Layer",
          items: [
            "Python + FastAPI architecture",
            "REST API design & Pydantic request validation",
            "Authentication, JWT and security",
            "File uploads and database integration",
            "AI service layer, error handling & configuration"
          ]
        },
        {
          heading: "Frontend, Product Layer & Production",
          items: [
            "React integration & modern AI chat interfaces",
            "Streaming UI, loading skeletons & error states",
            "Conversation history & user flows",
            "Product architecture: Frontend → Backend → AI model integration",
            "Git, GitHub, Postman, secrets management & environment variables"
          ]
        }
      ],
      deliverables: [
        "AI Operations Workspace — React + Python + database + LLM/RAG full-stack product."
      ]
    },
    {
      id: "module-06",
      number: "06",
      title: "Module 06 — Agentic AI Engineering",
      badge: "Live Agent Systems",
      outcome: "Design agents that can reason through tasks, use tools and execute multi-step workflows.",
      sections: [
        {
          heading: "Agent Fundamentals & Design Patterns",
          items: [
            "What is Agentic AI? Assistant vs Agent comparison",
            "Perception → Reasoning → Action loop",
            "Planning, task decomposition, and reasoning loops",
            "Tool selection, execution & state management",
            "Short-term and long-term memory",
            "Router agents, Planner-Executor, Reflection & Human-in-the-loop patterns"
          ]
        },
        {
          heading: "Frameworks & Workflow Orchestration",
          items: [
            "LangChain, LangGraph, and LlamaIndex",
            "Agent state & graph-based workflows",
            "Conditional routing, loops and orchestration",
            "Multi-step autonomous execution"
          ]
        }
      ],
      deliverables: [
        "ResearchPilot — autonomous research workflow using tools, planning and structured outputs.",
        "Workflow Agent — multi-step business workflow executor."
      ]
    },
    {
      id: "module-07",
      number: "07",
      title: "Module 07 — AI Coding Agents & MCP",
      badge: "Live Agentic Development",
      outcome: "Build agentic developer workflows and connect AI systems to real tools.",
      sections: [
        {
          heading: "AI Coding Agents & Agentic Workflows",
          items: [
            "OpenAI Codex, Claude Code, Hermes Agent, Grok",
            "Cursor, GitHub Copilot & repository understanding",
            "Task delegation, code generation, debugging & refactoring",
            "Test generation, code review & Git workflows",
            "Requirement → plan → implementation workflow",
            "Iterative debugging and human approval permissions"
          ]
        },
        {
          heading: "MCP (Model Context Protocol)",
          items: [
            "Model Context Protocol fundamentals",
            "MCP clients and servers, tools, resources, and prompts",
            "Building custom MCP servers",
            "Connecting agents to databases and external APIs",
            "MCP with coding agents and custom applications"
          ]
        }
      ],
      deliverables: [
        "DevOps Copilot — repository-aware coding agent that inspects, modifies and tests code.",
        "MCP Command Center — connect an AI agent to external tools, APIs and data."
      ]
    },
    {
      id: "module-08",
      number: "08",
      title: "Module 08 — Production AI Engineering",
      badge: "Live + Capstone",
      outcome: "Deploy reliable AI systems and understand the operational concerns behind production agents.",
      sections: [
        {
          heading: "Production Multi-Agent Systems & Safety",
          items: [
            "Multi-agent systems: Supervisor and worker agents",
            "Agent communication, memory architecture & persistent state",
            "Task delegation & result aggregation",
            "Agent reliability, tool errors & infinite-loop prevention",
            "Prompt injection & tool injection awareness",
            "Logging, tracing, cost monitoring & automated evaluation"
          ]
        },
        {
          heading: "Deploy, Operate & Scale",
          items: [
            "Docker containerization fundamentals",
            "Vercel and backend cloud deployment",
            "AWS fundamentals & environment configuration",
            "API security, rate limiting, and token optimization",
            "Caching, monitoring & production readiness"
          ]
        }
      ],
      deliverables: [
        "Autonomous Business Agent — RAG + tools + memory + multi-agent workflow capstone."
      ]
    }
  ];

  const handleBrochureClick = () => {
    window.open("https://drive.google.com/uc?export=view&id=1u2bwNXjPORDy1XJcWH07nEoGmvp-8I88", "_blank");
  };

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-8 bg-surface" id="curriculum">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase text-[0.75rem] tracking-[0.2em] mb-3 block">
            Neshama AI Engineering · Curriculum
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
            Module-by-module curriculum
          </h2>
          <p className="text-base sm:text-lg text-on-surface-variant">
            Pick a module to see its topics, the projects you'll ship and the outcome you'll walk away with.
          </p>
        </div>

        {/* Module selector pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-10">
          {modules.map((m, idx) => {
            const isSelected = activeModule === idx;
            return (
              <button
                key={m.id}
                onClick={() => setActiveModule(idx)}
                className={`py-3 px-2 rounded-xl text-xs font-bold text-center transition-all border ${
                  isSelected 
                    ? 'bg-primary text-white border-primary shadow-md' 
                    : 'bg-surface-container-low text-on-surface-variant border-outline-variant/30 hover:border-outline hover:text-primary'
                }`}
              >
                <div className={`text-[10px] font-black uppercase ${isSelected ? 'text-secondary' : 'opacity-60'}`}>
                  MOD {m.number}
                </div>
                <div className="truncate mt-0.5">{m.badge.split(' ')[0]}</div>
              </button>
            );
          })}
        </div>

        {/* Active Module Details Card */}
        <AnimatePresence mode="wait">
          {modules[activeModule] && (
            <motion.div
              key={modules[activeModule].id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-10 rounded-3xl bg-surface-container-low border border-outline-variant/30 shadow-soft"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-outline-variant/30">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary/15 text-primary text-xs font-bold uppercase tracking-wider mb-2 border border-secondary/30">
                    {modules[activeModule].badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-primary">
                    {modules[activeModule].title}
                  </h3>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-outline-variant/30 max-w-sm">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-secondary block mb-1">Target Outcome</span>
                  <p className="text-xs sm:text-sm font-semibold text-primary leading-snug">
                    {modules[activeModule].outcome}
                  </p>
                </div>
              </div>

              {/* Topics Sections */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {modules[activeModule].sections.map((section, sIdx) => (
                  <div key={sIdx} className="p-6 rounded-2xl bg-white border border-outline-variant/30">
                    <h4 className="text-base font-bold text-primary mb-4 flex items-center gap-2">
                      <BookOpen size={16} className="text-secondary" />
                      {section.heading}
                    </h4>
                    <ul className="space-y-2.5">
                      {section.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-on-surface-variant font-medium">
                          <CheckCircle2 size={15} className="text-secondary mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Project Deliverables */}
              <div className="p-6 rounded-2xl bg-primary text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-secondary block mb-2 flex items-center gap-1.5">
                  <FolderGit2 size={16} /> Project Deliverables
                </span>
                <div className="space-y-2">
                  {modules[activeModule].deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="text-sm font-semibold text-white/95 flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Brochure Download CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 sm:p-12 rounded-[2rem] bg-surface-container-low border border-outline-variant/30 text-center max-w-4xl mx-auto"
        >
          <div className="mb-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-3">Want the Full 12-Week Roadmap?</h3>
            <p className="text-on-surface-variant text-sm sm:text-base max-w-xl mx-auto">
              Download the comprehensive curriculum brochure with topic breakdown, project architectures, and schedule.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleBrochureClick}
            className="inline-flex items-center gap-2.5 bg-primary text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg hover:shadow-xl transition-all"
          >
            📂 Download Full Curriculum PDF
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
