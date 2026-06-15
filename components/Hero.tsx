import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play, RefreshCw, ArrowRight } from 'lucide-react';
import { CALENDLY_URL } from '../lib/constants';

interface SimulatorLog {
  timestamp: string;
  type: 'info' | 'success' | 'warning' | 'error';
  text: string;
}

const RoutingSimulator: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [failoverMode, setFailoverMode] = useState(false);
  const [activeRoute, setActiveRoute] = useState<'none' | 'checkout-to-router' | 'router-to-adyen' | 'adyen-fail' | 'router-to-stripe' | 'success'>('none');
  const [simStep, setSimStep] = useState(0);
  const [logs, setLogs] = useState<SimulatorLog[]>([
    { timestamp: '13:31:00', type: 'info', text: 'System initialized. Orchestrator listening on port 443.' },
    { timestamp: '13:31:00', type: 'success', text: 'Connectors synced: 200+ global gateways operational.' }
  ]);

  const addLog = (text: string, type: 'info' | 'success' | 'warning' | 'error' = 'info') => {
    const time = new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
    setLogs(prev => [...prev, { timestamp: time, type, text }]);
  };

  const startSimulation = () => {
    if (isProcessing) return;
    setIsProcessing(true);
    setSimStep(1);
    setActiveRoute('checkout-to-router');
    setLogs([]);
    addLog('Transaction initiated: Checkout payload received ($84.00 USD).', 'info');

    // Step 1: Checkout to Router
    setTimeout(() => {
      setSimStep(2);
      addLog('Evaluating smart routing rule: [Lowest Cost Route].', 'info');
      addLog('Candidates: Adyen (1.2%), Mollie (1.4%), Stripe (1.5%).', 'info');
    }, 1000);

    // Step 2: Route to Processor
    setTimeout(() => {
      setSimStep(3);
      if (failoverMode) {
        addLog('Adyen selected (lowest cost: 1.2% fee). Dispatching transaction...', 'info');
        setActiveRoute('router-to-adyen');
      } else {
        addLog('Adyen selected (lowest cost: 1.2% fee). Dispatching transaction...', 'info');
        setActiveRoute('router-to-adyen');
      }
    }, 2200);

    // Step 3: Response or Failover
    setTimeout(() => {
      if (failoverMode) {
        setSimStep(4);
        setActiveRoute('adyen-fail');
        addLog('Adyen gateway returned 500: Internal Server Error.', 'error');
        addLog('FAILOVER ACTIVE: Initiating smart retry logic.', 'warning');
        addLog('Secondary candidate chosen: Stripe (1.5% fee). Routing...', 'info');
        setActiveRoute('router-to-stripe');
      } else {
        setSimStep(5);
        setActiveRoute('success');
        addLog('Adyen response: 200 OK. Transaction settled successfully.', 'success');
        setIsProcessing(false);
      }
    }, 3600);

    // Step 4 (only if failover): Success on backup
    setTimeout(() => {
      if (failoverMode) {
        setSimStep(5);
        setActiveRoute('success');
        addLog('Stripe response: 200 OK. Failover route completed successfully.', 'success');
        setIsProcessing(false);
      }
    }, 5200);
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden mt-6">
      {/* Simulator Toolbar */}
      <div className="flex items-center justify-between px-6 py-4 bg-[#F8FAFC] border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <span className="text-xs font-mono text-gray-500 font-medium">betterswitch-sandbox-v1.0.4</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <label htmlFor="failover-toggle" className="text-xs font-sans font-semibold text-gray-600">Simulate Failure & Failover</label>
            <button
              id="failover-toggle"
              onClick={() => setFailoverMode(!failoverMode)}
              className={`w-9 h-5 rounded-full p-0.5 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent/20 ${failoverMode ? 'bg-accent' : 'bg-gray-200'}`}
              aria-checked={failoverMode}
              role="switch"
            >
              <div className={`w-4 h-4 rounded-full bg-white shadow-sm transform transition-transform duration-200 ${failoverMode ? 'translate-x-4' : 'translate-x-0'}`} />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Interactive panel */}
        <div className="lg:col-span-8 p-6 bg-white flex flex-col justify-between min-h-[340px] border-b lg:border-b-0 lg:border-r border-gray-100">
          <div className="relative w-full flex-1 flex items-center justify-center">
            {/* SVG Visualizer */}
            <svg viewBox="0 0 540 240" className="w-full max-w-lg h-auto overflow-visible">
              {/* Dotted Connection Grid */}
              <defs>
                <pattern id="dotpattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#E2E8F0" />
                </pattern>
                <linearGradient id="gradient-accent" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#e27533" />
                  <stop offset="100%" stopColor="#F28C38" />
                </linearGradient>
                <linearGradient id="gradient-green" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#34D399" />
                </linearGradient>
              </defs>
              <rect width="540" height="240" fill="url(#dotpattern)" rx="8" />

              {/* Static Paths */}
              {/* Checkout to Router */}
              <path d="M60,120 L220,120" stroke={activeRoute === 'checkout-to-router' ? '#e27533' : '#E2E8F0'} strokeWidth={activeRoute === 'checkout-to-router' ? '2.5' : '1.5'} fill="none" className="transition-all duration-300" />
              
              {/* Router to Stripe */}
              <path d="M220,120 C290,120 290,60 400,60" stroke={activeRoute === 'router-to-stripe' || (activeRoute === 'success' && failoverMode) ? '#10B981' : '#E2E8F0'} strokeWidth={activeRoute === 'router-to-stripe' ? '2.5' : '1.5'} fill="none" className="transition-all duration-300" />

              {/* Router to Adyen */}
              <path d="M220,120 L400,120" stroke={activeRoute === 'router-to-adyen' ? '#e27533' : (activeRoute === 'adyen-fail' ? '#EF4444' : (activeRoute === 'success' && !failoverMode ? '#10B981' : '#E2E8F0'))} strokeWidth={activeRoute === 'router-to-adyen' ? '2.5' : '1.5'} fill="none" className="transition-all duration-300" />

              {/* Router to Mollie */}
              <path d="M220,120 C290,120 290,180 400,180" stroke="#E2E8F0" strokeWidth="1.5" fill="none" />

              {/* Pulsing beam animations */}
              {activeRoute === 'checkout-to-router' && (
                <circle cx="0" cy="0" r="4" fill="#e27533">
                  <animateMotion dur="1s" repeatCount="indefinite" path="M60,120 L220,120" />
                </circle>
              )}

              {activeRoute === 'router-to-adyen' && (
                <circle cx="0" cy="0" r="4" fill="#e27533">
                  <animateMotion dur="1.2s" repeatCount="indefinite" path="M220,120 L400,120" />
                </circle>
              )}

              {activeRoute === 'router-to-stripe' && (
                <circle cx="0" cy="0" r="4" fill="#10B981">
                  <animateMotion dur="1.2s" repeatCount="indefinite" path="M220,120 C290,120 290,60 400,60" />
                </circle>
              )}

              {/* Nodes */}
              {/* 1. Buyer Node */}
              <g transform="translate(60, 120)">
                <circle r="20" fill="white" stroke="#E2E8F0" strokeWidth="1.5" className="shadow-sm" />
                <circle r="4" fill="#111111" />
                <text x="0" y="32" textAnchor="middle" fontFamily="Figtree" fontSize="9" fontWeight="600" fill="#4B5563">Checkout</text>
              </g>

              {/* 2. BetterSwitch Router */}
              <g transform="translate(220, 120)">
                <circle r="24" fill={isProcessing ? '#FFF7ED' : 'white'} stroke={isProcessing ? '#e27533' : '#E2E8F0'} strokeWidth="2" className="transition-colors duration-300" />
                <svg x="-12" y="-12" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isProcessing ? '#e27533' : '#111111'} strokeWidth="2" className={isProcessing ? 'animate-spin-slow' : ''}>
                  <polyline points="16 3 21 3 21 8" />
                  <line x1="4" y1="20" x2="21" y2="3" />
                  <polyline points="21 16 21 21 16 21" />
                  <line x1="15" y1="15" x2="21" y2="21" />
                </svg>
                <text x="0" y="36" textAnchor="middle" fontFamily="Figtree" fontSize="9" fontWeight="700" fill="#111111">BetterSwitch</text>
              </g>

              {/* 3. Stripe Node */}
              <g transform="translate(400, 60)">
                <circle r="20" fill="white" stroke={activeRoute === 'success' && failoverMode ? '#10B981' : '#E2E8F0'} strokeWidth={activeRoute === 'success' && failoverMode ? '2' : '1.5'} />
                <text x="0" y="4" textAnchor="middle" fontFamily="Outfit" fontSize="8" fontWeight="700" fill="#635BFF">Stripe</text>
                <text x="0" y="28" textAnchor="middle" fontFamily="Figtree" fontSize="8" fontWeight="600" fill="#9CA3AF">1.5% Fee</text>
                {activeRoute === 'success' && failoverMode && (
                  <circle cx="14" cy="-14" r="6" fill="#10B981" />
                )}
              </g>

              {/* 4. Adyen Node */}
              <g transform="translate(400, 120)">
                <circle r="20" fill="white" stroke={activeRoute === 'adyen-fail' ? '#EF4444' : (activeRoute === 'success' && !failoverMode ? '#10B981' : '#E2E8F0')} strokeWidth={activeRoute === 'adyen-fail' || (activeRoute === 'success' && !failoverMode) ? '2' : '1.5'} />
                <text x="0" y="4" textAnchor="middle" fontFamily="Outfit" fontSize="8" fontWeight="700" fill="#0ABF53">Adyen</text>
                <text x="0" y="28" textAnchor="middle" fontFamily="Figtree" fontSize="8" fontWeight="600" fill="#9CA3AF">1.2% Fee</text>
                {activeRoute === 'success' && !failoverMode && (
                  <circle cx="14" cy="-14" r="6" fill="#10B981" />
                )}
                {activeRoute === 'adyen-fail' && (
                  <circle cx="14" cy="-14" r="6" fill="#EF4444" />
                )}
              </g>

              {/* 5. Mollie Node */}
              <g transform="translate(400, 180)">
                <circle r="20" fill="white" stroke="#E2E8F0" strokeWidth="1.5" />
                <text x="0" y="4" textAnchor="middle" fontFamily="Outfit" fontSize="8" fontWeight="700" fill="#3B82F6">Mollie</text>
                <text x="0" y="28" textAnchor="middle" fontFamily="Figtree" fontSize="8" fontWeight="600" fill="#9CA3AF">1.4% Fee</text>
              </g>
            </svg>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-gray-100">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Simulator Controls</span>
              <span className="text-xs font-semibold text-gray-700">Click process to test smart cost-based failover routing.</span>
            </div>
            <button
              onClick={startSimulation}
              disabled={isProcessing}
              className={`focus-ring inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-white shadow-sm transition-all ${isProcessing ? 'bg-gray-400 cursor-not-allowed' : 'bg-accent hover:bg-accent-hover hover:scale-[1.02] active:scale-[0.98]'}`}
            >
              <Play size={12} />
              {isProcessing ? 'Routing...' : 'Process Transaction'}
            </button>
          </div>
        </div>

        {/* Right Audit Log panel */}
        <div className="lg:col-span-4 p-6 bg-[#111111] text-white flex flex-col justify-between min-h-[340px] font-mono">
          <div className="flex-1 overflow-y-auto space-y-2.5 max-h-[250px]">
            <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider pb-2 border-b border-white/10 flex justify-between items-center">
              <span>REAL-TIME AUDIT LOGS</span>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            </div>
            {logs.map((log, index) => (
              <div key={index} className="text-xs leading-relaxed">
                <span className="text-gray-500 mr-2">[{log.timestamp}]</span>
                <span className={
                  log.type === 'success' ? 'text-green-400' :
                  log.type === 'error' ? 'text-red-400' :
                  log.type === 'warning' ? 'text-yellow-400' : 'text-gray-300'
                }>
                  {log.text}
                </span>
              </div>
            ))}
            {isProcessing && (
              <div className="text-xs text-accent animate-pulse flex items-center gap-2 pt-1">
                <RefreshCw size={12} className="animate-spin" />
                <span>Processing packet stream...</span>
              </div>
            )}
          </div>
          <div className="border-t border-white/10 pt-4 mt-4 flex items-center justify-between">
            <span className="text-[10px] text-gray-500">SYSTEM HEALTH</span>
            <span className="text-[10px] text-green-400 font-bold">PCI LEVEL 1 DEPLOYED</span>
          </div>
        </div>
      </div>
    </div>
  );
};

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
              className="font-sans text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tighter text-obsidian leading-[0.95]"
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

      <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-6 mb-12 p-8 bg-white rounded-2xl shadow-md border border-gray-100">
        <div className="text-center">
          <h3 className="text-3xl font-extrabold text-accent tracking-tight">200+</h3>
          <p className="text-xs text-gray-500 font-semibold mt-1">Payment Connectors</p>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-extrabold text-accent tracking-tight">24 Hours</h3>
          <p className="text-xs text-gray-500 font-semibold mt-1">Deployment Time</p>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-extrabold text-accent tracking-tight">PCI</h3>
          <p className="text-xs text-gray-500 font-semibold mt-1">Level 1 Certified</p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative px-6 md:px-16 lg:px-24 mt-2 max-w-6xl mx-auto mb-16"
      >
        <RoutingSimulator />
        <div className="text-center mt-6">
          <p className="text-xs uppercase tracking-wider text-gray-400 font-mono font-bold">
            Interactive Payment Orchestrator & Auto-Failover Sandbox
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
