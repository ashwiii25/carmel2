"use client";

import { motion } from "framer-motion";

const CERTIFICATIONS = [
  { id: "01", name: "NABH Accredited", desc: "Highest national standard for healthcare providers." },
  { id: "02", name: "NABL Certified", desc: "Clinical laboratory excellence and precision." },
  { id: "03", name: "ISO 9001:2015", desc: "Global quality management and operational systems." },
];

export function Accreditations() {
  return (
    <section className="py-24 bg-background border-b border-primary/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-center">
          <div className="md:col-span-1">
            <h3 className="text-secondary text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Certifications</h3>
            <h2 className="text-3xl font-serif leading-tight">Trust through <br /><span className="italic font-light opacity-60">excellence.</span></h2>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
            {CERTIFICATIONS.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col gap-4 border-l border-primary/10 pl-8"
              >
                <h4 className="text-lg font-serif">{cert.name}</h4>
                <p className="text-xs text-foreground/50 font-light leading-relaxed">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
