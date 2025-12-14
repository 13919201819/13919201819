// "use client";

// import Button from "@/components/ui/Button";
// import LiquidEther from "../ui/LiquidEther";
// import Header from "../layout/Header";

// export default function HeroSection() {
//   return (
//     <>
//       {/* Import Header Component */}
//       <Header />

//       {/* Hero Section */}
//       <section 
//         className="relative min-h-screen w-full overflow-hidden flex items-center justify-center" 
//         id="hero"
//       >
        
//         {/* Liquid Ether Background */}
//         <div className="absolute inset-0 z-0">
//           <LiquidEther 
//             colors={["#c084fc", "#67e8f9", "#1e1b4b"]} 
//             mouseForce={30}
//             viscous={20}
//             cursorSize={80}
//           />
//         </div>

//         {/* Hero Content - Centered */}
//         <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-20">
//           <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
//             AI-Powered SaaS That
//             <span className="bg-gradient-to-r from-purple-400 to-cyan-300 text-transparent bg-clip-text">
//               {" "}
//               Multiplies Your Profit
//             </span>
//           </h1>

//           <p className="text-gray-300 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
//             Cut operational costs by 60% with intelligent automation. 
//             Make data-driven decisions 10x faster with AI analytics. 
//             Scale effortlessly while your competitors struggle. 
//             See measurable ROI in weeks, not years.
//           </p>

//           <div className="flex flex-wrap justify-center gap-4 mt-10">
//             <Button href="#products" withGlitter={true}>
//               Explore Products
//             </Button>
//             <Button variant="outline" href="#demo" withGlitter={false}>
//               Book a Demo
//             </Button>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


// "use client";

// import { useState, useEffect } from "react";
// import Button from "@/components/ui/Button";
// import LiquidEther from "../ui/LiquidEther";
// import Header from "../layout/Header";

// const ROTATING_WORDS = [
//   "AI SaaS Products",
//   "Workflow Automations",
//   "Platforms",
//   "AI Agents",
// ];

// export default function HeroSection() {
//   const [index, setIndex] = useState(0);

//   // Logic to rotate text every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % ROTATING_WORDS.length);
//     }, 3000); // Change text every 3000ms (3 seconds)

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       {/* Import Header Component */}
//       <Header />

//       {/* Hero Section */}
//       <section
//         className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
//         id="hero"
//       >
//         {/* Liquid Ether Background */}
//         <div className="absolute inset-0 z-0">
//           <LiquidEther
//             colors={["#c084fc", "#67e8f9", "#1e1b4b"]}
//             mouseForce={30}
//             viscous={20}
//             cursorSize={80}
//           />
//         </div>

//         {/* Hero Content - Centered */}
//         <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-20">
//           <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
//             Multiply Your Profit With
//             <br className="hidden md:block" />
//             <span className="block mt-2">
//               Next-Gen{" "}
//               <span className="bg-gradient-to-r from-purple-400 to-cyan-300 text-transparent bg-clip-text animate-pulse">
//                 {ROTATING_WORDS[index]}
//               </span>
//             </span>
//           </h1>

//           <p className="text-gray-300 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
//             Built for enterprises to streamline operations, reduce costs, and
//             grow with secure, reliable, and scalable AI that delivers visible
//             ROI.
//           </p>

//           <div className="flex flex-wrap justify-center gap-4 mt-10">
//             <Button href="#products" withGlitter={true}>
//               Explore Products
//             </Button>
//             <Button variant="outline" href="#demo" withGlitter={false}>
//               Book a Demo
//             </Button>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";

import { TypeAnimation } from "react-type-animation";
import Button from "@/components/ui/Button";
import LiquidEther from "../ui/LiquidEther";
import Header from "../layout/Header";

const HeroSection = () => {
  return (
    <>
      <Header />

      <section
        className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
        id="hero"
      >
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <LiquidEther
            colors={["#c084fc", "#67e8f9", "#1e1b4b"]}
            mouseForce={30}
            viscous={20}
            cursorSize={80}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-20">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            {/* Line 1: Static */}
            Multiply Your Profit With
            
            <br />
            
            {/* Line 2: Static Prefix + Animated Suffix */}
            <span className="block mt-2">
              Next-Gen{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-300 text-transparent bg-clip-text">
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

          <p className="text-gray-300 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
            Built for enterprises to streamline operations, reduce costs, and
            grow with secure, reliable, and scalable AI that delivers visible
            ROI.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button href="#products">
              Explore Products
            </Button>
            <Button  href="#demo">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;