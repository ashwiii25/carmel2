"use client";

import { CinematicHero } from "@/components/shared/CinematicHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const VALUES = [
  { 
    title: "Compassion", 
    kicker: "01",
    desc: "At the heart of every procedure and interaction is a deep-rooted empathy for the human experience." 
  },
  { 
    title: "Precision", 
    kicker: "02",
    desc: "Merging world-class expertise with advanced medical technology to deliver unmatched diagnostic accuracy." 
  },
  { 
    title: "Legacy", 
    kicker: "03",
    desc: "Over 60 years of steadfast commitment to the health and well-being of the Aluva community." 
  },
  { 
    title: "Integrity", 
    kicker: "04",
    desc: "Upholding the highest ethical standards in medical practice, transparency, and patient advocacy." 
  },
];

export function AboutClient() {
  return (
    <main className="bg-background">
      <CinematicHero 
        title="A Legacy of Human Care & Medical Excellence."
        subtitle="Discover the story behind Aluva's premier medical institution — where advanced science meets the warmth of healing."
        image="/hero_slideshow/eb-website-image-hero-3840x2560.webp"
        breadcrumbs={[{ label: "Legacy" }]}
        actions={[
          { label: "Our Story", href: "#philosophy" }
        ]}
      />

      {/* Philosophy Section */}
      <section id="philosophy" className="section-padding overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <SectionHeader 
              kicker="Our Philosophy"
              title="Healing is not just a science, it's a commitment to life."
              description="Founded in 1965, Carmel Hospital was born from a vision to provide international-standard healthcare accessible to all. We believe in treating the person, not just the symptom."
            />
            
            <div className="relative group">
              <div className="img-reveal rounded-3xl aspect-[4/5] shadow-2xl border-thin">
                <Image 
                  src="/hero_slideshow/pexels-imadclicks-14558557.webp" 
                  alt="Nursing Excellence" 
                  width={600}
                  height={750}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-padding bg-primary/5 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <SectionHeader 
            kicker="Our Foundation"
            title="Values that define our standard."
            align="center"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {VALUES.map((val, idx) => (
              <motion.div 
                key={val.title} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="group p-8 bg-white/40 backdrop-blur-sm border border-primary/5 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-500"
              >
                <span className="block text-[10px] font-black tracking-[0.3em] text-secondary mb-6">{val.kicker}</span>
                <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-secondary transition-colors duration-500">{val.title}</h3>
                <p className="text-sm font-light leading-relaxed text-foreground/60">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-0" />
      </section>

      {/* History Timeline */}
      <section className="section-padding bg-background relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-12 md:gap-24">
            <div className="lg:col-span-5">
              <SectionHeader 
                kicker="The Journey"
                title="Tracing our path through milestones."
                description="Our evolution from a 50-bed facility to a leading multi-specialty institution in Kerala."
              />
            </div>
            
            <div className="lg:col-span-7 space-y-16 relative pt-8">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-primary/10" />
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="pl-12 relative"
              >
                <div className="absolute left-[-4px] top-2 w-2 h-2 bg-secondary rounded-full" />
                <span className="block text-[10px] font-black tracking-[0.3em] text-secondary mb-2">1965</span>
                <h4 className="text-2xl font-bold mb-4 text-primary">Foundation Stone</h4>
                <p className="text-lg font-light text-foreground/60 leading-relaxed">Carmel Hospital opens its doors as a 50-bed multi-speciality center in Aluva, driven by humanitarian values.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="pl-12 relative"
              >
                <div className="absolute left-[-4px] top-2 w-2 h-2 bg-secondary rounded-full" />
                <span className="block text-[10px] font-black tracking-[0.3em] text-secondary mb-2">2005</span>
                <h4 className="text-2xl font-bold mb-4 text-primary">Advanced Cardiac Wing</h4>
                <p className="text-lg font-light text-foreground/60 leading-relaxed">Introduction of state-of-the-art Cath Lab and critical cardiac care facilities to serve growing regional needs.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="pl-12 relative"
              >
                <div className="absolute left-[-4px] top-2 w-2 h-2 bg-secondary rounded-full" />
                <span className="block text-[10px] font-black tracking-[0.3em] text-secondary mb-2">2024</span>
                <h4 className="text-2xl font-bold mb-4 text-primary">Robotic Surgery Integration</h4>
                <p className="text-lg font-light text-foreground/60 leading-relaxed">Achieved a milestone in precision surgery with the integration of advanced robotic assistance and AI diagnostics.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white text-center overflow-hidden relative border-t border-white/5">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 md:mb-12 tracking-tight leading-tight">
              Ready to experience a <br /> new standard of care?
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-12">
              <Link 
                href="/contact" 
                className="group flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] px-10 py-5 border border-white/20 hover:border-secondary transition-all duration-500 rounded-full"
              >
                <span>Get in Touch</span>
                <div className="w-8 h-px bg-white/20 group-hover:bg-secondary group-hover:w-12 transition-all duration-500" />
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] -z-0 opacity-50" />
      </section>
    </main>
  );
}
