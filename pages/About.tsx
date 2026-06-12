import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { Reveal } from '../components/motion/Reveal';
import { CALENDLY_URL } from '../lib/constants';

const AboutPage: React.FC = () => {
  return (
    <PageLayout mainClassName="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-16 pb-24">
      <Reveal>
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white border border-border/60 shadow-sm mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="font-sans text-xs font-semibold text-gray-600 uppercase tracking-wider">About</span>
        </span>
        <h1 className="font-sans text-4xl md:text-5xl font-semibold tracking-tighter text-obsidian leading-tight mb-6">
          Building the infrastructure layer for payment companies
        </h1>
        <p className="font-sans text-lg text-gray-600 leading-relaxed max-w-2xl mb-12">
          BetterSwitch is Payment Systems as a Service (PSaaS). We help fintechs, platforms, and enterprises launch PCI-compliant payment orchestrators, merchant-of-record systems, facilitators, and gateways on their own infrastructure — in days, not years.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: '200+ Connectors', desc: 'Global processor, wallet, and bank coverage out of the box.' },
          { title: 'Own Your Stack', desc: 'Deploy on AWS, GCP, or Azure with full white-label control.' },
          { title: 'PCI Compliant', desc: 'Level 1 certified infrastructure from day one.' },
        ].map((item, i) => (
          <Reveal key={item.title} delay={i * 0.1}>
            <div className="bg-white border border-border rounded-xl p-6 shadow-surface h-full">
              <h2 className="font-sans text-lg font-semibold text-obsidian mb-2">{item.title}</h2>
              <p className="font-sans text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3} className="mt-16 text-center">
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring inline-flex items-center gap-2 bg-accent text-white text-sm font-semibold px-8 py-3.5 rounded hover:bg-accent-hover transition-colors"
        >
          Talk to our team
        </a>
      </Reveal>
    </PageLayout>
  );
};

export default AboutPage;
