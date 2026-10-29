import React, { useState, useEffect, useRef, useCallback, TouchEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface BrochureSlideshowProps {
  onEnroll?: () => void;
}

export interface SlideData {
  id: number;
  pageNum: string;
  category: 'overview' | 'curriculum' | 'agentic' | 'portfolio' | 'career' | 'summary';
  title: string;
  subtitle: string;
  eyebrow?: string;
  badge?: string;
}

export const SLIDES_DATA: SlideData[] = [
  {
    id: 1,
    pageNum: "01",
    category: "overview",
    title: "Full-Stack AI Engineering",
    subtitle: "3-Month Program · Python + MERN + GenAI",
    eyebrow: "NESHAMA TRAINING"
  },
  {
    id: 2,
    pageNum: "02",
    category: "overview",
    title: "Program Blueprint",
    subtitle: "A 12-week journey built around recorded foundations, live AI engineering, real projects and career preparation.",
    eyebrow: "3-Month Full-Stack AI Engineer Program"
  },
  {
    id: 3,
    pageNum: "03",
    category: "overview",
    title: "12-Week Roadmap",
    subtitle: "Three months. Eight modules. A parallel career track.",
    eyebrow: "Three months. Eight modules. A parallel career track."
  },
  {
    id: 4,
    pageNum: "04",
    category: "curriculum",
    title: "Python Foundations",
    subtitle: "Build a solid Python base and begin using AI as a development assistant.",
    eyebrow: "Neshama Training | Curriculum",
    badge: "MODULE 01 | RECORDED FOUNDATION"
  },
  {
    id: 5,
    pageNum: "05",
    category: "curriculum",
    title: "Web & MERN Foundations",
    subtitle: "Build the web foundation needed to ship AI-powered interfaces.",
    eyebrow: "Neshama Training | Curriculum",
    badge: "MODULE 02 | RECORDED FOUNDATION"
  },
  {
    id: 6,
    pageNum: "06",
    category: "curriculum",
    title: "LLM Engineering",
    subtitle: "Build production-style AI features on top of modern LLM APIs.",
    eyebrow: "Neshama Training | Curriculum",
    badge: "MODULE 03 | LIVE AI ENGINEERING"
  },
  {
    id: 7,
    pageNum: "07",
    category: "curriculum",
    title: "RAG & Knowledge Engineering",
    subtitle: "Build AI systems that can answer questions using private or domain-specific information.",
    eyebrow: "Neshama Training | Curriculum",
    badge: "MODULE 04 | LIVE AI ENGINEERING"
  },
  {
    id: 8,
    pageNum: "08",
    category: "curriculum",
    title: "Full-Stack AI Product Engineering",
    subtitle: "Turn individual AI capabilities into complete software products.",
    eyebrow: "Neshama Training | Curriculum",
    badge: "MODULE 05 | LIVE AI PRODUCT DEVELOPMENT"
  },
  {
    id: 9,
    pageNum: "09",
    category: "curriculum",
    title: "Agentic AI Engineering",
    subtitle: "Design agents that can reason through tasks, use tools and execute multi-step workflows.",
    eyebrow: "Neshama Training | Curriculum",
    badge: "MODULE 06 | LIVE AGENT SYSTEMS"
  },
  {
    id: 10,
    pageNum: "10",
    category: "curriculum",
    title: "AI Coding Agents & MCP",
    subtitle: "Build agentic developer workflows and connect AI systems to real tools.",
    eyebrow: "Neshama Training | Curriculum",
    badge: "MODULE 07 | LIVE AGENTIC DEVELOPMENT"
  },
  {
    id: 11,
    pageNum: "11",
    category: "curriculum",
    title: "Production AI Engineering",
    subtitle: "Deploy reliable AI systems and understand operational concerns behind production agents.",
    eyebrow: "Neshama Training | Curriculum",
    badge: "MODULE 08 | LIVE + CAPSTONE"
  },
  {
    id: 12,
    pageNum: "12",
    category: "agentic",
    title: "Agentic AI Deep Dive",
    subtitle: "Build agents that plan, select tools, execute tasks, inspect results and return verified outputs.",
    eyebrow: "A dedicated engineering track"
  },
  {
    id: 13,
    pageNum: "13",
    category: "agentic",
    title: "AI Tools & Technology Stack",
    subtitle: "Tools taught through practical workflows across models, agents, frameworks and cloud.",
    eyebrow: "Tools taught through practical workflows"
  },
  {
    id: 14,
    pageNum: "14",
    category: "career",
    title: "Career Track from Week 1",
    subtitle: "Professional presence grows with technical skills across LinkedIn, GitHub, and mock interviews.",
    eyebrow: "Professional presence grows with technical skills"
  },
  {
    id: 15,
    pageNum: "15",
    category: "portfolio",
    title: "AI-Native Project Portfolio (Part 1)",
    subtitle: "From model APIs and grounded retrieval to agentic workflows and production systems (Projects 01-06).",
    eyebrow: "AI is the core product layer"
  },
  {
    id: 16,
    pageNum: "16",
    category: "portfolio",
    title: "AI-Native Project Portfolio (Part 2)",
    subtitle: "Advanced autonomous workflows, coding agents, multimodal systems and capstone (Projects 07-12).",
    eyebrow: "AI is the core product layer"
  },
  {
    id: 17,
    pageNum: "17",
    category: "career",
    title: "Interview-Ready Roles",
    subtitle: "Build capabilities for roles across AI applications, full-stack development, automation and product engineering.",
    eyebrow: "Software engineering + AI application delivery"
  },
  {
    id: 18,
    pageNum: "18",
    category: "career",
    title: "Mock Interviews & Corporate Readiness",
    subtitle: "Practice alongside technical curriculum: technical defense, system design, and communication.",
    eyebrow: "Practice alongside the technical curriculum"
  },
  {
    id: 19,
    pageNum: "19",
    category: "summary",
    title: "What Students Finish With",
    subtitle: "16 tangible deliverables: working systems, deployed apps, verified resume and active portfolio.",
    eyebrow: "A practical portfolio and a professional profile"
  },
  {
    id: 20,
    pageNum: "20",
    category: "summary",
    title: "Program at a Glance & Enrolment",
    subtitle: "Summary specs, duration, stack, and direct contacts to start your AI engineering journey.",
    eyebrow: "Build, Deploy & Get Interview-Ready"
  }
];

const BROCHURE_DOWNLOAD_URL = "https://drive.google.com/uc?export=view&id=1u2bwNXjPORDy1XJcWH07nEoGmvp-8I88";
const BROCHURE_PREVIEW_URL = "https://drive.google.com/file/d/1u2bwNXjPORDy1XJcWH07nEoGmvp-8I88/view";

// Component that renders the authentic slide content
function SlideRenderer({ slideIndex }: { slideIndex: number }) {
  const current = SLIDES_DATA[slideIndex];

  // Helper for standard slide frame
  const SlideShell = ({ children, pageNum, className = "bg-white text-slate-800" }: { children: React.ReactNode, pageNum: string, className?: string }) => (
    <div className={`w-full h-full p-6 sm:p-10 flex flex-col justify-between relative select-text overflow-y-auto ${className}`}>
      <div className="flex-1 flex flex-col">{children}</div>
      <div className="pt-4 sm:pt-6 mt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-400 font-semibold">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Neshama Logo" className="w-5 h-5 object-contain" />
          <span className="tracking-widest uppercase text-slate-500 font-bold text-[10px] sm:text-xs">NESHAMA</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200/60">
            {pageNum}
          </span>
        </div>
      </div>
    </div>
  );

  switch (slideIndex) {
    // PAGE 1: COVER
    case 0:
      return (
        <div className="w-full h-full p-8 sm:p-14 bg-gradient-to-br from-[#031536] via-[#082a6e] to-[#041a47] text-white flex flex-col justify-between relative overflow-hidden select-text">
          {/* Decorative glowing gradient orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          
          {/* Top Logo */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Neshama Logo" className="w-12 h-12 object-contain" />
              <div>
                <h2 className="text-xl sm:text-2xl font-black tracking-widest text-white">NESHAMA</h2>
                <p className="text-xs sm:text-sm font-semibold tracking-widest text-cyan-300 uppercase">TRAINING</p>
              </div>
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              
            </div>
          </div>

          {/* Hero Core */}
          <div className="relative z-10 my-auto py-8">
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-400/20 border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-bold tracking-wider uppercase mb-4">
              Signature Masterclass Deck
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight mb-4">
              FULL-STACK<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-blue-200">
                AI ENGINEERING
              </span>
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-cyan-200 mb-6">
              3-MONTH PROGRAM
            </p>
            <div className="w-20 h-1 bg-cyan-400 rounded-full mb-6" />
            <p className="text-lg sm:text-xl font-medium text-slate-200 mb-6">
              Python + MERN + GenAI
            </p>

            <div className="space-y-2.5 text-sm sm:text-base text-slate-300">
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Live + Recorded Sessions</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Real-world AI projects + agentic systems</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Career preparation from Week 1</span>
              </div>
            </div>
          </div>

          {/* Bottom Contact Details */}
          <div className="relative z-10 pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
            <div>
              <p className="font-bold text-cyan-300 uppercase tracking-wider text-[11px] mb-1">Contact</p>
              <p className="font-medium">+91 81434 59888 &nbsp;|&nbsp; +91 95501 43619</p>
            </div>
            <div>
              <p className="font-bold text-cyan-300 uppercase tracking-wider text-[11px] mb-1">Website</p>
              <p className="font-medium text-white">www.neshamatraining.com</p>
            </div>
          </div>
        </div>
      );

    // PAGE 2: PROGRAM BLUEPRINT (02)
    case 1:
      return (
        <SlideShell pageNum="02">
          <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">3-Month Full-Stack AI Engineer Program</p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0a2558] mb-2">Program Blueprint</h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-6">
            A 12-week journey built around recorded foundations, live AI engineering, real projects and career preparation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5 flex-1">
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col">
              <div className="flex items-center gap-2.5 text-blue-700 font-bold text-sm sm:text-base mb-3">
                
                <span>Program Model</span>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>• 3 months / 12 weeks</li>
                <li>• Live + Recorded</li>
                <li>• Python + MERN + GenAI</li>
                <li>• Project-led learning</li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col">
              <div className="flex items-center gap-2.5 text-blue-700 font-bold text-sm sm:text-base mb-3">
                
                <span>Recorded Foundations</span>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>• Python fundamentals</li>
                <li>• HTML / CSS / JavaScript</li>
                <li>• React + Redux Toolkit</li>
                <li>• Node / Express / MongoDB</li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col">
              <div className="flex items-center gap-2.5 text-blue-700 font-bold text-sm sm:text-base mb-3">
                
                <span>Live AI Engineering</span>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>• LLMs + Prompt Engineering</li>
                <li>• RAG + Vector Databases</li>
                <li>• Agents + MCP + Coding Agents</li>
                <li>• AI product architecture + deployment</li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col">
              <div className="flex items-center gap-2.5 text-blue-700 font-bold text-sm sm:text-base mb-3">
                
                <span>Career from Week 1</span>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>• LinkedIn + GitHub + Portfolio</li>
                <li>• Resume + Mock Interviews</li>
                <li>• Corporate Readiness</li>
                <li>• Recruiter outreach</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50/80 border border-blue-200/70 rounded-xl p-3 text-xs sm:text-sm text-slate-700">
            <strong>Live time focuses on AI Engineering, product building and agentic systems.</strong> Python and MERN foundations remain available as recorded learning. The curriculum removes the traditional DSA phase.
          </div>
        </SlideShell>
      );

    // PAGE 3: 12-WEEK ROADMAP (03)
    case 2:
      return (
        <SlideShell pageNum="03">
          <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">Three months. Eight modules. A parallel career track.</p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0a2558] mb-5">+ 12-Week Roadmap</h2>

          <div className="space-y-4 flex-1">
            <div className="border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-blue-700 text-white px-4 py-2 text-xs sm:text-sm font-bold tracking-wide">
                MONTH 01 | LLM &amp; AI APPLICATION ENGINEERING
              </div>
              <div className="p-4 bg-white grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                <div>• <strong>Week 1:</strong> Engineer Setup + Career Foundation</div>
                <div>• <strong>Week 2:</strong> Generative AI &amp; LLM Fundamentals</div>
                <div>• <strong>Week 3:</strong> Prompt Engineering + LLM APIs</div>
                <div>• <strong>Week 4:</strong> AI-Assisted Development + AI Copilot</div>
              </div>
            </div>

            <div className="border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-blue-700 text-white px-4 py-2 text-xs sm:text-sm font-bold tracking-wide">
                MONTH 02 | RAG &amp; AI PRODUCT ENGINEERING
              </div>
              <div className="p-4 bg-white grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                <div>• <strong>Week 5:</strong> Embeddings + Vector Databases</div>
                <div>• <strong>Week 6:</strong> RAG + Advanced RAG</div>
                <div>• <strong>Week 7:</strong> FastAPI + React + AI Product Architecture</div>
                <div>• <strong>Week 8:</strong> Full-Stack AI Product + Deployment</div>
              </div>
            </div>

            <div className="border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-blue-700 text-white px-4 py-2 text-xs sm:text-sm font-bold tracking-wide">
                MONTH 03 | AGENTIC AI + PRODUCTION + CAREER
              </div>
              <div className="p-4 bg-white grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                <div>• <strong>Week 9:</strong> Agent Fundamentals + Tool Calling</div>
                <div>• <strong>Week 10:</strong> Codex + Claude Code + Hermes + Grok + MCP</div>
                <div>• <strong>Week 11:</strong> Multi-Agent Systems + Memory + Evaluation</div>
                <div>• <strong>Week 12:</strong> Capstone + Resume + Mock Interviews + Career Readiness</div>
              </div>
            </div>
          </div>
        </SlideShell>
      );

    // PAGE 4: MODULE 01 - PYTHON FOUNDATIONS (04)
    case 3:
      return (
        <SlideShell pageNum="04">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Neshama Training | Curriculum</p>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a2558]">Python Foundations</h2>
            <span className="px-3 py-1 bg-blue-700 text-white text-xs font-bold rounded-lg tracking-wider">
              MODULE 01 | RECORDED FOUNDATION
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 flex-1">
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4">
              <h3 className="font-bold text-blue-700 text-sm mb-2.5">Recorded Core</h3>
              <ul className="space-y-1 text-xs text-slate-700 leading-relaxed">
                <li>• Python syntax, variables and data types</li>
                <li>• Conditional statements and loops</li>
                <li>• Lists, tuples, sets and dictionaries</li>
                <li>• Functions, modules and packages</li>
                <li>• OOP fundamentals</li>
                <li>• File handling and exception handling</li>
                <li>• JSON, HTTP and API basics</li>
                <li>• Git and GitHub fundamentals</li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4">
              <h3 className="font-bold text-blue-700 text-sm mb-2.5">AI-Assisted Coding</h3>
              <ul className="space-y-1.5 text-xs text-slate-700 leading-relaxed">
                <li>• Using AI to explain code</li>
                <li>• AI-assisted debugging</li>
                <li>• Code generation and refactoring</li>
                <li>• Structured AI outputs</li>
                <li>• Introduction to LLM API usage</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#0b1e3f] text-white p-4 rounded-2xl mb-2">
            <p className="font-bold text-cyan-300 text-xs uppercase tracking-wider mb-1.5">Project Deliverables</p>
            <p className="text-xs text-slate-200 mb-1">• <strong>AI Quiz Studio:</strong> generate structured quizzes from natural-language topics.</p>
            <p className="text-xs text-slate-200">• <strong>Code Insight:</strong> analyze source code and generate AI-powered explanations.</p>
          </div>
          <p className="text-xs text-slate-500 font-medium">Outcome: Build a solid Python base and begin using AI as a development assistant.</p>
        </SlideShell>
      );

    // PAGE 5: MODULE 02 - WEB & MERN FOUNDATIONS (05)
    case 4:
      return (
        <SlideShell pageNum="05">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Neshama Training | Curriculum</p>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a2558]">Web &amp; MERN Foundations</h2>
            <span className="px-3 py-1 bg-blue-700 text-white text-xs font-bold rounded-lg tracking-wider">
              MODULE 02 | RECORDED FOUNDATION
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 flex-1">
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4">
              <h3 className="font-bold text-blue-700 text-sm mb-2.5">Frontend</h3>
              <ul className="space-y-1 text-xs text-slate-700 leading-relaxed">
                <li>• HTML and semantic structure</li>
                <li>• CSS layout and responsive design</li>
                <li>• Modern JavaScript and ES6+</li>
                <li>• Promises and Async/Await</li>
                <li>• Fetch API and browser APIs</li>
                <li>• React components, props, state and hooks</li>
                <li>• Routing and forms</li>
                <li>• Redux Toolkit fundamentals</li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4">
              <h3 className="font-bold text-blue-700 text-sm mb-2.5">Backend</h3>
              <ul className="space-y-1.5 text-xs text-slate-700 leading-relaxed">
                <li>• Node.js fundamentals</li>
                <li>• Express.js and REST APIs</li>
                <li>• MongoDB and data modeling</li>
                <li>• Authentication basics</li>
                <li>• Frontend/backend integration</li>
                <li>• Streaming responses in the browser</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#0b1e3f] text-white p-4 rounded-2xl mb-2">
            <p className="font-bold text-cyan-300 text-xs uppercase tracking-wider mb-1.5">Project Deliverables</p>
            <p className="text-xs text-slate-200 mb-1">• <strong>AI Productivity Board:</strong> AI-assisted task and productivity workflow.</p>
            <p className="text-xs text-slate-200">• <strong>Smart Content Desk:</strong> generate, rewrite, summarize and organize content.</p>
          </div>
          <p className="text-xs text-slate-500 font-medium">Outcome: Build the web foundation needed to ship AI-powered interfaces.</p>
        </SlideShell>
      );

    // PAGE 6: MODULE 03 - LLM ENGINEERING (06)
    case 5:
      return (
        <SlideShell pageNum="06">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Neshama Training | Curriculum</p>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a2558]">LLM Engineering</h2>
            <span className="px-3 py-1 bg-blue-700 text-white text-xs font-bold rounded-lg tracking-wider">
              MODULE 03 | LIVE AI ENGINEERING
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5">
              <h3 className="font-bold text-blue-700 text-xs sm:text-sm mb-2">Week 1-2 Topics</h3>
              <ul className="space-y-1 text-xs text-slate-700 leading-tight">
                <li>• Generative AI fundamentals &amp; LLM architecture</li>
                <li>• Tokens, tokenization &amp; context windows</li>
                <li>• Transformers, attention &amp; inference</li>
                <li>• Temperature, Top-P &amp; output limits</li>
                <li>• Hallucinations and model limitations</li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5">
              <h3 className="font-bold text-blue-700 text-xs sm:text-sm mb-2">Prompt Engineering</h3>
              <ul className="space-y-1 text-xs text-slate-700 leading-tight">
                <li>• System &amp; user prompts</li>
                <li>• Zero-shot &amp; few-shot prompting</li>
                <li>• Role prompting &amp; templates</li>
                <li>• Structured JSON outputs</li>
                <li>• Prompt optimization &amp; evaluation</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5 mb-3">
            <h3 className="font-bold text-blue-700 text-xs sm:text-sm mb-1.5">LLM APIs</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-700">
              <div>• OpenAI API</div>
              <div>• Anthropic / Claude</div>
              <div>• Google Gemini API</div>
              <div>• Grok API concepts</div>
              <div>• OpenRouter</div>
              <div>• Streaming responses</div>
              <div>• Function calling</div>
              <div>• Error &amp; cost controls</div>
            </div>
          </div>

          <div className="bg-[#0b1e3f] text-white p-3.5 rounded-2xl mb-1.5">
            <p className="font-bold text-cyan-300 text-xs uppercase tracking-wider mb-1">Project Deliverables</p>
            <p className="text-xs text-slate-200">• <strong>Neshama AI Copilot:</strong> multi-model assistant with streaming &amp; configurable instructions.</p>
            <p className="text-xs text-slate-200">• <strong>Prompt Lab:</strong> experiment, compare and evaluate prompt outputs.</p>
          </div>
          <p className="text-xs text-slate-500 font-medium">Outcome: Build production-style AI features on top of modern LLM APIs.</p>
        </SlideShell>
      );

    // PAGE 7: MODULE 04 - RAG & KNOWLEDGE ENGINEERING (07)
    case 6:
      return (
        <SlideShell pageNum="07">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Neshama Training | Curriculum</p>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a2558]">RAG &amp; Knowledge Engineering</h2>
            <span className="px-3 py-1 bg-blue-700 text-white text-xs font-bold rounded-lg tracking-wider">
              MODULE 04 | LIVE AI ENGINEERING
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5">
              <h3 className="font-bold text-blue-700 text-xs sm:text-sm mb-1.5">Retrieval Foundations</h3>
              <ul className="space-y-1 text-xs text-slate-700">
                <li>• Embeddings &amp; similarity</li>
                <li>• Vector representations</li>
                <li>• FAISS &amp; ChromaDB</li>
                <li>• Pinecone index &amp; metadata</li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5">
              <h3 className="font-bold text-blue-700 text-xs sm:text-sm mb-1.5">RAG Pipeline</h3>
              <ul className="space-y-1 text-xs text-slate-700">
                <li>• Ingestion &amp; processing</li>
                <li>• Chunking strategies</li>
                <li>• Context construction</li>
                <li>• Prompt answer assembly</li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5">
              <h3 className="font-bold text-blue-700 text-xs sm:text-sm mb-1.5">Advanced RAG</h3>
              <ul className="space-y-1 text-xs text-slate-700">
                <li>• Metadata filtering</li>
                <li>• Query rewriting</li>
                <li>• Hybrid search &amp; Reranking</li>
                <li>• Hallucination reduction</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#0b1e3f] text-white p-3.5 rounded-2xl mb-1.5">
            <p className="font-bold text-cyan-300 text-xs uppercase tracking-wider mb-1">Project Deliverables</p>
            <p className="text-xs text-slate-200">• <strong>Knowledge Vault:</strong> document upload, embeddings, retrieval and grounded answers.</p>
            <p className="text-xs text-slate-200">• <strong>Business Knowledge Assistant:</strong> domain-specific RAG for organizational information.</p>
          </div>
          <p className="text-xs text-slate-500 font-medium">Outcome: Build AI systems that can answer questions using private or domain-specific information.</p>
        </SlideShell>
      );

    // PAGE 8: MODULE 05 - FULL-STACK AI PRODUCT ENGINEERING (08)
    case 7:
      return (
        <SlideShell pageNum="08">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Neshama Training | Curriculum</p>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a2558]">Full-Stack AI Product Engineering</h2>
            <span className="px-3 py-1 bg-blue-700 text-white text-xs font-bold rounded-lg tracking-wider">
              MODULE 05 | LIVE AI PRODUCT DEVELOPMENT
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 flex-1">
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5">
              <h3 className="font-bold text-blue-700 text-xs sm:text-sm mb-2">Backend &amp; App Layer</h3>
              <ul className="space-y-1 text-xs text-slate-700">
                <li>• Python + FastAPI</li>
                <li>• REST API architecture</li>
                <li>• Validation, Auth &amp; JWT</li>
                <li>• File uploads &amp; DB integration</li>
                <li>• AI service abstraction layer</li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5">
              <h3 className="font-bold text-blue-700 text-xs sm:text-sm mb-2">Frontend &amp; Product</h3>
              <ul className="space-y-1 text-xs text-slate-700">
                <li>• React integration</li>
                <li>• AI chat interfaces &amp; streaming UI</li>
                <li>• Loading &amp; error states</li>
                <li>• Conversation history</li>
                <li>• Frontend &gt; Backend &gt; Model</li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5">
              <h3 className="font-bold text-blue-700 text-xs sm:text-sm mb-2">Shipping Foundations</h3>
              <ul className="space-y-1 text-xs text-slate-700">
                <li>• Git &amp; GitHub workflows</li>
                <li>• Postman &amp; API testing</li>
                <li>• Environment variables</li>
                <li>• Secrets management</li>
                <li>• Production architecture</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#0b1e3f] text-white p-3.5 rounded-2xl mb-1.5">
            <p className="font-bold text-cyan-300 text-xs uppercase tracking-wider mb-1">Project Deliverables</p>
            <p className="text-xs text-slate-200">• <strong>AI Operations Workspace:</strong> React + Python + database + LLM/RAG full-stack product.</p>
          </div>
          <p className="text-xs text-slate-500 font-medium">Outcome: Turn individual AI capabilities into complete software products.</p>
        </SlideShell>
      );

    // PAGE 9: MODULE 06 - AGENTIC AI ENGINEERING (09)
    case 8:
      return (
        <SlideShell pageNum="09">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Neshama Training | Curriculum</p>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a2558]">Agentic AI Engineering</h2>
            <span className="px-3 py-1 bg-blue-700 text-white text-xs font-bold rounded-lg tracking-wider">
              MODULE 06 | LIVE AGENT SYSTEMS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 flex-1">
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5">
              <h3 className="font-bold text-blue-700 text-xs sm:text-sm mb-2">Agent Fundamentals</h3>
              <ul className="space-y-1 text-xs text-slate-700">
                <li>• Perception &gt; Reasoning &gt; Action</li>
                <li>• Planning &amp; task decomposition</li>
                <li>• Tool selection &amp; execution</li>
                <li>• State &amp; short/long-term memory</li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5">
              <h3 className="font-bold text-blue-700 text-xs sm:text-sm mb-2">Design Patterns</h3>
              <ul className="space-y-1 text-xs text-slate-700">
                <li>• Single-agent &amp; tool-using agents</li>
                <li>• Router &amp; Planner-Executor</li>
                <li>• Reflection agents</li>
                <li>• Human-in-the-loop flows</li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5">
              <h3 className="font-bold text-blue-700 text-xs sm:text-sm mb-2">Frameworks</h3>
              <ul className="space-y-1 text-xs text-slate-700">
                <li>• LangChain &amp; LangGraph</li>
                <li>• LlamaIndex agent state</li>
                <li>• Graph-based workflows</li>
                <li>• Loops &amp; multi-step orchestration</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#0b1e3f] text-white p-3.5 rounded-2xl mb-1.5">
            <p className="font-bold text-cyan-300 text-xs uppercase tracking-wider mb-1">Project Deliverables</p>
            <p className="text-xs text-slate-200">• <strong>ResearchPilot:</strong> autonomous research workflow using tools, planning and structured outputs.</p>
            <p className="text-xs text-slate-200">• <strong>Workflow Agent:</strong> multi-step business workflow executor.</p>
          </div>
          <p className="text-xs text-slate-500 font-medium">Outcome: Design agents that can reason through tasks, use tools and execute multi-step workflows.</p>
        </SlideShell>
      );

    // PAGE 10: MODULE 07 - AI CODING AGENTS & MCP (10)
    case 9:
      return (
        <SlideShell pageNum="10">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Neshama Training | Curriculum</p>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a2558]">AI Coding Agents &amp; MCP</h2>
            <span className="px-3 py-1 bg-blue-700 text-white text-xs font-bold rounded-lg tracking-wider">
              MODULE 07 | LIVE AGENTIC DEVELOPMENT
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 flex-1">
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5">
              <h3 className="font-bold text-blue-700 text-xs sm:text-sm mb-2">AI Coding Agents</h3>
              <ul className="space-y-1 text-xs text-slate-700">
                <li>• OpenAI Codex &amp; Claude Code</li>
                <li>• Hermes Agent, Grok &amp; Cursor</li>
                <li>• GitHub Copilot</li>
                <li>• Repo understanding &amp; task delegation</li>
                <li>• Code gen, test gen &amp; review</li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5">
              <h3 className="font-bold text-blue-700 text-xs sm:text-sm mb-2">Coding Workflow</h3>
              <ul className="space-y-1 text-xs text-slate-700">
                <li>• Requirement &gt; plan &gt; implementation</li>
                <li>• Run tests and inspect results</li>
                <li>• Iterative debugging</li>
                <li>• Prepare commits &amp; docs</li>
                <li>• Human approval &amp; permissions</li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5">
              <h3 className="font-bold text-blue-700 text-xs sm:text-sm mb-2">MCP Protocol</h3>
              <ul className="space-y-1 text-xs text-slate-700">
                <li>• Model Context Protocol basics</li>
                <li>• MCP clients and servers</li>
                <li>• Tools, resources &amp; prompts</li>
                <li>• Connecting agents to DBs &amp; APIs</li>
                <li>• Custom MCP servers</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#0b1e3f] text-white p-3.5 rounded-2xl mb-1.5">
            <p className="font-bold text-cyan-300 text-xs uppercase tracking-wider mb-1">Project Deliverables</p>
            <p className="text-xs text-slate-200">• <strong>DevOps Copilot:</strong> repo-aware coding agent that inspects, modifies &amp; tests code.</p>
            <p className="text-xs text-slate-200">• <strong>MCP Command Center:</strong> connect an AI agent to external tools, APIs and data.</p>
          </div>
          <p className="text-xs text-slate-500 font-medium">Outcome: Build agentic developer workflows and connect AI systems to real tools.</p>
        </SlideShell>
      );

    // PAGE 11: MODULE 08 - PRODUCTION AI ENGINEERING (11)
    case 10:
      return (
        <SlideShell pageNum="11">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Neshama Training | Curriculum</p>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a2558]">Production AI Engineering</h2>
            <span className="px-3 py-1 bg-blue-700 text-white text-xs font-bold rounded-lg tracking-wider">
              MODULE 08 | LIVE + CAPSTONE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 flex-1">
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5">
              <h3 className="font-bold text-blue-700 text-xs sm:text-sm mb-2">Production Systems</h3>
              <ul className="space-y-1 text-xs text-slate-700">
                <li>• Multi-agent supervisor &amp; workers</li>
                <li>• Agent communication protocols</li>
                <li>• Persistent state &amp; memory</li>
                <li>• Task delegation &amp; aggregation</li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5">
              <h3 className="font-bold text-blue-700 text-xs sm:text-sm mb-2">Evaluation &amp; Safety</h3>
              <ul className="space-y-1 text-xs text-slate-700">
                <li>• Agent reliability &amp; tool errors</li>
                <li>• Infinite-loop prevention</li>
                <li>• Prompt &amp; tool injection defense</li>
                <li>• Logging, tracing &amp; cost monitoring</li>
                <li>• Evaluation datasets</li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5">
              <h3 className="font-bold text-blue-700 text-xs sm:text-sm mb-2">Deploy &amp; Operate</h3>
              <ul className="space-y-1 text-xs text-slate-700">
                <li>• Docker &amp; containerization</li>
                <li>• Vercel &amp; AWS deployment</li>
                <li>• Rate limiting &amp; caching</li>
                <li>• Token optimization &amp; monitoring</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#0b1e3f] text-white p-3.5 rounded-2xl mb-1.5">
            <p className="font-bold text-cyan-300 text-xs uppercase tracking-wider mb-1">Project Deliverables</p>
            <p className="text-xs text-slate-200">• <strong>Autonomous Business Agent:</strong> RAG + tools + memory + multi-agent workflow.</p>
          </div>
          <p className="text-xs text-slate-500 font-medium">Outcome: Deploy reliable AI systems and understand operational concerns behind production agents.</p>
        </SlideShell>
      );

    // PAGE 12: AGENTIC AI DEEP DIVE (12)
    case 11:
      return (
        <SlideShell pageNum="12">
          <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">A dedicated engineering track</p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0a2558] mb-2">+ Agentic AI Deep Dive</h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-5">
            Build agents that plan, select tools, execute tasks, inspect results and return verified outputs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 flex-1">
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4">
              <h3 className="font-bold text-blue-700 text-sm mb-2">Agent Architecture</h3>
              <p className="text-xs text-slate-700 leading-relaxed">• Planning + reasoning loops<br />• State + memory<br />• Tool selection<br />• Task decomposition</p>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4">
              <h3 className="font-bold text-blue-700 text-sm mb-2">Tools &amp; Actions</h3>
              <p className="text-xs text-slate-700 leading-relaxed">• Function calling + APIs<br />• Databases + search<br />• Files + code execution<br />• Tool validation</p>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4">
              <h3 className="font-bold text-blue-700 text-sm mb-2">Orchestration</h3>
              <p className="text-xs text-slate-700 leading-relaxed">• LangChain + LangGraph<br />• LlamaIndex<br />• Sequential + parallel flows<br />• Router patterns</p>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4">
              <h3 className="font-bold text-blue-700 text-sm mb-2">Coding Agents</h3>
              <p className="text-xs text-slate-700 leading-relaxed">• Codex + Claude Code<br />• Hermes Agent + Grok<br />• Cursor<br />• GitHub Copilot</p>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4">
              <h3 className="font-bold text-blue-700 text-sm mb-2">MCP</h3>
              <p className="text-xs text-slate-700 leading-relaxed">• Clients + servers<br />• Tools + resources<br />• Prompts<br />• Custom MCP servers</p>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4">
              <h3 className="font-bold text-blue-700 text-sm mb-2">Multi-Agent Systems</h3>
              <p className="text-xs text-slate-700 leading-relaxed">• Supervisor + worker agents<br />• Research + coding agents<br />• Reviewer agent<br />• Result aggregation</p>
            </div>
          </div>
        </SlideShell>
      );

    // PAGE 13: AI TOOLS & TECHNOLOGY STACK (13)
    case 12:
      return (
        <SlideShell pageNum="13">
          <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">Tools taught through practical workflows</p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0a2558] mb-4">AI Tools &amp; Technology Stack</h2>

          {/* Logo Pills Strip */}
          <div className="flex flex-wrap gap-2 mb-4">
            {['OpenAI', 'Claude', 'Gemini', 'Codex', 'Cursor', 'GitHub Copilot', 'LangChain', 'Hugging Face', 'Ollama'].map((t) => (
              <span key={t} className="px-3 py-1 bg-blue-50 border border-blue-200/80 rounded-full text-xs font-bold text-blue-800">
                {t}
              </span>
            ))}
          </div>

          <div className="space-y-2 text-xs sm:text-sm text-slate-700 flex-1">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-blue-700">AI Models &amp; APIs:</strong> OpenAI • Claude / Anthropic • Gemini • Grok • OpenRouter
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-blue-700">Coding Agents:</strong> Codex • Claude Code • Hermes Agent • Cursor • GitHub Copilot
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-blue-700">AI Frameworks:</strong> LangChain • LangGraph • LlamaIndex • Hugging Face
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-blue-700">RAG &amp; Vector:</strong> Pinecone • FAISS • ChromaDB • Embeddings
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-blue-700">Full-Stack:</strong> Python • FastAPI • JavaScript • React • Node.js • Express • MongoDB • SQL
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-blue-700">Ship &amp; Deploy:</strong> Git • GitHub • Postman • Swagger / OpenAPI • Docker • Vercel • AWS
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <strong className="text-blue-700">Local AI:</strong> Ollama • Open-source models • Local inference
            </div>
          </div>
        </SlideShell>
      );

    // PAGE 14: CAREER TRACK FROM WEEK 1 (14)
    case 13:
      return (
        <SlideShell pageNum="14">
          <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">Professional presence grows with technical skills</p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0a2558] mb-5">Career Track from Week 1</h2>

          <div className="space-y-3 flex-1">
            <div className="border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-blue-700 text-white px-3.5 py-1.5 text-xs font-bold tracking-wide">
                WEEK 1 | PROFILE FOUNDATION
              </div>
              <div className="p-3 bg-white text-xs text-slate-700">
                • LinkedIn headline and About section &nbsp;• Skills and featured section &nbsp;• GitHub profile README &nbsp;• Portfolio structure
              </div>
            </div>

            <div className="border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-blue-700 text-white px-3.5 py-1.5 text-xs font-bold tracking-wide">
                WEEKS 2-4 | BUILD THE SIGNAL
              </div>
              <div className="p-3 bg-white text-xs text-slate-700">
                • Commit foundation work &nbsp;• Document first AI projects &nbsp;• Publish learning / project updates &nbsp;• Add projects to portfolio
              </div>
            </div>

            <div className="border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-blue-700 text-white px-3.5 py-1.5 text-xs font-bold tracking-wide">
                WEEKS 5-8 | SHOWCASE AI ENGINEERING
              </div>
              <div className="p-3 bg-white text-xs text-slate-700">
                • RAG project case study &nbsp;• Architecture diagrams + live demos &nbsp;• Technical LinkedIn posts &nbsp;• GitHub repository cleanup
              </div>
            </div>

            <div className="border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-blue-700 text-white px-3.5 py-1.5 text-xs font-bold tracking-wide">
                WEEKS 9-10 | DEMONSTRATE AGENTIC SKILLS
              </div>
              <div className="p-3 bg-white text-xs text-slate-700">
                • Agent project write-up &nbsp;• MCP workflow documentation &nbsp;• Coding-agent workflow showcase &nbsp;• Demo video / walkthrough
              </div>
            </div>

            <div className="border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-blue-700 text-white px-3.5 py-1.5 text-xs font-bold tracking-wide">
                WEEKS 11-12 | GET INTERVIEW READY
              </div>
              <div className="p-3 bg-white text-xs text-slate-700">
                • AI Engineer resume + ATS-oriented descriptions &nbsp;• Mock interviews + project defense &nbsp;• Recruiter outreach + job search workflow
              </div>
            </div>
          </div>
        </SlideShell>
      );

    // PAGE 15: AI-NATIVE PROJECT PORTFOLIO 01-06 (15)
    case 14:
      return (
        <SlideShell pageNum="15">
          <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">AI is the core product layer</p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0a2558] mb-1">AI-Native Project Portfolio</h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-4">
            From model APIs and grounded retrieval to agentic workflows and production systems.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 flex-1">
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4">
              <span className="text-lg font-black text-blue-700">01</span>
              <h3 className="font-bold text-slate-900 text-sm mt-1">AI Copilot</h3>
              <p className="text-[11px] font-bold text-blue-600 mb-1.5">LLM APIs + Streaming</p>
              <p className="text-xs text-slate-600 leading-relaxed">Multi-model assistant with configurable instructions.</p>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4">
              <span className="text-lg font-black text-blue-700">02</span>
              <h3 className="font-bold text-slate-900 text-sm mt-1">Prompt Lab</h3>
              <p className="text-[11px] font-bold text-blue-600 mb-1.5">Prompt Engineering</p>
              <p className="text-xs text-slate-600 leading-relaxed">Test, compare and evaluate model outputs.</p>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4">
              <span className="text-lg font-black text-blue-700">03</span>
              <h3 className="font-bold text-slate-900 text-sm mt-1">AI Productivity Board</h3>
              <p className="text-[11px] font-bold text-blue-600 mb-1.5">MERN + AI</p>
              <p className="text-xs text-slate-600 leading-relaxed">AI-assisted tasks and productivity workflows.</p>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4">
              <span className="text-lg font-black text-blue-700">04</span>
              <h3 className="font-bold text-slate-900 text-sm mt-1">Knowledge Vault</h3>
              <p className="text-[11px] font-bold text-blue-600 mb-1.5">Embeddings + RAG</p>
              <p className="text-xs text-slate-600 leading-relaxed">Chat with uploaded documents using grounded retrieval.</p>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4">
              <span className="text-lg font-black text-blue-700">05</span>
              <h3 className="font-bold text-slate-900 text-sm mt-1">Business Knowledge Assistant</h3>
              <p className="text-[11px] font-bold text-blue-600 mb-1.5">Advanced RAG</p>
              <p className="text-xs text-slate-600 leading-relaxed">Answer domain-specific business questions using private knowledge.</p>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4">
              <span className="text-lg font-black text-blue-700">06</span>
              <h3 className="font-bold text-slate-900 text-sm mt-1">AI Operations Workspace</h3>
              <p className="text-[11px] font-bold text-blue-600 mb-1.5">Python + React + DB</p>
              <p className="text-xs text-slate-600 leading-relaxed">Complete full-stack AI product with secure APIs.</p>
            </div>
          </div>
        </SlideShell>
      );

    // PAGE 16: AI-NATIVE PROJECT PORTFOLIO 07-12 (16)
    case 15:
      return (
        <SlideShell pageNum="16">
          <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">AI is the core product layer</p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0a2558] mb-1">+ AI-Native Project Portfolio</h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-4">
            From model APIs and grounded retrieval to agentic workflows and production systems.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 flex-1">
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4">
              <span className="text-lg font-black text-blue-700">07</span>
              <h3 className="font-bold text-slate-900 text-sm mt-1">ResearchPilot</h3>
              <p className="text-[11px] font-bold text-blue-600 mb-1.5">Agents + Tools</p>
              <p className="text-xs text-slate-600 leading-relaxed">Autonomous research agent with planning and tool use.</p>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4">
              <span className="text-lg font-black text-blue-700">08</span>
              <h3 className="font-bold text-slate-900 text-sm mt-1">Workflow Agent</h3>
              <p className="text-[11px] font-bold text-blue-600 mb-1.5">Agents + APIs</p>
              <p className="text-xs text-slate-600 leading-relaxed">Execute multi-step operational workflows.</p>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4">
              <span className="text-lg font-black text-blue-700">09</span>
              <h3 className="font-bold text-slate-900 text-sm mt-1">DevOps Copilot</h3>
              <p className="text-[11px] font-bold text-blue-600 mb-1.5">Coding Agents</p>
              <p className="text-xs text-slate-600 leading-relaxed">Repository-aware coding, testing and review workflow.</p>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4">
              <span className="text-lg font-black text-blue-700">10</span>
              <h3 className="font-bold text-slate-900 text-sm mt-1">MCP Command Center</h3>
              <p className="text-[11px] font-bold text-blue-600 mb-1.5">MCP + Agents</p>
              <p className="text-xs text-slate-600 leading-relaxed">Connect AI agents to external tools and systems.</p>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4">
              <span className="text-lg font-black text-blue-700">11</span>
              <h3 className="font-bold text-slate-900 text-sm mt-1">Multimodal AI Studio</h3>
              <p className="text-[11px] font-bold text-blue-600 mb-1.5">Vision + Audio + LLM</p>
              <p className="text-xs text-slate-600 leading-relaxed">Combine text, image and audio AI capabilities.</p>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4">
              <span className="text-lg font-black text-blue-700">12</span>
              <h3 className="font-bold text-slate-900 text-sm mt-1">Autonomous Business Agent</h3>
              <p className="text-[11px] font-bold text-blue-600 mb-1.5">RAG + Multi-Agent</p>
              <p className="text-xs text-slate-600 leading-relaxed">Business assistant with memory, tools and verification.</p>
            </div>
          </div>
        </SlideShell>
      );

    // PAGE 17: INTERVIEW-READY ROLES (17)
    case 16:
      return (
        <SlideShell pageNum="17">
          <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">Software engineering + AI application delivery</p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0a2558] mb-1">Interview-Ready Roles</h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-4">
            Build capabilities for roles across AI applications, full-stack development, automation and product engineering.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 flex-1">
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4">
              <h3 className="font-bold text-blue-700 text-sm mb-2">AI Engineer</h3>
              <p className="text-xs text-slate-700 leading-relaxed">• LLM applications<br />• RAG systems<br />• Agents + AI integrations</p>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4">
              <h3 className="font-bold text-blue-700 text-sm mb-2">Full-Stack AI Developer</h3>
              <p className="text-xs text-slate-700 leading-relaxed">• React + Python<br />• AI backends + interfaces<br />• Deployment</p>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4">
              <h3 className="font-bold text-blue-700 text-sm mb-2">LLM Application Developer</h3>
              <p className="text-xs text-slate-700 leading-relaxed">• Model APIs<br />• Prompt engineering<br />• Function calling + streaming</p>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4">
              <h3 className="font-bold text-blue-700 text-sm mb-2">AI Application Engineer</h3>
              <p className="text-xs text-slate-700 leading-relaxed">• AI integration + APIs<br />• Data + AI workflows<br />• Production readiness</p>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4">
              <h3 className="font-bold text-blue-700 text-sm mb-2">AI Automation Engineer</h3>
              <p className="text-xs text-slate-700 leading-relaxed">• Agents + tools<br />• MCP<br />• Workflow automation</p>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4">
              <h3 className="font-bold text-blue-700 text-sm mb-2">AI Product Engineer</h3>
              <p className="text-xs text-slate-700 leading-relaxed">• AI feature design<br />• Full-stack delivery<br />• Architecture + shipping</p>
            </div>
          </div>
        </SlideShell>
      );

    // PAGE 18: MOCK INTERVIEWS & CORPORATE READINESS (18)
    case 17:
      return (
        <SlideShell pageNum="18">
          <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">Practice alongside the technical curriculum</p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0a2558] mb-5">Mock Interviews &amp; Corporate Readiness</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 flex-1">
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4">
              <h3 className="font-bold text-blue-700 text-sm mb-2">Technical Interviews</h3>
              <p className="text-xs text-slate-700 leading-relaxed">• Python + JavaScript / React<br />• APIs + databases<br />• LLMs + RAG<br />• Agents + MCP</p>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4">
              <h3 className="font-bold text-blue-700 text-sm mb-2">AI Engineering Discussion</h3>
              <p className="text-xs text-slate-700 leading-relaxed">• Explain AI architecture + RAG<br />• Explain vector search<br />• Explain agent workflows + model choices<br />• Discuss production trade-offs</p>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4">
              <h3 className="font-bold text-blue-700 text-sm mb-2">Mock Interviews</h3>
              <p className="text-xs text-slate-700 leading-relaxed">• Technical mock interview<br />• AI engineering mock<br />• Project defense<br />• HR / communication practice</p>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4">
              <h3 className="font-bold text-blue-700 text-sm mb-2">Corporate Readiness</h3>
              <p className="text-xs text-slate-700 leading-relaxed">• Professional communication<br />• Email etiquette + meetings<br />• Team collaboration + Agile workflow<br />• Technical presentation</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200/80 rounded-xl p-3 text-xs sm:text-sm text-slate-700">
            <strong>Career preparation runs in parallel throughout the program,</strong> with concentrated interview practice in the final weeks.
          </div>
        </SlideShell>
      );

    // PAGE 19: WHAT STUDENTS FINISH WITH (19)
    case 18:
      return (
        <SlideShell pageNum="19">
          <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">A practical portfolio and a professional profile</p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0a2558] mb-4">What Students Finish With</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 flex-1">
            {[
              "Python + MERN foundation access",
              "LLM application development experience",
              "Prompt engineering capability",
              "Working RAG system",
              "Vector database experience",
              "AI Agent and multi-agent experience",
              "MCP and tool-integration experience",
              "Hands-on exposure to Codex, Claude Code, Hermes Agent and Grok",
              "Multiple GitHub repositories",
              "Portfolio-ready case studies",
              "LinkedIn profile developed from Week 1",
              "Live-deployed AI application",
              "AI Engineer resume",
              "Mock interview experience",
              "Corporate readiness preparation",
              "Certificate of completion"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-black flex-shrink-0">
                  +
                </div>
                <span className="text-slate-800 font-medium text-xs leading-tight">{item}</span>
              </div>
            ))}
          </div>
        </SlideShell>
      );

    // PAGE 20: PROGRAM AT A GLANCE (20)
    case 19:
      return (
        <SlideShell pageNum="20">
          <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">Build, Deploy &amp; Get Interview-Ready</p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0a2558] mb-4">+ Program at a Glance</h2>

          <div className="space-y-2 text-xs sm:text-sm mb-4 flex-1">
            <div className="grid grid-cols-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="font-bold text-blue-700">Duration</span>
              <span className="col-span-2 text-slate-800">3 Months / 12 Weeks</span>
            </div>
            <div className="grid grid-cols-3 p-2.5 rounded-xl bg-white border border-slate-200/80">
              <span className="font-bold text-blue-700">Mode</span>
              <span className="col-span-2 text-slate-800">Live + Recorded</span>
            </div>
            <div className="grid grid-cols-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="font-bold text-blue-700">Foundation</span>
              <span className="col-span-2 text-slate-800">Python + MERN recorded content</span>
            </div>
            <div className="grid grid-cols-3 p-2.5 rounded-xl bg-white border border-slate-200/80">
              <span className="font-bold text-blue-700">Live Focus</span>
              <span className="col-span-2 text-slate-800">LLMs, Prompt Engineering, RAG, Agents, MCP, AI Products, Deployment</span>
            </div>
            <div className="grid grid-cols-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="font-bold text-blue-700">Agentic Stack</span>
              <span className="col-span-2 text-slate-800">LangChain, LangGraph, LlamaIndex, Codex, Claude Code, Hermes Agent, Grok, MCP</span>
            </div>
            <div className="grid grid-cols-3 p-2.5 rounded-xl bg-white border border-slate-200/80">
              <span className="font-bold text-blue-700">Career Track</span>
              <span className="col-span-2 text-slate-800">LinkedIn + GitHub + Portfolio from Week 1; Resume + Mock Interviews + Corporate Readiness</span>
            </div>
            <div className="grid grid-cols-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="font-bold text-blue-700">Project Portfolio</span>
              <span className="col-span-2 text-slate-800">AI Copilot, RAG system, Full-Stack AI product, Research Agent, Coding Agent, MCP system, Autonomous Business Agent</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md">
            <div>
              <h3 className="font-black text-base sm:text-lg">Start Your AI Engineering Journey</h3>
              <p className="text-xs text-cyan-200">www.neshamatraining.com</p>
            </div>
            <div className="text-right text-xs sm:text-sm font-bold text-white/90">
              +91 81434 59888 &nbsp;|&nbsp; +91 95501 43619
            </div>
          </div>
        </SlideShell>
      );

    default:
      return null;
  }
}

