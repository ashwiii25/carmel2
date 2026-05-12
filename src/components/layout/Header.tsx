"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
  external?: boolean;
  compact?: boolean;
}

const NAV_LINKS: NavLink[] = [
  { name: "About", href: "/about" },
  { name: "Departments", href: "/departments" },
  { name: "Our Doctors", href: "/doctors" },
  { name: "Services", href: "/services" },
  { name: "News", href: "/news" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const PDF_LINK: NavLink = {
  name: "Annual Report",
  href: "/BMW-ANNUAL-REPORT-2022.pdf",
  external: true,
  compact: true,
};

const ALL_NAV_LINKS = [...NAV_LINKS, PDF_LINK];
const MOBILE_LINKS = ALL_NAV_LINKS;

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 py-6",
        isScrolled || isMenuOpen 
          ? "bg-background/90 backdrop-blur-xl border-b border-primary/5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.03)]" 
          : "bg-transparent"
      )}
    >
      {/* Top Gradient Overlay for Visibility */}
      {!isScrolled && !isMenuOpen && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent pointer-events-none -z-10 h-40" />
      )}

      <div className="container-custom flex items-center justify-between relative z-10">
        <Link href="/" className="group flex items-center">
          <div className="relative">
            <Image 
              src="/carmel_dept/main_logo-1-scaled.webp" 
              alt="Carmel Hospital Logo" 
              width={200}
              height={80}
              priority
              className={cn(
                "transition-all duration-700 object-contain w-auto",
                isScrolled ? "h-12 md:h-16" : "h-14 md:h-20"
              )}
            />
            {/* Subtle glow for logo when on dark backgrounds */}
            {!isScrolled && !isMenuOpen && (
              <div className="absolute inset-0 bg-white/10 blur-xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-10">
          {ALL_NAV_LINKS.map((link) => {
            const isActive = !link.external && isActiveLink(link.href);
            const linkClassName = cn(
              "text-[11px] tracking-[0.25em] font-bold uppercase transition-all duration-500 hover:text-secondary relative group whitespace-nowrap",
              isScrolled ? "text-primary" : "text-white",
              isActive && (isScrolled ? "text-secondary" : "text-white")
            );

            if (link.external) {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClassName}
                >
                  <span>{link.name}</span>
                  <span className={cn(
                    "absolute -bottom-1 left-0 w-0 h-px transition-all duration-500 group-hover:w-full",
                    isScrolled ? "bg-secondary" : "bg-white"
                  )} />
                </a>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={linkClassName}
                aria-current={isActive ? "page" : undefined}
              >
                <span>{link.name}</span>
                <span className={cn(
                  "absolute -bottom-1 left-0 h-px transition-all duration-500",
                  isActive ? "w-full" : "w-0 group-hover:w-full",
                  isScrolled ? "bg-secondary" : "bg-white"
                )} />
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={cn(
            "lg:hidden p-2.5 rounded-xl transition-all duration-500",
            isScrolled || isMenuOpen ? "text-primary bg-primary/5" : "text-white bg-white/10 backdrop-blur-md"
          )}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-2xl border-b border-primary/5 overflow-hidden shadow-2xl"
          >
            <div className="container-custom py-16 flex flex-col gap-10">
              {MOBILE_LINKS.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {(() => {
                    const isActive = !link.external && isActiveLink(link.href);
                    const mobileClassName = cn(
                      "group flex items-center justify-between font-bold text-primary hover:text-secondary transition-all text-3xl",
                      isActive && "text-secondary"
                    );

                    if (link.external) {
                      return (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsMenuOpen(false)}
                          className={mobileClassName}
                        >
                          <span>{link.name}</span>
                          <div className="w-12 h-px bg-primary/10 group-hover:bg-secondary group-hover:w-20 transition-all" />
                        </a>
                      );
                    }

                    return (
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={mobileClassName}
                        aria-current={isActive ? "page" : undefined}
                      >
                        <span>{link.name}</span>
                        <div className={cn(
                          "w-12 h-px transition-all",
                          isActive ? "bg-secondary w-20" : "bg-primary/10 group-hover:bg-secondary group-hover:w-20"
                        )} />
                      </Link>
                    );
                  })()}
                </motion.div>
              ))}
              
              <div className="pt-10 border-t border-primary/5" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
