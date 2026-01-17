"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function CustomizationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    organizationName: "",
    organizationWebsite: "",
    industry: "",
    organizationSize: "",
    fullName: "",
    workEmail: "",
    roleDesignation: "",
    productType: "",
    customizationScope: "",
    requirements: "",
    timeline: ""
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (Object.values(formData).some(v => !v)) {
      alert("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log("Customization submitted:", formData);

    setIsSubmitting(false);
    setFormData({
      organizationName: "",
      organizationWebsite: "",
      industry: "",
      organizationSize: "",
      fullName: "",
      workEmail: "",
      roleDesignation: "",
      productType: "",
      customizationScope: "",
      requirements: "",
      timeline: ""
    });

    alert("✅ Thank you. Our MistrAI team will contact you shortly.");
  };

  return (
    <>
      <Header />

      {/* MAIN SECTION */}
      <section className="relative w-full min-h-screen pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-24 md:pb-40 overflow-hidden bg-gradient-to-b from-black via-purple-950/10 to-black">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 100% 70% at 50% -20%, rgba(139, 92, 246, 0.25), transparent 60%)"
            }}
          />
          <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center space-y-4 sm:space-y-6 mb-10 sm:mb-14 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
              <span className="text-purple-300 text-xs sm:text-sm font-medium">
                Product Customization
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight px-4">
              <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                Customize MistrAI Products
              </span>
            </h1>

            <p className="max-w-3xl mx-auto text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed px-4">
              Tailor AI SaaS products, agents, platforms, and workflows to your
              organization&aposs data, processes, and scale.
            </p>
          </div>

          {/* FORM CARD */}
          <div className="max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 rounded-2xl sm:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-1000" />

              <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-black/90 backdrop-blur-xl border border-gray-800/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl">
                <div className="space-y-8 sm:space-y-10">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center">
                    Customization Request Form
                  </h2>

                  {/* Organization */}
                  <Section title="Organization Details">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                      <InputField
                        label="Organization Name"
                        name="organizationName"
                        value={formData.organizationName}
                        onChange={handleInputChange}
                        placeholder="Your Organization"
                      />
                      <InputField
                        label="Organization Website"
                        name="organizationWebsite"
                        value={formData.organizationWebsite}
                        onChange={handleInputChange}
                        placeholder="https://example.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                      <InputField
                        label="Industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        placeholder="Healthcare, Finance, Retail"
                      />
                      <SelectField
                        label="Organization Size"
                        name="organizationSize"
                        value={formData.organizationSize}
                        onChange={handleInputChange}
                        options={["Startup", "SME", "Enterprise"]}
                      />
                    </div>
                  </Section>

                  {/* Contact */}
                  <Section title="Contact Person">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                      <InputField
                        label="Full Name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                      />
                      <InputField
                        label="Work Email"
                        name="workEmail"
                        value={formData.workEmail}
                        onChange={handleInputChange}
                        placeholder="john@company.com"
                      />
                      <InputField
                        label="Role / Designation"
                        name="roleDesignation"
                        value={formData.roleDesignation}
                        onChange={handleInputChange}
                        placeholder="CTO, Product Head"
                        className="sm:col-span-2 lg:col-span-1"
                      />
                    </div>
                  </Section>

                  {/* Customization */}
                  <Section title="Customization Details">
                    <SelectField
                      label="Product Type"
                      name="productType"
                      value={formData.productType}
                      onChange={handleInputChange}
                      options={[
                        "AI SaaS Product",
                        "AI Agent",
                        "Workflow Automation",
                        "Platform",
                        "Not sure yet"
                      ]}
                    />

                    <SelectField
                      label="Customization Scope"
                      name="customizationScope"
                      value={formData.customizationScope}
                      onChange={handleInputChange}
                      options={[
                        "Industry-specific tuning",
                        "Workflow integration",
                        "UI / UX customization",
                        "Model or logic extension",
                        "Deployment & scaling"
                      ]}
                    />

                    <TextareaField
                      label="Requirements"
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      placeholder="Describe your customization requirements..."
                    />
                  </Section>

                  {/* Timeline */}
                  <SelectField
                    label="Expected Timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    options={[
                      "Immediate",
                      "1–3 months",
                      "3–6 months",
                      "Long-term"
                    ]}
                  />

                  {/* Submit */}
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full mt-6 rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold text-base sm:text-lg hover:shadow-lg hover:shadow-purple-500/50 transition disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                  >
                    {isSubmitting
                      ? "Submitting..."
                      : "Submit Customization Request"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      {/* FOOTER */}
      <Footer />
    </>
  );
}

