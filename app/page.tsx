"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBackgroundFigure = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const yForegroundFigure = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const yRibbonTop = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const yRibbonBottom = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

  const contentStagger: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const slideUpReveal: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <main className="bg-[#FDFBF7] min-h-screen w-full pb-24 pt-28 flex flex-col items-center">
      
      {/* The Master Flex Wrapper - Reversed on Mobile */}
      <section 
        ref={containerRef}
        className="w-[calc(100%-1.5rem)] md:w-[calc(100%-2.5rem)] max-w-[1600px] mx-auto flex flex-col-reverse lg:flex-row min-h-[750px] lg:h-[80vh] lg:max-h-[900px] overflow-hidden shadow-sm"
      >
        
        {/* Child Block 1: section-poster (Images & Ribbons) - Z-index 10 */}
        <div className="relative w-full lg:w-1/2 bg-[#D3FBAB] min-h-[400px] lg:min-h-full flex items-end justify-center overflow-hidden z-10">
          
          {/* Ribbon 1: Top Left */}
          <motion.div
            style={{ y: yRibbonTop }}
            className="absolute -top-[5%] -left-[5%] w-[60vw] max-w-[700px] opacity-[0.85] mix-blend-multiply pointer-events-none"
          >
            <Image
              src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/64890a0018b47a0c315d4004_graphic-02.png"
              alt="Decorative 3D Ribbon"
              width={800}
              height={800}
              className="w-full h-auto object-contain"
              priority
            />
          </motion.div>

          {/* Ribbon 2: Bottom Right */}
          <motion.div
            style={{ y: yRibbonBottom }}
            className="absolute -bottom-[15%] -right-[5%] w-[55vw] max-w-[650px] opacity-[0.85] mix-blend-multiply pointer-events-none"
          >
            <Image
              src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/64890a0098d83b71ff101998_graphic-01.png"
              alt="Decorative 3D Ribbon"
              width={800}
              height={800}
              className="w-full h-auto object-contain"
              priority
            />
          </motion.div>

          {/* Layer 1: Background Figure - Desktop Limits Released */}
          <motion.div
            style={{ y: yBackgroundFigure }}
            className="absolute bottom-0 right-[35%] sm:right-[30%] lg:right-[40%] xl:right-[42%] w-[60%] lg:w-[70%] xl:w-[75%] max-w-[320px] lg:max-w-none max-h-[90%] lg:max-h-none z-10 origin-bottom flex justify-end"
          >
            <Image
              src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/64924c159231943db8789799_photo-person-01a-p-500.png"
              alt="Professional candidate in green sweater"
              width={500}
              height={700}
              priority
              className="w-auto h-full object-contain object-bottom drop-shadow-xl"
            />
          </motion.div>

          {/* Layer 2: Foreground Figure - Desktop Limits Released */}
          <motion.div
            style={{ y: yForegroundFigure }}
            className="absolute bottom-0 right-[5%] lg:right-[10%] w-[80%] lg:w-[90%] xl:w-[95%] max-w-[420px] lg:max-w-none max-h-[95%] lg:max-h-none z-20 origin-bottom flex justify-end"
          >
            <Image
              src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/64924c161371d99bc94fec21_photo-person-03a.png"
              alt="Professional candidate in blue turtleneck"
              width={500}
              height={800}
              priority
              className="w-auto h-full object-contain object-bottom drop-shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Child Block 2: section-contents (Typography Engine) - Z-index 30 */}
        <div className="relative w-full lg:w-1/2 bg-[#99F53C] flex flex-col justify-start items-start px-6 pb-12 pt-12 lg:px-16 xl:px-20 lg:pt-[12%] z-30">
          <motion.div
            variants={contentStagger}
            initial="hidden"
            animate="visible"
            className="relative flex flex-col justify-start items-start w-full"
          >
            {/* Headline */}
            <motion.h1
              variants={slideUpReveal}
              className="text-[clamp(4rem,8.5vw,7.5rem)] font-normal tracking-tighter leading-[0.95] text-[#292C26]"
            >
              Discover<br />
              Exceptional<br />
              Talent.
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              variants={slideUpReveal}
              className="mt-6 text-xl lg:text-[1.35rem] font-normal text-[#292C26] max-w-[420px] leading-snug"
            >
              Connect with high-caliber candidates tailored to meet the unique needs of your business.
            </motion.p>

            {/* CTA Button - React State Dropdown */}
            <motion.div variants={slideUpReveal} className="mt-12 w-full sm:w-auto">
              <div 
                className="relative inline-block w-full sm:w-auto"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                {/* Trigger Element */}
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="px-12 py-5 font-semibold text-lg lg:text-xl rounded-full inline-block text-center w-full sm:w-auto transition-all duration-200 bg-[#2a2a2a] text-[#f1f1f1] border-2 border-[#2a2a2a] hover:bg-transparent hover:text-[#2a2a2a] hover:border-[#2a2a2a] active:bg-[#FDFBF7] active:text-[#2a2a2a] active:scale-95"
                >
                  Get started now
                </button>

                {/* Touch-Safe Dropdown */}
                <div className={`absolute left-1/2 -translate-x-1/2 top-[110%] w-56 bg-[#FDFBF7] border border-[#EAECE6] rounded-2xl shadow-xl transition-all duration-300 z-50 overflow-hidden flex flex-col ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                  <Link
                    href="/early-contributors/recruiter"
                    className="hover:bg-[#EAECE6] px-6 py-4 text-center text-[#1F2420] font-medium transition-colors"
                  >
                    For Recruiters
                  </Link>
                  <div className="h-[1px] w-full bg-[#EAECE6]" />
                  <Link
                    href="/early-contributors/candidate"
                    className="hover:bg-[#EAECE6] px-6 py-4 text-center text-[#1F2420] font-medium transition-colors"
                  >
                    For Candidates
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </section>

      {/* Social Proof / Trusted By Section */}
      <section className="w-full bg-white py-20 lg:py-32 border-t border-gray-100">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-8">
          
          {/* Typography Block */}
          <div className="w-full lg:w-[30%] flex-shrink-0 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-[2.5rem] font-normal tracking-tight text-[#1F2420] leading-[1.2]">
              Relied upon by the world’s<br className="hidden lg:block" /> best product teams.
            </h2>
          </div>

          {/* Logo Grid - Tighter gaps and 2x3 layout enforced */}
          <div className="w-full lg:w-[65%] grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 items-center justify-items-center">
            
            {/* Microsoft */}
            <div className="flex items-center justify-center h-16 md:h-20 w-full max-w-[200px] mx-auto">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfdx47hwkbv-WxuJTR6YD9bsKpWrTXnO34tRHvMtMrww&s=10" 
                alt="Microsoft" 
                className="max-w-full max-h-full w-auto h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>

            {/* Hello Tractor */}
            <div className="flex items-center justify-center h-16 md:h-20 w-full max-w-[200px] mx-auto">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGkuZrQ-mxsZZhCy8a7oyLz3L9j7QlwM_cSaVtS3v4Rw&s=10" 
                alt="Hello Tractor" 
                className="max-w-full max-h-full w-auto h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>

            {/* Google For Startups */}
            <div className="flex items-center justify-center h-16 md:h-20 w-full max-w-[200px] mx-auto">
              <img 
                src="https://www.candoo.ai/src/images/brands/Google.png" 
                alt="Google For Startups" 
                className="max-w-full max-h-full w-auto h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>

            {/* Shortlist */}
            <div className="flex items-center justify-center h-16 md:h-20 w-full max-w-[200px] mx-auto">
              <img 
                src="https://www.shortlist.net/Shortlist_logo_blue_large.png" 
                alt="Shortlist" 
                className="max-w-full max-h-full w-auto h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>

            {/* Catalyst (Replaced Afreximbank) */}
            <div className="flex items-center justify-center h-16 md:h-20 w-full max-w-[200px] mx-auto">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmNwgMujRyPngPI5u-jamROxO8Q-yEm48rbV5da-akpw&s=10" 
                alt="Catalyst" 
                className="max-w-full max-h-full w-auto h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>

            {/* Ikigai */}
            <div className="flex items-center justify-center h-16 md:h-20 w-full max-w-[200px] mx-auto">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalVvOozcA7W406K3HC6qiamO5Uu6KZ6HM96Kq5qUSJQ&s=10" 
                alt="Ikigai" 
                className="max-w-full max-h-full w-auto h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>

          </div>

        </div>
      </section>

      <section className="w-[calc(100%-1.5rem)] md:w-[calc(100%-2.5rem)] max-w-[1600px] mx-auto bg-[#EAECE6] py-16 lg:py-20 px-6 md:px-12 lg:px-20 overflow-hidden shadow-sm">
  <div className="flex flex-col gap-12 lg:gap-16">
    
    {/* Top Half: Headline & Pill Row */}
    <div>
      <h2 className="text-5xl lg:text-7xl font-medium tracking-tight text-[#1F2420]">
        The hiring solution for:
      </h2>
      <div className="flex flex-nowrap items-center gap-4 mt-8 overflow-x-auto no-scrollbar pb-4 -mx-6 px-6 md:mx-0 md:px-0">
        <div className="flex-shrink-0 px-8 py-5 lg:px-14 lg:py-6 bg-[#99F53C] border-2 border-[#1F2420] rounded-2xl text-2xl lg:text-[1.75rem] font-medium text-[#1F2420] shadow-[4px_4px_0px_#1F2420]">
          Hiring Teams
        </div>
        <div className="flex-shrink-0 px-8 py-5 lg:px-14 lg:py-6 bg-[#99F53C] border-2 border-[#1F2420] rounded-2xl text-2xl lg:text-[1.75rem] font-medium text-[#1F2420] shadow-[4px_4px_0px_#1F2420]">
          Startups
        </div>
        <div className="flex-shrink-0 px-8 py-5 lg:px-14 lg:py-6 bg-[#99F53C] border-2 border-[#1F2420] rounded-2xl text-2xl lg:text-[1.75rem] font-medium text-[#1F2420] shadow-[4px_4px_0px_#1F2420]">
          Scaling Up
        </div>
        <div className="flex-shrink-0 px-8 py-5 lg:px-14 lg:py-6 bg-[#99F53C] border-2 border-[#1F2420] rounded-2xl text-2xl lg:text-[1.75rem] font-medium text-[#1F2420] shadow-[4px_4px_0px_#1F2420]">
          New Businesses
        </div>
        <div className="flex-shrink-0 px-8 py-5 lg:px-14 lg:py-6 bg-[#99F53C] border-2 border-[#1F2420] rounded-2xl text-2xl lg:text-[1.75rem] font-medium text-[#1F2420] shadow-[4px_4px_0px_#1F2420]">
          Agencies
        </div>
      </div>
    </div>

    {/* Bottom Half: Stat & Image Split */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8">
      
      {/* Left Column (Typography) */}
      <div>
        <h3 className="text-[clamp(6rem,12vw,10rem)] leading-none font-medium tracking-tighter text-[#1F2420] -ml-1">
          93%<span className="text-4xl lg:text-6xl align-top">*</span>
        </h3>
        <p className="mt-8 text-2xl lg:text-[1.75rem] font-medium text-[#1F2420] max-w-lg leading-snug">
          of companies utilizing <span className="text-[#ffa066]">Wirra</span> report a significant increase in the quality and retention of their hires.
        </p>
        <p className="mt-8 text-sm font-medium text-gray-700">
          * Based on early beta analytics.
        </p>
      </div>

      {/* Right Column (Staggered Images) */}
      <div className="flex items-center justify-center lg:justify-end gap-6 relative">
        <img 
          src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/648909ed67c5fbe590b8d619_photo-square-01.jpg" 
          alt="Team Collaboration" 
          className="w-[180px] md:w-[240px] lg:w-[280px] aspect-square rounded-full object-cover z-10 shadow-xl" 
        />
        <img 
          src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/648909ed67c5fbe590b8d5ef_photo-portrait-01.jpg" 
          alt="Office Environment" 
          className="w-[160px] md:w-[220px] lg:w-[260px] h-[260px] md:h-[340px] lg:h-[400px] object-cover shadow-xl" 
        />
      </div>

    </div>
  </div>
</section>

<section className="relative w-[calc(100%-1.5rem)] md:w-[calc(100%-2.5rem)] max-w-[1600px] mx-auto bg-[#F49B36] text-[#1F2420] py-16 lg:py-20 px-6 md:px-12 lg:px-20 overflow-hidden shadow-sm">
  
  {/* Absolute Ribbons (Watermarks) */}
  <img 
    src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/64890a00516b9abf92f4ceda_graphic-03.png" 
    className="absolute top-0 right-0 w-[50vw] max-w-[600px] opacity-20 mix-blend-multiply pointer-events-none -translate-y-1/4 translate-x-1/4" 
    alt="" 
  />
  <img 
    src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/64890a0018b47a0c315d4004_graphic-02.png" 
    className="absolute bottom-0 left-0 w-[50vw] max-w-[600px] opacity-20 mix-blend-multiply pointer-events-none translate-y-1/4 -translate-x-1/4" 
    alt="" 
  />

  {/* Content Container */}
  <div className="relative z-10 flex flex-col gap-16 lg:gap-20 max-w-[1100px] mx-auto w-full">
    
    {/* Block 1: Connect with Quality Candidates (Widget Left, Text Right) */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      {/* Left: UI Widget */}
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-sm mx-auto lg:mx-0 border-2 border-[#1F2420] flex flex-col relative z-20">
        <div className="bg-[#0B3D2C] text-white px-6 py-4 font-medium text-lg">
          Potential Candidate
        </div>
        <div className="p-6 flex flex-col gap-6">
          <div className="flex items-center gap-4 border-b-2 border-[#1F2420] pb-6">
            <img 
              src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/648909ec68ac15191857fd33_photo-avatar-01.jpg" 
              alt="Rohan O&apos;Neil" 
              className="w-14 h-14 rounded-full object-cover" 
            />
            <div>
              <div className="text-xl font-medium">Rohan O&apos;Neil</div>
              <div className="w-12 h-2 bg-gray-200 rounded-full mt-2"></div>
            </div>
          </div>
          
          <div className="flex justify-between items-center text-sm font-medium">
            <span className="text-gray-600">Qualification</span>
            <span className="font-bold text-[#1F2420]">B. Comp Sci</span>
          </div>
          
          <div className="flex justify-between items-center text-sm font-medium">
            <span className="text-gray-600">Match Score</span>
            <span className="bg-[#1F2420] text-white px-2 py-1 rounded-md flex items-center gap-1">
              84% 
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                <path d="M7 17l9.2-9.2M17 17V7H7"/>
              </svg>
            </span>
          </div>

          <div className="flex justify-between items-center text-sm font-medium">
            <span className="text-gray-600">Referrer</span>
            <div className="w-10 h-2 bg-gray-200 rounded-full"></div>
          </div>

          <div className="bg-[#D3FBAB] text-sm p-4 rounded-xl text-[#1F2420] font-medium leading-relaxed">
            Here is a short chat message that is long enough to span two lines.
          </div>

          <div className="flex gap-4 mt-2">
            <button className="flex-1 py-2.5 bg-gray-100 hover:bg-gray-200 text-[#1F2420] font-semibold text-lg lg:text-xl rounded-full transition-colors">
              Dismiss
            </button>
            <button className="flex-1 py-2.5 bg-[#1F2420] hover:bg-black text-white font-semibold text-lg lg:text-xl rounded-full transition-colors">
              Shortlist
            </button>
          </div>
        </div>
      </div>

      {/* Right: Typography & Testimonial */}
      <div>
        <h2 className="text-5xl lg:text-[4.5rem] font-normal tracking-tighter leading-[1.05]">
          Connect with<br />Quality Candidates.
        </h2>
        <p className="mt-6 text-xl lg:text-2xl leading-snug max-w-md font-medium tracking-tight">
          Empower your business&apos;s growth with the platform designed for laser-precise talent acquisition.
        </p>
        <hr className="border-t-2 border-[#1F2420] my-8 w-full max-w-md" />
        <div className="flex gap-5 items-start max-w-md">
          <img 
            src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/648909ec67c5fbe590b8d463_photo-avatar-04.jpg" 
            alt="Lachlan Simkin" 
            className="w-12 h-12 rounded-full object-cover flex-shrink-0" 
          />
          <div>
            <p className="text-xl font-medium leading-tight tracking-tight">
              &quot;We started using Wirra when we needed top talent in a pinch – now we use it for all our hiring purposes.&quot;
            </p>
            <p className="mt-3 text-sm opacity-80 font-medium">
              Lachlan Simkin – Devsonic
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Block 2: Simplify Talent Selection (Text Left, Widget Right) */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      {/* Left: Typography & Testimonial */}
      <div className="order-2 lg:order-1">
        <h2 className="text-5xl lg:text-[4.5rem] font-normal tracking-tighter leading-[1.05]">
          Simplify Talent<br />Selection.
        </h2>
        <p className="mt-6 text-xl lg:text-2xl leading-snug max-w-md font-medium tracking-tight">
          Wirra gives you the power to quickly assess and shortlist candidates, providing a holistic view of your talent pipeline.
        </p>
        <hr className="border-t-2 border-[#1F2420] my-8 w-full max-w-md" />
        <div className="flex gap-5 items-start max-w-md">
          <img 
            src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/648909ebd07e20dd4b202c00_photo-avatar-05.jpg" 
            alt="Amina Osei" 
            className="w-12 h-12 rounded-full object-cover flex-shrink-0" 
          />
          <div>
            <p className="text-xl font-medium leading-tight tracking-tight">
              &quot;Wirra initially came to our rescue during a crucial talent crunch, and has since become our go-to platform for all recruitment needs.&quot;
            </p>
            <p className="mt-3 text-sm opacity-80 font-medium">
              Amina Osei – Heyday Naturals
            </p>
          </div>
        </div>
      </div>

      {/* Right: UI Widget */}
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-sm mx-auto lg:mx-0 border-2 border-[#1F2420] flex flex-col relative z-20 order-1 lg:order-2">
        <div className="bg-[#0B3D2C] text-white px-6 pt-5 pb-0">
          <div className="font-medium text-xl mb-6">Candidates</div>
          <div className="flex gap-6 text-sm">
            <span className="cursor-pointer text-white/70 hover:text-white pb-3">Add</span>
            <span className="cursor-pointer font-medium border-b-2 border-white pb-3">Overview</span>
            <span className="cursor-pointer text-white/70 hover:text-white pb-3">Security</span>
          </div>
        </div>
        
        <div className="p-6 flex flex-col gap-6">
          {/* Candidate 1 */}
          <div className="flex items-center justify-between border-b-2 border-[#1F2420] pb-4">
            <div className="flex items-center gap-4">
              <img 
                src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/648909ec68ac15191857fd33_photo-avatar-01.jpg" 
                alt="Rohan O&apos;Neil" 
                className="w-10 h-10 rounded-full object-cover" 
              />
              <div>
                <div className="font-medium text-[#1F2420]">Rohan O&apos;Neil</div>
                <div className="w-12 h-2 bg-gray-200 rounded-full mt-1"></div>
              </div>
            </div>
            <div className="w-5 h-5 rounded-full bg-green-700 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
          </div>
          
          {/* Candidate 2 */}
          <div className="flex items-center justify-between border-b-2 border-[#1F2420] pb-4">
            <div className="flex items-center gap-4">
              <img 
                src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/648909eb0421491be3d29e20_photo-avatar-02.jpg" 
                alt="Jackson Todd" 
                className="w-10 h-10 rounded-full object-cover" 
              />
              <div>
                <div className="font-medium text-[#1F2420]">Jackson Todd</div>
                <div className="w-12 h-2 bg-gray-200 rounded-full mt-1"></div>
              </div>
            </div>
            <div className="w-5 h-5 rounded-full bg-green-700 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
          </div>
          
          {/* Candidate 3 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/648909ec68ac15191857fd11_photo-avatar-03.jpg" 
                alt="Anna Lundqvist" 
                className="w-10 h-10 rounded-full object-cover" 
              />
              <div>
                <div className="font-medium text-[#1F2420]">Anna Lundqvist</div>
                <div className="w-12 h-2 bg-gray-200 rounded-full mt-1"></div>
              </div>
            </div>
            <div className="w-5 h-5 rounded-full bg-green-700 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
          </div>
          
          <div className="flex gap-4 mt-2">
            <button className="flex-1 py-2.5 bg-gray-100 hover:bg-gray-200 text-[#1F2420] font-semibold text-lg lg:text-xl rounded-full transition-colors">
              Select
            </button>
            <button className="flex-1 py-2.5 bg-[#1F2420] hover:bg-black text-white font-semibold text-lg lg:text-xl rounded-full transition-colors">
              Action
            </button>
          </div>
        </div>
      </div>
      
    </div>

    {/* Block 3 Divider */}
    <hr className="border-t-2 border-[#1F2420] w-full mt-8 mb-4 lg:mt-12" />

    {/* Block 3: Final CTA & Stat */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center pt-8">
      {/* Left: Stat */}
      <div>
        <h3 className="text-[clamp(5rem,9vw,7rem)] font-normal tracking-tighter text-[#1F2420] leading-none">
          9 in 10<span className="text-4xl lg:text-5xl align-top">*</span>
        </h3>
        <p className="mt-6 text-xl lg:text-2xl leading-snug max-w-sm font-medium tracking-tight">
          businesses that use Wirra have reported a decrease in time-to-hire, accelerating their recruitment process significantly.
        </p>
        <p className="mt-8 text-sm opacity-80 font-medium">
          * Based on early beta analytics.
        </p>
      </div>

      {/* Right: Action */}
      <div className="flex flex-col items-center text-center lg:pl-12">
        <h2 className="text-5xl lg:text-[4.5rem] font-normal tracking-tighter leading-[1.05]">
          Hire Smarter.
        </h2>
        <p className="mt-6 text-xl font-medium tracking-tight leading-snug">
          14 Day Free Trial<br />No Credit Card Required.
        </p>
        <button className="mt-8 px-10 py-5 bg-[#1F2420] hover:bg-black text-white font-semibold text-lg lg:text-xl rounded-full transition-colors w-full max-w-[320px]">
          Get started now
        </button>
        <a href="#" className="mt-6 font-medium text-[#1F2420] underline decoration-2 underline-offset-4 hover:opacity-70 transition-opacity">
          Or schedule a demo
        </a>
      </div>
    </div>

  </div>
</section>

<section className="w-full bg-white text-[#1F2420] py-24 lg:py-32 border-t border-gray-100">
  <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col">
    <h5 className="text-sm font-bold tracking-widest uppercase mb-8">Customer Spotlight</h5>
    <h2 className="text-5xl lg:text-7xl font-normal tracking-tighter leading-[1.1] max-w-5xl mb-6">
      Wirra accelerates talent acquisition and optimizes hiring teams for success.
    </h2>
    <p className="text-xl lg:text-2xl font-medium tracking-tight leading-snug max-w-3xl text-gray-700">
      Discover the transformational impact Wirra has had on our clients&apos; recruitment strategies, driving not only efficiency but also significantly improving results for new hires and doubling employee retention.
    </p>
    
    <hr className="border-t-2 border-[#1F2420] w-full my-16 lg:my-24" />
    
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
      <div className="lg:col-span-7">
        <img 
          src="https://cdn.prod.website-files.com/6489090bd5636759fdc111c3/64a62f4324111bab22a237a2_photo-landscape-03.jpg" 
          alt="Customer Spotlight" 
          className="w-full aspect-video md:aspect-[4/3] lg:aspect-[16/10] object-cover rounded-sm shadow-md" 
        />
      </div>
      <div className="lg:col-span-5 flex flex-col items-start">
        <img 
          src="https://eopages.eu/image/layout_set_logo?img_id=914044" 
          alt="Cloudeo Logo" 
          className="h-8 md:h-10 w-auto object-contain mb-8 lg:mb-12" 
        />
        <h3 className="text-2xl lg:text-[2rem] font-medium tracking-tight leading-snug mb-10">
          &quot;We&apos;ve done more than just streamline our hiring. We&apos;ve connected with extraordinary individuals, who have taken us to new, exciting places.&quot;
        </h3>
        <Link className="px-10 py-5 bg-[#1F2420] hover:bg-black text-white font-semibold text-lg rounded-full transition-colors" href="/success">
          Read Story
        </Link>
      </div>
    </div>

    <hr className="border-t-2 border-[#1F2420] w-full mt-24 mb-10" />
    
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
      <h3 className="text-3xl lg:text-4xl font-normal tracking-tight">
        Explore more Customer Success Stories.
      </h3>
      <Link className="inline-flex items-center gap-3 px-8 py-4 bg-[#1F2420] hover:bg-black text-white font-semibold text-lg rounded-full transition-colors" href="/success">
        Success Center 
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </Link>
    </div>
  </div>
</section>

<section className="w-[calc(100%-1.5rem)] md:w-[calc(100%-2.5rem)] max-w-[1600px] mx-auto bg-[#EAECE6] text-[#1F2420] py-24 lg:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">  <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
    
    {/* Left Column: Sticky Sidebar */}
    <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-32">
      <h2 className="text-5xl lg:text-7xl font-normal tracking-tighter leading-[1.05] mb-10">
        The Chronicles<br/>
        <em className="italic font-serif tracking-normal">of Hiring.</em>
      </h2>
      <Link className="px-10 py-5 bg-[#1F2420] hover:bg-black text-white font-semibold text-lg rounded-full transition-colors" href="/blog">
        Visit Blog
      </Link>
    </div>

    {/* Right Column: Blog Cards */}
    <div className="lg:col-span-7 flex flex-col gap-12 lg:gap-16">
      
      {/* Blog Card 1 */}
      <Link className="flex flex-col md:flex-row gap-6 md:gap-8 items-start group" href="/blog">
        <div className="w-full md:w-64 lg:w-72 flex-shrink-0 overflow-hidden rounded-sm">
          <img 
            src="https://cdn.prod.website-files.com/6489090bd5636759fdc111c3/64a61f3a39b7be36f17eeb58_photo-blog-04-p-500.jpg" 
            alt="Hybrid Recruiting" 
            className="w-full aspect-[4/3] md:aspect-[3/2] object-cover group-hover:scale-105 transition-transform duration-500" 
          />
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold tracking-wide text-gray-500 uppercase">Insight</span>
          <h3 className="text-2xl lg:text-[1.75rem] font-medium tracking-tight leading-snug group-hover:text-[#F49B36] transition-colors">
            How Hybrid and Remote Recruiting Are Disrupting Traditional HR
          </h3>
          <span className="text-sm font-medium mt-2 border-b border-[#1F2420] self-start pb-1">Read more</span>
        </div>
      </Link>

      {/* Blog Card 2 */}
      <Link className="flex flex-col md:flex-row gap-6 md:gap-8 items-start group" href="/blog">
        <div className="w-full md:w-64 lg:w-72 flex-shrink-0 overflow-hidden rounded-sm">
          <img 
            src="https://cdn.prod.website-files.com/6489090bd5636759fdc111c3/64a61f040b18f841dba3ceab_photo-blog-03-p-500.jpg" 
            alt="Hybrid Recruitment" 
            className="w-full aspect-[4/3] md:aspect-[3/2] object-cover group-hover:scale-105 transition-transform duration-500" 
          />
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold tracking-wide text-gray-500 uppercase">News</span>
          <h3 className="text-2xl lg:text-[1.75rem] font-medium tracking-tight leading-snug group-hover:text-[#F49B36] transition-colors">
            Charting New Terrain: The Paradigm Shift in Hybrid Recruitment
          </h3>
          <span className="text-sm font-medium mt-2 border-b border-[#1F2420] self-start pb-1">Read more</span>
        </div>
      </Link>

    </div>
  </div>
</section>

<section className="relative w-[calc(100%-1.5rem)] md:w-[calc(100%-2.5rem)] max-w-[1600px] mx-auto bg-[#2a2a2a] text-[#FDFBF7] py-24 lg:py-32 px-6 md:px-12 lg:px-20 overflow-hidden mb-12">
  
  {/* Abstract Background Graphic */}
  <img 
    src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/64890a00bed2d0bbb612092f_graphic-10.png" 
    alt="" 
    className="absolute bottom-0 left-0 w-[80vw] lg:w-[50vw] max-w-[800px] opacity-10 grayscale mix-blend-screen pointer-events-none -translate-x-1/4 translate-y-1/4" 
  />

  {/* Right-Aligned Content Block */}
  <div className="relative z-10 flex flex-col items-start lg:w-1/2 lg:ml-auto">
  <h2 className="text-5xl lg:text-7xl font-normal tracking-tighter leading-[1.05] mb-8">
    Invest in the<br />Future of Hiring.
  </h2>
  
  <hr className="border-t-2 border-[#FDFBF7]/20 w-full mb-8" />
  
  <p className="text-xl lg:text-2xl font-medium tracking-tight leading-snug mb-10 text-[#FDFBF7]/90">
    Join us in revolutionizing the recruitment ecosystem. Fuel the AI-powered platform designed for elite talent acquisition.
  </p>
  
  <Link 
    href="/investors"
    className="px-12 py-5 font-semibold text-lg lg:text-xl rounded-full inline-block text-center w-full sm:w-auto transition-all duration-200 bg-[#F49B36] text-[#1F2420] border-2 border-[#F49B36] hover:bg-transparent hover:text-[#FDFBF7] hover:border-[#FDFBF7] active:bg-[#FDFBF7] active:text-[#2a2a2a] active:scale-95"
  >
    Become an Investor
  </Link>
</div>
</section>

    </main>
  );
}