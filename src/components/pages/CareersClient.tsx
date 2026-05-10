"use client";

import { CinematicHero } from "@/components/shared/CinematicHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Briefcase, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const JOBS = [
  {
    title: "Senior Consultant — Cardiology",
    type: "Full Time",
    location: "Aluva, Kerala",
    experience: "10+ Years"
  },
  {
    title: "Registered Nurse — ICU Wing",
    type: "Full Time",
    location: "Aluva, Kerala",
    experience: "2+ Years"
  },
  {
    title: "Laboratory Technician",
    type: "Full Time",
    location: "Aluva, Kerala",
    experience: "3+ Years"
  },
  {
    title: "Front Desk Coordinator",
    type: "Full Time",
    location: "Aluva, Kerala",
    experience: "1+ Years"
  }
];

export function CareersClient() {
  return (
    <main className="bg-background">
      <CinematicHero 
        title="Join the Mission of Care."
        subtitle="We're looking for dedicated medical professionals and support staff who share our commitment to excellence and compassion."
        image="/hero_slideshow/ey-doctors-in-discussion-in-hospital.webp"
        breadcrumbs={[{ label: "Careers" }]}
        actions={[
          { label: "View Openings", href: "#open-roles" }
        ]}
      />

      <section id="open-roles" className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr_340px] gap-12 lg:gap-24">
            <div>
              <SectionHeader 
                kicker="Opportunities"
                title="Open positions at Carmel."
                description="Join a team where your expertise meets a legacy of human compassion. We offer competitive growth opportunities and a supportive clinical environment."
              />

              <div className="space-y-6 mt-16">
                {JOBS.map((job, idx) => (
                  <motion.div 
                    key={job.title} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group p-8 rounded-3xl bg-white border border-primary/5 hover:border-secondary/20 transition-all duration-500 hover:shadow-2xl cursor-pointer"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-500">{job.title}</h3>
                        <div className="flex flex-wrap gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40">
                          <span className="flex items-center gap-2">
                            <Briefcase className="w-3 h-3" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-2">
                            <MapPin className="w-3 h-3" />
                            {job.location}
                          </span>
                          <span>{job.experience} Exp.</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.2em] text-primary group-hover:text-secondary transition-colors">
                        Apply Now <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <aside>
              <div className="bg-primary/5 p-8 md:p-12 rounded-3xl border border-primary/5 lg:sticky lg:top-32">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary mb-12">Culture</h4>
                <h3 className="text-2xl font-bold mb-8 text-primary">Why work with us?</h3>
                <ul className="space-y-8">
                  <li className="space-y-3">
                    <p className="text-sm font-bold text-primary">Continuous Learning</p>
                    <p className="text-xs font-light text-foreground/60 leading-relaxed">Regular training sessions and access to international medical journals.</p>
                  </li>
                  <li className="space-y-3">
                    <p className="text-sm font-bold text-primary">Modern Infrastructure</p>
                    <p className="text-xs font-light text-foreground/60 leading-relaxed">Work with the latest diagnostic and therapeutic technology.</p>
                  </li>
                  <li className="space-y-3">
                    <p className="text-sm font-bold text-primary">Supportive Environment</p>
                    <p className="text-xs font-light text-foreground/60 leading-relaxed">A culture of collaboration, mutual respect, and patient-first ethics.</p>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CV Upload Section */}
      <section className="section-padding bg-primary text-white text-center">
        <div className="container-custom">
          <SectionHeader 
            kicker="General Application"
            title="Don't see a matching role?"
            align="center"
            className="mb-12"
          />
          <p className="text-lg font-light text-white/60 mb-12 max-w-xl mx-auto leading-relaxed">
            We're always looking for talent. Send your CV to our HR department and we'll keep you in mind for future openings.
          </p>
          <a 
            href="mailto:hr@carmelhospital.in" 
            className="inline-block text-[11px] font-bold uppercase tracking-[0.3em] border-b border-white/20 pb-2 hover:border-white transition-all"
          >
            Send CV to hr@carmelhospital.in
          </a>
        </div>
      </section>
    </main>
  );
}
