import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Text content */}
      <div className="px-6 md:px-12 lg:px-20 pt-16 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white border border-border/60 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              <span className="font-sans text-[11px] font-semibold text-gray-600 uppercase tracking-[0.08em]">
                Payment Systems as a Service
              </span>
            </div>
            <h1 className="font-sans text-5xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-tighter text-obsidian leading-[0.92]">
              <span className="block">Launch Your</span>
              <span className="block">Payment Company</span>
              <span className="block text-accent">in a Day</span>
            </h1>
            <p className="max-w-xl mx-auto font-sans text-base md:text-lg font-medium text-gray-500 leading-relaxed">
              White-label platform with 200+ payment connectors. Deploy a PCI-compliant Orchestrator, Merchant of Record, Facilitator, or Gateway on your own infrastructure.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="https://calendly.com/biz-betterswitch/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative isolate overflow-hidden bg-accent text-white text-sm font-semibold px-8 py-3.5 rounded shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.03] hover:bg-accent-hover hover:shadow-[0_12px_32px_-8px_rgba(226,117,51,0.4)] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-accent/20 focus:ring-offset-2 flex items-center gap-2"
              >
                <div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent z-0 pointer-events-none"></div>
                <span className="relative z-10">Book a Demo</span>
                <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#solutions"
                className="font-sans text-sm font-semibold text-obsidian hover:text-accent transition-colors flex items-center gap-1.5 px-4 py-3.5"
              >
                Explore Solutions
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard preview */}
      <div className="relative px-6 md:px-16 lg:px-24 mt-4">
        <div className="max-w-6xl mx-auto" style={{ perspective: '2000px' }}>
          <div
            className="relative rounded-t-xl overflow-hidden border border-border/80 border-b-0 shadow-[0_-2px_12px_-4px_rgba(0,0,0,0.03),0_20px_60px_-15px_rgba(0,0,0,0.15)]"
            style={{ transform: 'rotateX(2.5deg)', transformOrigin: 'bottom center' }}
          >
            <img
              src="/dashboard-preview.png"
              alt="BetterSwitch payment dashboard showing transaction analytics, connected providers, and real-time monitoring"
              className="w-full h-auto block"
              width={1440}
              height={770}
              loading="eager"
              fetchPriority="high"
            />
            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-canvas to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
