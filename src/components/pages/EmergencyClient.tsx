"use client";

import { CinematicHero } from "@/components/shared/CinematicHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Phone, Activity, Ambulance, ShieldCheck, HeartPulse } from "lucide-react";
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

export function EmergencyClient() {
  return (
    <main className="bg-black">
      <CinematicHero 
        title="Seconds Count. Life Matters."
        subtitle="Our 24/7 emergency and trauma department is equipped to handle the most critical medical situations with speed and precision."
        image="/hero_slideshow/hospital_emergency_room_view003.webp"
        breadcrumbs={[{ label: "Emergency" }]}
        actions={[
          { label: "Our Readiness", href: "#trauma-care" }
        ]}
      />

      {/* Emergency Call Box */}
      <section id="trauma-care" className="py-32 bg-[#8B0000] relative overflow-hidden">
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-12 tracking-tight text-white">Need Urgent Help?</h2>
            <a 
              href="tel:+914842901000" 
              className="group inline-flex items-center gap-4 md:gap-8 px-8 sm:px-12 md:px-20 py-6 md:py-10 lg:py-12 bg-white text-[#8B0000] rounded-full text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black transition-all hover:scale-105 shadow-[0_20px_80px_rgba(0,0,0,0.3)]"
            >
              <Phone className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 fill-current group-hover:rotate-12 transition-transform duration-500" />
              <span>0484 290 1000</span>
            </a>
            <p className="mt-12 text-white/60 font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs">Available 24 hours · 7 days a week</p>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/20" />
      </section>

      {/* Capabilities Section */}
      <section className="section-padding bg-[#0A0A0A] relative overflow-hidden">
        <div className="container-custom relative z-10">
          <SectionHeader 
            kicker="Emergency Readiness"
            title="State-of-the-art trauma care."
            className="text-white"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 rounded-3xl bg-white/5 border border-white/10 hover:border-[#8B0000] transition-all duration-700 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#8B0000]/10 flex items-center justify-center mb-8 group-hover:bg-[#8B0000]/20 transition-colors">
                <Ambulance className="w-8 h-8 text-[#8B0000]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">ALS Ambulances</h3>
              <p className="text-sm font-light text-white/40 leading-relaxed">Advanced life support fleet equipped for rapid patient transport and on-road stabilization.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-12 rounded-3xl bg-white/5 border border-white/10 hover:border-[#8B0000] transition-all duration-700 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#8B0000]/10 flex items-center justify-center mb-8 group-hover:bg-[#8B0000]/20 transition-colors">
                <HeartPulse className="w-8 h-8 text-[#8B0000]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Cardiac Emergency</h3>
              <p className="text-sm font-light text-white/40 leading-relaxed">Dedicated cardiac emergency response for stroke, chest pain, and acute cardiac events.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-12 rounded-3xl bg-white/5 border border-white/10 hover:border-[#8B0000] transition-all duration-700 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#8B0000]/10 flex items-center justify-center mb-8 group-hover:bg-[#8B0000]/20 transition-colors">
                <Activity className="w-8 h-8 text-[#8B0000]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Trauma Bay</h3>
              <p className="text-sm font-light text-white/40 leading-relaxed">Immediate access to trauma specialists and surgical suites for severe injuries.</p>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8B0000]/10 rounded-full blur-[200px] -z-0" />
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
                {PROTOCOLS.map((item, idx) => (
                  <motion.div 
                    key={item} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-4 text-sm font-bold text-foreground/70"
                  >
                    <ShieldCheck className="w-5 h-5 text-[#8B0000] flex-shrink-0" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="img-reveal rounded-3xl aspect-video overflow-hidden shadow-2xl border-thin">
              <img 
                src="/hero_slideshow/pexels-cedric-fauntleroy-4270086.webp" 
                alt="Emergency Protocol" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-black text-center relative overflow-hidden">
        <div className="container-custom relative z-10">
          <p className="text-[10px] font-black tracking-[0.4em] text-[#8B0000] mb-12 uppercase">Carmel Emergency Services</p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-12 md:mb-16 tracking-tight leading-tight">Expertise for the <br /> moments that matter.</h2>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-8 md:gap-16">
            <Link href="/contact" className="group flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] text-white/40 hover:text-white transition-all duration-500">
              <span>Location & Directions</span>
              <div className="w-6 h-px bg-white/20 group-hover:bg-[#8B0000] group-hover:w-10 transition-all duration-500" />
            </Link>
            <Link href="/doctors" className="group flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] text-white/40 hover:text-white transition-all duration-500">
              <span>Browse Specialists</span>
              <div className="w-6 h-px bg-white/20 group-hover:bg-[#8B0000] group-hover:w-10 transition-all duration-500" />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#8B0000]/10 rounded-full blur-[120px] -z-0" />
      </section>
    </main>
  );
}
