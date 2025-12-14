// "use client";
// import Link from "next/link";
// import { cn } from "@/lib/utils";
// import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

// interface ButtonProps {
//   children: React.ReactNode;
//   href?: string;
//   variant?: "primary" | "outline";
//   className?: string;
//   withGlitter?: boolean;
// }

// export default function Button({
//   children,
//   href,
//   variant = "primary",
//   className,
//   withGlitter = true,
// }: ButtonProps) {
//   const base = "px-8 py-3 rounded-full font-medium transition-all text-sm min-w-[180px] inline-flex items-center justify-center";

//   const variants = {
//     primary:
//       "bg-gradient-to-r from-[#BD00FF] to-[#0057FF] text-white shadow-lg",
//     outline:
//       "border border-white/30 text-white bg-white/0 hover:bg-white/10",
//   };

//   // If glitter effect is enabled for primary variant
//   if (withGlitter && variant === "primary") {
//     if (href) {
//       return (
//         <Link href={href} className="inline-block">
//           <HoverBorderGradient
//             containerClassName="rounded-full"
//             className={cn(
//               "bg-gradient-to-r from-[#BD00FF] to-[#0057FF] text-white font-medium px-8 py-3 min-w-[180px] flex items-center justify-center",
//               className
//             )}
//             as="div"
//             duration={1.5}
//           >
//             {children}
//           </HoverBorderGradient>
//         </Link>
//       );
//     }

//     return (
//       <HoverBorderGradient
//         containerClassName="rounded-full"
//         className={cn(
//           "bg-gradient-to-r from-[#BD00FF] to-[#0057FF] text-white font-medium px-8 py-3 min-w-[180px] flex items-center justify-center",
//           className
//         )}
//         as="button"
//         duration={1.5}
//       >
//         {children}
//       </HoverBorderGradient>
//     );
//   }

//   // Default button without glitter
//   const btn = cn(base, variants[variant], className);

//   if (href) {
//     return (
//       <Link className={btn} href={href}>
//         {children}
//       </Link>
//     );
//   }

//   return <button className={btn}>{children}</button>;
// }




// "use client";
// import Link from "next/link";
// import { cn } from "@/lib/utils";
// import { useState } from "react";

// interface ButtonProps {
//   children: React.ReactNode;
//   href?: string;
//   variant?: "primary" | "outline";
//   className?: string;
//   onClick?: () => void;
// }

// export default function Button({
//   children,
//   href,
//   variant = "primary",
//   className,
//   onClick,
// }: ButtonProps) {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setMousePosition({
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top,
//     });
//   };

//   const baseStyles = `
//     group relative px-8 py-3 rounded-full font-medium text-sm min-w-[180px] 
//     inline-flex items-center justify-center overflow-hidden
//     transition-all duration-500 ease-out
//     transform hover:scale-105 active:scale-95
//   `;

//   const primaryStyles = `
//     bg-white/10 backdrop-blur-xl border border-white/20
//     text-white shadow-[0_8px_32px_rgba(0,0,0,0.3)]
//     hover:bg-white/15 hover:border-white/40
//     hover:shadow-[0_0_40px_rgba(139,92,246,0.6),0_0_80px_rgba(168,85,247,0.4),inset_0_0_30px_rgba(255,255,255,0.1)]
//   `;

//   const outlineStyles = `
//     border-2 border-white/30 text-white
//     bg-white/5 backdrop-blur-xl
//     hover:bg-white/10 hover:border-white/50
//     hover:shadow-[0_0_30px_rgba(255,255,255,0.3),inset_0_0_20px_rgba(255,255,255,0.1)]
//   `;

//   // Pre-generated random positions for glitter particles
//   const glitterParticles = [
//     { id: 0, left: 15, top: 20, delay: 0.2, duration: 3.5 },
//     { id: 1, left: 85, top: 30, delay: 0.8, duration: 2.8 },
//     { id: 2, left: 45, top: 70, delay: 1.2, duration: 3.2 },
//     { id: 3, left: 70, top: 15, delay: 0.5, duration: 2.5 },
//     { id: 4, left: 25, top: 60, delay: 1.5, duration: 3.8 },
//     { id: 5, left: 55, top: 40, delay: 0.3, duration: 2.9 },
//     { id: 6, left: 90, top: 75, delay: 1.8, duration: 3.1 },
//     { id: 7, left: 10, top: 85, delay: 0.7, duration: 2.7 },
//     { id: 8, left: 65, top: 25, delay: 1.0, duration: 3.4 },
//     { id: 9, left: 35, top: 50, delay: 0.4, duration: 2.6 },
//     { id: 10, left: 80, top: 60, delay: 1.3, duration: 3.6 },
//     { id: 11, left: 50, top: 10, delay: 0.9, duration: 3.0 },
//   ];

