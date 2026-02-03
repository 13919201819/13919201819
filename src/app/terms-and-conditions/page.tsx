"use client";

import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function TermsAndConditionsPage() {
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-md mb-6">
                <span className="text-purple-300 text-xs font-bold uppercase tracking-widest">Legal</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
                Terms and Conditions
              </h1>
              <p className="text-gray-400 text-lg">Last Updated: December 2024</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative w-full pb-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="prose prose-invert prose-purple max-w-none">
              
              {/* Introduction */}
              <div className="mb-12 p-6 rounded-2xl bg-gray-900/40 backdrop-blur-xl border border-white/10">
                <p className="text-gray-300 leading-relaxed">
                  These Terms and Conditions govern access to and use of the websites, applications, platforms, products, software, APIs, AI agents, AI SaaS products, workflow automations, and related services (collectively, the "Services") provided by MistrAI, a subsidiary of CLUMOSS ("Company," "we," "us," or "our").
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  By accessing or using the Services, you acknowledge that you have read, understood, and agree to be legally bound by these Terms. If you do not agree, you must not access or use the Services.
                </p>
              </div>

              {/* Section 1 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">1. Company Overview & Scope</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  MistrAI is a product-based technology company specializing in the design, development, and delivery of:
                </p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>Customizable AI agents</li>
                  <li>AI SaaS products</li>
                  <li>Workflow automation solutions</li>
                  <li>AI platforms and enterprise systems</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Our products are built for global deployment and are offered to individuals, small and medium businesses, large enterprises, Fortune 100 companies, regulated industries, and institutional customers across all sectors.
                </p>
              </div>

              {/* Section 2 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">2. Global Availability & Non-Discrimination</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Our Services are offered globally and without discrimination of any kind, including but not limited to:
                </p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>Organization size (individuals, startups, SMEs, enterprises, Fortune 100)</li>
                  <li>Industry or sector (including BFSI, investment banking, healthcare, government, education, technology, manufacturing, retail, or others)</li>
                  <li>Geography, nationality, race, ethnicity, religion, gender, or any protected characteristic</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Access to Services is governed solely by lawful eligibility, technical feasibility, and contractual agreement.
                </p>
              </div>

              {/* Section 3 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">3. Acceptable Use & User Obligations</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  You agree to use the Services only for lawful, ethical, and authorized purposes. You shall not:
                </p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>Misuse Services for unlawful, harmful, or deceptive activities</li>
                  <li>Attempt unauthorized access, reverse engineering, or circumvention of safeguards</li>
                  <li>Upload malicious code or interfere with system integrity</li>
                  <li>Use Services in violation of applicable laws or regulations</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  We reserve the right to suspend or terminate access for violations without prior notice.
                </p>
              </div>

              {/* Section 4 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property Rights</h2>
                <p className="text-gray-300 leading-relaxed">
                  All intellectual property associated with the Services—including software, AI models, agents, workflows, architectures, designs, documentation, trademarks, and branding—are owned by MistrAI or its licensors and are protected under applicable global intellectual property laws.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  No ownership or license is granted except as expressly stated in a written agreement.
                </p>
              </div>

              {/* Section 5 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">5. Idea Submissions</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Any ideas, concepts, suggestions, or materials submitted to MistrAI are provided voluntarily and without expectation of compensation.
                </p>
                <p className="text-gray-300 leading-relaxed mb-2">Submission of ideas:</p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>Does not create a partnership, fiduciary duty, or contractual obligation</li>
                  <li>Does not guarantee confidentiality unless agreed in writing</li>
                  <li>Does not restrict MistrAI from independently developing similar ideas</li>
                </ul>
              </div>

              {/* Section 6 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">6. No Investment or Securities Solicitation</h2>
                <p className="text-gray-300 leading-relaxed">
                  Nothing on the Services constitutes an offer, solicitation, or recommendation to invest in securities or financial instruments. Any investment-related discussions occur only through separate, private, and legally governed processes.
                </p>
              </div>

              {/* Section 7 - Critical Clause */}
              <div className="mb-8 p-6 rounded-2xl bg-purple-900/20 border border-purple-500/30">
                <h2 className="text-2xl font-bold text-white mb-4">7. AI Systems & Third-Party Dependencies (Critical Clause)</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  MistrAI products may integrate or rely on third-party technologies, including but not limited to:
                </p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>Large language models (LLMs) and ML models</li>
                  <li>External APIs and services</li>
                  <li>Cloud infrastructure and data providers</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  These third-party services operate independently and may experience outages, errors, degradation, or discontinuation beyond our control.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4 font-semibold">
                  MistrAI does not guarantee the accuracy, availability, or continuity of outputs generated by third-party technologies.
                </p>
              </div>

              {/* Section 8 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  To the maximum extent permitted by applicable law:
                </p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>MistrAI shall not be liable for indirect, incidental, consequential, or punitive damages</li>
                  <li>MistrAI is not responsible for failures caused by third-party APIs, ML models, or infrastructure</li>
                  <li>MistrAI&apos;s total liability shall be strictly limited to the fees paid by the customer under the applicable subscription, agreement, or contract</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  No liability extends beyond the commercial agreement value.
                </p>
              </div>

              {/* Section 9 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">9. No Guarantee of Outcomes</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  AI systems are probabilistic by nature. MistrAI does not guarantee:
                </p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>Accuracy or completeness of outputs</li>
                  <li>Business, financial, regulatory, or operational outcomes</li>
                  <li>Continuous availability or uptime</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Customers are responsible for validating outputs before use.
                </p>
              </div>

              {/* Section 10 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">10. Governing Law & Jurisdiction</h2>
                <p className="text-gray-300 leading-relaxed">
                  These Terms shall be governed by the laws applicable to the principal place of business of CLUMOSS, without regard to conflict-of-law principles.
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