"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function CapitalPartnersPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    investorType: "",
    email: "",
    geography: "",
    investmentRange: "",
    investmentFocus: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // Validate required fields
    if (!formData.fullName || !formData.organization || !formData.investorType || !formData.email) {
      alert("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log("Form submitted:", formData);

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset after showing success message
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        organization: "",
        investorType: "",
        email: "",
        geography: "",
        investmentRange: "",
        investmentFocus: "",
      });
    }, 3000);
  };

  return (
    <>
      <Header />

      {/* MAIN SECTION */}
      <section className="relative w-full min-h-screen pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-24 md:pb-40 overflow-hidden bg-gradient-to-b from-black via-purple-950/10 to-black">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 100% 70% at 50% -20%, rgba(139, 92, 246, 0.25), transparent 60%)"
            }}
          />
          <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center space-y-4 sm:space-y-6 mb-10 sm:mb-14 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-purple-300 text-xs sm:text-sm font-medium">
                Capital Partners
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight px-4">
              <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                Capital Partnerships
              </span>
              <br />
              <span className="text-white">by Invitation</span>
            </h1>

            <p className="max-w-3xl mx-auto text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed px-4">
              We engage selectively with institutional and strategic capital partners who align with our long-term vision and operating discipline. This access point is intended for investors seeking exposure to enterprise-grade AI assets built for durability, scalability, and sustained value creation. Submissions are reviewed to ensure strategic alignment prior to sharing confidential materials.
            </p>
          </div>

          {/* FORM CARD */}
          <div className="max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 rounded-2xl sm:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-1000" />

              <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-black/90 backdrop-blur-xl border border-gray-800/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl">
                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 mb-4">
                      <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Submission Received</h3>
                    <p className="text-gray-400 text-base sm:text-lg">Our team will review your information and be in touch shortly.</p>
                  </div>
                ) : (
                  <div className="space-y-8 sm:space-y-10">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20">
                        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                        Investor Qualification Form
                      </h2>
                    </div>

                    {/* Full Name */}
                    <InputField
                      label="Full Name"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                    />

                    {/* Organization */}
                    <InputField
                      label="Organization / Fund Name"
                      name="organization"
                      required
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="Enter organization name"
                    />

                    {/* Investor Type */}
                    <SelectField
                      label="Investor Type"
                      name="investorType"
                      required
                      value={formData.investorType}
                      onChange={handleInputChange}
                      options={[
                        "Venture Capital",
                        "Corporate Venture",
                        "Private Equity",
                        "Family Office",
                        "Strategic Partner"
                      ]}
                    />

                    {/* Email */}
                    <InputField
                      label="Institutional Email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="investor@organization.com"
                    />

                    {/* Geography */}
                    <InputField
                      label="Geography / Market Focus"
                      name="geography"
                      value={formData.geography}
                      onChange={handleInputChange}
                      placeholder="e.g. North America, Europe, Global"
                    />

                    {/* Investment Range */}
                    <SelectField
                      label="Typical Investment Range"
                      name="investmentRange"
                      value={formData.investmentRange}
                      onChange={handleInputChange}
                      options={[
                        "$250k – $1M",
                        "$1M – $5M",
                        "$5M – $20M",
                        "$20M+"
                      ]}
                      optional
                    />

                    {/* Investment Focus */}
                    <TextareaField
                      label="Investment Focus / Thesis"
                      name="investmentFocus"
                      value={formData.investmentFocus}
                      onChange={handleInputChange}
                      placeholder="Briefly outline your strategic or financial focus"
                    />

                    {/* Submit */}
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full mt-6 rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold text-base sm:text-lg hover:shadow-lg hover:shadow-purple-500/50 transition disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                    >
                      {isSubmitting
                        ? "Submitting..."
                        : "Request Executive Deck & Secure Data Room"}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Security Notice */}
            {!submitted && (
              <div className="mt-6 sm:mt-8 flex items-start gap-3 p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
                <svg className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <p className="text-sm text-gray-400">
                  All submissions are confidential and reviewed internally. Access to materials is granted only upon mutual alignment and execution of appropriate agreements.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      {/* FOOTER */}
      <Footer />
    </>
  );
}

/* ---------------- Reusable Components ---------------- */

function InputField({ label, required = false, type = "text", className = "", ...props }: any) {
  return (
    <div className={`space-y-3 ${className}`}>
      <label className="block text-white text-sm sm:text-base font-medium">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <input
        type={type}
        {...props}
        className="w-full px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl bg-black/40 border border-gray-700/50
                   text-gray-200 text-sm sm:text-base placeholder:text-gray-500 focus:outline-none
                   focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20
                   transition"
      />
    </div>
  );
}

function TextareaField({ label, required = false, ...props }: any) {
  return (
    <div className="space-y-3">
      <label className="block text-white text-sm sm:text-base font-medium">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <textarea
        {...props}
        rows={5}
        className="w-full p-3 sm:p-4 rounded-xl bg-black/40 border border-gray-700/50
                   text-gray-200 text-sm sm:text-base placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50
                   focus:ring-2 focus:ring-purple-500/20 transition resize-none"
      />
    </div>
  );
}

function SelectField({ label, required = false, optional = false, options, ...props }: any) {
  return (
    <div className="space-y-3">
      <label className="block text-white text-sm sm:text-base font-medium">
        {label} {required && <span className="text-red-400">*</span>}
        {optional && <span className="text-gray-500"> (Optional)</span>}
      </label>
      <select
        {...props}
        className="w-full px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl bg-black/40 border border-gray-700/50
                   text-gray-200 text-sm sm:text-base focus:outline-none focus:border-purple-500/50
                   focus:ring-2 focus:ring-purple-500/20 transition appearance-none cursor-pointer"
      >
        <option value="" className="bg-gray-900">Select option</option>
        {options.map((opt: string) => (
          <option key={opt} value={opt} className="bg-gray-900">
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}