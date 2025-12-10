export default function VisionSection() {
  return (
    <section id="vision" className="py-20 bg-black/30 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-3xl font-bold">Our Vision</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We create symbiotic growth—AI that benefits both businesses and
          customers by enhancing efficiency, profitability and long-term
          scalability.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {["Profit by Design", "Secure by Default", "Scalable with Zero Limit"].map(
            (title, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white/5 border border-white/10"
              >
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-gray-400 text-sm">
                  AI built around your P&L, governance and operational workflows.
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
