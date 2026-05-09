"use client";

import { CinematicHero } from "@/components/shared/CinematicHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-background pt-32">
      <CinematicHero 
        title="We're Always Within Reach."
        subtitle="Get in touch for appointments, general inquiries, or emergency support. Our team is available 24/7."
        image="/carmel_dept/General-Medicine-580x360.webp"
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr_500px] gap-24">
            <div>
              <SectionHeader 
                kicker="Connect"
                title="Send us a message."
                description="Our care coordinators will respond to your inquiry within 24 hours. For emergencies, please call our 24/7 helpline immediately."
              />

              <form className="space-y-8 mt-16">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-primary/5 border-b border-primary/10 py-4 focus:border-secondary outline-none transition-colors font-light"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-primary/5 border-b border-primary/10 py-4 focus:border-secondary outline-none transition-colors font-light"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40">Inquiry Subject</label>
                  <select className="w-full bg-primary/5 border-b border-primary/10 py-4 focus:border-secondary outline-none transition-colors font-light appearance-none">
                    <option>General Inquiry</option>
                    <option>Appointment Request</option>
                    <option>Feedback</option>
                    <option>Careers</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40">Your Message</label>
                  <textarea 
                    rows={6}
                    className="w-full bg-primary/5 border-b border-primary/10 py-4 focus:border-secondary outline-none transition-colors font-light resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button className="px-12 py-5 bg-primary text-white text-[11px] font-bold uppercase tracking-[0.3em] rounded-full hover:bg-secondary transition-colors duration-500 shadow-xl">
                  Send Message
                </button>
              </form>
            </div>

            <aside className="space-y-16">
              <div className="bg-primary/5 p-12 rounded-2xl border border-primary/5">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary mb-12">Contact Details</h4>
                
                <div className="space-y-12">
                  <div className="flex gap-6">
                    <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 mb-2">Location</p>
                      <p className="text-lg font-bold text-primary">Ashokapuram P.O, Aluva, Ernakulam, Kerala</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 mb-2">Call Us</p>
                      <p className="text-lg font-bold text-primary">+91 484 290 1000</p>
                      <p className="text-sm font-light text-foreground/40">+91 484 262 5555</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 mb-2">Email</p>
                      <p className="text-lg font-bold text-primary">care@carmelhospital.in</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 mb-2">Working Hours</p>
                      <p className="text-lg font-bold text-primary">OPD: 8 AM — 8 PM</p>
                      <p className="text-sm font-light text-red-500 uppercase tracking-widest font-black pt-2">Emergency: 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-2xl overflow-hidden aspect-video bg-primary/5 border border-primary/5 flex items-center justify-center text-primary/20 italic font-light text-sm">
                Interactive Map Placeholder
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Emergency Strip */}
      <section className="py-12 bg-red-600 text-white">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight">Need immediate assistance?</h3>
          </div>
          <a 
            href="tel:+914842901000" 
            className="px-12 py-5 bg-white text-red-600 text-[11px] font-bold uppercase tracking-[0.3em] rounded-full hover:bg-red-50 transition-colors shadow-xl"
          >
            Emergency 24/7
          </a>
        </div>
      </section>
    </main>
  );
}
