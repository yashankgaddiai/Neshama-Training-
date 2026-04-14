import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQ() {
  const faqs = [
    {
      question: "Do I need coding or AI experience?",
      answer: "No. The course starts from scratch. We teach you everything you need to know to build AI products."
    },
    {
      question: "What is AI-Assisted Development?",
      answer: "Using AI tools to build applications by describing requirements in plain English."
    },
    {
      question: "Is the course live or recorded?",
      answer: "Both—recorded lessons and live weekly sessions for interaction and Q&A."
    },
    {
      question: "Will I build a RAG pipeline and Custom GPT?",
      answer: "Yes, as part of the curriculum you will build and deploy these real-world projects."
    },
    {
      question: "Will this help me get a job?",
      answer: "Yes. The final phase focuses on career readiness, including portfolio building and interview prep."
    },
    {
      question: "How many hours per week are required?",
      answer: "Approximately 3–4 hours per day is recommended to master the skills."
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-32 px-8" 
      id="faq"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase text-[0.75rem] tracking-[0.2em] mb-4 block">
            ❓ FAQs
          </span>
          <h2 className="text-3xl font-bold text-primary">Frequently Asked Questions</h2>
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
  key?: string | number;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/30">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left hover:bg-surface-container-high transition-colors duration-300"
      >
        <h4 className="font-bold text-primary">{question}</h4>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="text-primary" size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6 pt-0 text-on-surface-variant leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
