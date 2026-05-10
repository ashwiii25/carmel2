"use client";

import { CinematicHero } from "@/components/shared/CinematicHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const SERVICES = [
  { 
    title: "Diagnostic Imaging", 
    kicker: "Precision",
    desc: "Advanced MRI, CT, and Ultrasound technology for absolute diagnostic clarity.",
    image: "/hero_slideshow/ed8f1c912abec340f3e692008c2999b1e5bfee2e-3840x2560.webp"
  },
  { 
    title: "Critical Care Units", 
    kicker: "Emergency",
    desc: "State-of-the-art ICU, MICU, and NICU wings with 24/7 monitoring.",
    image: "/hero_slideshow/pexels-cedric-fauntleroy-4270086.webp"
  },
  { 
    title: "Rehabilitation", 
    kicker: "Recovery",
    desc: "Comprehensive physiotherapy and post-surgical recovery programs.",
    image: "/hero_slideshow/9ead531de00e67864a3153c298b4a2ebdbceef72-3840x2560.webp"
  },
  { 
    title: "Laboratory Services", 
    kicker: "Diagnostics",
    desc: "NABL-accredited pathology and microbiology laboratory services.",
    image: "/hero_slideshow/8c46e278d48667f791c5650e5e9548e128e758c2-3840x2560.webp"
  },
  { 
    title: "24/7 Pharmacy", 
    kicker: "Care",
    desc: "Round-the-clock access to authentic medications and clinical supplies.",
    image: "/hero_slideshow/unnamed-file-3840x2560.webp"
  },
  { 
    title: "Neonatal Care", 
    kicker: "Specialized",
    desc: "Dedicated care for newborns with advanced NICU support systems.",
    image: "/hero_slideshow/eb-website-image-hero-3840x2560.webp"
  },
];

export function ServicesClient() {
  return (
    <main className="bg-background">
      <CinematicHero 
        title="Infrastructure for Better Outcomes."
        subtitle="Explore our advanced medical facilities and patient support services designed for comfort and precision."
        image="/hero_slideshow/ed8f1c912abec340f3e692008c2999b1e5bfee2e-3840x2560.webp"
        breadcrumbs={[{ label: "Infrastructure" }]}
        actions={[
          { label: "View Facilities", href: "#primary-services" }
        ]}
      />

      <section id="primary-services" className="section-padding">
        <div className="container-custom">
          <SectionHeader 
            kicker="Patient Care"
            title="Comprehensive medical facilities."
            description="Our infrastructure is designed to support the highest standards of clinical care, from emergency response to long-term rehabilitation."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {SERVICES.map((svc, idx) => (
              <motion.div 
                key={svc.title} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="img-reveal rounded-3xl aspect-video mb-8 overflow-hidden border-thin shadow-xl">
                  <img 
                    src={svc.image} 
                    alt={svc.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                
                <span className="block text-[10px] font-black uppercase tracking-[0.3em] text-secondary mb-4">{svc.kicker}</span>
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-500">{svc.title}</h3>
                <p className="text-sm font-light text-foreground/60 leading-relaxed mb-8 line-clamp-2">{svc.desc}</p>
                
                <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] text-primary group-hover:text-secondary transition-colors duration-500">
                  <span>View Details</span>
                  <div className="w-6 h-px bg-primary/20 group-hover:bg-secondary group-hover:w-10 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="section-padding bg-primary text-white overflow-hidden relative">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <SectionHeader 
                kicker="The Standard"
                title="International-level medical setup."
                className="mb-12"
              />
              <div className="grid sm:grid-cols-2 gap-10">
                {[
                  "Modular Operation Theatres",
                  "Advanced Cath Lab",
                  "24/7 Trauma Care",
                  "Dialysis Center",
                  "Digital Radiology",
                  "Post-Op Recovery Wings"
                ].map((item, idx) => (
                  <motion.div 
                    key={item} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-4 text-sm font-bold text-white/60 hover:text-white transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="bg-white/5 p-8 sm:p-10 md:p-12 lg:p-16 rounded-3xl border border-white/10 flex flex-col justify-center backdrop-blur-sm"
            >
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary mb-8">Patient Support</h4>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">Committed to your comfort.</h3>
              <p className="text-lg font-light text-white/60 mb-12 leading-relaxed">
                We provide premium patient suites, round-the-clock nursing care, and dedicated assistance for international and domestic patients.
              </p>
              <Link 
                href="/contact" 
                className="group flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] px-10 py-5 border border-white/20 hover:border-secondary transition-all duration-500 rounded-full w-fit"
              >
                <span>Inquire about Facilities</span>
                <div className="w-8 h-px bg-white/20 group-hover:bg-secondary group-hover:w-12 transition-all duration-500" />
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -z-0 opacity-50" />
      </section>
    </main>
  );
}
