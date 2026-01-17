"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function StrategicPartnershipPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    organizationName: "",
    organizationWebsite: "",
    industry: "",
    organizationType: "",
    fullName: "",
    workEmail: "",
    roleDesignation: "",
    initiativeType: "",
    briefDescription: "",
    timeline: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    if (!formData.organizationName || !formData.organizationWebsite || !formData.industry || 
        !formData.organizationType || !formData.fullName || !formData.workEmail || 
        !formData.roleDesignation || !formData.initiativeType || !formData.briefDescription || 
        !formData.timeline) {
      alert("Please fill in all required fields");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Partnership form submitted:", formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      organizationName: "",
      organizationWebsite: "",
      industry: "",
      organizationType: "",
      fullName: "",
      workEmail: "",
      roleDesignation: "",
      initiativeType: "",
      briefDescription: "",
      timeline: ""
    });
    
    alert("✅ Thank you for reaching out. The CLUMOSS team will review your request and contact you if there is a fit.");
  };

  return (
    <>
      <Header />
      <section className="relative w-full min-h-screen py-24 overflow-hidden bg-gradient-to-b from-black via-purple-950/10 to-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(ellipse 100% 70% at 50% -20%, rgba(139, 92, 246, 0.25), transparent 60%)",
          }}
        />
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-purple-300 text-sm font-medium">Enterprise Collaboration</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              Strategic Partnerships
            </span>
          </h1>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-gray-300 text-lg leading-relaxed">
              For new AI products, platforms, or long-term initiatives, all strategic discussions are led by <span className="text-purple-400 font-semibold">CLUMOSS</span>, our parent organization. CLUMOSS handles vision, alignment, and long-term planning. Once the direction is clear, MistrAI supports execution and technical delivery where needed.
            </p>
            
            <p className="text-gray-500 text-sm leading-relaxed">
              <span className="font-medium">Note:</span> This page is not for product usage or customization. It is meant only for new, strategic initiatives.
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            
            {/* Form Container */}
            <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-black/90 backdrop-blur-xl border border-gray-800/50 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl">
              <div className="space-y-8">
                {/* Form Title */}
                <div className="text-center">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Strategic Partnership Form</h2>
                  <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full mx-auto"></div>
                </div>

                {/* Organization Details Section */}
                <div className="space-y-6">
                  <h3 className="text-white font-semibold text-lg">Organization Details</h3>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-white font-medium text-sm">
                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        Organization Name
                      </label>
                      <input
                        type="text"
                        name="organizationName"
                        value={formData.organizationName}
                        onChange={handleInputChange}
                        placeholder="Your Organization"
                        className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-gray-700/50 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-white font-medium text-sm">
                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        Organization Website
                      </label>
                      <input
                        type="url"
                        name="organizationWebsite"
                        value={formData.organizationWebsite}
                        onChange={handleInputChange}
                        placeholder="https://example.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-gray-700/50 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-white font-medium text-sm">
                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Industry
                      </label>
                      <input
                        type="text"
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        placeholder="e.g., Healthcare, Finance"
                        className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-gray-700/50 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-white font-medium text-sm">
                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        Organization Type
                      </label>
                      <div className="relative">
                        <select
                          name="organizationType"
                          value={formData.organizationType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-gray-700/50 text-gray-200 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-gray-900">Select type</option>
                          <option value="enterprise" className="bg-gray-900">Enterprise</option>
                          <option value="institution" className="bg-gray-900">Institution</option>
                          <option value="government" className="bg-gray-900">Government / Public Sector</option>
                          <option value="research" className="bg-gray-900">Research Organization</option>
                          <option value="other" className="bg-gray-900">Other</option>
                        </select>
                        <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Person Section */}
                <div className="space-y-6 pt-4">
                  <h3 className="text-white font-semibold text-lg">Contact Person</h3>
                  
                  <div className="grid sm:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-white font-medium text-sm">
                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-gray-700/50 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-white font-medium text-sm">
                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Work Email
                      </label>
                      <input
                        type="email"
                        name="workEmail"
                        value={formData.workEmail}
                        onChange={handleInputChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-gray-700/50 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-white font-medium text-sm">
                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                        </svg>
                        Role / Designation
                      </label>
                      <input
                        type="text"
                        name="roleDesignation"
                        value={formData.roleDesignation}
                        onChange={handleInputChange}
                        placeholder="CTO, VP, Director"
                        className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-gray-700/50 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* What do you want to create Section */}
                <div className="space-y-6 pt-4">
                  <h3 className="text-white font-semibold text-lg">What do you want to create?</h3>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-white font-medium text-sm">
                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        Type of Initiative
                      </label>
                      <div className="relative">
                        <select
                          name="initiativeType"
                          value={formData.initiativeType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-gray-700/50 text-gray-200 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-gray-900">Select initiative type</option>
                          <option value="new-ai-product" className="bg-gray-900">New AI Product</option>
                          <option value="new-ai-platform" className="bg-gray-900">New AI Platform</option>
                          <option value="long-term-strategic" className="bg-gray-900">Long-term Strategic Initiative</option>
                          <option value="joint-research" className="bg-gray-900">Joint Research / Innovation</option>
                          <option value="other" className="bg-gray-900">Other</option>
                        </select>
                        <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-white font-medium text-sm">
                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                        Brief Description
                        <span className="text-gray-500 text-xs font-normal">(Describe the idea or goal in a few lines)</span>
                      </label>
                      <textarea
                        name="briefDescription"
                        value={formData.briefDescription}
                        onChange={handleInputChange}
                        className="w-full p-4 rounded-xl bg-black/40 border border-gray-700/50 text-gray-200 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 placeholder:text-gray-500 resize-none"
                        rows={5}
                        placeholder="Describe your strategic initiative, vision, or collaborative goal..."
                      />
                    </div>
                  </div>
                </div>

                {/* Timeline Section */}
                <div className="space-y-6 pt-4">
                  <h3 className="text-white font-semibold text-lg">Timeline</h3>
                  
                  <div className="space-y-2">
                    <div className="relative">
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-gray-700/50 text-gray-200 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-gray-900">Select timeline</option>
                        <option value="exploratory" className="bg-gray-900">Exploratory</option>
                        <option value="3-6-months" className="bg-gray-900">3–6 months</option>
                        <option value="6-12-months" className="bg-gray-900">6–12 months</option>
                        <option value="long-term" className="bg-gray-900">Long-term</option>
                      </select>
                      <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="relative w-full group overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 p-[2px] transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed mt-8"
                >
                  <div className="relative bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 rounded-xl px-8 py-4 flex items-center justify-center gap-3 overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white relative z-10" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span className="text-white font-semibold text-lg relative z-10">Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span className="text-white font-semibold text-lg relative z-10">Submit</span>
                        <svg className="w-5 h-5 text-white relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
    </section>
      <Footer />
    </>
  );
}