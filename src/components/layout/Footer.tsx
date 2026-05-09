import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-24 bg-primary text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 mb-24">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-8">
              <img 
                src="/carmel_dept/main_logo-1-scaled.webp" 
                alt="Carmel Hospital Logo" 
                className="h-16 w-auto object-contain" 
              />
            </Link>
            <p className="text-white/40 text-xs tracking-widest leading-relaxed max-w-[200px]">
              Estd. 1998. Committed to excellence in medical care and human compassion.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm font-light text-white/60">
              <li><Link href="/about" className="hover:text-white transition-colors">Legacy</Link></li>
              <li><Link href="/departments" className="hover:text-white transition-colors">Expertise</Link></li>
              <li><Link href="/doctors" className="hover:text-white transition-colors">Specialists</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Infrastructure</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary mb-8">Specialities</h4>
            <ul className="space-y-4 text-sm font-light text-white/60">
              <li><Link href="/departments/cardiology" className="hover:text-white transition-colors">Cardiology</Link></li>
              <li><Link href="/departments/nephrology" className="hover:text-white transition-colors">Nephrology</Link></li>
              <li><Link href="/departments/orthopaedics" className="hover:text-white transition-colors">Orthopaedics</Link></li>
              <li><Link href="/departments/general-surgery" className="hover:text-white transition-colors">General Surgery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary mb-8">Contact</h4>
            <div className="text-sm font-light text-white/60 space-y-2">
              <p>Ashokapuram P.O, Aluva,</p>
              <p>Ernakulam, Kerala</p>
              <p className="pt-4 text-white font-medium">+91 484 290 1000</p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 text-[9px] uppercase tracking-[0.2em] font-bold text-white/20">
          <p>© {new Date().getFullYear()} Carmel Hospital. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
