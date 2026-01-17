import React from 'react';

export default function VisionSection() {
  return (
    <section id="vision" className="relative w-full py-24 bg-black overflow-hidden">
      
      {/* Violet Storm Background with Top Glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(139, 92, 246, 0.25), transparent 70%), #000000",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-8">
        <h2 className="text-3xl font-bold text-white">Our Vision</h2>

        {/* Main Mission Statement */}
        <h3 className="text-xl md:text-2xl font-medium text-white max-w-3xl mx-auto">
          To help every business grow faster and operate smarter with trustworthy AI.
        </h3>

        {/* Detailed Description */}
        <div className="text-gray-400 max-w-3xl mx-auto space-y-4">
          <p>
            We build reliable, scalable solutions that reduce cost, increase
            speed, and unlock long-term value without the complexity.
          </p>
          <p>
            We transform industries through valuable, profitable products,
            platforms, and automations to satisfy business needs and increase
            user satisfaction across{" "}
            <span className="text-violet-400 font-medium">B2B, B2C, and D2C</span> levels.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 mb-12">
          {["Profit by Design", "Secure by Default", "Scalable with Zero Limit"].map(
            (title, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.1)] transition-all duration-300"
              >
                <h3 className="font-semibold mb-2 text-white">{title}</h3>
                <p className="text-gray-400 text-sm">
                  AI built around your P&L, governance and operational workflows.
                </p>
              </div>
            )
          )}
        </div>

        {/* Contact Us Button */}
        <div>
          <button className="px-8 py-3 rounded-full bg-violet-600 text-white font-medium hover:bg-violet-500 transition-colors shadow-[0_0_20px_rgba(139,92,246,0.3)]">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}