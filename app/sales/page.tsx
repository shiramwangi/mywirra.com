"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function SalesPage() {
  const [isPending, setIsPending] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });

  async function handleSubmit(formData: FormData) {
    setIsPending(true);
    
    // Simulate server action delay for visual feedback
    setTimeout(() => {
      setStatus({ 
        type: "success", 
        message: "Your request has been securely routed to our Enterprise team. You can schedule your consultation below." 
      });
      setIsPending(false);
    }, 1500);
  }

  return (
    <div className="w-full min-h-screen bg-[#FDFBF7] selection:bg-[#F49B36] selection:text-[#1F2420]">
      
      {/* Top Section: Dark Gray Contact Header */}
      <section className="w-[calc(100%-1.5rem)] md:w-[calc(100%-2.5rem)] max-w-[1600px] mx-auto bg-[#2a2a2a] text-[#FDFBF7] pt-32 pb-0 px-6 md:px-12 lg:px-20 relative overflow-hidden mb-0">
        
        {/* Background Graphic Watermark */}
        <img 
          src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/64890a00ea4cadddb8c93957_graphic-07.png" 
          alt="" 
          className="absolute top-0 right-0 w-[80%] max-w-[800px] opacity-[0.03] grayscale mix-blend-screen pointer-events-none z-0 object-contain" 
        />

        {/* Inner container handles the padding so backgrounds sit flush */}
        <div className="max-w-[1400px] mx-auto relative z-10 pb-16">
          <span className="inline-block text-sm font-bold tracking-widest uppercase text-[#F49B36] mb-6">
            Sales
          </span>
          <h1 className="text-6xl md:text-7xl lg:text-[6.5rem] font-medium tracking-tighter leading-[1] mb-24 max-w-4xl">
            Let&apos;s build the future of hiring.
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 border-t-[2px] border-[#FDFBF7]/20">
            
            <div className="flex flex-col">
              <span className="text-xl font-bold mb-6">In Person</span>
              <p className="text-[#FDFBF7]/80 font-medium text-lg leading-relaxed">
                The Address Building,<br />
                Muthangari Dr, Westlands<br />
                Nairobi, 00100<br />
                Kenya
              </p>
            </div>

            <div className="flex flex-col">
              <span className="text-xl font-bold mb-6">Online</span>
              <a href="mailto:hello@mywirra.com" className="text-[#FDFBF7]/80 font-medium text-lg mb-2 hover:text-[#F49B36] transition-colors">hello@mywirra.com</a>
              <a href="tel:+254711131376" className="text-[#FDFBF7]/80 font-medium text-lg mb-2 hover:text-[#F49B36] transition-colors">+254 711 131 376 (KE)</a>
              <a href="tel:+27800982133" className="text-[#FDFBF7]/80 font-medium text-lg hover:text-[#F49B36] transition-colors">+27 800 982 133 (SA)</a>
            </div>

            <div className="flex flex-col">
              <span className="text-xl font-bold mb-6">Social Media</span>
              <a href="#" className="text-[#FDFBF7]/80 font-medium text-lg mb-2 hover:text-[#F49B36] transition-colors">LinkedIn</a>
              <a href="#" className="text-[#FDFBF7]/80 font-medium text-lg mb-2 hover:text-[#F49B36] transition-colors">Twitter</a>
              <a href="#" className="text-[#FDFBF7]/80 font-medium text-lg hover:text-[#F49B36] transition-colors">Instagram</a>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom Section: Orange Form Canvas */}
      <section className="w-[calc(100%-1.5rem)] md:w-[calc(100%-2.5rem)] max-w-[1600px] mx-auto bg-[#F49B36] text-[#1F2420] py-24 px-6 md:px-12 lg:px-20 mt-0">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Text & Image */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight leading-snug max-w-sm">
              We endeavour to respond within 2 business days.
            </h2>
            <img 
              src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/648909ed67c5fbe590b8d62f_photo-portrait-04.jpg" 
              alt="Wirra Team Member" 
              className="w-3/4 max-w-[320px] aspect-[3/4] object-cover rounded-none shadow-2xl mt-12 select-none pointer-events-none"
            />
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 pt-4">
            {status.type === "success" ? (
              <div className="bg-[#1F2420] text-[#FDFBF7] p-10 shadow-xl flex flex-col items-start border-l-[6px] border-[#FDFBF7] animate-in fade-in duration-500">
                <h3 className="text-3xl font-medium mb-4">Request Successful</h3>
                <p className="text-lg text-[#FDFBF7]/80 mb-8">{status.message}</p>
                <a 
                  href="https://cal.com/mywirra-zrh78w/investor-network" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#FDFBF7] text-[#1F2420] font-bold rounded-full hover:bg-transparent hover:text-[#FDFBF7] border-2 border-[#FDFBF7] transition-all"
                >
                  Schedule Call Now &rarr;
                </a>
              </div>
            ) : (
              <form action={handleSubmit} className="flex flex-col gap-12">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="flex flex-col relative group">
                    <input type="text" name="firstName" required className="w-full bg-transparent border-b-2 border-[#1F2420] py-3 text-xl font-medium outline-none focus:border-[#FDFBF7] transition-colors peer placeholder-transparent" placeholder="First Name" />
                    <label className="absolute left-0 top-3 text-[#1F2420]/70 text-lg font-bold transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#FDFBF7] peer-valid:-top-6 peer-valid:text-sm pointer-events-none">First Name *</label>
                  </div>
                  <div className="flex flex-col relative group">
                    <input type="text" name="lastName" required className="w-full bg-transparent border-b-2 border-[#1F2420] py-3 text-xl font-medium outline-none focus:border-[#FDFBF7] transition-colors peer placeholder-transparent" placeholder="Last Name" />
                    <label className="absolute left-0 top-3 text-[#1F2420]/70 text-lg font-bold transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#FDFBF7] peer-valid:-top-6 peer-valid:text-sm pointer-events-none">Last Name *</label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="flex flex-col relative group">
                    <input type="email" name="email" required className="w-full bg-transparent border-b-2 border-[#1F2420] py-3 text-xl font-medium outline-none focus:border-[#FDFBF7] transition-colors peer placeholder-transparent" placeholder="Company Email" />
                    <label className="absolute left-0 top-3 text-[#1F2420]/70 text-lg font-bold transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#FDFBF7] peer-valid:-top-6 peer-valid:text-sm pointer-events-none">Company Email *</label>
                  </div>
                  <div className="flex flex-col relative group">
                    <input type="tel" name="phone" required className="w-full bg-transparent border-b-2 border-[#1F2420] py-3 text-xl font-medium outline-none focus:border-[#FDFBF7] transition-colors peer placeholder-transparent" placeholder="Contact Number" />
                    <label className="absolute left-0 top-3 text-[#1F2420]/70 text-lg font-bold transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#FDFBF7] peer-valid:-top-6 peer-valid:text-sm pointer-events-none">Phone Number *</label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="flex flex-col relative group">
                    <input type="text" name="company" required className="w-full bg-transparent border-b-2 border-[#1F2420] py-3 text-xl font-medium outline-none focus:border-[#FDFBF7] transition-colors peer placeholder-transparent" placeholder="Company Name" />
                    <label className="absolute left-0 top-3 text-[#1F2420]/70 text-lg font-bold transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#FDFBF7] peer-valid:-top-6 peer-valid:text-sm pointer-events-none">Company Name *</label>
                  </div>
                  <div className="flex flex-col relative group">
                    <input type="text" name="website" required className="w-full bg-transparent border-b-2 border-[#1F2420] py-3 text-xl font-medium outline-none focus:border-[#FDFBF7] transition-colors peer placeholder-transparent" placeholder="Website" />
                    <label className="absolute left-0 top-3 text-[#1F2420]/70 text-lg font-bold transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#FDFBF7] peer-valid:-top-6 peer-valid:text-sm pointer-events-none">Website URL *</label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="flex flex-col relative group">
                    <input type="text" name="role" required className="w-full bg-transparent border-b-2 border-[#1F2420] py-3 text-xl font-medium outline-none focus:border-[#FDFBF7] transition-colors peer placeholder-transparent" placeholder="Job Role" />
                    <label className="absolute left-0 top-3 text-[#1F2420]/70 text-lg font-bold transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#FDFBF7] peer-valid:-top-6 peer-valid:text-sm pointer-events-none">Job Role *</label>
                  </div>
                  <div className="flex flex-col relative group">
                    <input type="text" name="country" required className="w-full bg-transparent border-b-2 border-[#1F2420] py-3 text-xl font-medium outline-none focus:border-[#FDFBF7] transition-colors peer placeholder-transparent" placeholder="Country" />
                    <label className="absolute left-0 top-3 text-[#1F2420]/70 text-lg font-bold transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#FDFBF7] peer-valid:-top-6 peer-valid:text-sm pointer-events-none">Country *</label>
                  </div>
                </div>

                {status.type === "error" && (
                  <div className="bg-[#1F2420] text-red-400 p-4 font-bold border-l-[4px] border-red-500 shadow-md">
                    {status.message}
                  </div>
                )}

                <div className="mt-8">
                  <button 
                    type="submit" 
                    disabled={isPending}
                    className="px-12 py-5 bg-[#1F2420] text-[#FDFBF7] font-semibold text-xl rounded-full border-2 border-[#1F2420] hover:bg-transparent hover:text-[#1F2420] active:bg-[#FDFBF7] active:border-[#FDFBF7] active:text-[#1F2420] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl w-full md:w-auto"
                  >
                    {isPending ? "Submitting Request..." : "Submit Request"}
                  </button>
                </div>

              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}