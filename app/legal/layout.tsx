"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks = [
    { name: "Corporate Overview", path: "/legal" },
    { name: "Privacy Policy", path: "/legal/privacy" },
    { name: "Terms & Conditions", path: "/legal/terms" },
    { name: "EEO Policy", path: "/legal/eeo" },
    { name: "Integrity Policy", path: "/legal/integrity" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase();
    if (query.includes("term") || query.includes("condition")) router.push("/legal/terms");
    else if (query.includes("eeo") || query.includes("equal")) router.push("/legal/eeo");
    else if (query.includes("integr")) router.push("/legal/integrity");
    else if (query.includes("corp") || query.includes("over") || query.includes("about") || query.includes("wirra")) router.push("/legal");
    else router.push("/legal/privacy");
  };

  return (
    <div className="flex min-h-screen bg-[#FDFBF7] text-[#1F2420] selection:bg-[#F49B36]">
      
      {/* Custom Isolated Side Header / Navigation */}
      <aside className="fixed top-0 left-0 h-screen w-[320px] border-r-[2px] border-[#1F2420]/10 bg-[#FDFBF7] p-10 flex flex-col z-50 overflow-y-auto">
        
        {/* Updated Wirra Branding: Poppins, lowercase, thin, orange dot */}
        <Link href="/" className="mb-16 flex items-baseline">
         <span className="font-medium text-[#1F2420]">wirra</span>
          <span className="font-bold text-[#F49B36]">.</span>
        </Link>
        
        {/* Dynamic Search Engine */}
        <form onSubmit={handleSearch} className="mb-12 relative">
          <input 
            type="text" 
            placeholder="Search legal hub..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#EAECE6] border-[2px] border-transparent focus:border-[#1F2420] rounded-none px-4 py-3 text-sm font-medium outline-none transition-all"
          />
          <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
        </form>

        {/* Navigation */}
        <nav className="flex flex-col gap-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1F2420]/50 mb-2">Legal Hub</span>
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={`text-lg font-medium transition-colors ${pathname === link.path ? "text-[#F49B36] font-bold" : "text-[#1F2420] hover:text-[#F49B36]"}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Document Content Area */}
      <main className="ml-[320px] flex-1 min-h-screen">
        {children}
      </main>

    </div>
  );
}