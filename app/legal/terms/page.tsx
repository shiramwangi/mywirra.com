import React from "react";

export default function TermsPage() {
  return (
    <div className="w-full max-w-5xl mx-auto py-24 px-12 lg:px-20">
      
      <div className="flex flex-col md:flex-row md:items-baseline border-b-[2px] border-[#1F2420]/10 pb-10 mb-16">
        <div className="w-64 flex-shrink-0 mb-4 md:mb-0">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1F2420]/50">Last Updated</span>
          <p className="text-sm font-bold mt-1">July 14, 2026</p>
        </div>
        <h1 className="text-5xl md:text-6xl font-medium tracking-tight">Terms & Conditions</h1>
      </div>

      <div className="md:ml-64 max-w-3xl flex flex-col gap-10 text-[#1F2420]/80">
        
        <section>
          <h2 className="text-2xl font-bold text-[#1F2420] mb-4">1. Intellectual Property & Trademarks</h2>
          <p className="text-lg leading-relaxed font-medium">
            Wirra is a registered private limited company. The &quot;Wirra&quot; name, logo, branding assets, and our proprietary AI-driven screening algorithms, sandboxing environments, and sorting methodologies are officially trademarked and protected intellectual property. Unauthorized reproduction, reverse engineering, or distribution of our platform architecture is strictly prohibited by law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1F2420] mb-4">2. Platform Usage & AI Evaluations</h2>
          <p className="text-lg leading-relaxed font-medium">
            Our platform provides automated screening, ranking, and scheduling tools utilizing advanced language models (including GPT-5.6). While our AI infrastructure provides highly accurate, data-driven candidate analysis, Wirra acts solely as an evaluation facilitator. We do not guarantee employment for candidates, nor do we assume liability for the final hiring decisions made by enterprise employers utilizing our analytics.
          </p>
        </section>

      </div>
    </div>
  );
}