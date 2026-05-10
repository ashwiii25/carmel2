"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";

import Image from "next/image";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ActionButton {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline";
}

interface CinematicHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumbs: BreadcrumbItem[];
  actions?: ActionButton[];
}

export function CinematicHero({ title, subtitle, image, breadcrumbs, actions }: CinematicHeroProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(titleRef.current.children, 
        { y: 80, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.1,
          duration: 1.5, 
          ease: "power4.out",
          delay: 0.5
        }
      );
    }
  }, []);

  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden bg-black text-white flex flex-col items-center justify-center text-center pb-16 md:pb-20">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 0.6 }}
          transition={{ 
            scale: { duration: 15, ease: "linear" },
            opacity: { duration: 1.5, ease: "easeOut" }
          }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={image}
            alt={title}
            fill
            priority
            sizes="100vw"
            quality={90}
            className="object-cover"
          />
        </motion.div>
        {/* Unified 40% Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 w-full h-full flex flex-col">
        {/* Breadcrumbs - Top Left below Navbar */}
        <nav className="pt-24 sm:pt-28 flex items-center gap-2 flex-wrap">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2"
          >
            <Link 
              href="/" 
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-secondary transition-colors"
            >
              Home
            </Link>
            {breadcrumbs.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3 text-white/20" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </nav>

        <div className="flex-1 flex flex-col items-center justify-center">
          <h1 
            ref={titleRef} 
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 tracking-tight leading-[1.05] drop-shadow-2xl px-4"
          >
            {title.split(' ').map((word, i) => (
              <span key={i} className="inline-block mr-4 last:mr-0">{word}</span>
            ))}
          </h1>
          
          <div className="max-w-3xl mx-auto">
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.8 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-white/80 leading-relaxed drop-shadow-lg mb-8 px-2"
              >
                {subtitle}
              </motion.p>
            )}

            {actions && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="flex flex-wrap items-center justify-center gap-4 md:gap-8 px-4"
              >
                {actions.map((action) => (
                  <Link 
                    key={action.label}
                    href={action.href}
                    className="group flex items-center gap-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] px-8 sm:px-12 py-4 sm:py-6 border border-white/20 hover:border-secondary hover:bg-white/5 transition-all duration-500 rounded-full"
                  >
                    <span>{action.label}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </Link>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>

    </section>
  );
}
