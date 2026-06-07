import React, { useState, useEffect } from 'react';
import { CreditCard, GitBranch, ShieldCheck, Lock, Zap, CheckCircle } from 'lucide-react';

const steps = [
  {
    label: 'Initiate',
    title: 'Checkout Initiated',
    desc: 'Customer selects payment method and begins checkout.',
    icon: CreditCard
  },
  {
    label: 'Route',
    title: 'Smart Routing',
    desc: 'Hyperswitch selects optimal processor based on rules.',
    icon: GitBranch
  },
  {
    label: 'Verify',
    title: 'Authentication',
    desc: '3DS and verification handled when required.',
    icon: ShieldCheck
  },
  {
    label: 'Secure',
    title: 'Tokenization',
    desc: 'Card data securely tokenized for PCI compliance.',
    icon: Lock
  },
  {
    label: 'Process',
    title: 'Processing',
    desc: 'Transaction processed with automatic retries.',
    icon: Zap
  },
  {
    label: 'Complete',
    title: 'Confirmation',
    desc: 'Real-time webhooks sent to your systems.',
    icon: CheckCircle
  },
];

const PaymentLifecycle: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const ActiveIcon = steps[activeStep].icon;

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 border-t border-border bg-canvas">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-4">
            The Payment Lifecycle
          </h2>
          <p className="font-sans text-base font-medium text-gray-600 leading-relaxed max-w-2xl mx-auto">
            From checkout to confirmation - how Hyperswitch processes every transaction on your infrastructure.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative mb-16">
            {/* Background line */}
            <div className="absolute top-5 left-0 right-0 h-px bg-border hidden md:block z-0" />

            {/* Progress line */}
            <div
              className="absolute top-5 left-0 h-px bg-accent hidden md:block transition-all duration-500 ease-out z-0"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />

            {/* Step indicators */}
            <div className="flex justify-between relative z-10">
              {steps.map((step, idx) => {
                const StepIcon = step.icon;
                const isActive = idx === activeStep;
                const isPassed = idx < activeStep;

                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className="flex flex-col items-center group relative"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 relative z-10 ${
                        isActive
                          ? 'bg-accent text-white scale-110 shadow-lg shadow-accent/25'
                          : isPassed
                            ? 'bg-white border border-accent/30 text-accent'
                            : 'bg-white border border-border text-gray-400 group-hover:border-accent/30 group-hover:text-gray-600'
                      }`}
                    >
                      <StepIcon size={18} />
                    </div>
                    <span
                      className={`mt-3 text-[10px] font-mono uppercase tracking-wider transition-colors duration-300 ${
                        isActive ? 'text-accent font-semibold' : isPassed ? 'text-gray-600' : 'text-gray-400'
                      }`}
                    >
                      {step.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active step content */}
          <div className="relative overflow-hidden">
            <div className="bg-white border border-border rounded-2xl p-8 md:p-10 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <ActiveIcon size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs text-accent font-semibold tracking-wide">
                      Step {String(activeStep + 1).padStart(2, '0')}
                    </span>
                    <div className="h-px flex-1 bg-border max-w-[60px]" />
                  </div>
                  <h3 className="font-sans text-xl font-semibold text-gray-900 tracking-tight mb-2">
                    {steps[activeStep].title}
                  </h3>
                  <p className="font-sans text-sm font-medium text-gray-600 leading-relaxed">
                    {steps[activeStep].desc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Progress dots */}
          <div className="flex justify-center mt-8 gap-1">
            {steps.map((step, idx) => (
              <div key={idx} className="p-4 cursor-pointer">
                <button
                  onClick={() => setActiveStep(idx)}
                  aria-label={`Go to step ${idx + 1}: ${step.title}`}
                  aria-current={idx === activeStep ? 'step' : undefined}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === activeStep ? 'bg-accent w-6' : 'bg-gray-200 w-1.5 hover:bg-gray-300'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentLifecycle;
