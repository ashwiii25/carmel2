"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface CinematicHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumbs: BreadcrumbItem[];
}

export function CinematicHero({ title, subtitle, image, breadcrumbs }: CinematicHeroProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(titleRef.current, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          ease: "power4.out",
          delay: 0.5
        }
      );
    }
  }, []);

  return (
    <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden bg-black text-white flex items-center">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={image}
          alt={title}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ 
            scale: { duration: 10, ease: "linear" },
            opacity: { duration: 1.5, ease: "easeOut" }
          }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 pt-20">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 mb-8 overflow-hidden">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <Link 
              href="/" 
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-secondary transition-colors"
            >
              Home
            </Link>
            {breadcrumbs.map((item, index) => (
              <div key={item.label} className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3 text-white/30" />
                {item.href ? (
                  <Link 
                    href={item.href} 
                    className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-secondary transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
                    {item.label}
                  </span>
                )}
              </div>
            ))}
          </motion.div>
        </nav>

        <h1 
          ref={titleRef} 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-[1.1]"
        >
          {title}
        </h1>
        
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl font-light text-white/80 max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
