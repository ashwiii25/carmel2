import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Departments } from "@/components/sections/Departments";
import { Services } from "@/components/sections/Services";
import { Doctors } from "@/components/sections/Doctors";
import { Emergency } from "@/components/sections/Emergency";
import { Accreditations } from "@/components/sections/Accreditations";
import { Testimonials } from "@/components/sections/Testimonials";
import { News } from "@/components/sections/News";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative">
      {/* Sections */}
      <Hero />
      <About />
      <Departments />
      <Services />
      <Doctors />
      <Emergency />
      <Accreditations />
      <Testimonials />
      <News />
      <Contact />
    </main>
  );
}
