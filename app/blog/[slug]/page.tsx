import React from "react";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/lib/blog-data";
import Link from "next/link";
import NewsletterCanvas from "@/components/NewsLetterCanvas";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS[slug];

  if (!post) return notFound();

  // Simple parser to turn double line breaks into paragraphs
  const paragraphs = post.content.split('\n\n');

  return (
    <div className="w-full min-h-screen bg-[#FDFBF7] selection:bg-[#F49B36] selection:text-[#1F2420] pb-12">
      
      {/* Orange Hero Canvas */}
      <header className="w-[calc(100%-1.5rem)] md:w-[calc(100%-2.5rem)] max-w-[1600px] mx-auto bg-[#F49B36] text-[#1F2420] rounded-none mt-28 mb-0 pt-16 pb-32 px-6 md:px-12 lg:px-20 relative overflow-hidden shadow-xl z-10">
        
        {/* Adjusted Watermark: Better placement and slightly higher opacity to be visible */}
        <img 
          src="https://cdn.prod.website-files.com/6489090bd5636759fdc111b8/64890a00ea4cadddb8c93957_graphic-07.png" 
          alt="" 
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[120%] lg:w-[70%] max-w-[900px] opacity-10 mix-blend-multiply pointer-events-none z-0 object-contain translate-x-1/4" 
        />
        
        {/* Widened container from 1000px to 1200px to allow horizontal stretching */}
        <div className="max-w-[1200px] mx-auto relative z-10">
          <Link href="/blog" className="inline-block font-bold text-sm tracking-widest uppercase mb-8 hover:text-[#FDFBF7] transition-colors border-b-2 border-transparent hover:border-[#FDFBF7] pb-1">
            &larr; Back to Blog
          </Link>
          <span className="block font-bold text-sm tracking-widest uppercase mb-4 text-[#1F2420]/80">{post.category}</span>
          
          {/* Widened max-w and adjusted sizing to force 2 lines instead of stacking deeply */}
          <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-medium tracking-tighter leading-[1.05] mb-10 max-w-[1000px]">
            {post.title}
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
            <p className="text-xl md:text-2xl font-medium leading-relaxed max-w-2xl">
              {post.excerpt}
            </p>
            <div className="w-full md:w-auto border-t-[3px] border-[#1F2420] pt-4 md:border-none md:pt-0 shrink-0">
              <span className="font-bold block md:text-right text-sm md:text-base">Published on <br className="hidden md:block" /> {post.date}</span>
            </div>
          </div>
        </div>
      </header>

      {/* White Content Canvas */}
      <article className="w-[calc(100%-1.5rem)] md:w-[calc(100%-2.5rem)] max-w-[1600px] mx-auto bg-[#FDFBF7] text-[#1F2420] rounded-none mt-0 py-16 md:py-24 px-6 md:px-12 lg:px-20 shadow-xl relative z-0 border-x-2 border-b-2 border-[#EAECE6]">
        
        {/* Overlapping Hero Image: Reduced max-width and strictly capped the height so it doesn't overpower the page */}
        <div className="max-w-[800px] mx-auto w-full aspect-video md:aspect-[21/9] max-h-[350px] md:max-h-[400px] -mt-32 md:-mt-40 mb-16 md:mb-20 relative z-20 shadow-2xl border-[3px] border-[#1F2420] bg-[#2a2a2a] overflow-hidden">
          <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover object-center" />
        </div>

        {/* Article Body: Matches the exact 800px width of the image above it */}
        <div className="max-w-[800px] mx-auto">
          {paragraphs.map((p: string, i: number) => (
            <p key={i} className="text-lg md:text-xl text-[#1F2420]/80 font-medium leading-relaxed mb-8">
              {p}
            </p>
          ))}

          <div className="flex items-center justify-between border-t-2 border-b-2 border-[#1F2420]/10 py-8 mt-16">
            <span className="font-bold uppercase tracking-widest text-sm">Share this article:</span>
            <div className="flex gap-6">
              <span className="font-bold cursor-pointer hover:text-[#F49B36] transition-colors">LinkedIn</span>
              <span className="font-bold cursor-pointer hover:text-[#F49B36] transition-colors">Twitter</span>
            </div>
          </div>
        </div>
      </article>

      <NewsletterCanvas />
    </div>
  );
}