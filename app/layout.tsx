import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import MarketingLayout from "@/components/MarketingLayout";

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
        
        {/* Preloader remains global and runs on every page */}
        <Preloader />
        
        {/* MarketingLayout now handles the Navbar, Footer, and <main> tag safely */}
        <MarketingLayout>
          {children}
        </MarketingLayout>
        
      </body>
    </html>
  );
}