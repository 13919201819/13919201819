// "use client";

// import { useState } from "react";
// import Link from "next/link";

// export default function MobileMenu() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <button
//         className="md:hidden w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
//         onClick={() => setOpen(true)}
//       >
//         ☰
//       </button>

//       {open && (
//         <div className="fixed inset-0 z-50 bg-black/80 p-6">
//           <button
//             onClick={() => setOpen(false)}
//             className="text-white text-3xl absolute right-6 top-6"
//           >
//             ✕
//           </button>

//           <nav className="mt-20 space-y-6 text-center text-white text-xl">
//             <Link href="/products" onClick={() => setOpen(false)}>
//               Products
//             </Link>
//             <Link href="/vision" onClick={() => setOpen(false)}>
//               Vision
//             </Link>
//             <Link href="/idea" onClick={() => setOpen(false)}>
//               Drop Idea
//             </Link>
//             <Link href="/custom" onClick={() => setOpen(false)}>
//               Customization
//             </Link>
//             <Link href="/investors" onClick={() => setOpen(false)}>
//               Investors
//             </Link>
//             <Link href="/contact" onClick={() => setOpen(false)}>
//               Contact
//             </Link>
//           </nav>
//         </div>
//       )}
//     </>
//   );
// }






"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Products", href: "/products" },
    { name: "Vision", href: "/vision" },
    { name: "Drop Idea", href: "#idea" },
    { name: "Customization", href: "#custom" },
    { name: "Investors", href: "#investors" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="md:hidden w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95 z-50 relative"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {!open ? (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </button>

      {/* Dropdown Menu */}
      {open && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setOpen(false)}
          />
          
          {/* Menu Panel - Slides from top */}
          <div className="fixed top-16 sm:top-20 right-4 sm:right-6 w-64 sm:w-72 bg-gradient-to-b from-gray-900 to-black border border-purple-500/20 rounded-2xl shadow-2xl shadow-purple-500/20 z-50 overflow-hidden animate-slideDown">
            {/* Gradient Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-violet-500/5 pointer-events-none" />
            
            {/* Navigation Links */}
            <nav className="relative p-2">
              {menuItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-violet-500/20 border border-transparent hover:border-purple-500/30 transition-all duration-300"
                  style={{ 
                    animation: `slideIn 0.3s ease-out ${index * 50}ms forwards`,
                    opacity: 0 
                  }}
                >
                  <span className="text-sm sm:text-base font-medium">{item.name}</span>
                  <svg 
                    className="w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </nav>

            {/* Social Links */}
            <div className="relative border-t border-white/10 p-4">
              <div className="flex items-center justify-center gap-3">
                <a 
                  href="#" 
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/50 flex items-center justify-center text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/50 flex items-center justify-center text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110"
                  aria-label="Twitter"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a 
                  href="mailto:contact@mistrai.com" 
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/50 flex items-center justify-center text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110"
                  aria-label="Email"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}