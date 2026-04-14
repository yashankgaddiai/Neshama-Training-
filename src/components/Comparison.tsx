export default function Comparison() {
  const features = [
    { name: "Coding Speed", other: "Manual coding only", neshama: "10x with AI Pair Programming" },
    { name: "Debugging", other: "Hours on StackOverflow", neshama: "AI-driven root cause analysis" },
    { name: "UI Design", other: "Generic templates", neshama: "V0.dev & Modern Styling" },
    { name: "Portfolio", other: "Dead code on GitHub", neshama: "Live deployed SaaS apps" },
    { name: "Job Readiness", other: "Theory only", neshama: "Career Coaching Included" },
  ];

  return (
    <section className="py-32 px-8">
      <div className="max-w-5xl mx-auto overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-16 text-primary">Traditional Course vs. Neshama Training : AI Engineering Masterclass</h2>
        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-primary text-white">
                <th className="p-6 rounded-tl-lg font-bold">Features</th>
                <th className="p-6 font-bold">Other Courses</th>
                <th className="p-6 rounded-tr-lg font-bold bg-secondary text-primary">Neshama Training : AI Engineering Masterclass</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {features.map((feature, i) => (
                <tr key={i} className="border-b border-outline-variant">
                  <td className="p-6 font-bold">{feature.name}</td>
                  <td className="p-6 opacity-60">{feature.other}</td>
                  <td className="p-6 font-bold text-primary">{feature.neshama}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
