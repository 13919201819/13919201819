

"use client";
import PrimaryButton from "../ui/PrimaryButton";


import { useState } from "react";

export default function PartnerSection() {
  return (
    <section id="partner" className="relative w-full min-h-screen py-24 overflow-hidden bg-gradient-to-b from-black via-purple-950/10 to-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(ellipse 100% 70% at 50% -20%, rgba(139, 92, 246, 0.25), transparent 60%)",
          }}
        />
        
        {/* Floating Orbs */}
        <div className="absolute top-32 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-10 bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-purple-300 text-sm font-medium">Enterprise Collaboration</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-white">Strategic Partnerships &</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              Business Engagements
            </span>
          </h2>
        </div>

        {/* Main Content - Centered */}
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-16">
          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed">
            For enterprises and institutions seeking to create new AI platforms, products, or strategic 
            initiatives with long-term impact. These engagements are designed for net-new ideas and deep 
            collaboration, where vision, commitment, and scale matter.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <div className="flex justify-center">
            <PrimaryButton href="/strategic-partnership">
              Partner with us
            </PrimaryButton>
          </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/10 backdrop-blur-sm">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/10 mb-4">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Enterprise Scale</h3>
            <p className="text-gray-400 text-sm">Built for large-scale implementations and global reach</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-violet-500/5 to-transparent border border-violet-500/10 backdrop-blur-sm">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-500/10 mb-4">
              <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Long-Term Impact</h3>
            <p className="text-gray-400 text-sm">Strategic initiatives designed for sustained growth</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/10 backdrop-blur-sm">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/10 mb-4">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Deep Collaboration</h3>
            <p className="text-gray-400 text-sm">Co-create innovative AI solutions together</p>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
    </section>
  );
}