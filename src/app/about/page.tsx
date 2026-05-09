import { CinematicHero } from "@/components/shared/CinematicHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import Link from "next/link";

const VALUES = [
  { 
    title: "Compassion", 
    kicker: "01",
    desc: "At the heart of every procedure and interaction is a deep-rooted empathy for the human experience." 
  },
  { 
    title: "Precision", 
    kicker: "02",
    desc: "Merging world-class expertise with advanced medical technology to deliver unmatched diagnostic accuracy." 
  },
  { 
    title: "Legacy", 
    kicker: "03",
    desc: "Over 25 years of steadfast commitment to the health and well-being of the Aluva community." 
  },
  { 
    title: "Integrity", 
    kicker: "04",
    desc: "Upholding the highest ethical standards in medical practice, transparency, and patient advocacy." 
  },
];

export default function AboutPage() {
  return (
    <main className="bg-background pt-32">
      <CinematicHero 
        title="A Legacy of Human Care & Medical Excellence."
        subtitle="Discover the story behind Aluva's premier medical institution — where advanced science meets the warmth of healing."
        image="/carmel_dept/Managing-Board-580x360.webp"
        breadcrumbs={[{ label: "Legacy" }]}
      />

      {/* Philosophy Section */}
      <section className="section-padding overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <SectionHeader 
              kicker="Our Philosophy"
              title="Healing is not just a science, it's a commitment to life."
              description="Founded in 1998, Carmel Hospital was born from a vision to provide international-standard healthcare accessible to all. We believe in treating the person, not just the symptom."
            />
            
            <div className="relative">
              <div className="img-reveal rounded-2xl aspect-[4/5] shadow-2xl">
                <img 
                  src="/carmel_dept/Nursing-Department-580x360.webp" 
                  alt="Nursing Excellence" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-padding bg-primary/5">
        <div className="container-custom">
          <SectionHeader 
            kicker="Our Foundation"
            title="Values that define our standard."
            align="center"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {VALUES.map((val, idx) => (
              <div key={val.title} className="group">
                <span className="block text-[10px] font-black tracking-[0.3em] text-secondary mb-6">{val.kicker}</span>
                <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-secondary transition-colors duration-500">{val.title}</h3>
                <p className="text-sm font-light leading-relaxed text-foreground/60">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline placeholder */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl">
            <SectionHeader 
              kicker="The Journey"
              title="Tracing our path through milestones."
            />
            
            <div className="space-y-24 relative pt-8">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-primary/10" />
              
              <div className="pl-12 relative">
                <div className="absolute left-[-4px] top-2 w-2 h-2 bg-secondary rounded-full" />
                <span className="block text-[10px] font-black tracking-[0.3em] text-secondary mb-2">1998</span>
                <h4 className="text-2xl font-bold mb-4 text-primary">Foundation Stone</h4>
                <p className="text-lg font-light text-foreground/60">Carmel Hospital opens its doors as a 50-bed multi-speciality center in Aluva.</p>
              </div>

              <div className="pl-12 relative">
                <div className="absolute left-[-4px] top-2 w-2 h-2 bg-secondary rounded-full" />
                <span className="block text-[10px] font-black tracking-[0.3em] text-secondary mb-2">2005</span>
                <h4 className="text-2xl font-bold mb-4 text-primary">Advanced Cardiac Wing</h4>
                <p className="text-lg font-light text-foreground/60">Introduction of state-of-the-art Cath Lab and critical cardiac care facilities.</p>
              </div>

              <div className="pl-12 relative">
                <div className="absolute left-[-4px] top-2 w-2 h-2 bg-secondary rounded-full" />
                <span className="block text-[10px] font-black tracking-[0.3em] text-secondary mb-2">2018</span>
                <h4 className="text-2xl font-bold mb-4 text-primary">Robotic Surgery Integration</h4>
                <p className="text-lg font-light text-foreground/60">Achieved a milestone in precision surgery with the integration of robotic assistance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white text-center overflow-hidden relative">
        <div className="container-custom relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-tight leading-tight">
            Ready to experience a <br /> new standard of care?
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-12">
            <Link 
              href="/contact" 
              className="text-[11px] font-bold uppercase tracking-[0.3em] border-b border-white/20 pb-2 hover:border-white transition-all"
            >
              Get in Touch
            </Link>
            <Link 
              href="/doctors" 
              className="text-[11px] font-bold uppercase tracking-[0.3em] border-b border-white/20 pb-2 hover:border-white transition-all"
            >
              Consult a Specialist
            </Link>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] -z-0" />
      </section>
    </main>
  );
}
