export default function Projects() {
  const projects = [
    {
      title: "Intelligent AI Chatbot",
      description: "Enterprise-grade RAG chatbot with source citation and context awareness.",
      stack: "LangChain, OpenAI, Pinecone",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWZNfvTJXZfvFojx1bC_ao-lNOMDfecO5GHEO1unU90kW8TsH2hpCikmlRIchbrWLYexyqgDjw448Dz93xHVTl5Rb6qiaoUqojPuiDnqtEqJLysKS8UAadjpXr_mGotixgTvnG3UJjTkL7mW5KgwNOYor68ywEWlyAvEBkawQiLZQP8h-LPEnYVxjLQIbub1s21j7MWhx9mjw6N8Jn4omwCv40NBuRh-Iw32_vDWaeMZ1T8AHaJq1JJi8S8amZPF_xP6uI3J6Tv3c"
    },
    {
      title: "Workflow Automation System",
      description: "Multi-agent system that automates content creation and data analysis pipelines.",
      stack: "Python, CrewAI, Make.com",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGwVuzE1eTb9bFk30_J2p6G5sK2ecP4qQUqNwflItlraI1qmOSqJm0l_ukJE4NvejIzog6bLbz3b0FCKc6-DGgylEtBUrvmGpp_8aKaEMXyrpzaQOUDxfvo5I_s1cy3y7GKzv3-_p-odz4S3z1JgnWK5T5mk5rSvfbPxjawMdhL3ldMtTNFqzJAEW9vwecrYGqYc6HW4KkNWLdGaS9YJ4TaQznIcZzvqG9ClpZJZv8eSYzPCn3DACXDRsP61thsb6ZFdtrPbUq7I8"
    },
    {
      title: "AI-Powered Full-Stack Web App",
      description: "A complete SaaS application with user auth, payments, and AI core features.",
      stack: "Next.js, Stripe, Clerk",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSPXX-twARGq1hHJ4K7wsNkx-RDLhxQt7LYlnHGWCETA9a3zCtOVsO-DZbkpvDJdvb-pYPjqIW0hYYziJ4kHCRWVAUg6aDiveESmKtBGZgKuCrAGrdxdGG1lKZ7q7dihe-DCwk0ku_CTJBP0NxfRTXZju-Crb3oZJ2lOhTVZo5KB46WewYxKoZwstO3ms0_G1uiYUMWuDepf8N_k44XNDh_-L6JYjr0trrqsIWgsrpFeb8Plc19YSrKaDoZez5jfMKdGLjL2v73ZU"
    },
    {
      title: "Scalable AI SaaS Product",
      description: "Production deployment focusing on low latency and cost-optimized inference.",
      stack: "Docker, AWS, HuggingFace",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMg3I8mjWb1kgeuBrmrGGD5JKTpv5HEKzkI4mLlgsKu85xEnTogeogh-B8yXZ0l5bCQBX9aaGtYLjPQZSHnNfwoxnOKvfVS8l-Mev81lKWEdsxbWhk2Sn1q4ldjvw-J_E3azJrJYKie773cgPsvoA99gH6Uz3Wpz2DvXIR7vM2deov6-Xi0uQLcdZ3Vo9_SsJEMz09rnZus9g8lZWMYr9yksRsI_Sez938cszxGLcByKwzz7vr1CWUW6FkHcHgtOmSbISo7eUmXEs"
    }
  ];

  return (
    <section className="py-32 px-8 bg-surface-container-low" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <span className="text-primary font-bold uppercase text-[0.75rem] tracking-[0.2em] mb-4 block">
            Proof of Concept
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-primary">
            Real Projects. Not Toy Examples.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="group bg-white rounded-lg overflow-hidden shadow-soft hover:shadow-xl transition-all duration-500">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-on-surface-variant mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <span className="text-xs font-black uppercase text-primary">Stack: {project.stack}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
