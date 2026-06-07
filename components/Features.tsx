import React from 'react';
import { Plug, Shield, Cloud, Palette, ShoppingCart } from 'lucide-react';
import ShopShuffle from './ShopShuffle';
import CloudCarousel from './CloudCarousel';
import ConnectorScroller from './ConnectorScroller';

const Features: React.FC = () => {
  return (
    <section id="platform" className="py-32 px-6 md:px-12 lg:px-20 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="font-sans text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-6 leading-[1.1]">
              Everything You Need
              <span className="text-gray-500 block">to Run a Payment Company.</span>
            </h2>
            <p className="font-sans text-sm font-medium text-gray-600 leading-relaxed">
              200+ connectors, PCI compliance, dashboards, storefronts, and plugins. Everything ships on day one.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Row 1 */}
          {/* Card 1: Connector Integrations */}
          <div className="md:col-span-8 relative bg-white border border-gray-200 rounded-xl overflow-hidden shadow-surface">
            <div className="relative z-10 p-6 h-full flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="max-w-md">
                  <div className="w-9 h-9 bg-canvas border border-gray-200 rounded flex items-center justify-center mb-4 text-gray-900 shadow-sm">
                    <Plug size={18} />
                  </div>
                  <h3 className="font-sans text-xl font-semibold text-gray-900 tracking-tight mb-2">
                    Smart Routing
                  </h3>
                  <p className="font-sans text-sm font-medium text-gray-600 leading-relaxed">
                    Route every transaction through the optimal processor. Automatic failover, retries, and cost-based optimization across 200+ connectors.
                  </p>
                </div>
                <div className="hidden lg:block">
                  <div className="px-2 py-1 bg-canvas border border-gray-200 rounded text-[9px] font-mono text-gray-600 uppercase tracking-wider">
                    Any Processor
                  </div>
                </div>
              </div>

              <div className="mt-5 w-full relative border-t border-gray-200/40 pt-4">
                <ConnectorScroller />
              </div>
            </div>
          </div>

          {/* Card 2: PCI Compliant Support */}
          <div className="md:col-span-4 group relative bg-white border border-gray-200 rounded-xl overflow-hidden shadow-surface hover:border-obsidian/30 transition-all duration-500 flex flex-col">
            <div className="p-6 relative z-10 flex flex-col h-full">
              <div className="w-9 h-9 bg-canvas border border-gray-200 rounded flex items-center justify-center mb-4 text-gray-900 shadow-sm">
                <Shield size={18} />
              </div>
              <h3 className="font-sans text-xl font-semibold text-gray-900 tracking-tight mb-2">PCI Compliance</h3>
              <p className="font-sans text-sm font-medium text-gray-600 leading-relaxed mb-4">
                PCI DSS Level 1 certified from day one. Audit-ready documentation included.
              </p>

              <div className="mt-auto relative w-full h-24 flex items-center justify-center">
                <div className="relative w-full h-20 bg-white border border-gray-200 rounded-lg shadow-sm flex items-center px-4 gap-3 z-10">
                  <div className="pci-status-dot w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[9px] font-bold text-gray-900 uppercase tracking-wide">PCI DSS Level 1</span>
                      <div className="pci-tick-container flex items-center gap-1">
                        <span className="text-[9px] font-mono text-gray-500 pci-certified-text">Certified</span>
                        <div className="w-3.5 h-3.5 bg-green-500 rounded-full flex items-center justify-center pci-tick">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="h-1.5 w-full bg-canvas rounded overflow-hidden">
                      <div className="h-full pci-progress-bar" style={{ backgroundColor: '#e27533' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          {/* Card 3: Multi-cloud Deployments */}
          <div className="md:col-span-4 group relative bg-white border border-gray-200 rounded-xl overflow-hidden shadow-surface hover:border-obsidian/30 transition-all duration-500 flex flex-col">
            <div className="p-6 relative z-10 flex flex-col h-full">
              <div className="w-9 h-9 bg-canvas border border-gray-200 rounded flex items-center justify-center mb-4 text-gray-900 shadow-sm">
                <Cloud size={18} />
              </div>
              <h3 className="font-sans text-xl font-semibold text-gray-900 tracking-tight mb-2">Multi-cloud Deployments</h3>
              <p className="font-sans text-sm font-medium text-gray-600 leading-relaxed mb-4">
                Deploy on AWS, GCP, Azure, or your preferred cloud provider in hours with our Terraform scripts.
              </p>

              <div className="mt-auto">
                <CloudCarousel />
              </div>
            </div>
          </div>

          {/* Card 4: Whitelabelling & Customization */}
          <div className="md:col-span-4 group relative bg-white border border-gray-200 rounded-xl overflow-hidden shadow-surface hover:border-obsidian/30 transition-all duration-500">
            <div className="p-6 relative z-10 flex flex-col h-full">
              <div className="w-9 h-9 bg-canvas border border-gray-200 rounded flex items-center justify-center mb-4 text-gray-900 shadow-sm">
                <Palette size={18} />
              </div>
              <h3 className="font-sans text-xl font-semibold text-gray-900 tracking-tight mb-2">Whitelabelling & Customization</h3>
              <p className="font-sans text-sm font-medium text-gray-600 leading-relaxed mb-4">
                Complete whitelabelling to match your brand and workflows.
              </p>

              <div className="mt-auto relative w-full h-24 flex items-center justify-center gap-4">
                {/* Original card transforming */}
                <div className="w-16 h-20 bg-white border border-gray-200 rounded-lg p-2 whitelabel-card-1 whitelabel-border">
                  <div className="w-5 h-5 rounded bg-gray-100 mb-2 flex items-center justify-center whitelabel-logo">
                    <div className="w-2.5 h-2.5 rounded-sm bg-gray-300"></div>
                  </div>
                  <div className="w-full h-1 rounded mb-1.5 whitelabel-bar-1"></div>
                  <div className="w-4/5 h-0.5 rounded mb-1 whitelabel-sub-1"></div>
                  <div className="w-3/5 h-0.5 rounded whitelabel-sub-2"></div>
                </div>

                {/* Arrow indicator */}
                <div className="whitelabel-arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-300">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Branded card */}
                <div className="w-16 h-20 bg-white border border-accent/40 rounded-lg p-2 whitelabel-card-2">
                  <div className="w-5 h-5 rounded bg-accent/10 mb-2 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-sm bg-accent"></div>
                  </div>
                  <div className="w-full h-1 bg-accent rounded mb-1.5"></div>
                  <div className="w-4/5 h-0.5 bg-orange-200 rounded mb-1"></div>
                  <div className="w-3/5 h-0.5 bg-orange-100 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: E-commerce Plugins */}
          <div className="md:col-span-4 group relative bg-white border border-gray-200 rounded-xl overflow-hidden shadow-surface hover:border-obsidian/30 transition-all duration-500">
            <div className="p-6 relative z-10 flex flex-col h-full">
              <div className="w-9 h-9 bg-canvas border border-gray-200 rounded flex items-center justify-center mb-4 text-gray-900 shadow-sm">
                <ShoppingCart size={18} />
              </div>
              <h3 className="font-sans text-xl font-semibold text-gray-900 tracking-tight mb-2">WooCommerce & Shopify Plugins</h3>
              <p className="font-sans text-sm font-medium text-gray-600 leading-relaxed mb-4">
                Connect your e-commerce store to your payment system out of the box.
              </p>

              <div className="mt-auto">
                <ShopShuffle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
