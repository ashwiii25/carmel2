"use client";

import { CinematicHero } from "@/components/shared/CinematicHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { departments } from "@/data/departments";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function DepartmentsPage() {
  return (
    <main className="bg-background pt-32">
      <CinematicHero 
        title="Centres of Medical Excellence."
        subtitle="Explore our specialized departments, each led by experts and equipped with the latest diagnostic and therapeutic technology."
        image="/carmel_dept/General-Surgery-580x360.webp"
        breadcrumbs={[{ label: "Expertise" }]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader 
            kicker="Our Expertise"
            title="Comprehensive care across every speciality."
            description="From advanced cardiology to specialized neonatal care, we provide a full spectrum of medical services under one roof."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, idx) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
              >
                <Link 
                  href={`/departments/${dept.slug}`}
                  className="group block relative overflow-hidden rounded-2xl bg-white border border-primary/5 hover:border-secondary/20 transition-all duration-500 hover:shadow-2xl"
                >
                  <div className="img-reveal aspect-[16/10] overflow-hidden">
                    <img 
                      src={dept.image} 
                      alt={dept.name} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">
                        {dept.category}
                      </span>
                      <dept.icon className="w-5 h-5 text-primary/40 group-hover:text-secondary transition-colors duration-500" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-primary mb-4 group-hover:translate-x-2 transition-transform duration-500">
                      {dept.name}
                    </h3>
                    
                    <p className="text-sm font-light text-foreground/60 mb-8 line-clamp-2 leading-relaxed">
                      {dept.desc}
                    </p>
                    
                    <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-primary group-hover:text-secondary transition-colors duration-500">
                      Explore Speciality <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary/5">
        <div className="container-custom text-center">
          <SectionHeader 
            kicker="Patient Care"
            title="Need assistance finding the right department?"
            align="center"
            className="mb-12"
          />
          <Link 
            href="/contact" 
            className="inline-block px-12 py-5 bg-primary text-white text-[11px] font-bold uppercase tracking-[0.3em] rounded-full hover:bg-secondary transition-colors duration-500"
          >
            Contact Admissions
          </Link>
        </div>
      </section>
    </main>
  );
}
