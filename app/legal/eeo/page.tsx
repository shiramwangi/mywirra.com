import React from "react";

export default function EEOPolicyPage() {
  return (
    <div className="w-full max-w-5xl mx-auto py-24 px-12 lg:px-20">
      
      <div className="flex flex-col md:flex-row md:items-baseline border-b-[2px] border-[#1F2420]/10 pb-10 mb-16">
        <div className="w-64 flex-shrink-0 mb-4 md:mb-0">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1F2420]/50">Last Updated</span>
          <p className="text-sm font-bold mt-1">July 14, 2026</p>
        </div>
        <h1 className="text-5xl md:text-6xl font-medium tracking-tight">EEO Policy</h1>
      </div>

      <div className="md:ml-64 max-w-3xl flex flex-col gap-10 text-[#1F2420]/80">
        
        <section>
          <h2 className="text-2xl font-bold text-[#1F2420] mb-4">1. Equal Employment Opportunity</h2>
          <p className="text-lg leading-relaxed font-medium">
            Wirra is fundamentally committed to the principle of equal employment opportunity for all employees and to providing a work environment free of discrimination and harassment. All employment decisions at Wirra are based on business needs, job requirements, and individual qualifications, without regard to race, color, religion, gender, sexual orientation, national origin, age, or disability status.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1F2420] mb-4">2. Engineering Unbiased Systems</h2>
          <p className="text-lg leading-relaxed font-medium">
            Our commitment to EEO extends directly into the software we build. We engineer our AI screening algorithms and native sandboxed assessment environments to evaluate candidates purely on technical capability and objective outputs. By stripping identifying markers from the initial evaluation phases, Wirra actively works to eliminate unconscious human bias from the enterprise talent acquisition pipeline, ensuring a fair, meritocratic process for our university and candidate pools.
          </p>
        </section>

      </div>
    </div>
  );
}