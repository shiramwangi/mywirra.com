"use client";

import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Link from "next/link";

// 1. Data Dictionary for the 6 Recruiting Steps
const RECRUITING_STEPS = [
  {
    id: "01",
    title: "Source from the best.",
    description: "We partner with top universities across the country to create a vast, elite talent pool. Candidates are segmented into Silver and Gold tiers based on rigorous upskilling and proven test performance.",
    uiMock: (
      <div className="w-full max-w-[280px] bg-white border-2 border-[#1F2420] shadow-[2px_2px_0px_0px_#1F2420] rounded-xl p-5 flex flex-col gap-4 relative z-10 group-hover:-translate-y-2 transition-transform duration-500">
        <div className="w-full h-10 bg-[#EAECE6] rounded-full border border-[#1F2420]/20 flex items-center px-4 text-xs font-medium text-[#1F2420]/50">Search elite talent...</div>
        <div className="flex items-center gap-4 border-b border-gray-100 pb-3">
          <div className="w-10 h-10 rounded-full bg-[#F49B36] border-2 border-[#1F2420]"></div>
          <div className="flex flex-col gap-1 flex-1">
            <div className="h-2 w-2/3 bg-[#1F2420] rounded-full"></div>
            <div className="h-2 w-1/3 bg-gray-300 rounded-full"></div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gray-200 border border-[#1F2420]/20"></div>
          <div className="flex flex-col gap-1 flex-1">
            <div className="h-2 w-1/2 bg-gray-300 rounded-full"></div>
            <div className="h-2 w-1/4 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "02",
    title: "Real-time AI screening.",
    description: "Once candidates enter the pool, we build custom evaluation tools that screen them against your exact priorities.",
    uiMock: (
      <div className="w-full max-w-[280px] bg-white border-2 border-[#1F2420] shadow-[2px_2px_0px_0px_#1F2420] rounded-xl p-5 relative z-10 group-hover:-translate-y-2 transition-transform duration-500">
        <div className="flex justify-between items-center border-b border-gray-100 pb-3 mb-4">
          <span className="font-bold text-sm text-[#1F2420]">AI Screening</span>
          <span className="text-[10px] font-bold bg-[#F49B36] border border-[#1F2420] px-2 py-1 rounded-full uppercase tracking-wider">Active</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center"><span className="text-xs font-bold">Python Architecture</span><span className="text-xs font-bold text-[#F49B36]">98%</span></div>
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden"><div className="w-[98%] h-full bg-[#1F2420]"></div></div>
          
          <div className="flex justify-between items-center mt-2"><span className="text-xs font-bold">System Design</span><span className="text-xs font-bold text-[#F49B36]">92%</span></div>
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden"><div className="w-[92%] h-full bg-[#1F2420]"></div></div>
        </div>
      </div>
    )
  },
  {
    id: "03",
    title: "Intelligent sorting.",
    description: "You receive a ranked, prioritized list of candidates. Scoring is powered by GPT-5.6 and supported by robust infrastructure through our proud partnership with Microsoft for Startups.",
    uiMock: (
      <div className="w-full max-w-[280px] flex flex-col gap-3 relative z-10 group-hover:-translate-y-2 transition-transform duration-500">
        <div className="bg-white border-2 border-[#F49B36] shadow-[2px_2px_0px_0px_#F49B36] rounded-xl p-4 flex justify-between items-center scale-105">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-[#1F2420] text-[#FDFBF7] flex items-center justify-center font-bold text-xs">1</div>
             <span className="text-sm font-bold">Candidate A</span>
          </div>
          <span className="text-sm font-black text-[#F49B36]">99%</span>
        </div>
        <div className="bg-white border-2 border-[#1F2420] shadow-[2px_2px_0px_0px_#1F2420] rounded-xl p-4 flex justify-between items-center opacity-80">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-gray-200 text-[#1F2420] flex items-center justify-center font-bold text-xs">2</div>
             <span className="text-sm font-bold">Candidate B</span>
          </div>
          <span className="text-sm font-bold">94%</span>
        </div>
      </div>
    )
  },
  {
    id: "04",
    title: "One-click scheduling.",
    description: "Select your preferred interview slots for your top candidates and we handle the rest. We send the invites, provision the platform, and ensure everyone is ready.",
    uiMock: (
      <div className="w-full max-w-[280px] bg-white border-2 border-[#1F2420] shadow-[2px_2px_0px_0px_#1F2420] rounded-xl p-5 text-center relative z-10 group-hover:-translate-y-2 transition-transform duration-500">
        <span className="font-bold text-sm block mb-4 border-b border-gray-100 pb-2">Select Interview Slot</span>
        <div className="flex flex-col gap-2">
          <div className="border-2 border-[#1F2420] rounded-full text-xs py-2.5 font-bold hover:bg-[#F49B36] cursor-pointer transition-colors bg-[#1F2420] text-[#FDFBF7]">Oct 12, 10:00 AM</div>
          <div className="border-2 border-[#1F2420]/30 rounded-full text-xs py-2.5 font-bold cursor-pointer transition-colors text-[#1F2420]">Oct 12, 2:00 PM</div>
          <div className="border-2 border-[#1F2420]/10 bg-gray-50 rounded-full text-xs py-2.5 font-bold text-gray-400">Oct 14, Booked</div>
        </div>
      </div>
    )
  },
  {
    id: "05",
    title: "Zero ghosting.",
    description: "Communication is paramount. We provide every candidate with live updates on their progress through the application stages. Acceptances and rejections are handled gracefully.",
    uiMock: (
      <div className="w-full max-w-[280px] bg-[#1F2420] border-2 border-[#1F2420] shadow-[2px_2px_0px_0px_#F49B36] rounded-xl p-5 text-[#FDFBF7] relative z-10 group-hover:-translate-y-2 transition-transform duration-500">
        <div className="absolute -top-4 -right-4 w-10 h-10 bg-[#F49B36] border-2 border-[#1F2420] rounded-full flex items-center justify-center font-bold text-xl text-[#1F2420] animate-bounce">1</div>
        <span className="block text-[10px] font-bold text-[#F49B36] mb-2 uppercase tracking-widest">Live Status Update</span>
        <span className="font-bold text-base block mb-3">Moved to Round 2!</span>
        <p className="text-xs text-gray-300 font-medium leading-relaxed">The hiring manager loved your initial screening. Check your email for next steps.</p>
      </div>
    )
  },
  {
    id: "06",
    title: "Automated offers.",
    description: "Selected candidates automatically receive their offer letters alongside all relevant legal and company documentation, securely streamlining your onboarding.",
    uiMock: (
      <div className="w-full max-w-[280px] bg-white border-2 border-[#1F2420] shadow-[2px_2px_0px_0px_#1F2420] rounded-xl p-6 flex flex-col items-center relative z-10 group-hover:-translate-y-2 transition-transform duration-500">
        <div className="w-14 h-14 bg-[#EAECE6] border-2 border-[#1F2420] rounded-full flex items-center justify-center mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1F2420" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
        </div>
        <span className="font-bold text-sm mb-1 text-center">Offer_Letter.pdf</span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-5">Pending Signature</span>
        <div className="w-full bg-[#F49B36] text-[#1F2420] border-2 border-[#1F2420] py-2.5 rounded-full text-xs font-bold text-center hover:bg-[#1F2420] hover:text-[#FDFBF7] transition-colors cursor-pointer">Sign Document</div>
      </div>
    )
  }
];

export default function RecruitingProductPage() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  
  // Maps vertical scroll progress (0 to 1) into horizontal translation
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <div className="w-full min-h-screen bg-[#FDFBF7] selection:bg-[#F49B36] selection:text-[#1F2420] pb-12">
      
      {/* Canvas 1: Hero (Dark Gray) */}
      <section className="w-[calc(100%-1.5rem)] md:w-[calc(100%-2.5rem)] max-w-[1600px] mx-auto bg-[#2a2a2a] text-[#FDFBF7] rounded-none mt-28 mb-0 pt-24 pb-32 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        <img 
          src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/64890a00ea4cadddb8c93957_graphic-07.png" 
          alt="" 
          className="absolute top-0 right-0 w-[120%] lg:w-[80%] max-w-[1000px] opacity-[0.03] grayscale mix-blend-screen pointer-events-none z-0 object-contain translate-x-1/4 -translate-y-1/4" 
        />
        <div className="relative z-10 max-w-4xl">
          <span className="inline-block text-sm font-bold tracking-widest uppercase text-[#F49B36] mb-6">
            For Employers
          </span>
          <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tighter leading-[1] mb-9">
            Hire the top 1%. <br /> We automate the rest.
          </h1>
          <p className="text-lg md:text-xl text-[#FDFBF7]/80 font-medium leading-relaxed mb-10 max-w-xl">
            From intelligent sourcing in elite talent pools to automated legal offers, discover how our platform handles the entire recruitment lifecycle so you can focus on building your team.
          </p>
        </div>
      </section>

      {/* Canvas 2: The Horizontal Scroll Track (Light Gray) */}
      <section ref={targetRef} className="w-[calc(100%-1.5rem)] md:w-[calc(100%-2.5rem)] max-w-[1600px] mx-auto bg-[#EAECE6] rounded-none mt-0 mb-0 relative h-[400vh]">
        
        <div className="sticky top-0 w-full flex h-screen items-center overflow-hidden">
          
          {/* Proportional Viewport Watermark (Locked inside the sticky container) */}
          <img 
            src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/64890a00ea4cadddb8c93957_graphic-07.png" 
            alt="" 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[800px] h-[80vh] object-contain opacity-[0.04] pointer-events-none z-0 mix-blend-multiply" 
          />

          {/* Updated Typography Header */}
          <div className="absolute top-16 left-12 md:left-20 text-[#1F2420] z-20">
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[1.05] mb-4 max-w-3xl">
              Revolutionize Your <br /> Hiring Process.
            </h2>
            <p className="font-medium text-[#1F2420]/60 text-lg">Scroll or click next to explore the pipeline &rarr;</p>
          </div>

          <motion.div style={{ x }} className="flex gap-12 md:gap-20 px-12 md:px-20 mt-32 items-center z-10">
            {RECRUITING_STEPS.map((step) => (
              <div 
                key={step.id} 
                className="group relative w-[380px] md:w-[480px] h-[660px] flex flex-col bg-[#FDFBF7] border-2 border-[#1F2420]/80 shadow-[6px_6px_0px_0px_#1F2420] rounded-2xl overflow-hidden flex-shrink-0 transition-shadow duration-300 hover:shadow-[8px_8px_0px_0px_#F49B36]"
              >
                {/* TOP HALF: Interactive UI Modals */}
                <div className="h-[45%] w-full border-b-2 border-[#1F2420]/80 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:16px_16px] bg-[#FDFBF7] relative overflow-hidden flex items-center justify-center p-6">
                   <div className="absolute top-4 left-4 bg-[#F49B36] text-[#1F2420] px-3 py-1 text-lg font-bold border-2 border-[#1F2420] rounded-lg z-20 shadow-[2px_2px_0px_0px_#1F2420]">
                     {step.id}
                   </div>
                   {step.uiMock}
                </div>
                
                {/* BOTTOM HALF: Text & Actions */}
                <div className="h-[55%] p-8 flex flex-col justify-between bg-[#FDFBF7]">
                  <div>
                    <h3 className="text-3xl font-bold text-[#1F2420] tracking-tight mb-4">{step.title}</h3>
                    <p className="text-base md:text-lg text-[#1F2420]/80 font-medium leading-relaxed">{step.description}</p>
                  </div>
                  
                  {/* Universal Routing Buttons (Round Method) & Scroll Arrow */}
                  <div className="flex flex-col gap-4 mt-6">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link href="/demo/recruiters" className="flex-1 flex justify-center items-center px-4 py-3.5 bg-[#1F2420] text-[#FDFBF7] border-2 border-[#1F2420] rounded-full font-bold hover:bg-transparent hover:text-[#1F2420] transition-colors whitespace-nowrap shadow-sm">
                        Request Demo
                      </Link>
                      <Link href="/pricing" className="flex-1 flex justify-center items-center px-4 py-3.5 bg-transparent text-[#1F2420] border-2 border-[#1F2420] rounded-full font-bold hover:bg-[#F49B36] transition-colors whitespace-nowrap shadow-sm">
                        See Pricing
                      </Link>
                    </div>
                    
                    {/* Programmatic Next Scroll Action */}
                    <button 
                      onClick={() => window.scrollBy({ top: window.innerHeight * 0.75, behavior: 'smooth' })}
                      className="flex items-center justify-center gap-2 w-full py-2 text-[#1F2420]/60 font-bold hover:text-[#F49B36] transition-colors group/btn"
                    >
                      Next Feature 
                      <span className="text-xl group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Canvas 3: Team Victory Split (Dark Charcoal) */}
      <section className="w-[calc(100%-1.5rem)] md:w-[calc(100%-2.5rem)] max-w-[1600px] mx-auto bg-[#1F2420] text-[#FDFBF7] rounded-none mt-0 mb-0 flex flex-col lg:flex-row overflow-hidden">
        
        {/* Left Column: Typography & Features */}
        <div className="w-full lg:w-1/2 p-10 md:p-16 lg:p-24 flex flex-col justify-between">
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter leading-[1.05] mb-8 max-w-xl">
              Set your hiring team on the path to victory.
            </h2>
            <p className="text-lg md:text-xl text-[#FDFBF7]/80 font-medium leading-relaxed max-w-lg mb-16">
              Supercharge the talent acquisition process with Wirra&apos;s Talent Toolkit, empowering your team to find and secure top-tier talent with ease.
            </p>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-col gap-4 items-start">
            <div className="inline-flex items-center gap-3 bg-[#F49B36] text-[#1F2420] px-5 py-3.5 rounded-full font-bold text-sm md:text-base shadow-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Collaboration with shared candidate profiles and notes.</span>
            </div>
            <div className="inline-flex items-center gap-3 bg-[#F49B36] text-[#1F2420] px-5 py-3.5 rounded-full font-bold text-sm md:text-base shadow-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Gain valuable insights with real-time tracking and reporting tools.</span>
            </div>
            <div className="inline-flex items-center gap-3 bg-[#F49B36] text-[#1F2420] px-5 py-3.5 rounded-full font-bold text-sm md:text-base shadow-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>AI-Driven candidate vetting to save time.</span>
            </div>
          </div>
        </div>

        {/* Right Column: Split Image Composition */}
        <div className="w-full lg:w-1/2 flex flex-col min-h-[600px] lg:min-h-auto border-t-[3px] lg:border-t-0 lg:border-l-[3px] border-[#1F2420]">
          
          {/* Top Block: Orange Background with Circular Image */}
          <div className="flex-1 bg-[#F49B36] flex items-center justify-center p-12 lg:p-16 border-b-[3px] border-[#1F2420] relative overflow-hidden">
            <div className="w-full max-w-[320px] lg:max-w-[400px] aspect-square rounded-full overflow-hidden border-[3px] border-[#1F2420] shadow-[8px_8px_0px_0px_#1F2420]">
              <img 
                src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/648909ed8bfc729866b35508_photo-square-03.jpg" 
                alt="Team member collaborating" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500 hover:scale-105" 
              />
            </div>
          </div>

          {/* Bottom Block: Full Cover Image */}
          <div className="flex-1 relative bg-[#EAECE6] min-h-[400px]">
            <img 
              src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/6493bc498ffa9115e3b281e0_photo-square-06-p-800.jpg" 
              alt="Confident recruiter" 
              className="absolute inset-0 w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500" 
            />
          </div>

        </div>
      </section>

      {/* Canvas 4: The Chronicles of Hiring (Calm White, No Border) */}
      <section className="w-[calc(100%-1.5rem)] md:w-[calc(100%-2.5rem)] max-w-[1600px] mx-auto bg-[#FDFBF7] text-[#1F2420] rounded-none mt-0 mb-12 py-24 md:py-32 px-6 md:px-12 lg:px-20 border-none shadow-none">
        <div className="max-w-[1400px] mx-auto flex flex-col">
          
          {/* Top Header Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 lg:mb-24">
            
            {/* Left: Typography */}
            <div className="lg:col-span-6">
              <h2 className="text-6xl md:text-7xl lg:text-[6rem] font-normal tracking-tighter leading-[1.05]">
                The <br />
                Chronicles <br />
                <em className="italic font-serif tracking-normal text-[#1F2420]">of Hiring.</em>
              </h2>
            </div>

            {/* Right: Divider & Button */}
            <div className="lg:col-span-6 flex flex-col items-end w-full pt-4 md:pt-6">
              <hr className="w-full border-t-[2px] border-[#1F2420] mb-8" />
              <Link 
                href="/blog" 
                className="px-10 py-4 rounded-full font-medium text-lg bg-[#1F2420] text-[#FDFBF7] border-[3px] border-[#1F2420] hover:bg-transparent hover:text-[#1F2420] active:bg-[#F49B36] active:border-[#F49B36] transition-all duration-300 shadow-sm"
              >
                Visit Blog
              </Link>
            </div>
            
          </div>

          {/* Bottom Blog Cards Area */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Blog Card 1 */}
            <Link href="/blog/hybrid-recruiting" className="flex flex-col group cursor-pointer">
              <div className="w-full aspect-[16/9] overflow-hidden rounded-none mb-6">
                <img 
                  src="https://cdn.prod.website-files.com/6489090bd5636759fdc111c3/64a61f3a39b7be36f17eeb58_photo-blog-04-p-500.jpg" 
                  alt="Man holding water bottle" 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                />
              </div>
              <span className="text-sm font-bold tracking-widest text-[#1F2420]/60 uppercase mb-3">Insight</span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight leading-snug group-hover:text-[#F49B36] transition-colors duration-300 mb-6 max-w-lg">
                How Hybrid and Remote Recruiting Are Disrupting Traditional HR
              </h3>
              <span className="text-sm font-bold border-b-[2px] border-[#1F2420] self-start pb-1">Read more</span>
            </Link>

            {/* Blog Card 2 */}
            <Link href="/blog/paradigm-shift" className="flex flex-col group cursor-pointer">
              <div className="w-full aspect-[16/9] overflow-hidden rounded-none mb-6">
                <img 
                  src="https://cdn.prod.website-files.com/6489090bd5636759fdc111c3/64a61f040b18f841dba3ceab_photo-blog-03-p-500.jpg" 
                  alt="Team meeting" 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                />
              </div>
              <span className="text-sm font-bold tracking-widest text-[#1F2420]/60 uppercase mb-3">News</span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight leading-snug group-hover:text-[#F49B36] transition-colors duration-300 mb-6 max-w-lg">
                Charting New Terrain: The Paradigm Shift in Hybrid Recruitment
              </h3>
              <span className="text-sm font-bold border-b-[2px] border-[#1F2420] self-start pb-1">Read more</span>
            </Link>

          </div>

        </div>
      </section>

      {/* Canvas 5: Final CTA (Split Layout) */}
      <section className="w-[calc(100%-1.5rem)] md:w-[calc(100%-2.5rem)] max-w-[1600px] mx-auto rounded-none mt-0 mb-0 flex flex-col lg:flex-row overflow-hidden">
        
        {/* Left Side: Image Composition */}
        <div className="w-full lg:w-[45%] bg-[#fae2c6] relative min-h-[500px] lg:h-[75vh] flex items-end justify-center overflow-hidden">
          
          {/* Lighter Shade Watermark */}
          <img 
            src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/64890a0018b47a0c315d4004_graphic-02.png" 
            alt="" 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] max-w-none h-auto opacity-50 mix-blend-overlay pointer-events-none z-0" 
          />
          
          {/* Man (Takes up 3/4 of the canvas height) */}
          <img 
            src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/64924c161371d99bc94fec21_photo-person-03a.png" 
            alt="Professional recruiter" 
            className="relative z-10 w-[85%] max-w-[500px] h-[75%] object-contain object-bottom pointer-events-none drop-shadow-2xl" 
          />
        </div>

        {/* Right Side: CTA Content */}
        <div className="w-full lg:w-[55%] bg-[#F49B36] p-12 md:p-16 lg:p-24 flex flex-col justify-center">
          <h2 className="text-6xl md:text-7xl lg:text-[6.5rem] font-normal tracking-tighter leading-[1.05] text-[#1F2420] mb-10">
            Secure <br /> Talent, <br /> Seamlessly.
          </h2>
          
          <div className="mb-10">
            <p className="text-xl lg:text-2xl font-medium text-[#1F2420]">14 Day Free Trial</p>
            <p className="text-xl lg:text-2xl font-medium text-[#1F2420]">No Credit Card Required.</p>
          </div>

          <hr className="w-full max-w-md border-t-[3px] border-[#1F2420] mb-10" />

          <div className="flex flex-col items-start gap-6">
            <Link 
              href="/early-contributors/recruiter" 
              className="px-10 py-5 bg-[#2a2a2a] text-[#FDFBF7] border-[3px] border-[#2a2a2a] rounded-full text-xl font-medium hover:bg-transparent hover:text-[#2a2a2a] active:bg-[#4b4b4b] active:border-[#4b4b4b] active:text-[#FDFBF7] transition-all duration-300 shadow-sm"
            >
              Join Recruiter Waitlist
            </Link>
            
            <Link 
              href="/demo/recruiters" 
              className="text-lg font-bold text-[#1F2420] border-b-[3px] border-[#1F2420] pb-1 hover:text-[#FDFBF7] hover:border-[#FDFBF7] transition-colors ml-4"
            >
              Or schedule a demo
            </Link>
          </div>
        </div>

      </section>

    </div>
  );
}