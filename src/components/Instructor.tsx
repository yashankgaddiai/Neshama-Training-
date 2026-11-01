import { useState } from 'react';
import { motion } from 'motion/react';

// Large 4:5 photo box. Falls back to the initials block if the image is missing.
function InstructorPhoto({ image, name, initials, imageClass }: { image?: string; name: string; initials: string; imageClass?: string }) {
  const [failed, setFailed] = useState(false);
  if (image && !failed) {
    return (
      <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-surface-container mb-6 border border-outline-variant/30 shadow-md">
        <img
          src={image}
          alt={name}
          onError={() => setFailed(true)}
          className={`w-full h-full object-cover object-top ${imageClass ?? ''}`}
        />
      </div>
    );
  }
  return (
    <div className="w-full aspect-[4/5] rounded-2xl bg-primary text-white flex items-center justify-center text-6xl font-black shadow-sm mb-6">
      {initials}
    </div>
  );
}

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
      image: "/instructors/murthy.jpg",
      badge: "25+ Years",
      name: "Murthy",
      role: "Product Manager · 25+ years of experience in software",
      tags: ["Product Management", "Software Delivery", "Industry Experience"]
    },
    {
      initials: "VM",
      image: "/instructors/vamshi.jpg",
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
              <InstructorPhoto image={inst.image} name={inst.name} initials={inst.initials} imageClass={(inst as { imageClass?: string }).imageClass} />
              <span className="self-start text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/70 shadow-2xs mb-4">
                {inst.badge}
              </span>

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
