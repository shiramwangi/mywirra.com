import React from "react";

export default function IntegrityPolicyPage() {
  return (
    <div className="w-full max-w-5xl mx-auto py-24 px-12 lg:px-20">
      
      {/* Document Header */}
      <div className="flex flex-col md:flex-row md:items-baseline border-b-[2px] border-[#1F2420]/10 pb-10 mb-16 relative overflow-hidden">
        <div className="w-64 flex-shrink-0 mb-4 md:mb-0 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1F2420]/50">Last Updated</span>
          <p className="text-sm font-bold mt-1">July 14, 2026</p>
        </div>
        <h1 className="text-5xl md:text-6xl font-medium tracking-tight relative z-10">
          Integrity Policy
        </h1>
      </div>

      {/* Document Body */}
      <div className="md:ml-64 max-w-3xl flex flex-col gap-12 text-[#1F2420]/80 relative z-10">
        
        <section>
          <p className="text-lg leading-relaxed font-medium">
            Trust is the currency of the recruitment industry. Wirra is dedicated to maintaining the highest standards of ethical conduct, transparency, and data validity across our entire ecosystem. This Integrity Policy outlines our zero-tolerance approach to fraud and our commitment to objective talent evaluation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1F2420] mb-4">1. Assessment Validity & Anti-Cheating</h2>
          <p className="text-lg leading-relaxed font-medium mb-4">
            Our AI-powered screening and sandboxed environments are designed to evaluate genuine capability. We employ advanced monitoring, plagiarism detection, and behavioral analysis to ensure that all test submissions are the original work of the candidate.
          </p>
          <p className="text-lg leading-relaxed font-medium">
            Any candidate found utilizing unauthorized third-party tools, impersonation tactics, or collaborative cheating during a formal evaluation will face immediate removal from the Wirra talent pool and permanent disqualification from future enterprise placements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1F2420] mb-4">2. Client & Corporate Ethics</h2>
          <p className="text-lg leading-relaxed font-medium">
            We hold our enterprise partners to the same rigorous ethical standards. We strictly prohibit the use of our platform for discriminatory screening, unauthorized data scraping, or the exploitation of candidate information outside the bounds of active, legitimate recruitment processes. Wirra reserves the right to terminate access for any organization found violating these core ethical principles.
          </p>
        </section>

      </div>
    </div>
  );
}