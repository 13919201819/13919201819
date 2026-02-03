"use client";

import { TypeAnimation } from "react-type-animation";
import Header from "../layout/Header";
import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";

const HeroSection = () => {
  return (
    <>
      <Header />
      
      <section
        className="relative w-full min-h-screen py-16 sm:py-20 md:py-24 overflow-hidden bg-gradient-to-b from-black via-purple-950/10 to-black"
        id="hero"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "radial-gradient(ellipse 100% 70% at 50% -20%, rgba(139, 92, 246, 0.25), transparent 60%)",
            }}
          />
          
          {/* Floating Orbs - Responsive sizes */}
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-[calc(100vh-8rem)] sm:min-h-[calc(100vh-6rem)]">
          {/* Header Section */}
          <div className="text-center space-y-4 sm:space-y-6 w-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-purple-300 text-xs sm:text-sm font-medium">Get Started</span>
            </div>
            
            {/* Main Headline - Responsive text sizes */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight px-4 sm:px-0">
              <span className="text-white block mb-2 sm:mb-0">
                Multiply Your Profit With
              </span>
              <span className="text-white block mt-2 sm:mt-3">
                Next-Gen{" "}
                <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent inline-block">
                  <TypeAnimation
                    sequence={[
                      "AI SaaS Products",
                      2000,
                      "Workflow Automations",
                      2000,
                      "Platforms",
                      2000,
                      "AI Agents",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    cursor={true}
                  />
                </span>
              </span>
            </h1>

            {/* Description - Responsive text and padding */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
                Built for enterprises to streamline operations, reduce costs, and
                grow with secure, reliable, and scalable AI that delivers visible
                ROI.
              </p>
            </div>

            {/* CTA Buttons - Fully responsive layout */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-4 sm:pt-6 px-4 sm:px-0 max-w-md sm:max-w-none mx-auto">
              <PrimaryButton href="/products">
                Explore Products
              </PrimaryButton>

              <SecondaryButton href="/book-demo">
                Book a Demo
              </SecondaryButton>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </section>
    </>
  );
};

export default HeroSection;