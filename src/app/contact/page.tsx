"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      alert("Please fill in all required fields");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://connect-2-gamma.vercel.app/api/general-inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit inquiry');
      }

      console.log("✅ Inquiry Submitted Successfully:", formData);
      setFormData({ fullName: "", email: "", phone: "", company: "", message: "" });
      alert("Thank you! Your inquiry has been submitted successfully. We'll get back to you soon.");
      
    } catch (error) {
      console.error("❌ Error submitting inquiry:", error);
      alert(error instanceof Error ? error.message : "Failed to submit inquiry. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const engagementOptions = [
    {
      title: "Book a Demo",
      description: "Request a guided walkthrough of our AI agents, AI SaaS products, workflow automations, and platforms.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      link: "/book-demo"
    },
    {
      title: "Product Customization",
      description: "Discuss tailored AI solutions built around your workflows, data, and operational requirements.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      link: "/customization"
    },
    {
      title: "Business Engagements",
      description: "Explore enterprise deployments, partnerships, pilots, or long-term strategic collaborations.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      link: "/strategic-partnership"
    },
    {
      title: "Investment",
      description: "Connect with us regarding strategic or financial investment opportunities.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      link: "/capital-partners"
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black pt-20">
        {/* Hero Section */}
        <section className="relative w-full py-24 md:py-32 overflow-hidden">
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

          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-md mb-6">
              <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-purple-300 text-xs font-bold uppercase tracking-widest">Contact</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
              Get in Touch
            </h1>

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Choose how you would like to engage with us. If you are unsure, you can also reach out using the general inquiry form below.
            </p>
          </div>
        </section>

        {/* Primary Engagement Options */}
        <section className="relative w-full py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              {engagementOptions.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => router.push(option.link)}
                  className="group relative text-left"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-25 transition duration-500"></div>
                  <div className="relative p-8 rounded-2xl bg-gray-900/60 backdrop-blur-xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 h-full flex items-center gap-6">
                    <div className="flex-shrink-0 inline-flex p-4 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                      {option.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-white mb-2">{option.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{option.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Divider with Text */}
        <section className="relative w-full py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-800"></div>
              </div>
              <div className="relative px-6 py-3 rounded-full bg-black border border-gray-800">
                <h2 className="text-2xl font-bold text-white">General Inquiries</h2>
              </div>
            </div>
            <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
              For questions that do not fall under the options above, feel free to reach out using the form below.
            </p>
          </div>
        </section>

        {/* General Inquiry Form */}
        <section className="relative w-full py-16 pb-24">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-violet-600 rounded-3xl blur-xl opacity-10 group-hover:opacity-25 transition duration-1000"></div>
              
              <div className="relative bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-2">Send Us a Message</h3>
                  <p className="text-gray-400">We will review your message and respond as soon as possible.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-white font-medium text-sm">
                      <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Full Name
                      <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-gray-800 text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 transition-all"
                      required
                    />
                  </div>

                  {/* Email and Phone - Two Column */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-white font-medium text-sm">
                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Email Address
                        <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-gray-800 text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 transition-all"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-white font-medium text-sm">
                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your contact number"
                        className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-gray-800 text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 transition-all"
                      />
                    </div>
                  </div>

                  {/* Company Name */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-white font-medium text-sm">
                      <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      Company Name
                      <span className="text-gray-500 text-xs">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Enter your company or organization"
                      className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-gray-800 text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-white font-medium text-sm">
                      <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                      Message
                      <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Briefly describe your inquiry"
                      className="w-full p-4 rounded-xl bg-black/50 border border-gray-800 text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 transition-all resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative w-full group overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 p-[1px] transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] disabled:opacity-50"
                  >
                    <div className="bg-black rounded-xl px-8 py-4 flex items-center justify-center gap-2 group-hover:bg-transparent transition-all duration-300">
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <>
                          <span className="text-white font-bold uppercase tracking-wider">Submit Inquiry</span>
                          <svg className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </>
                      )}
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Let's Connect Section */}
        <section className="relative w-full py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Let&apos;s Connect!
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Company Number */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-25 transition duration-500"></div>
                <div className="relative p-8 rounded-2xl bg-gray-900/60 backdrop-blur-xl border border-white/10 text-center h-full flex flex-col items-center justify-center">
                  <div className="mb-4 inline-flex p-4 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Company Number</h3>
                  <a href="tel:+917622817924" className="text-gray-300 hover:text-purple-400 transition-colors text-lg">
                    +917622817924
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-25 transition duration-500"></div>
                <div className="relative p-8 rounded-2xl bg-gray-900/60 backdrop-blur-xl border border-white/10 text-center h-full flex flex-col items-center justify-center">
                  <div className="mb-4 inline-flex p-4 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Email</h3>
                  <a href="mailto:info@mistrai.com" className="text-gray-300 hover:text-purple-400 transition-colors text-lg">
                    info@mistrai.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-25 transition duration-500"></div>
                <div className="relative p-8 rounded-2xl bg-gray-900/60 backdrop-blur-xl border border-white/10 text-center h-full flex flex-col items-center justify-center">
                  <div className="mb-4 inline-flex p-4 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Location</h3>
                  <p className="text-gray-300 text-lg">India</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}