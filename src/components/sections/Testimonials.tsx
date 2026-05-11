"use client";

import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Sarah Varghese",
    text: "The clinical precision and emotional support I received here transformed my recovery journey. A truly humane institution.",
  },
  {
    name: "Rahul Menon",
    text: "In a critical moment, their rapid response and advanced trauma care saved my father's life. We are eternally grateful.",
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-secondary text-xs font-bold uppercase tracking-[0.3em] mb-12"
          >
            Testimonials
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 text-left">
            {TESTIMONIALS.map((t, index) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 1 }}
                className="flex flex-col gap-8"
              >
                <div className="text-4xl text-secondary font-serif leading-none">“</div>
                <p className="text-2xl font-serif italic text-foreground/80 leading-relaxed">
                  {t.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-12 bg-secondary/30" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
