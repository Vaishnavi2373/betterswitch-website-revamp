import React, { useState, useEffect, useCallback, useRef } from 'react';
import Logo from './shared/Logo';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useDropdown } from '../hooks/useDropdown';
import { platformLinks, companyLinks, CALENDLY_URL } from '../lib/constants';

const Header: React.FC = () => {
  const platform = useDropdown();
  const company = useDropdown();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        platform.closeImmediate();
        company.closeImmediate();
        setMobileOpen(false);
      }
    };
    const onClickOutside = () => {
      platform.handleClickOutside();
      company.handleClickOutside();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClickOutside);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClickOutside);
    };
  }, [platform]);

  return (
    <header
 className="w-full px-6 py-4 md:px-12 lg:px-20 sticky top-0 z-50 bg-white shadow-md"
>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="focus-ring flex items-center gap-1 rounded" aria-label="BetterSwitch home">
          <Logo size="medium" />
          <span className="text-3xl tracking-tight font-outfit font-medium">
            <span className="text-obsidian">better</span>
            <span className="text-accent">switch</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          <div
            ref={platform.ref}
            className="relative"
            onMouseEnter={platform.open}
            onMouseLeave={platform.close}
          >
            <button
              onClick={platform.toggle}
              aria-expanded={platform.isOpen}
              aria-haspopup="true"
              aria-controls="platform-menu"
              className="focus-ring font-sans text-[15px] font-medium text-obsidian hover:opacity-70 transition-opacity flex items-center gap-1 rounded px-1"
            >
              Platform
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${platform.isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {platform.isOpen && (
              <div
                id="platform-menu"
                className="absolute top-full left-0 mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50"
                role="menu"
              >
                {platformLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    role="menuitem"
                    className="focus-ring block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-obsidian transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="/#pricing" className="focus-ring font-sans text-[15px] font-medium text-obsidian hover:opacity-70 transition-opacity rounded px-1">
            Pricing
          </a>
          <a href="/#customers" className="focus-ring font-sans text-[15px] font-medium text-obsidian hover:opacity-70 transition-opacity rounded px-1">
            Customers
          </a>

          <div
            ref={company.ref}
            className="relative"
            onMouseEnter={company.open}
            onMouseLeave={company.close}
          >
            <button
              onClick={company.toggle}
              aria-expanded={company.isOpen}
              aria-haspopup="true"
              aria-controls="company-menu"
              className="focus-ring font-sans text-[15px] font-medium text-obsidian hover:opacity-70 transition-opacity flex items-center gap-1 rounded px-1"
            >
              Company
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${company.isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {company.isOpen && (
              <div
                id="company-menu"
                className="absolute top-full left-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50"
                role="menu"
              >
                {companyLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    role="menuitem"
                    className="focus-ring block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-obsidian transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring group relative isolate overflow-hidden bg-accent text-white text-sm font-semibold px-5 py-2 rounded shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-500 hover:scale-[1.03] hover:bg-accent-hover hover:shadow-[0_12px_32px_-8px_rgba(226,117,51,0.4)] active:scale-[0.98] hidden md:flex items-center gap-2"
          >
            <div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent z-0 pointer-events-none" />
            <span className="relative z-10">Contact Us</span>
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="focus-ring md:hidden w-10 h-10 flex items-center justify-center rounded text-obsidian hover:bg-gray-100 transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-menu"
          ref={mobileMenuRef}
          className="md:hidden mt-4 pb-4 border-t border-border/60 pt-4 space-y-1 animate-[fadeIn_0.2s_ease-out]"
          aria-label="Mobile navigation"
        >
          {[
            { label: 'Platform', href: '/#platform' },
            { label: 'Solutions', href: '/#solutions', indent: true },
            { label: 'Connectors', href: '/connectors', indent: true },
            { label: 'Pricing', href: '/#pricing' },
            { label: 'Customers', href: '/#customers' },
            { label: 'Blog', href: '/blog' },
            { label: 'Careers', href: '/careers' },
            { label: 'About', href: '/about' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMobile}
              className={`focus-ring block px-3 py-2.5 text-sm font-medium text-obsidian rounded hover:bg-gray-100 transition-colors ${link.indent ? 'pl-6 text-gray-600' : ''}`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobile}
              className="focus-ring block w-full text-center bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-accent-hover transition-colors"
            >
              Contact Us
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
