export default function Footer() {
  const quickLinks = [
    { name: "Our Vision", href: "/vision" },
    { name: "Products", href: "/products" },
    { name: "Partner with Us", href: "/strategic-partnership" },
    { name: "Contact", href: "/contact" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-and-conditions" },
    { name: "Cookie Policy", href: "/disclaimer" }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: "Twitter",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    {
      name: "Email",
      href: "mailto:contact@mistrai.com",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="relative bg-black border-t border-gray-800/50">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/5 to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Section */}
        <div className="py-12 lg:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="sm:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center p-2">
                <svg viewBox="0 0 100 100" className="w-full h-full text-white" fill="currentColor">
                  <circle cx="50" cy="30" r="8" /><circle cx="30" cy="60" r="8" /><circle cx="70" cy="60" r="8" /><circle cx="50" cy="80" r="8" />
                  <line x1="50" y1="38" x2="50" y2="72" stroke="currentColor" strokeWidth="3" />
                  <line x1="50" y1="38" x2="35" y2="55" stroke="currentColor" strokeWidth="3" />
                  <line x1="50" y1="38" x2="65" y2="55" stroke="currentColor" strokeWidth="3" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">MistrAI</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Transforming businesses with enterprise-grade AI solutions. Building the future of intelligent automation.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} className="p-3 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-purple-500/50 text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-purple-400 transition-colors inline-flex items-center gap-2 group">
                    <span>{link.name}</span>
                    <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-purple-400 transition-colors inline-flex items-center gap-2 group">
                    <span>{link.name}</span>
                    <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Multi-column responsive layout */}
        <div className="border-t border-gray-800/50 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
            
            {/* Left Column: Copyright */}
            <div className="order-2 md:order-1 text-center md:text-left">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} MistrAI. All rights reserved.
              </p>
            </div>

            {/* Center Column: Developer Credit */}
            <div className="order-1 md:order-2 text-center">
              <p className="text-gray-400 text-sm">
                Designed, Developed and Maintained by{" "}
                <a 
                  href="https://www.clumoss.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 font-semibold transition-colors underline underline-offset-4 decoration-purple-400/30"
                >
                  CLUMOSS
                </a>
              </p>
            </div>

            {/* Right Column: Spacer (keeps center truly centered) */}
            <div className="hidden md:block md:order-3" />
            
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
    </footer>
  );
}