/* ---------------- Reusable Components ---------------- */

// function Section({ title, children }: any) {
//   return (
//     <div className="space-y-5 sm:space-y-6 pt-2 sm:pt-4">
//       <h3 className="text-white font-semibold text-base sm:text-lg">{title}</h3>
//       {children}
//     </div>
//   );
// }

// function InputField({ label, className = "", ...props }: any) {
//   return (
//     <div className={`space-y-3 ${className}`}>
//       <label className="block text-white text-sm sm:text-base font-medium">
//         {label}
//       </label>
//       <input
//         {...props}
//         className="w-full px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl bg-black/40 border border-gray-700/50
//                    text-gray-200 text-sm sm:text-base placeholder:text-gray-500 focus:outline-none
//                    focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20
//                    transition"
//       />
//     </div>
//   );
// }

// function TextareaField({ label, ...props }: any) {
//   return (
//     <div className="space-y-3">
//       <label className="block text-white text-sm sm:text-base font-medium">
//         {label}
//       </label>
//       <textarea
//         {...props}
//         rows={5}
//         className="w-full p-3 sm:p-4 rounded-xl bg-black/40 border border-gray-700/50
//                    text-gray-200 text-sm sm:text-base placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50
//                    focus:ring-2 focus:ring-purple-500/20 transition resize-none"
//       />
//     </div>
//   );
// }

// function SelectField({ label, options, ...props }: any) {
//   return (
//     <div className="space-y-3">
//       <label className="block text-white text-sm sm:text-base font-medium">
//         {label}
//       </label>
//       <select
//         {...props}
//         className="w-full px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl bg-black/40 border border-gray-700/50
//                    text-gray-200 text-sm sm:text-base focus:outline-none focus:border-purple-500/50
//                    focus:ring-2 focus:ring-purple-500/20 transition appearance-none cursor-pointer"
//       >
//         <option value="" className="bg-gray-900">Select option</option>
//         {options.map((opt: string) => (
//           <option key={opt} value={opt} className="bg-gray-900">
//             {opt}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }





import { ReactNode, InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <div className="space-y-5 sm:space-y-6 pt-2 sm:pt-4">
      <h3 className="text-white font-semibold text-base sm:text-lg">{title}</h3>
      {children}
    </div>
  );
}

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
}

function InputField({ label, className = "", ...props }: InputFieldProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      <label className="block text-white text-sm sm:text-base font-medium">
        {label}
      </label>
      <input
        {...props}
        className="w-full px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl bg-black/40 border border-gray-700/50
                   text-gray-200 text-sm sm:text-base placeholder:text-gray-500 focus:outline-none
                   focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20
                   transition"
      />
    </div>
  );
}

interface TextareaFieldProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'rows'> {
  label: string;
}

function TextareaField({ label, ...props }: TextareaFieldProps) {
  return (
    <div className="space-y-3">
      <label className="block text-white text-sm sm:text-base font-medium">
        {label}
      </label>
      <textarea
        {...props}
        rows={5}
        className="w-full p-3 sm:p-4 rounded-xl bg-black/40 border border-gray-700/50
                   text-gray-200 text-sm sm:text-base placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50
                   focus:ring-2 focus:ring-purple-500/20 transition resize-none"
      />
    </div>
  );
}

interface SelectFieldProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  label: string;
  options: string[];
}

function SelectField({ label, options, ...props }: SelectFieldProps) {
  return (
    <div className="space-y-3">
      <label className="block text-white text-sm sm:text-base font-medium">
        {label}
      </label>
      <select
        {...props}
        className="w-full px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl bg-black/40 border border-gray-700/50
                   text-gray-200 text-sm sm:text-base focus:outline-none focus:border-purple-500/50
                   focus:ring-2 focus:ring-purple-500/20 transition appearance-none cursor-pointer"
      >
        <option value="" className="bg-gray-900">Select option</option>
        {options.map((opt: string) => (
          <option key={opt} value={opt} className="bg-gray-900">
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}