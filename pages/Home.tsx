import React, { Suspense } from 'react';
import PageLayout from '../components/layout/PageLayout';
import Hero from '../components/Hero';
import Logos from '../components/Logos';

const Solutions = React.lazy(() => import('../components/Solutions'));
const Features = React.lazy(() => import('../components/Features'));
const Dashboard = React.lazy(() => import('../components/Dashboard'));
const Testimonials = React.lazy(() => import('../components/Testimonials'));
const Pricing = React.lazy(() => import('../components/Pricing'));
const CTA = React.lazy(() => import('../components/CTA'));

const SectionFallback = () => (
  <div className="py-section flex justify-center" aria-hidden="true">
    <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
  </div>
);

const HomePage: React.FC = () => {
  return (
    <PageLayout mainClassName="z-10 flex flex-col w-full relative">
      <Hero />
      <Logos />
      <Suspense fallback={<SectionFallback />}>
        <Solutions />
        <Features />
        <Dashboard />
        <Testimonials />
        <Pricing />
        <CTA />
      </Suspense>
    </PageLayout>
  );
};

export default HomePage;
