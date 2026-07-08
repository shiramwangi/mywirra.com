import React from "react";

export default function WhoWeArePage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] py-8 px-4 md:px-8 lg:px-12 selection:bg-[#F49B36] selection:text-[#1F2420]">
      
      {/* The Canvas Block */}
      <section className="relative w-full max-w-[1600px] mx-auto bg-[#2a2a2a] text-[#FDFBF7] rounded-xl overflow-hidden shadow-2xl min-h-[650px] lg:min-h-[750px] pt-16 pb-16 lg:pt-24 lg:pb-24 px-8 md:px-16 lg:px-24 flex flex-col">
  
  {/* Background Graphic Watermark */}
  <img 
    src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/64890a00ea4cadddb8c93957_graphic-07.png" 
    alt="" 
    className="absolute top-[-10%] right-[-10%] w-[120%] lg:w-[80%] max-w-[1000px] opacity-[0.04] grayscale mix-blend-screen pointer-events-none z-0 object-contain" 
  />

  {/* The Asymmetrical Grid Layout */}
  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-stretch flex-1">
    
    {/* Left Column (Typography) */}
    <div className="lg:col-span-7 flex flex-col justify-between">
      
      {/* Top Content (Eyebrow & Heading) */}
      <div>
        <span className="inline-block text-sm font-bold tracking-widest uppercase text-[#F49B36] mb-6 relative z-10">
          About Us
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-medium tracking-tighter leading-[1.05] mt-4 relative z-10">
          On a mission to upgrade recruitment.
        </h1>
      </div>

      {/* Bottom Content (Paragraph) */}
      <div className="max-w-md mt-12 lg:mt-0 relative z-10">
        <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed">
          At Wirra, we&apos;re driven by the ambition to revolutionize the recruitment landscape. We understand that in today&apos;s fast-paced, digital-centric world, talent acquisition needs to be more efficient, more precise, and more focused.
        </p>
      </div>
      
    </div>

    {/* Right Column (Image Composition) */}
    <div className="lg:col-span-5 relative flex justify-end items-end h-[400px] sm:h-[500px] lg:h-auto mt-8 lg:mt-0">
      
      {/* Rectangular Image (Base) */}
      <img 
        src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/648909ed67c5fbe590b8d62f_photo-portrait-04.jpg" 
        alt="Wirra Team Member" 
        className="w-2/3 max-w-[320px] h-[90%] object-cover rounded-xl shadow-2xl relative z-10"
      />

      {/* Circular Image (Overlapping) */}
      <img 
        src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/648909edd93afd96334e78e9_photo-square-04.jpg" 
        alt="Wirra Team Collaboration" 
        className="absolute bottom-12 left-0 w-1/2 max-w-[240px] aspect-square object-cover rounded-full shadow-2xl border-4 border-[#2a2a2a] z-20"
      />
      
    </div>

  </div>
</section>
    </div>
  );
}