"use client";

import { CinematicHero } from "@/components/shared/CinematicHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Phone, Activity, Ambulance, Clock, ShieldCheck, HeartPulse } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const PROTOCOLS = [
  "Immediate Triage & Stabilization",
  "Advanced Life Support Ambulances",
  "Dedicated Trauma Response Teams",
  "Round-the-clock Surgical Readiness",
  "Integrated Diagnostic Support",
  "Direct ICU Admission Pathways"
];

export default function EmergencyPage() {
  return (
    <main className="bg-black pt-32 text-white">
      <CinematicHero 
        title="Seconds Count. Life Matters."
        subtitle="Our 24/7 emergency and trauma department is equipped to handle the most critical medical situations with speed and precision."
        image="/carmel_dept/Emergency-Medicine-580x360.webp"
        breadcrumbs={[{ label: "Emergency" }]}
      />

      {/* Emergency Call Box */}
      <section className="py-24 bg-red-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Need Urgent Help?</h2>
            <a 
              href="tel:+914842901000" 
              className="inline-flex items-center gap-6 px-16 py-8 bg-white text-red-600 rounded-full text-2xl md:text-4xl font-black transition-transform hover:scale-105 shadow-2xl"
            >
              <Phone className="w-8 h-8 md:w-12 md:h-12 fill-current" />
              +91 484 290 1000
            </a>
            <p className="mt-8 text-white/80 font-light tracking-widest uppercase text-xs">Available 24 hours, 7 days a week</p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section-padding bg-black relative overflow-hidden">
        <div className="container-custom">
          <SectionHeader 
            kicker="Emergency Readiness"
            title="State-of-the-art trauma care."
            className="text-white"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-24">
            <div className="p-12 rounded-2xl bg-white/5 border border-white/10 hover:border-red-600/50 transition-all duration-500">
              <Ambulance className="w-10 h-10 text-red-600 mb-8" />
              <h3 className="text-2xl font-bold mb-4">ALS Ambulances</h3>
              <p className="text-sm font-light text-white/40 leading-relaxed">Advanced life support fleet equipped for rapid patient transport and on-road stabilization.</p>
            </div>
            <div className="p-12 rounded-2xl bg-white/5 border border-white/10 hover:border-red-600/50 transition-all duration-500">
              <HeartPulse className="w-10 h-10 text-red-600 mb-8" />
              <h3 className="text-2xl font-bold mb-4">Cardiac Emergency</h3>
              <p className="text-sm font-light text-white/40 leading-relaxed">Dedicated cardiac emergency response for stroke, chest pain, and acute cardiac events.</p>
            </div>
            <div className="p-12 rounded-2xl bg-white/5 border border-white/10 hover:border-red-600/50 transition-all duration-500">
              <Activity className="w-10 h-10 text-red-600 mb-8" />
              <h3 className="text-2xl font-bold mb-4">Trauma Bay</h3>
              <p className="text-sm font-light text-white/40 leading-relaxed">Immediate access to trauma specialists and surgical suites for severe injuries.</p>
            </div>
          </div>
        </div>
        
        {/* Abstract Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[200px] -z-10" />
      </section>

      {/* Protocols */}
      <section className="section-padding bg-white text-primary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <SectionHeader 
                kicker="Our Protocol"
                title="Precision under pressure."
                description="We follow international triage standards to ensure every second is used effectively to save lives."
              />
              <div className="grid sm:grid-cols-2 gap-8 mt-12">
                {PROTOCOLS.map((item) => (
                  <div key={item} className="flex items-center gap-4 text-sm font-light text-foreground/70">
                    <ShieldCheck className="w-5 h-5 text-red-600 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="img-reveal rounded-2xl aspect-video overflow-hidden shadow-2xl">
              <img 
                src="/carmel_dept/Intensive-Care-Units-580x360.webp" 
                alt="Emergency Protocol" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-black text-center">
        <div className="container-custom">
          <p className="text-[10px] font-black tracking-[0.4em] text-red-600 mb-12 uppercase">Carmel Emergency Services</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-tight">Trust the Experts.</h2>
          <div className="flex flex-wrap items-center justify-center gap-12">
            <Link href="/contact" className="text-[11px] font-bold uppercase tracking-[0.3em] border-b border-white/10 pb-2 hover:border-red-600 transition-all">Location & Directions</Link>
            <Link href="/doctors" className="text-[11px] font-bold uppercase tracking-[0.3em] border-b border-white/10 pb-2 hover:border-red-600 transition-all">Browse Specialists</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
