"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
        onClick={() => setOpen(true)}
      >
        ☰
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/80 p-6">
          <button
            onClick={() => setOpen(false)}
            className="text-white text-3xl absolute right-6 top-6"
          >
            ✕
          </button>

          <nav className="mt-20 space-y-6 text-center text-white text-xl">
            <Link href="#products" onClick={() => setOpen(false)}>
              Products
            </Link>
            <Link href="#vision" onClick={() => setOpen(false)}>
              Vision
            </Link>
            <Link href="#idea" onClick={() => setOpen(false)}>
              Drop Idea
            </Link>
            <Link href="#custom" onClick={() => setOpen(false)}>
              Customization
            </Link>
            <Link href="#investors" onClick={() => setOpen(false)}>
              Investors
            </Link>
            <Link href="#contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
