import { getDepartmentBySlug, departments } from "@/data/departments";
import { getDoctorsByDepartment } from "@/data/doctors";
import { CinematicHero } from "@/components/shared/CinematicHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ArrowRight, User } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return departments.map((dept) => ({
    slug: dept.slug,
  }));
}

export default async function DepartmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const dept = getDepartmentBySlug(slug);

  if (!dept) {
    notFound();
  }

  const doctorsInDept = getDoctorsByDepartment(dept.slug);

  return (
    <main className="bg-background">
      <CinematicHero 
        title={dept.name}
        subtitle={dept.desc}
        image={dept.image}
        breadcrumbs={[
          { label: "Departments", href: "/departments" },
          { label: dept.name }
        ]}
      />

      {/* Overview Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-24">
            <div>
              <SectionHeader 
                kicker="Overview"
                title={`Advanced ${dept.name} services.`}
                description={dept.fullDesc}
              />

              <div className="grid sm:grid-cols-2 gap-12 mt-16">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary mb-6">Key Procedures</h4>
                  <ul className="space-y-4">
                    {dept.procedures.map((proc) => (
                      <li key={proc} className="flex items-start gap-4 text-sm font-light text-foreground/70">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                        {proc}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary mb-6">Facilities</h4>
                  <ul className="space-y-4">
                    {dept.facilities.map((fac) => (
                      <li key={fac} className="flex items-start gap-4 text-sm font-light text-foreground/70">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        {fac}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <aside className="space-y-12">
              <div className="bg-primary p-8 md:p-12 rounded-2xl text-white">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary mb-6">Inquiry</h4>
                <h3 className="text-2xl font-bold mb-8">Need more information?</h3>
                <p className="text-white/60 font-light mb-12 leading-relaxed">
                  Our care coordinators are available 24/7 to help you with department-specific queries.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-block text-[11px] font-bold uppercase tracking-[0.3em] border-b border-white/20 pb-2 hover:border-white transition-all"
                >
                  Contact Department
                </Link>
              </div>

              <div className="border border-primary/5 p-12 rounded-2xl">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary mb-6">Availability</h4>
                <p className="text-xl font-bold text-primary mb-2">Mon — Sat</p>
                <p className="text-sm font-light text-foreground/40">8:00 AM — 8:00 PM</p>
                <div className="mt-8 pt-8 border-t border-primary/5">
                  <p className="text-red-500 text-[10px] font-black uppercase tracking-[0.2em]">24/7 Emergency Support</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      {doctorsInDept.length > 0 && (
        <section className="section-padding bg-primary/5">
          <div className="container-custom">
            <SectionHeader 
              kicker="Specialists"
              title={`Consult with our ${dept.name} experts.`}
              description={`Our ${dept.name} team consists of board-certified clinicians with decades of collective experience.`}
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {doctorsInDept.map((doc) => (
                <Link 
                  key={doc.id}
                  href={`/doctors/${doc.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden border border-primary/5 hover:border-secondary/20 transition-all duration-500"
                >
                  <div className="aspect-square overflow-hidden transition-all duration-700">
                    <img 
                      src={doc.image} 
                      alt={doc.name} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <h4 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-500">
                      {doc.name}
                    </h4>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40">
                      {doc.speciality}
                    </p>
                    <div className="mt-8 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-primary/40 group-hover:text-primary transition-colors">
                      View Profile <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="section-padding bg-background text-center">
        <div className="container-custom">
          <SectionHeader 
            kicker="Next Steps"
            title="Book your consultation today."
            align="center"
          />
          <div className="flex flex-wrap items-center justify-center gap-12">
            <a 
              href="tel:+914842901000" 
              className="text-[11px] font-bold uppercase tracking-[0.3em] border-b border-primary/10 pb-2 hover:border-primary transition-all"
            >
              Call Appointment Desk
            </a>
            <Link 
              href="/doctors" 
              className="text-[11px] font-bold uppercase tracking-[0.3em] border-b border-primary/10 pb-2 hover:border-primary transition-all"
            >
              Browse All Specialists
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
