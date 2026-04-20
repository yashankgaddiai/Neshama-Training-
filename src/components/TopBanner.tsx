import { motion } from 'motion/react';

export default function TopBanner({ onEnroll }: { onEnroll: () => void }) {
  return (
    <div className="bg-primary text-white py-3 px-4 text-center relative z-[60]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
        <p className="text-sm font-medium">
          🔥 The #1 Skill Hiring Managers Want in 2026 —  AI Engineering
        </p>
        <button 
          onClick={onEnroll}
          className="text-secondary font-bold text-sm hover:underline flex items-center gap-1"
        >
          👉 Enroll Now
        </button>
      </div>
    </div>
  );
}
