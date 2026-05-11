"use client";

import { CinematicHero } from "@/components/shared/CinematicHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { ARTICLES } from "@/data/news";

export function NewsClient() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <main className="bg-background">
      <CinematicHero 
        title="Medical Insights & Hospital News."
        subtitle="Stay updated with the latest advancements in healthcare, medical research, and stories from the heart of Carmel Hospital."
        image="/hero_slideshow/8c46e278d48667f791c5650e5e9548e128e758c2-3840x2560.webp"
        breadcrumbs={[{ label: "News" }]}
        actions={[
          { label: "Read Articles", href: "#latest-news" }
        ]}
      />

      <section id="latest-news" className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <SectionHeader 
              kicker="The Pulse"
              title="Latest from our medical desk."
              description="Expert perspectives on health, innovation, and community well-being."
            />
            
            <div className="flex items-center gap-4">
              <button 
                onClick={scrollLeft}
                className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={scrollRight}
                className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 md:gap-12 pb-12 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {ARTICLES.map((art, idx) => (
              <motion.div 
                key={art.title} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group cursor-pointer min-w-[85vw] md:min-w-[45vw] lg:min-w-[35vw] snap-start flex-shrink-0"
              >
                <div className="img-reveal rounded-3xl aspect-video overflow-hidden mb-8 shadow-2xl border-thin">
                  <img 
                    src={art.image} 
                    alt={art.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                
                <div className="flex items-center gap-6 mb-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">{art.category}</span>
                  <div className="flex items-center gap-3 text-[10px] font-bold text-foreground/20 uppercase tracking-[0.2em]">
                    <Calendar className="w-3.5 h-3.5" />
                    {art.date}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-500 leading-tight tracking-tight">
                  {art.title}
                </h3>
                
                <p className="text-base font-light text-foreground/60 leading-relaxed mb-8 line-clamp-3">
                  {art.desc}
                </p>
                
                <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] text-primary group-hover:text-secondary transition-colors duration-500">
                  <span>Read Full Article</span>
                  <div className="w-8 h-px bg-primary/20 group-hover:bg-secondary group-hover:w-12 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 pt-16 border-t border-primary/5 text-center">
            <button className="group flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] px-12 py-6 bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all duration-500 rounded-full mx-auto">
              <span>Load Older Articles</span>
              <div className="w-6 h-px bg-primary/20 group-hover:bg-white/20 group-hover:w-10 transition-all duration-500" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-primary text-white text-center overflow-hidden relative">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight leading-tight">Stay Informed.</h2>
            <p className="text-lg font-light text-white/60 mb-16 max-w-2xl mx-auto leading-relaxed">
              Subscribe to our monthly newsletter for curated health tips and hospital updates delivered to your inbox.
            </p>
            <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="flex-1 bg-white/5 border border-white/10 px-8 py-5 rounded-full text-white placeholder:text-white/30 focus:outline-none focus:border-secondary transition-all"
              />
              <button className="px-12 py-6 bg-secondary text-primary text-[11px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-white transition-all duration-500 shadow-2xl">
                Join Now
              </button>
            </form>
          </motion.div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] -z-0 opacity-50" />
      </section>
    </main>
  );
}
