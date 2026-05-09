"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Legacy", href: "/about" },
  { name: "Expertise", href: "/departments" },
  { name: "Specialists", href: "/doctors" },
  { name: "Care", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6",
        isScrolled || isMenuOpen ? "bg-background/95 backdrop-blur-md border-b border-primary/5 py-4" : "bg-transparent"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link href="/" className="group flex items-center">
          <img 
            src="/carmel_dept/main_logo-1-scaled.webp" 
            alt="Carmel Hospital Logo" 
            className={cn(
              "transition-all duration-500 object-contain w-auto",
              isScrolled ? "h-10 md:h-12" : "h-14 md:h-20"
            )}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-12">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:text-secondary",
                isScrolled ? "text-primary" : "text-white drop-shadow-md"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 md:gap-8">
          <Link
            href="/emergency"
            className={cn(
              "text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] border-b pb-1 transition-colors duration-300",
              isScrolled || isMenuOpen
                ? "text-primary border-primary/20 hover:border-primary" 
                : "text-white border-white/20 hover:border-white drop-shadow-md"
            )}
          >
            Emergency 24/7
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              "lg:hidden p-2 transition-colors",
              isScrolled || isMenuOpen ? "text-primary" : "text-white"
            )}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-background border-b border-primary/5 overflow-hidden"
          >
            <div className="container-custom py-12 flex flex-col gap-8">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl font-bold text-primary hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
