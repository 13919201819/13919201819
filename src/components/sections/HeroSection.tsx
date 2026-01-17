// "use client";

// import { TypeAnimation } from "react-type-animation";
// import Header from "../layout/Header";

// const HeroSection = () => {
//   return (
//     <>
//       <Header />
      
//       <section
//         className="relative w-full min-h-screen py-24 overflow-hidden bg-gradient-to-b from-black via-purple-950/10 to-black"
//         id="hero"
//       >
//         {/* Animated Background Elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div
//             className="absolute inset-0 z-0"
//             style={{
//               background: "radial-gradient(ellipse 100% 70% at 50% -20%, rgba(139, 92, 246, 0.25), transparent 60%)",
//             }}
//           />
          
//           {/* Floating Orbs */}
//           <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
//           <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
//         </div>

//         {/* Content Container */}
//         <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-[calc(100vh-6rem)]">
//           {/* Header Section */}
//           <div className="text-center space-y-6 w-full">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
//               </span>
//               <span className="text-purple-300 text-sm font-medium">Get Started</span>
//             </div>
            
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
//               <span className="text-white">Multiply Your Profit With</span>
//               <br />
//               <span className="text-white whitespace-nowrap">
//                 Next-Gen{" "}
//                 <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
//                   <TypeAnimation
//                     sequence={[
//                       "AI SaaS Products",
//                       2000,
//                       "Workflow Automations",
//                       2000,
//                       "Platforms",
//                       2000,
//                       "AI Agents",
//                       2000,
//                     ]}
//                     wrapper="span"
//                     speed={50}
//                     repeat={Infinity}
//                     cursor={true}
//                   />
//                 </span>
//               </span>
//             </h1>

//             {/* Description */}
//             <div className="max-w-4xl mx-auto">
//               <p className="text-gray-300 text-lg leading-relaxed">
//                 Built for enterprises to streamline operations, reduce costs, and
//                 grow with secure, reliable, and scalable AI that delivers visible
//                 ROI.
//               </p>
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
//               <a
//                 href="/products"
//                 className="inline-block relative group/btn overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 p-[2px] transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 w-full sm:w-auto"
//               >
//                 <div className="relative bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 rounded-xl px-8 py-4 flex items-center justify-center gap-3 overflow-hidden min-w-[200px]">
//                   <div className="absolute inset-0 bg-black/20"></div>
//                   <span className="text-white font-semibold text-lg relative z-10">Explore Products</span>
//                   <svg className="w-5 h-5 text-white relative z-10 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                   </svg>
//                 </div>
//               </a>

//               <a
//                 href="/book-demo"
//                 className="inline-block px-8 py-4 rounded-xl border border-purple-500/30 bg-purple-500/5 backdrop-blur-sm text-white font-semibold text-lg hover:bg-purple-500/10 hover:border-purple-500/50 transition-all min-w-[200px] w-full sm:w-auto text-center"
//               >
//                 Book a Demo
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom divider */}
//         <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
//       </section>
//     </>
//   );
// };

// export default HeroSection;



"use client";

import { TypeAnimation } from "react-type-animation";
import Header from "../layout/Header";
// import PrimaryButton from "../components/PrimaryButton";
// import SecondaryButton from "../components/SecondaryButton";
import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";

const HeroSection = () => {
  return (
    <>
      <Header />
      
      <section
        className="relative w-full min-h-screen py-24 overflow-hidden bg-gradient-to-b from-black via-purple-950/10 to-black"
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
          
          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-[calc(100vh-6rem)]">
          {/* Header Section */}
          <div className="text-center space-y-6 w-full">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-purple-300 text-sm font-medium">Get Started</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-white">Multiply Your Profit With</span>
              <br />
              <span className="text-white whitespace-nowrap">
                Next-Gen{" "}
                <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
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

            {/* Description */}
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-300 text-lg leading-relaxed">
                Built for enterprises to streamline operations, reduce costs, and
                grow with secure, reliable, and scalable AI that delivers visible
                ROI.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
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