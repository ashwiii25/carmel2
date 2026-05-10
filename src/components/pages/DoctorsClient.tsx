"use client";

import { useState } from "react";
import { CinematicHero } from "@/components/shared/CinematicHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { doctors } from "@/data/doctors";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function DoctorsClient() {
  const [activeSpeciality, setActiveSpeciality] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const specialities = ["All", ...Array.from(new Set(doctors.map(d => d.speciality)))];

  const filteredDoctors = doctors.filter(doc => {
    const matchesSpec = activeSpeciality === "All" || doc.speciality === activeSpeciality;
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         doc.speciality.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSpec && matchesSearch;
  });

  return (
    <main className="bg-background">
      <CinematicHero 
        title="Our World-Class Specialists."
        subtitle="Meet the experts dedicated to your well-being. Board-certified clinicians with deep-rooted compassion."
        image="/hero_slideshow/ey-doctors-in-discussion-in-hospital.webp"
        breadcrumbs={[{ label: "Specialists" }]}
        actions={[
          { label: "Find Specialist", href: "#specialists" }
        ]}
      />

      <section id="specialists" className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-12 mb-16 md:mb-24">
            <SectionHeader 
              kicker="Specialists"
              title="Find your care provider."
              className="mb-0 flex-shrink-0"
            />
            
            <div className="flex flex-col gap-4 w-full lg:w-[520px] xl:w-[600px]">
              {/* Search */}
              <div className="relative group w-full">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/40 group-focus-within:text-secondary transition-colors" />
                <input 
                  type="text"
                  placeholder="Search by name or speciality..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-5 py-3.5 bg-primary/5 border border-primary/10 focus:border-secondary/50 focus:bg-white rounded-full text-sm font-light transition-all outline-none"
                />
              </div>

              {/* Speciality Filters - horizontal scroll on mobile */}
              <div className="flex items-center gap-2.5 overflow-x-auto pb-1 lg:flex-wrap lg:overflow-visible lg:pb-0 lg:justify-end scrollbar-hide">
                {specialities.slice(0, 8).map((spec) => (
                  <button
                    key={spec}
                    onClick={() => setActiveSpeciality(spec)}
                    className={cn(
                      "px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] rounded-full transition-all duration-300 whitespace-nowrap flex-shrink-0",
                      activeSpeciality === spec 
                        ? "bg-primary text-white shadow-md" 
                        : "bg-primary/5 text-primary/60 hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/20"
                    )}
                  >
                    {spec}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            <AnimatePresence mode="popLayout">
              {filteredDoctors.map((doc, idx) => (
                <motion.div
                  layout
                  key={doc.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link 
                    href={`/doctors/${doc.slug}`}
                    className="group block bg-white rounded-3xl overflow-hidden border border-primary/5 hover:border-secondary/20 transition-all duration-700 hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] h-full"
                  >
                    <div className="aspect-square overflow-hidden transition-all duration-1000 border-b border-primary/5">
                      <img 
                        src={doc.image} 
                        alt={doc.name} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 md:p-10">
                      <span className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-secondary mb-4 md:mb-6">
                        {doc.speciality}
                      </span>
                      <h3 className="text-lg md:text-2xl font-bold text-primary mb-3 md:mb-4 group-hover:text-secondary transition-colors duration-500">
                        {doc.name}
                      </h3>
                      <p className="text-xs md:text-sm font-light text-foreground/40 mb-6 md:mb-10 line-clamp-2 leading-relaxed">
                        {doc.experience} Experience · {doc.qualifications.join(", ")}
                      </p>
                      <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.3em] text-primary/40 group-hover:text-primary transition-colors duration-500">
                        <span>View Profile</span>
                        <div className="w-6 h-px bg-primary/20 group-hover:bg-primary group-hover:w-10 transition-all duration-500" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredDoctors.length === 0 && (
            <div className="py-40 text-center">
              <p className="text-2xl font-light text-foreground/40 mb-12">No specialists found matching your criteria.</p>
              <button 
                onClick={() => {setActiveSpeciality("All"); setSearchQuery("");}}
                className="group flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] px-10 py-5 border border-primary/10 text-primary hover:border-primary transition-all duration-500 rounded-full mx-auto"
              >
                <span>Clear all filters</span>
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

