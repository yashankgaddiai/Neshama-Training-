import { motion } from 'motion/react';

export default function Instructor() {
  const teachers = [
    {
      role: "Senior AI Architect",
      expertise: "Expertise in Generative AI, LLMs, RAG, and Prompt Engineering.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvUgiHsvfaw-S5kbm2HeOFDMnYaWOXE9cRyWndMv7l93biB8N060ZRG-SyQHRde0XAdPDYOpiQPDNnFtl5zyVj3Eku9JOxAtCmEsU8ANtIn1xoE0U6HWZ3FKJMK1WA-RrmeeuPeYAnYg_ccOyU86b7H4eiREnHVNro6oxGmWTs4Nt8xY_tQa4Xmfhi9HaeChbgoxrHHT0VKkmZSL0YW6H6H-3qQ-7EcBElEK0eOgfyk2g8k1iQkJiTfDQdi5la0EvOtK-qAEbfOlw"
    },
    {
      role: "Full-Stack AI Engineer",
      expertise: "Specialist in AI-assisted development and production-grade AI products.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCO1m0qMU5Na94VgAMi00GcmH-ppXQSzmebzmN8zPssvbFEid-oMBRDwkgipE-uPIHmwAL5f5viif_4Jv6Mgwg2-t5ER7Co2ebR_GMLDTl1WNod3KwkYZS_bqzoZ3aw59f96RXq8Y-mN7XOg4RI1cJJ5ROfNaamcU-a7Z-yzSi_uslalNLkHLeeiQnOtJ7v77zX-dsqKTkrq3qIgLbDQzyOOSX87TwIUGM2nkSoYUMu-5Xj5d1nl8Ikg_ftMNSs4UUytTDklZSlKJQ"
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 sm:py-32 px-4 sm:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <span className="text-primary font-bold uppercase text-[0.7rem] sm:text-[0.75rem] tracking-[0.2em] mb-4 block">
            👨‍🏫 Your Teachers
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary mb-6">Learn from IT professionals with 20+ years of experience</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          {teachers.map((teacher, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center p-6 sm:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shadow-xl flex-shrink-0">
                <img 
                  src={teacher.image} 
                  alt={teacher.role} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">{teacher.role}</h3>
                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">{teacher.expertise}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
