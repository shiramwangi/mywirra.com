"use client";

import { useState } from "react";
// Adjust this import path based on your project structure
import { subscribeToNewsletter } from "@/app/actions/newsletter";

export default function NewsletterCanvas() {
  const [isPending, setIsPending] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });

  async function handleSubscribe(formData: FormData) {
    setIsPending(true);
    setStatus({ type: null, message: "" });

    const response = await subscribeToNewsletter(formData);

    if (response?.success) {
      setStatus({ type: "success", message: "Successfully subscribed! Welcome aboard." });
    } else {
      setStatus({ type: "error", message: response?.error || "Something went wrong." });
    }
    
    setIsPending(false);
  }

  return (
    <section className="relative w-[calc(100%-1.5rem)] md:w-[calc(100%-2.5rem)] max-w-[1600px] mx-auto bg-[#2a2a2a] text-[#FDFBF7] rounded-none overflow-hidden py-20 lg:py-32 px-6 md:px-12 lg:px-20 mb-12 shadow-2xl mt-0">
      
      {/* Background Graphic Watermark */}
      <img 
        src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/64890a00bed2d0bbb612092f_graphic-10.png" 
        alt="" 
        className="absolute bottom-0 right-0 w-[80vw] lg:w-[50vw] max-w-[800px] opacity-[0.05] mix-blend-screen pointer-events-none translate-x-1/4 translate-y-1/4" 
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content & Form */}
        <div className="flex flex-col items-start max-w-xl">
          <h2 className="text-6xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tighter leading-[1] mb-8">
            Curated Insight <br /> and Resources.
          </h2>
          
          <h3 className="text-xl md:text-2xl font-bold leading-snug mb-8">
            Monthly Newsletter, <br /> Spam Free.
          </h3>

          <hr className="w-full border-t-[3px] border-[#FDFBF7]/20 mb-8" />

          {status.type === "success" ? (
            <div className="bg-[#F49B36] text-[#1F2420] px-6 py-4 rounded-lg font-bold">
              {status.message}
            </div>
          ) : (
            <form action={handleSubscribe} className="w-full flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <input 
                  type="email" 
                  name="email"
                  placeholder="email@website.com" 
                  required
                  className="flex-1 bg-[#FDFBF7] text-[#1F2420] px-6 py-4 rounded-full border-2 border-transparent focus:border-[#F49B36] outline-none placeholder:text-gray-500 font-medium transition-colors shadow-sm"
                />
                <button 
                  type="submit" 
                  disabled={isPending}
                  className="px-10 py-4 bg-[#F49B36] text-[#1F2420] font-semibold text-lg rounded-full border-2 border-[#F49B36] hover:bg-transparent hover:text-[#F49B36] active:bg-white active:border-white active:text-[#1F2420] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-sm"
                >
                  {isPending ? "Subscribing..." : "Subscribe"}
                </button>
              </div>

              <div className="flex items-center gap-3">
                <input 
                  type="checkbox" 
                  id="terms" 
                  name="terms" 
                  required 
                  className="w-5 h-5 accent-[#F49B36] cursor-pointer"
                />
                <label htmlFor="terms" className="text-sm font-medium cursor-pointer text-[#FDFBF7]/80">
                  I agree to the <a href="#" className="text-[#FDFBF7] underline hover:text-[#F49B36] transition-colors">Terms & Conditions</a>
                </label>
              </div>

              {status.type === "error" && (
                <p className="text-red-200 font-medium text-sm bg-red-900/50 p-3 rounded-md border border-red-500/30">{status.message}</p>
              )}
            </form>
          )}
        </div>

      </div>
    </section>
  );
}