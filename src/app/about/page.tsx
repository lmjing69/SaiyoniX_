import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata = {
  title: 'About | SaiyoniX',
  description: 'The philosophy and people behind SaiyoniX.',
};

export default function AboutPage() {
  return (
    <>
      <div className="pt-[160px] pb-[100px] max-w-[1360px] mx-auto px-[80px]">
        <ScrollReveal className="inline-flex items-center gap-[10px] font-mono text-[10.5px] tracking-[.16em] uppercase text-(--amber) mb-[20px] before:content-[''] before:w-[22px] before:h-[1px] before:bg-(--amber)">
          About Saiyonix
        </ScrollReveal>
        
        <ScrollReveal delayClass="d1" className="font-display text-[clamp(42px,5vw,72px)] font-extrabold leading-[1.04] tracking-[-.035em] mt-[8px] mb-[60px] max-w-[720px]">
          We are not building apps.<br />We are engineering the future.
        </ScrollReveal>
        
        <div className="grid grid-cols-[1fr_1fr] gap-[80px]">
          <div>
            <ScrollReveal className="flex flex-wrap gap-[10px] mb-[32px]">
              <span className="bg-(--bg-2) border border-(--border) rounded-[6px] px-[12px] py-[6px] font-mono text-[10.5px] tracking-[.06em] uppercase text-(--text-3)">Intelligent Systems</span>
              <span className="bg-(--bg-2) border border-(--border) rounded-[6px] px-[12px] py-[6px] font-mono text-[10.5px] tracking-[.06em] uppercase text-(--text-3)">Enterprise-grade</span>
              <span className="bg-(--bg-2) border border-(--border) rounded-[6px] px-[12px] py-[6px] font-mono text-[10.5px] tracking-[.06em] uppercase text-(--text-3)">Precision Engineering</span>
            </ScrollReveal>
            
            <ScrollReveal delayClass="d1" className="text-[16px] text-(--text-2) leading-[1.72] mb-[20px]">
              Saiyonix represents a singular idea: that the world&apos;s most critical systems &mdash; <strong className="font-semibold text-(--text-1)">schools, hospitals, governments, enterprises</strong> &mdash; deserve the same level of engineering precision and intelligence that powers the most advanced technology companies on earth.
            </ScrollReveal>
            
            <ScrollReveal delayClass="d2" className="text-[16px] text-(--text-2) leading-[1.72] mb-[20px]">
              We are a systems engineering company at our core. We don&apos;t arrive with templates or pre-packaged solutions. We arrive with <strong className="font-semibold text-(--text-1)">architectural thinking, engineering precision, and an obsession</strong> with making complex systems simpler, smarter, and more connected.
            </ScrollReveal>
            
            <ScrollReveal delayClass="d3" className="text-[16px] text-(--text-2) leading-[1.72] mb-[32px]">
              Our work is defined by restraint, intentionality, and excellence. Every system we touch becomes more intelligent after we leave it.
            </ScrollReveal>
            
            <ScrollReveal delayClass="d4">
              <Link href="/contact" className="bg-(--amber) text-[#060608] rounded-[8px] py-[13px] px-[28px] font-body text-[14px] font-semibold inline-flex items-center gap-[8px] transition-[background,transform] duration-[150ms] hover:bg-(--amber-light) hover:-translate-y-[1px] mt-[8px]">
                Work with us →
              </Link>
            </ScrollReveal>
          </div>
          
          <ScrollReveal className="flex flex-col gap-[16px]">
            {/* Card 1 */}
            <div className="bg-(--bg-2) border border-(--border) rounded-[12px] p-[28px] transition-colors duration-200 hover:border-(--border-md) hover:bg-(--bg-3)">
              <div className="w-[36px] h-[36px] bg-(--amber-bg) border border-(--amber-rim) rounded-[8px] flex items-center justify-center text-[16px] text-(--amber) mb-[16px]">⬡</div>
              <div className="font-display text-[17px] font-bold tracking-[-.015em] mb-[8px]">Systems Thinking</div>
              <div className="text-[13.5px] text-(--text-3) leading-[1.6]">Every solution is designed as part of a larger architecture, never in isolation.</div>
            </div>
            {/* Card 2 */}
            <div className="bg-(--bg-2) border border-(--border) rounded-[12px] p-[28px] transition-colors duration-200 hover:border-(--border-md) hover:bg-(--bg-3)">
              <div className="w-[36px] h-[36px] bg-(--amber-bg) border border-(--amber-rim) rounded-[8px] flex items-center justify-center text-[16px] text-(--amber) mb-[16px]">◈</div>
              <div className="font-display text-[17px] font-bold tracking-[-.015em] mb-[8px]">Deep Integration</div>
              <div className="text-[13.5px] text-(--text-3) leading-[1.6]">We connect the disconnected. APIs, pipelines, protocols — everything speaks.</div>
            </div>
            {/* Card 3 */}
            <div className="bg-(--bg-2) border border-(--border) rounded-[12px] p-[28px] transition-colors duration-200 hover:border-(--border-md) hover:bg-(--bg-3)">
              <div className="w-[36px] h-[36px] bg-(--amber-bg) border border-(--amber-rim) rounded-[8px] flex items-center justify-center text-[16px] text-(--amber) mb-[16px]">⚙</div>
              <div className="font-display text-[17px] font-bold tracking-[-.015em] mb-[8px]">Intelligent Automation</div>
              <div className="text-[13.5px] text-(--text-3) leading-[1.6]">We reduce operational friction through precision-engineered automation layers.</div>
            </div>
            {/* Card 4 */}
            <div className="bg-(--bg-2) border border-(--border) rounded-[12px] p-[28px] transition-colors duration-200 hover:border-(--border-md) hover:bg-(--bg-3)">
              <div className="w-[36px] h-[36px] bg-(--amber-bg) border border-(--amber-rim) rounded-[8px] flex items-center justify-center text-[16px] text-(--amber) mb-[16px]">▦</div>
              <div className="font-display text-[17px] font-bold tracking-[-.015em] mb-[8px]">Enterprise Precision</div>
              <div className="text-[13.5px] text-(--text-3) leading-[1.6]">Built to specification. Tested to limits. Deployed to last.</div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* PHILOSOPHY */}
      <div className="bg-(--bg-2) border-y border-(--border) mt-[60px]">
        <div className="max-w-[1360px] mx-auto px-8 md:px-[80px] py-[100px]">
          <div className="grid lg:grid-cols-[1fr_450px] gap-[80px] items-center">
            <div>
              <ScrollReveal className="inline-flex items-center gap-[10px] font-mono text-[10.5px] tracking-[.16em] uppercase text-(--amber) mb-[32px] before:content-[''] before:w-[22px] before:h-[1px] before:bg-(--amber)">
                Our Mission
              </ScrollReveal>
              
              <ScrollReveal delayClass="d1" className="font-display text-[42px] md:text-[52px] font-extrabold leading-[1.05] tracking-[-.02em] mb-[32px]">
                Making complex systems<br/>
                <span className="text-(--amber)">simpler, smarter,</span><br/>
                and connected.
              </ScrollReveal>
              
              <div className="max-w-[640px]">
                <ScrollReveal delayClass="d2" className="text-[18px] text-(--text-2) leading-[1.72] mb-[24px]">
                  The deeper meaning of Saiyonix is this: the world is made of systems — and <strong className="font-semibold text-(--text-1)">most of them are failing silently</strong>. Not with catastrophic collapses, but with daily friction, wasted capacity, and missed potential.
                </ScrollReveal>
                <ScrollReveal delayClass="d3" className="text-[18px] text-(--text-2) leading-[1.72]">
                  We measure success not by lines of code shipped or features launched, but by the <strong className="font-semibold text-(--text-1)">reduction of operational chaos</strong> in the organizations we work with. Every engagement ends with systems that breathe easier, operate smarter, and scale further.
                </ScrollReveal>
              </div>
            </div>

            <ScrollReveal delayClass="d4" className="relative group hidden lg:block">
              <div className="absolute -inset-4 bg-(--amber)/5 blur-[60px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden border border-white/10 shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                  fill
                  sizes="450px"
                  priority
                  className="w-full h-full object-cover brightness-75 saturate-[0.8] group-hover:scale-105 transition-transform duration-1000"
                  alt="Connected digital infrastructure"
                />
                <div className="absolute inset-0 bg-linear-to-t from-bg via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8 right-8 p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-[16px]">
                  <div className="font-mono text-[9px] tracking-[.2em] uppercase text-(--amber) mb-2">Systems Architecture</div>
                  <div className="text-[13px] text-white/90 font-medium leading-snug">Visualizing the silent efficiency of a perfectly synchronized network.</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* SYSTEMS PORTFOLIO */}
      <div className="max-w-[1360px] mx-auto px-8 md:px-[80px] py-[120px]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-[80px] gap-8">
          <div className="max-w-[600px]">
            <ScrollReveal className="inline-flex items-center gap-[10px] font-mono text-[10.5px] tracking-[.16em] uppercase text-(--amber) mb-[20px] before:content-[''] before:w-[22px] before:h-[1px] before:bg-(--amber)">
              Internal Builds & Deployments
            </ScrollReveal>
            <ScrollReveal delayClass="d1" className="font-display text-[32px] md:text-[44px] font-extrabold leading-[1.1] tracking-tight">
              Real systems, engineered for <span className="text-(--amber)">tangible performance.</span>
            </ScrollReveal>
          </div>
          <ScrollReveal delayClass="d2" className="text-[14px] text-(--text-3) max-w-[320px] md:text-right leading-relaxed">
            A selection of architectures we have architected and deployed into production environments.
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { t: "Secure Backend Core", p: "High-concurrency data processing engine with multi-layer encryption.", img: "https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=2000&auto=format&fit=crop" },
            { t: "Enterprise API Platform", p: "Scalable middleware connecting distributed legacy systems.", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop" },
            { t: "Operational Dashboard", p: "Real-time monitoring system for infrastructure health and sync status.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop" },
          ].map((item, i) => (
            <ScrollReveal 
              key={item.t} 
              delayClass={i === 0 ? "" : i === 1 ? "d1" : "d2"}
              className="group"
            >
              <div className="relative aspect-[16/10] rounded-[20px] overflow-hidden border border-white/10 bg-(--bg-1) mb-6">
                <Image 
                  src={item.img} 
                  alt={item.t} 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="w-full h-full object-cover brightness-[0.5] contrast-[1.2] saturate-[0.4] group-hover:brightness-[0.8] group-hover:saturate-[0.8] transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-linear-to-t from-bg via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[20px] pointer-events-none" />
              </div>
              <h3 className="font-display text-[18px] font-bold text-(--text-1) mb-2">{item.t}</h3>
              <p className="text-[13.5px] text-(--text-3) leading-relaxed max-w-[320px]">{item.p}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-[1360px] mx-auto px-[80px] pb-[120px]">
        <ScrollReveal className="bg-(--bg-2) border border-(--border) rounded-[24px] p-[64px] text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[linear-gradient(90deg,transparent,var(--amber),transparent)] opacity-40" />
          <div className="flex justify-center mb-[20px]">
            <div className="inline-flex items-center justify-center gap-[10px] font-mono text-[10.5px] tracking-[.16em] uppercase text-(--amber) before:content-[''] before:w-[22px] before:h-[1px] before:bg-(--amber) after:content-[''] after:w-[22px] after:h-[1px] after:bg-(--amber)">
              Join us
            </div>
          </div>
          <h2 className="font-display text-[44px] font-bold leading-[1.05] tracking-[-.025em] mb-[20px]">
            Ready to engineer<br/>something real?
          </h2>
          <p className="text-[16px] text-(--text-2) leading-[1.72] max-w-[500px] mx-auto mb-[36px]">
            Whether you&apos;re an enterprise, an institution, or a builder with a systems-level problem — we want to hear from you.
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="bg-(--amber) text-[#060608] rounded-[8px] py-[13px] px-[28px] font-body text-[14px] font-semibold inline-flex items-center gap-[8px] transition-[background,transform] duration-[150ms] hover:bg-(--amber-light) hover:-translate-y-[1px]">
              Start the conversation →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </>
  );
}
