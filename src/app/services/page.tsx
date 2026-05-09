import { CinematicHero } from "@/components/shared/CinematicHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  { 
    title: "Diagnostic Imaging", 
    kicker: "Precision",
    desc: "Advanced MRI, CT, and Ultrasound technology for absolute diagnostic clarity.",
    image: "/carmel_dept/Radiology-580x360.webp"
  },
  { 
    title: "Critical Care Units", 
    kicker: "Emergency",
    desc: "State-of-the-art ICU, MICU, and NICU wings with 24/7 monitoring.",
    image: "/carmel_dept/Intensive-Care-Units-580x360.webp"
  },
  { 
    title: "Rehabilitation", 
    kicker: "Recovery",
    desc: "Comprehensive physiotherapy and post-surgical recovery programs.",
    image: "/carmel_dept/Physiotherapy-580x360.webp"
  },
  { 
    title: "Laboratory Services", 
    kicker: "Diagnostics",
    desc: "NABL-accredited pathology and microbiology laboratory services.",
    image: "/carmel_dept/Hematology-Lab-580x360.webp"
  },
  { 
    title: "24/7 Pharmacy", 
    kicker: "Care",
    desc: "Round-the-clock access to authentic medications and clinical supplies.",
    image: "/carmel_dept/Pharmacy-580x360.webp"
  },
  { 
    title: "Neonatal Care", 
    kicker: "Specialized",
    desc: "Dedicated care for newborns with advanced NICU support systems.",
    image: "/carmel_dept/NICU-580x360.webp"
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-background pt-32">
      <CinematicHero 
        title="Infrastructure for Better Outcomes."
        subtitle="Explore our advanced medical facilities and patient support services designed for comfort and precision."
        image="/carmel_dept/Intensive-Care-Units-580x360.webp"
        breadcrumbs={[{ label: "Infrastructure" }]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader 
            kicker="Patient Care"
            title="Comprehensive medical facilities."
            description="Our infrastructure is designed to support the highest standards of clinical care, from emergency response to long-term rehabilitation."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SERVICES.map((svc) => (
              <div key={svc.title} className="group">
                <div className="img-reveal rounded-2xl aspect-video mb-8 overflow-hidden">
                  <img 
                    src={svc.image} 
                    alt={svc.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <span className="block text-[9px] font-black uppercase tracking-[0.3em] text-secondary mb-4">{svc.kicker}</span>
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-500">{svc.title}</h3>
                <p className="text-sm font-light text-foreground/60 leading-relaxed mb-6">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <SectionHeader 
                kicker="The Standard"
                title="International-level medical setup."
                className="mb-12"
              />
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  "Modular Operation Theatres",
                  "Advanced Cath Lab",
                  "24/7 Trauma Care",
                  "Dialysis Center",
                  "Digital Radiology",
                  "Post-Op Recovery Wings"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4 text-sm font-light text-white/60">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 p-12 rounded-2xl border border-white/10 flex flex-col justify-center">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary mb-6">Patient Support</h4>
              <h3 className="text-2xl font-bold mb-8">Committed to your comfort.</h3>
              <p className="text-lg font-light text-white/60 mb-12 leading-relaxed">
                We provide premium patient suites, round-the-clock nursing care, and dedicated assistance for international and domestic patients.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] border-b border-white/20 pb-2 hover:border-white transition-all w-fit"
              >
                Inquire about Facilities <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
