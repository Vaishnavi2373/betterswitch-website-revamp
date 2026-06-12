import React, { useEffect, useRef, useState } from 'react';
import { Store, Wallet } from 'lucide-react';

const Dashboard: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, 400);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes dashboard-fade-in {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .dashboard-section-content {
          opacity: 0;
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          transform: translateY(24px);
        }
        .dashboard-section-content.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      <section ref={sectionRef} className="py-section px-6 md:px-12 lg:px-20 border-t border-border bg-white">
        <div className={`max-w-7xl mx-auto dashboard-section-content ${isVisible ? 'visible' : ''}`}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-24 items-center">

            {/* Text Column */}
            <div className="md:col-span-4 space-y-8 mb-12 md:mb-0">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 leading-tight">
                Beyond the checkout.
              </h2>
            </div>

            <div className="space-y-4 text-base font-medium text-gray-600 leading-relaxed">
              <p>
                Custom dashboards built for greater observability, advanced features, and versatile product offerings.
              </p>
              <p>
                From storefronts to payment links - we build the products you need for your business.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-canvas border border-border flex items-center gap-3 transition-colors hover:bg-white hover:shadow-sm">
                <div className="p-2 bg-white rounded-lg border border-border text-obsidian shadow-sm">
                  <Store size={18} />
                </div>
                <div className="text-sm font-bold text-obsidian">Storefront & Payment Links</div>
              </div>
              <div className="p-4 rounded-xl bg-canvas border border-border flex items-center gap-3 transition-colors hover:bg-white hover:shadow-sm">
                <div className="p-2 bg-white rounded-lg border border-border text-obsidian shadow-sm">
                  <Wallet size={18} />
                </div>
                <div className="text-sm font-bold text-obsidian">Wallets & Subscriptions</div>
              </div>
            </div>
          </div>

          {/* Dashboard Illustration */}
          <div className="md:col-span-8 relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden group border border-gray-200 shadow-2xl bg-[#F8FAFC]">
            <svg
              viewBox="0 0 1440 1024"
              preserveAspectRatio="xMidYMin slice"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full object-cover"
            >
              {/* Background Grid */}
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E2E8F0" strokeWidth="0.5"/>
                </pattern>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#e27533" stopOpacity="0.1"/>
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <rect width="1440" height="1024" fill="url(#grid)"/>

              {/* Sidebar */}
              <rect width="280" height="1024" fill="white"/>
              <rect width="1" height="1024" x="279" fill="#E2E8F0"/>

              {/* Sidebar Logo */}
              <svg x="24" y="32" width="22" height="22" viewBox="350 280 400 400">
                <path d="M0 0 C6.01817765 4.20244663 10.7631599 9.89125301 15.60546875 15.3515625 C17.99322387 17.99250536 20.47519308 20.48993425 23 23 C69.66666667 69.66666667 116.33333333 116.33333333 163 163 C164.34794899 164.33248024 164.34794899 164.33248024 165.72312927 165.69187927 C172.23738007 172.29553802 172.49996721 177.96024949 172.7265625 186.8671875 C171.88417683 195.59870195 163.90876296 202.5168184 157.9909668 208.33374023 C157.21141129 209.11212753 156.43185577 209.89051483 155.62867737 210.69248962 C153.0757813 213.23825478 150.51254537 215.77333532 147.94921875 218.30859375 C146.16584155 220.08382761 144.38320387 221.85980465 142.60127258 223.63648987 C138.40414179 227.81830287 134.20073671 231.99373283 129.99382001 236.16569525 C121.99781185 244.09577974 114.01632574 252.04046337 106.03580666 259.98613167 C103.41212673 262.59582125 100.78468884 265.20168034 98.15666199 267.80699158 C96.55838159 269.39525446 94.9601769 270.98359353 93.36206055 272.57202148 C92.62702301 273.29875061 91.89198547 274.02547974 91.13467407 274.77423096 C90.46883804 275.43710617 89.80300201 276.09998138 89.11698914 276.78294373 C88.53575633 277.35935828 87.95452353 277.93577284 87.3556776 278.5296545 C85.89644443 279.97585621 85.89644443 279.97585621 85 282 C84.34 281.67 83.68 281.34 83 281 C83.44730469 280.15179687 83.89460937 279.30359375 84.35546875 278.4296875 C93.95594872 259.80189055 98.63241232 241.51807836 98.4375 220.625 C98.43379395 219.90599518 98.43008789 219.18699036 98.42626953 218.44619751 C98.34419763 207.22644009 97.67692375 196.6729498 94 186 C93.73155273 185.20384277 93.46310547 184.40768555 93.18652344 183.58740234 C86.31863692 163.77092579 75.51681166 145.28796126 59 132 C58.25234375 131.36578125 57.5046875 130.7315625 56.734375 130.078125 C45.82409398 120.99795564 34.2898575 114.75238575 21 110 C20.3359314 109.75984161 19.67186279 109.51968323 18.9876709 109.27224731 C13.68405671 107.41983012 8.50794834 106.1699039 2.953125 105.35546875 C1.67504974 105.16672432 1.67504974 105.16672432 0.37115479 104.97416687 C-10.46285259 103.5055285 -21.33416333 103.43246373 -32.25 103.3125 C-34.37501947 103.27921539 -36.50002027 103.24471614 -38.625 103.20898438 C-43.74989396 103.12538584 -48.87475501 103.05799383 -54 103 C-54.61036343 93.41230099 -55.06806703 83.83153185 -55.34711647 74.2284565 C-55.48128627 69.76499074 -55.66188335 65.31504265 -55.96142578 60.859375 C-58.01865841 29.43008851 -58.01865841 29.43008851 -48.41308594 17.83105469 C-35.59118216 3.43587084 -19.46618566 -10.63518436 0 0 Z " fill="#e27533" transform="translate(565,308)"/>
                <path d="M0 0 C0 55.44 0 110.88 0 168 C-4.66666667 163.33333333 -9.33333333 158.66666667 -14 154 C-15.00172241 152.99936523 -15.00172241 152.99936523 -16.02368164 151.97851562 C-19.39416741 148.60810704 -22.75694285 145.23001602 -26.12107849 141.85327148 C-29.51609188 138.44665411 -32.91295578 135.04188735 -36.31044674 131.63774109 C-38.88269247 129.06027133 -41.45398997 126.48186982 -44.02319336 123.90136719 C-46.52305131 121.39059257 -49.02539076 118.88231535 -51.52942085 116.3757019 C-52.93465119 114.96775102 -54.33734178 113.55726676 -55.73997498 112.14672852 C-60.01435627 107.8719737 -64.29858391 103.79809937 -69 100 C-74.04873057 94.09415936 -74.55774346 88.08995751 -74.56640625 80.52734375 C-73.396368 73.2408297 -69.60982941 68.00865156 -64.40869141 62.97045898 C-63.86179153 62.4245813 -63.31489166 61.87870361 -62.75141907 61.31628418 C-60.9606612 59.53334122 -59.156287 57.764888 -57.3515625 55.99609375 C-56.09274925 54.74729975 -54.83490155 53.49753179 -53.57797241 52.24684143 C-50.27793962 48.96766132 -46.9665159 45.70024059 -43.65203857 42.43566895 C-38.35222742 37.21133913 -33.07101208 31.96819557 -27.78788376 26.72700691 C-25.95094853 24.90762726 -24.10978279 23.09262431 -22.26773071 21.27842712 C-16.9496403 16.02857833 -11.74834045 10.78124911 -7 5 C-2.4527565 0 -2.4527565 0 0 0 Z" fill="#e27533" transform="translate(438,406)"/>
                <path d="M0 0 C54.23149671 0 54.23149671 0 68.6640625 13.5 C78.39488551 23.91425874 79.66645941 35.22181736 79.37109375 48.87890625 C79.05281988 55.1322516 77.53564021 59.81726886 74 65 C73.14535156 66.30130859 73.14535156 66.30130859 72.2734375 67.62890625 C65.93476643 76.38044594 57.29058831 81.91282351 47 85 C31.4872812 87.21610269 15.67021236 86 0 86 C0 57.62 0 29.24 0 0 Z" fill="#e27533" transform="translate(511,480)"/>
                <path d="M0 0 C0.99 0.495 0.99 0.495 2 1 C-4.51973523 7.58940841 -11.04766196 14.17056106 -17.58603764 20.74147415 C-20.62218624 23.79324323 -23.65549541 26.84772454 -26.68237305 29.90869141 C-29.60647165 32.86551249 -32.53795084 35.81483105 -35.47457695 38.75920868 C-36.5906931 39.88084524 -37.70417645 41.00510834 -38.81489754 42.13208771 C-40.37748913 43.71662478 -41.94939309 45.29135286 -43.52368164 46.86425781 C-44.41414688 47.76138489 -45.30461212 48.65851196 -46.22206116 49.58282471 C-50.58568455 53.3797559 -55.14027183 56.31796607 -61 57 C-62.24136719 57.15275391 -62.24136719 57.15275391 -63.5078125 57.30859375 C-71.31502641 57.69312817 -76.70769011 55.59822646 -83 51 C-84.7258382 49.30391763 -86.20326035 47.58032771 -87.671875 45.66015625 C-89.01416883 43.98228896 -90.39237993 42.7203745 -92.0625 41.375 C-97.01690475 37.36931106 -101.27072705 32.69059235 -105.5625 28 C-106.03107422 27.49210938 -106.49964844 26.98421875 -106.98242188 26.4609375 C-109.78734 23.40102682 -112.42230775 20.25184737 -115 17 C-114.29574387 16.99857498 -113.59148773 16.99714996 -112.8658905 16.99568176 C-106.08988396 16.97753615 -99.31437685 16.93502528 -92.53869152 16.86790943 C-89.05867299 16.83422376 -85.57906593 16.80862402 -82.09887695 16.80444336 C-54.5816311 16.75998469 -26.86806491 14.50395999 -2.29296875 1.0390625 C-1.53628906 0.69617188 -0.77960938 0.35328125 0 0 Z" fill="#e27533" transform="translate(618,618)"/>
              </svg>
              <text x="50" y="50" fontFamily="Outfit, sans-serif" fontWeight="500" fontSize="20" letterSpacing="-0.02em" fill="#111111">better</text><text x="102" y="50" fontFamily="Outfit, sans-serif" fontWeight="500" fontSize="20" letterSpacing="-0.02em" fill="#e27533">switch</text>

              {/* Nav Items */}
              <rect x="16" y="112" width="248" height="48" rx="8" fill="#FFF7ED"/>
              <rect x="16" y="112" width="4" height="48" rx="2" fill="#e27533"/>
              {/* Dashboard */}
              <g transform="translate(32, 126)">
                <path d="M4 4h7v7H4V4zM13 4h7v7h-7V4zM4 13h7v7H4v-7zM13 13h7v7h-7v-7z" fill="#e27533" transform="scale(0.8)"/>
                <text x="36" y="14" fontFamily="'Figtree', sans-serif" fontWeight="700" fontSize="14" fill="#e27533">Dashboard</text>
              </g>
              {/* Transactions */}
              <g transform="translate(32, 182)">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2l5 5h-5V4zM6 20V4h5v7h7v9H6z" fill="#64748B" transform="scale(0.8)"/>
                <text x="36" y="14" fontFamily="'Figtree', sans-serif" fontWeight="600" fontSize="14" fill="#64748B">Transactions</text>
              </g>
              {/* Payment Links */}
              <g transform="translate(32, 238)">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" transform="scale(0.8)"/>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" transform="scale(0.8)"/>
                <text x="36" y="14" fontFamily="'Figtree', sans-serif" fontWeight="600" fontSize="14" fill="#64748B">Payment Links</text>
              </g>
              {/* Storefront */}
              <g transform="translate(32, 294)">
                <rect x="0" y="-2" width="16" height="16" rx="2" stroke="#64748B" strokeWidth="1.5" fill="none" transform="scale(0.8)"/>
                <rect x="2" y="6" width="12" height="6" stroke="#64748B" strokeWidth="1.5" fill="none" transform="scale(0.8)"/>
                <line x1="8" y1="6" x2="8" y2="12" stroke="#64748B" strokeWidth="1.5" transform="scale(0.8)"/>
                <text x="36" y="14" fontFamily="'Figtree', sans-serif" fontWeight="600" fontSize="14" fill="#64748B">Storefront</text>
              </g>
              {/* Wallet */}
              <g transform="translate(32, 350)">
                <rect x="2" y="4" width="18" height="14" rx="2" stroke="#64748B" strokeWidth="2" fill="none" transform="scale(0.8) translate(2,2)"/>
                <path d="M18 8v4" stroke="#64748B" strokeWidth="2" strokeLinecap="round" transform="scale(0.8) translate(2,2)"/>
                <circle cx="16" cy="10" r="1" fill="#64748B" transform="scale(0.8) translate(2,2)"/>
                <text x="36" y="14" fontFamily="'Figtree', sans-serif" fontWeight="600" fontSize="14" fill="#64748B">Wallet</text>
              </g>
              {/* Subscriptions */}
              <g transform="translate(32, 406)">
                <path d="M17 1l4 4-4 4" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" transform="scale(0.8) translate(2,2)"/>
                <path d="M3 11V9a4 4 0 0 1 4-4h14" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" transform="scale(0.8) translate(2,2)"/>
                <path d="M7 23l-4-4 4-4" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" transform="scale(0.8) translate(2,2)"/>
                <path d="M21 13v2a4 4 0 0 1-4 4H3" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" transform="scale(0.8) translate(2,2)"/>
                <text x="36" y="14" fontFamily="'Figtree', sans-serif" fontWeight="600" fontSize="14" fill="#64748B">Subscriptions</text>
              </g>
              {/* Customers */}
              <g transform="translate(32, 462)">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" transform="scale(0.8) translate(2,2)"/>
                <circle cx="9" cy="7" r="4" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" transform="scale(0.8) translate(2,2)"/>
                <text x="36" y="14" fontFamily="'Figtree', sans-serif" fontWeight="600" fontSize="14" fill="#64748B">Customers</text>
              </g>
              {/* Payouts */}
              <g transform="translate(32, 518)">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" stroke="#64748B" strokeWidth="2" fill="none" transform="scale(0.8) translate(2,2)"/>
                <line x1="1" y1="10" x2="23" y2="10" stroke="#64748B" strokeWidth="2" transform="scale(0.8) translate(2,2)"/>
                <text x="36" y="14" fontFamily="'Figtree', sans-serif" fontWeight="600" fontSize="14" fill="#64748B">Payouts</text>
              </g>
              {/* Reports */}
              <g transform="translate(32, 574)">
                <path d="M18 20V10M12 20V4M6 20v-6" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="scale(0.8) translate(2,2)"/>
                <text x="36" y="14" fontFamily="'Figtree', sans-serif" fontWeight="600" fontSize="14" fill="#64748B">Reports</text>
              </g>

              {/* Main Content Area Header */}
              <rect x="280" width="1160" height="88" fill="white"/>
              <rect x="280" y="87" width="1160" height="1" fill="#E2E8F0"/>

              {/* Search Bar */}
              <rect x="320" y="24" width="400" height="40" rx="8" fill="#F8FAFC" stroke="#E2E8F0"/>
              <circle cx="340" cy="44" r="6" stroke="#94A3B8" strokeWidth="2" fill="none"/>
              <line x1="345" y1="49" x2="350" y2="54" stroke="#94A3B8" strokeWidth="2"/>
              <text x="365" y="49" fontFamily="'Figtree', sans-serif" fontSize="14" fill="#94A3B8">Search transactions...</text>

              {/* Profile */}
              <g transform="translate(1330, 44)">
                <circle r="20" fill="#E2E8F0"/>
                <text x="0" y="5" textAnchor="middle" fontFamily="'Figtree', sans-serif" fontWeight="700" fontSize="14" fill="#64748B">JD</text>
              </g>
              <text x="1300" y="40" textAnchor="end" fontFamily="'Figtree', sans-serif" fontWeight="700" fontSize="14" fill="#0F172A">John Doe</text>
              <text x="1300" y="56" textAnchor="end" fontFamily="'Figtree', sans-serif" fontWeight="500" fontSize="12" fill="#94A3B8">Admin</text>

              {/* Dashboard Content */}
              <text x="320" y="160" fontFamily="'Figtree', sans-serif" fontWeight="800" fontSize="32" fill="#0F172A">Greetings, John</text>
              <text x="320" y="185" fontFamily="'Figtree', sans-serif" fontWeight="500" fontSize="16" fill="#64748B">Monitoring your payment performance in real-time.</text>

              {/* Time Toggle */}
              <rect x="1110" y="145" width="250" height="40" rx="8" fill="white" stroke="#E2E8F0"/>
              <rect x="1114" y="149" width="80" height="32" rx="6" fill="#0F172A"/>
              <text x="1154" y="170" textAnchor="middle" fontFamily="'Figtree', sans-serif" fontWeight="700" fontSize="12" fill="white">Today</text>
              <text x="1235" y="170" textAnchor="middle" fontFamily="'Figtree', sans-serif" fontWeight="600" fontSize="12" fill="#64748B">7 Days</text>
              <text x="1316" y="170" textAnchor="middle" fontFamily="'Figtree', sans-serif" fontWeight="600" fontSize="12" fill="#64748B">30 Days</text>

              {/* Card 1: Revenue */}
              <g transform="translate(320, 230)">
                <rect width="255" height="240" rx="16" fill="white" stroke="#E2E8F0"/>
                <rect x="24" y="24" width="48" height="48" rx="12" fill="#FFF7ED"/>
                <circle cx="48" cy="48" r="10" stroke="#e27533" strokeWidth="2" fill="none"/>
                <text x="48" y="52" textAnchor="middle" fontFamily="'Figtree', sans-serif" fontSize="12" fill="#e27533">$</text>

                <rect x="175" y="24" width="65" height="24" rx="12" fill="#DCFCE7"/>
                <text x="207" y="40" textAnchor="middle" fontFamily="'Figtree', sans-serif" fontWeight="700" fontSize="12" fill="#166534">+12.4%</text>

                <text x="24" y="96" fontFamily="'Figtree', sans-serif" fontWeight="700" fontSize="10" fill="#94A3B8" letterSpacing="0.1em">TOTAL REVENUE</text>
                <text x="24" y="128" fontFamily="'Figtree', sans-serif" fontWeight="800" fontSize="28" fill="#0F172A">$124,500.00</text>

                <rect x="24" y="190" width="24" height="26" rx="4" fill="#FFEDD5"/>
                <rect x="56" y="180" width="24" height="36" rx="4" fill="#FFEDD5"/>
                <rect x="88" y="195" width="24" height="21" rx="4" fill="#FDBA74"/>
                <rect x="120" y="160" width="24" height="56" rx="4" fill="#FDBA74"/>
                <rect x="152" y="185" width="24" height="31" rx="4" fill="#FDBA74"/>
                <rect x="184" y="150" width="24" height="66" rx="4" fill="#e27533"/>
              </g>

              {/* Card 2: Success Rate */}
              <g transform="translate(605, 230)">
                <rect width="255" height="240" rx="16" fill="white" stroke="#E2E8F0"/>
                <rect x="24" y="24" width="48" height="48" rx="12" fill="#CCFBF1"/>
                <path d="M40 48 L46 54 L56 42" stroke="#14B8A6" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>

                <rect x="180" y="24" width="60" height="24" rx="12" fill="#DCFCE7"/>
                <text x="210" y="40" textAnchor="middle" fontFamily="'Figtree', sans-serif" fontWeight="700" fontSize="12" fill="#166534">+5.2%</text>

                <text x="24" y="96" fontFamily="'Figtree', sans-serif" fontWeight="700" fontSize="10" fill="#94A3B8" letterSpacing="0.1em">SUCCESS RATE</text>
                <text x="24" y="128" fontFamily="'Figtree', sans-serif" fontWeight="800" fontSize="28" fill="#0F172A">99.8%</text>

                <rect x="24" y="180" width="24" height="36" rx="4" fill="#CCFBF1"/>
                <rect x="56" y="185" width="24" height="31" rx="4" fill="#CCFBF1"/>
                <rect x="88" y="160" width="24" height="56" rx="4" fill="#99F6E4"/>
                <rect x="120" y="185" width="24" height="31" rx="4" fill="#5EEAD4"/>
                <rect x="152" y="150" width="24" height="66" rx="4" fill="#5EEAD4"/>
                <rect x="184" y="160" width="24" height="56" rx="4" fill="#14B8A6"/>
              </g>

              {/* Card 3: Refund Rate */}
              <g transform="translate(890, 230)">
                <rect width="255" height="240" rx="16" fill="white" stroke="#E2E8F0"/>
                <rect x="24" y="24" width="48" height="48" rx="12" fill="#F1F5F9"/>
                <path d="M48 42 A 8 8 0 1 0 48 58" stroke="#64748B" strokeWidth="2" fill="none"/>
                <path d="M48 42 L44 46" stroke="#64748B" strokeWidth="2" fill="none"/>

                <rect x="190" y="24" width="50" height="24" rx="12" fill="#F1F5F9"/>
                <text x="215" y="40" textAnchor="middle" fontFamily="'Figtree', sans-serif" fontWeight="700" fontSize="12" fill="#64748B">Stable</text>

                <text x="24" y="96" fontFamily="'Figtree', sans-serif" fontWeight="700" fontSize="10" fill="#94A3B8" letterSpacing="0.1em">REFUND RATE</text>
                <text x="24" y="128" fontFamily="'Figtree', sans-serif" fontWeight="800" fontSize="28" fill="#0F172A">0.45%</text>

                <rect x="24" y="200" width="24" height="16" rx="4" fill="#E2E8F0"/>
                <rect x="56" y="205" width="24" height="11" rx="4" fill="#E2E8F0"/>
                <rect x="88" y="202" width="24" height="14" rx="4" fill="#CBD5E1"/>
                <rect x="120" y="198" width="24" height="18" rx="4" fill="#94A3B8"/>
                <rect x="152" y="205" width="24" height="11" rx="4" fill="#E2E8F0"/>
                <rect x="184" y="200" width="24" height="16" rx="4" fill="#CBD5E1"/>
              </g>

              {/* Card 4: Avg Ticket */}
              <g transform="translate(1175, 230)">
                <rect width="230" height="240" rx="16" fill="white" stroke="#E2E8F0"/>
                <rect x="24" y="24" width="48" height="48" rx="12" fill="#FFF7ED"/>
                <path d="M40 46h16l-3 9H43z" stroke="#e27533" strokeWidth="2" fill="none"/>
                <path d="M40 46l3-6h10l3 6" stroke="#e27533" strokeWidth="2" fill="none"/>

                <rect x="160" y="24" width="60" height="24" rx="12" fill="#FEE2E2"/>
                <text x="190" y="40" textAnchor="middle" fontFamily="'Figtree', sans-serif" fontWeight="700" fontSize="12" fill="#EF4444">-2.1%</text>

                <text x="24" y="96" fontFamily="'Figtree', sans-serif" fontWeight="700" fontSize="10" fill="#94A3B8" letterSpacing="0.1em">AVG TICKET</text>
                <text x="24" y="128" fontFamily="'Figtree', sans-serif" fontWeight="800" fontSize="28" fill="#0F172A">$45.20</text>

                <rect x="24" y="170" width="24" height="46" rx="4" fill="#FFEDD5"/>
                <rect x="56" y="175" width="24" height="41" rx="4" fill="#FFEDD5"/>
                <rect x="88" y="180" width="24" height="36" rx="4" fill="#FDBA74"/>
                <rect x="120" y="185" width="24" height="31" rx="4" fill="#FDBA74"/>
                <rect x="152" y="190" width="24" height="26" rx="4" fill="#FB923C"/>
                <rect x="184" y="195" width="24" height="21" rx="4" fill="#FB923C"/>
              </g>

              {/* Volume Analysis */}
              <g transform="translate(320, 500)">
                <rect width="730" height="480" rx="16" fill="white" stroke="#E2E8F0"/>
                <text x="32" y="48" fontFamily="'Figtree', sans-serif" fontWeight="700" fontSize="18" fill="#0F172A">Volume Analysis</text>
                <text x="32" y="70" fontFamily="'Figtree', sans-serif" fontWeight="500" fontSize="14" fill="#64748B">Comparing current week performance</text>

                <rect x="610" y="32" width="90" height="32" rx="6" fill="#F8FAFC"/>
                <rect x="612" y="34" width="44" height="28" rx="4" fill="white" stroke="#E2E8F0" strokeWidth="0.5"/>
                <text x="634" y="52" textAnchor="middle" fontFamily="'Figtree', sans-serif" fontWeight="700" fontSize="10" fill="#0F172A">Line</text>
                <text x="678" y="52" textAnchor="middle" fontFamily="'Figtree', sans-serif" fontWeight="600" fontSize="10" fill="#64748B">Bar</text>

                <text x="32" y="128" fontFamily="'Figtree', sans-serif" fontWeight="700" fontSize="10" fill="#94A3B8" letterSpacing="0.1em">CURRENT PERIOD</text>
                <text x="32" y="156" fontFamily="'Figtree', sans-serif" fontWeight="800" fontSize="24" fill="#0F172A">$84,320.00</text>
                <text x="240" y="128" fontFamily="'Figtree', sans-serif" fontWeight="700" fontSize="10" fill="#94A3B8" letterSpacing="0.1em">PREVIOUS PERIOD</text>
                <text x="240" y="156" fontFamily="'Figtree', sans-serif" fontWeight="800" fontSize="24" fill="#CBD5E1">$72,110.00</text>

                <line x1="32" y1="380" x2="698" y2="380" stroke="#F1F5F9"/>
                <line x1="32" y1="320" x2="698" y2="320" stroke="#F1F5F9"/>
                <line x1="32" y1="260" x2="698" y2="260" stroke="#F1F5F9"/>

                <path d="M32 420 C100 410 150 350 200 360 C250 370 300 220 400 270 C500 320 600 250 700 260" stroke="#e27533" strokeWidth="4" fill="none" strokeLinecap="round"/>
                <path d="M32 420 C100 410 150 350 200 360 C250 370 300 220 400 270 C500 320 600 250 700 260 L 700 480 L 32 480 Z" fill="url(#chartGradient)"/>
                <circle cx="400" cy="270" r="6" fill="#e27533" stroke="white" strokeWidth="3"/>
              </g>

              {/* Method Split */}
              <g transform="translate(1080, 500)">
                <rect width="325" height="480" rx="16" fill="white" stroke="#E2E8F0"/>
                <text x="32" y="48" fontFamily="'Figtree', sans-serif" fontWeight="700" fontSize="18" fill="#0F172A">Method Split</text>
                <text x="32" y="70" fontFamily="'Figtree', sans-serif" fontWeight="500" fontSize="14" fill="#64748B">Distribution by volume</text>

                <g transform="translate(162, 220)">
                  <circle cx="0" cy="0" r="80" fill="none" stroke="#F1F5F9" strokeWidth="20"/>
                  <circle cx="0" cy="0" r="80" fill="none" stroke="#e27533" strokeWidth="20" strokeDasharray="326 502" transform="rotate(-90)"/>
                  <circle cx="0" cy="0" r="80" fill="none" stroke="#14B8A6" strokeWidth="20" strokeDasharray="125 502" transform="rotate(144)"/>
                  <text x="0" y="5" textAnchor="middle" fontFamily="'Figtree', sans-serif" fontWeight="800" fontSize="28" fill="#0F172A">$124K</text>
                  <text x="0" y="25" textAnchor="middle" fontFamily="'Figtree', sans-serif" fontWeight="700" fontSize="10" fill="#94A3B8" letterSpacing="0.1em">GROSS SALES</text>
                </g>

                <g transform="translate(32, 360)">
                  <circle cx="6" cy="6" r="4" fill="#e27533"/>
                  <text x="24" y="10" fontFamily="'Figtree', sans-serif" fontWeight="600" fontSize="14" fill="#0F172A">Cards</text>
                  <text x="280" y="10" textAnchor="end" fontFamily="'Figtree', sans-serif" fontWeight="800" fontSize="14" fill="#0F172A">65%</text>
                </g>
                <g transform="translate(32, 395)">
                  <circle cx="6" cy="6" r="4" fill="#14B8A6"/>
                  <text x="24" y="10" fontFamily="'Figtree', sans-serif" fontWeight="600" fontSize="14" fill="#0F172A">Wallets</text>
                  <text x="280" y="10" textAnchor="end" fontFamily="'Figtree', sans-serif" fontWeight="800" fontSize="14" fill="#0F172A">25%</text>
                </g>
                <g transform="translate(32, 430)">
                  <circle cx="6" cy="6" r="4" fill="#E2E8F0"/>
                  <text x="24" y="10" fontFamily="'Figtree', sans-serif" fontWeight="600" fontSize="14" fill="#0F172A">Transfers</text>
                  <text x="280" y="10" textAnchor="end" fontFamily="'Figtree', sans-serif" fontWeight="800" fontSize="14" fill="#0F172A">10%</text>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Dashboard;
