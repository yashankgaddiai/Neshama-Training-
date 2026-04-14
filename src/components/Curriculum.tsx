import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Curriculum() {
  const phases = [
    {
      id: "phase-1",
      title: "Phase 1",
      subtitle: "Corporate Skills",
      headline: "Become Corporate-Ready from Day One",
      description: "Master real-world corporate workflows and collaboration tools to work like a developer.",
      details: [
        "Understand SDLC & Agile methodologies",
        "Run Scrum meetings and manage projects",
        "Collaborate using industry-standard tools",
        "Build a professional GitHub portfolio"
      ],
      deliverables: "Corporate workflow simulation certificate · Team-based GitHub projects · Industry-ready collaboration experience",
      tools: ["GitHub", "Jira", "Microsoft Teams", "LinkedIn"]
    },
    {
      id: "phase-2",
      title: "Phase 2",
      subtitle: "AI Foundations",
      headline: "Master the Power of Artificial Intelligence",
      description: "Leverage cutting-edge AI tools to build intelligent solutions. Learn Generative AI, Prompt Engineering, Custom GPTs, and RAG pipelines.",
      details: [
        "Master Prompt Engineering techniques",
        "Build & deploy Custom GPTs",
        "Conduct AI-powered research & automation",
        "Create professional presentations using AI"
      ],
      deliverables: "Custom AI agents · AI-powered projects · Voice cloning demonstrations",
      tools: ["ChatGPT", "Claude Code", "NotebookLM", "Gamma AI", "Voice Cloning AI"]
    },
    {
      id: "phase-3",
      title: "Phase 3",
      subtitle: "AI Dev Tools",
      headline: "Build Faster with AI-Powered Development",
      description: "Accelerate development using modern AI coding and design tools. Use AI-Assisted Development to write, debug, and ship production-ready code at speed.",
      details: [
        "Build applications using AI-assisted coding",
        "Generate UI designs with AI tools",
        "Debug and optimize code efficiently",
        "Streamline workflows using intelligent assistants"
      ],
      deliverables: "AI-assisted development projects · Intelligent UI prototypes · Optimized production-ready code",
      tools: ["Cursor AI", "Claude Code", "Kilo Code", "Anti-Gravity", "Google AI Studio", "Lovable", "V0"]
    },
    {
      id: "phase-4",
      title: "Phase 4",
      subtitle: "Build Real Apps, AI Coding Tools & Deployment",
      headline: "Build, Deploy & Scale Real-World Applications",
      description: "Develop, deploy, and scale production-ready AI-powered applications. Build a full-stack app with frontend, backend, and AI integration.",
      details: [
        "Build responsive front-end interfaces",
        "Develop scalable backend systems",
        "Integrate databases & authentication",
        "Deploy AI SaaS MVPs live on the internet"
      ],
      projects: [
        { title: "AI Chatbot with RAG", desc: "A smart chatbot that answers questions from your own documents using a live RAG pipeline" },
        { title: "Custom GPT Tool", desc: "Your own AI assistant trained on custom instructions and connected to real tools via MCP" },
        { title: "AI-Powered Full-Stack Web App", desc: "Next.js app with AI features, user auth, and a live database — deployed on Vercel" },
        { title: "AI SaaS MVP", desc: "A production-grade SaaS product with scalable backend, AI integration, and live deployment" }
      ],
      deliverables: "Full-stack AI applications · AI SaaS MVPs · Live deployed projects",
      tools: ["Next.js", "Tailwind CSS", "Node.js", "Express", "Supabase", "Firebase", "Replit", "Vercel", "Render"]
    },
    {
      id: "phase-5",
      title: "Phase 5",
      subtitle: "Portfolio",
      headline: "Build a Portfolio That Gets You Hired",
      description: "Showcase your expertise through real-world projects and professional case studies. Turn everything you built into an undeniable hiring asset.",
      details: [
        "Create a professional portfolio website",
        "Document real-world AI projects",
        "Prepare for technical interviews",
        "Present deployed apps confidently"
      ],
      covered: [
        { title: "LinkedIn Optimisation", desc: "Full profile rewrite — headline, about, skills, featured section — so recruiters find you" },
        { title: "Portfolio Website", desc: "Live site with all AI projects, case studies, and demo videos" },
        { title: "GitHub Profile", desc: "Pinned repos, README, and contribution graph that signal active builder" },
        { title: "Resume for AI Roles", desc: "1-page resume with AI keywords and project outcomes that pass ATS" },
        { title: "Mock Interviews", desc: "Live technical and behavioural practice with real feedback from industry coaches" },
        { title: "Job Outreach", desc: "Cold message templates and a target company list — outreach starts before the course ends" }
      ],
      deliverables: "Portfolio website with live projects · Documented case studies · Recorded demo videos · Interview-ready presentations",
      tools: ["GitHub", "Portfolio Templates"]
    }
  ];

  const scrollToPhase = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-32 px-8" id="curriculum">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <span className="text-primary font-bold uppercase text-[0.75rem] tracking-[0.2em] mb-4 block">
            🧩 Curriculum (5 Phases)
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-primary mb-12">
            The 8-Week AI Engineering Roadmap
          </h2>

          {/* Progress Bar */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="flex justify-between mb-4 text-xs font-black uppercase tracking-widest text-primary">
              <span>Week 1</span>
              <span>Week 4</span>
              <span>Week 8</span>
            </div>
            <div className="h-4 bg-surface-container-low rounded-full overflow-hidden border border-outline-variant/30 p-1">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="h-full bg-primary rounded-full relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
              </motion.div>
            </div>
            <div className="grid grid-cols-5 mt-4 gap-2">
              {phases.map((phase, i) => (
                <div key={i} className="text-center">
                  <div className="text-[10px] font-bold text-outline uppercase">Phase {i + 1}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {phases.map((phase, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={() => scrollToPhase(phase.id)}
              className="p-8 rounded-2xl bg-surface-container-low border-l-8 border-primary hover:shadow-soft transition-all duration-300 cursor-pointer group"
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-primary font-black text-sm uppercase mb-2 block">{phase.title}</span>
                  <h3 className="text-xl font-bold mb-4 text-primary">{phase.subtitle}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-4">{phase.description}</p>
                  <span className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Details <ChevronRight size={16} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Breakdown Section */}
        <div className="space-y-32">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Detailed Phase Breakdown</h2>
            <p className="text-on-surface-variant">5 phases. Step by step. Zero fluff.</p>
          </div>
          
          {phases.map((phase, i) => (
            <div key={i} id={phase.id} className="scroll-mt-32">
              <div className="grid lg:grid-cols-3 gap-12 items-start">
                <div className="lg:col-span-1">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-black text-xl mb-6">
                    {i + 1}
                  </div>
                  <span className="text-primary font-black text-sm uppercase mb-2 block">{phase.title} — {phase.subtitle}</span>
                  <h3 className="text-3xl font-bold text-primary mb-4">{phase.headline}</h3>
                  <p className="text-on-surface-variant mb-8">{phase.description}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-3">Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {phase.tools.map((tool, t) => (
                          <span key={t} className="px-3 py-1 bg-surface-container-high rounded-full text-[10px] font-bold text-primary border border-outline-variant/30">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-3">Deliverables</h4>
                      <p className="text-xs font-medium text-on-surface-variant leading-relaxed italic">
                        {phase.deliverables}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-2 space-y-8">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {phase.details.map((detail, j) => (
                      <div key={j} className="flex items-center gap-4 p-6 bg-surface-container-low rounded-xl border border-outline-variant/30">
                        <div className="w-6 h-6 rounded-full bg-secondary text-primary flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                          {j + 1}
                        </div>
                        <span className="text-sm font-bold text-primary">{detail}</span>
                      </div>
                    ))}
                  </div>

                  {phase.projects && (
                    <div className="mt-12">
                      <h4 className="text-xl font-bold text-primary mb-6 flex items-center gap-3">
                        <span className="w-8 h-1 bg-secondary rounded-full"></span>
                        AI Projects You'll Build
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-6">
                        {phase.projects.map((project, p) => (
                          <div key={p} className="p-6 bg-primary text-white rounded-2xl shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-4xl group-hover:scale-110 transition-transform">0{p + 1}</div>
                            <h5 className="font-bold text-lg mb-2 relative z-10">{project.title}</h5>
                            <p className="text-xs text-white/70 leading-relaxed relative z-10">{project.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {phase.covered && (
                    <div className="mt-12">
                      <h4 className="text-xl font-bold text-primary mb-6 flex items-center gap-3">
                        <span className="w-8 h-1 bg-secondary rounded-full"></span>
                        What's Covered
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-6">
                        {phase.covered.map((item, c) => (
                          <div key={c} className="flex gap-4 items-start">
                            <div className="text-secondary font-bold text-xl">✦</div>
                            <div>
                              <h5 className="font-bold text-primary mb-1">{item.title}</h5>
                              <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
