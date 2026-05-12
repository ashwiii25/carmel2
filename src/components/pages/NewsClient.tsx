"use client";

import { CinematicHero } from "@/components/shared/CinematicHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ARTICLES } from "@/data/news";

export function NewsClient() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const getScrollAmount = () => {
    if (!scrollRef.current) {
      return 400;
    }

    const container = scrollRef.current;
    const firstCard = container.querySelector<HTMLElement>("[data-news-card]");
    const cardWidth = firstCard?.clientWidth ?? 400;
    const gapValue = getComputedStyle(container).gap || getComputedStyle(container).columnGap || "0";
    const gap = Number.parseFloat(gapValue) || 0;

    return cardWidth + gap;
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
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
          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end mb-16">
            <SectionHeader 
              kicker="The Pulse"
              title="Latest from our medical desk."
              description="Expert perspectives on health, innovation, and community well-being."
              className="mb-0 max-w-2xl"
            />

            <div className="flex items-center gap-3 md:justify-end">
              <button 
                onClick={scrollLeft}
                className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={scrollRight}
                className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 sm:gap-8 lg:gap-10 pb-12 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-10 lg:px-10 scroll-px-4 md:scroll-px-8 lg:scroll-px-10"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {ARTICLES.map((art, idx) => (
              <motion.div 
                key={art.title} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="w-[88vw] sm:w-[70vw] md:w-[48vw] lg:w-[32vw] xl:w-[26vw] snap-start flex-shrink-0 h-full"
                data-news-card
              >
                <Link href={`/news/${art.slug}`} className="group flex h-full flex-col cursor-pointer">
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
                  
                  <div className="mt-auto flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] text-primary group-hover:text-secondary transition-colors duration-500">
                    <span>Read Full Article</span>
                    <div className="w-8 h-px bg-primary/20 group-hover:bg-secondary group-hover:w-12 transition-all duration-500" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
