"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Defer the state update to avoid synchronous cascading renders
    const timer = setTimeout(() => {
      const isDismissed = sessionStorage.getItem("wirra_announcement_dismissed");
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("wirra_announcement_dismissed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="relative z-[60] bg-[#1F2420] text-[#FDFBF7] px-4 py-2.5 flex items-center justify-center text-sm font-medium transition-all duration-300">
      <div className="flex flex-col sm:flex-row items-center gap-2 text-center">
        <span>🚀 Following our 30-day Build in Public journey?</span>
        <Link 
          href="/investors" 
          className="text-[#F49B36] hover:text-white underline underline-offset-2 transition-colors"
        >
          Join the Investor Network
        </Link>
      </div>
      <button 
        onClick={handleDismiss}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-full transition-colors focus:outline-none"
        aria-label="Dismiss announcement"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );
}