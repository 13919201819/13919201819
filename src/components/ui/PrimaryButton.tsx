import React from "react";
import Link from "next/link";

interface PrimaryButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  icon?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  href,
  onClick,
  children,
  className = "",
  icon = true,
}) => {
  const buttonContent = (
    <div className="relative bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 rounded-xl px-8 py-4 flex items-center justify-center gap-3 overflow-hidden min-w-[200px]">
      <div className="absolute inset-0 bg-black/20"></div>
      <span className="text-white font-semibold text-lg relative z-10">
        {children}
      </span>
      {icon && (
        <svg
          className="w-5 h-5 text-white relative z-10 group-hover/btn:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      )}
    </div>
  );

  const baseClasses = `inline-block relative group/btn overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 p-[2px] transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 w-full sm:w-auto ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {buttonContent}
    </button>
  );
};

export default PrimaryButton;