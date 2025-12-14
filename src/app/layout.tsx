import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/ui/LenisProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MISTR. AI",
  description: "Next-Gen AI SaaS that multiplies profit.",
  icons: {
    icon: "/logo.svg", // This sets the favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <LenisProvider />
      <body className={inter.className}>{children}</body>
    </html>
  );
}