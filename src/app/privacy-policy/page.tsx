"use client";

import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PrivacyPolicyPage() {
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
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-purple-300 text-xs font-bold uppercase tracking-widest">Privacy & Data Protection</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
                Global Privacy Policy
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
                <p className="text-gray-300 leading-relaxed text-lg">
                  This Privacy Policy applies globally to all users of MistrAI Services. We are committed to protecting your privacy and handling your data with transparency, security, and respect.
                </p>
              </div>

              {/* Section 1 */}
              <div className="mb-8 p-6 rounded-2xl bg-purple-900/20 border border-purple-500/30">
                <h2 className="text-2xl font-bold text-white mb-4">1. Data Protection Commitment</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  MistrAI follows enterprise-grade privacy-by-design principles, ensuring that data protection is built into every aspect of our Services. Our commitment includes:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-black/30 border border-purple-500/20">
                    <h4 className="text-white font-semibold mb-2">Data Minimization</h4>
                    <p className="text-gray-400 text-sm">We collect only the data necessary to provide and improve our Services.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-black/30 border border-purple-500/20">
                    <h4 className="text-white font-semibold mb-2">PII/PIA Masking</h4>
                    <p className="text-gray-400 text-sm">Personal identifiable information is masked and protected using industry standards.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-black/30 border border-purple-500/20">
                    <h4 className="text-white font-semibold mb-2">Data Anonymization</h4>
                    <p className="text-gray-400 text-sm">We use pseudonymization techniques to protect user identity.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-black/30 border border-purple-500/20">
                    <h4 className="text-white font-semibold mb-2">Access Controls</h4>
                    <p className="text-gray-400 text-sm">Role-based access ensures data is only accessible to authorized personnel.</p>
                  </div>
                </div>
                <div className="mt-6 p-4 rounded-xl bg-black/50 border border-purple-500/30">
                  <p className="text-white font-semibold text-center">
                    ✓ We do not sell, rent, or trade personal data to third parties.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We may collect the following types of information when you use our Services:
                </p>
                
                <div className="space-y-4">
                  <div className="p-5 rounded-xl bg-gray-900/40 border border-white/10">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Personal Identifiers
                    </h4>
                    <p className="text-gray-400 ml-7">Limited information such as name, email address, and organization name when voluntarily provided.</p>
                  </div>

                  <div className="p-5 rounded-xl bg-gray-900/40 border border-white/10">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Voluntarily Submitted Information
                    </h4>
                    <p className="text-gray-400 ml-7">Content, ideas, feedback, or other materials you choose to submit through our platforms.</p>
                  </div>

                  <div className="p-5 rounded-xl bg-gray-900/40 border border-white/10">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                      Technical Metadata
                    </h4>
                    <p className="text-gray-400 ml-7">IP addresses, browser types, device information, usage logs, and analytics necessary for security and service optimization.</p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">3. Purpose of Data Processing</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We process your data solely for legitimate business purposes, including:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-gray-900/40 border border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-400 font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Service Delivery</h4>
                        <p className="text-gray-400 text-sm">Providing, maintaining, and securing our AI products and platforms.</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-gray-900/40 border border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-400 font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">User Support</h4>
                        <p className="text-gray-400 text-sm">Responding to inquiries, submissions, and support requests.</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-gray-900/40 border border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-400 font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Product Improvement</h4>
                        <p className="text-gray-400 text-sm">Analyzing usage patterns to enhance performance and user experience.</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-gray-900/40 border border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-400 font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Legal Compliance</h4>
                        <p className="text-gray-400 text-sm">Meeting regulatory requirements and legal obligations.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div className="mb-8 p-6 rounded-2xl bg-purple-900/20 border border-purple-500/30">
                <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We employ reasonable administrative, technical, and organizational safeguards to protect data against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>End-to-end encryption for data in transit</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Secure data storage with access controls</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Regular security audits and vulnerability assessments</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Industry-standard security protocols and best practices</span>
                  </div>
                </div>
                <div className="mt-4 p-4 rounded-xl bg-black/50 border border-purple-500/30">
                  <p className="text-gray-400 text-sm italic">
                    Note: No system is entirely immune to risk. While we implement robust security measures, we cannot guarantee absolute security. Users should also take precautions to protect their accounts and data.
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">5. Third-Party Data Processing</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Third-party service providers may process limited data solely to support service functionality, such as:
                </p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>Cloud infrastructure providers for hosting and storage</li>
                  <li>Analytics platforms for usage insights and optimization</li>
                  <li>Communication services for customer support</li>
                  <li>Payment processors for billing (if applicable)</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  All third-party processors are bound by contractual confidentiality obligations and are required to comply with applicable data protection regulations.
                </p>
              </div>

              {/* Section 6 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
                <p className="text-gray-300 leading-relaxed">
                  We retain personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. When data is no longer needed, it is securely deleted or anonymized.
                </p>
              </div>

              {/* Section 7 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">7. Global User Rights</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Subject to applicable law, users may have the following rights regarding their personal data:
                </p>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-gray-900/40 border border-white/10">
                    <h4 className="text-white font-semibold mb-2">Right to Access</h4>
                    <p className="text-gray-400 text-sm">Request a copy of the personal data we hold about you.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-900/40 border border-white/10">
                    <h4 className="text-white font-semibold mb-2">Right to Correction</h4>
                    <p className="text-gray-400 text-sm">Request correction of inaccurate or incomplete personal data.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-900/40 border border-white/10">
                    <h4 className="text-white font-semibold mb-2">Right to Deletion</h4>
                    <p className="text-gray-400 text-sm">Request deletion of your personal data, subject to legal and contractual obligations.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-900/40 border border-white/10">
                    <h4 className="text-white font-semibold mb-2">Right to Object</h4>
                    <p className="text-gray-400 text-sm">Object to processing of your data for specific purposes.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-900/40 border border-white/10">
                    <h4 className="text-white font-semibold mb-2">Right to Data Portability</h4>
                    <p className="text-gray-400 text-sm">Request transfer of your data to another service provider where technically feasible.</p>
                  </div>
                </div>
              </div>

              {/* Section 8 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">8. Cookies and Tracking Technologies</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We may use cookies and similar tracking technologies to enhance user experience, analyze usage patterns, and improve our Services. Users can control cookie preferences through their browser settings.
                </p>
                <p className="text-gray-400 text-sm italic">
                  Types of cookies we may use include: essential cookies (required for service functionality), analytics cookies (for usage insights), and preference cookies (to remember user settings).
                </p>
              </div>

              {/* Section 9 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">9. International Data Transfers</h2>
                <p className="text-gray-300 leading-relaxed">
                  As a global service provider, your data may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable laws.
                </p>
              </div>

              {/* Section 10 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">10. Children&aposs Privacy</h2>
                <p className="text-gray-300 leading-relaxed">
                  Our Services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child, we will take steps to delete such information promptly.
                </p>
              </div>

              {/* Section 11 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">11. Changes to This Privacy Policy</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. We will notify users of material changes by posting the updated policy on our website with a revised Last Updated date.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-purple-900/30 to-violet-900/30 border border-purple-500/30">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Us
                </h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  For privacy-related inquiries, questions about your data rights, or concerns about how your information is handled, please contact us through the appropriate channels provided on our website.
                </p>
                <p className="text-gray-400 text-sm">
                  We are committed to addressing your privacy concerns promptly and transparently.
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