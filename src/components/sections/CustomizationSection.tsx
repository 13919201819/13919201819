"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PrimaryButton from "../ui/PrimaryButton";

export default function CustomizationSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const router = useRouter();

  const features = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Industry-Specific",
      description: "AI models trained on your industry's unique data patterns and requirements.",
      gradient: "from-purple-500/10 to-violet-500/5"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: "Infinitely Scalable",
      description: "Architecture that grows with your business, from startup to enterprise.",
      gradient: "from-violet-500/10 to-purple-500/5"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      title: "Integration-Ready",
      description: "Seamless integration with your existing tech stack and workflows.",
      gradient: "from-purple-500/10 to-pink-500/5"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Rapid Deployment",
      description: "Go from concept to production in weeks, not months.",
      gradient: "from-pink-500/10 to-purple-500/5"
    }
  ];

  const handleCustomizationClick = () => {
    router.push('/customization');
  };

  return (
    <section id="custom" className="min-h-screen w-full relative bg-gradient-to-b from-black via-purple-950/5 to-black flex items-center justify-center py-24 overflow-hidden">
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0 z-0">
        {/* Main Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.25), transparent 70%)",
          }}
        />
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm mb-8">
            <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            <span className="text-purple-300 text-sm font-medium">Custom Products</span>
          </div> */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-10 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-purple-300 text-sm font-medium">Custom Products</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6">
            <span className="text-white">Want Customization</span>
            <br />
            <span className="text-white">of </span>
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              Products?
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Every business is unique. That is why we do not believe in one-size-fits-all solutions. Our team of AI engineers works closely with you to build tailored intelligence that addresses your specific challenges and opportunities.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative h-full"
            >
              {/* Glow Effect */}
              <div 
                className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500`}
              />
              
              {/* Card Content */}
              <div className="relative h-full bg-gradient-to-br from-gray-900/90 via-gray-900/50 to-black/90 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 transition-all duration-300 group-hover:border-purple-500/50 group-hover:shadow-xl group-hover:shadow-purple-500/10 flex flex-col">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6 text-purple-400 group-hover:text-purple-300 transition-all duration-300 group-hover:scale-110 w-fit`}>
                  {feature.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors flex-grow">
                  {feature.description}
                </p>
                
                {/* Hover Arrow */}
                <div className="mt-4 flex items-center gap-2 text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                  <span className="text-sm font-medium">Learn more</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          {/* Main CTA Button */}
          {/* <div className="flex justify-center">
            <button 
              onClick={handleCustomizationClick}
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 rounded-xl font-semibold text-lg text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <span className="relative">Product Customization →</span>
            </button>
          </div> */}

          <div className="flex justify-center">
            <PrimaryButton href="/customization">
              Product Customization
            </PrimaryButton>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No Commitment Required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Quick Response Time</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
    </section>
  );
}