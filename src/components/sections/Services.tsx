"use client";

import { motion } from "framer-motion";

const SERVICES = [
  {
    title: "Radiology",
    desc: "Advanced imaging and precision diagnostic services for accurate clinical assessment.",
    image: "/carmel_dept/Radiology-580x360.webp",
  },
  {
    title: "Dialysis",
    desc: "Dedicated personal care and monitoring for kidney health in a specialized environment.",
    image: "/carmel_dept/Dialysis-580x360.webp",
  },
  {
    title: "Pharmacy",
    desc: "Round-the-clock availability of essential medicines and specialized pharmaceutical care.",
    image: "/carmel_dept/Pharmacy-580x360.webp",
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-background border-b border-primary/5">
      <div className="container-custom">
        <div className="max-w-3xl mb-24">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary text-xs font-bold uppercase tracking-[0.3em] mb-8"
          >
            Capabilities
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl leading-[1.2]"
          >
            Infrastructure designed <br />
            for <span className="opacity-80">recovery.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 1 }}
              className="group"
            >
              <div className="img-reveal aspect-[16/10] mb-8 border-thin shadow-md">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-2xl mb-4 font-serif">{service.title}</h4>
              <p className="text-sm text-foreground/60 leading-relaxed font-light">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
