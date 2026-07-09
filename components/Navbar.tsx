"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

/* -------------------------------------------------------------------------- */
/* THE ROUTING MATRIX                                                         */
/* -------------------------------------------------------------------------- */
const NAV_DATA = {
  product: {
    products: [
      { name: "How It Works", href: "/product/how-it-works" },
      { name: "Pricing", href: "/product/pricing" },
      { name: "Investor Network", href: "/investors" },
    ],
    features: [
      { name: "Assessments", href: "/features/assessments" },
      { name: "Plagiarism Detector", href: "/features/plagiarism" },
      { name: "Automated Scoring", href: "/features/scoring" },
      { name: "Video Interviews", href: "/features/video" },
      { name: "Team Collaboration", href: "/features/collaboration" },
    ],
  },
  company: [
    { name: "Who we are", href: "/company/who-we-are" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/company/contact" },
    { name: "Careers", href: "/company/careers" },
  ],
  solutions: [
    { name: "Industry Mapping", href: "/solutions/industry-mapping" },
    { name: "Enterprise", href: "/solutions/enterprise" },
    { name: "Startups", href: "/solutions/startups" },
    { name: "Agencies", href: "/solutions/agencies" },
  ],
};

/* -------------------------------------------------------------------------- */
/* MAIN NAVBAR COMPONENT                                                      */
/* -------------------------------------------------------------------------- */
export default function Navbar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDesktopMenu, setActiveDesktopMenu] = useState<string | null>(null);
  const [activeMobileAccordion, setActiveMobileAccordion] = useState<string | null>(null);
  
  // 1. Track the previous pathname to detect changes
  const [prevPathname, setPrevPathname] = useState(pathname);

  // 2. The React Recommended Pattern: Adjusting state while rendering
  if (pathname !== prevPathname) {
    setIsMobileOpen(false);
    setActiveMobileAccordion(null);
    setPrevPathname(pathname);
  }

  // CRO Gatekeeper: Suppress global navigation on high-intent conversion routes
  if (
    pathname === "/investors" ||
    pathname?.startsWith("/early-contributors")
  ) {
    return null;
  }

  // Mobile Accordion Toggle
  const toggleAccordion = (menu: string) => {
    setActiveMobileAccordion((prev) => (prev === menu ? null : menu));
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#1F2420]/5 px-6 md:px-12 lg:px-20 transition-all">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between h-20">
        
        {/* BRAND LOGO */}
        <Link 
          href="/" 
          className="text-3xl tracking-tight flex items-baseline z-50 relative outline-none" 
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <span className="font-normal text-[#1F2420]">wirra</span>
          <span className="font-bold text-[#F49B36]">.</span>
        </Link>

        {/* DESKTOP NAVIGATION (Mega Menu & Dropdowns) */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          
          {/* PRODUCT MEGA MENU */}
          <div 
            className="relative h-20 flex items-center cursor-pointer"
            onMouseEnter={() => setActiveDesktopMenu("product")}
            onMouseLeave={() => setActiveDesktopMenu(null)}
          >
            <div className="flex items-center gap-1 text-sm font-semibold text-[#1F2420] hover:text-[#F49B36] transition-colors">
              Product
              <motion.div animate={{ rotate: activeDesktopMenu === "product" ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </div>
            <AnimatePresence>
              {activeDesktopMenu === "product" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-20 -left-12 w-[600px] bg-white shadow-xl rounded-2xl border border-gray-100 p-8 grid grid-cols-2 gap-12 cursor-default"
                >
                  <div className="flex flex-col gap-4">
                    <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">Products</h4>
                    {NAV_DATA.product.products.map((item, idx) => (
                      <Link key={idx} href={item.href} className="text-[15px] font-medium text-[#1F2420] hover:text-[#F49B36] transition-colors">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-col gap-4 border-l border-gray-100 pl-12">
                    <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">Features</h4>
                    {NAV_DATA.product.features.map((item, idx) => (
                      <Link key={idx} href={item.href} className="text-[15px] font-medium text-[#1F2420] hover:text-[#F49B36] transition-colors">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* COMPANY DROPDOWN */}
          <div 
            className="relative h-20 flex items-center cursor-pointer"
            onMouseEnter={() => setActiveDesktopMenu("company")}
            onMouseLeave={() => setActiveDesktopMenu(null)}
          >
            <div className="flex items-center gap-1 text-sm font-semibold text-[#1F2420] hover:text-[#F49B36] transition-colors">
              Company
              <motion.div animate={{ rotate: activeDesktopMenu === "company" ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </div>
            <AnimatePresence>
              {activeDesktopMenu === "company" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-20 -left-6 w-56 bg-white shadow-xl rounded-2xl border border-gray-100 p-6 flex flex-col gap-4 cursor-default"
                >
                  {NAV_DATA.company.map((item, idx) => (
                    <Link key={idx} href={item.href} className="text-[15px] font-medium text-[#1F2420] hover:text-[#F49B36] transition-colors">
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* SOLUTIONS GRID DROPDOWN */}
          <div 
            className="relative h-20 flex items-center cursor-pointer"
            onMouseEnter={() => setActiveDesktopMenu("solutions")}
            onMouseLeave={() => setActiveDesktopMenu(null)}
          >
            <div className="flex items-center gap-1 text-sm font-semibold text-[#1F2420] hover:text-[#F49B36] transition-colors">
              Solutions
              <motion.div animate={{ rotate: activeDesktopMenu === "solutions" ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </div>
            <AnimatePresence>
              {activeDesktopMenu === "solutions" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-20 -left-16 w-[400px] bg-white shadow-xl rounded-2xl border border-gray-100 p-8 grid grid-cols-2 gap-x-8 gap-y-4 cursor-default"
                >
                  {NAV_DATA.solutions.map((item, idx) => (
                    <Link key={idx} href={item.href} className="text-[15px] font-medium text-[#1F2420] hover:text-[#F49B36] transition-colors">
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* DIRECT LINKS */}
          <Link href="/early-contributors/recruiter" className="text-sm font-semibold text-[#1F2420] hover:text-[#F49B36] transition-colors">
            For Recruiters
          </Link>
          <Link href="/early-contributors/candidate" className="text-sm font-semibold text-[#1F2420] hover:text-[#F49B36] transition-colors">
            For Candidates
          </Link>
        </div>

        {/* DESKTOP CTA (Dropdown) */}
        <div 
          className="hidden lg:flex items-center relative h-20"
          onMouseEnter={() => setActiveDesktopMenu("demo")}
          onMouseLeave={() => setActiveDesktopMenu(null)}
        >
          <div className="px-6 py-2.5 bg-[#1F2420] text-white rounded-full text-sm font-medium hover:bg-[#F49B36] transition-colors duration-300 cursor-pointer flex items-center gap-2">
            Request Demo
            <motion.div animate={{ rotate: activeDesktopMenu === "demo" ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </div>

          <AnimatePresence>
            {activeDesktopMenu === "demo" && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-20 right-0 w-52 bg-white shadow-xl rounded-2xl border border-gray-100 p-5 flex flex-col gap-4 cursor-default"
              >
                <Link 
                  href="/demo/recruiters" 
                  className="text-[15px] font-medium text-[#1F2420] hover:text-[#F49B36] transition-colors"
                >
                  For Recruiters
                </Link>
                <Link 
                  href="/demo/candidates" 
                  className="text-[15px] font-medium text-[#1F2420] hover:text-[#F49B36] transition-colors"
                >
                  For Candidates
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* MOBILE TOGGLE BUTTON (Morphing Hamburger) */}
        <button 
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden z-50 w-10 h-10 flex items-center justify-center text-[#1F2420] focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              animate={isMobileOpen ? { d: "M 4 4 L 20 20" } : { d: "M 4 6 L 20 6" }}
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" transition={{ duration: 0.3 }}
            />
            <motion.path
              animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }}
              d="M 4 12 L 20 12"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" transition={{ duration: 0.2 }}
            />
            <motion.path
              animate={isMobileOpen ? { d: "M 4 20 L 20 4" } : { d: "M 4 18 L 20 18" }}
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" transition={{ duration: 0.3 }}
            />
          </svg>
        </button>
      </div>

      {/* MOBILE FULL-SCREEN ACCORDION MENU */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 w-full bg-[#FDFBF7] pt-28 px-6 pb-12 overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col gap-6">
              
              {/* Product Accordion */}
              <div className="border-b border-[#1F2420]/10 pb-4">
                <button 
                  onClick={() => toggleAccordion("product")}
                  className="w-full flex items-center justify-between text-2xl font-normal text-[#1F2420]"
                >
                  Product
                  <motion.div animate={{ rotate: activeMobileAccordion === "product" ? 180 : 0 }}>
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeMobileAccordion === "product" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col gap-6 mt-6 pl-4"
                    >
                      <div className="flex flex-col gap-4">
                        <span className="text-[11px] font-bold tracking-widest uppercase text-gray-400">Products</span>
                        {NAV_DATA.product.products.map((item, idx) => (
                          <Link onClick={() => setIsMobileOpen(false)} key={idx} href={item.href} className="text-lg font-medium text-[#1F2420]">{item.name}</Link>
                        ))}
                      </div>
                      <div className="flex flex-col gap-4">
                        <span className="text-[11px] font-bold tracking-widest uppercase text-gray-400">Features</span>
                        {NAV_DATA.product.features.map((item, idx) => (
                          <Link onClick={() => setIsMobileOpen(false)} key={idx} href={item.href} className="text-lg font-medium text-[#1F2420]">{item.name}</Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Company Accordion */}
              <div className="border-b border-[#1F2420]/10 pb-4">
                <button 
                  onClick={() => toggleAccordion("company")}
                  className="w-full flex items-center justify-between text-2xl font-normal text-[#1F2420]"
                >
                  Company
                  <motion.div animate={{ rotate: activeMobileAccordion === "company" ? 180 : 0 }}>
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeMobileAccordion === "company" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col gap-4 mt-6 pl-4"
                    >
                      {NAV_DATA.company.map((item, idx) => (
                        <Link onClick={() => setIsMobileOpen(false)} key={idx} href={item.href} className="text-lg font-medium text-[#1F2420]">{item.name}</Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Solutions Accordion */}
              <div className="border-b border-[#1F2420]/10 pb-4">
                <button 
                  onClick={() => toggleAccordion("solutions")}
                  className="w-full flex items-center justify-between text-2xl font-normal text-[#1F2420]"
                >
                  Solutions
                  <motion.div animate={{ rotate: activeMobileAccordion === "solutions" ? 180 : 0 }}>
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeMobileAccordion === "solutions" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col gap-4 mt-6 pl-4"
                    >
                      {NAV_DATA.solutions.map((item, idx) => (
                        <Link onClick={() => setIsMobileOpen(false)} key={idx} href={item.href} className="text-lg font-medium text-[#1F2420]">{item.name}</Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Direct Mobile Links */}
              <Link href="/early-contributors/recruiter" onClick={() => setIsMobileOpen(false)} className="text-2xl font-normal text-[#1F2420] py-2">
                For Recruiters
              </Link>
              <Link href="/early-contributors/candidate" onClick={() => setIsMobileOpen(false)} className="text-2xl font-normal text-[#1F2420] py-2">
                For Candidates
              </Link>

              {/* Mobile CTA (Accordion Style) */}
              <div className="mt-4 border-t border-[#1F2420]/10 pt-8 pb-8">
                <button 
                  onClick={() => toggleAccordion("demo")}
                  className="w-full px-8 py-4 bg-[#1F2420] text-center text-white rounded-full text-lg font-medium hover:bg-[#F49B36] transition-colors flex justify-center items-center gap-2"
                >
                  Request Demo
                  <motion.div animate={{ rotate: activeMobileAccordion === "demo" ? 180 : 0 }}>
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeMobileAccordion === "demo" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col gap-3 mt-4"
                    >
                      <Link 
                        href="/demo/recruiters" 
                        onClick={() => setIsMobileOpen(false)}
                        className="w-full px-6 py-4 bg-gray-100 text-[#1F2420] rounded-xl text-center font-medium hover:bg-gray-200 transition-colors"
                      >
                        For Recruiters
                      </Link>
                      <Link 
                        href="/demo/candidates" 
                        onClick={() => setIsMobileOpen(false)}
                        className="w-full px-6 py-4 bg-gray-100 text-[#1F2420] rounded-xl text-center font-medium hover:bg-gray-200 transition-colors"
                      >
                        For Candidates
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}