"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Product data structure
interface Product {
  id: string;
  title: string;
  description: string;
  category: "AI Agents" | "AI SaaS Products" | "Workflow Automations" | "Platforms";
  logo: string;
  screenshot: string;
  demoUrl: string;
  purchaseUrl: string;
}

// Sample products data
const products: Product[] = [
  {
    id: "1",
    title: "Enterprise AI Assistant",
    description: "Intelligent AI agent that automates customer support, handles inquiries 24/7, and integrates seamlessly with your existing CRM systems.",
    category: "AI Agents",
    logo: "/logos/ai-assistant.svg",
    screenshot: "/screenshots/ai-assistant.jpg",
    demoUrl: "https://demo.ai-assistant.com",
    purchaseUrl: "/contact-sales"
  },
  {
    id: "2",
    title: "Workflow Optimizer Pro",
    description: "Streamline complex business processes with AI-powered automation that reduces operational costs by up to 60%.",
    category: "Workflow Automations",
    logo: "/logos/workflow-optimizer.svg",
    screenshot: "/screenshots/workflow-optimizer.jpg",
    demoUrl: "https://demo.workflow-optimizer.com",
    purchaseUrl: "/contact-sales"
  },
  {
    id: "3",
    title: "Predictive Analytics Suite",
    description: "Enterprise-grade analytics platform powered by machine learning for data-driven decision making at scale.",
    category: "AI SaaS Products",
    logo: "/logos/analytics-suite.svg",
    screenshot: "/screenshots/analytics-suite.jpg",
    demoUrl: "https://demo.analytics-suite.com",
    purchaseUrl: "/contact-sales"
  },
  {
    id: "4",
    title: "Enterprise AI Platform",
    description: "Complete AI infrastructure for Fortune 100 companies, enabling custom model deployment, governance, and compliance.",
    category: "Platforms",
    logo: "/logos/ai-platform.svg",
    screenshot: "/screenshots/ai-platform.jpg",
    demoUrl: "https://demo.ai-platform.com",
    purchaseUrl: "/contact-sales"
  },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<Product["category"]>("AI Agents");

  const categories: Product["category"][] = [
    "AI Agents",
    "AI SaaS Products",
    "Workflow Automations",
    "Platforms"
  ];

  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );

  return (
    <>
      <Header />
      
      <main className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-black via-purple-950/10 to-black pt-42 pb-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(ellipse 100% 70% at 50% -20%, rgba(139, 92, 246, 0.25), transparent 60%)",
          }}
        />
        <div className="absolute top-32 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-purple-300 text-sm font-medium">Enterprise Solutions</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-white">AI-Powered Products Built for</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              Fortune 100 Enterprises
            </span>
          </h1>
          
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Deploy enterprise-grade AI solutions that deliver measurable ROI, ensure compliance, 
            and scale seamlessly across your global operations.
          </p>
        </div>

        {/* Category Toggle Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 text-white shadow-lg shadow-purple-500/30"
                  : "bg-purple-500/5 border border-purple-500/20 text-gray-300 hover:bg-purple-500/10 hover:border-purple-500/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-2xl bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 overflow-hidden backdrop-blur-sm"
            >
              {/* Product Screenshot */}
              <div className="relative w-full h-48 bg-purple-950/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  {/* Placeholder for screenshot */}
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-4">
                {/* Logo & Title */}
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">{product.title}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {product.description}
                </p>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => window.open(product.demoUrl, '_blank')}
                    className="flex-1 px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 font-medium text-sm hover:bg-purple-500/20 hover:border-purple-500/40 transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Explore</span>
                    <svg className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>

                  <a
                    href={product.purchaseUrl}
                    className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 text-white font-medium text-sm hover:shadow-lg hover:shadow-purple-500/30 transition-all text-center"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No products available in this category yet.</p>
          </div>
        )}
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
    </main>
    
    <Footer />
    </>
  );
}