"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
  withGlitter?: boolean; // Added this prop back as it was used in your HeroSection
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className,
  withGlitter = false,
  onClick,
}: ButtonProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const baseStyles = `
    group relative px-10 py-4 rounded-full font-medium text-base min-w-[200px] 
    inline-flex items-center justify-center overflow-hidden
    transition-all duration-500 ease-out
    transform hover:scale-105 active:scale-95
  `;

  // UPDATED: Using #BD00FF (Purple) and #0057FF (Blue) for shadows
  const primaryStyles = `
    bg-white/10 backdrop-blur-xl border border-white/20
    text-white shadow-[0_8px_32px_rgba(0,0,0,0.3)]
    hover:bg-white/15 hover:border-white/40
    hover:shadow-[0_0_40px_rgba(189,0,255,0.5),0_0_80px_rgba(0,87,255,0.3),inset_0_0_30px_rgba(255,255,255,0.1)]
  `;

  const outlineStyles = `
    border-2 border-white/30 text-white
    bg-white/5 backdrop-blur-xl
    hover:bg-white/10 hover:border-white/50
    hover:shadow-[0_0_30px_rgba(255,255,255,0.3),inset_0_0_20px_rgba(255,255,255,0.1)]
  `;

  const glitterEffect = (
    <>
      {/* Moving gradient spotlight - Uses the Brand Purple #BD00FF */}
      <span
        className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none rounded-full"
        style={{
          background: `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, #BD00FF, transparent 80%)`,
        }}
      />

      {/* Shimmer effect - Uses the Brand Blue #0057FF mixed with white */}
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-[#0057FF]/30 to-transparent skew-x-12" />
      </span>

      {/* Neon glow rings - Exact Gradient from Image (#BD00FF to #0057FF) */}
      <span className="absolute -inset-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#BD00FF] to-[#0057FF] blur-md -z-10" />
    </>
  );

  const content = (
    <>
      {variant === "primary" && withGlitter && glitterEffect}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </>
  );

  const buttonClasses = cn(
    baseStyles,
    variant === "primary" ? primaryStyles : outlineStyles,
    className
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses} onMouseMove={handleMouseMove}>
        {content}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick} onMouseMove={handleMouseMove}>
      {content}
    </button>
  );
}