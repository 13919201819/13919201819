"use client";

import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function DisclaimerPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative w-full py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div 
              className="absolute inset-0 z-0"
              style={{
                background: "radial-gradient(circle at 50% 30%, rgba(124, 58, 237, 0.12), transparent 60%)",
              }}
            />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 backdrop-blur-md mb-6">
                <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span className="text-red-300 text-xs font-bold uppercase tracking-widest">Legal Notice</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
                Global Disclaimer
              </h1>
              <p className="text-gray-400 text-lg">Last Updated: December 2024</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative w-full pb-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="prose prose-invert prose-purple max-w-none">
              
              {/* Important Notice */}
              <div className="mb-12 p-6 rounded-2xl bg-red-900/20 border border-red-500/30">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-white">Important:</strong> Please read this disclaimer carefully before using MistrAI Services. By accessing or using our Services, you acknowledge and accept all terms outlined below.
                  </p>
                </div>
              </div>

              {/* Section 1 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">1. No Professional Advice</h2>
                <p className="text-gray-300 leading-relaxed">
                  MistrAI Services and content do not constitute legal, financial, medical, investment, or professional advice. Users should consult qualified professionals for specific guidance related to their circumstances.
                </p>
              </div>

              {/* Section 2 */}
              <div className="mb-8 p-6 rounded-2xl bg-purple-900/20 border border-purple-500/30">
                <h2 className="text-2xl font-bold text-white mb-4">2. AI & Automation Disclaimer</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  AI-generated outputs may be incomplete, inaccurate, or impacted by third-party dependencies. Users assume full responsibility for decisions based on such outputs.
                </p>
                <p className="text-gray-300 leading-relaxed font-semibold">
                  All AI systems are probabilistic by nature and should not be relied upon as the sole basis for critical decisions.
                </p>
              </div>

              {/* Section 3 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">3. Third-Party Responsibility</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  MistrAI is not responsible for the availability, accuracy, or failures of third-party ML models, APIs, or infrastructure that our Services may rely upon.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Third-party services operate independently and may experience outages, errors, or discontinuation beyond our control.
                </p>
              </div>

              {/* Section 4 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">4. Use at Own Risk</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  All Services are provided as is and as available without warranties of any kind, either express or implied.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Use is at the customer&aposs sole risk, subject to contractual limitations outlined in our Terms and Conditions.
                </p>
              </div>

              {/* Section 5 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">5. Forward-Looking Statements</h2>
                <p className="text-gray-300 leading-relaxed">
                  Statements regarding future capabilities, performance, or plans are forward-looking and subject to uncertainty. Actual results may differ materially from any projections or expectations.
                </p>
              </div>

              {/* Section 6 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">6. No Guarantee of Outcomes</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  MistrAI does not guarantee:
                </p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>Accuracy or completeness of AI-generated outputs</li>
                  <li>Business, financial, regulatory, or operational outcomes</li>
                  <li>Continuous availability, uptime, or service continuity</li>
                  <li>Compatibility with all systems, platforms, or use cases</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Users are responsible for validating all outputs before implementation or use in critical systems.
                </p>
              </div>

              {/* Section 7 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-300 leading-relaxed">
                  To the maximum extent permitted by applicable law, MistrAI shall not be liable for any indirect, incidental, consequential, or punitive damages arising from the use or inability to use our Services.
                </p>
              </div>

              {/* Section 8 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">8. Changes to Services</h2>
                <p className="text-gray-300 leading-relaxed">
                  MistrAI reserves the right to modify, suspend, or discontinue any aspect of our Services at any time without prior notice or liability.
                </p>
              </div>

              {/* Final Notice */}
              <div className="mt-12 p-6 rounded-2xl bg-gray-900/40 backdrop-blur-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">Acceptance</h3>
                <p className="text-gray-300 leading-relaxed">
                  By using MistrAI Services, you acknowledge that you have read, understood, and agree to be bound by this Disclaimer in conjunction with our Terms and Conditions and Privacy Policy.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}