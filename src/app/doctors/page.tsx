"use client";

import { CinematicHero } from "@/components/shared/CinematicHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { doctors, getAllSpecialities } from "@/data/doctors";
import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DoctorsPage() {
  const [activeSpeciality, setActiveSpeciality] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const specialities = ["All", ...getAllSpecialities()];

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doc) => {
      const matchesSpec = activeSpeciality === "All" || doc.speciality === activeSpeciality;
      const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           doc.speciality.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSpec && matchesSearch;
    });
  }, [activeSpeciality, searchQuery]);

  return (
    <main className="bg-background pt-32">
      <CinematicHero 
        title="Our World-Class Specialists."
        subtitle="Meet the experts dedicated to your well-being. Board-certified clinicians with deep-rooted compassion."
        image="/carmel_dept/General-Medicine-580x360.webp"
        breadcrumbs={[{ label: "Specialists" }]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
            <SectionHeader 
              kicker="Specialists"
              title="Find your care provider."
              className="mb-0"
            />
            
            <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
              {/* Search */}
              <div className="relative group flex-1 sm:w-64">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/20 group-focus-within:text-secondary transition-colors" />
                <input 
                  type="text"
                  placeholder="Search Specialists..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-6 py-4 bg-primary/5 border border-transparent focus:border-secondary/20 focus:bg-white rounded-xl text-sm font-light transition-all outline-none"
                />
              </div>

              {/* Speciality Filter Dropdown (Custom) */}
              <div className="flex flex-wrap gap-2">
                {specialities.slice(0, 5).map((spec) => (
                  <button
                    key={spec}
                    onClick={() => setActiveSpeciality(spec)}
                    className={cn(
                      "px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full transition-all duration-300",
                      activeSpeciality === spec 
                        ? "bg-primary text-white shadow-lg" 
                        : "bg-primary/5 text-primary hover:bg-primary/10"
                    )}
                  >
                    {spec}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredDoctors.map((doc, idx) => (
                <motion.div
                  layout
                  key={doc.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                >
                  <Link 
                    href={`/doctors/${doc.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden border border-primary/5 hover:border-secondary/20 transition-all duration-500 hover:shadow-2xl h-full"
                  >
                    <div className="aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                      <img 
                        src={doc.image} 
                        alt={doc.name} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-8">
                      <span className="inline-block text-[9px] font-black uppercase tracking-[0.3em] text-secondary mb-4">
                        {doc.speciality}
                      </span>
                      <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-500">
                        {doc.name}
                      </h3>
                      <p className="text-sm font-light text-foreground/40 mb-8 line-clamp-2 leading-relaxed">
                        {doc.experience} Experience · {doc.qualifications.join(", ")}
                      </p>
                      <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-primary/40 group-hover:text-primary transition-colors">
                        View Profile <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredDoctors.length === 0 && (
            <div className="py-24 text-center">
              <p className="text-xl font-light text-foreground/40">No specialists found matching your criteria.</p>
              <button 
                onClick={() => {setActiveSpeciality("All"); setSearchQuery("");}}
                className="mt-8 text-[11px] font-bold uppercase tracking-[0.3em] text-secondary border-b border-secondary/20 hover:border-secondary transition-all"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
