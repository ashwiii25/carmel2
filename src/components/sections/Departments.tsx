"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const DEPARTMENTS = [
  { id: "01", name: "Cardiology", focus: "Heart & Vascular Excellence", image: "/carmel_dept/Cardiology-580x360.webp" },
  { id: "02", name: "Orthopaedics", focus: "Mobility & Trauma Recovery", image: "/carmel_dept/Orthopaedics-580x360.webp" },
  { id: "03", name: "Paediatrics", focus: "Specialized Child Healthcare", image: "/carmel_dept/Paediatrics-580x360.webp" },
  { id: "04", name: "Gynaecology", focus: "Comprehensive Women's Care", image: "/carmel_dept/Gynaecology-580x360.webp" },
  { id: "05", name: "ENT", focus: "Ear, Nose & Throat Services", image: "/carmel_dept/ENT-580x360.webp" },
  { id: "06", name: "Ophthalmology", focus: "Advanced Eye Care", image: "/carmel_dept/Ophthalmology-580x360.webp" },
];

export function Departments() {
  return (
    <section id="departments" className="section-padding bg-primary text-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >
            <h3 className="text-secondary text-xs font-bold uppercase tracking-[0.3em] mb-8">Clinical Excellence</h3>
            <h2 className="text-4xl md:text-7xl leading-[1.1]">
              Centers of <span className="text-white/80">Expertise.</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-white/10">
          {DEPARTMENTS.map((dept, index) => (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group p-10 md:p-12 border-b border-white/10 md:border-r border-white/10 last:border-r-0 transition-colors duration-500 hover:bg-white/5 cursor-pointer relative overflow-hidden"
            >
              <div className="relative z-10">
                <span className="block text-[10px] font-bold text-secondary mb-12 tracking-[0.2em]">{dept.id}</span>
                <h4 className="text-3xl mb-4 group-hover:text-secondary transition-colors duration-500">{dept.name}</h4>
                <p className="text-xs uppercase tracking-widest text-white/40 group-hover:text-white/60 transition-colors duration-500 font-bold">{dept.focus}</p>
                
                <div className="mt-8 aspect-video img-reveal opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-lg">
                  <img src={dept.image} alt={dept.name} className="w-full h-full object-cover" />
                </div>
              </div>
              
              <ArrowUpRight className="absolute top-12 right-12 text-white/10 group-hover:text-secondary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" size={32} />
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
            href="/departments" 
            className="group flex items-center gap-4 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] px-8 py-4 md:px-10 md:py-5 border border-white/20 hover:border-secondary transition-all duration-500 rounded-full"
          >
            <span>View All Departments</span>
            <div className="w-8 h-px bg-white/20 group-hover:bg-secondary group-hover:w-12 transition-all duration-500" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
