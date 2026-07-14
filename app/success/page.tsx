import React from "react";
import Link from "next/link";
import NewsletterCanvas from "@/components/NewsLetterCanvas";

export default function CustomerSuccessPage() {
  return (
    <div className="w-full min-h-screen bg-[#FDFBF7] selection:bg-[#F49B36] selection:text-[#1F2420] pb-12">
      
      {/* Canvas 1: Banner Header (White) */}
      <section className="w-[calc(100%-1.5rem)] md:w-[calc(100%-2.5rem)] max-w-[1600px] mx-auto bg-[#FDFBF7] text-[#1F2420] rounded-none mt-28 mb-0 pt-12 pb-16 px-6 md:px-12 lg:px-20 border-x-2 border-t-2 border-[#1F2420]/10 shadow-sm">
        <div className="max-w-[1200px] mx-auto">
          <span className="inline-block text-sm font-bold tracking-widest text-[#1F2420]/60 uppercase mb-6">
            Customer Successes
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.1] max-w-4xl">
            Wirra accelerates talent acquisition and optimizes hiring teams for success.
          </h1>
        </div>
      </section>

      {/* Canvas 2: Featured Story (Brand Orange) */}
      <section className="w-[calc(100%-1.5rem)] md:w-[calc(100%-2.5rem)] max-w-[1600px] mx-auto bg-[#F49B36] text-[#1F2420] rounded-none mt-0 mb-0 py-24 px-6 md:px-12 lg:px-20 shadow-xl relative overflow-hidden z-10">
        
        {/* Subtle Background Watermark */}
        <img 
          src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/64890a00ea4cadddb8c93957_graphic-07.png" 
          alt="" 
          className="absolute top-0 right-0 w-[120%] lg:w-[80%] max-w-[1000px] opacity-[0.05] mix-blend-multiply pointer-events-none z-0 object-contain translate-x-1/4 -translate-y-1/4" 
        />

        <div className="max-w-[1200px] mx-auto relative z-10">
          
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">
            Featured Story
          </h2>
          <div className="w-full h-[2px] bg-[#1F2420]/20 mb-16"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <div className="flex flex-col items-start">
              <img 
                src="https://cdn.prod.website-files.com/6489090bd5636759fdc111c3/64a62f161c888e32ab499b9a_brand-logo-shipbase.svg" 
                alt="Shipbase Logo" 
                className="h-10 mb-10 object-contain invert"
              />
              <p className="text-2xl md:text-3xl font-medium leading-snug tracking-tight text-[#1F2420] mb-12">
                &quot;We&apos;ve done more than just streamline our hiring. We&apos;ve connected with extraordinary individuals, who have taken us to new, exciting places.&quot;
              </p>
              <Link 
                href="#" 
                className="inline-flex items-center justify-center px-10 py-4 bg-[#1F2420] text-[#FDFBF7] rounded-full text-lg font-bold transition-all duration-300 hover:bg-transparent hover:text-[#1F2420] border-[3px] border-[#1F2420]"
              >
                Read Story
              </Link>
            </div>

            <div className="w-full aspect-[4/3] overflow-hidden border-[3px] border-[#1F2420] shadow-[12px_12px_0px_0px_#1F2420] bg-[#2a2a2a]">
              <img 
                src="https://cdn.prod.website-files.com/6489090bd5636759fdc111c3/64a62f4324111bab22a237a2_photo-landscape-03.jpg" 
                alt="Featured Success Story" 
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Canvas 3: Demo & Real Results (Light Gray) */}
      <section className="w-[calc(100%-1.5rem)] md:w-[calc(100%-2.5rem)] max-w-[1600px] mx-auto bg-[#FDFBF7] text-[#1F2420] rounded-none mt-0 mb-0 py-24 px-6 md:px-12 lg:px-20 border-x-2 border-t-2 border-[#1F2420]/10">
        <div className="max-w-[1200px] mx-auto">
          
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-16">
            Success Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Shipbase Story */}
            <div className="flex flex-col items-start group">
              <div className="w-full aspect-[3/2] mb-8 overflow-hidden bg-[#EAECE6]">
                <img 
                  src="https://cdn.prod.website-files.com/6489090bd5636759fdc111c3/64a62f0c2958e73937c1ccf2_photo-landscape-01-p-1080.jpg" 
                  alt="Shipbase Team Collaboration" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <img 
                src="https://cdn.prod.website-files.com/6489090bd5636759fdc111c3/64a62f161c888e32ab499b9a_brand-logo-shipbase.svg" 
                alt="Shipbase Logo" 
                className="h-6 mb-6 object-contain"
              />
              <p className="text-xl font-medium leading-relaxed text-[#1F2420] mb-6">
                “We started using Wirra when we needed top talent in a pinch – now we use it for all our hiring purposes.”
              </p>
              <Link href="#" className="font-bold text-sm border-b-2 border-[#1F2420] pb-1 hover:text-[#F49B36] hover:border-[#F49B36] transition-colors">
                Read story
              </Link>
            </div>

            {/* Able.to Story */}
            <div className="flex flex-col items-start group">
              <div className="w-full aspect-[3/2] mb-8 overflow-hidden bg-[#EAECE6]">
                <img 
                  src="https://cdn.prod.website-files.com/6489090bd5636759fdc111c3/64a614780b18f841db98e76e_photo-landscape-02-p-1080.jpg" 
                  alt="Able.to Team Discussion" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <img 
                src="https://cdn.prod.website-files.com/6489090bd5636759fdc111c3/64a62e6f36e8f756c95138e0_brand-logo-ableto.svg" 
                alt="Able.to Logo" 
                className="h-5 mb-6 object-contain"
              />
              <p className="text-xl font-medium leading-relaxed text-[#1F2420] mb-6">
                “We not only streamlined our talent acquisition process but also connected with candidates that helped propel our company to new heights.”
              </p>
              <Link href="#" className="font-bold text-sm border-b-2 border-[#1F2420] pb-1 hover:text-[#F49B36] hover:border-[#F49B36] transition-colors">
                Read story
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Canvas 4: Demo & Real Results (Light Gray) */}
      <section className="w-[calc(100%-1.5rem)] md:w-[calc(100%-2.5rem)] max-w-[1600px] mx-auto bg-[#EAECE6] text-[#1F2420] rounded-none mt-0 mb-0 py-24 md:py-32 px-6 md:px-12 lg:px-20 border-x-2 border-b-2 border-[#1F2420]/10 shadow-sm relative z-0">
        <div className="max-w-[1200px] mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Call to Action */}
            <div className="md:col-span-4 flex flex-col items-start">
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] mb-10">
                Schedule a <br /> Product Demo.
              </h2>
              <Link 
                href="/demo/recruiter" 
                className="inline-flex items-center justify-center px-10 py-4 bg-[#1F2420] text-[#FDFBF7] rounded-full text-lg font-bold transition-all duration-300 hover:bg-[#FDFBF7] hover:text-[#1F2420] border-[2px] border-[#1F2420]"
              >
                Book now
              </Link>
            </div>

            {/* Middle: Portrait Image (Matched to Reference Style) */}
            <div className="md:col-span-4 flex justify-center">
              <div className="w-full max-w-[320px] aspect-[3/4] overflow-hidden border border-[#1F2420] shadow-[8px_8px_0px_0px_#1F2420] bg-[#2a2a2a]">
                <img 
                  src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/648909ed396ac6e20c7b3aa2_photo-portrait-03-p-500.jpg" 
                  alt="Product Demo Visualization" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Data & Results */}
            <div className="md:col-span-4 flex flex-col items-start">
              <span className="text-sm font-bold tracking-widest text-[#1F2420] mb-4">Real Results</span>
              <div className="w-full h-[2px] bg-[#1F2420]/20 mb-8"></div>
              
              <span className="text-xl tracking-widest uppercase text-[#1F2420]/60 mb-4">
                Able.to
              </span>
              
              <h3 className="text-7xl lg:text-8xl font-light tracking-tighter mb-4 text-[#1F2420]">
                85%
              </h3>
              <p className="text-xl font-bold tracking-tight mb-4">
                Increase in hiring efficiency
              </p>
              <p className="text-[#1F2420]/80 font-medium leading-relaxed">
                When you choose Wirra&apos;s comprehensive talent acquisition platform.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Canvas 4: Footer Hook */}
      <NewsletterCanvas />
      
    </div>
  );
}