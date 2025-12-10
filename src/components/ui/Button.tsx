// import Link from "next/link";
// import { cn } from "@/lib/utils";

// export default function Button({
//   children,
//   href,
//   variant = "primary",
//   className,
// }: any) {
//   const base =
//     "px-5 py-3 rounded-full font-medium transition-all text-sm";

//   const variants = {
//     primary:
//       "bg-gradient-to-r from-purple-500 to-cyan-400 text-black shadow-lg",
//     outline:
//       "border border-white/30 text-white bg-white/0 hover:bg-white/10",
//   };

//   const btn = cn(base, variants[variant], className);

//   if (href) return <Link className={btn} href={href}>{children}</Link>;

//   return <button className={btn}>{children}</button>;
// }




// "use client";
// import Link from "next/link";
// import { cn } from "@/lib/utils";
// import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

// export default function Button({
//   children,
//   href,
//   variant = "primary",
//   className,
//   withGlitter = true,
// }: {
//   children: React.ReactNode;
//   href?: string;
//   variant?: "primary" | "outline";
//   className?: string;
//   withGlitter?: boolean;
// }) {
//   const base = "px-5 py-3 rounded-full font-medium transition-all text-sm";

//   const variants = {
//     primary:
//       "bg-gradient-to-r from-purple-500 to-cyan-400 text-black shadow-lg",
//     outline:
//       "border border-white/30 text-white bg-white/0 hover:bg-white/10",
//   };

//   // If glitter effect is enabled for primary variant
//   if (withGlitter && variant === "primary") {
//     const ButtonContent = () => (
//       <HoverBorderGradient
//         containerClassName="rounded-full"
//         className={cn(
//           "bg-gradient-to-r from-purple-500 to-cyan-400 text-black font-medium px-5 py-3",
//           className
//         )}
//         as={href ? "a" : "button"}
//         duration={1.5}
//       >
//         {children}
//       </HoverBorderGradient>
//     );

//     if (href) {
//       return (
//         <Link href={href} className="inline-block">
//           <ButtonContent />
//         </Link>
//       );
//     }

//     return <ButtonContent />;
//   }

//   // Default button without glitter
//   const btn = cn(base, variants[variant], className);

//   if (href) return <Link className={btn} href={href}>{children}</Link>;

//   return <button className={btn}>{children}</button>;
// }


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
//   const base = "px-5 py-3 rounded-full font-medium transition-all text-sm";

//   const variants = {
//     primary:
//       "bg-gradient-to-r from-purple-500 to-cyan-400 text-black shadow-lg",
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
//               "bg-gradient-to-r from-purple-500 to-cyan-400 text-black font-medium px-5 py-3",
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
//           "bg-gradient-to-r from-purple-500 to-cyan-400 text-black font-medium px-5 py-3",
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

"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
  withGlitter?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className,
  withGlitter = true,
}: ButtonProps) {
  const base = "px-8 py-3 rounded-full font-medium transition-all text-sm min-w-[180px] inline-flex items-center justify-center";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#BD00FF] to-[#0057FF] text-white shadow-lg",
    outline:
      "border border-white/30 text-white bg-white/0 hover:bg-white/10",
  };

  // If glitter effect is enabled for primary variant
  if (withGlitter && variant === "primary") {
    if (href) {
      return (
        <Link href={href} className="inline-block">
          <HoverBorderGradient
            containerClassName="rounded-full"
            className={cn(
              "bg-gradient-to-r from-[#BD00FF] to-[#0057FF] text-white font-medium px-8 py-3 min-w-[180px] flex items-center justify-center",
              className
            )}
            as="div"
            duration={1.5}
          >
            {children}
          </HoverBorderGradient>
        </Link>
      );
    }

    return (
      <HoverBorderGradient
        containerClassName="rounded-full"
        className={cn(
          "bg-gradient-to-r from-[#BD00FF] to-[#0057FF] text-white font-medium px-8 py-3 min-w-[180px] flex items-center justify-center",
          className
        )}
        as="button"
        duration={1.5}
      >
        {children}
      </HoverBorderGradient>
    );
  }

  // Default button without glitter
  const btn = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link className={btn} href={href}>
        {children}
      </Link>
    );
  }

  return <button className={btn}>{children}</button>;
}
