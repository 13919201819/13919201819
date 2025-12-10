"use client";

import LanguageSelector from "@/components/ui/LanguageSelector";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo Only - Left */}
        <Link href="/" className="flex items-center">
          <div className="relative w-12 h-12 hover:scale-105 transition-transform">
            <Image 
              src="/logo.svg" 
              alt="MistrAI Logo" 
              fill 
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Nav - Center (Cylindrical/Pill Shape) */}
        <nav className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-md bg-black/40 border border-white/10 shadow-lg">
          <Link 
            href="#products" 
            className="px-4 py-2 rounded-full text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all"
          >
            Products
          </Link>
          <Link 
            href="#vision" 
            className="px-4 py-2 rounded-full text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all"
          >
            Vision
          </Link>
          <Link 
            href="#idea" 
            className="px-4 py-2 rounded-full text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all"
          >
            Drop Idea
          </Link>
          <Link 
            href="#custom" 
            className="px-4 py-2 rounded-full text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all"
          >
            Customization
          </Link>
          <Link 
            href="#investors" 
            className="px-4 py-2 rounded-full text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all"
          >
            Investors
          </Link>
          <Link 
            href="#contact" 
            className="px-4 py-2 rounded-full text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all"
          >
            Contact
          </Link>
        </nav>

        {/* Right section - Language Selector */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <LanguageSelector />
          </div>
          <MobileMenu />
        </div>

      </div>
    </header>
  );
}