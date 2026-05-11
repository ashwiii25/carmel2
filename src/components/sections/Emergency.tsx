"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Emergency() {
  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden bg-black text-white">
      <div className="absolute inset-0 z-0">
        <Image src="/carmel_dept/Emergency-Medicine-580x360.webp" alt="Emergency" fill sizes="100vw" className="object-cover opacity-60" />
      </div>

      <div className="container-custom relative z-10 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-white/40 text-xs font-bold uppercase tracking-[0.3em] mb-8">Crisis Response</h3>
            <h2 className="text-4xl md:text-7xl lg:text-8xl leading-[1.1] mb-8">
              Critical care, <br />
              <span className="text-white/80">delivered.</span>
            </h2>
            <p className="text-white/70 text-lg font-light leading-relaxed max-w-xl">
              Equipped with a state-of-the-art trauma unit and a dedicated fleet of life-support ambulances, we ensure rapid intervention when seconds matter most.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="bg-white/5 border border-white/10 p-12 md:p-16 text-center backdrop-blur-sm"
          >
            <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
              <Phone size={24} className="text-white" />
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mb-4">Emergency Hotline</p>
            <a 
              href="tel:+914842901000" 
              className="text-3xl md:text-6xl font-bold tracking-tight hover:text-secondary transition-colors duration-500"
            >
              0484 290 1000
            </a>
            <div className="mt-12 pt-12 border-t border-white/10 flex flex-wrap justify-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
              <span>Ambulance Services</span>
              <span>Trauma Response</span>
              <span>24/7 Availability</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
