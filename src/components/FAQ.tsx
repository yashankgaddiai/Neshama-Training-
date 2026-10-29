import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQ() {
  const faqs = [
    {
      question: "How long is the program and how is it delivered?",
      answer: "It's a 3-month (12-week) program delivered as Live + Recorded. Live sessions focus on AI engineering, product building and agentic systems, while Python and MERN foundations are available as recorded learning."
    },
    {
      question: "What technologies will I learn?",
      answer: "Python, HTML/CSS/JavaScript, React + Redux Toolkit, Node/Express/MongoDB, FastAPI, LLM APIs (OpenAI, Claude, Gemini, Grok, OpenRouter), RAG with Pinecone, FAISS and ChromaDB, agent frameworks like LangChain, LangGraph and LlamaIndex, MCP, coding agents (Codex, Claude Code, Hermes Agent, Cursor, GitHub Copilot) and deployment with Docker, Vercel and AWS."
    },
    {
      question: "How many projects will I build?",
      answer: "You'll build 12 AI-native projects — from an AI Copilot and Prompt Lab through Knowledge Vault (RAG), a full-stack AI Operations Workspace, ResearchPilot, DevOps Copilot, MCP Command Center and a capstone Autonomous Business Agent."
    },
    {
      question: "When does career preparation start?",
      answer: "From Week 1. You'll set up your LinkedIn, GitHub and portfolio in the first week, then build them up as you go, with concentrated resume work, mock interviews and recruiter outreach in Weeks 11–12."
    },
    {
      question: "What roles does this program prepare me for?",
      answer: "AI Engineer, Full-Stack AI Developer, LLM Application Developer, AI Application Engineer, AI Automation Engineer and AI Product Engineer."
    },
    {
      question: "What is the fee, and are there payment options?",
      answer: "The program fee is ₹55,000 (down from ₹1,00,000), inclusive of taxes. Easy EMI options are available, and you can speak with our counsellor about scholarships and exclusive discounts."
    },
    {
      question: "Will I get a certificate?",
      answer: "Yes — you'll receive a certificate of completion along with a portfolio of deployed projects, GitHub repositories and an AI Engineer resume."
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 sm:py-32 px-4 sm:px-8 bg-surface" 
      id="faq"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase text-[0.75rem] tracking-[0.2em] mb-3 block">
            Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
  key?: number;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-outline-variant/30 rounded-2xl overflow-hidden bg-surface-container-low transition-colors duration-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-surface-container/50 transition-colors"
      >
        <span className="font-bold text-primary text-base sm:text-lg">{question}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-on-surface-variant text-sm sm:text-base leading-relaxed border-t border-outline-variant/10 mt-2">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
