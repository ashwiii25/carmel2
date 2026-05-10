"use client";

import { CinematicHero } from "@/components/shared/CinematicHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

const ARTICLES = [
  {
    title: "Understanding Cardiovascular Health in the Digital Age",
    category: "Medical Insights",
    date: "May 10, 2026",
    desc: "How modern lifestyles are impacting heart health and the steps we can take to mitigate risks through technology and prevention.",
    image: "/hero_slideshow/pexels-cedric-fauntleroy-4270086.webp"
  },
  {
    title: "The Future of Minimally Invasive Surgery",
    category: "Innovation",
    date: "April 28, 2026",
    desc: "An inside look at how robotic assistance and advanced laparoscopy are reducing recovery times and improving patient outcomes.",
    image: "/hero_slideshow/ey-doctors-in-discussion-in-hospital.webp"
  },
  {
    title: "Compassionate Care: The Heart of Nursing at Carmel",
    category: "Hospital Life",
    date: "April 15, 2026",
    desc: "Celebrating the dedicated nursing staff who bring healing and comfort to our patients every single day.",
    image: "/hero_slideshow/pexels-imadclicks-14558557.webp"
  },
  {
    title: "Pediatric Wellness: A Guide for New Parents",
    category: "Family Health",
    date: "March 30, 2026",
    desc: "Essential tips for infant health management and understanding the developmental milestones of early childhood.",
    image: "/hero_slideshow/eb-website-image-hero-3840x2560.webp"
  }
];

export function NewsClient() {
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
          <SectionHeader 
            kicker="The Pulse"
            title="Latest from our medical desk."
            description="Expert perspectives on health, innovation, and community well-being."
          />

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 mt-16 md:mt-24">
            {ARTICLES.map((art, idx) => (
              <motion.div 
                key={art.title} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="img-reveal rounded-3xl aspect-video overflow-hidden mb-12 shadow-2xl border-thin">
                  <img 
                    src={art.image} 
                    alt={art.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                
                <div className="flex items-center gap-6 mb-8">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">{art.category}</span>
                  <div className="flex items-center gap-3 text-[10px] font-bold text-foreground/20 uppercase tracking-[0.2em]">
                    <Calendar className="w-3.5 h-3.5" />
                    {art.date}
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-6 md:mb-8 group-hover:text-secondary transition-colors duration-500 leading-tight tracking-tight">
                  {art.title}
                </h3>
                
                <p className="text-lg font-light text-foreground/60 leading-relaxed mb-10">
                  {art.desc}
                </p>
                
                <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] text-primary group-hover:text-secondary transition-colors duration-500">
                  <span>Read Full Article</span>
                  <div className="w-8 h-px bg-primary/20 group-hover:bg-secondary group-hover:w-12 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 pt-24 border-t border-primary/5 text-center">
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