//   const glitterEffect = (
//     <>
//       {/* Glitter particles */}
//       <span className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
//         {glitterParticles.map((particle) => (
//           <span
//             key={particle.id}
//             className="absolute w-1 h-1 bg-purple-300 rounded-full opacity-0 group-hover:opacity-100 animate-glitter"
//             style={{
//               left: `${particle.left}%`,
//               top: `${particle.top}%`,
//               animationDelay: `${particle.delay}s`,
//               animationDuration: `${particle.duration}s`,
//             }}
//           />
//         ))}
//       </span>

//       {/* Moving gradient spotlight */}
//       <span
//         className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none rounded-full"
//         style={{
//           background: `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, rgba(168,85,247,0.8), transparent 80%)`,
//         }}
//       />

//       {/* Shimmer effect */}
//       <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//         <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-purple-300/30 to-transparent skew-x-12" />
//       </span>

//       {/* Neon glow rings */}
//       <span className="absolute -inset-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-purple-500/50 blur-md -z-10" />
//     </>
//   );

//   const content = (
//     <>
//       {variant === "primary" && glitterEffect}
//       <span className="relative z-10 flex items-center justify-center gap-2">
//         {children}
//       </span>
//     </>
//   );

//   const buttonClasses = cn(
//     baseStyles,
//     variant === "primary" ? primaryStyles : outlineStyles,
//     className
//   );

//   if (href) {
//     return (
//       <Link href={href} className={buttonClasses} onMouseMove={handleMouseMove}>
//         {content}
//       </Link>
//     );
//   }

//   return (
//     <button className={buttonClasses} onClick={onClick} onMouseMove={handleMouseMove}>
//       {content}
//     </button>
//   );
// }






// "use client";
// import Link from "next/link";
// import { cn } from "@/lib/utils";
// import { useState } from "react";

// interface ButtonProps {
//   children: React.ReactNode;
//   href?: string;
//   variant?: "primary" | "outline";
//   className?: string;
//   onClick?: () => void;
// }

// export default function Button({
//   children,
//   href,
//   variant = "primary",
//   className,
//   onClick,
// }: ButtonProps) {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setMousePosition({
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top,
//     });
//   };

//   const baseStyles = `
//     group relative px-10 py-4 rounded-full font-medium text-base min-w-[200px] 
//     inline-flex items-center justify-center overflow-hidden
//     transition-all duration-500 ease-out
//     transform hover:scale-105 active:scale-95
//   `;

//   const primaryStyles = `
//     bg-white/10 backdrop-blur-xl border border-white/20
//     text-white shadow-[0_8px_32px_rgba(0,0,0,0.3)]
//     hover:bg-white/15 hover:border-white/40
//     hover:shadow-[0_0_40px_rgba(139,92,246,0.6),0_0_80px_rgba(168,85,247,0.4),inset_0_0_30px_rgba(255,255,255,0.1)]
//   `;

//   const outlineStyles = `
//     border-2 border-white/30 text-white
//     bg-white/5 backdrop-blur-xl
//     hover:bg-white/10 hover:border-white/50
//     hover:shadow-[0_0_30px_rgba(255,255,255,0.3),inset_0_0_20px_rgba(255,255,255,0.1)]
//   `;

//   const glitterEffect = (
//     <>
//       {/* Moving gradient spotlight */}
//       <span
//         className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none rounded-full"
//         style={{
//           background: `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, rgba(168,85,247,0.8), transparent 80%)`,
//         }}
//       />

//       {/* Shimmer effect */}
//       <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//         <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-purple-300/30 to-transparent skew-x-12" />
//       </span>

//       {/* Neon glow rings */}
//       <span className="absolute -inset-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-purple-500/50 blur-md -z-10" />
//     </>
//   );

//   const content = (
//     <>
//       {variant === "primary" && glitterEffect}
//       <span className="relative z-10 flex items-center justify-center gap-2">
//         {children}
//       </span>
//     </>
//   );

//   const buttonClasses = cn(
//     baseStyles,
//     variant === "primary" ? primaryStyles : outlineStyles,
//     className
//   );

//   if (href) {
//     return (
//       <Link href={href} className={buttonClasses} onMouseMove={handleMouseMove}>
//         {content}
//       </Link>
//     );
//   }

//   return (
//     <button className={buttonClasses} onClick={onClick} onMouseMove={handleMouseMove}>
//       {content}
//     </button>
//   );
// }

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