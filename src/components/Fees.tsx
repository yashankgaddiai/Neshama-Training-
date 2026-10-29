import { motion } from 'motion/react';

export default function Fees({ onEnroll }: { onEnroll: () => void }) {
  const highlights = [
    "8 modules, 12 weeks",
    "12 AI-native projects",
    "Live AI engineering sessions",
    "Recorded Python + MERN",
    "Career track from Week 1",
    "Mock interviews",
    "Corporate readiness",
    "Certificate of completion"
  ];

  const bookSeatUrl = "https://wa.me/918143459888?text=" + encodeURIComponent("Hi, I'd like to book a seat in the Full-Stack AI Engineering program");

  return (
    <motion.section 
      id="fees"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 sm:py-32 px-4 sm:px-8 bg-surface-container-low"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase text-[0.75rem] tracking-[0.2em] mb-3 block">
            Your Next Step Towards AI Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
            Program Fees
          </h2>
          <p className="text-base sm:text-lg text-on-surface-variant">
            A complete 3-month learning journey in full-stack AI engineering.
          </p>
        </div>

        {/* Main Pricing Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-outline-variant/30 shadow-xl mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-outline-variant/20">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full bg-secondary/15 text-primary text-xs font-bold uppercase tracking-wider mb-2 border border-secondary/30">
                Python + MERN + GenAI
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                3-Month Full-Stack AI Engineering
              </h3>
              <p className="text-sm text-on-surface-variant font-medium">
                Live AI engineering + recorded foundations + career track
              </p>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-sm line-through text-on-surface-variant block font-medium">
                ₹1,00,000
              </span>
              <div className="text-4xl sm:text-5xl font-black text-primary tracking-tight">
                ₹55,000
              </div>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-2.5 py-0.5 rounded-full border border-secondary/20 mt-1">
                SAVE ₹45,000 · 45% OFF
              </span>
              <p className="text-[11px] text-on-surface-variant mt-1">All prices are inclusive of taxes.</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3.5 mb-10">
            {highlights.map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 text-sm font-semibold text-primary">
                
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onEnroll}
              className="flex-1 bg-primary text-white py-4 rounded-full font-bold text-base hover:shadow-xl transition-all text-center"
            >
              Apply Now
            </motion.button>
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={bookSeatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border-2 border-primary/20 hover:border-primary text-primary py-4 rounded-full font-bold text-base hover:bg-surface-container-low transition-all text-center"
            >
              Book Your Seat
            </motion.a>
          </div>
        </div>

        {/* Scholarships & EMI & Counsellor details */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl bg-white border border-outline-variant/30 shadow-soft flex flex-col">
            <h4 className="text-base font-bold text-primary mb-2">Scholarships & Exclusive Discounts</h4>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Explore available scholarships or exclusive discounts. Speak with our counsellor to learn more about eligibility and current offers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-outline-variant/30 shadow-soft flex flex-col">
            <h4 className="text-base font-bold text-primary mb-2">Easy EMI Options</h4>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Flexible payment options are available to make high-impact AI upskilling accessible.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-outline-variant/30 shadow-soft flex flex-col">
            <h4 className="text-base font-bold text-primary mb-2">Plan your enrolment</h4>
            <div className="space-y-1.5 mt-auto">
              <a href="tel:+918143459888" className="text-xs sm:text-sm font-bold text-primary hover:text-secondary block">
                +91 81434 59888
              </a>
              <a href="tel:+919550143619" className="text-xs sm:text-sm font-bold text-primary hover:text-secondary block">
                +91 95501 43619
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
