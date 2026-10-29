import { motion } from 'motion/react';

export default function Instructor() {
  const instructors = [
    {
      initials: "VP",
      image: "/instructors/prithvi.jpg",
      badge: "Founder & CTO",
      name: "Venkata Prithvi Krishna Palle",
      role: "Founder & CTO @ Vaulth AI",
      tags: ["AI Products", "Engineering Leadership", "AI Systems"],
      linkedin: "https://www.linkedin.com/in/venkata-palle"
    },
    {
      initials: "M",
      badge: "30+ Years",
      name: "Murthy",
      role: "Product Manager · 30+ years of experience in software",
      tags: ["Product Management", "Software Delivery", "Industry Experience"]
    },
    {
      initials: "VM",
      badge: "DataOps & Python",
      name: "Vamshi Maraboina",
      role: "Senior Analyst · DataOps Automation Engineer · Python Developer",
      tags: ["Python", "DataOps", "Automation"]
    }
  ];

  return (
    <motion.section 
      id="instructors"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 sm:py-32 px-4 sm:px-8 bg-surface-container-low"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase text-[0.75rem] tracking-[0.2em] mb-3 block">
            Learn From Practitioners
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
            Meet Your Instructors
          </h2>
          <p className="text-base sm:text-lg text-on-surface-variant">
            Engineers and product leaders who build, ship and run software for a living.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {instructors.map((inst, i) => (
            <div 
              key={i} 
              className="p-8 rounded-3xl bg-white border border-outline-variant/30 shadow-soft hover:shadow-md transition-shadow flex flex-col group"
            >
              <div className="flex items-center justify-between mb-6">
                {inst.image ? (
                  <div className="relative">
                    <img 
                      src={inst.image} 
                      alt={inst.name} 
                      className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl object-cover object-top border-2 border-primary/20 shadow-md group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-primary text-white flex items-center justify-center text-xl font-black shadow-sm">
                    {inst.initials}
                  </div>
                )}
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/70 shadow-2xs">
                  {inst.badge}
                </span>
              </div>

              <h3 className="text-xl font-bold text-primary mb-2">
                {inst.name}
              </h3>
              <p className="text-sm font-semibold text-on-surface-variant mb-6 leading-relaxed">
                {inst.role}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {inst.tags.map((tag, j) => (
                  <span 
                    key={j} 
                    className="text-xs font-semibold px-3 py-1 rounded-lg bg-surface-container text-primary border border-outline-variant/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
