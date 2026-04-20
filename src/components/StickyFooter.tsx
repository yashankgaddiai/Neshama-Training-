import { motion } from 'motion/react';

export default function StickyFooter({ onEnroll }: { onEnroll: () => void }) {
  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-outline-variant/30 py-3 sm:py-4 px-4 sm:px-8 z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <div className="hidden sm:block">
          <h4 className="font-bold text-primary">Neshama Training : AI Engineering</h4>
          <p className="text-xs text-on-surface-variant font-medium">8 Weeks · Live + Recorded · Beginner Friendly</p>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onEnroll}
          className="w-full sm:w-auto bg-primary text-white px-8 py-3 rounded-full font-bold text-sm hover:shadow-lg transition-all"
        >
          👉 Enroll Now
        </motion.button>
      </div>
    </motion.div>
  );
}
