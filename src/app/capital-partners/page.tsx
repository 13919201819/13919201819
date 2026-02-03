"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function CapitalPartnersPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fundName: "",
    fundWebsite: "",
    fundType: "",
    aum: "",
    fullName: "",
    workEmail: "",
    roleDesignation: "",
    investmentFocus: "",
    investmentStage: "",
    typicalCheckSize: "",
    briefMessage: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    if (!formData.fundName || !formData.fundWebsite || !formData.fundType || 
        !formData.aum || !formData.fullName || !formData.workEmail || 
        !formData.roleDesignation || !formData.investmentFocus || 
        !formData.investmentStage || !formData.typicalCheckSize || 
        !formData.briefMessage) {
      alert("Please fill in all required fields");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://connect-2-gamma.vercel.app/api/capital-partnership', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Reset form
        setFormData({
          fundName: "",
          fundWebsite: "",
          fundType: "",
          aum: "",
          fullName: "",
          workEmail: "",
          roleDesignation: "",
          investmentFocus: "",
          investmentStage: "",
          typicalCheckSize: "",
          briefMessage: ""
        });
        
        alert("✅ Thank you for your interest. The MistrAI team will review your information and reach out if there is potential alignment.");
      } else {
        throw new Error(result.error || 'Submission failed');
      }
    } catch (error) {
      console.error('Capital partners submission error:', error);
      alert("❌ Failed to submit your information. Please try again or contact support.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <section className="relative w-full min-h-screen mt-18 py-24 overflow-hidden bg-gradient-to-b from-black via-purple-950/10 to-black">
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
              <span className="text-purple-300 text-sm font-medium">Investment Opportunities</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                Capital Partners
              </span>
            </h1>
            
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-gray-300 text-lg leading-relaxed">
                MistrAI welcomes conversations with venture capital firms, private equity investors, and strategic financial partners interested in AI-driven innovation. If your fund focuses on enterprise AI, SaaS platforms, or emerging technology sectors, we'd be interested in exploring potential alignment.
              </p>
              
              <p className="text-gray-500 text-sm leading-relaxed">
                <span className="font-medium">Note:</span> This page is exclusively for institutional investors and capital partners. For strategic or operational partnerships, please visit our Strategic Partnerships page.
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
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Capital Partners Form</h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full mx-auto"></div>
                  </div>

                  {/* Fund Information Section */}
                  <div className="space-y-6">
                    <h3 className="text-white font-semibold text-lg">Fund Information</h3>
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-white font-medium text-sm">
                          <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          Fund Name
                        </label>
                        <input
                          type="text"
                          name="fundName"
                          value={formData.fundName}
                          onChange={handleInputChange}
                          placeholder="Venture Capital Fund"
                          className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-gray-700/50 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-white font-medium text-sm">
                          <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                          </svg>
                          Fund Website
                        </label>
                        <input
                          type="url"
                          name="fundWebsite"
                          value={formData.fundWebsite}
                          onChange={handleInputChange}
                          placeholder="https://fund.com"
                          className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-gray-700/50 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="fundType" className="flex items-center gap-2 text-white font-medium text-sm">
                          <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                          Fund Type
                        </label>
                        <div className="relative">
                          <select
                            id="fundType"
                            name="fundType"
                            value={formData.fundType}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-gray-700/50 text-gray-200 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 appearance-none cursor-pointer"
                          >
                            <option value="" className="bg-gray-900">Select fund type</option>
                            <option value="venture-capital" className="bg-gray-900">Venture Capital</option>
                            <option value="private-equity" className="bg-gray-900">Private Equity</option>
                            <option value="corporate-vc" className="bg-gray-900">Corporate VC</option>
                            <option value="family-office" className="bg-gray-900">Family Office</option>
                            <option value="angel-syndicate" className="bg-gray-900">Angel Syndicate</option>
                            <option value="other" className="bg-gray-900">Other</option>
                          </select>
                          <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="aum" className="flex items-center gap-2 text-white font-medium text-sm">
                          <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          AUM (Assets Under Management)
                        </label>
                        <div className="relative">
                          <select
                            id="aum"
                            name="aum"
                            value={formData.aum}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-gray-700/50 text-gray-200 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 appearance-none cursor-pointer"
                          >
                            <option value="" className="bg-gray-900">Select AUM range</option>
                            <option value="under-50m" className="bg-gray-900">Under $50M</option>
                            <option value="50m-100m" className="bg-gray-900">$50M - $100M</option>
                            <option value="100m-500m" className="bg-gray-900">$100M - $500M</option>
                            <option value="500m-1b" className="bg-gray-900">$500M - $1B</option>
                            <option value="over-1b" className="bg-gray-900">Over $1B</option>
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
                          placeholder="john@fund.com"
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
                          placeholder="Partner, Principal, VP"
                          className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-gray-700/50 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Investment Focus Section */}
                  <div className="space-y-6 pt-4">
                    <h3 className="text-white font-semibold text-lg">Investment Focus</h3>
                    
                    <div className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="flex items-center gap-2 text-white font-medium text-sm">
                            <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                            Investment Focus
                            <span className="text-gray-500 text-xs font-normal">(Sectors/Themes)</span>
                          </label>
                          <input
                            type="text"
                            name="investmentFocus"
                            value={formData.investmentFocus}
                            onChange={handleInputChange}
                            placeholder="e.g., Enterprise AI, SaaS, B2B"
                            className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-gray-700/50 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="investmentStage" className="flex items-center gap-2 text-white font-medium text-sm">
                            <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                            Investment Stage
                          </label>
                          <div className="relative">
                            <select
                              id="investmentStage"
                              name="investmentStage"
                              value={formData.investmentStage}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-gray-700/50 text-gray-200 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 appearance-none cursor-pointer"
                            >
                              <option value="" className="bg-gray-900">Select stage</option>
                              <option value="pre-seed" className="bg-gray-900">Pre-Seed</option>
                              <option value="seed" className="bg-gray-900">Seed</option>
                              <option value="series-a" className="bg-gray-900">Series A</option>
                              <option value="series-b" className="bg-gray-900">Series B</option>
                              <option value="series-c-plus" className="bg-gray-900">Series C+</option>
                              <option value="growth" className="bg-gray-900">Growth</option>
                              <option value="late-stage" className="bg-gray-900">Late Stage</option>
                            </select>
                            <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="typicalCheckSize" className="flex items-center gap-2 text-white font-medium text-sm">
                          <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          Typical Check Size
                        </label>
                        <div className="relative">
                          <select
                            id="typicalCheckSize"
                            name="typicalCheckSize"
                            value={formData.typicalCheckSize}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-gray-700/50 text-gray-200 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 appearance-none cursor-pointer"
                          >
                            <option value="" className="bg-gray-900">Select check size</option>
                            <option value="under-500k" className="bg-gray-900">Under $500K</option>
                            <option value="500k-1m" className="bg-gray-900">$500K - $1M</option>
                            <option value="1m-5m" className="bg-gray-900">$1M - $5M</option>
                            <option value="5m-10m" className="bg-gray-900">$5M - $10M</option>
                            <option value="10m-25m" className="bg-gray-900">$10M - $25M</option>
                            <option value="over-25m" className="bg-gray-900">Over $25M</option>
                          </select>
                          <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-white font-medium text-sm">
                          <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                          </svg>
                          Brief Message
                          <span className="text-gray-500 text-xs font-normal">(Tell us about your interest)</span>
                        </label>
                        <textarea
                          name="briefMessage"
                          value={formData.briefMessage}
                          onChange={handleInputChange}
                          className="w-full p-4 rounded-xl bg-black/40 border border-gray-700/50 text-gray-200 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 placeholder:text-gray-500 resize-none"
                          rows={5}
                          placeholder="Share your interest in MistrAI and any specific areas you'd like to discuss..."
                        />
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