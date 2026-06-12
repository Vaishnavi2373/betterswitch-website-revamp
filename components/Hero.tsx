import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { CALENDLY_URL } from '../lib/constants';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50/20 to-white">
  
      <div className="px-6 md:px-12 lg:px-20 pt-16 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white border border-border/60 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="font-sans text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Payment Systems as a Service
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-5xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-tighter text-obsidian leading-[1.05]"
            >
              <span className="block">Launch Your</span>
              <span className="block">Payment Company</span>
              <span className="block text-accent">in a Day</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-xl mx-auto font-sans text-base md:text-lg font-medium text-gray-600 leading-relaxed"
            >
              White-label platform with 200+ payment connectors. Deploy a PCI-compliant Orchestrator, Merchant of Record, Facilitator, or Gateway on your own infrastructure.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-2"
            >
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring group relative isolate overflow-hidden bg-accent text-white text-sm font-semibold px-8 py-3.5 rounded shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-500 hover:scale-[1.03] hover:bg-accent-hover hover:shadow-[0_12px_32px_-8px_rgba(226,117,51,0.4)] active:scale-[0.98] flex items-center gap-2"
              >
                <div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent z-0 pointer-events-none" />
                <span className="relative z-10">Schedule a Demo</span>
                <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#solutions"
                className="focus-ring font-sans text-sm font-semibold text-obsidian hover:text-accent transition-colors flex items-center gap-1.5 px-4 py-3.5 rounded"
              >
                Explore Solutions
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
<div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-10 mb-10 p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
  <div className="text-center">
    <h3 className="text-3xl font-bold text-accent">200+</h3>
    <p className="text-sm text-gray-500 mt-1">Payment Connectors</p>
  </div>

  <div className="text-center">
    <h3 className="text-3xl font-bold text-accent">24 Hours</h3>
    <p className="text-sm text-gray-500 mt-1">Deployment Time</p>
  </div>

  <div className="text-center">
    <h3 className="text-3xl font-bold text-accent">PCI</h3>
    <p className="text-sm text-gray-500 mt-1">Level 1 Certified</p>
  </div>
</div>
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
       className="relative px-6 md:px-16 lg:px-24 mt-2"
      >
        <div className="max-w-6xl mx-auto" style={{ perspective: '2000px' }}>
          <div
            className="relative rounded-t-xl overflow-hidden border border-border/80 border-b-0 shadow-[0_-2px_12px_-4px_rgba(0,0,0,0.03),0_20px_60px_-15px_rgba(0,0,0,0.15)] bg-[#F8FAFC]"
            style={{ transform: 'rotateX(2.5deg)', transformOrigin: 'bottom center' }}
          >
            <img
              src="/dashboard-preview.png"
              srcSet="/dashboard-preview-480.png 480w, /dashboard-preview-768.png 768w, /dashboard-preview-1024.png 1024w, /dashboard-preview.png 1440w"
              sizes="(max-width: 640px) 480px, (max-width: 1024px) 768px, (max-width: 1440px) 1024px, 1440px"
              alt="BetterSwitch payment dashboard showing transaction analytics, connected providers, and real-time monitoring"
              className="w-full h-auto block"
              width={1440}
              height={770}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              onError={(e) => {
                e.currentTarget.src = '/dashboard-preview.svg';
                e.currentTarget.removeAttribute('srcset');
              }}
            />
            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-canvas to-transparent pointer-events-none"></div>
          </div>
        </div>
        
      </motion.div>
    </section>
  );
};

export default Hero;
