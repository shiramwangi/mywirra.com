import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import CookieBar from "@/components/CookieBar";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wirra - Elevate your Hiring",
  description: "AI-Powered Recruitment Ecosystem",
  metadataBase: new URL("https://wirra.space"),
  icons: {
    icon: "/wirrax.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.className} antialiased min-h-screen flex flex-col selection:bg-[#ffa066] selection:text-[#1F2420]`}>
        
        <Preloader />
        
        {/* Injected at the absolute top of the body */}
        <AnnouncementBar />
        
        <Navbar />
        
        <main className="flex-1 flex flex-col w-full">
          {children}
        </main>

        <Footer />
        
        {/* Injected at the absolute bottom of the body */}
        <CookieBar />
        
      </body>
    </html>
  );
}