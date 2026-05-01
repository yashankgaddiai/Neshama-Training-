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
            src="https://res.cloudinary.com/dsqmjneyd/image/upload/v1777650190/1_emk2tm.jpg" 
            alt="AI Projects Showcase" 
            className="w-full h-auto object-cover"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </div>
      </div>
    </motion.section>
  );
}
