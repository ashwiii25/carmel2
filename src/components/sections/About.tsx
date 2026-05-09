"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="z-10 relative"
            >
              <h3 className="text-secondary text-xs font-bold uppercase tracking-[0.3em] mb-8">Our Legacy</h3>
              <h2 className="text-4xl md:text-7xl lg:text-8xl mb-12 leading-[1.1]">
                A story of <span className="opacity-80">healing</span> and hope.
              </h2>
              <div className="space-y-8 text-foreground/70 font-light text-lg leading-relaxed">
                <p>
                  Since its inception, Carmel Hospital has been more than just a medical facility. It is a testament to the belief that every life is precious and deserves the highest standard of care.
                </p>
                <p>
                  Our journey in Aluva is defined by thousands of lives touched, families healed, and a community served with unwavering commitment. We blend heritage with innovation to deliver healthcare that is as advanced as it is personal.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-12 gap-6 relative">
            {/* Asymmetrical Image Grid - Full Color */}
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="col-span-8 aspect-[4/5] img-reveal border-thin shadow-xl"
            >
              <img 
                src="/hero_slideshow/ey-doctors-in-discussion-in-hospital.webp" 
                alt="Hospital Excellence"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: -20 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="col-span-4 mt-24 aspect-[3/4] img-reveal border-thin shadow-xl"
            >
              <img 
                src="/carmel_dept/Managing-Board-580x360.webp" 
                alt="Managing Board"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
