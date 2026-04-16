import { motion } from 'motion/react';

export default function Tools() {
  const tools = [
    { name: "ChatGPT", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
    { name: "Claude", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Claude_AI_logo.svg" },
    { name: "Claude Code", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Claude_AI_logo.svg" },
    { name: "Cursor AI", logo: "https://mintlify.s3-us-west-1.amazonaws.com/cursor/logo/light.svg" },
    { name: "Gemini", logo: "https://www.gstatic.com/lamda/images/favicon_v2_711627451e0535799c27.png" },
    { name: "MCP", logo: "https://modelcontextprotocol.io/favicon.ico" },
    { name: "NotebookLM", logo: "https://notebooklm.google/favicon.ico" },
    { name: "Lovable", logo: "https://lovable.dev/favicon.ico" },
    { name: "V0", logo: "https://v0.dev/favicon.ico" },
    { name: "Gamma AI", logo: "https://gamma.app/favicon.ico" },
    { name: "Replit", logo: "https://cdn.worldvectorlogo.com/logos/replit.svg" },
    { name: "Google AI Studio", logo: "https://www.gstatic.com/lamda/images/favicon_v2_711627451e0535799c27.png" },
    { name: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
    { name: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
    { name: "Tailwind", logo: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
    { name: "Supabase", logo: "https://cdn.worldvectorlogo.com/logos/supabase.svg" },
    { name: "Firebase", logo: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg" },
    { name: "Vercel", logo: "https://cdn.worldvectorlogo.com/logos/vercel.svg" },
    { name: "GitHub", logo: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" },
    { name: "Jira", logo: "https://cdn.worldvectorlogo.com/logos/jira-1.svg" },
  ];

  // Split tools into two rows for a more dynamic animation
  const row1 = tools.slice(0, 10);
  const row2 = tools.slice(10);

  const ToolCard = ({ tool }: { tool: typeof tools[0] }) => (
    <motion.div 
      whileHover={{ y: -5, scale: 1.05 }}
      className="flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-soft border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 group cursor-default flex-shrink-0"
    >
      <div className="w-8 h-8 flex items-center justify-center overflow-hidden">
        <img 
          src={tool.logo} 
          alt={tool.name} 
          className="w-full h-full object-contain transition-all duration-300"
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>
      <span className="font-bold text-primary">{tool.name}</span>
    </motion.div>
  );

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-8 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase text-[0.75rem] tracking-[0.2em] mb-4 block">
            🛠 Tools Covered
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-primary">Master the Modern AI Stack</h2>
        </div>
      </div>

      <div className="space-y-8">
        {/* Row 1: Moving Left */}
        <div className="relative flex overflow-hidden">
          <motion.div 
            className="flex gap-6 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {[...row1, ...row1, ...row1, ...row1].map((tool, i) => (
              <div key={`row1-${i}`}>
                <ToolCard tool={tool} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Moving Right */}
        <div className="relative flex overflow-hidden">
          <motion.div 
            className="flex gap-6 whitespace-nowrap"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ 
              duration: 35, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {[...row2, ...row2, ...row2, ...row2].map((tool, i) => (
              <div key={`row2-${i}`}>
                <ToolCard tool={tool} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
