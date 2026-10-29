import { motion } from 'motion/react';

export default function RolesAndInterviews() {
  const roles = [
    {
      title: "AI Engineer",
      skills: ["LLM applications", "RAG systems", "Agents + AI integrations"]
    },
    {
      title: "Full-Stack AI Developer",
      skills: ["React + Python", "AI backends + interfaces", "Deployment"]
    },
    {
      title: "LLM Application Developer",
      skills: ["Model APIs", "Prompt engineering", "Function calling + streaming"]
    },
    {
      title: "AI Application Engineer",
      skills: ["AI integration + APIs", "Data + AI workflows", "Production readiness"]
    },
    {
      title: "AI Automation Engineer",
      skills: ["Agents + tools", "MCP", "Workflow automation"]
    },
    {
      title: "AI Product Engineer",
      skills: ["AI feature design", "Full-stack delivery", "Architecture + shipping"]
    }
  ];

  const prepTracks = [
    {
      title: "Technical Interviews",
      items: [
        "Python + JavaScript / React",
        "APIs + databases",
        "LLMs + RAG",
        "Agents + MCP"
      ]
    },
    {
      title: "AI Engineering Discussion",
      items: [
        "Explain AI architecture + RAG",
        "Explain vector search",
        "Explain agent workflows + model choices",
        "Discuss production trade-offs"
      ]
    },
    {
      title: "Mock Interviews",
      items: [
        "Technical mock interview",
        "AI engineering mock",
        "Project defense",
        "HR / communication practice"
      ]
    },
    {
      title: "Corporate Readiness",
      items: [
        "Professional communication",
        "Email etiquette + meetings",
        "Team collaboration + Agile workflow",
        "Technical presentation"
      ]
    }
  ];

  return (
    <motion.section 
      id="roles"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 sm:py-32 px-4 sm:px-8 bg-surface-container-low"
    >
      <div className="max-w-7xl mx-auto">
        {/* Roles Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase text-[0.75rem] tracking-[0.2em] mb-3 block">
            Software Engineering + AI Application Delivery
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
            Interview-Ready Roles
          </h2>
          <p className="text-base sm:text-lg text-on-surface-variant">
            Build capabilities for roles across AI applications, full-stack development, automation and product engineering.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {roles.map((role, i) => (
            <div 
              key={i} 
              className="p-7 rounded-3xl bg-white border border-outline-variant/30 shadow-soft flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-surface-container text-primary">
                  
                </div>
                <h3 className="text-lg font-bold text-primary">{role.title}</h3>
              </div>
              <ul className="space-y-2 mt-auto">
                {role.skills.map((skill, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs sm:text-sm text-on-surface-variant font-medium">
                    
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mock Interviews & Corporate Readiness */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase text-[0.75rem] tracking-[0.2em] mb-3 block">
            Practice Alongside the Technical Curriculum
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary mb-4">
            Mock Interviews & Corporate Readiness
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {prepTracks.map((track, i) => (
            <div 
              key={i} 
              className="p-6 rounded-3xl bg-white border border-outline-variant/30 shadow-soft flex flex-col"
            >
              <h3 className="text-lg font-bold text-primary mb-4">{track.title}</h3>
              <ul className="space-y-2.5 mt-auto">
                {track.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-on-surface-variant font-medium">
                    <span className="text-secondary font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
