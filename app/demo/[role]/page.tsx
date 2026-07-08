"use client";

import { useState, use } from "react";
import Link from "next/link";
import { submitDemoRequest } from '@/app/actions/demo';

export default function DemoPage({ params }: { params: Promise<{ role: string }> }) {
  // 1. Unwrap the Next.js 15 asynchronous params using React's use() hook
  const resolvedParams = use(params);
  const isRecruiter = resolvedParams.role === "recruiters";
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    // Call the server action, passing the dynamically evaluated boolean
    const result = await submitDemoRequest(formData, isRecruiter);
    
    if (result.success) {
      setIsSuccess(true);
    } else {
      alert("Something went wrong processing your request. Please try again.");
    }
    
    setIsSubmitting(false);
  };

  return (
    <>
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 font-sans selection:bg-[#F49B36] selection:text-[#1F2420]">
        
        {/* LEFT COLUMN (The Dark Form) */}
        <div className="bg-[#2a2a2a] text-white p-8 md:p-16 lg:p-24 flex flex-col justify-center relative">
          
          {/* Simple Escot Hatch */}
          <div className="absolute top-8 left-8 md:top-12 md:left-16">
            <Link href="/" className="text-sm font-bold tracking-widest uppercase hover:text-[#F49B36] transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Back
            </Link>
          </div>

          <div className="max-w-md w-full mx-auto mt-12 lg:mt-0">
            <h1 className="text-5xl lg:text-7xl tracking-tighter mb-4 leading-[1.05]">
              {isRecruiter ? (
                <>Experience the Future of <span className="text-[#F49B36]">Hiring.</span></>
              ) : (
                <>Unlock Your <span className="text-[#F49B36]">Career</span> Potential.</>
              )}
            </h1>
            <p className="text-lg text-gray-400 mb-12">
              Get exclusive beta access to the Wirra platform.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              
              {/* Row 1: Name & Email */}
              {/* Unified Base Fields */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  <div>
    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">Full Name</label>
    <input type="text" id="name" name="name" required className="w-full bg-transparent border-b border-gray-600 rounded-none px-0 py-3 text-white placeholder-gray-500 focus:border-[#F49B36] focus:outline-none focus:ring-0 transition-colors appearance-none" placeholder="Full Name" />
  </div>
  <div>
    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">Email Address</label>
    <input type="email" id="email" name="email" required className="w-full bg-transparent border-b border-gray-600 rounded-none px-0 py-3 text-white placeholder-gray-500 focus:border-[#F49B36] focus:outline-none focus:ring-0 transition-colors appearance-none" placeholder="you@email.com" />
  </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  <div>
    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-300">Phone Number</label>
    <input type="tel" id="phone" name="phone" required className="w-full bg-transparent border-b border-gray-600 rounded-none px-0 py-3 text-white placeholder-gray-500 focus:border-[#F49B36] focus:outline-none focus:ring-0 transition-colors appearance-none" placeholder="+1 (555) 000-0000" />
  </div>
  <div>
    <label htmlFor="country" className="block text-sm font-medium mb-2 text-gray-300">Country</label>
    <input type="text" id="country" name="country" required className="w-full bg-transparent border-b border-gray-600 rounded-none px-0 py-3 text-white placeholder-gray-500 focus:border-[#F49B36] focus:outline-none focus:ring-0 transition-colors appearance-none" placeholder="e.g. Kenya" />
  </div>
</div>

{/* Conditional Fields */}
{isRecruiter ? (
  <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-2 text-gray-300">Company</label>
        <input type="text" id="company" name="company" required className="w-full bg-transparent border-b border-gray-600 rounded-none px-0 py-3 text-white placeholder-gray-500 focus:border-[#F49B36] focus:outline-none focus:ring-0 transition-colors appearance-none" placeholder="Organization Name" />
      </div>
      <div>
        <label htmlFor="role" className="block text-sm font-medium mb-2 text-gray-300">Role</label>
        <input type="text" id="role" name="role" required className="w-full bg-transparent border-b border-gray-600 rounded-none px-0 py-3 text-white placeholder-gray-500 focus:border-[#F49B36] focus:outline-none focus:ring-0 transition-colors appearance-none" placeholder="e.g. Head of Talent" />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <label htmlFor="companySize" className="block text-sm font-medium mb-2 text-gray-300">Company Size</label>
        <select id="companySize" name="companySize" required defaultValue="" className="w-full bg-transparent border-b border-gray-600 rounded-none px-0 py-3 text-white focus:border-[#F49B36] focus:outline-none focus:ring-0 transition-colors appearance-none">
          <option value="" disabled className="text-gray-500">Select size...</option>
          <option value="1-50" className="text-[#1F2420]">1-50</option>
          <option value="51-200" className="text-[#1F2420]">51-200</option>
          <option value="201-500" className="text-[#1F2420]">201-500</option>
          <option value="500+" className="text-[#1F2420]">500+</option>
        </select>
      </div>
      <div>
        <label htmlFor="challenges" className="block text-sm font-medium mb-2 text-gray-300">Primary Hiring Challenge</label>
        <select id="challenges" name="challenges" required defaultValue="" className="w-full bg-transparent border-b border-gray-600 rounded-none px-0 py-3 text-white focus:border-[#F49B36] focus:outline-none focus:ring-0 transition-colors appearance-none">
          <option value="" disabled className="text-gray-500">Select a challenge...</option>
          <option value="sourcing" className="text-[#1F2420]">Candidate Sourcing</option>
          <option value="screening" className="text-[#1F2420]">Automated Screening</option>
          <option value="time" className="text-[#1F2420]">Time-to-hire</option>
          <option value="retention" className="text-[#1F2420]">Employee Retention</option>
        </select>
      </div>
    </div>
  </>
) : (
  <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <label htmlFor="field" className="block text-sm font-medium mb-2 text-gray-300">Profession / Discipline</label>
        <input type="text" id="field" name="field" required className="w-full bg-transparent border-b border-gray-600 rounded-none px-0 py-3 text-white placeholder-gray-500 focus:border-[#F49B36] focus:outline-none focus:ring-0 transition-colors appearance-none" placeholder="e.g. Engineering" />
      </div>
      <div>
        <label htmlFor="industry" className="block text-sm font-medium mb-2 text-gray-300">Industry</label>
        <input type="text" id="industry" name="industry" required className="w-full bg-transparent border-b border-gray-600 rounded-none px-0 py-3 text-white placeholder-gray-500 focus:border-[#F49B36] focus:outline-none focus:ring-0 transition-colors appearance-none" placeholder="e.g. SaaS, Fintech" />
      </div>
    </div>
    
    <div>
      <label htmlFor="level" className="block text-sm font-medium mb-2 text-gray-300">Experience Level</label>
      <select id="level" name="level" required defaultValue="" className="w-full bg-transparent border-b border-gray-600 rounded-none px-0 py-3 text-white focus:border-[#F49B36] focus:outline-none focus:ring-0 transition-colors appearance-none">
        <option value="" disabled className="text-gray-500">Select level...</option>
        <option value="intern" className="text-[#1F2420]">Intern</option>
        <option value="entry" className="text-[#1F2420]">Entry</option>
        <option value="mid" className="text-[#1F2420]">Mid</option>
        <option value="senior" className="text-[#1F2420]">Senior</option>
        <option value="executive" className="text-[#1F2420]">Executive</option>
      </select>
    </div>
  </>
)}

<button 
  type="submit" 
  disabled={isSubmitting}
  className="w-full mt-8 px-8 py-5 font-bold text-lg rounded-full flex items-center justify-center gap-2 transition-all duration-200 bg-[#F49B36] text-[#1F2420] border-2 border-[#F49B36] hover:bg-transparent hover:text-[#FDFBF7] hover:border-[#FDFBF7] active:bg-white active:text-[#1F2420] disabled:opacity-70 disabled:pointer-events-none"
>
  {isSubmitting ? "Processing Request..." : "Request Beta Access"}
</button>
            </form>
          </div>
        </div>

        {/* RIGHT COLUMN (The Light Proof) */}
        <div className="bg-[#FDFBF7] text-[#1F2420] p-8 md:p-16 lg:p-24 flex flex-col justify-center border-l border-gray-200">
          <div className="max-w-xl mx-auto w-full">
            <h2 className="text-4xl lg:text-5xl font-medium tracking-tight leading-snug mb-12">
              &quot;We started using Wirra when we needed top talent in a pinch – now we use it for all our hiring purposes.&quot;
            </h2>
            
            <div className="flex items-center gap-4">
              <img 
                src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/648909ec67c5fbe590b8d463_photo-avatar-04.jpg" 
                alt="Lachlan Simkin" 
                className="w-14 h-14 rounded-full object-cover shadow-sm" 
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg text-[#1F2420]">Lachlan Simkin</span>
                <span className="text-[#F49B36] font-medium text-sm">Founder and CEO, Devsonic</span>
              </div>
            </div>

            <hr className="border-t-2 border-[#1F2420]/10 w-full my-16" />

<p className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-8">
  Relied upon by the world&apos;s best product teams.
</p>

{/* Inline style definition for the seamless marquee animation */}
<style>{`
  @keyframes marquee {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-100%); }
  }
  .animate-marquee {
    animation: marquee 25s linear infinite;
  }
`}</style>

<div 
  className="w-full overflow-hidden flex relative" 
  style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
>
  {/* Marquee Track 1 */}
  <div className="flex shrink-0 animate-marquee items-center gap-12 pr-12">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfdx47hwkbv-WxuJTR6YD9bsKpWrTXnO34tRHvMtMrww&s=10" alt="Microsoft" className="w-32 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGkuZrQ-mxsZZhCy8a7oyLz3L9j7QlwM_cSaVtS3v4Rw&s=10" alt="Hello Tractor" className="w-32 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
    <img src="https://www.candoo.ai/src/images/brands/Google.png" alt="Google For Startups" className="w-32 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
    <img src="https://www.shortlist.net/Shortlist_logo_blue_large.png" alt="Shortlist" className="w-32 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmNwgMujRyPngPI5u-jamROxO8Q-yEm48rbV5da-akpw&s=10" alt="Catalyst" className="w-32 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalVvOozcA7W406K3HC6qiamO5Uu6KZ6HM96Kq5qUSJQ&s=10" alt="Ikigai" className="w-32 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
  </div>
  
  {/* Marquee Track 2 (Duplicate for continuous looping) */}
  <div className="flex shrink-0 animate-marquee items-center gap-12 pr-12" aria-hidden="true">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfdx47hwkbv-WxuJTR6YD9bsKpWrTXnO34tRHvMtMrww&s=10" alt="Microsoft" className="w-32 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGkuZrQ-mxsZZhCy8a7oyLz3L9j7QlwM_cSaVtS3v4Rw&s=10" alt="Hello Tractor" className="w-32 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
    <img src="https://www.candoo.ai/src/images/brands/Google.png" alt="Google For Startups" className="w-32 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
    <img src="https://www.shortlist.net/Shortlist_logo_blue_large.png" alt="Shortlist" className="w-32 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmNwgMujRyPngPI5u-jamROxO8Q-yEm48rbV5da-akpw&s=10" alt="Catalyst" className="w-32 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalVvOozcA7W406K3HC6qiamO5Uu6KZ6HM96Kq5qUSJQ&s=10" alt="Ikigai" className="w-32 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
  </div>
</div>

          </div>
        </div>
      </div>

      {/* Success Modal (Overlay) */}
      {isSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1F2420]/80 backdrop-blur-md p-6 animate-in fade-in duration-500">
          <div className="bg-[#2a2a2a] border border-gray-700 rounded-2xl shadow-2xl p-10 max-w-lg w-full flex flex-col items-center text-center">
            <div className="w-16 h-16 border-4 border-[#F49B36] border-t-transparent rounded-full animate-spin mb-6"></div>
            <h3 className="text-3xl font-medium tracking-tight text-[#FDFBF7] mb-4">Request Successful</h3>
            <p className="text-gray-400 text-lg">Thank you. Your details have been securely saved. Our team will be in touch shortly to guide you through onboarding.</p>
          </div>
        </div>
      )}
    </>
  );
}