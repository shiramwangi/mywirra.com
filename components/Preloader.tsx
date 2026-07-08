"use client";

import { useState, useEffect } from "react";
// 1. Added Transition to the import
import { motion, AnimatePresence, Transition } from "framer-motion";

const CONFIG = {
  speed: 2,              // Slightly slower spin for a calmer, premium feel
  strokeWidth: 4,        // Clean, legible thickness
  style: "fluid",        // Smooth acceleration/deceleration
  glow: true,            // Active glow accent
};

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // 2. Explicitly typed this object as a Framer Motion Transition
  const spinTransition: Transition = {
    repeat: Infinity,
    ease: CONFIG.style === "fluid" ? "easeInOut" : "linear",
    duration: CONFIG.speed,
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          // UPDATED: Only opacity for a slow, elegant dissolve. No upward movement.
          exit={{ opacity: 0 }}
          transition={{
            duration: 1.2, // Extended duration for the "slow fade"
            ease: "easeInOut",
          }}
          // UPDATED: Pure white background
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
        >
          <div className="relative flex items-center justify-center w-32 h-32">
            
            {/* Glow Accent */}
            {CONFIG.glow && (
              <div className="absolute inset-0 rounded-full bg-action-highlight/20 blur-xl animate-pulse" />
            )}

            <svg
              viewBox="0 0 50 50"
              className="w-16 h-16 transform -rotate-90"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background Track - Lightened for the white background */}
              <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                className="stroke-gray-100"
                strokeWidth={CONFIG.strokeWidth}
              />

              {/* Segmented Active Track */}
              <motion.circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                className="stroke-action-highlight"
                strokeWidth={CONFIG.strokeWidth}
                strokeLinecap="round"
                // UPDATED: Creates the segmented dashed look (30px line, 10px gap)
                strokeDasharray="30 15" 
                animate={{ 
                  strokeDashoffset: [0, -125], // Pushes the segments continuously
                  rotate: [0, 360] 
                }}
                transition={{
                  strokeDashoffset: spinTransition,
                  rotate: spinTransition
                }}
                style={{ originX: "25px", originY: "25px" }}
              />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}