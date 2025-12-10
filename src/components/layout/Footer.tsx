export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20 py-10 bg-black/40">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
        <div className="text-gray-300 text-sm">
          © {new Date().getFullYear()} MistrAI Clusters.  
          All rights reserved.
        </div>
        <div className="text-xs text-gray-500">
          Secure • Scalable • Microservice Architecture • AI SaaS
        </div>
      </div>
    </footer>
  );
}
