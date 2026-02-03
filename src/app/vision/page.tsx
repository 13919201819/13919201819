"use client";

//deployed

import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function VisionPage() {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute inset-0 z-0"
            style={{
              background: "radial-gradient(circle at 50% 30%, rgba(124, 58, 237, 0.12), transparent 60%)",
            }}
          />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
          {/* Section Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-purple-300 text-xs font-bold uppercase tracking-widest">Our Vision</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center text-white mb-8">
            Building AI Businesses <br />
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              That Endure
            </span>
          </h1>

          {/* Main Paragraph */}
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto mb-4">
            Our vision is to build AI businesses that move beyond experimentation and become essential to how organizations operate. We focus on creating AI agents, SaaS products, workflow automations, and platforms that deliver measurable value, integrate deeply into enterprise systems, and scale responsibly over time.
          </p>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto">
            Every product is designed with longevity, capital discipline, and real-world utility at its core.
          </p>
        </div>
      </section>

      {/* Supporting Pillars Section */}
      <section className="relative w-full py-16 md:py-24 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Pillar 1 */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition duration-500"></div>
              <div className="relative p-8 md:p-10 rounded-2xl bg-gray-900/40 backdrop-blur-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 h-full">
                {/* Icon */}
                <div className="mb-6 inline-flex p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  Enterprise First
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  We prioritize reliability, security, and usability so our AI solutions can operate at the heart of complex, real-world environments.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition duration-500"></div>
              <div className="relative p-8 md:p-10 rounded-2xl bg-gray-900/40 backdrop-blur-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 h-full">
                {/* Icon */}
                <div className="mb-6 inline-flex p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  Value Over Volume
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Success is measured by sustained adoption and business impact—not vanity metrics or short-term growth.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition duration-500"></div>
              <div className="relative p-8 md:p-10 rounded-2xl bg-gray-900/40 backdrop-blur-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 h-full">
                {/* Icon */}
                <div className="mb-6 inline-flex p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  Compounding Design
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Each product is built to strengthen over time, creating long-term value for customers, partners, and capital stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Decorative Section */}
      <section className="relative w-full py-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}