import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Reveal } from './motion/Reveal';
import { CALENDLY_URL } from '../lib/constants';

const features = [
  '200+ payment connectors',
  'PCI DSS Level 1 compliance',
  'White-label dashboards',
  'Smart routing engine',
  'Multi-cloud deployment',
  'E-commerce plugins',
  'KYC/KYB workflows',
  'Dedicated engineering support',
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-section px-6 md:px-12 lg:px-20 border-b border-border bg-canvas relative z-10">
      <div className="max-w-3xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tighter mb-6 leading-[1.1]">
            Transparent Pricing
          </h2>
          <p className="text-base font-medium text-gray-600 leading-relaxed">
            One-time setup, per-transaction thereafter. No hidden fees.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
        <div className="bg-obsidian text-white p-8 md:p-10 rounded-xl shadow-2xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="font-mono text-[10px] font-semibold text-accent uppercase tracking-[0.1em]">Setup + Transaction</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-white/10">
            <div>
              <div className="text-sm text-white/50 mb-2">One-time setup fee</div>
              <div className="text-2xl font-semibold text-white">Custom</div>
              <div className="text-sm text-white/60 mt-1">Based on system type and configuration</div>
            </div>
            <div>
              <div className="text-sm text-white/60 mb-2">Per transaction</div>
              <div className="text-2xl font-semibold text-white">Volume-based</div>
              <div className="text-sm text-white/60 mt-1">Scales with your transaction volume</div>
            </div>
          </div>

          <div className="mb-8">
            <div className="text-sm font-semibold text-white/60 mb-4">Everything included</div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm text-white/80">
                  <Check size={14} className="text-accent flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring group w-full py-3.5 rounded text-sm font-semibold transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] bg-white text-obsidian hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2"
          >
            Book a Demo
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Pricing;
