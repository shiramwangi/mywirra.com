import type { Metadata } from "next";
// 1. Swap Inter for Plus Jakarta Sans
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// 2. Initialize the new premium font
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
      {/* 3. Inject the new font into the body */}
      <body className={`${jakarta.className} antialiased min-h-screen flex flex-col selection:bg-[#ffa066] selection:text-[#1F2420]`}>
        
        <Preloader />
        <Navbar />
        
        <main className="flex-1 flex flex-col w-full">
          {children}
        </main>

        <Footer />
        
      </body>
    </html>
  );
}