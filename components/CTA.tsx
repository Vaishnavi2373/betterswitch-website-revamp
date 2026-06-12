import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './motion/Reveal';
import { CALENDLY_URL } from '../lib/constants';

const CTA: React.FC = () => {
  return (
    <section className="py-section px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] via-transparent to-accent/[0.06] pointer-events-none" aria-hidden="true" />

      <Reveal className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-sans text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-6 leading-[1.1]">
          Ready to Launch?
        </h2>
        <p className="text-base font-medium text-gray-600 leading-relaxed max-w-xl mx-auto mb-10">
          Tell us what you need. We scope your system type, configure your connectors, and deploy to your cloud. You go live.
        </p>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring group inline-flex items-center gap-2 bg-accent text-white text-sm font-semibold px-10 py-4 rounded shadow-[0_8px_24px_-6px_rgba(226,117,51,0.35)] hover:bg-accent-hover hover:shadow-[0_12px_32px_-8px_rgba(226,117,51,0.45)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          <span>Book a Demo</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </Reveal>
    </section>
  );
};

export default CTA;
