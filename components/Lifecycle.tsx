import React, { useRef, useEffect, useState } from 'react';
import { MessageSquare, Code, Cloud, Shield } from 'lucide-react';
import { LifecycleStep } from '../types';

const steps: LifecycleStep[] = [
  {
    id: '01',
    threshold: 0.1,
    label: '01 Discovery',
    title: 'Consultation',
    desc: 'We analyze your requirements and design a customized Hyperswitch solution.',
    content: (
      <div className="bg-white border border-gray-200 p-3 rounded shadow-sm inline-flex items-center gap-3">
        <div className="w-8 h-8 bg-canvas rounded flex items-center justify-center border border-gray-200">
          <MessageSquare size={14} className="text-accent" />
        </div>
        <span className="text-xs font-medium text-gray-900">
          Requirements gathered
        </span>
      </div>
    )
  },
  {
    id: '02',
    threshold: 0.28,
    label: '02 Build',
    title: 'Customization',
    desc: 'Build features, configure connectors, develop custom services.',
    content: (
      <div className="bg-white border border-gray-200 p-3 rounded shadow-sm inline-flex items-center gap-3">
        <div className="w-8 h-8 bg-canvas rounded flex items-center justify-center border border-gray-200">
          <Code size={14} className="text-gray-600" />
        </div>
        <div>
          <div className="text-[10px] text-gray-600">Features</div>
          <div className="text-xs font-bold text-gray-900">Tailored to you</div>
        </div>
      </div>
    )
  },
  {
    id: '03',
    threshold: 0.46,
    label: '03 Deploy',
    title: 'Deployment',
    desc: 'Sandbox and production environments deployed with Terraform on your cloud.',
    content: (
      <div className="bg-white border border-gray-200 p-3 rounded shadow-sm inline-flex items-center gap-3">
        <div className="w-8 h-8 bg-canvas rounded flex items-center justify-center border border-gray-200">
          <Cloud size={14} className="text-gray-600" />
        </div>
        <div>
          <div className="text-[10px] text-gray-600">Your Cloud</div>
          <div className="text-xs font-bold text-gray-900">AWS / GCP / Azure</div>
        </div>
      </div>
    )
  },
  {
    id: '04',
    threshold: 0.64,
    label: '04 Certify',
    title: 'PCI Compliance',
    desc: 'Get PCI DSS compliant in 20 days with our official vendor.',
    content: (
      <div className="bg-white border border-gray-200 p-3 rounded shadow-sm inline-flex items-center gap-2">
        <Shield size={14} className="text-accent" />
        <span className="text-xs font-semibold text-gray-900">
          PCI DSS Certified
        </span>
      </div>
    )
  },
  {
    id: '05',
    threshold: 0.82,
    label: '05 Launch',
    title: 'Go Live & Iterate',
    desc: 'CI/CD configured, weekly sprints, dedicated team for feature requests.',
    content: (
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-obsidian text-white text-xs font-semibold shadow-lg shadow-obsidian/20">
        <span>Production Ready</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </span>
    )
  }
];

const Lifecycle: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewH = window.innerHeight;
      const travelDistance = rect.height - viewH;
      const scrolled = -rect.top;

      let p = scrolled / travelDistance;
      p = Math.max(0, Math.min(1, p));
      setProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="relative w-full bg-canvas border-b border-border/60" style={{ height: '400vh' }}>
      <div className="sticky top-0 left-0 w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        <div className="max-w-4xl w-full px-6 md:px-12 relative z-10 flex flex-col items-center h-full py-12 lg:py-16">

          <div
            className={`text-center mb-6 lg:mb-10 shrink-0 transition-opacity duration-700 ${progress > 0.02 ? 'opacity-100' : 'opacity-0'}`}
          >
            <h2 className="font-sans text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-4 leading-[1.1]">
              Our Process
            </h2>
            <p className="text-base font-medium text-gray-600 leading-relaxed max-w-2xl mx-auto">
              A dedicated team of qualified professionals to customize, deploy, and maintain your self-hosted payment infrastructure.
            </p>
          </div>

          <div className="relative w-full max-w-2xl flex-1 flex flex-col justify-center">
            {/* Vertical Lines */}
            <div className="absolute left-1/2 top-2 bottom-2 w-px bg-border/60 -translate-x-1/2"></div>
            <div
              className="absolute left-1/2 top-2 w-px bg-obsidian -translate-x-1/2 transition-all duration-75 ease-linear h-0 max-h-[calc(100%-1rem)]"
              style={{ height: `${progress * 100}%` }}
            ></div>

            <div className="space-y-8 lg:space-y-12 py-4 relative">
              {steps.map((step, idx) => {
                 const isActive = progress >= step.threshold;
                 const isPassed = progress >= step.threshold + 0.15;

                 const isContentLeft = idx % 2 === 1;

                 return (
                  <div
                    key={step.id}
                    className={`group flex items-center justify-between w-full transition-all duration-500 ${isActive ? (isPassed ? 'opacity-50 scale-100' : 'opacity-100 scale-125') : 'opacity-30 scale-100'}`}
                  >
                    <div className="w-[42%] text-right pr-8">
                       {isContentLeft ? step.content : (
                         <>
                            <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider block mb-1">{step.label}</span>
                            <h3 className="font-sans text-base font-semibold text-gray-900">{step.title}</h3>
                            <p className="font-sans text-sm font-medium text-gray-600 leading-relaxed mt-1 hidden md:block">{step.desc}</p>
                         </>
                       )}
                    </div>

                    <div className="relative shrink-0 z-10">
                      <div className={`w-3 h-3 rounded-full border bg-canvas transition-all duration-300 ${isActive ? 'border-obsidian bg-obsidian' : 'border-border'}`}></div>
                    </div>

                    <div className="w-[42%] pl-8">
                       {isContentLeft ? (
                         <>
                            <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider block mb-1">{step.label}</span>
                            <h3 className="font-sans text-base font-semibold text-gray-900">{step.title}</h3>
                            <p className="font-sans text-sm font-medium text-gray-600 leading-relaxed mt-1 hidden md:block">{step.desc}</p>
                         </>
                       ) : step.content}
                    </div>
                  </div>
                 )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lifecycle;
