import { CinematicHero } from "@/components/shared/CinematicHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

const ARTICLES = [
  {
    title: "Understanding Cardiovascular Health in the Digital Age",
    category: "Medical Insights",
    date: "May 10, 2026",
    desc: "How modern lifestyles are impacting heart health and the steps we can take to mitigate risks through technology and prevention.",
    image: "/carmel_dept/Cardiology-580x360.webp"
  },
  {
    title: "The Future of Minimally Invasive Surgery",
    category: "Innovation",
    date: "April 28, 2026",
    desc: "An inside look at how robotic assistance and advanced laparoscopy are reducing recovery times and improving patient outcomes.",
    image: "/carmel_dept/General-Surgery-580x360.webp"
  },
  {
    title: "Compassionate Care: The Heart of Nursing at Carmel",
    category: "Hospital Life",
    date: "April 15, 2026",
    desc: "Celebrating the dedicated nursing staff who bring healing and comfort to our patients every single day.",
    image: "/carmel_dept/Nursing-Department-580x360.webp"
  },
  {
    title: "Pediatric Wellness: A Guide for New Parents",
    category: "Family Health",
    date: "March 30, 2026",
    desc: "Essential tips for infant health management and understanding the developmental milestones of early childhood.",
    image: "/carmel_dept/Paediatrics-580x360.webp"
  }
];

export default function NewsPage() {
  return (
    <main className="bg-background pt-32">
      <CinematicHero 
        title="Medical Insights & Hospital News."
        subtitle="Stay updated with the latest advancements in healthcare, medical research, and stories from the heart of Carmel Hospital."
        image="/carmel_dept/MICU-580x360.webp"
        breadcrumbs={[{ label: "News" }]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader 
            kicker="The Pulse"
            title="Latest from our medical desk."
            description="Expert perspectives on health, innovation, and community well-being."
          />

          <div className="grid md:grid-cols-2 gap-16 mt-24">
            {ARTICLES.map((art) => (
              <div key={art.title} className="group cursor-pointer">
                <div className="img-reveal rounded-2xl aspect-video overflow-hidden mb-12 shadow-xl">
                  <img 
                    src={art.image} 
                    alt={art.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                
                <div className="flex items-center gap-6 mb-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">{art.category}</span>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-foreground/20 uppercase tracking-widest">
                    <Calendar className="w-3 h-3" />
                    {art.date}
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-primary mb-6 group-hover:text-secondary transition-colors duration-500 leading-tight">
                  {art.title}
                </h3>
                
                <p className="text-lg font-light text-foreground/60 leading-relaxed mb-8">
                  {art.desc}
                </p>
                
                <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.2em] text-primary group-hover:text-secondary transition-colors">
                  Read Full Article <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 pt-24 border-t border-primary/5 text-center">
            <button className="px-12 py-5 bg-primary/5 text-primary text-[11px] font-bold uppercase tracking-[0.3em] rounded-full hover:bg-primary hover:text-white transition-all duration-500">
              Load Older Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-primary text-white text-center overflow-hidden relative">
        <div className="container-custom relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Stay Informed.</h2>
          <p className="text-lg font-light text-white/60 mb-12 max-w-xl mx-auto leading-relaxed">
            Subscribe to our monthly newsletter for curated health tips and hospital updates delivered to your inbox.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="flex-1 bg-white/10 border border-white/20 px-8 py-4 rounded-full text-white placeholder:text-white/40 focus:outline-none focus:border-secondary transition-colors"
            />
            <button className="px-8 py-4 bg-secondary text-primary text-[11px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-white transition-colors">
              Join
            </button>
          </form>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -z-0" />
      </section>
    </main>
  );
}
