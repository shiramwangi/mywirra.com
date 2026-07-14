"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import CookieBar from "@/components/CookieBar";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Check if the user is anywhere inside the Legal Hub
  const isLegalHub = pathname?.startsWith("/legal");

  return (
    <>
      <Preloader />
      
      {/* Conditionally hide marketing headers if in Legal Hub */}
      {!isLegalHub && <AnnouncementBar />}
      {!isLegalHub && <Navbar />}
      
      <main className="flex-1 flex flex-col w-full">
        {children}
      </main>

      {/* Conditionally hide marketing footers if in Legal Hub */}
      {!isLegalHub && <Footer />}
      {!isLegalHub && <CookieBar />}
    </>
  );
}