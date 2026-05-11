"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  const SOCIAL_LINKS = [
    { 
      name: "Facebook", 
      href: "https://www.facebook.com/carmelhosp/", 
      icon: (props: any) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      )
    },
    { 
      name: "Instagram", 
      href: "https://www.instagram.com/carmelhospitalaluva/", 
      icon: (props: any) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      )
    },
    { 
      name: "X", 
      href: "https://twitter.com/carmelhospital", 
      icon: (props: any) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
        </svg>
      )
    },
    { 
      name: "LinkedIn", 
      href: "https://in.linkedin.com/company/carmel-hospital-aluva", 
      icon: (props: any) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    },
  ];

  return (
    <footer className="py-24 bg-primary text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 mb-24">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-8">
              <img 
                src="/carmel_dept/main_logo-1-scaled.webp" 
                alt="Carmel Hospital Logo" 
                className="h-16 w-auto object-contain" 
              />
            </Link>
            <p className="text-white/40 text-xs tracking-widest leading-relaxed max-w-[200px] mb-10">
              Estd. 1965. Committed to excellence in medical care and human compassion.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-secondary hover:bg-secondary transition-colors duration-500 shadow-lg group"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm font-light text-white/60">
              <li><Link href="/about" className="hover:text-white transition-colors">Legacy</Link></li>
              <li><Link href="/departments" className="hover:text-white transition-colors">Expertise</Link></li>
              <li><Link href="/doctors" className="hover:text-white transition-colors">Specialists</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Infrastructure</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary mb-8">Specialities</h4>
            <ul className="space-y-4 text-sm font-light text-white/60">
              <li><Link href="/departments/cardiology" className="hover:text-white transition-colors">Cardiology</Link></li>
              <li><Link href="/departments/nephrology" className="hover:text-white transition-colors">Nephrology</Link></li>
              <li><Link href="/departments/orthopaedics" className="hover:text-white transition-colors">Orthopaedics</Link></li>
              <li><Link href="/departments/general-surgery" className="hover:text-white transition-colors">General Surgery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary mb-8">Contact</h4>
            <div className="text-sm font-light text-white/60 space-y-2">
              <p>Ashokapuram P.O, Aluva,</p>
              <p>Ernakulam, Kerala</p>
              <p className="pt-4 text-white font-medium">+91 484 290 1000</p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 text-[9px] uppercase tracking-[0.2em] font-bold text-white/20">
          <p>© {new Date().getFullYear()} Carmel Hospital. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
