import { motion } from 'motion/react';

export default function TopBanner({ onEnroll }: { onEnroll: () => void }) {
  return (
    <div className="bg-primary text-white py-2.5 px-4 text-center relative z-[60] border-b border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-medium">
        <span>
          New batch enrolling now — <strong>3-Month Full-Stack AI Engineering</strong>
        </span>
        <span className="hidden sm:inline opacity-40">•</span>
        <span className="text-secondary font-semibold">Save ₹45,000 · Scholarships available</span>
        <span className="hidden sm:inline opacity-40">•</span>
        <button 
          onClick={onEnroll}
          className="text-white hover:text-secondary underline underline-offset-4 font-bold flex items-center gap-1 transition-colors"
        >
          Book a free counselling call
        </button>
      </div>
    </div>
  );
}
