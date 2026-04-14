export default function Stats() {
  const stats = [
    { label: "Job-Ready Skills", value: "100%" },
    { label: "Industry Tools", value: "20+" },
    { label: "Live Deployed Projects", value: "Live" },
  ];

  return (
    <section className="bg-surface-container-low py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="text-4xl font-black text-primary tracking-tight">{stat.value}</span>
              <span className="text-sm uppercase tracking-widest font-bold text-outline">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
