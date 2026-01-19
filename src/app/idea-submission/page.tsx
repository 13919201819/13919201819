// "use client";

// import { useState } from "react";
// import Header from "@/components/layout/Header";
// import Footer from "@/components/layout/Footer";

// export default function IdeaSubmissionPage() {
//   const [fileName, setFileName] = useState<string>("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     company: "",
//     industry: "",
//     whoAreYou: "",
//     ideaTitle: "",
//     idea: "",
//     whyValuable: ""
//   }); 

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const validTypes = [
//         "application/pdf",
//         "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//         "application/msword"
//       ];
      
//       const maxSize = 10 * 1024 * 1024; // 10MB
      
//       if (!validTypes.includes(file.type)) {
//         alert("Please upload only PDF or DOCX files");
//         e.target.value = "";
//         return;
//       }
      
//       if (file.size > maxSize) {
//         alert("File size must be less than 10MB");
//         e.target.value = "";
//         return;
//       }
      
//       setFileName(file.name);
//     }
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async () => {
//     if (!formData.fullName || !formData.email || !formData.whoAreYou || !formData.ideaTitle || !formData.idea) {
//       alert("Please fill in all required fields");
//       return;
//     }
    
//     setIsSubmitting(true);
    
//     // Simulate submission
//     await new Promise(resolve => setTimeout(resolve, 2000));
    
//     console.log("Form submitted:", formData);
//     setIsSubmitting(false);
    
//     // Reset form
//     setFormData({
//       fullName: "",
//       email: "",
//       company: "",
//       industry: "",
//       whoAreYou: "",
//       ideaTitle: "",
//       idea: "",
//       whyValuable: ""
//     });
//     setFileName("");
    
//     // Show success message
//     alert("✅ Thank you for sharing your idea. We review submissions periodically and may reach out if we find alignment or inspiration.");
//   };

//   return (
//     <>
//       <Header />
      
//       <main className="relative w-full min-h-screen py-24 overflow-hidden bg-gradient-to-b from-black via-purple-950/10 to-black">
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
//         <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Header Section */}
//           <div className="text-center space-y-6 mb-16">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
//               </span>
//               <span className="text-purple-300 text-sm font-medium">Share Your Vision</span>
//             </div>
            
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
//               <span className="text-white">Contribute Ideas That Can Be</span>
//               <br />
//               <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
//                 Executed at Enterprise Scale
//               </span>
//             </h1>
            
//             <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
//               This space is designed for individuals who see practical opportunities where artificial intelligence can deliver measurable value. Whether your idea relates to AI agents, workflow automation, SaaS products, or platforms, we welcome well-thought-out concepts that can be evaluated, refined, and executed within real-world enterprise environments.
//             </p>
//           </div>

//           {/* Form Card */}
//           <div className="max-w-4xl mx-auto">
//             <div className="relative group">
//               {/* Glow Effect */}
//               <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              
//               {/* Form Container */}
//               <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-black/90 backdrop-blur-xl border border-gray-800/50 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl">
//                 <div className="space-y-6">
//                   {/* Name and Email Row */}
//                   <div className="grid sm:grid-cols-2 gap-6">
//                     <div className="space-y-2">
//                       <label className="flex items-center gap-2 text-white font-medium text-sm">
//                         <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                         </svg>
//                         Full Name
//                       </label>
//                       <input
//                         type="text"
//                         name="fullName"
//                         value={formData.fullName}
//                         onChange={handleInputChange}
//                         placeholder="John Doe"
//                         className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-gray-700/50 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
//                       />
//                     </div>

//                     <div className="space-y-2">
//                       <label className="flex items-center gap-2 text-white font-medium text-sm">
//                         <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                         </svg>
//                         Email Address
//                       </label>
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         placeholder="john@company.com"
//                         className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-gray-700/50 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
//                       />
//                     </div>
//                   </div>

//                   {/* Who Are You and Company Row */}
//                   <div className="grid sm:grid-cols-2 gap-6">
//                     <div className="space-y-2">
//                       <label className="flex items-center gap-2 text-white font-medium text-sm">
//                         <span>👤</span>
//                         Who are you?
//                       </label>
//                       <div className="relative">
//                         <select
//                           name="whoAreYou"
//                           value={formData.whoAreYou}
//                           onChange={handleInputChange}
//                           className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-gray-700/50 text-gray-200 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 appearance-none cursor-pointer"
//                         >
//                           <option value="" className="bg-gray-900">Select</option>
//                           <option value="student" className="bg-gray-900">Student</option>
//                           <option value="professional" className="bg-gray-900">Professional</option>
//                           <option value="business-owner" className="bg-gray-900">Business Owner</option>
//                           <option value="creator" className="bg-gray-900">Creator</option>
//                           <option value="other" className="bg-gray-900">Other</option>
//                         </select>
//                         <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                         </svg>
//                       </div>
//                     </div>

//                     <div className="space-y-2">
//                       <label className="flex items-center gap-2 text-white font-medium text-sm">
//                         <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                         </svg>
//                         Company
//                         <span className="text-gray-500 text-xs font-normal">(Optional)</span>
//                       </label>
//                       <input
//                         type="text"
//                         name="company"
//                         value={formData.company}
//                         onChange={handleInputChange}
//                         placeholder="Acme Inc."
//                         className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-gray-700/50 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
//                       />
//                     </div>
//                   </div>

//                   {/* Industry Row */}
//                   <div className="space-y-2">
//                     <label className="flex items-center gap-2 text-white font-medium text-sm">
//                       <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                       </svg>
//                       Industry
//                       <span className="text-gray-500 text-xs font-normal">(Optional)</span>
//                     </label>
//                     <div className="relative">
//                       <select
//                         name="industry"
//                         value={formData.industry}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-gray-700/50 text-gray-200 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 appearance-none cursor-pointer"
//                       >
//                         <option value="" className="bg-gray-900">Select industry</option>
//                         <option value="technology" className="bg-gray-900">Technology</option>
//                         <option value="healthcare" className="bg-gray-900">Healthcare</option>
//                         <option value="finance" className="bg-gray-900">Finance</option>
//                         <option value="retail" className="bg-gray-900">Retail & E-commerce</option>
//                         <option value="manufacturing" className="bg-gray-900">Manufacturing</option>
//                         <option value="education" className="bg-gray-900">Education</option>
//                         <option value="logistics" className="bg-gray-900">Logistics & Supply Chain</option>
//                         <option value="other" className="bg-gray-900">Other</option>
//                       </select>
//                       <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                       </svg>
//                     </div>
//                   </div>

//                   {/* Idea Details Section Header */}
//                   <div className="pt-4">
//                     <h3 className="text-white font-semibold text-lg mb-1">Idea Details</h3>
//                     <div className="h-px bg-gradient-to-r from-purple-500/50 via-purple-500/20 to-transparent"></div>
//                   </div>

//                   {/* Idea Title */}
//                   <div className="space-y-2">
//                     <label className="flex items-center gap-2 text-white font-medium text-sm">
//                       <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
//                       </svg>
//                       Idea Title
//                     </label>
//                     <input
//                       type="text"
//                       name="ideaTitle"
//                       value={formData.ideaTitle}
//                       onChange={handleInputChange}
//                       placeholder="Give your idea a short title"
//                       className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-gray-700/50 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
//                     />
//                   </div>

//                   {/* Describe Your Idea Textarea */}
//                   <div className="space-y-2">
//                     <label className="flex items-center gap-2 text-white font-medium text-sm">
//                       <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//                       </svg>
//                       Describe Your Idea
//                     </label>
//                     <textarea
//                       name="idea"
//                       value={formData.idea}
//                       onChange={handleInputChange}
//                       className="w-full p-4 rounded-xl bg-black/40 border border-gray-700/50 text-gray-200 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 placeholder:text-gray-500 resize-none"
//                       rows={6}
//                       placeholder="Share your concept, thought, or opinion here…"
//                     />
//                   </div>

//                   {/* Why Valuable Textarea */}
//                   <div className="space-y-2">
//                     <label className="flex items-center gap-2 text-white font-medium text-sm">
//                       <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                       </svg>
//                       Why do you think this idea creates value?
//                       <span className="text-gray-500 text-xs font-normal">(Optional)</span>
//                     </label>
//                     <textarea
//                       name="whyValuable"
//                       value={formData.whyValuable}
//                       onChange={handleInputChange}
//                       className="w-full p-4 rounded-xl bg-black/40 border border-gray-700/50 text-gray-200 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 placeholder:text-gray-500 resize-none"
//                       rows={4}
//                       placeholder="Optional explanation"
//                     />
//                   </div>

//                   {/* File Upload */}
//                   <div className="space-y-2">
//                     <label className="flex items-center gap-2 text-white font-medium text-sm">
//                       <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
//                       </svg>
//                       Attach Document
//                       <span className="text-gray-500 text-xs font-normal">(Optional)</span>
//                     </label>
//                     <div className="relative">
//                       <input
//                         type="file"
//                         accept=".pdf,.doc,.docx"
//                         onChange={handleFileChange}
//                         className="hidden"
//                         id="file-upload"
//                       />
//                       <label
//                         htmlFor="file-upload"
//                         className="flex flex-col items-center justify-center gap-3 w-full p-8 rounded-xl bg-black/20 border-2 border-dashed border-gray-700/50 hover:border-purple-500/50 hover:bg-black/30 cursor-pointer transition-all duration-300 group"
//                       >
//                         <div className="p-3 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
//                           <svg className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
//                           </svg>
//                         </div>
//                         {fileName ? (
//                           <div className="flex items-center gap-2 text-purple-300">
//                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                             </svg>
//                             <span className="font-medium">{fileName}</span>
//                           </div>
//                         ) : (
//                           <>
//                             <span className="text-gray-300 font-medium group-hover:text-purple-300 transition-colors">
//                               Click to upload or drag and drop
//                             </span>
//                             <span className="text-gray-500 text-sm">PDF or DOCX (Max 10MB)</span>
//                           </>
//                         )}
//                       </label>
//                     </div>
//                   </div>

//                   {/* Submit Button */}
//                   <button
//                     onClick={handleSubmit}
//                     disabled={isSubmitting}
//                     className="relative w-full group overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 p-[2px] transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     <div className="relative bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 rounded-xl px-8 py-4 flex items-center justify-center gap-3 overflow-hidden">
//                       <div className="absolute inset-0 bg-black/20"></div>
//                       {isSubmitting ? (
//                         <>
//                           <svg className="animate-spin h-5 w-5 text-white relative z-10" fill="none" viewBox="0 0 24 24">
//                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                           </svg>
//                           <span className="text-white font-semibold text-lg relative z-10">Sending...</span>
//                         </>
//                       ) : (
//                         <>
//                           <span className="text-white font-semibold text-lg relative z-10">Send Message</span>
//                           <svg className="w-5 h-5 text-white relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                           </svg>
//                         </>
//                       )}
//                     </div>
//                   </button>

//                   {/* Privacy Notice */}
//                   <p className="text-center text-gray-500 text-sm leading-relaxed">
//                     By submitting, you agree to our{" "}
//                     <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors underline">
//                       Privacy Policy
//                     </a>
//                     . We will never share your information.
//                   </p>

//                   {/* Disclaimer */}
//                   <div className="flex items-start gap-2 pt-2">
//                     <p className="text-gray-500 text-xs leading-relaxed">
//                       <span className="font-medium">Note:</span> This section is for idea sharing only. Submissions do not imply partnerships, investments, or commercial commitments.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Additional Info Cards */}
//           <div className="mt-16 grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
//             <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/10">
//               <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/10 mb-4">
//                 <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                 </svg>
//               </div>
//               <h3 className="text-white font-semibold mb-2">Quick Response</h3>
//               <p className="text-gray-400 text-sm">We review all submissions within 48 hours</p>
//             </div>

//             <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-violet-500/5 to-transparent border border-violet-500/10">
//               <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-500/10 mb-4">
//                 <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                 </svg>
//               </div>
//               <h3 className="text-white font-semibold mb-2">Confidential</h3>
//               <p className="text-gray-400 text-sm">Your ideas are protected by NDA</p>
//             </div>

//             <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/10">
//               <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/10 mb-4">
//                 <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                 </svg>
//               </div>
//               <h3 className="text-white font-semibold mb-2">Collaborative</h3>
//               <p className="text-gray-400 text-sm">We work together to refine your vision</p>
//             </div>
//           </div>
//         </div>

//         {/* Bottom divider */}
//         <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
//       </main>

//       <Footer />
//     </>
//   );
// }





"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function IdeaSubmissionPage() {
  const [fileName, setFileName] = useState<string>("");
  const [fileData, setFileData] = useState<string>("");
  const [fileType, setFileType] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    industry: "",
    whoAreYou: "",
    ideaTitle: "",
    idea: "",
    whyValuable: ""
  }); 

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const validTypes = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/msword"
      ];
      
      const maxSize = 10 * 1024 * 1024; // 10MB
      
      if (!validTypes.includes(file.type)) {
        alert("Please upload only PDF or DOCX files");
        e.target.value = "";
        return;
      }
      
      if (file.size > maxSize) {
        alert("File size must be less than 10MB");
        e.target.value = "";
        return;
      }
      
      setFileName(file.name);
      setFileType(file.type);
      
      // Convert file to base64
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64String = event.target?.result as string;
        setFileData(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.whoAreYou || !formData.ideaTitle || !formData.idea) {
      alert("Please fill in all required fields");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Send data to API with complete file data
      const response = await fetch('https://connect-2-gamma.vercel.app/api/idea-submission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          file: fileData ? {
            name: fileName,
            type: fileType,
            data: fileData // base64 encoded file
          } : null
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          company: "",
          industry: "",
          whoAreYou: "",
          ideaTitle: "",
          idea: "",
          whyValuable: ""
        });
        setFileName("");
        setFileData("");
        setFileType("");
        
        // Clear file input
        const fileInput = document.getElementById('file-upload') as HTMLInputElement;
        if (fileInput) fileInput.value = "";
        
        // Show success message
        alert("✅ Thank you for sharing your idea. We review submissions periodically and may reach out if we find alignment or inspiration.");
      } else {
        throw new Error(result.error || 'Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert("❌ Failed to submit your idea. Please try again or contact support.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      
      <main className="relative w-full min-h-screen py-24 overflow-hidden bg-gradient-to-b from-black via-purple-950/10 to-black">
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
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-purple-300 text-sm font-medium">Share Your Vision</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-white">Contribute Ideas That Can Be</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                Executed at Enterprise Scale
              </span>
            </h1>
            
            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
              This space is designed for individuals who see practical opportunities where artificial intelligence can deliver measurable value. Whether your idea relates to AI agents, workflow automation, SaaS products, or platforms, we welcome well-thought-out concepts that can be evaluated, refined, and executed within real-world enterprise environments.
            </p>
          </div>

          {/* Form Card */}
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              
              {/* Form Container */}
              <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-black/90 backdrop-blur-xl border border-gray-800/50 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl">
                <div className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-white font-medium text-sm">
                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-gray-700/50 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-white font-medium text-sm">
                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-gray-700/50 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Who Are You and Company Row */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="whoAreYou" className="flex items-center gap-2 text-white font-medium text-sm">
                        <span>👤</span>
                        Who are you?
                      </label>
                      <div className="relative">
                        <select
                          id="whoAreYou"
                          name="whoAreYou"
                          value={formData.whoAreYou}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-gray-700/50 text-gray-200 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-gray-900">Select</option>
                          <option value="student" className="bg-gray-900">Student</option>
                          <option value="professional" className="bg-gray-900">Professional</option>
                          <option value="business-owner" className="bg-gray-900">Business Owner</option>
                          <option value="creator" className="bg-gray-900">Creator</option>
                          <option value="other" className="bg-gray-900">Other</option>
                        </select>
                        <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-white font-medium text-sm">
                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        Company
                        <span className="text-gray-500 text-xs font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Acme Inc."
                        className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-gray-700/50 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Industry Row */}
                  <div className="space-y-2">
                    <label htmlFor="industry" className="flex items-center gap-2 text-white font-medium text-sm">
                      <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Industry
                      <span className="text-gray-500 text-xs font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-gray-700/50 text-gray-200 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-gray-900">Select industry</option>
                        <option value="technology" className="bg-gray-900">Technology</option>
                        <option value="healthcare" className="bg-gray-900">Healthcare</option>
                        <option value="finance" className="bg-gray-900">Finance</option>
                        <option value="retail" className="bg-gray-900">Retail & E-commerce</option>
                        <option value="manufacturing" className="bg-gray-900">Manufacturing</option>
                        <option value="education" className="bg-gray-900">Education</option>
                        <option value="logistics" className="bg-gray-900">Logistics & Supply Chain</option>
                        <option value="other" className="bg-gray-900">Other</option>
                      </select>
                      <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Idea Details Section Header */}
                  <div className="pt-4">
                    <h3 className="text-white font-semibold text-lg mb-1">Idea Details</h3>
                    <div className="h-px bg-gradient-to-r from-purple-500/50 via-purple-500/20 to-transparent"></div>
                  </div>

                  {/* Idea Title */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-white font-medium text-sm">
                      <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                      Idea Title
                    </label>
                    <input
                      type="text"
                      name="ideaTitle"
                      value={formData.ideaTitle}
                      onChange={handleInputChange}
                      placeholder="Give your idea a short title"
                      className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-gray-700/50 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    />
                  </div>

                  {/* Describe Your Idea Textarea */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-white font-medium text-sm">
                      <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      Describe Your Idea
                    </label>
                    <textarea
                      name="idea"
                      value={formData.idea}
                      onChange={handleInputChange}
                      className="w-full p-4 rounded-xl bg-black/40 border border-gray-700/50 text-gray-200 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 placeholder:text-gray-500 resize-none"
                      rows={6}
                      placeholder="Share your concept, thought, or opinion here…"
                    />
                  </div>

                  {/* Why Valuable Textarea */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-white font-medium text-sm">
                      <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Why do you think this idea creates value?
                      <span className="text-gray-500 text-xs font-normal">(Optional)</span>
                    </label>
                    <textarea
                      name="whyValuable"
                      value={formData.whyValuable}
                      onChange={handleInputChange}
                      className="w-full p-4 rounded-xl bg-black/40 border border-gray-700/50 text-gray-200 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 placeholder:text-gray-500 resize-none"
                      rows={4}
                      placeholder="Optional explanation"
                    />
                  </div>

                  {/* File Upload */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-white font-medium text-sm">
                      <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                      </svg>
                      Attach Document
                      <span className="text-gray-500 text-xs font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                        id="file-upload"
                      />
                      <label
                        htmlFor="file-upload"
                        className="flex flex-col items-center justify-center gap-3 w-full p-8 rounded-xl bg-black/20 border-2 border-dashed border-gray-700/50 hover:border-purple-500/50 hover:bg-black/30 cursor-pointer transition-all duration-300 group"
                      >
                        <div className="p-3 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                          <svg className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                        </div>
                        {fileName ? (
                          <div className="flex items-center gap-2 text-purple-300">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="font-medium">{fileName}</span>
                          </div>
                        ) : (
                          <>
                            <span className="text-gray-300 font-medium group-hover:text-purple-300 transition-colors">
                              Click to upload or drag and drop
                            </span>
                            <span className="text-gray-500 text-sm">PDF or DOCX (Max 10MB)</span>
                          </>
                        )}
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="relative w-full group overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 p-[2px] transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="relative bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 rounded-xl px-8 py-4 flex items-center justify-center gap-3 overflow-hidden">
                      <div className="absolute inset-0 bg-black/20"></div>
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white relative z-10" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span className="text-white font-semibold text-lg relative z-10">Sending...</span>
                        </>
                      ) : (
                        <>
                          <span className="text-white font-semibold text-lg relative z-10">Send Message</span>
                          <svg className="w-5 h-5 text-white relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      )}
                    </div>
                  </button>

                  {/* Privacy Notice */}
                  <p className="text-center text-gray-500 text-sm leading-relaxed">
                    By submitting, you agree to our{" "}
                    <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors underline">
                      Privacy Policy
                    </a>
                    . We will never share your information.
                  </p>

                  {/* Disclaimer */}
                  <div className="flex items-start gap-2 pt-2">
                    <p className="text-gray-500 text-xs leading-relaxed">
                      <span className="font-medium">Note:</span> This section is for idea sharing only. Submissions do not imply partnerships, investments, or commercial commitments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="mt-16 grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/10 mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Quick Response</h3>
              <p className="text-gray-400 text-sm">We review all submissions within 48 hours</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-violet-500/5 to-transparent border border-violet-500/10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-500/10 mb-4">
                <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Confidential</h3>
              <p className="text-gray-400 text-sm">Your ideas are protected by NDA</p>
            </div>

             <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/10 mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Collaborative</h3>
              <p className="text-gray-400 text-sm">We work together to refine your vision</p>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </main>

      <Footer />
    </>
  );
}