import React from 'react';
import { Twitter, Linkedin } from 'lucide-react';
import Logo from './shared/Logo';
import { colors, fonts } from '../lib/constants';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: colors.obsidian }} className="py-16 px-6 md:px-12 lg:px-20 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a href="/">
              <Logo size="small" />
            </a>
            <a href="/" className="text-xl tracking-tight" style={{ fontFamily: fonts.outfit, fontWeight: 500 }}>
              <span style={{ color: 'white' }}>better</span>
              <span style={{ color: colors.primary }}>switch</span>
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            {[
              { label: 'Platform', href: '#platform' },
              { label: 'Pricing', href: '#pricing' },
              { label: 'Customers', href: '#customers' },
              { label: 'Connectors', href: '/connectors' },
              { label: 'Blog', href: '/blog' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm hover:text-white transition-colors"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Follow us on Twitter"
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.6)' }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
              }}
            >
              <Twitter size={16} />
            </a>
            <a
              href="https://www.linkedin.com/company/betterswitch/"
              aria-label="Follow us on LinkedIn"
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.6)' }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
              }}
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <div className="flex items-center gap-6 text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <span>© 2026 betterswitch</span>
            <a href="#" className="hover:text-white/60 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms</a>
          </div>
          <div className="flex items-center gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.green }}></span>
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
