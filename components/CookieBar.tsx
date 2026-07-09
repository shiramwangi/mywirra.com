"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBar() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Defer the state update to avoid synchronous cascading renders
    const timer = setTimeout(() => {
      const consent = localStorage.getItem("wirra_cookie_consent");
      if (!consent) {
        setShowBanner(true);
      }
    }, 500); // 500ms delay allows the main page to breathe before asking for consent

    return () => clearTimeout(timer);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("wirra_cookie_consent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("wirra_cookie_consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-sm z-[100] animate-in slide-in-from-bottom-5 fade-in duration-500">
      <div className="bg-[#2a2a2a] border border-[#1F2420]/20 shadow-2xl p-6 rounded-2xl flex flex-col gap-4 text-[#FDFBF7]">
        <h3 className="font-bold text-lg tracking-tight">Cookie Preferences</h3>
        <p className="text-sm text-gray-300 leading-relaxed">
          We use cookies to improve your experience and analyze platform traffic. 
          Read our <Link href="/privacy" className="text-[#F49B36] hover:underline">Privacy Policy</Link>.
        </p>
        <div className="flex items-center gap-3 mt-2">
          <button 
            onClick={acceptCookies}
            className="flex-1 bg-[#F49B36] text-[#1F2420] font-semibold py-2.5 px-4 rounded-lg hover:bg-[#e08c31] transition-colors text-sm"
          >
            Accept All
          </button>
          <button 
            onClick={declineCookies}
            className="flex-1 bg-transparent border border-gray-600 text-[#FDFBF7] font-semibold py-2.5 px-4 rounded-lg hover:bg-gray-700 transition-colors text-sm"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}