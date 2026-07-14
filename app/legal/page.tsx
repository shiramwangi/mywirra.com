import React from "react";

export default function LegalOverviewPage() {
  return (
    <div className="w-full max-w-5xl mx-auto py-24 px-12 lg:px-20">
      
      {/* Document Header (Matched to reference structure) */}
      <div className="flex flex-col md:flex-row md:items-baseline border-b-[2px] border-[#1F2420]/10 pb-10 mb-16 relative overflow-hidden">
        {/* Isolated Background Watermark */}
        <img 
          src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/64890a00ea4cadddb8c93957_graphic-07.png" 
          alt="" 
          className="absolute top-0 right-0 w-[80%] max-w-[800px] opacity-[0.03] grayscale mix-blend-multiply pointer-events-none z-0 object-contain translate-x-1/4 -translate-y-1/4" 
        />
        
        {/* Left Column (Established Block) */}
        <div className="w-64 flex-shrink-0 mb-4 md:mb-0 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1F2420]/50"> Wirra Foundation</span>
          <p className="text-sm font-bold mt-1">Established 2026</p>
        </div>
        
        {/* Right Column (Title) */}
        <h1 className="text-5xl md:text-6xl font-medium tracking-tight relative z-10">
          Corporate & Legal Overview
        </h1>
      </div>

      {/* Document Body (Aligned md:ml-64) */}
      <div className="md:ml-64 max-w-3xl flex flex-col gap-12 text-[#1F2420]/80 relative z-10">
        
        {/* Section 1: Meriting Talent Worldwide */}
        <section>
          <p className="text-lg leading-relaxed font-medium">
            Wirra was built to redefine the standard of meritocratic hiring. We engineering native sandboxed evaluation systems and intelligent AI-driven sorting to erase human bias and source the world&apos;s top candidate capability.
          </p>
        </section>

        {/* Section 2: Foundation & Stewardship */}
        <section>
          <h2 className="text-2xl font-bold text-[#1F2420] mb-4">1. Foundation & Corporate Stewardship</h2>
          <p className="text-lg leading-relaxed font-medium mb-4">
            Founded in 2026 by Chiira Mwangi, Wirra is registered as a Private Limited Liability Company (LLC). We operate as a deeply integrated data steward, officially certified by the Office of the Data Protection Commissioner (ODPC) in our dual capacity as both a Data Controller and Data Processor.
          </p>
          <p className="text-lg leading-relaxed font-medium">
            This legal foundation ensures that the high-stakes data pipelines we manage—including university student records and enterprise candidate profiles—are legally protected under official trademark, asset protection, and rigorous ODPC compliance standards.
          </p>
        </section>

        {/* Section 3: Operations ( Kenya & South Africa) */}
        <section>
          <h2 className="text-2xl font-bold text-[#1F2420] mb-4">2. Talent Operations & Regional Footprint</h2>
          <p className="text-lg leading-relaxed font-medium mb-4">
            Wirra operates extensively in Kenya (KE) and South Africa (SA). We find and recruit candidates through strategic partnerships with top universities across these regions, utilizing our standardized gold and silver talent pools.
          </p>
          <p className="text-lg leading-relaxed font-medium">
            Our platform allows candidates to bypass the traditional screening process through verifiably objective test performance, allowing enterprises to screen and sort candidates in real-time based on actual capability.
          </p>
        </section>

        {/* Section 4: Vision for Meritocratic Growth */}
        <section>
          <h2 className="text-2xl font-bold text-[#1F2420] mb-4">3. Our Vision for Meritocratic Growth</h2>
          <p className="text-lg leading-relaxed font-medium">
            Our envision is to expand the reach of meritocratic hiring across Africa and into the global enterprise market. By automating the legal offer and onboarding process with uncompromised quality and radical transparency, Wirra aims to eliminate ambiguity in the hiring process for every single stakeholder.
          </p>
        </section>

      </div>
    </div>
  );
}