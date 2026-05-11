"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Calendar, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ARTICLES } from "@/data/news";

export function News() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 400;
      scrollRef.current.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 400;
      scrollRef.current.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
    }
  };

  return (
    <section id="latest-news" className="section-padding overflow-hidden bg-muted/30">
      <div className="container-custom">
        <div className="mb-12 lg:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 lg:gap-8">
            <div className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-secondary mb-4"
              >
                The Pulse
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-primary"
              >
                Latest News.
              </motion.h2>
            </div>
            
            <div className="flex items-center gap-3 shrink-0 mt-4 sm:mt-0">
              <button 
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-primary transition-all duration-300"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </button>
              <button 
                onClick={scrollRight}
                disabled={!canScrollRight}
                className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-primary transition-all duration-300"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-foreground/60 leading-relaxed mt-4 max-w-2xl"
          >
            Expert perspectives on health, innovation, and community well-being.
          </motion.p>
        </div>

        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex overflow-x-auto gap-6 md:gap-8 pb-12 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 md:-mx-12 md:px-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ARTICLES.map((art, idx) => (
            <motion.div 
              key={art.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="w-[85vw] sm:w-[340px] md:w-[380px] lg:w-[420px] snap-start shrink-0"
            >
              <Link href={`/news/${art.slug}`} className="group relative flex flex-col h-full bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(48,101,181,0.12)] transition-all duration-500 border border-primary/5">
                
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                  <img 
                    src={art.image} 
                    alt={art.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute top-5 left-5">
                     <span className="bg-white/95 backdrop-blur-md text-primary text-[9px] font-bold uppercase tracking-widest py-2 px-4 rounded-full shadow-sm">
                       {art.category}
                     </span>
                  </div>
                </div>
                
                <div className="p-6 md:p-8 flex flex-col grow">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-foreground/40 uppercase tracking-widest mb-4">
                    <Calendar className="w-3.5 h-3.5" />
                    {art.date}
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-500 leading-snug line-clamp-2">
                    {art.title}
                  </h3>
                  
                  <p className="text-sm md:text-base font-light text-foreground/60 leading-relaxed mb-8 line-clamp-3">
                    {art.desc}
                  </p>
                  
                  <div className="mt-auto flex items-center gap-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-primary group-hover:text-secondary transition-colors duration-500">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/BMW-ANNUAL-REPORT-2022.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-primary/20 px-5 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white max-w-full break-words text-center leading-snug"
          >
            BMW-ANNUAL-REPORT-2022.pdf
          </a>
        </div>
      </div>
    </section>
  );
}
