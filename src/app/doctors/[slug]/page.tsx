import { getDoctorBySlug, doctors } from "@/data/doctors";
import { getDepartmentBySlug } from "@/data/departments";
import { CinematicHero } from "@/components/shared/CinematicHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, Globe, GraduationCap, Award, ArrowRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return doctors.map((doc) => ({
    slug: doc.slug,
  }));
}

export default async function DoctorProfilePage({ params }: Props) {
  const { slug } = await params;
  const doc = getDoctorBySlug(slug);

  if (!doc) {
    notFound();
  }

  const dept = getDepartmentBySlug(doc.departmentSlug);

  return (
    <main className="bg-background">
      <CinematicHero 
        title={doc.name}
        subtitle={`${doc.speciality} · ${doc.experience} Experience`}
        image={dept?.image || "/carmel_bg.jpg"}
        breadcrumbs={[
          { label: "Doctors", href: "/doctors" },
          { label: doc.name }
        ]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[380px_1fr] xl:grid-cols-[420px_1fr] gap-12 lg:gap-16 xl:gap-24 items-start">
            {/* Sidebar / Info Card - appears below main content on mobile */}
            <aside className="order-2 lg:order-1 lg:sticky lg:top-32">
              <div className="bg-primary/5 p-8 md:p-12 rounded-2xl border border-primary/5">
                <div className="mb-10 relative w-full aspect-square md:aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
                  <Image 
                    src={doc.image} 
                    alt={doc.name} 
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 420px"
                    priority
                  />
                </div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary mb-12">Consultation</h4>
                
                <div className="space-y-12">
                  <div className="flex gap-6">
                    <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 mb-2">Timing</p>
                      <p className="text-lg font-bold text-primary">{doc.consultationHours}</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <Globe className="w-5 h-5 text-secondary flex-shrink-0" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 mb-2">Languages</p>
                      <p className="text-lg font-bold text-primary">{doc.languages.join(", ")}</p>
                    </div>
                  </div>

                  {dept && (
                    <div className="flex gap-6">
                      <Calendar className="w-5 h-5 text-secondary flex-shrink-0" />
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 mb-2">Department</p>
                        <Link 
                          href={`/departments/${dept.slug}`}
                          className="text-lg font-bold text-primary border-b border-primary/10 hover:border-primary transition-all"
                        >
                          {dept.name}
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </aside>

            {/* Main Content */}
            <div className="order-1 lg:order-2 max-w-3xl w-full">
              <SectionHeader 
                kicker="About the Specialist"
                title={`Expertise rooted in ${doc.speciality}.`}
                description={doc.bio.split('\n\n')[0]}
              />
              {doc.bio.split('\n\n').length > 1 && (
                <div className="mt-6 space-y-4">
                  {doc.bio.split('\n\n').slice(1).map((para, i) => (
                    <p key={i} className="text-base font-light text-foreground/60 leading-relaxed">{para}</p>
                  ))}
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-16 mt-24">
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-secondary" />
                    </div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Academic Credentials</h4>
                  </div>
                  <ul className="space-y-4">
                    {doc.qualifications.map((qual) => (
                      <li key={qual} className="text-lg font-light text-foreground/60 leading-relaxed">
                        {qual}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-secondary" />
                    </div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Experience Profile</h4>
                  </div>
                  <p className="text-lg font-light text-foreground/60 leading-relaxed">
                    With over {doc.experience} of dedicated practice, {doc.name} has been a cornerstone of the medical community, specializing in advanced {doc.speciality.toLowerCase()} care.
                  </p>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-24 p-8 border-l-2 border-secondary/20 bg-secondary/5 rounded-r-xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary mb-2">Notice</p>
                <p className="text-xs font-light text-foreground/60 leading-relaxed">
                  Consultation timings are subject to change. Please contact the hospital helpdesk to confirm availability before visiting. Emergency cases take priority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="section-padding bg-primary text-white overflow-hidden relative">
        <div className="container-custom relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 text-center md:text-left">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Looking for a different specialist?</h2>
            <p className="text-lg font-light text-white/60">Our team includes over 50 board-certified clinicians across various specialities.</p>
          </div>
          <Link 
            href="/doctors" 
            className="inline-flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] border-b border-white/20 pb-2 hover:border-white transition-all whitespace-nowrap"
          >
            Browse Directory <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] -z-0" />
      </section>
    </main>
  );
}
