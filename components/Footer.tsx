import React from 'react';
import { Twitter, Linkedin } from 'lucide-react';
import Logo from './shared/Logo';
import { colors, fonts, footerLinks } from '../lib/constants';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: colors.obsidian }} className="py-16 px-6 md:px-12 lg:px-20 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          <a href="/" className="focus-ring flex items-center gap-2 rounded" aria-label="BetterSwitch home">
            <Logo size="small" />
            <span className="text-xl tracking-tight" style={{ fontFamily: fonts.outfit, fontWeight: 500 }}>
              <span style={{ color: 'white' }}>better</span>
              <span style={{ color: colors.primary }}>switch</span>
            </span>
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3" aria-label="Footer navigation">
            {footerLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="focus-ring text-sm hover:text-white transition-colors rounded px-1"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com/betterswitch"
              aria-label="Follow us on Twitter"
              className="focus-ring w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:bg-white/10 hover:text-white"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.6)' }}
            >
              <Twitter size={16} />
            </a>
            <a
              href="https://www.linkedin.com/company/betterswitch/"
              aria-label="Follow us on LinkedIn"
              className="focus-ring w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:bg-white/10 hover:text-white"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.6)' }}
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
            <span>© 2026 betterswitch</span>
            <a href="/about" className="focus-ring hover:text-white/80 transition-colors rounded">About</a>
            <a href="https://betterswitch.io/privacy" className="focus-ring hover:text-white/80 transition-colors rounded">Privacy</a>
            <a href="https://betterswitch.io/terms" className="focus-ring hover:text-white/80 transition-colors rounded">Terms</a>
          </div>
          <div className="flex items-center gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.green }} />
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
