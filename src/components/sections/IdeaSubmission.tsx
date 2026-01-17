"use client";
import PrimaryButton from "../ui/PrimaryButton";

export default function IdeaSubmissionSection() {
  const handlePropose = () => {
    window.location.href = '/idea-submission';
  };

  return (
    <section id="idea" className="relative w-full min-h-screen py-24 overflow-hidden bg-gradient-to-b from-black via-purple-950/10 to-black flex items-center">
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
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header Section */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-purple-300 text-sm font-medium">Share Your Vision</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
            <span className="text-white">Have an Idea That Could</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              Create Value Using AI?
            </span>
          </h2>
          
          <p className="text-gray-400 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed">
            We believe great ideas can come from anywhere — students, professionals, creators, or everyday users. 
            If you have a concept, insight, improvement, or opinion that you feel could create value, you are welcome to share it here.
          </p>

          {/* CTA Button */}
          <div className="pt-8">
            <div className="flex justify-center">
            <PrimaryButton href="/idea-submission">
              Propose an AI Idea
            </PrimaryButton>
          </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-24 grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/10 mb-4">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Quick Response</h3>
            <p className="text-gray-400 text-sm">We review all submissions within 48 hours</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-violet-500/5 to-transparent border border-violet-500/10 hover:border-violet-500/30 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-500/10 mb-4">
              <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Confidential</h3>
            <p className="text-gray-400 text-sm">Your ideas are protected by NDA</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/10 mb-4">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Collaborative</h3>
            <p className="text-gray-400 text-sm">We work together to refine your vision</p>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
    </section>
  );
}