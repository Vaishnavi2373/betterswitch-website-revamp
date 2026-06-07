import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Logos from './components/Logos';
import Solutions from './components/Solutions';
import Features from './components/Features';
import Dashboard from './components/Dashboard';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import BlogPage from './pages/Blog';
import BlogPostPage from './pages/BlogPost';
import ConnectorsPage from './pages/Connectors';

const HomePage: React.FC = () => {
  return (
    <div className="w-full relative bg-canvas min-h-screen">

      <Header />

      <main className="z-10 flex flex-col w-full relative">
        <Hero />
        <Logos />
        <Solutions />
        <Features />
        <Dashboard />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/connectors" element={<ConnectorsPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
    </Routes>
  );
};

export default App;
