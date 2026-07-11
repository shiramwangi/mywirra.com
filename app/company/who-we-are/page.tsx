import React from "react";

export default function WhoWeArePage() {
  return (
    <div className="w-full bg-[#FDFBF7] pt-28 selection:bg-[#F49B36] selection:text-[#1F2420]">
      
      {/* Canvas 1: Dark (Hero) */}
      <section className="relative w-[calc(100%-1.5rem)] md:w-[calc(100%-2.5rem)] max-w-[1600px] mx-auto bg-[#2a2a2a] text-[#FDFBF7] rounded-none overflow-hidden min-h-[85vh] lg:min-h-[800px] pt-16 pb-16 lg:pt-24 lg:pb-24 px-6 md:px-12 lg:px-20 flex flex-col justify-center mb-12">
  
        {/* Background Graphic Watermark */}
        <img 
          src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/64890a00ea4cadddb8c93957_graphic-07.png" 
          alt="" 
          className="absolute top-[-10%] right-[-10%] w-[120%] lg:w-[80%] max-w-[1000px] opacity-5 grayscale mix-blend-screen pointer-events-none z-0 object-contain" 
        />

        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-stretch flex-1">
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <span className="inline-block text-sm font-bold tracking-widest uppercase text-[#F49B36] mb-6 relative z-10">
                About Us
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-medium tracking-tighter leading-[1.05] mt-4 relative z-10 w-full">
                On a mission to upgrade <br className="hidden md:block" /><span className="text-[#F49B36]">recruitment.</span>
              </h1>
            </div>

            <div className="max-w-md mt-12 lg:mt-0 relative z-10">
              <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed">
                At Wirra, we&apos;re driven by the ambition to revolutionize the recruitment landscape. We understand that in today&apos;s fast-paced, digital-centric world, talent acquisition needs to be more efficient, more precise, and more focused.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-end items-end h-[400px] sm:h-[500px] lg:h-auto mt-8 lg:mt-0">
            <img 
              src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/648909ed67c5fbe590b8d62f_photo-portrait-04.jpg" 
              alt="Wirra Team Member" 
              className="w-2/3 max-w-[320px] h-[90%] object-cover rounded-none shadow-2xl relative z-10"
            />
            <img 
              src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/648909edd93afd96334e78e9_photo-square-04.jpg" 
              alt="Wirra Team Collaboration" 
              className="absolute bottom-12 left-0 w-1/2 max-w-[240px] aspect-square object-cover rounded-full shadow-2xl border-4 border-[#2a2a2a] z-20"
            />
          </div>
        </div>
      </section>

      {/* Canvas 2: White (Stats & Video) */}
      {/* The White Canvas Block (Flush & Left-Aligned) */}
      <section className="relative w-full bg-[#FDFBF7] text-[#1F2420] py-20 lg:py-32 px-6 md:px-12 lg:px-20 flex flex-col items-start border-none">
        
        <div className="w-full max-w-[1400px] mx-auto flex flex-col items-start">
          
          {/* Header */}
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-normal tracking-tighter leading-[1.05] text-[#1F2420] mb-16 lg:mb-24 w-full">
            Over 50 users and counting.
          </h2>

          {/* The Stats Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 text-left">
            
            {/* Stat 1: Funding */}
            <div className="border-t-[3px] border-[#1F2420] pt-6 flex flex-col">
              <span className="text-lg font-bold text-[#1F2420] mb-4">Funding</span>
              <span className="text-7xl lg:text-[6rem] font-light tracking-tighter text-[#1F2420] leading-none mb-6">50k</span>
              <p className="text-[#1F2420]/80 font-medium leading-relaxed text-lg pr-4">
                Secured to accelerate product development and scale our AI algorithms.
              </p>
            </div>

            {/* Stat 2: Users */}
            <div className="border-t-[3px] border-[#1F2420] pt-6 flex flex-col">
              <span className="text-lg font-bold text-[#1F2420] mb-4">Users</span>
              <span className="text-7xl lg:text-[6rem] font-light tracking-tighter text-[#1F2420] leading-none mb-6">500+</span>
              <p className="text-[#1F2420]/80 font-medium leading-relaxed text-lg pr-4">
                500 top-tier candidates have been successfully ranked.
              </p>
            </div>

            {/* Stat 3: Ranked/Funded */}
            <div className="border-t-[3px] border-[#1F2420] pt-6 flex flex-col">
              <span className="text-lg font-bold text-[#1F2420] mb-4">Funded</span>
              <span className="text-7xl lg:text-[6rem] font-light tracking-tighter text-[#1F2420] leading-none mb-6">2x</span>
              <p className="text-[#1F2420]/80 font-medium leading-relaxed text-lg pr-4">
                Wirra is slowly building the trust of the recruitment industry, with 2x more funding rounds in the pipeline.
              </p>
            </div>

          </div>

          {/* The Video Thumbnail */}
          <a 
            href="https://youtu.be/jvvKHkU_jm8?si=vwOMyuSmcwL-n6Va" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="relative block w-full mt-24 aspect-video rounded-none overflow-hidden group shadow-2xl"
          >
            {/* Base Image */}
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5wobnAm8xdi8A8ikOKzu0dlOl8lVAk_2UtP-zcIs9dA&s=10" 
              alt="Wirra Introduction" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-[#F49B36] text-[#1F2420] p-6 lg:p-8 rounded-full transform transition-transform duration-300 group-hover:scale-110 shadow-lg flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="40" 
                  height="40" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="ml-2"
                >
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
            </div>
          </a>
          
        </div>
      </section>

      {/* The Founder Quote Canvas Block (Split Screen) */}
      <section className="relative w-[calc(100%-1.5rem)] md:w-[calc(100%-2.5rem)] max-w-[1600px] mx-auto rounded-none overflow-hidden shadow-2xl flex flex-col lg:flex-row mt-12">
        
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-[600px] relative">
          <img 
            src="https://images.pexels.com/photos/37830399/pexels-photo-37830399.jpeg" 
            alt="Wirra Team Collaboration" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Orange Content Block */}
        <div className="w-full lg:w-1/2 bg-[#F49B36] p-12 md:p-16 lg:p-24 flex flex-col justify-between relative overflow-hidden">
          
          {/* Background Graphic Watermark */}
          <img 
            src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/64890a00ea4cadddb8c93957_graphic-07.png" 
            alt="" 
            className="absolute top-[-10%] right-[-10%] w-[120%] lg:w-[100%] max-w-[800px] opacity-10 grayscale mix-blend-multiply pointer-events-none z-0 object-contain" 
          />

          <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-snug text-[#1F2420] mb-16 relative z-10">
            &quot;Our vision with Wirra is simple yet profound: to redefine talent acquisition and become an indispensable tool in every recruiter&apos;s arsenal.&quot;
          </h3>
          <span className="text-sm font-bold tracking-widest uppercase text-[#1F2420] mt-auto relative z-10">
            Mwangi Chiira &ndash; Founder
          </span>
        </div>

      </section>

      {/* The Blog Preview Canvas (Flush, Full Width) */}
      {/* The Blog Preview Canvas (Flush, Vertically Compressed) */}
      <section className="relative w-[calc(100%-1.5rem)] md:w-[calc(100%-2.5rem)] max-w-[1600px] mx-auto bg-[#EAECE6] text-[#1F2420] py-16 lg:py-20 px-6 md:px-12 lg:px-20 rounded-none mb-12">
        <div className="max-w-[1400px] mx-auto flex flex-col">
          
          {/* Top Header Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12 lg:mb-16">
            
            {/* Left: Typography */}
            <div className="lg:col-span-6">
              <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-normal tracking-tighter leading-[1]">
                The <br />
                Chronicles <br />
                <em className="italic font-serif tracking-normal text-[#1F2420]">of Hiring.</em>
              </h2>
            </div>

            {/* Right: Divider & Button */}
            <div className="lg:col-span-6 flex flex-col items-end w-full pt-2 md:pt-4">
              <hr className="w-full border-t-[3px] border-[#1F2420] mb-6" />
              <a 
                href="/blog" 
                className="px-8 py-3.5 rounded-full font-semibold text-base lg:text-lg bg-[#1F2420] text-[#FDFBF7] border-2 border-[#1F2420] hover:bg-transparent hover:text-[#1F2420] active:bg-[#F49B36] active:border-[#F49B36] active:text-[#1F2420] transition-all duration-200 shadow-sm"
              >
                Visit Blog
              </a>
            </div>
            
          </div>

          {/* Bottom Blog Cards Area */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Blog Card 1 */}
            <a href="/blog" className="flex flex-col group cursor-pointer">
              {/* Changed aspect-[3/2] to aspect-[16/9] to reduce vertical height */}
              <div className="w-full aspect-[16/9] overflow-hidden rounded-none mb-4">
                <img 
                  src="https://cdn.prod.website-files.com/6489090bd5636759fdc111c3/64a61f3a39b7be36f17eeb58_photo-blog-04-p-500.jpg" 
                  alt="Man holding water bottle" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <span className="text-xs lg:text-sm font-bold tracking-widest text-gray-500 uppercase mb-3">Insight</span>
              <h3 className="text-2xl lg:text-3xl font-medium tracking-tight leading-snug group-hover:text-[#F49B36] transition-colors duration-300 mb-4 max-w-lg">
                How Hybrid and Remote Recruiting Are Disrupting Traditional HR
              </h3>
              <span className="text-sm font-bold border-b-2 border-[#1F2420] self-start pb-1">Read more</span>
            </a>

            {/* Blog Card 2 */}
            <a href="/blog" className="flex flex-col group cursor-pointer">
              <div className="w-full aspect-[16/9] overflow-hidden rounded-none mb-4">
                <img 
                  src="https://cdn.prod.website-files.com/6489090bd5636759fdc111c3/64a61f040b18f841dba3ceab_photo-blog-03-p-500.jpg" 
                  alt="Team meeting" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <span className="text-xs lg:text-sm font-bold tracking-widest text-gray-500 uppercase mb-3">News</span>
              <h3 className="text-2xl lg:text-3xl font-medium tracking-tight leading-snug group-hover:text-[#F49B36] transition-colors duration-300 mb-4 max-w-lg">
                Charting New Terrain: The Paradigm Shift in Hybrid Recruitment
              </h3>
              <span className="text-sm font-bold border-b-2 border-[#1F2420] self-start pb-1">Read more</span>
            </a>

          </div>

        </div>
      </section>
    </div>
  );
}