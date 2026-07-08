"use client";

import { useState, use, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { submitDemoRequest } from '@/app/actions/demo';

export default function DemoPage({ params }: { params: Promise<{ role: string }> }) {
  // 1. Unwrap the Next.js 15 asynchronous params using React's use() hook
  const resolvedParams = use(params);
  const isRecruiter = resolvedParams.role === "recruiters";
  
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // 2. Auto-Redirect Logic
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        router.push("/");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
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
      {/* Master Wrapper: Removed flex-center trap to allow natural mobile scrolling. Added fluid padding. */}
      <div className="min-h-screen bg-[#FDFBF7] pt-28 pb-16 px-4 sm:px-6 md:px-12 lg:px-20 selection:bg-[#F49B36] selection:text-[#1F2420]">
        
        {/* Inner Canvas (The Split Grid) */}
        <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
          
          {/* LEFT COLUMN (The Dark Form) - Fluid padding applied (p-6 to p-24) */}
          <div className="bg-[#2a2a2a] text-white p-6 sm:p-10 md:p-16 lg:p-24 flex flex-col justify-center relative overflow-hidden">
            
            {/* Background Graphic Watermark */}
            <img 
              src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/64890a00bed2d0bbb612092f_graphic-10.png" 
              alt="" 
              className="absolute top-0 left-0 w-[90%] max-w-[500px] opacity-10 grayscale mix-blend-screen pointer-events-none -translate-x-1/4 -translate-y-1/4 z-0 object-contain" 
            />
            
            {/* Simple Escot Hatch - Adjusted mobile positioning */}
            <div className="absolute top-6 left-6 md:top-12 md:left-12 z-20">
              <Link href="/" className="text-xs md:text-sm font-bold tracking-widest uppercase hover:text-[#F49B36] transition-colors flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Back
              </Link>
            </div>

            {/* Form Content Wrapper - Added max-w-lg and mt-12 to clear the back button on mobile */}
            <div className="max-w-lg w-full mx-auto mt-16 md:mt-0 relative z-10">
              
              {/* Fluid Typography: text-4xl on mobile, scaling up to 7xl on desktop */}
              <h1 className="text-4xl md:text-5xl lg:text-7xl tracking-tighter mb-4 leading-[1.05]">
                {isRecruiter ? (
                  <>Experience the Future of <span className="text-[#F49B36]">Hiring.</span></>
                ) : (
                  <>Unlock Your <span className="text-[#F49B36]">Career</span> Potential.</>
                )}
              </h1>
              <p className="text-base md:text-lg text-gray-400 mb-10 md:mb-12">
                Get exclusive beta access to the Wirra platform.
              </p>

              {/* Form Grid - Adjusted gap for mobile (gap-6 vs gap-8) */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-8">
                
                {/* Shared Base Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div>
                    <label htmlFor="name" className="block text-xs md:text-sm font-medium mb-2 text-gray-300">Full Name</label>
                    <input type="text" id="name" name="name" required className="w-full bg-transparent border-b border-gray-600 rounded-none px-0 py-2 md:py-3 text-white placeholder-gray-500 focus:border-[#F49B36] focus:outline-none focus:ring-0 transition-colors appearance-none" placeholder="Full Name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs md:text-sm font-medium mb-2 text-gray-300">Email Address</label>
                    <input type="email" id="email" name="email" required className="w-full bg-transparent border-b border-gray-600 rounded-none px-0 py-2 md:py-3 text-white placeholder-gray-500 focus:border-[#F49B36] focus:outline-none focus:ring-0 transition-colors appearance-none" placeholder="you@email.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div>
                    <label htmlFor="phone" className="block text-xs md:text-sm font-medium mb-2 text-gray-300">Phone Number</label>
                    <input type="tel" id="phone" name="phone" required className="w-full bg-transparent border-b border-gray-600 rounded-none px-0 py-2 md:py-3 text-white placeholder-gray-500 focus:border-[#F49B36] focus:outline-none focus:ring-0 transition-colors appearance-none" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-xs md:text-sm font-medium mb-2 text-gray-300">Country</label>
                    <input type="text" id="country" name="country" required className="w-full bg-transparent border-b border-gray-600 rounded-none px-0 py-2 md:py-3 text-white placeholder-gray-500 focus:border-[#F49B36] focus:outline-none focus:ring-0 transition-colors appearance-none" placeholder="e.g. Kenya" />
                  </div>
                </div>

                {/* Conditional Fields */}
                {isRecruiter ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <div>
                        <label htmlFor="company" className="block text-xs md:text-sm font-medium mb-2 text-gray-300">Company</label>
                        <input type="text" id="company" name="company" required className="w-full bg-transparent border-b border-gray-600 rounded-none px-0 py-2 md:py-3 text-white placeholder-gray-500 focus:border-[#F49B36] focus:outline-none focus:ring-0 transition-colors appearance-none" placeholder="Organization Name" />
                      </div>
                      <div>
                        <label htmlFor="role" className="block text-xs md:text-sm font-medium mb-2 text-gray-300">Role</label>
                        <input type="text" id="role" name="role" required className="w-full bg-transparent border-b border-gray-600 rounded-none px-0 py-2 md:py-3 text-white placeholder-gray-500 focus:border-[#F49B36] focus:outline-none focus:ring-0 transition-colors appearance-none" placeholder="e.g. Head of Talent" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <div>
                        <label htmlFor="companySize" className="block text-xs md:text-sm font-medium mb-2 text-gray-300">Company Size</label>
                        <select id="companySize" name="companySize" required defaultValue="" className="w-full bg-transparent border-b border-gray-600 rounded-none px-0 py-2 md:py-3 text-white focus:border-[#F49B36] focus:outline-none focus:ring-0 transition-colors appearance-none">
                          <option value="" disabled className="text-gray-500">Select size...</option>
                          <option value="1-50" className="text-[#1F2420]">1-50</option>
                          <option value="51-200" className="text-[#1F2420]">51-200</option>
                          <option value="201-500" className="text-[#1F2420]">201-500</option>
                          <option value="500+" className="text-[#1F2420]">500+</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="challenges" className="block text-xs md:text-sm font-medium mb-2 text-gray-300">Primary Challenge</label>
                        <select id="challenges" name="challenges" required defaultValue="" className="w-full bg-transparent border-b border-gray-600 rounded-none px-0 py-2 md:py-3 text-white focus:border-[#F49B36] focus:outline-none focus:ring-0 transition-colors appearance-none">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <div>
                        <label htmlFor="field" className="block text-xs md:text-sm font-medium mb-2 text-gray-300">Profession / Discipline</label>
                        <input type="text" id="field" name="field" required className="w-full bg-transparent border-b border-gray-600 rounded-none px-0 py-2 md:py-3 text-white placeholder-gray-500 focus:border-[#F49B36] focus:outline-none focus:ring-0 transition-colors appearance-none" placeholder="e.g. Engineering" />
                      </div>
                      <div>
                        <label htmlFor="industry" className="block text-xs md:text-sm font-medium mb-2 text-gray-300">Industry</label>
                        <input type="text" id="industry" name="industry" required className="w-full bg-transparent border-b border-gray-600 rounded-none px-0 py-2 md:py-3 text-white placeholder-gray-500 focus:border-[#F49B36] focus:outline-none focus:ring-0 transition-colors appearance-none" placeholder="e.g. SaaS, Fintech" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="level" className="block text-xs md:text-sm font-medium mb-2 text-gray-300">Experience Level</label>
                      <select id="level" name="level" required defaultValue="" className="w-full bg-transparent border-b border-gray-600 rounded-none px-0 py-2 md:py-3 text-white focus:border-[#F49B36] focus:outline-none focus:ring-0 transition-colors appearance-none">
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
                  className="w-full md:w-auto self-start mt-4 md:mt-8 px-8 md:px-12 py-4 font-semibold text-base md:text-lg lg:text-xl rounded-full transition-all duration-200 bg-[#F49B36] text-[#1F2420] border-2 border-[#F49B36] hover:bg-transparent hover:text-[#FDFBF7] hover:border-[#FDFBF7] active:bg-white active:text-[#1F2420] active:scale-95 disabled:opacity-70 disabled:pointer-events-none flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    "Request Beta Access"
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT COLUMN (The Light Proof) - Fluid padding applied */}
          <div className="bg-[#FDFBF7] text-[#1F2420] p-8 sm:p-10 md:p-16 lg:p-24 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-gray-200">
            <div className="max-w-xl mx-auto w-full">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-snug mb-8 md:mb-12">
                &quot;We started using Wirra when we needed top talent in a pinch – now we use it for all our hiring purposes.&quot;
              </h2>
              
              <div className="flex items-center gap-4">
                <img 
                  src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/648909ec67c5fbe590b8d463_photo-avatar-04.jpg" 
                  alt="Lachlan Simkin" 
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover shadow-sm" 
                />
                <div className="flex flex-col">
                  <span className="font-bold text-base md:text-lg text-[#1F2420]">Lachlan Simkin</span>
                  <span className="text-[#F49B36] font-medium text-xs md:text-sm">Founder and CEO, Devsonic</span>
                </div>
              </div>

              <hr className="border-t-2 border-[#1F2420]/10 w-full my-12 md:my-16" />
              
              <p className="text-xs md:text-sm font-bold tracking-widest uppercase text-gray-500 mb-8">
                Relied upon by the world&apos;s best product teams.
              </p>

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
                className="w-full overflow-hidden flex relative min-w-0" 
                style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
              >
                {/* Marquee Track 1 */}
                <div className="flex shrink-0 animate-marquee items-center gap-8 md:gap-12 pr-8 md:pr-12">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfdx47hwkbv-WxuJTR6YD9bsKpWrTXnO34tRHvMtMrww&s=10" alt="Microsoft" className="w-24 md:w-32 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGkuZrQ-mxsZZhCy8a7oyLz3L9j7QlwM_cSaVtS3v4Rw&s=10" alt="Hello Tractor" className="w-24 md:w-32 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
                  <img src="https://www.candoo.ai/src/images/brands/Google.png" alt="Google For Startups" className="w-24 md:w-32 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
                  <img src="https://www.shortlist.net/Shortlist_logo_blue_large.png" alt="Shortlist" className="w-24 md:w-32 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmNwgMujRyPngPI5u-jamROxO8Q-yEm48rbV5da-akpw&s=10" alt="Catalyst" className="w-24 md:w-32 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalVvOozcA7W406K3HC6qiamO5Uu6KZ6HM96Kq5qUSJQ&s=10" alt="Ikigai" className="w-24 md:w-32 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
                </div>
                
                {/* Marquee Track 2 (Duplicate for continuous looping) */}
                <div className="flex shrink-0 animate-marquee items-center gap-8 md:gap-12 pr-8 md:pr-12" aria-hidden="true">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfdx47hwkbv-WxuJTR6YD9bsKpWrTXnO34tRHvMtMrww&s=10" alt="Microsoft" className="w-24 md:w-32 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGkuZrQ-mxsZZhCy8a7oyLz3L9j7QlwM_cSaVtS3v4Rw&s=10" alt="Hello Tractor" className="w-24 md:w-32 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
                  <img src="https://www.candoo.ai/src/images/brands/Google.png" alt="Google For Startups" className="w-24 md:w-32 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
                  <img src="https://www.shortlist.net/Shortlist_logo_blue_large.png" alt="Shortlist" className="w-24 md:w-32 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmNwgMujRyPngPI5u-jamROxO8Q-yEm48rbV5da-akpw&s=10" alt="Catalyst" className="w-24 md:w-32 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalVvOozcA7W406K3HC6qiamO5Uu6KZ6HM96Kq5qUSJQ&s=10" alt="Ikigai" className="w-24 md:w-32 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* The Brutalist Success Modal */}
      {isSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1F2420]/80 backdrop-blur-sm p-4 md:p-6 animate-in fade-in duration-300">
          <div className="bg-[#FDFBF7] border-4 border-[#1F2420] shadow-[8px_8px_0px_0px_#F49B36] p-8 md:p-10 max-w-lg w-full flex flex-col items-center text-center">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#1F2420] mb-4 uppercase">Success</h3>
            <p className="text-[#1F2420] text-base md:text-lg font-medium mb-8">
              Your request is secured. Our team will contact you shortly.
            </p>
            <div className="flex items-center gap-3 text-xs md:text-sm font-bold text-gray-500 tracking-widest uppercase">
              <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Redirecting to home...
            </div>
          </div>
        </div>
      )}
    </>
  );
}