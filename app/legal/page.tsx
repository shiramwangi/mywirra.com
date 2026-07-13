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
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop", // Navy/Team
  },
  {
    id: "02",
    title: "Real-time AI screening.",
    description: "Once candidates enter the pool, we build custom evaluation tools that screen them against your exact priorities.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop", // Tech/Code
    actions: (
      <div className="flex gap-4 mt-6">
        <Link href="/demo/recruiter" className="px-6 py-3 bg-[#1F2420] text-[#FDFBF7] border-2 border-[#1F2420] font-bold hover:bg-transparent hover:text-[#1F2420] transition-colors">
          Request Demo
        </Link>
        <Link href="/pricing" className="px-6 py-3 bg-transparent text-[#1F2420] border-2 border-[#1F2420] font-bold hover:bg-[#F49B36] transition-colors">
          See Pricing
        </Link>
      </div>
    )
  },
  {
    id: "03",
    title: "Intelligent sorting.",
    description: "You receive a ranked, prioritized list of candidates. Scoring is powered by GPT-5.6 and supported by robust infrastructure through our proud partnership with Microsoft for Startups.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop", // Cyber/AI Orange & Blue
  },
  {
    id: "04",
    title: "One-click scheduling.",
    description: "Select your preferred interview slots for your top candidates and we handle the rest. We send the invites, provision the platform, and ensure everyone is ready.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop", // Clean meeting space
  },
  {
    id: "05",
    title: "Zero ghosting.",
    description: "Communication is paramount. We provide every candidate with live updates on their progress through the application stages. Acceptances and rejections are handled gracefully.",
    img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop", // Professional interaction
  },
  {
    id: "06",
    title: "Automated offers.",
    description: "Selected candidates automatically receive their offer letters alongside all relevant legal and company documentation, securely streamlining your onboarding.",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=800&auto=format&fit=crop", // Formal handshake/business
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
      {/* Note: The height here dictates how long the user must scroll to finish the horizontal animation */}
      <section ref={targetRef} className="w-[calc(100%-1.5rem)] md:w-[calc(100%-2.5rem)] max-w-[1600px] mx-auto bg-[#EAECE6] rounded-none mt-0 mb-0 relative h-[400vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          
          <div className="absolute top-16 left-12 md:left-20 text-[#1F2420]">
            <h2 className="text-4xl font-bold tracking-tight">How it works</h2>
            <p className="font-medium text-[#1F2420]/60">Scroll to explore the pipeline &rarr;</p>
          </div>

          <motion.div style={{ x }} className="flex gap-12 md:gap-20 px-12 md:px-20 mt-12">
            {RECRUITING_STEPS.map((step) => (
              <div 
                key={step.id} 
                className="group relative w-[350px] md:w-[500px] h-[600px] flex flex-col bg-[#FDFBF7] border-[3px] border-[#1F2420] shadow-[12px_12px_0px_0px_#1F2420] rounded-none overflow-hidden flex-shrink-0"
              >
                <div className="h-1/2 w-full border-b-[3px] border-[#1F2420] overflow-hidden relative">
                   <div className="absolute top-4 left-4 bg-[#F49B36] text-[#1F2420] px-4 py-1 text-2xl font-bold border-[3px] border-[#1F2420] z-10">
                     {step.id}
                   </div>
                   <img src={step.img} alt={step.title} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                </div>
                <div className="h-1/2 p-8 flex flex-col justify-start">
                  <h3 className="text-3xl font-bold text-[#1F2420] tracking-tight mb-4">{step.title}</h3>
                  <p className="text-lg text-[#1F2420]/80 font-medium leading-relaxed">{step.description}</p>
                  {step.actions && step.actions}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Canvas 3: Bottom Hook (Orange) */}
      <section className="w-[calc(100%-1.5rem)] md:w-[calc(100%-2.5rem)] max-w-[1600px] mx-auto bg-[#F49B36] text-[#1F2420] rounded-none mt-0 py-24 md:py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden shadow-2xl border-t-[2px] border-[#1F2420]">
        <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col items-center text-center">
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-10">
            Ready to upgrade <br /> your hiring pipeline?
          </h2>
          <Link 
            href="/early-contributors/recruiter" 
            className="inline-flex items-center justify-center px-12 py-5 bg-[#1F2420] text-[#FDFBF7] rounded-full text-xl font-bold border-[3px] border-[#1F2420] transition-colors duration-300 hover:bg-transparent hover:text-[#1F2420] active:bg-[#FDFBF7] shadow-xl"
          >
            Join the Recruiter Waitlist
          </Link>
        </div>
      </section>

    </div>
  );
}