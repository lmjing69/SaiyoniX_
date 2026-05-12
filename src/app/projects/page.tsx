import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata = {
  title: 'Projects | SaiyoniX',
  description: 'Systems engineered. Problems eliminated.',
};

export default function ProjectsPage() {
  return (
    <>
      <div className="pt-28 md:pt-[160px] pb-16 md:pb-[120px] max-w-[1360px] mx-auto px-6 md:px-[80px]">
        <ScrollReveal className="inline-flex items-center gap-[10px] font-mono text-[10.5px] tracking-[.16em] uppercase text-(--amber) mb-[20px] before:content-[''] before:w-[22px] before:h-px before:bg-(--amber)">
          Projects
        </ScrollReveal>
        
        <ScrollReveal delayClass="d1" className="font-display text-4xl sm:text-5xl md:text-[clamp(42px,5vw,72px)] font-extrabold leading-[1.04] tracking-[-.035em] mt-[8px] mb-[40px] md:mb-[72px] max-w-[680px]">
          Systems engineered.<br />Problems eliminated.
        </ScrollReveal>
        
        <div className="grid md:grid-cols-[1fr_1fr] gap-[24px]">
          {/* Featured Project */}
          <ScrollReveal className="bg-(--bg-2) border border-(--border) rounded-[12px] p-6 sm:p-8 md:p-[48px] relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between transition-colors duration-200 hover:border-(--border-md) hover:bg-(--bg-3) group col-span-full gap-8 lg:gap-4">
            <div className="w-full lg:w-auto">
              <div className="font-mono text-[11px] font-medium tracking-[.08em] uppercase text-(--text-3) mb-[12px]">
                ● Infrastructure · 2024
              </div>
              <h3 className="font-display text-[24px] sm:text-[28px] font-bold tracking-[-.015em] mb-[16px]">
                NexusGrid — Global Edge Orchestration
              </h3>
              <p className="text-[14.5px] text-(--text-2) leading-[1.6] max-w-[520px]">
                A distributed infrastructure platform managing 12,000+ edge nodes across 34 regions for a global logistics enterprise. Reduced deployment latency by 78% while maintaining full operational autonomy at the node level. Serves 2.4M requests/second at peak load with 99.99% uptime.
              </p>
            </div>
            <div className="w-full lg:w-[320px] h-[180px] bg-(--bg-1) border border-(--border) rounded-[8px] flex items-center justify-center relative shrink-0">
              <div className="flex flex-col items-center gap-[12px] text-[48px] text-(--amber) leading-none">
                ⬡
                <div className="font-mono text-[11px] tracking-widest uppercase text-(--text-3)">NexusGrid v2.4</div>
              </div>
            </div>
            <div className="absolute top-4 right-4 md:top-[24px] md:right-[24px] text-[18px] text-(--text-3) transition-all duration-200 group-hover:text-(--amber) group-hover:translate-x-[3px] group-hover:-translate-y-[3px]">↗</div>
          </ScrollReveal>

          {/* Project 2 */}
          <ScrollReveal delayClass="d1" className="bg-(--bg-2) border border-(--border) rounded-[12px] p-6 md:p-[32px] relative overflow-hidden flex flex-col justify-between transition-colors duration-200 hover:border-(--border-md) hover:bg-(--bg-3) group">
            <div>
              <div className="font-mono text-[11px] font-medium tracking-[.08em] uppercase text-(--text-3) mb-[12px]">
                ● AI Systems · 2024
              </div>
              <h3 className="font-display text-[20px] font-bold tracking-[-.01em] mb-[10px]">
                ArcOS — Autonomous Operations
              </h3>
              <p className="text-[14.5px] text-(--text-2) leading-[1.6]">
                AI-driven workflow automation for a 2,400-person healthcare organization. 60% reduction in manual operational overhead. Handles 14,000+ daily clinical workflow events autonomously.
              </p>
            </div>
            <div className="absolute top-4 right-4 md:top-[24px] md:right-[24px] text-[18px] text-(--text-3) transition-all duration-200 group-hover:text-(--amber) group-hover:translate-x-[3px] group-hover:-translate-y-[3px]">↗</div>
          </ScrollReveal>

          {/* Project 3 */}
          <ScrollReveal delayClass="d2" className="bg-(--bg-2) border border-(--border) rounded-[12px] p-6 md:p-[32px] relative overflow-hidden flex flex-col justify-between transition-colors duration-200 hover:border-(--border-md) hover:bg-(--bg-3) group">
            <div>
              <div className="font-mono text-[11px] font-medium tracking-[.08em] uppercase text-(--text-3) mb-[12px]">
                ● Architecture · 2023
              </div>
              <h3 className="font-display text-[20px] font-bold tracking-[-.01em] mb-[10px]">
                VaultLayer — Enterprise Data Mesh
              </h3>
              <p className="text-[14.5px] text-(--text-2) leading-[1.6]">
                Multi-tenant data architecture connecting 18 internal systems into a unified operational mesh with real-time sync, unified access control, and zero-copy query federation.
              </p>
            </div>
            <div className="absolute top-4 right-4 md:top-[24px] md:right-[24px] text-[18px] text-(--text-3) transition-all duration-200 group-hover:text-(--amber) group-hover:translate-x-[3px] group-hover:-translate-y-[3px]">↗</div>
          </ScrollReveal>

          {/* Project 4 */}
          <ScrollReveal className="bg-(--bg-2) border border-(--border) rounded-[12px] p-6 md:p-[32px] relative overflow-hidden flex flex-col justify-between transition-colors duration-200 hover:border-(--border-md) hover:bg-(--bg-3) group">
            <div>
              <div className="font-mono text-[11px] font-medium tracking-[.08em] uppercase text-(--text-3) mb-[12px]">
                ● Ecosystems · 2023
              </div>
              <h3 className="font-display text-[20px] font-bold tracking-[-.01em] mb-[10px]">
                SyncBridge — Government Integration Layer
              </h3>
              <p className="text-[14.5px] text-(--text-2) leading-[1.6]">
                API integration layer connecting 7 municipal government departments. Eliminated 4,000+ hours/month of manual data reconciliation work across agencies.
              </p>
            </div>
            <div className="absolute top-4 right-4 md:top-[24px] md:right-[24px] text-[18px] text-(--text-3) transition-all duration-200 group-hover:text-(--amber) group-hover:translate-x-[3px] group-hover:-translate-y-[3px]">↗</div>
          </ScrollReveal>

          {/* Project 5 */}
          <ScrollReveal delayClass="d1" className="bg-(--bg-2) border border-(--border) rounded-[12px] p-6 md:p-[32px] relative overflow-hidden flex flex-col justify-between transition-colors duration-200 hover:border-(--border-md) hover:bg-(--bg-3) group">
            <div>
              <div className="font-mono text-[11px] font-medium tracking-[.08em] uppercase text-(--text-3) mb-[12px]">
                ● Infrastructure · 2023
              </div>
              <h3 className="font-display text-[20px] font-bold tracking-[-.01em] mb-[10px]">
                ClearPath — Education OS
              </h3>
              <p className="text-[14.5px] text-(--text-2) leading-[1.6]">
                Intelligent operations platform for a 40,000-student university network. Unified 12 separate systems into one coherent administrative and academic ecosystem.
              </p>
            </div>
            <div className="absolute top-4 right-4 md:top-[24px] md:right-[24px] text-[18px] text-(--text-3) transition-all duration-200 group-hover:text-(--amber) group-hover:translate-x-[3px] group-hover:-translate-y-[3px]">↗</div>
          </ScrollReveal>
        </div>
      </div>
    </>
  );
}
