"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const DOCTORS = [
  {
    name: "Dr. Vinod Thomas",
    role: "Senior Consultant Cardiologist",
    image: "/carmel_doc/Dr.Vinod-Thomas-500x500.webp",
  },
  {
    name: "Dr. Sr. Litty Maria",
    role: "Senior Pediatrician",
    image: "/carmel_doc/Dr.Sr_.Litty-Maria-500x500.webp",
  },
  {
    name: "Dr. Mathew Issac",
    role: "Chief Surgical Consultant",
    image: "/carmel_doc/Dr.Mathew-Issac-500x500.webp",
  },
  {
    name: "Dr. Jimmy Jose",
    role: "Consultant Physician",
    image: "/carmel_doc/Dr.Jimmy-Jose-500x500.webp",
  },
];

export function Doctors() {
  return (
    <section id="doctors" className="section-padding bg-background">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h3 className="text-secondary text-xs font-bold uppercase tracking-[0.3em] mb-8">Medical Team</h3>
            <h2 className="text-4xl md:text-7xl leading-[1.1]">
              World-Class <span className="opacity-80">Specialists.</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {DOCTORS.map((doc, index) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer"
            >
              <div className="img-reveal aspect-square mb-8 border-thin shadow-xl">
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col">
                <h4 className="text-2xl mb-2 font-bold group-hover:text-secondary transition-colors duration-500">{doc.name}</h4>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/40">{doc.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex justify-center"
        >
          <Link 
            href="/doctors" 
            className="group flex items-center gap-4 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] px-8 py-4 md:px-10 md:py-5 border border-primary/20 text-primary hover:border-primary transition-all duration-500 rounded-full"
          >
            <span>Meet Our Specialists</span>
            <div className="w-8 h-px bg-primary/20 group-hover:bg-primary group-hover:w-12 transition-all duration-500" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
