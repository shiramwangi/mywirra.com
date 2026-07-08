"use client";

import { useState } from "react";
import Link from "next/link";
import { submitDemoRequest } from '@/app/actions/demo';

export default function DemoPage({ params }: { params: { role: string } }) {
  const isRecruiter = params.role === "recruiters";
  
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
          
          {isSuccess ? (
            <div className="animate-in fade-in duration-700">
              <div className="w-16 h-16 bg-[#0B3D2C] rounded-full flex items-center justify-center mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FDFBF7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h1 className="text-4xl lg:text-5xl font-medium tracking-tighter mb-4">
                Access Granted.
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed">
                Your request has been processed. We have dispatched an email containing your secure link to access the live product at <span className="text-[#F49B36] font-medium">wirra.space</span>.
              </p>
            </div>
          ) : (
            <>
              <h1 className="text-5xl lg:text-7xl tracking-tighter mb-4 leading-[1.05]">
                {isRecruiter ? "Experience the Future of Hiring." : "Unlock Your Career Potential."}
              </h1>
              <p className="text-lg text-gray-400 mb-12">
                Get exclusive beta access to the Wirra platform.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                {isRecruiter ? (
                  /* RECRUITER FORM FIELDS */
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                        <input type="text" id="name" name="name" required className="w-full bg-[#1F2420] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#F49B36] focus:ring-1 focus:ring-[#F49B36] focus:outline-none transition-colors" placeholder="Full Name" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">Company Email</label>
                        <input type="email" id="email" name="email" required className="w-full bg-[#1F2420] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#F49B36] focus:ring-1 focus:ring-[#F49B36] focus:outline-none transition-colors" placeholder="work@company.com" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2 text-gray-300">Company</label>
                        <input type="text" id="company" name="company" required className="w-full bg-[#1F2420] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#F49B36] focus:ring-1 focus:ring-[#F49B36] focus:outline-none transition-colors" placeholder="Organization Name" />
                      </div>
                      <div>
                        <label htmlFor="role" className="block text-sm font-medium mb-2 text-gray-300">Role</label>
                        <input type="text" id="role" name="role" required className="w-full bg-[#1F2420] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#F49B36] focus:ring-1 focus:ring-[#F49B36] focus:outline-none transition-colors" placeholder="e.g. Head of Talent" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="challenges" className="block text-sm font-medium mb-2 text-gray-300">Primary Hiring Challenge</label>
                      <select id="challenges" name="challenges" required className="w-full bg-[#1F2420] border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#F49B36] focus:ring-1 focus:ring-[#F49B36] focus:outline-none transition-colors appearance-none">
                        <option value="" disabled selected>Select a challenge...</option>
                        <option value="sourcing">Candidate Sourcing</option>
                        <option value="screening">Automated Screening</option>
                        <option value="time">Time-to-hire</option>
                        <option value="retention">Employee Retention</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="timeToHire" className="block text-sm font-medium mb-2 text-gray-300">Avg. Time to Hire</label>
                        <select id="timeToHire" name="timeToHire" required className="w-full bg-[#1F2420] border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#F49B36] focus:ring-1 focus:ring-[#F49B36] focus:outline-none transition-colors appearance-none">
                          <option value="" disabled selected>Select...</option>
                          <option value="1-2">1-2 weeks</option>
                          <option value="3-4">3-4 weeks</option>
                          <option value="1+">1+ months</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="aiRole" className="block text-sm font-medium mb-2 text-gray-300">Role of AI</label>
                        <select id="aiRole" name="aiRole" required className="w-full bg-[#1F2420] border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#F49B36] focus:ring-1 focus:ring-[#F49B36] focus:outline-none transition-colors appearance-none">
                          <option value="" disabled selected>Select...</option>
                          <option value="exploring">Exploring</option>
                          <option value="active">Active usage</option>
                          <option value="essential">Essential</option>
                        </select>
                      </div>
                    </div>
                  </>
                ) : (
                  /* CANDIDATE FORM FIELDS */
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                        <input type="text" id="name" name="name" required className="w-full bg-[#1F2420] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#F49B36] focus:ring-1 focus:ring-[#F49B36] focus:outline-none transition-colors" placeholder="Full Name" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">Email Address</label>
                        <input type="email" id="email" name="email" required className="w-full bg-[#1F2420] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#F49B36] focus:ring-1 focus:ring-[#F49B36] focus:outline-none transition-colors" placeholder="you@email.com" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="field" className="block text-sm font-medium mb-2 text-gray-300">Professional Field</label>
                        <input type="text" id="field" name="field" required className="w-full bg-[#1F2420] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#F49B36] focus:ring-1 focus:ring-[#F49B36] focus:outline-none transition-colors" placeholder="e.g. Engineering" />
                      </div>
                      <div>
                        <label htmlFor="industry" className="block text-sm font-medium mb-2 text-gray-300">Industry</label>
                        <input type="text" id="industry" name="industry" required className="w-full bg-[#1F2420] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#F49B36] focus:ring-1 focus:ring-[#F49B36] focus:outline-none transition-colors" placeholder="e.g. SaaS, Fintech" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="level" className="block text-sm font-medium mb-2 text-gray-300">Career Level</label>
                      <select id="level" name="level" required className="w-full bg-[#1F2420] border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#F49B36] focus:ring-1 focus:ring-[#F49B36] focus:outline-none transition-colors appearance-none">
                        <option value="" disabled selected>Select level...</option>
                        <option value="intern">Intern / Student</option>
                        <option value="entry">Entry Level</option>
                        <option value="mid">Mid-Level</option>
                        <option value="senior">Senior</option>
                        <option value="executive">Executive / Leadership</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="goal" className="block text-sm font-medium mb-2 text-gray-300">Current Goal</label>
                      <select id="goal" name="goal" required className="w-full bg-[#1F2420] border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#F49B36] focus:ring-1 focus:ring-[#F49B36] focus:outline-none transition-colors appearance-none">
                        <option value="" disabled selected>Select goal...</option>
                        <option value="job">Actively seeking a job</option>
                        <option value="upskill">Upskilling / Practice</option>
                        <option value="partnerships">Exploring partnerships</option>
                      </select>
                    </div>
                  </>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full mt-6 px-8 py-4 bg-white hover:bg-gray-100 text-[#2a2a2a] font-bold text-lg rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:pointer-events-none"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-[#2a2a2a]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Preparing Demo...
                    </>
                  ) : (
                    "Request Beta Access"
                  )}
                </button>
              </form>
            </>
          )}

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
        </div>
      </div>

    </div>
  );
}