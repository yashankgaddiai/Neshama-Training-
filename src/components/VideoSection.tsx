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
        <h2 className="text-3xl font-bold text-primary mb-4">What You'll Build in 8 Weeks</h2>
        <p className="text-on-surface-variant mb-12">Take a look at the real-world products and AI solutions you'll master</p>
        
        <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500">
          <img 
            src="/images/1.jpg" 
            alt="AI Projects Showcase" 
            className="w-full h-auto object-cover"
            referrerPolicy="no-referrer"
            loading="lazy"
            onError={(e) => {
              // Fallback to placeholder if image fails to load during transition
              const target = e.target as HTMLImageElement;
              if (!target.src.includes('unsplash')) {
                target.src = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop';
              }
            }}
          />
        </div>
      </div>
    </motion.section>
  );
}
