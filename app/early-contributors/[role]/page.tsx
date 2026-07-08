"use client";

import { use, useState } from "react";
import Link from "next/link";
import { joinWaitlist } from "@/app/actions/waitlist";
import { Music2 } from "lucide-react";

interface WaitlistProps {
  params: Promise<{ role: string }>;
}

export default function WaitlistPage({ params }: WaitlistProps) {
  const resolvedParams = use(params);
  const role = resolvedParams.role;
  const isRecruiter = role === "recruiter";

  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<"idle" | "processing" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "processing") return;
    if (isRecruiter && !company) return;

    setStatus("processing");
    const result = await joinWaitlist(email, role, company);
    
    if (result.success) {
      setStatus("success");
    } else {
      setStatus("idle");
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="min-h-screen w-full bg-[#FDFBF7] flex flex-col items-center justify-center px-6 relative z-[100]">
      
      {/* Absolute Top: Minimalist Logo Frame */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2">
        <Link href="/" className="outline-none">
          <span className="text-3xl font-thin tracking-tight text-[#1F2420]">Wirra</span>
          <span className="text-3xl text-[#ffa066]">.</span>
        </Link>
      </div>

      {/* Center Frame: The Minimalist Form */}
      <div className="max-w-2xl w-full flex flex-col items-center text-center">
        <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-tighter text-[#1F2420] mb-12 capitalize">
          Join the {isRecruiter ? "Recruiter" : "Candidate"} Waitlist.
        </h1>

        {status === "success" ? (
          <div className="text-[#292C26] px-8 py-6 font-medium text-lg">
            You are on the list. We will be in touch shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-6">
            
            {/* Minimalist Input: Email */}
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full bg-transparent text-center text-lg text-[#1F2420] py-3 outline-none border-b border-gray-300 focus:border-[#ffa066] transition-colors placeholder:text-gray-400"
            />
            
            {/* Minimalist Input: Company (Conditional) */}
            {isRecruiter && (
              <input
                type="text"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company Name"
                className="w-full bg-transparent text-center text-lg text-[#1F2420] py-3 outline-none border-b border-gray-300 focus:border-[#ffa066] transition-colors placeholder:text-gray-400"
              />
            )}

            {/* Custom 3-State Button Physics */}
            <button
              type="submit"
              disabled={status === "processing"}
              className="w-full inline-flex items-center justify-center px-8 py-4 bg-[#1F2420] text-white border border-[#1F2420] rounded-full text-lg font-medium tracking-tight transition-all duration-300 hover:bg-transparent hover:text-[#1F2420] active:bg-[#ffa066] active:border-[#ffa066] active:text-white disabled:opacity-50 disabled:pointer-events-none mt-2 outline-none"
            >
              {status === "processing" ? "Processing..." : "Get Notified"}
            </button>
            
            {/* Disclaimer */}
            <p className="text-xs text-gray-500 mt-4 max-w-sm text-center mx-auto leading-relaxed">
              By clicking Get Notified you acknowledge that you have read and agree to the Terms of Service.
            </p>
          </form>
        )}
      </div>

      {/* Absolute Bottom: Social Footer */}
      <footer className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center gap-6 sm:gap-10 text-sm font-medium text-gray-500 w-full px-4">
        <a 
          href="https://linkedin.com/company/wirra" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 hover:text-[#1F2420] transition-colors outline-none focus-visible:text-[#ffa066]"
        >
          <LinkedinIcon className="w-5 h-5" />
          <span className="hidden sm:inline">LinkedIn</span>
        </a>
        <a 
          href="https://wirra.co" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 hover:text-[#1F2420] transition-colors outline-none focus-visible:text-[#ffa066]"
        >
          <InstagramIcon className="w-5 h-5" />
          <span className="hidden sm:inline">Instagram</span>
        </a>
        <a 
          href="https://wirra.space" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 hover:text-[#1F2420] transition-colors outline-none focus-visible:text-[#ffa066]"
        >
          <TwitterIcon className="w-5 h-5" />
          <span className="hidden sm:inline">Twitter</span>
        </a>
        <a 
          href="https://wirra.co" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 hover:text-[#1F2420] transition-colors outline-none focus-visible:text-[#ffa066]"
        >
          <Music2 className="w-5 h-5" />
          <span className="hidden sm:inline">TikTok</span>
        </a>
      </footer>

    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* NATIVE SVG COMPONENTS (Replacing Deprecated Lucide Brand Icons)            */
/* -------------------------------------------------------------------------- */

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);