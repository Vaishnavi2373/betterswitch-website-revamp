import React, { useState, useRef, useEffect } from 'react';
import Logo from './shared/Logo';
import { colors, fonts } from '../lib/constants';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [platformOpen, setPlatformOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const platformTimeoutRef = useRef<NodeJS.Timeout>();
  const companyTimeoutRef = useRef<NodeJS.Timeout>();
  const platformRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);
  const justToggledRef = useRef(false);

  // Sticky header on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Close dropdowns on Escape or click outside
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setPlatformOpen(false); setCompanyOpen(false); }
    };
    const onClickOutside = () => {
      if (justToggledRef.current) { justToggledRef.current = false; return; }
      setPlatformOpen(false);
      setCompanyOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClickOutside);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('click', onClickOutside); };
  }, []);

  const openPlatform = () => { clearTimeout(platformTimeoutRef.current); setPlatformOpen(true); setCompanyOpen(false); };
  const closePlatform = () => { platformTimeoutRef.current = setTimeout(() => setPlatformOpen(false), 200); };
  const togglePlatform = () => { justToggledRef.current = true; setPlatformOpen(p => !p); setCompanyOpen(false); };

  const openCompany = () => { clearTimeout(companyTimeoutRef.current); setCompanyOpen(true); setPlatformOpen(false); };
  const closeCompany = () => { companyTimeoutRef.current = setTimeout(() => setCompanyOpen(false), 200); };
  const toggleCompany = () => { justToggledRef.current = true; setCompanyOpen(p => !p); setPlatformOpen(false); };

  const platformLinks = [
    { label: 'Overview', href: '#platform' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Connectors', href: '/connectors' },
  ];
  const platformSecondary = [
    { label: 'Documentation', href: '#' },
  ];
  const companyLinks = [
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'About', href: '/about' },
  ];

  return (
    <header className={`w-full px-6 py-4 md:px-12 lg:px-20 sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md border-b border-border/60 shadow-[0_1px_3px_rgba(0,0,0,0.04)]' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <a href="/" aria-label="BetterSwitch home">
            <Logo size="medium" />
          </a>
          <a href="/" className="text-3xl tracking-tight" style={{ fontFamily: fonts.outfit, fontWeight: 500 }}>
            <span style={{ color: colors.obsidian }}>better</span>
            <span style={{ color: colors.primary }}>switch</span>
          </a>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {/* Platform dropdown */}
          <div
            ref={platformRef}
            className="relative"
            onMouseEnter={openPlatform}
            onMouseLeave={closePlatform}
          >
            <button
              onClick={togglePlatform}
              aria-expanded={platformOpen}
              aria-haspopup="true"
              className="font-sans text-[15px] font-medium text-obsidian hover:opacity-70 transition-opacity flex items-center gap-1"
            >
              Platform
              <ChevronDown size={16} className={`transition-transform duration-200 ${platformOpen ? 'rotate-180' : ''}`} />
            </button>
            {platformOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50" role="menu">
                {platformLinks.map((link) => (
                  <a key={link.label} href={link.href} role="menuitem" className="block px-4 py-2 text-[14px] font-medium text-gray-700 hover:bg-gray-50 hover:text-obsidian transition-colors">
                    {link.label}
                  </a>
                ))}
                <div className="border-t border-gray-100 my-1"></div>
                {platformSecondary.map((link) => (
                  <a key={link.label} href={link.href} role="menuitem" className="block px-4 py-2 text-[14px] font-medium text-gray-700 hover:bg-gray-50 hover:text-obsidian transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Direct links */}
          <a href="#pricing" className="font-sans text-[15px] font-medium text-obsidian hover:opacity-70 transition-opacity">
            Pricing
          </a>
          <a href="#customers" className="font-sans text-[15px] font-medium text-obsidian hover:opacity-70 transition-opacity">
            Customers
          </a>

          {/* Company dropdown */}
          <div
            ref={companyRef}
            className="relative"
            onMouseEnter={openCompany}
            onMouseLeave={closeCompany}
          >
            <button
              onClick={toggleCompany}
              aria-expanded={companyOpen}
              aria-haspopup="true"
              className="font-sans text-[15px] font-medium text-obsidian hover:opacity-70 transition-opacity flex items-center gap-1"
            >
              Company
              <ChevronDown size={16} className={`transition-transform duration-200 ${companyOpen ? 'rotate-180' : ''}`} />
            </button>
            {companyOpen && (
              <div className="absolute top-full left-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50" role="menu">
                {companyLinks.map((link) => (
                  <a key={link.label} href={link.href} role="menuitem" className="block px-4 py-2 text-[14px] font-medium text-gray-700 hover:bg-gray-50 hover:text-obsidian transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Right side: CTA + mobile hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="https://calendly.com/biz-betterswitch/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative isolate overflow-hidden bg-accent text-white text-sm font-semibold px-5 py-2 rounded shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.03] hover:bg-accent-hover hover:shadow-[0_12px_32px_-8px_rgba(226,117,51,0.4)] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-accent/20 focus:ring-offset-2 hidden md:flex items-center gap-2"
          >
            <div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent z-0 pointer-events-none"></div>
            <span className="relative z-10">Contact Us</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded text-obsidian hover:bg-gray-100 transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-border/60 pt-4 space-y-1 animate-[fadeIn_0.2s_ease-out]">
          <a href="#platform" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-obsidian rounded hover:bg-gray-100 transition-colors">Platform</a>
          <a href="#solutions" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-gray-600 rounded hover:bg-gray-100 transition-colors pl-6">Solutions</a>
          <a href="/connectors" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-gray-600 rounded hover:bg-gray-100 transition-colors pl-6">Connectors</a>
          <a href="#pricing" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-obsidian rounded hover:bg-gray-100 transition-colors">Pricing</a>
          <a href="#customers" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-obsidian rounded hover:bg-gray-100 transition-colors">Customers</a>
          <a href="/blog" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-obsidian rounded hover:bg-gray-100 transition-colors">Blog</a>
          <a href="/careers" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-obsidian rounded hover:bg-gray-100 transition-colors">Careers</a>
          <a href="/about" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-obsidian rounded hover:bg-gray-100 transition-colors">About</a>
          <div className="pt-2">
            <a
              href="https://calendly.com/biz-betterswitch/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-accent-hover transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
