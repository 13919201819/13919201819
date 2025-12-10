export default function BenefitsSection() {
  const benefits = [
    {
      title: "Revenue Intelligence Engine",
      desc: "Forecast sales, demand & pricing with accuracy.",
    },
    {
      title: "AI Sales & CPQ Copilot",
      desc: "Convert leads to quotes instantly using LLM automation.",
    },
    {
      title: "Operations Automation Fabric",
      desc: "Automate repetitive workflows across the org.",
    },
  ];

  return (
    <section id="products" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Our AI SaaS Products</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white/5 border border-white/10"
            >
              <h3 className="font-semibold">{b.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
