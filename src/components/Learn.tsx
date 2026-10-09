import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code, Users, MessageSquare, Award, CheckCircle2 } from 'lucide-react';

export default function Learn() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { id: "01", label: "Skills", icon: <Code size={18} /> },
    { id: "02", label: "Professional Readiness", icon: <Users size={18} /> },
    { id: "03", label: "Communication", icon: <MessageSquare size={18} /> },
    { id: "04", label: "Outcomes", icon: <Award size={18} /> },
  ];

  return (
    <motion.section 
      id="overview"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-16 sm:py-28 px-4 sm:px-8 bg-surface"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-primary font-bold uppercase text-[0.75rem] tracking-[0.2em] mb-3 block">
            Course Overview
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
            Everything you'll gain, in four steps
          </h2>
          <p className="text-base sm:text-lg text-on-surface-variant">
            Skills, professional readiness, communication and outcomes — tap through to see what the program covers.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4 mb-10 max-w-4xl mx-auto">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 border ${
                  isActive
                    ? 'bg-primary text-white border-primary shadow-md'
                    : 'bg-surface-container-low text-on-surface-variant border-outline-variant/30 hover:border-outline hover:text-primary'
                }`}
              >
                <span className={`text-[11px] font-black uppercase ${isActive ? 'text-secondary' : 'opacity-60'}`}>
                  {step.id}
                </span>
                <span>{step.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Cards */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {activeStep === 0 && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-3 gap-6"
              >
                <div className="p-7 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary mb-2">Foundation</span>
                  <h4 className="text-xl font-bold text-primary mb-4">Python & MERN</h4>
                  <ul className="space-y-2.5 text-sm text-on-surface-variant">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-secondary" /> Python, OOP, APIs, Git</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-secondary" /> React, Redux Toolkit</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-secondary" /> Node, Express, MongoDB</li>
                  </ul>
                </div>

                <div className="p-7 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary mb-2">Live</span>
                  <h4 className="text-xl font-bold text-primary mb-4">LLM & RAG Engineering</h4>
                  <ul className="space-y-2.5 text-sm text-on-surface-variant">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-secondary" /> Prompt engineering & LLM APIs</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-secondary" /> Embeddings + vector DBs</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-secondary" /> Advanced RAG & evaluation</li>
                  </ul>
                </div>

                <div className="p-7 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary mb-2">Live</span>
                  <h4 className="text-xl font-bold text-primary mb-4">Agents & Production</h4>
                  <ul className="space-y-2.5 text-sm text-on-surface-variant">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-secondary" /> LangChain, LangGraph, LlamaIndex</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-secondary" /> Coding agents + MCP</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-secondary" /> Docker, Vercel, AWS</li>
                  </ul>
                </div>
              </motion.div>
            )}

            {activeStep === 1 && (
              <motion.div
                key="readiness"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-7 rounded-2xl bg-surface-container-low border border-outline-variant/30">
                    <span className="text-2xl font-black text-primary/40 block mb-2">01</span>
                    <h4 className="text-lg font-bold text-primary mb-2">Workplace Simulations</h4>
                    <p className="text-sm text-on-surface-variant">Practice professional judgment in realistic engineering scenarios.</p>
                  </div>
                  <div className="p-7 rounded-2xl bg-surface-container-low border border-outline-variant/30">
                    <span className="text-2xl font-black text-primary/40 block mb-2">02</span>
                    <h4 className="text-lg font-bold text-primary mb-2">Collaborative Exercises</h4>
                    <p className="text-sm text-on-surface-variant">Work with others, align on priorities and communicate decisions clearly.</p>
                  </div>
                  <div className="p-7 rounded-2xl bg-surface-container-low border border-outline-variant/30">
                    <span className="text-2xl font-black text-primary/40 block mb-2">03</span>
                    <h4 className="text-lg font-bold text-primary mb-2">Project-Based Learning</h4>
                    <p className="text-sm text-on-surface-variant">Build AI applications while taking responsibility for delivery and outcomes.</p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 rounded-2xl bg-primary text-white">
                  <p className="text-base sm:text-lg leading-relaxed font-medium">
                    AI engineering requires more than technical ability. Learn to take ownership, communicate with clarity, collaborate effectively and make informed decisions — move from completing assignments to owning meaningful engineering outcomes.
                  </p>
                </div>
              </motion.div>
            )}

            {activeStep === 2 && (
              <motion.div
                key="communication"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-3 gap-6"
              >
                <div className="p-7 rounded-2xl bg-surface-container-low border border-outline-variant/30">
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary mb-2 block">Clarity · Brevity</span>
                  <h4 className="text-xl font-bold text-primary mb-3">Say it well</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Explain progress, challenges and decisions without ambiguity — and without unnecessary detail.
                  </p>
                </div>

                <div className="p-7 rounded-2xl bg-surface-container-low border border-outline-variant/30">
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary mb-2 block">Actionability · Accountability</span>
                  <h4 className="text-xl font-bold text-primary mb-3">Own the outcome</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Make next steps, owners and decisions explicit. Identify risks early, escalate blockers and propose solutions.
                  </p>
                </div>

                <div className="p-7 rounded-2xl bg-surface-container-low border border-outline-variant/30">
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary mb-2 block">Stakeholder Alignment</span>
                  <h4 className="text-xl font-bold text-primary mb-3">Speak to every audience</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Adapt your message for teammates, managers and nontechnical stakeholders.
                  </p>
                </div>
              </motion.div>
            )}

            {activeStep === 3 && (
              <motion.div
                key="outcomes"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-3 gap-6"
              >
                <div className="p-7 rounded-2xl bg-surface-container-low border border-outline-variant/30">
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary mb-2 block">Portfolio</span>
                  <h4 className="text-xl font-bold text-primary mb-4">Proof of work</h4>
                  <ul className="space-y-2.5 text-sm text-on-surface-variant">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-secondary" /> Multiple GitHub repositories</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-secondary" /> Portfolio-ready case studies</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-secondary" /> Live-deployed AI application</li>
                  </ul>
                </div>

                <div className="p-7 rounded-2xl bg-surface-container-low border border-outline-variant/30">
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary mb-2 block">Profile</span>
                  <h4 className="text-xl font-bold text-primary mb-4">Professional presence</h4>
                  <ul className="space-y-2.5 text-sm text-on-surface-variant">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-secondary" /> LinkedIn developed from Week 1</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-secondary" /> AI Engineer resume</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-secondary" /> Certificate of completion</li>
                  </ul>
                </div>

                <div className="p-7 rounded-2xl bg-surface-container-low border border-outline-variant/30">
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary mb-2 block">Interviews</span>
                  <h4 className="text-xl font-bold text-primary mb-4">Ready to be hired</h4>
                  <ul className="space-y-2.5 text-sm text-on-surface-variant">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-secondary" /> Mock interview experience</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-secondary" /> Project defense practice</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-secondary" /> Corporate readiness</li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
