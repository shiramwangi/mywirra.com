"use client";

import { useState } from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "100",
  subsets: ["latin"],
  display: "swap",
});

// FIX 1: Moved FooterLink OUTSIDE the main component. 
// Now it is only created once, preserving memory and preventing re-mounts.
const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link
      href={href}
      className="relative text-sm text-[#FDFBF7]/70 hover:text-[#FDFBF7] transition-colors outline-none focus-visible:text-[#ffa066] py-1 inline-block after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-[#ffa066] hover:after:w-full after:transition-all after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)]"
    >
      {children}
    </Link>
  </li>
);

export default function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // FIX 2: Used React.FormEvent directly to satisfy strict SonarQube rules
  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const payload = {
      email: formData.get("email"),
      // Target Endpoint Configuration Stub: mwngichiira@gmail.com
    };

    try {
      // Simulate API Transaction to Express/Node Backend
      await new Promise((resolve) => setTimeout(resolve, 800));
      console.log("Payload routed to serverless endpoint:", payload);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Transaction failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#1F2420] text-[#FDFBF7] border-t border-[#2A302B]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-16 lg:py-24">
        
        {/* Master Grid Architecture */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12">
          
          {/* Brand & Form Column (Spans 2 columns on lg displays for visual weight) */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="inline-block outline-none focus-visible:ring-2 focus-visible:ring-[#ffa066] rounded-sm w-max">
              <span className={`${poppins.className} text-3xl tracking-tight`}>
                Wirra<span className="text-[#ffa066] font-medium">.</span>
              </span>
            </Link>
            <p className="text-sm text-[#FDFBF7]/70 max-w-xs leading-relaxed">
              The AI-powered recruitment ecosystem. Source, screen, and rank elite talent seamlessly.
            </p>
            
            <form onSubmit={handleContactSubmit} className="mt-4 flex flex-col gap-3 max-w-sm">
              <label htmlFor="email" className="sr-only">Email address</label>
              <div className="flex relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full bg-[#2A302B] border border-[#2A302B] focus:border-[#ffa066] text-sm rounded-l-md px-4 py-2.5 outline-none transition-colors placeholder:text-[#FDFBF7]/40"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#ffa066] text-[#1F2420] text-sm font-semibold px-5 py-2.5 rounded-r-md transition-colors hover:bg-[#ff8c4a] disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1F2420] focus-visible:ring-offset-[#ffa066]"
                >
                  {isSubmitting ? "..." : "Connect"}
                </button>
              </div>
            </form>
          </div>

          {/* Matrix Columns */}
          <div className="flex flex-col gap-5">
            <h4 className="font-semibold text-sm tracking-wide text-[#FDFBF7]">Company</h4>
            <ul className="flex flex-col gap-3">
              <FooterLink href="/about">Who We Are</FooterLink>
              <FooterLink href="/why-wirra">Why Wirra</FooterLink>
              <FooterLink href="/customers">Customers</FooterLink>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="font-semibold text-sm tracking-wide text-[#FDFBF7]">Product</h4>
            <ul className="flex flex-col gap-3">
              <FooterLink href="/how-it-works">How It Works</FooterLink>
              <FooterLink href="/pricing">Pricing</FooterLink>
              <FooterLink href="/investors">Investor Network</FooterLink>
              <FooterLink href="/beta">Beta Access</FooterLink>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="font-semibold text-sm tracking-wide text-[#FDFBF7]">Features</h4>
            <ul className="flex flex-col gap-3">
              <FooterLink href="/assessments">Assessments</FooterLink>
              <FooterLink href="/plagiarism">Plagiarism Detector</FooterLink>
              <FooterLink href="/scoring">Automated Scoring</FooterLink>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="font-semibold text-sm tracking-wide text-[#FDFBF7]">Solutions & Portals</h4>
            <ul className="flex flex-col gap-3">
              <FooterLink href="/solutions">Industry Mapping</FooterLink>
              <FooterLink href="/recruiters">For Recruiters</FooterLink>
              <FooterLink href="/candidates">For Candidates</FooterLink>
              <FooterLink href="/legal">Legal & Privacy</FooterLink>
            </ul>
          </div>

        </div>

        {/* Legal Sub-Footer */}
        <div className="mt-16 pt-8 border-t border-[#2A302B] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#FDFBF7]/50">
          <p>© {new Date().getFullYear()} Wirra LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#ffa066] transition-colors focus-visible:text-[#ffa066] outline-none">Terms of Service</a>
            <a href="#" className="hover:text-[#ffa066] transition-colors focus-visible:text-[#ffa066] outline-none">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}