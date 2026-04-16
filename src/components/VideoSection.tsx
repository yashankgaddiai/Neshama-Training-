import { Play } from 'lucide-react';
import { motion } from 'motion/react';

export default function VideoSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-16 sm:py-24 px-4 sm:px-8 bg-surface-container-low"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">Watch: What You'll Build in 8 Weeks</h2>
        <p className="text-on-surface-variant mb-12">2-minute introduction · See the real projects students build</p>
        
        <div className="relative aspect-video bg-primary rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
            alt="Video Preview" 
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-primary shadow-xl"
            >
              <Play size={32} fill="currentColor" />
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent text-white text-left">
            <p className="font-bold text-xl">Free Preview: AI Product Demo</p>
          </div>
        </div>
        
        <button className="mt-12 text-primary font-bold flex items-center gap-2 mx-auto hover:underline">
          Watch free preview
        </button>
      </div>
    </motion.section>
  );
}
