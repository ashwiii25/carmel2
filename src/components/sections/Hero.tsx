"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const HERO_IMAGES = [
  "/hero_slideshow/eb-website-image-hero-3840x2560.webp",
  "/hero_slideshow/ey-doctors-in-discussion-in-hospital.webp",
  "/hero_slideshow/pexels-cedric-fauntleroy-4270086.webp",
  "/hero_slideshow/pexels-imadclicks-14558557.webp",
  "/hero_slideshow/hospital_emergency_room_view003.webp",
  "/hero_slideshow/unnamed-file-3840x2560.webp",
  "/hero_slideshow/8c46e278d48667f791c5650e5e9548e128e758c2-3840x2560.webp",
  "/hero_slideshow/9ead531de00e67864a3153c298b4a2ebdbceef72-3840x2560.webp",
  "/hero_slideshow/ed8f1c912abec340f3e692008c2999b1e5bfee2e-3840x2560.webp",
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
    <section className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden bg-black text-white">
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
            <motion.div
              initial={{ scale: 1.2 }}
              animate={{ scale: 1.1 }}
              transition={{ 
                scale: { duration: 8, ease: "linear" }
              }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={HERO_IMAGES[currentImage]}
                alt="Carmel Hospital"
                fill
                priority={currentImage === 0}
                sizes="100vw"
                quality={90}
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
        
        {/* Consistent 37% Overlay */}
        <div className="absolute inset-0 bg-black/[0.37] z-10" />
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
        <div className="container-custom">
          <h1 ref={titleRef} className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl mb-8 md:mb-12 leading-[1.1] tracking-tight drop-shadow-2xl">
            <span className="block opacity-90">Healing with</span>
            <span className="block font-bold">Heart.</span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col items-center gap-12"
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-white max-w-2xl mx-auto leading-relaxed drop-shadow-2xl px-4">
              Where advanced medical science meets deep-rooted human compassion. Discover a new standard of excellence in Aluva.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
