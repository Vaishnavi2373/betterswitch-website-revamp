import React from 'react';
import { partnerLogos } from '../lib/constants';

const DodoPaymentsLogo: React.FC = () => (
  <div className="flex items-center gap-2 text-gray-400 hover:text-[#FF6B35] transition-colors duration-300">
    <svg className="w-5 h-5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
    <span className="font-sans font-bold text-base tracking-tight text-current">dodo payments</span>
  </div>
);

const VaulteraLogo: React.FC = () => (
  <div className="flex items-center gap-2 text-gray-400 hover:text-[#3B82F6] transition-colors duration-300">
    <svg className="w-4.5 h-4.5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
    <span className="font-sans font-black text-base tracking-wider text-current">VAULTERA</span>
  </div>
);

const PesaSwapLogo: React.FC = () => (
  <div className="flex items-center gap-2 text-gray-400 hover:text-[#10B981] transition-colors duration-300">
    <svg className="w-5 h-5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 1l4 4-4 4" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <path d="M7 23l-4-4 4-4" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
    <span className="font-sans font-semibold text-base tracking-tight text-current">PesaSwap</span>
  </div>
);

const PaycodeLogo: React.FC = () => (
  <div className="flex items-center gap-2 text-gray-400 hover:text-[#F59E0B] transition-colors duration-300">
    <svg className="w-4.5 h-4.5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
    <span className="font-mono font-bold text-base tracking-tight text-current">paycode</span>
  </div>
);

const partnerLogoComponents: Record<string, React.ReactNode> = {
  dodopayments: <DodoPaymentsLogo />,
  VAULTERA: <VaulteraLogo />,
  PesaSwap: <PesaSwapLogo />,
  paycode: <PaycodeLogo />,
};

const Logos: React.FC = () => {
  const items = [...partnerLogos, ...partnerLogos];

  return (
    <section className="border-y border-gray-200/60 py-12 bg-white relative z-20 overflow-hidden" aria-label="Trusted by">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider text-center mb-8">
          Trusted by
        </p>
        <div className="relative">
          <div className="flex gap-16 animate-marquee whitespace-nowrap items-center">
            {items.map((partner, i) => (
              <a
                key={`${partner.name}-${i}`}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring transition-all shrink-0 hover:scale-105 duration-200"
              >
                {partnerLogoComponents[partner.name] || <span className="text-gray-400 text-base font-bold">{partner.name}</span>}
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
