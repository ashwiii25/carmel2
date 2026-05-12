"use client";

import { CinematicHero } from "@/components/shared/CinematicHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { departments } from "@/data/departments";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const INFRA_IMAGES = [
  {
    src: "/hero_slideshow/8c46e278d48667f791c5650e5e9548e128e758c2-3840x2560.webp",
    alt: "Advanced diagnostics lab",
  },
  {
    src: "/hero_slideshow/ed8f1c912abec340f3e692008c2999b1e5bfee2e-3840x2560.webp",
    alt: "Modern imaging center",
  },
  {
    src: "/hero_slideshow/pexels-cedric-fauntleroy-4270086.webp",
    alt: "Clinical infrastructure",
  },
];

export function DepartmentsClient() {
  const [infraIndex, setInfraIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setInfraIndex((prev) => (prev + 1) % INFRA_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevInfra = () => {
    setInfraIndex((prev) => (prev - 1 + INFRA_IMAGES.length) % INFRA_IMAGES.length);
  };

  const handleNextInfra = () => {
    setInfraIndex((prev) => (prev + 1) % INFRA_IMAGES.length);
  };

  return (
    <main className="bg-background">
      <CinematicHero 
        title="Centres of Excellence."
        subtitle="Specialized medical departments powered by advanced technology and deep-rooted human compassion."
        image="/hero_slideshow/pexels-cedric-fauntleroy-4270086.webp"
        breadcrumbs={[{ label: "Departments" }]}
        actions={[
          { label: "Our Expertise", href: "#expertise" }
        ]}
      />

      <section id="expertise" className="section-padding">
        <div className="container-custom">
          <SectionHeader 
            kicker="Our Expertise"
            title="Specialized care for every need."
            description="From preventative wellness to advanced surgical interventions, our departments are structured to provide seamless, integrated medical care."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-24">
            {departments.map((dept, idx) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.05 }}
              >
                <Link 
                  href={`/departments/${dept.slug}`}
                  className="group block bg-white rounded-[32px] overflow-hidden border border-primary/5 hover:border-secondary/20 transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] h-full"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img 
                      src={dept.image} 
                      alt={dept.name} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute top-6 left-6 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center text-primary shadow-xl">
                      <dept.icon className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <div className="p-10">
                    <span className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-secondary mb-6">
                      {dept.category}
                    </span>
                    <h3 className="text-2xl font-bold text-primary mb-6 group-hover:text-secondary transition-colors duration-500">
                      {dept.name}
                    </h3>
                    <p className="text-sm font-light text-foreground/50 mb-10 line-clamp-2 leading-relaxed">
                      {dept.desc}
                    </p>
                    <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.3em] text-primary/40 group-hover:text-primary transition-colors duration-500">
                      <span>Explore Department</span>
                      <div className="w-8 h-px bg-primary/20 group-hover:bg-primary group-hover:w-12 transition-all duration-500" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Services Banner */}
      <section className="section-padding bg-primary text-white overflow-hidden relative">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <SectionHeader 
                kicker="Infrastructure"
                title="Advanced diagnostic support."
                description="Our NABL-accredited laboratories and advanced imaging centers provide the foundation for accurate medical decisions."
                titleClassName="text-white"
                className="mb-12"
              />
              <div className="flex flex-wrap gap-12 mt-12">
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-secondary tracking-tighter">24/7</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Lab Support</p>
                </div>
                <div className="h-12 w-px bg-white/10" />
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-secondary tracking-tighter">NABL</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Accredited</p>
                </div>
                <div className="h-12 w-px bg-white/10" />
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-secondary tracking-tighter">AI</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Diagnostics</p>
                </div>
              </div>
            </motion.div>
            <div className="relative">
              <div className="img-reveal rounded-3xl aspect-[4/3] lg:aspect-[5/4] shadow-2xl border border-white/10 overflow-hidden relative">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={INFRA_IMAGES[infraIndex].src}
                    src={INFRA_IMAGES[infraIndex].src}
                    alt={INFRA_IMAGES[infraIndex].alt}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.01 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
              <div className="mt-6 flex items-center justify-between gap-6">
                <button
                  type="button"
                  onClick={handlePrevInfra}
                  className="w-12 h-12 inline-flex items-center justify-center text-white/80 border border-white/20 rounded-full hover:border-secondary hover:text-white transition-all duration-300"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
                  {infraIndex + 1} / {INFRA_IMAGES.length}
                </div>
                <button
                  type="button"
                  onClick={handleNextInfra}
                  className="w-12 h-12 inline-flex items-center justify-center text-white/80 border border-white/20 rounded-full hover:border-secondary hover:text-white transition-all duration-300"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] -z-0" />
      </section>
    </main>
  );
}
