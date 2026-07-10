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
      <section className="relative w-[calc(100%-1.5rem)] md:w-[calc(100%-2.5rem)] max-w-[1600px] mx-auto bg-[#FDFBF7] text-[#1F2420] rounded-none overflow-hidden py-20 lg:py-32 px-6 md:px-12 lg:px-20 flex flex-col items-center mb-12 shadow-sm border border-gray-100">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tighter text-center mb-16 lg:mb-24 max-w-4xl">
          Over 50 users and counting.
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-5xl mx-auto text-left">
          <div>
            <div className="text-sm uppercase tracking-widest font-bold mb-4 border-t-2 border-[#1F2420] pt-4">Funding</div>
            <div className="text-5xl font-medium tracking-tighter mb-4">50k</div>
            <p className="text-gray-600 font-medium leading-relaxed">Secured to accelerate product development and scale our AI algorithms.</p>
          </div>
          <div>
            <div className="text-sm uppercase tracking-widest font-bold mb-4 border-t-2 border-[#1F2420] pt-4">Users</div>
            <div className="text-5xl font-medium tracking-tighter mb-4">500+</div>
            <p className="text-gray-600 font-medium leading-relaxed">Using Wirra&apos;s automated screening and scoring systems.</p>
          </div>
          <div>
            <div className="text-sm uppercase tracking-widest font-bold mb-4 border-t-2 border-[#1F2420] pt-4">Funded</div>
            <div className="text-5xl font-medium tracking-tighter mb-4">2x</div>
            <p className="text-gray-600 font-medium leading-relaxed">500 top-tier candidates have been successfully ranked.</p>
          </div>
        </div>

        <a 
          href="https://youtu.be/jvvKHkU_jm8?si=vwOMyuSmcwL-n6Va" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="relative block w-full max-w-5xl mx-auto mt-24 aspect-video rounded-none overflow-hidden group shadow-xl"
        >
          <img 
            src="https://i0.wp.com/allsignsonline.com.au/wp-content/uploads/2019/07/Wall-Prints-1-1.jpg?fit=1000%2C1000&ssl=1" 
            alt="Wirra Introduction" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-[#F49B36] text-[#1F2420] p-6 rounded-full transform transition-transform duration-300 group-hover:scale-110 shadow-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
          </div>
        </a>
      </section>
    </div>
  );
}