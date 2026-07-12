"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Cal, { getCalApi } from "@calcom/embed-react";
import { submitInvestorApplication } from "@/app/actions/investor";

export default function InvestorsPage() {
  const [shares, setShares] = useState<number>(10);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  
  const pricePerShare = 5;
  const totalInvestment = (shares || 0) * pricePerShare;

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", { styles: { branding: { brandColor: "#1F2420" } }, hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    formData.append("amount", totalInvestment.toString());
    formData.append("shares", shares.toString());
    
    // Concatenate First and Last name for the backend action
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    formData.append("fullName", `${firstName} ${lastName}`);

    const result = await submitInvestorApplication(formData);
    
    if (result.success) {
      setIsSuccess(true);
    } else {
      alert("Something went wrong processing your application. Please try again.");
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1F2420] pt-32 pb-24 px-6 md:px-12 lg:px-20 selection:bg-[#F49B36] selection:text-[#1F2420]">
      
      {/* Header Block (Center Aligned) */}
      {/* Glassy Conversion Header */}
<header className="fixed top-0 left-0 w-full z-50 bg-[#FDFBF7]/80 backdrop-blur-md border-b border-[#1F2420]/5 px-6 md:px-12 lg:px-20 py-5 flex items-center gap-8 lg:gap-12 transition-all">

  {/* Poppins Logo */}
  <Link href="/" className="text-3xl tracking-tight flex items-baseline" style={{ fontFamily: "'Poppins', sans-serif" }}>
    <span className="font-normal text-[#1F2420]">wirra</span>
    <span className="font-bold text-[#F49B36]">.</span>
  </Link>

  {/* Back Button */}
  <Link href="/" className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-gray-500 hover:text-[#1F2420] transition-colors mt-1">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
    Back
  </Link>

</header>
      <div className="max-w-4xl mx-auto text-center mb-24 relative">
        <div className="absolute -top-20 left-0">
          <Link href="/" className="text-sm font-bold tracking-widest uppercase hover:opacity-70 transition-opacity flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back
          </Link>
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-normal tracking-tighter leading-[1.05]">
          Join the Investor<br/>Network.
        </h1>
      </div>

      {/* Grid Wrapper */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

        {/* Left Column (Contact & Progress) */}
        <div className="lg:col-span-5 flex flex-col gap-12">
          
          {/* Contact Image */}
          <img 
            src="https://framerusercontent.com/images/HOANH1dM2TkgSOGkwaqpJbFtFc.jpg?scale-down-to=1024" 
            alt="Wirra Headquarters" 
            className="w-full aspect-[4/5] object-cover rounded-sm mb-4"
          />

          {/* Contact Blocks */}
          <div>
            <h4 className="text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-2">Email Address</h4>
            <p className="text-lg font-medium">investor@mywirra.com</p>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-2">Phone</h4>
            <p className="text-lg font-medium leading-relaxed">
              +254 711 131376 (KE)<br/>
              +27 800 982 133 (SA)
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-2">Address</h4>
            <p className="text-lg font-medium leading-relaxed">
              The Address Building,<br/>
              Muthangari Dr, Westlands<br/>
              Nairobi, 00100<br/>
              Kenya
            </p>
          </div>

          {/* Progress/Trust Tracker */}
          <div className="mt-8 pt-8 border-t border-[#1F2420]/10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm font-semibold tracking-wide uppercase text-gray-500">Live Allocation</span>
            </div>
            <p className="text-2xl font-medium tracking-tight">
              Wirra has raised $764 of our $5,000 community goal.
            </p>
          </div>

        </div>

        {/* Right Column (The Form OR Cal.com) */}
        <div className="lg:col-span-7 pt-4">
          
          {!isSuccess ? (
            /* The Form */
            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              
              {/* Name Fields (Side-by-side) */}
              <div className="flex flex-col md:flex-row gap-10">
                <div className="w-full">
                  <label htmlFor="firstName" className="sr-only">First Name</label>
                  <input 
                    type="text" 
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    required
                    className="w-full bg-transparent border-b border-[#1F2420]/20 pb-4 text-lg font-medium placeholder-gray-400 focus:border-[#F49B36] focus:outline-none transition-colors"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="lastName" className="sr-only">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    className="w-full bg-transparent border-b border-[#1F2420]/20 pb-4 text-lg font-medium placeholder-gray-400 focus:border-[#F49B36] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="sr-only">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full bg-transparent border-b border-[#1F2420]/20 pb-4 text-lg font-medium placeholder-gray-400 focus:border-[#F49B36] focus:outline-none transition-colors"
                />
              </div>

              {/* Country */}
              <div>
                <label htmlFor="country" className="sr-only">Country</label>
                <input 
                  type="text" 
                  id="country"
                  name="country"
                  placeholder="Country of Residence"
                  required
                  className="w-full bg-transparent border-b border-[#1F2420]/20 pb-4 text-lg font-medium placeholder-gray-400 focus:border-[#F49B36] focus:outline-none transition-colors"
                />
              </div>

              {/* Dynamic Share Calculator Field */}
              <div className="flex flex-col gap-2 pt-4">
                <label htmlFor="shares" className="text-[10px] font-bold tracking-widest uppercase text-gray-500">
                  Allocation Volume (Min 10 Shares)
                </label>
                <div className="flex items-end gap-4 border-b border-[#1F2420]/20 pb-4 focus-within:border-[#F49B36] transition-colors">
                  <input 
                    type="number" 
                    id="shares"
                    min="10"
                    value={shares}
                    onChange={(e) => setShares(parseInt(e.target.value))}
                    onBlur={() => setShares(Math.max(10, shares || 10))}
                    className="w-full bg-transparent text-lg font-medium focus:outline-none"
                  />
                  <div className="text-3xl font-normal tracking-tighter shrink-0 text-[#1F2420]">
                    = ${totalInvestment.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="mt-8 px-10 py-5 bg-[#1F2420] hover:bg-black text-white font-semibold text-lg rounded-full transition-colors self-start w-full md:w-auto disabled:opacity-70 disabled:pointer-events-none"
              >
                {isSubmitting ? "Processing..." : "Submit & Schedule"}
              </button>

            </form>
          ) : (
            /* Cal.com Embed */
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden w-full h-[600px] animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Cal 
                calLink="https://cal.com/mywirra-zrh78w/investor-network" 
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                config={{ layout: "month_view" }}
              />
            </div>
          )}

        </div>
      </div>
    </div>
  );
}