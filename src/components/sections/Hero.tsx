"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const HERO_IMAGES = [
  "/carmel_dept/Intensive-Care-Units-580x360.webp",
  "/carmel_dept/General-Medicine-580x360.webp",
  "/carmel_dept/Nursing-Department-580x360.webp",
  "/carmel_dept/Radiology-580x360.webp",
  "/carmel_dept/MICU-580x360.webp",
  "/carmel_dept/Physiotherapy-580x360.webp",
  "/carmel_dept/Dialysis-580x360.webp",
  "/carmel_dept/Paediatrics-580x360.webp",
];

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(titleRef.current.children, 
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.1, 
          duration: 1.5, 
          ease: "power4.out" 
        }
      );
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Slideshow - Simultaneous Cross-fade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={HERO_IMAGES[currentImage]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <motion.img
              src={HERO_IMAGES[currentImage]}
              alt="Carmel Hospital"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1.1 }}
              transition={{ 
                scale: { duration: 8, ease: "linear" }
              }}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Consistent 37% Overlay */}
        <div className="absolute inset-0 bg-black/[0.37] z-10" />
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
        <div className="container-custom">
          <h1 ref={titleRef} className="text-6xl md:text-8xl lg:text-[10rem] mb-12 leading-[0.85] tracking-tighter drop-shadow-2xl">
            <span className="block italic font-light opacity-90">Refining</span>
            <span className="block font-bold">Healthcare.</span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col items-center gap-12"
          >
            <p className="text-xl md:text-2xl font-light text-white max-w-2xl mx-auto leading-relaxed drop-shadow-2xl">
              Where advanced medical science meets deep-rooted human compassion. Discover a new standard of excellence in Aluva.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
