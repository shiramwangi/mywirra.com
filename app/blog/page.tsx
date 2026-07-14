import React from "react";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog-data";
import NewsletterCanvas from "@/components/NewsLetterCanvas";

export default function BlogIndexPage() {
  const posts = Object.values(BLOG_POSTS);
  const featuredPost = posts[0];
  const latestPosts = posts.slice(1);

  return (
    <div className="w-full min-h-screen bg-[#FDFBF7] selection:bg-[#F49B36] selection:text-[#1F2420] pb-12">
      
      {/* Canvas 1: Featured Article (Light Gray) */}
      <section className="w-[calc(100%-1.5rem)] md:w-[calc(100%-2.5rem)] max-w-[1600px] mx-auto bg-[#EAECE6] text-[#1F2420] rounded-none mt-28 mb-0 pt-24 pb-32 px-6 md:px-12 lg:px-20 border-x-2 border-[#1F2420]/10">
        <div className="max-w-[1200px] mx-auto">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
            <h1 className="text-6xl md:text-7xl font-medium tracking-tighter leading-[1.1]">
              The Chronicles <br /> <span className="italic font-light">of Hiring.</span>
            </h1>
            <div className="flex-1 flex flex-col items-end">
              <div className="w-full h-[2px] bg-[#1F2420] mb-4"></div>
              <div className="flex gap-4 font-bold text-sm tracking-widest uppercase">
                <span className="text-[#1F2420]">Browse Articles:</span>
                <span className="border border-[#1F2420] rounded-full px-3 py-1">All</span>
                <span className="text-[#1F2420]/60 hover:text-[#1F2420] cursor-pointer">Insight</span>
                <span className="text-[#1F2420]/60 hover:text-[#1F2420] cursor-pointer">News</span>
              </div>
            </div>
          </div>

          {/* Featured Article Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <Link href={`/blog/${featuredPost.slug}`} className="block w-full aspect-video lg:aspect-square overflow-hidden group">
              <img src={featuredPost.imageUrl} alt={featuredPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </Link>
            <div className="flex flex-col justify-center">
              <span className="font-bold tracking-widest uppercase mb-4 text-sm">{featuredPost.category}</span>
              <Link href={`/blog/${featuredPost.slug}`}>
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] mb-12 hover:text-[#F49B36] transition-colors">
                  {featuredPost.title}
                </h2>
              </Link>
              <Link href={`/blog/${featuredPost.slug}`} className="font-bold border-b-2 border-[#1F2420] self-start pb-1 hover:text-[#F49B36] hover:border-[#F49B36] transition-colors">
                Read more
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Canvas 2: Latest Articles (White) */}
      <section className="w-[calc(100%-1.5rem)] md:w-[calc(100%-2.5rem)] max-w-[1600px] mx-auto bg-[#FDFBF7] text-[#1F2420] rounded-none mt-0 py-24 px-6 md:px-12 lg:px-20 border-x-2 border-b-2 border-[#1F2420]/10 shadow-xl">
        <div className="max-w-[1200px] mx-auto">
          
          <div className="flex items-center gap-12 mb-16">
            <h2 className="text-4xl font-medium tracking-tight">Latest</h2>
            <div className="flex-1 h-[2px] bg-[#1F2420]/20"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16">
            {latestPosts.map((post) => (
              <div key={post.slug} className="flex flex-col sm:flex-row gap-6 lg:gap-8 group">
                <Link href={`/blog/${post.slug}`} className="w-full sm:w-1/2 aspect-video overflow-hidden flex-shrink-0">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </Link>
                <div className="flex flex-col justify-start">
                  <span className="font-bold text-sm mb-2">{post.category}</span>
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl md:text-2xl font-medium tracking-tight leading-snug mb-6 group-hover:text-[#F49B36] transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <Link href={`/blog/${post.slug}`} className="font-bold text-sm border-b-2 border-[#1F2420] self-start pb-1 group-hover:text-[#F49B36] group-hover:border-[#F49B36] transition-colors">
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <NewsletterCanvas />
    </div>
  );
}