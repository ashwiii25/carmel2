"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-secondary text-xs font-bold uppercase tracking-[0.3em] mb-8">Access</h3>
            <h2 className="text-5xl md:text-7xl leading-[1.1] mb-12">
              Visit our <br /><span className="italic font-light opacity-60">campus.</span>
            </h2>
            
            <div className="space-y-16">
              <div className="flex gap-8">
                <MapPin className="text-secondary shrink-0" size={24} />
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40 mb-4">Location</h4>
                  <p className="text-xl font-serif text-foreground/70 leading-relaxed">
                    Ashokapuram P.O, Aluva,<br />Ernakulam, Kerala - 683101
                  </p>
                </div>
              </div>

              <div className="flex gap-8">
                <Phone className="text-secondary shrink-0" size={24} />
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40 mb-4">Contact</h4>
                  <p className="text-xl font-serif text-foreground/70 leading-relaxed">
                    +91 484 290 1000<br />+91 9496 000 000
                  </p>
                </div>
              </div>

              <div className="flex gap-8">
                <Mail className="text-secondary shrink-0" size={24} />
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40 mb-4">Inquiries</h4>
                  <p className="text-xl font-serif text-foreground/70 leading-relaxed">
                    info@carmelhosp.org<br />admin@carmelhosp.org
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="aspect-[4/5] img-reveal border-thin shadow-2xl"
          >
            <img 
              src="/carmel_dept/Intensive-Care-Units-580x360.webp" 
              alt="Hospital Architecture"
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
