import React from "react";
import Link from "next/link";

interface SecondaryButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  href,
  onClick,
  children,
  className = "",
}) => {
  const baseClasses = `inline-block px-8 py-4 rounded-xl border border-purple-500/30 bg-purple-500/5 backdrop-blur-sm text-white font-semibold text-lg hover:bg-purple-500/10 hover:border-purple-500/50 transition-all min-w-[200px] w-full sm:w-auto text-center ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
};

export default SecondaryButton;