"use client";

import { motion } from "framer-motion";

const NEWS = [
  {
    title: "New Cardiology Wing",
    category: "Hospital News",
    date: "OCT 2023",
  },
  {
    title: "Community Health Initiative",
    category: "Community",
    date: "SEP 2023",
  },
  {
    title: "Advancements in Robotic Surgery",
    category: "Clinical Insights",
    date: "AUG 2023",
  },
];

export function News() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h3 className="text-secondary text-xs font-bold uppercase tracking-[0.3em] mb-8">Journal</h3>
            <h2 className="text-5xl md:text-7xl leading-[0.95]">
              Medical <br /><span className="italic font-light opacity-60">Insights.</span>
            </h2>
          </motion.div>
        </div>

        <div className="flex flex-col border-t border-primary/10">
          {NEWS.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group py-10 md:py-16 border-b border-primary/10 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:bg-surface transition-colors duration-500 cursor-pointer"
            >
              <div className="flex items-center gap-12 md:w-1/4">
                <span className="text-[10px] font-bold text-foreground/30 font-mono tracking-widest">{article.date}</span>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-secondary py-1 px-3 border border-secondary/20 rounded-full">{article.category}</span>
              </div>
              
              <h4 className="text-3xl md:text-4xl font-serif group-hover:text-primary transition-colors duration-500 md:w-2/3">
                {article.title}
              </h4>
              
              <div className="md:w-12 h-12 flex items-center justify-center border border-primary/10 rounded-full group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <span className="text-lg">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
