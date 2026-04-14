import { Hammer, Rocket, Layout, Briefcase } from 'lucide-react';

export default function Solution() {
  const features = [
    {
      icon: <Hammer size={20} />,
      title: "Build Real-World Apps",
      description: "Stop coding 'To-Do' lists. Build complex, RAG-enabled systems that solve business problems."
    },
    {
      icon: <Rocket size={20} />,
      title: "Deploy Production-Ready",
      description: "Learn the CI/CD pipelines used by top tech firms to ship robust AI products at scale."
    },
    {
      icon: <Layout size={20} />,
      title: "Master 20+ Tools",
      description: "From LangChain and Vercel to Pinecone and Cursor. The modern engineer's toolkit."
    },
    {
      icon: <Briefcase size={20} />,
      title: "Get Hired",
      description: "A portfolio that proves your expertise with live, interactive demos for hiring managers."
    }
  ];

  return (
    <section className="py-32 px-8 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDyqXtLoid9Nc-8zkKP38tSTlJNbZoaUlYBH9GstGUD6lMlVHOjTxQFAj35xiXQFW2js_IGVfxseQKk_p0o4TM8A8fh41WrI09Gpo53Zp9O1-eEFkUkDp6ADZgskKf8KqlQHWaxwf82OhhCgk5W0xOssqclVXw9tvU-qmVulIH2FAXF4ubwziYtGGNlsge5qaSaQT84_2cC-wfjewoY_MVFD8jCKDvjAoPC7TN4i2hU7qVTwCwuhqGlSv3xP3VcewRW8Kv9UkdyCc" 
          alt="Neural Network Pattern" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-secondary font-bold uppercase text-[0.75rem] tracking-[0.2em] mb-4 block">
              The Roadmap
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
              What You Will Actually Build & Become
            </h2>
            <div className="space-y-8">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-10 h-10 flex-shrink-0 rounded-full bg-secondary text-primary flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                    <p className="text-white/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-surface-container-lowest/10 backdrop-blur-xl p-8 rounded-lg">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9ZRGE2VDgMeLc_2Uy1RMXK3yF4DZ0MEvCwZC0oJzSWYWeC6Qnv3CjUXJFK2WYOH3biri44WUOQjMk9Iz1d-Rcqb_emnJvGLwoceZuU-biHMi1Xd-HWMfqQwd5KjEye93SWJn42DeF2Jy-8TFMinZO5kt6LbdySZiHcWRMDe4W09ThDmWsCtZiAmGZCgvz6gZNsl59kkNQx4ugaLTQ40bRIcqvpTtsEluN8OCdsPDlPcyjx6mek6nLmsFVkDnzQFJ4pJkeCzyLSiY" 
              alt="Coding Interface" 
              className="rounded-lg shadow-2xl mb-8"
              referrerPolicy="no-referrer"
            />
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-secondary text-2xl font-bold">12 Weeks</div>
                <div className="text-sm opacity-60">Immersive Duration</div>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-secondary text-2xl font-bold">48 Hours</div>
                <div className="text-sm opacity-60">Live Sessions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
