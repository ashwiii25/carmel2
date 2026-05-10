"use client";

import { CinematicHero } from "@/components/shared/CinematicHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function ContactClient() {
  return (
    <main className="bg-background">
      <CinematicHero 
        title="We're here for you."
        subtitle="Reach out to our dedicated team for appointments, medical inquiries, or general information. Your health is our priority."
        image="/hero_slideshow/ed8f1c912abec340f3e692008c2999b1e5bfee2e-3840x2560.webp"
        breadcrumbs={[{ label: "Contact" }]}
        actions={[
          { label: "Connect Now", href: "#reach-out" }
        ]}
      />

      <section id="reach-out" className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <SectionHeader 
                kicker="Reach Out"
                title="Connect with Carmel."
                description="Whether you're seeking specialized consultation or have administrative questions, we're ready to assist you."
              />

              <div className="space-y-12 mt-16">
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-4">Location</h4>
                    <p className="text-lg font-light text-primary leading-relaxed">
                      Ashokapuram P.O, Aluva,<br />
                      Ernakulam, Kerala — 683101
                    </p>
                  </div>
                </div>

                <div className="flex gap-8 group">
                  <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-4">Phone</h4>
                    <p className="text-2xl font-bold text-primary">+91 484 290 1000</p>
                    <p className="text-sm font-light text-foreground/40 mt-2">Available 24/7 for Emergency</p>
                  </div>
                </div>

                <div className="flex gap-8 group">
                  <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-4">Email</h4>
                    <p className="text-lg font-light text-primary">info@carmelhospital.in</p>
                    <p className="text-lg font-light text-primary">hr@carmelhospital.in</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="bg-white p-8 sm:p-12 md:p-16 rounded-[32px] md:rounded-[40px] shadow-[0_40px_80px_rgba(0,0,0,0.05)] border border-primary/5"
            >
              <h3 className="text-3xl font-bold text-primary mb-12">Send an Inquiry</h3>
              <form className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40">Full Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-primary/10 py-4 focus:outline-none focus:border-secondary transition-colors font-light" placeholder="John Doe" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40">Email Address</label>
                    <input type="email" className="w-full bg-transparent border-b border-primary/10 py-4 focus:outline-none focus:border-secondary transition-colors font-light" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40">Department</label>
                  <select className="w-full bg-transparent border-b border-primary/10 py-4 focus:outline-none focus:border-secondary transition-colors font-light appearance-none">
                    <option>General Inquiry</option>
                    <option>Cardiology</option>
                    <option>Orthopaedics</option>
                    <option>Human Resources</option>
                  </select>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40">Message</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-primary/10 py-4 focus:outline-none focus:border-secondary transition-colors font-light resize-none" placeholder="How can we help you today?" />
                </div>
                <button className="w-full py-6 md:py-8 bg-primary text-white text-[11px] font-bold uppercase tracking-[0.4em] rounded-xl md:rounded-2xl hover:bg-secondary hover:shadow-2xl transition-all duration-500 mt-8">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Strip */}
      <section className="bg-[#8B0000] py-12 text-white">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center animate-pulse">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 mb-1">Emergency 24/7</p>
              <p className="text-xl font-bold tracking-tight">0484 290 1000</p>
            </div>
          </div>
          <div className="h-px w-full md:w-px md:h-12 bg-white/10" />
          <p className="text-sm font-light text-white/60 text-center md:text-left max-w-md">Immediate trauma and cardiac emergency response team available round the clock.</p>
        </div>
      </section>
    </main>
  );
}
