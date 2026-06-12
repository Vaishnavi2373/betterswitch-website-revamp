import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { Reveal } from '../components/motion/Reveal';

const CareersPage: React.FC = () => {
  return (
    <PageLayout mainClassName="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-16 pb-24">
      <Reveal>
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white border border-border/60 shadow-sm mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="font-sans text-xs font-semibold text-gray-600 uppercase tracking-wider">Careers</span>
        </span>
        <h1 className="font-sans text-4xl md:text-5xl font-semibold tracking-tighter text-obsidian leading-tight mb-6">
          Join us in reshaping global payments
        </h1>
        <p className="font-sans text-lg text-gray-600 leading-relaxed max-w-2xl mb-12">
          We are building the platform that powers the next generation of payment companies. If you are passionate about fintech infrastructure, we would love to hear from you.
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="bg-white border border-border rounded-xl p-8 md:p-12 text-center shadow-surface">
          <h2 className="font-sans text-xl font-semibold text-obsidian mb-3">No open roles right now</h2>
          <p className="font-sans text-sm text-gray-600 leading-relaxed max-w-md mx-auto mb-6">
            We are not actively hiring for specific positions, but we are always interested in meeting exceptional engineers and product builders.
          </p>
          <a
            href="mailto:biz@betterswitch.io"
            className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
          >
            Send your resume to biz@betterswitch.io
          </a>
        </div>
      </Reveal>
    </PageLayout>
  );
};

export default CareersPage;
