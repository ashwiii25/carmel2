import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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
    <main className="min-h-screen relative selection:bg-secondary selection:text-primary">
      <Header />
      
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
      
      <Footer />
    </main>
  );
}
