import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata = {
  title: 'Services | SaiyoniX',
  description: 'High-performance engineering units for elite enterprise ecosystems.',
};

const SERVICES = [
  {
    n: "01",
    t: "Intelligent Infrastructure",
    p: "Cloud-native, edge-optimized systems built for zero-downtime scale. We design the compute, networking, and storage layers that your operations depend on — with zero tolerance for fragility.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    unit: "Infrastructure Unit"
  },
  {
    n: "02",
    t: "Connected Ecosystems",
    p: "API platforms and integration layers that bind disconnected systems into one intelligent, synchronized whole. We specialize in eliminating silos across complex enterprise environments.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000",
    unit: "Integration Unit"
  },
  {
    n: "03",
    t: "AI-Assisted Workflows",
    p: "Automation pipelines and ML-ops frameworks that reduce operational load and amplify decision-making precision. We embed AI as a fundamental operational layer, not just a feature.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000",
    unit: "Intelligence Unit"
  },
  {
    n: "04",
    t: "Enterprise Architecture",
    p: "System design at the organizational level. We work with technical leadership to design scalable, secure architectures that align with operational reality — future-proofed and built to grow.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000",
    unit: "Strategic Unit"
  },
  {
    n: "05",
    t: "Custom Mobile Applications",
    p: "High-performance, cross-platform mobile systems engineered for complex enterprise needs. We build mobile logic that handles real-time data sync, offline reliability, and defense-grade security.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000",
    unit: "Mobile Systems Unit"
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-bg">
      <div className="pt-28 md:pt-[160px] pb-16 md:pb-[120px] max-w-[1360px] mx-auto px-6 md:px-[80px]">
        <header className="mb-16 md:mb-[80px]">
          <ScrollReveal className="inline-flex items-center gap-[10px] font-mono text-[10.5px] tracking-[.25em] uppercase text-(--amber) mb-[20px] md:mb-[24px] before:content-[''] before:w-[22px] before:h-[1px] before:bg-(--amber)">
            Capabilities
          </ScrollReveal>
          
          <ScrollReveal delayClass="d1" className="font-display text-4xl sm:text-5xl md:text-[clamp(42px,5.5vw,78px)] font-extrabold leading-[1.02] tracking-tight mt-[8px] mb-[24px] md:mb-[32px] max-w-[850px]">
            Engineering the logic<br />of <span className="text-(--amber)">modern industry.</span>
          </ScrollReveal>
          
          <ScrollReveal delayClass="d2" className="text-[16px] sm:text-[18px] md:text-[20px] text-text-1 leading-[1.7] max-w-[620px] font-medium">
            We don&apos;t sell services. We deploy specialized engineering units to solve complex systems-level challenges. From core infrastructure to mobile interfaces, every line is precise.
          </ScrollReveal>
        </header>
        
        <div className="space-y-20 md:space-y-[160px]">
          {SERVICES.map((s, i) => (
            <div key={s.n} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-24 items-center`}>
              {/* Content Side */}
              <div className="flex-1 space-y-6 md:space-y-8 w-full">
                <ScrollReveal className="font-mono text-[10px] md:text-[11px] tracking-[.3em] uppercase text-text-3">
                  {s.n} // {s.unit}
                </ScrollReveal>
                
                <ScrollReveal delayClass="d1">
                  <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 md:mb-6">
                    {s.t}
                  </h2>
                  <p className="text-[15px] md:text-[18px] text-text-2 leading-relaxed max-w-xl">
                    {s.p}
                  </p>
                </ScrollReveal>

                <ScrollReveal delayClass="d2" className="pt-2 md:pt-4">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-3 text-(--amber) font-mono text-[10px] md:text-xs uppercase tracking-widest group"
                  >
                    Discuss Deployment 
                    <span className="w-8 h-px bg-(--amber)/30 group-hover:w-12 transition-all duration-500" />
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </ScrollReveal>
              </div>

              {/* Image Side */}
              <ScrollReveal delayClass="d3" className="flex-1 w-full relative group mt-8 lg:mt-0">
                <div className="absolute -inset-4 bg-(--amber)/5 blur-[80px] rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-700 hidden lg:block" />
                <div className="relative aspect-[16/10] lg:aspect-[1.4/1] rounded-[24px] md:rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
                  <Image 
                    src={s.img} 
                    alt={s.t} 
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="w-full h-full object-cover brightness-[0.5] contrast-[1.1] saturate-[0.4] group-hover:scale-105 group-hover:brightness-[0.8] group-hover:saturate-[0.8] transition-all duration-1000"
                    priority={i < 2}
                  />
                  {/* Decorative glass overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-bg via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 px-3 py-1.5 md:px-4 md:py-2 backdrop-blur-md bg-white/5 border border-white/10 rounded-full font-mono text-[8px] md:text-[9px] tracking-widest text-white/50 uppercase">
                    Status: Active Unit
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-[80px] pb-16 md:pb-[120px]">
        <ScrollReveal className="bg-surface-1 border border-white/10 rounded-[24px] md:rounded-[40px] p-8 sm:p-12 md:p-[80px] text-center relative overflow-hidden">
          <div className="absolute top-[-50px] md:top-[-100px] left-1/2 -translate-x-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-(--amber)/5 rounded-full blur-[80px] md:blur-[120px] -z-10" />
          
          <div className="inline-flex items-center justify-center gap-2 md:gap-[10px] font-mono text-[9px] md:text-[11px] tracking-[.2em] md:tracking-[.25em] uppercase text-(--amber) mb-6 md:mb-[32px] before:content-[''] before:w-[16px] md:before:w-[22px] before:h-[1px] before:bg-(--amber) after:content-[''] after:w-[16px] md:after:w-[22px] after:h-[1px] after:bg-(--amber)">
            Mission Briefing
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-[52px] font-bold leading-[1.05] tracking-tight mb-6 md:mb-[28px] text-white">
            Not sure which unit<br/>fits your architecture?
          </h2>
          
          <p className="text-[15px] sm:text-[16px] md:text-[19px] text-text-1 leading-[1.7] max-w-[600px] mx-auto mb-8 md:mb-[48px]">
            Most of our best engagements began with a technical brief about a system failure or a scaling bottleneck. Tell us what you&apos;re facing.
          </p>
          
          <div className="flex justify-center">
            <Link href="/contact" className="w-full sm:w-auto">
               <button className="w-full sm:w-auto bg-(--amber) text-[#060608] rounded-xl py-4 md:py-5 px-8 md:px-14 font-bold text-sm md:text-base transition-all hover:bg-(--amber-light) hover:-translate-y-1 shadow-xl shadow-(--amber)/10">
                 Talk to an engineer →
               </button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
