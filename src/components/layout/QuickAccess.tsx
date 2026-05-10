"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  CalendarPlus, 
  Search, 
  Ambulance, 
  PhoneCall,
  Menu
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const QUICK_ACTIONS = [
  { icon: Ambulance, label: "Emergency", href: "tel:+914842901000", primary: true },
  { icon: Search, label: "Find Doctor", href: "/doctors" },
  { icon: PhoneCall, label: "Contact", href: "/contact" },
];

export function QuickAccess() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down a bit to not conflict with hero
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 md:bottom-8 md:left-1/2 md:-translate-x-1/2 md:w-max"
        >
          <div className="bg-white md:rounded-full border-t border-border md:border-thin shadow-[0_-10px_40px_rgba(0,0,0,0.05)] md:shadow-2xl px-6 py-4 md:py-3 flex items-center justify-between md:justify-center gap-8">
            {QUICK_ACTIONS.map((action) => {
              const Icon = action.icon;
              return (
                <Link
                  key={action.label}
                  href={action.href}
                  className={cn(
                    "flex flex-col md:flex-row items-center gap-2 group transition-all duration-300",
                    action.primary ? "text-[#D32F2F]" : "text-primary/70 hover:text-primary"
                  )}
                >
                  <Icon size={18} strokeWidth={2} className="group-hover:-translate-y-1 md:group-hover:translate-x-1 transition-transform" />
                  <span className="text-[9px] md:text-xs font-bold uppercase tracking-wider">
                    {action.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