export default function BrochureSlideshow({ onEnroll }: BrochureSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  const totalSlides = SLIDES_DATA.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Autoplay functionality
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
        setZoomLevel(1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, isFullscreen]);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (thumbnailsRef.current) {
      const activeThumb = thumbnailsRef.current.children[currentSlide] as HTMLElement;
      if (activeThumb) {
        activeThumb.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
    setZoomLevel(1);
  }, [currentSlide]);

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setTouchStartX(null);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    setZoomLevel(1);
  };

  const zoomIn = () => setZoomLevel((z) => Math.min(1.8, Number((z + 0.15).toFixed(2))));
  const zoomOut = () => setZoomLevel((z) => Math.max(1, Number((z - 0.15).toFixed(2))));
  const resetZoom = () => setZoomLevel(1);

  const current = SLIDES_DATA[currentSlide];

  const categories = [
    { id: 'all', label: 'All (20)' },
    { id: 'overview', label: 'Overview (1-3)' },
    { id: 'curriculum', label: 'Curriculum (4-11)' },
    { id: 'agentic', label: 'Agentic & Stack (12-13)' },
    { id: 'career', label: 'Career (14, 17-18)' },
    { id: 'portfolio', label: 'Projects (15-16)' },
    { id: 'summary', label: 'Summary (19-20)' },
  ];

  const handleCategorySelect = (catId: string) => {
    setActiveCategory(catId);
    if (catId === 'all') return;
    const firstMatch = SLIDES_DATA.findIndex((s) => s.category === catId);
    if (firstMatch !== -1) {
      setCurrentSlide(firstMatch);
    }
  };

  return (
    <section id="brochure" className="py-16 sm:py-24 px-4 sm:px-8 bg-surface-container-low border-b border-outline-variant/30">
      <div className="max-w-6xl mx-auto">
        {/* Header Info */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            
            Official Program Brochure · 20 Pages
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary tracking-tight mb-4">
            Neshama Training Brochure
          </h2>
          <p className="text-base sm:text-lg text-on-surface-variant">
            Explore the complete 20-page curriculum, blueprints, 12 projects, agentic stacks and career track in this interactive slideshow.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-4 scrollbar-none justify-start sm:justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategorySelect(cat.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-surface text-on-surface-variant hover:text-primary hover:bg-surface-container-high border border-outline-variant/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4 bg-surface rounded-2xl p-3 sm:p-4 border border-outline-variant/40 shadow-soft">
          {/* Slide Indicator & Title */}
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-primary text-white text-xs font-black rounded-lg">
              {currentSlide + 1} / {totalSlides}
            </span>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-secondary">PAGE {current.pageNum}</span>
                <span className="text-slate-300">•</span>
                <h3 className="text-sm sm:text-base font-bold text-primary truncate max-w-[200px] sm:max-w-xs md:max-w-md">
                  {current.title}
                </h3>
              </div>
              <p className="text-xs text-on-surface-variant hidden sm:block truncate max-w-lg">
                {current.subtitle}
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                isPlaying 
                  ? 'bg-secondary text-primary font-black' 
                  : 'bg-surface-container-high text-primary hover:bg-outline-variant/20'
              }`}
            >
              <span className="hidden sm:inline">{isPlaying ? 'Pause' : 'Auto-Play'}</span>
            </button>

            <button
              onClick={toggleFullscreen}
              aria-label="View Fullscreen"
              className="p-2 rounded-xl bg-surface-container-high text-primary hover:bg-outline-variant/20 transition-colors"
              title="Fullscreen view"
            >
              
            </button>

            <a
              href={BROCHURE_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-primary text-white text-xs font-bold hover:shadow-md transition-all"
            >
              
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Main Slide Presentation Stage */}
        <div 
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative bg-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/40 select-none group min-h-[560px] sm:min-h-[640px] md:min-h-[680px] flex items-center justify-center p-2 sm:p-6"
        >
          {/* Main Slide Component */}
          <div className="w-full max-w-4xl h-full min-h-[520px] sm:min-h-[600px] flex items-center justify-center overflow-hidden relative rounded-xl sm:rounded-2xl shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="w-full h-full flex items-center justify-center rounded-xl sm:rounded-2xl overflow-hidden"
                style={{
                  transform: `scale(${zoomLevel})`,
                  transition: 'transform 0.2s ease-out'
                }}
              >
                <SlideRenderer slideIndex={currentSlide} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Overlay Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-md transition-all shadow-lg hover:scale-110 active:scale-95 z-20"
          >
            
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-md transition-all shadow-lg hover:scale-110 active:scale-95 z-20"
          >
            
          </button>

          {/* Bottom Slide Overlay Controls */}
          <div className="absolute bottom-3 sm:bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none z-20">
            {/* Slide Pill */}
            <div className="pointer-events-auto bg-black/75 backdrop-blur-md text-white text-xs px-3.5 py-1.5 rounded-full font-semibold border border-white/10 shadow-md">
              {currentSlide + 1} of {totalSlides} · Page {current.pageNum}
            </div>

            {/* In-Slide Zoom Controls */}
            <div className="pointer-events-auto flex items-center gap-1 bg-black/75 backdrop-blur-md rounded-full px-2 py-1 border border-white/10 shadow-md">
              <button 
                onClick={zoomOut} 
                disabled={zoomLevel <= 1}
                aria-label="Zoom Out"
                className="p-1 text-white hover:text-cyan-300 disabled:opacity-30 transition-colors"
                title="Zoom Out"
              >
                
              </button>
              <span className="text-[11px] font-mono text-white/90 px-1">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button 
                onClick={zoomIn} 
                disabled={zoomLevel >= 1.8}
                aria-label="Zoom In"
                className="p-1 text-white hover:text-cyan-300 disabled:opacity-30 transition-colors"
                title="Zoom In"
              >
                
              </button>
              {zoomLevel > 1 && (
                <button 
                  onClick={resetZoom}
                  aria-label="Reset Zoom"
                  className="p-1 text-white hover:text-cyan-300 transition-colors"
                  title="Reset Zoom"
                >
                  
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden mt-4">
          <div 
            className="bg-primary h-full transition-all duration-300 rounded-full"
            style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          />
        </div>

        {/* 20-Slide Thumbnail Strip */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-on-surface-variant flex items-center gap-1.5">
              
              All 20 Brochure Pages (Click any page to jump)
            </span>
            <div className="flex items-center gap-2 text-xs font-medium text-on-surface-variant">
              <span>Use</span>
              <kbd className="px-1.5 py-0.5 bg-surface rounded border border-outline-variant text-[10px] font-mono">←</kbd>
              <kbd className="px-1.5 py-0.5 bg-surface rounded border border-outline-variant text-[10px] font-mono">→</kbd>
              <span>to navigate</span>
            </div>
          </div>

          <div 
            ref={thumbnailsRef}
            className="flex gap-2 sm:gap-3 overflow-x-auto pb-3 pt-1 scrollbar-thin scrollbar-thumb-outline-variant/40"
          >
            {SLIDES_DATA.map((slide, index) => {
              const isActive = index === currentSlide;
              return (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(index)}
                  className={`flex-shrink-0 relative group rounded-xl p-2.5 text-left transition-all duration-200 border-2 w-32 sm:w-40 flex flex-col justify-between ${
                    isActive 
                      ? 'bg-primary text-white border-primary ring-2 ring-primary/30 scale-105 shadow-md' 
                      : 'bg-surface text-slate-700 border-outline-variant/40 hover:border-primary/50 hover:bg-surface-container-low'
                  }`}
                  aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span className={`text-[10px] font-mono font-black px-1.5 py-0.5 rounded ${
                      isActive ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-700 border border-blue-200/50'
                    }`}>
                      {slide.pageNum}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${
                      isActive ? 'text-cyan-200' : 'text-slate-400'
                    }`}>
                      {slide.category}
                    </span>
                  </div>
                  <h4 className={`text-xs font-bold truncate w-full ${isActive ? 'text-white' : 'text-primary'}`}>
                    {slide.title}
                  </h4>
                  <p className={`text-[10px] line-clamp-1 mt-0.5 ${isActive ? 'text-slate-200' : 'text-slate-500'}`}>
                    {slide.subtitle}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-8 p-6 rounded-2xl bg-surface border border-outline-variant/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-soft">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
              
            </div>
            <div>
              <h4 className="font-bold text-primary text-base">
                Download the official PDF brochure
              </h4>
              <p className="text-xs sm:text-sm text-on-surface-variant">
                Direct view and download link for the full 20-page Neshama Training curriculum and blueprint.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={BROCHURE_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-surface-container-high hover:bg-outline-variant/30 text-primary font-bold text-xs sm:text-sm transition-colors border border-outline-variant/40"
            >
              
              <span>Direct PDF</span>
            </a>
            <a
              href={BROCHURE_PREVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-surface-container-high hover:bg-outline-variant/30 text-primary font-bold text-xs sm:text-sm transition-colors border border-outline-variant/40"
            >
              
              <span>Drive Viewer</span>
            </a>
            {onEnroll && (
              <button
                onClick={onEnroll}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-bold text-xs sm:text-sm hover:shadow-md transition-all"
              >
                <span>Apply Now</span>
                
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Fullscreen Modal View */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col justify-between p-3 sm:p-6 backdrop-blur-lg"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between text-white pb-3 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-primary text-white text-xs font-black rounded-lg">
                  {currentSlide + 1} of {totalSlides} · Page {current.pageNum}
                </span>
                <div>
                  <h3 className="text-base font-bold text-white">
                    {current.title}
                  </h3>
                  <p className="text-xs text-white/60 hidden sm:block">
                    {current.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    isPlaying 
                      ? 'bg-secondary text-primary font-black' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <span>{isPlaying ? 'Pause' : 'Auto-Play'}</span>
                </button>
                <button
                  onClick={toggleFullscreen}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Exit Fullscreen"
                  title="Exit Fullscreen (Esc)"
                >
                  
                </button>
              </div>
            </div>

            {/* Modal Slide Area */}
            <div className="relative flex-1 flex items-center justify-center overflow-hidden my-4 p-2">
              <button
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-all z-30"
              >
                
              </button>

              <div 
                className="w-full max-w-4xl h-full flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  transform: `scale(${zoomLevel})`,
                  transition: 'transform 0.2s ease-out'
                }}
              >
                <SlideRenderer slideIndex={currentSlide} />
              </div>

              <button
                onClick={nextSlide}
                aria-label="Next Slide"
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-all z-30"
              >
                
              </button>
            </div>

            {/* Modal Footer Controls */}
            <div className="flex items-center justify-between text-white pt-3 border-t border-white/10">
              <div className="flex items-center gap-2">
                <button 
                  onClick={zoomOut}
                  disabled={zoomLevel <= 1}
                  className="p-1.5 rounded bg-white/10 text-white hover:bg-white/20 disabled:opacity-30"
                >
                  
                </button>
                <span className="text-xs font-mono text-white/80">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button 
                  onClick={zoomIn}
                  disabled={zoomLevel >= 1.8}
                  className="p-1.5 rounded bg-white/10 text-white hover:bg-white/20 disabled:opacity-30"
                >
                  
                </button>
                {zoomLevel > 1 && (
                  <button 
                    onClick={resetZoom}
                    className="p-1.5 rounded bg-white/10 text-white hover:bg-white/20 text-xs flex items-center gap-1"
                  >
                    
                    <span>Reset</span>
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={BROCHURE_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-white text-xs font-bold hover:shadow-lg transition-all"
                >
                  
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
