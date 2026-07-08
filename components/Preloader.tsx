"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
        >
          {/* THE SNAKISH MORPH:
            By animating 8 distinct percentage values on the border-radius, 
            we create an organic, wriggling shape with perfectly curved points.
            It behaves like a fluid or a coiled snake rather than a strict polygon.
          */}
          <style>{`
            @keyframes snakish-blob {
              0%   { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
              25%  { border-radius: 50% 50% 20% 80% / 25% 80% 20% 75%; }
              50%  { border-radius: 80% 20% 50% 50% / 80% 25% 75% 20%; }
              75%  { border-radius: 25% 75% 80% 20% / 50% 20% 80% 50%; }
              100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
            }
            .morph-snakish {
              animation: snakish-blob 2.5s ease-in-out infinite;
            }
          `}</style>

          <div className="relative flex items-center justify-center w-32 h-32">
            
            {/* Soft background pulse */}
            <div className="absolute inset-0 rounded-full bg-action-highlight/20 blur-xl animate-pulse" />

            {/* THE ACTIVE INDICATOR */}
            <motion.div
              // Replaced the polygon class with our new curved class
              className="w-16 h-16 bg-action-highlight morph-snakish shadow-sm"
              animate={{ 
                rotate: [0, 90, 180, 270, 360],
                // Added a slightly deeper scale breath to accentuate the "alive" feel
                scale: [1, 0.9, 1.1, 0.9, 1] 
              }}
              transition={{
                duration: 4, 
                ease: "linear",
                repeat: Infinity,
              }}
              style={{ originX: 0.5, originY: 0.5 }}
            />
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}