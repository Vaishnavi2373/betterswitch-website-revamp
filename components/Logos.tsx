import React from 'react';
import { partnerLogos } from '../lib/constants';

const Logos: React.FC = () => {
  const items = [...partnerLogos, ...partnerLogos];

  return (
    <section className="border-y border-gray-200/60 py-12 bg-white relative z-20 overflow-hidden" aria-label="Trusted by">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider text-center mb-8">
          Trusted by
        </p>
        <div className="relative">
          <div className="flex gap-16 animate-marquee whitespace-nowrap">
            {items.map((partner, i) => (
              <a
                key={`${partner.name}-${i}`}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`focus-ring ${partner.style} text-lg font-bold text-gray-700 tracking-tight hover:text-accent transition-colors shrink-0`}
              >
                {partner.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
          width: max-content;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee { animation: none; flex-wrap: wrap; justify-content: center; white-space: normal; width: 100%; gap: 2rem 3rem; }
        }
      `}</style>
    </section>
  );
};

export default Logos;
