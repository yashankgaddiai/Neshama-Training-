import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';

interface HeroProps {
  onEnroll: () => void;
  onEnrollNow: () => void;
  onDownloadBrochure: () => void;
}

export default function Hero({ onEnroll, onEnrollNow, onDownloadBrochure }: HeroProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    status: 'Student'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      onEnroll();
      return;
    }
    const message = encodeURIComponent(
      `Hi, I'd like to find my batch for Full-Stack AI Engineering.\nName: ${formData.name}\nPhone: ${formData.phone}\nStatus: ${formData.status}`
    );
    window.open(`https://wa.me/918143459888?text=${message}`, '_blank');
    setSubmitted(true);
  };

  const navAnchors = [
    { label: "Blueprint", href: "#blueprint" },
    { label: "Overview", href: "#overview" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Curriculum", href: "#curriculum" },
    { label: "Agentic AI", href: "#agentic" },
    { label: "Instructors", href: "#instructors" },
    { label: "Tools", href: "#tools" },
    { label: "Projects", href: "#projects" },
    { label: "Career Track", href: "#career" },
    { label: "Roles", href: "#roles" },
    { label: "Fees", href: "#fees" },
    { label: "FAQ", href: "#faq" }
  ];

  return (
    <header className="pt-10 sm:pt-14 pb-16 sm:pb-20 px-4 sm:px-8 overflow-hidden bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] text-primary mb-6 tracking-tight">
            Become a Full-Stack AI Engineer in 12 Weeks
          </h1>

          <p className="text-lg sm:text-xl text-on-surface-variant mb-8 max-w-3xl leading-relaxed">
            Python + MERN + GenAI. Build LLM apps, RAG systems, autonomous agents and MCP integrations — while your LinkedIn, GitHub and portfolio grow from Week 1.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-8">
            {[
              { text: "Python + MERN + GenAI" },
              { text: "Live + Recorded" },
              { text: "Real-world AI projects + Agentic systems" },
              { text: "Career preparation from Week 1" },
            ].map((pill, i) => (
              <span 
                key={i}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-container text-primary text-xs sm:text-sm font-semibold border border-outline-variant/40"
              >
                {pill.text}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onEnroll}
              className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg flex items-center justify-center gap-2 hover:shadow-xl transition-all"
            >
              Book a Free Counselling Call
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onEnrollNow}
              className="w-full sm:w-auto bg-secondary text-primary px-8 py-4 rounded-full font-bold text-base sm:text-lg flex items-center justify-center gap-2 hover:shadow-xl transition-all"
            >
              Enroll Now
            </motion.button>
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#brochure"
              className="w-full sm:w-auto border-2 border-secondary bg-secondary/10 px-7 py-4 rounded-full font-bold text-base text-primary hover:bg-secondary/20 transition-all flex items-center justify-center gap-2"
            >
              
              View Brochure Slideshow
            </motion.a>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onDownloadBrochure}
              className="w-full sm:w-auto border border-outline/30 px-6 py-4 rounded-full font-bold text-base text-primary hover:bg-surface-container-low transition-all flex items-center justify-center gap-2"
            >
              Download PDF
            </motion.button>
          </div>
        </motion.div>

        {/* Find your batch Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16 p-6 sm:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/40 shadow-soft"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary">Find your batch</h3>
              <p className="text-sm text-on-surface-variant">Share your details and our counsellor will reach out on WhatsApp.</p>
            </div>
            <a 
              href="tel:+918143459888" 
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary bg-white px-4 py-2 rounded-full border border-outline-variant/30 hover:border-secondary transition-colors"
            >
              
              +91 81434 59888
            </a>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1.5">Full name</label>
              <input 
                type="text" 
                placeholder="Your name" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl bg-white border border-outline-variant/40 text-primary text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1.5">Phone number</label>
              <input 
                type="tel" 
                placeholder="Phone / WhatsApp" 
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl bg-white border border-outline-variant/40 text-primary text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1.5">Current status</label>
              <select 
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white border border-outline-variant/40 text-primary text-sm focus:outline-none focus:border-primary transition-colors"
              >
                <option value="Student">Student</option>
                <option value="Recent graduate">Recent graduate</option>
                <option value="Working professional">Working professional</option>
                <option value="Career switcher">Career switcher</option>
              </select>
            </div>

            <div className="sm:col-span-3 pt-2">
              <button 
                type="submit"
                className="w-full bg-primary text-white py-3.5 rounded-xl font-bold text-sm sm:text-base hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                Request a callback
              </button>
            </div>
          </form>
          {submitted && (
            <p className="mt-3 text-xs text-center text-primary font-semibold flex items-center justify-center gap-1">
               Opening WhatsApp chat with our counselling team...
            </p>
          )}
        </motion.div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {[
            { stat: "12 wk", desc: "Structured journey, 3 months" },
            { stat: "8", desc: "Curriculum modules" },
            { stat: "12 +", desc: "AI-native portfolio projects" },
            { stat: "W 1", desc: "Career track starts on day one" },
          ].map((item, i) => (
            <div 
              key={i} 
              className="p-5 sm:p-6 rounded-2xl bg-white border border-outline-variant/30 text-center shadow-soft flex flex-col items-center justify-center"
            >
              <span className="text-3xl sm:text-4xl font-black text-primary tracking-tight mb-1">
                {item.stat}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-on-surface-variant">
                {item.desc}
              </span>
            </div>
          ))}
        </div>

        {/* Anchor Quick Navigation */}
        <div className="overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex items-center gap-2 sm:gap-3 justify-start sm:justify-center min-w-max">
            {navAnchors.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="text-xs font-bold text-on-surface-variant hover:text-primary px-3 py-1.5 rounded-full bg-surface-container-low hover:bg-surface-container border border-outline-variant/30 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
