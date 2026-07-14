import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full max-w-5xl mx-auto py-24 px-12 lg:px-20">
      
      {/* Document Header */}
      <div className="flex flex-col md:flex-row md:items-baseline border-b-[2px] border-[#1F2420]/10 pb-10 mb-16">
        <div className="w-64 flex-shrink-0 mb-4 md:mb-0">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1F2420]/50">Last Updated</span>
          <p className="text-sm font-bold mt-1">July 14, 2026</p>
        </div>
        <h1 className="text-5xl md:text-6xl font-medium tracking-tight">Privacy Policy</h1>
      </div>

      {/* Document Body */}
      <div className="md:ml-64 max-w-3xl flex flex-col gap-10 text-[#1F2420]/80">
        
        <section>
          <p className="text-lg leading-relaxed font-medium">
            At Wirra, data integrity is the foundation of our infrastructure. As a registered private limited company and a certified entity with the Office of the Data Protection Commissioner (ODPC), we operate dynamically as both a Data Controller and a Data Processor, ensuring the absolute security of the information entrusted to us by universities, enterprises, and individual candidates.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1F2420] mb-4">1. Data Collection & Processing Roles</h2>
          <p className="text-lg leading-relaxed font-medium mb-4">
            <strong>As a Data Processor:</strong> When we partner with Universities to ingest student academic data, or with Enterprises to process candidate resumes and technical assessments, we act strictly as a Data Processor. We do not own this data; we secure it, process it through our AI screening algorithms, and return actionable analytics to the respective institutions in full compliance with ODPC regulations.
          </p>
          <p className="text-lg leading-relaxed font-medium">
            <strong>As a Data Controller:</strong> For individuals who voluntarily join our talent pools or waitlists directly, Wirra acts as the Data Controller. We collect contact information, professional experience, and platform interaction data to optimize your placement opportunities.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1F2420] mb-4">2. Security and Asset Protection</h2>
          <p className="text-lg leading-relaxed font-medium">
            We implement enterprise-grade encryption for data at rest and in transit. Candidate resumes, assessment scores, and university data are siloed in isolated, sandboxed containers. Access to this data is governed by strict Role-Based Access Control (RBAC), ensuring that our partners only interact with the exact data required for their recruitment pipelines.
          </p>
        </section>

      </div>
    </div>
  );
}