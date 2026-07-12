import React from "react";
import Link from "next/link"; 

export default function PricingPage() {
  return (
    <div className="w-full bg-[#FDFBF7] min-h-screen selection:bg-[#F49B36] selection:text-[#1F2420]">
      
      {/* 1. Hero Pricing Canvas (Overlap removed, standard padding applied) */}
      <section className="relative w-[calc(100%-1.5rem)] md:w-[calc(100%-2.5rem)] max-w-[1600px] mx-auto bg-[#2a2a2a] text-[#FDFBF7] rounded-none overflow-hidden pt-20 lg:pt-32 pb-24 lg:pb-32 px-6 md:px-12 lg:px-20 mt-28 mb-12 shadow-2xl">
        
        <img 
          src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/64890a00ea4cadddb8c93957_graphic-07.png" 
          alt="" 
          className="absolute top-0 right-0 w-[120%] lg:w-[80%] max-w-[1000px] opacity-[0.03] grayscale mix-blend-screen pointer-events-none z-0 object-contain" 
        />

        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Column (Typography) */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="inline-block text-sm font-bold tracking-widest uppercase text-[#F49B36] mb-6">
              Pricing Plans
            </span>
            <h1 className="text-6xl md:text-7xl lg:text-[6.5rem] font-medium tracking-tighter leading-[1] mb-8">
              Upgrade to <br /> <span className="text-[#F49B36]">better hiring.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#FDFBF7]/80 font-medium leading-relaxed max-w-md">
              Choose the Wirra plan that suits your needs and start redefining your talent acquisition process today.
            </p>
          </div>

          {/* Right Column (Image Composition) */}
          <div className="lg:col-span-6 relative w-full h-[320px] sm:h-[400px] lg:h-[420px] mt-8 lg:mt-0 flex items-center justify-end">
            <img 
              src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/648909ed396ac6e20c7b3aa2_photo-portrait-03.jpg" 
              alt="Professional looking forward" 
              className="absolute right-0 w-[65%] max-w-[340px] h-[90%] object-cover rounded-none shadow-2xl z-10 select-none pointer-events-none"
            />
            <img 
              src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/648909ed8bfc729866b35508_photo-square-03.jpg" 
              alt="Professional writing" 
              className="absolute left-0 lg:-left-10 w-[55%] max-w-[280px] aspect-square object-cover rounded-full shadow-2xl border-[12px] border-[#2a2a2a] z-20 select-none pointer-events-none"
            />
          </div>

        </div>
      </section>

      {/* 2. Pricing Cards Grid (Moved down to sit cleanly on the white background) */}
      <section className="relative z-20 max-w-[1400px] mx-auto px-6 md:px-12 pt-8 pb-32 text-[#1F2420]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Basic Card */}
          <div className="flex flex-col border-[3px] border-[#1F2420] bg-[#FDFBF7] shadow-xl">
            <div className="bg-[#fae2c6] p-8 md:p-10 border-b-[3px] border-[#1F2420] text-[#1F2420]">
              <h2 className="text-3xl font-medium mb-4">Basic</h2>
              <p className="text-[#1F2420]/80 font-medium leading-relaxed mb-6">
                Best for small businesses dipping their toes into structured hiring.
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-medium">$</span>
                <span className="text-7xl font-medium tracking-tighter">99</span>
                <span className="text-lg font-bold ml-2">USD</span>
              </div>
              <p className="text-sm font-bold mt-2">Billed monthly.</p>
            </div>
            <div className="p-8 md:p-10 flex-1 flex flex-col text-[#1F2420]">
              <span className="font-bold mb-6 block">Standard Inclusions:</span>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-start gap-3 font-medium"><span className="text-[#F49B36]">•</span> Up to 3 Active Jobs</li>
                <li className="flex items-start gap-3 font-medium"><span className="text-[#F49B36]">•</span> Silver Talent Pool Access</li>
                <li className="flex items-start gap-3 font-medium"><span className="text-[#F49B36]">•</span> Full ATS Pipeline & Portal</li>
                <li className="flex items-start gap-3 font-medium"><span className="text-[#F49B36]">•</span> Standard Assessments</li>
              </ul>
              <span className="font-bold mb-4 block">Bonus Inclusions:</span>
              <div className="flex flex-wrap gap-2 mb-10">
                <span className="px-4 py-2 bg-[#788170] text-[#FDFBF7] rounded-full text-sm font-medium">Email Routing</span>
              </div>
              <Link href="/demo/recruiters" className="w-full inline-flex items-center justify-center px-10 py-3.5 xl:px-12 xl:py-4 bg-[#292C26] text-[#F5F6F5] rounded-full text-xl xl:text-2xl font-normal tracking-tight transition-colors duration-300 hover:bg-[#788170] outline-none">
                Get started now
              </Link>
            </div>
          </div>

          {/* Growth Card */}
          <div className="flex flex-col border-[3px] border-[#1F2420] bg-[#FDFBF7] shadow-xl relative transform lg:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1F2420] text-[#FDFBF7] px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase">
              Most Popular
            </div>
            <div className="bg-[#f7c088] p-8 md:p-10 border-b-[3px] border-[#1F2420] text-[#1F2420]">
              <h2 className="text-3xl font-medium mb-4">Growth</h2>
              <p className="text-[#1F2420]/80 font-medium leading-relaxed mb-6">
                The core AI tier for growing teams needing automated filtering.
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-medium">$</span>
                <span className="text-7xl font-medium tracking-tighter">299</span>
                <span className="text-lg font-bold ml-2">USD</span>
              </div>
              <p className="text-sm font-bold mt-2">Billed monthly.</p>
            </div>
            <div className="p-8 md:p-10 flex-1 flex flex-col text-[#1F2420]">
              <span className="font-bold mb-6 block">Standard Inclusions:</span>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-start gap-3 font-medium"><span className="text-[#F49B36]">•</span> Up to 10 Active Jobs</li>
                <li className="flex items-start gap-3 font-medium"><span className="text-[#F49B36]">•</span> 500 AI Evaluations / mo</li>
                <li className="flex items-start gap-3 font-medium"><span className="text-[#F49B36]">•</span> Gold Talent Pool Access</li>
                <li className="flex items-start gap-3 font-medium"><span className="text-[#F49B36]">•</span> Virtual Interview Platform</li>
              </ul>
              <span className="font-bold mb-4 block">Bonus Inclusions:</span>
              <div className="flex flex-wrap gap-2 mb-10">
                <span className="px-4 py-2 bg-[#788170] text-[#FDFBF7] rounded-full text-sm font-medium">Coding Sandboxes</span>
                <span className="px-4 py-2 bg-[#788170] text-[#FDFBF7] rounded-full text-sm font-medium">Basic Integrity</span>
              </div>
              <Link href="/demo/recruiters" className="w-full inline-flex items-center justify-center px-10 py-3.5 xl:px-12 xl:py-4 bg-[#292C26] text-[#F5F6F5] rounded-full text-xl xl:text-2xl font-normal tracking-tight transition-colors duration-300 hover:bg-[#788170] outline-none">
                Get started now
              </Link>
            </div>
          </div>

          {/* Scale Card */}
          <div className="flex flex-col border-[3px] border-[#1F2420] bg-[#FDFBF7] shadow-xl">
            <div className="bg-[#F49B36] p-8 md:p-10 border-b-[3px] border-[#1F2420] text-[#1F2420]">
              <h2 className="text-3xl font-medium mb-4">Scale</h2>
              <p className="text-[#1F2420]/80 font-medium leading-relaxed mb-6">
                For high-volume recruiters who need end-to-end automation.
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-medium">$</span>
                <span className="text-7xl font-medium tracking-tighter">599</span>
                <span className="text-lg font-bold ml-2">USD</span>
              </div>
              <p className="text-sm font-bold mt-2">Billed monthly.</p>
            </div>
            <div className="p-8 md:p-10 flex-1 flex flex-col text-[#1F2420]">
              <span className="font-bold mb-6 block">Standard Inclusions:</span>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-start gap-3 font-medium"><span className="text-[#1F2420]">•</span> Unlimited Active Jobs</li>
                <li className="flex items-start gap-3 font-medium"><span className="text-[#1F2420]">•</span> 2,000 AI Evaluations / mo</li>
                <li className="flex items-start gap-3 font-medium"><span className="text-[#1F2420]">•</span> AI Video Response Grader</li>
                <li className="flex items-start gap-3 font-medium"><span className="text-[#1F2420]">•</span> AI Candidate Ranking</li>
              </ul>
              <span className="font-bold mb-4 block">Bonus Inclusions:</span>
              <div className="flex flex-wrap gap-2 mb-10">
                <span className="px-4 py-2 bg-[#788170] text-[#FDFBF7] rounded-full text-sm font-medium">Video Proctoring</span>
                <span className="px-4 py-2 bg-[#788170] text-[#FDFBF7] rounded-full text-sm font-medium">E-Signatures</span>
              </div>
              <Link href="/demo/recruiters" className="w-full inline-flex items-center justify-center px-10 py-3.5 xl:px-12 xl:py-4 bg-[#292C26] text-[#F5F6F5] rounded-full text-xl xl:text-2xl font-normal tracking-tight transition-colors duration-300 hover:bg-[#788170] outline-none">
                Get started now
              </Link>
            </div>
          </div>

        </div>

        {/* Enterprise Block */}
        <div className="w-full border-[3px] border-[#1F2420] bg-[#EAECE6] p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-xl mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">Enterprise</h2>
            <p className="text-lg md:text-xl font-medium text-[#1F2420]/80">
              Need unlimited compute, custom LLM tuning, SSO, and dedicated account management? Let&apos;s build a custom deployment for your corporation.
            </p>
          </div>
          <Link 
            href="/sales" 
            className="group inline-flex items-center justify-center px-8 py-5 bg-[#1F2420] text-[#FDFBF7] border-[3px] border-[#1F2420] rounded-full hover:bg-transparent hover:text-[#1F2420] active:bg-[#F49B36] active:border-[#F49B36] active:text-[#1F2420] transition-all duration-300 font-bold text-lg whitespace-nowrap"
          >
            Talk to our team
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-3 group-hover:translate-x-1 transition-transform">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>

        {/* Beta Promo Banner */}
        <div className="w-full flex flex-col items-center text-center pb-12">
          <hr className="w-24 border-t-[3px] border-[#1F2420] mb-8" />
          <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
            Join the beta today and get <span className="text-[#F49B36]">6 months completely free.</span>
          </h3>
          <Link href="/demo/recruiters" className="text-lg font-bold border-b-[3px] border-[#1F2420] pb-1 hover:text-[#F49B36] hover:border-[#F49B36] transition-colors">
            Claim your early access offer &rarr;
          </Link>
        </div>

      </section>

    </div>
  );
}