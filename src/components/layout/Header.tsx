"use client";

import MobileMenu from "./MobileMenu";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 sm:py-4 md:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Mobile Logo - Visible only on mobile, positioned left */}
        <div className="md:hidden flex items-center justify-start">
          <Link href="/" className="flex items-center">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14">
              <Image 
                src="/logo.svg" 
                alt="MistrAI Logo" 
                fill 
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Nav - Clean & Sophisticated */}
        <nav className="hidden md:grid lg:grid-cols-[1fr_auto_1fr] md:grid-cols-[auto_auto_auto] items-center gap-2 lg:gap-3 px-6 lg:px-12 py-4 lg:py-5 rounded-full backdrop-blur-xl bg-black/30 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:bg-black/40 hover:border-white/30 hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)] transition-all duration-500 w-fit mx-auto relative overflow-hidden">
          
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5 opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
          
          {/* Left items - Responsive layout */}
          <div className="flex items-center justify-end gap-1 lg:gap-2 relative z-10">
            <Link 
              href="/products" 
              onMouseEnter={() => setHoveredItem("products")}
              onMouseLeave={() => setHoveredItem(null)}
              className="px-3 lg:px-6 py-2 lg:py-2.5 rounded-full text-xs lg:text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
            >
              Products
            </Link>
            <Link 
              href="/vision" 
              onMouseEnter={() => setHoveredItem("vision")}
              onMouseLeave={() => setHoveredItem(null)}
              className="px-3 lg:px-6 py-2 lg:py-2.5 rounded-full text-xs lg:text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
            >
              Vision
            </Link>
            <Link 
              href="#idea" 
              onMouseEnter={() => setHoveredItem("idea")}
              onMouseLeave={() => setHoveredItem(null)}
              className="px-3 lg:px-6 py-2 lg:py-2.5 rounded-full text-xs lg:text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
            >
              Drop Idea
            </Link>
          </div>

          {/* Logo in Center - Responsive sizing */}
          <div className="flex items-center mx-4 lg:mx-8 relative z-10">
            <div className="w-[1px] h-6 lg:h-8 bg-gradient-to-b from-transparent via-white/30 to-transparent mr-4 lg:mr-8"></div>
            
            <Link href="/" className="flex items-center group/logo relative">
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 -m-4 rounded-full bg-white/10 opacity-0 group-hover/logo:opacity-100 blur-xl transition-opacity duration-500"></div>
              
              <div className="relative w-12 h-12 lg:w-16 lg:h-16 group-hover/logo:scale-110 transition-transform duration-500">
                <Image 
                  src="/logo.svg" 
                  alt="MistrAI Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
            </Link>
            
            <div className="w-[1px] h-6 lg:h-8 bg-gradient-to-b from-transparent via-white/30 to-transparent ml-4 lg:ml-8"></div>
          </div>

          {/* Right items - Responsive layout */}
          <div className="flex items-center justify-start gap-1 lg:gap-2 relative z-10">
            <Link 
              href="#custom" 
              onMouseEnter={() => setHoveredItem("custom")}
              onMouseLeave={() => setHoveredItem(null)}
              className="px-3 lg:px-6 py-2 lg:py-2.5 rounded-full text-xs lg:text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
            >
              <span className="hidden xl:inline">Customization</span>
              <span className="xl:hidden">Custom</span>
            </Link>
            <Link 
              href="#investors" 
              onMouseEnter={() => setHoveredItem("investors")}
              onMouseLeave={() => setHoveredItem(null)}
              className="px-3 lg:px-6 py-2 lg:py-2.5 rounded-full text-xs lg:text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
            >
              Investors
            </Link>
            <Link 
              href="/contact" 
              onMouseEnter={() => setHoveredItem("contact")}
              onMouseLeave={() => setHoveredItem(null)}
              className="px-3 lg:px-6 py-2 lg:py-2.5 rounded-full text-xs lg:text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* Mobile Menu - Positioned absolutely */}
        <div className="md:hidden absolute right-4 sm:right-6 top-3 sm:top-4">
          <MobileMenu />
        </div>

      </div>
    </header>
  );
}