"use client";

import React, { useState } from "react"; // 1. Verified Import

export default function CareersPage() {
  // 2. Initialize the missing video playback state
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#FDFBF7] selection:bg-[#F49B36] selection:text-[#1F2420] pb-12">
      
      <section className="w-[calc(100%-1.5rem)] md:w-[calc(100%-2.5rem)] max-w-[1600px] mx-auto bg-[#2a2a2a] text-[#FDFBF7] rounded-none mt-28 mb-0 pt-24 pb-32 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        
        {/* Background Graphic Watermark */}
        <img 
          src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/64890a00ea4cadddb8c93957_graphic-07.png" 
          alt="" 
          className="absolute top-0 right-0 w-[120%] lg:w-[80%] max-w-[1000px] opacity-[0.03] grayscale mix-blend-screen pointer-events-none z-0 object-contain translate-x-1/4 -translate-y-1/4" 
        />

        <div className="relative z-10 max-w-3xl">
          <span className="inline-block text-sm font-bold tracking-widest uppercase text-[#F49B36] mb-6">
            Careers
          </span>
          <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tighter leading-[1] mb-9">
            Join our growing team.
          </h1>
          <p className="text-lg md:text-xl text-[#FDFBF7]/80 font-medium leading-relaxed mb-10 max-w-md">
            Discover exciting opportunities at Wirra and contribute to reshaping the future of talent acquisition.
          </p>
          <a 
            href="#open-roles" 
            className="inline-flex items-center justify-center px-10 py-4 bg-[#F49B36] text-[#1F2420] rounded-full text-lg font-bold transition-all duration-300 hover:bg-white"
          >
            View Open Roles
          </a>
        </div>
      </section>
      {/* Canvas 2: Image Grid (White) */}
      {/* Canvas 2: Image Grid, Corporate Values & Video Player (White) */}
      <section className="w-[calc(100%-1.5rem)] md:w-[calc(100%-2.5rem)] max-w-[1600px] mx-auto bg-[#FDFBF7] text-[#1F2420] rounded-none mt-0 mb-0 py-24 px-6 md:px-12 lg:px-20 border-x-2 border-b-2 border-[#EAECE6]">
        <div className="max-w-[1400px] mx-auto flex flex-col">
          
          {/* Asymmetric 4-Image Grid Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-end mb-24">
            <div className="w-full aspect-square overflow-hidden rounded-none shadow-sm">
              <img 
                src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/648909ed751d0f55b4c33daf_photo-square-05.jpg" 
                alt="Wirra workspace collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full aspect-[4/3] overflow-hidden rounded-none shadow-sm">
              <img 
                src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/648909edea4cadddb8c925a8_photo-landscape-04.jpg" 
                alt="Team working sessions" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full aspect-[3/4] overflow-hidden rounded-none shadow-sm">
              <img 
                src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/648909edd93afd96334e786e_photo-portrait-02.jpg" 
                alt="Wirra engineer lead" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full aspect-[4/3] overflow-hidden rounded-none shadow-sm">
              <img 
                src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/648909ed9095455fa46c6c7e_photo-landscape-06-p-800.jpg" 
                alt="City tech community culture" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Scaled Value Matrix */}
          {/* Scaled Value Matrix (Culture, Clarity, Improvement) */}
          {/* Vertical Row Value Matrix */}
          <div className="w-full max-w-5xl mb-28">
            <h4 className="text-sm font-bold tracking-widest text-[#1F2420] mb-6">Our Values</h4>

            <div className="flex flex-col border-t-[2px] border-[#1F2420]">

              {/* Row 1: Culture */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-16 py-10 md:py-16 border-b border-[#1F2420]/20">
                <div className="md:col-span-4">
                  <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-[#1F2420]">Culture</h3>
                </div>
                <div className="md:col-span-8 flex items-center">
                  <p className="text-lg text-[#1F2420]/80 font-medium leading-relaxed">
                    We foster an environment where bold ideas thrive. Our workspace is designed for continuous collaboration, ensuring every voice contributes to reshaping talent acquisition.
                  </p>
                </div>
              </div>

              {/* Row 2: Clarity */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-16 py-10 md:py-16 border-b border-[#1F2420]/20">
                <div className="md:col-span-4">
                  <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-[#1F2420]">Clarity</h3>
                </div>
                <div className="md:col-span-8 flex items-center">
                  <p className="text-lg text-[#1F2420]/80 font-medium leading-relaxed">
                    Radical transparency is built into our algorithms and our communication. We eliminate ambiguity so our team and our users always know exactly where they stand.
                  </p>
                </div>
              </div>

              {/* Row 3: Improvement */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-16 py-10 md:py-16 border-b border-[#1F2420]/20">
                <div className="md:col-span-4">
                  <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-[#1F2420]">Improvement</h3>
                </div>
                <div className="md:col-span-8 flex items-center">
                  <p className="text-lg text-[#1F2420]/80 font-medium leading-relaxed">
                    We are obsessed with progression. From upgrading our native sandboxed containers to refining our LLM evaluations, we consistently push the boundaries of performance.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Inline Media Player Module */}
          <div className="w-full aspect-video relative bg-black overflow-hidden rounded-none group shadow-2xl border border-[#1F2420]/5">
            {!playVideo ? (
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/648909ed094b37b43bba53d2_photo-landscape-07.jpg" 
                  alt="Wirra team showcase media thumbnail" 
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.02]" 
                />
                <div className="absolute inset-0 bg-[#1F2420]/10 mix-blend-multiply transition-opacity group-hover:opacity-40" />
                <button 
                  onClick={() => setPlayVideo(true)}
                  className="absolute inset-0 m-auto w-20 h-20 bg-[#F49B36] text-[#1F2420] rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 shadow-2xl z-20 group-hover:bg-[#1F2420] group-hover:text-[#F49B36]"
                  aria-label="Play company feature video"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="translate-x-0.5">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </button>
              </div>
            ) : (
              <iframe 
                src="https://www.youtube.com/embed/e5-6rEwzxLs?autoplay=1&modestbranding=1&rel=0" 
                title="Wirra Culture & Innovation Showcase"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="w-full h-full border-none absolute inset-0 z-10"
              />
            )}
          </div>

        </div>
      </section>

      {/* Canvas 3: Open Roles (Light Gray) */}
      <section id="open-roles" className="w-[calc(100%-1.5rem)] md:w-[calc(100%-2.5rem)] max-w-[1600px] mx-auto bg-[#EAECE6] text-[#1F2420] rounded-none mt-0 mb-0 py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        
        {/* Abstract Background Graphic */}
        <img 
          src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/64890a00ea4cadddb8c93957_graphic-07.png" 
          alt="" 
          className="absolute top-0 right-0 w-[90%] max-w-[900px] opacity-[0.04] mix-blend-multiply pointer-events-none z-0 object-contain translate-x-1/4 -translate-y-1/4" 
        />

        <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col">
          
          {/* Header Row with Extended Line */}
          <div className="flex flex-col md:flex-row md:items-end gap-8 mb-20">
            <h2 className="text-6xl md:text-7xl font-medium tracking-tight leading-[1.1]">
              Currently <br /> Hiring
            </h2>
            <div className="hidden md:block flex-1 h-[2px] bg-[#1F2420]/20 mb-4"></div>
          </div>

          {/* Neo-Brutalist Job Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-28">
            
            {/* AI Engineer Card */}
            <a href="/company/careers/ai-engineer" className="group flex flex-col justify-between bg-[#FDFBF7] p-8 md:p-10 rounded-2xl border-[3px] border-[#1F2420] shadow-[8px_8px_0px_0px_#1F2420] hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#1F2420] active:translate-y-1 active:shadow-[4px_4px_0px_0px_#1F2420] transition-all min-h-[320px]">
              <h3 className="text-3xl font-medium tracking-tight text-[#1F2420]">AI Engineer</h3>
              <p className="text-[#1F2420]/80 font-medium text-lg leading-snug mt-12">Help us develop and enhance our AI-powered candidate search and vetting tools.</p>
            </a>

            {/* Customer Success Card */}
            <a href="/company/careers/customer-success-specialist" className="group flex flex-col justify-between bg-[#FDFBF7] p-8 md:p-10 rounded-2xl border-[3px] border-[#1F2420] shadow-[8px_8px_0px_0px_#1F2420] hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#1F2420] active:translate-y-1 active:shadow-[4px_4px_0px_0px_#1F2420] transition-all min-h-[320px]">
              <h3 className="text-3xl font-medium tracking-tight text-[#1F2420]">Customer Success Specialist</h3>
              <p className="text-[#1F2420]/80 font-medium text-lg leading-snug mt-12">Work directly with our clients to ensure they are getting the most out of our platform.</p>
            </a>

            {/* Product Designer Card */}
            <a href="/company/careers/product-designer" className="group flex flex-col justify-between bg-[#FDFBF7] p-8 md:p-10 rounded-2xl border-[3px] border-[#1F2420] shadow-[8px_8px_0px_0px_#1F2420] hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#1F2420] active:translate-y-1 active:shadow-[4px_4px_0px_0px_#1F2420] transition-all min-h-[320px]">
              <h3 className="text-3xl font-medium tracking-tight text-[#1F2420]">Product Designer</h3>
              <p className="text-[#1F2420]/80 font-medium text-lg leading-snug mt-12">Contribute to the design and user experience of our innovative talent acquisition platform.</p>
            </a>

            {/* Marketing Manager Card */}
            <a href="/company/careers/marketing-manager" className="group flex flex-col justify-between bg-[#FDFBF7] p-8 md:p-10 rounded-2xl border-[3px] border-[#1F2420] shadow-[8px_8px_0px_0px_#1F2420] hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#1F2420] active:translate-y-1 active:shadow-[4px_4px_0px_0px_#1F2420] transition-all min-h-[320px]">
              <h3 className="text-3xl font-medium tracking-tight text-[#1F2420]">Marketing Manager</h3>
              <p className="text-[#1F2420]/80 font-medium text-lg leading-snug mt-12">Drive our marketing efforts to increase brand awareness and attract new clients.</p>
            </a>

            {/* HR Business Partner Card */}
            <a href="/company/careers/hr-business-partner" className="group flex flex-col justify-between bg-[#FDFBF7] p-8 md:p-10 rounded-2xl border-[3px] border-[#1F2420] shadow-[8px_8px_0px_0px_#1F2420] hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#1F2420] active:translate-y-1 active:shadow-[4px_4px_0px_0px_#1F2420] transition-all min-h-[320px]">
              <h3 className="text-3xl font-medium tracking-tight text-[#1F2420]">HR Business Partner</h3>
              <p className="text-[#1F2420]/80 font-medium text-lg leading-snug mt-12">Support our internal HR needs and contribute to fostering our company culture.</p>
            </a>

          </div>

          {/* Bottom Get In Touch Hook */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-10 border-t-[2px] border-[#1F2420]">
            <p className="text-xl font-medium text-[#1F2420]">Want to work at Wirra but didn&apos;t see a role for you?</p>
            <a href="/contact" className="group inline-flex items-center justify-center px-8 py-4 bg-[#1F2420] text-[#FDFBF7] rounded-full text-lg font-bold hover:bg-transparent hover:text-[#1F2420] border-2 border-[#1F2420] transition-all duration-300">
              Get in touch
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

        </div>
      </section>

      {/* Canvas 4: Bottom Hook (Orange) */}
      <section className="w-[calc(100%-1.5rem)] md:w-[calc(100%-2.5rem)] max-w-[1600px] mx-auto bg-[#F49B36] text-[#1F2420] rounded-none mt-0 py-24 md:py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden shadow-2xl">
        
        {/* Massive Right-Aligned Watermark */}
        <img 
          src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/64890a00bed2d0bbb612092f_graphic-10.png" 
          alt="" 
          className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-[15%] lg:translate-x-1/4 w-[140%] max-w-[1100px] opacity-[0.15] mix-blend-multiply pointer-events-none z-0 object-contain" 
        />

        <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col">
          <div className="max-w-xl">
            
            <h2 className="text-5xl md:text-5xl font-medium tracking-tight leading-[1.1] mb-6">
              Secure Talent, Seamlessly.
            </h2>
            
            <hr className="border-t-[2px] border-[#1F2420]/20 w-full mb-10" />
            
            <p className="text-xl md:text-2xl font-medium text-[#1F2420]/80 leading-relaxed mb-12">
              Learn more about our mission. <br />
              Discover what drives us forward.
            </p>

            <a 
              href="/company/who-we-are" 
              className="inline-flex items-center justify-center px-10 py-5 bg-[#1F2420] text-[#FDFBF7] rounded-full text-xl font-bold transition-all duration-300 hover:bg-[#FDFBF7] hover:text-[#1F2420] border-[3px] border-[#1F2420] shadow-xl"
            >
              Get to know us
            </a>

          </div>
        </div>
      </section>

    </div>
  );
}