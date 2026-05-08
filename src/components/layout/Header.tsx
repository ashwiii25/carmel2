"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Legacy", href: "#about" },
  { name: "Expertise", href: "#departments" },
  { name: "Specialists", href: "#doctors" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent py-6 transition-all duration-700">
      <div className="container-custom flex items-center justify-between">
        <Link href="/" className="group flex items-center">
          <img 
            src="/carmel_dept/main_logo-1-scaled.webp" 
            alt="Carmel Hospital Logo" 
            className="h-16 md:h-20 w-auto object-contain" 
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-12">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:text-secondary drop-shadow-md"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-8">
          <a
            href="tel:+914842901000"
            className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-white/20 text-white pb-1 transition-colors duration-300 hover:border-white drop-shadow-md"
          >
            Emergency 24/7
          </a>
        </div>
      </div>
    </header>
  );
}
