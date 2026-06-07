import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Search, Globe, CreditCard, Wallet, Landmark, ShoppingBag, Shield, Lock, Network } from 'lucide-react';

type Connector = {
  name: string;
  logo: string;
  category: string;
  regions: string[];
};

const connectors: Connector[] = [
  // ── Processors ──
  { name: 'Stripe', logo: 'STRIPE.svg', category: 'Processor', regions: ['Global'] },
  { name: 'Adyen', logo: 'ADYEN.svg', category: 'Processor', regions: ['Global'] },
  { name: 'Checkout.com', logo: 'CHECKOUT.svg', category: 'Processor', regions: ['Global'] },
  { name: 'Braintree', logo: 'BRAINTREE.svg', category: 'Processor', regions: ['Global'] },
  { name: 'CyberSource', logo: 'CYBERSOURCE.svg', category: 'Processor', regions: ['Global'] },
  { name: 'Worldpay', logo: 'WORLDPAY.svg', category: 'Processor', regions: ['Global'] },
  { name: 'Worldpay XML', logo: 'WORLDPAYXML.svg', category: 'Processor', regions: ['Global'] },
  { name: 'Fiserv', logo: 'FISERV.svg', category: 'Processor', regions: ['North America'] },
  { name: 'Fiserv CommerceHub', logo: 'FISERVCOMMERCEHUB.svg', category: 'Processor', regions: ['North America'] },
  { name: 'Authorize.net', logo: 'AUTHORIZEDOTNET.svg', category: 'Processor', regions: ['North America'] },
  { name: 'Square', logo: 'SQUARE.svg', category: 'Processor', regions: ['North America'] },
  { name: 'Mollie', logo: 'MOLLIE.svg', category: 'Processor', regions: ['Europe'] },
  { name: 'dLocal', logo: 'DLOCAL.svg', category: 'Processor', regions: ['Latin America'] },
  { name: 'PayU', logo: 'PAYU.svg', category: 'Processor', regions: ['Europe', 'Asia Pacific', 'Latin America'] },
  { name: 'Nuvei', logo: 'NUVEI.svg', category: 'Processor', regions: ['Global'] },
  { name: 'Airwallex', logo: 'AIRWALLEX.svg', category: 'Processor', regions: ['Asia Pacific'] },
  { name: 'Rapyd', logo: 'RAPYD.svg', category: 'Processor', regions: ['Global'] },
  { name: 'BlueSnap', logo: 'BLUESNAP.svg', category: 'Processor', regions: ['Global'] },
  { name: 'NMI', logo: 'NMI.svg', category: 'Processor', regions: ['North America'] },
  { name: 'Shift4', logo: 'SHIFT4.svg', category: 'Processor', regions: ['North America', 'Europe'] },
  { name: 'Noon', logo: 'NOON.svg', category: 'Processor', regions: ['Middle East & Africa'] },
  { name: 'Ebanx', logo: 'EBANX.svg', category: 'Processor', regions: ['Latin America'] },
  { name: 'Bambora', logo: 'BAMBORA.svg', category: 'Processor', regions: ['North America', 'Europe'] },
  { name: 'Helcim', logo: 'HELCIM.svg', category: 'Processor', regions: ['North America'] },
  { name: 'Forte', logo: 'FORTE.svg', category: 'Processor', regions: ['North America'] },
  { name: 'Stax', logo: 'STAX.svg', category: 'Processor', regions: ['North America'] },
  { name: 'Elavon', logo: 'ELAVON.svg', category: 'Processor', regions: ['North America', 'Europe'] },
  { name: 'GlobalPay', logo: 'GLOBALPAY.svg', category: 'Processor', regions: ['Global'] },
  { name: 'MPGS', logo: 'MPGS.svg', category: 'Processor', regions: ['Global'] },
  { name: 'Datatrans', logo: 'DATATRANS.svg', category: 'Processor', regions: ['Europe'] },
  { name: 'Nexinets', logo: 'NEXINETS.svg', category: 'Processor', regions: ['Europe'] },
  { name: 'Nexi XPay', logo: 'NEXIXPAY.svg', category: 'Processor', regions: ['Europe'] },
  { name: 'Novalnet', logo: 'NOVALNET.svg', category: 'Processor', regions: ['Europe'] },
  { name: 'Redsys', logo: 'REDSYS.svg', category: 'Processor', regions: ['Europe'] },
  { name: 'PlaceToPay', logo: 'PLACETOPAY.svg', category: 'Processor', regions: ['Latin America'] },
  { name: 'PowerTranz', logo: 'POWERTRANZ.svg', category: 'Processor', regions: ['Latin America'] },
  { name: 'Moneris', logo: 'MONERIS.svg', category: 'Processor', regions: ['North America'] },
  { name: 'HiPay', logo: 'HIPAY.svg', category: 'Processor', regions: ['Europe'] },
  { name: 'Paybox', logo: 'PAYBOX.svg', category: 'Processor', regions: ['Europe'] },
  { name: 'Peach Payments', logo: 'PEACHPAYMENTS.svg', category: 'Processor', regions: ['Middle East & Africa'] },
  { name: 'Xendit', logo: 'XENDIT.svg', category: 'Processor', regions: ['Asia Pacific'] },
  { name: 'Silverflow', logo: 'SILVERFLOW.svg', category: 'Processor', regions: ['Europe'] },
  { name: 'JPMorgan', logo: 'JPMORGAN.svg', category: 'Processor', regions: ['North America'] },
  { name: 'Wells Fargo', logo: 'WELLSFARGO.svg', category: 'Processor', regions: ['North America'] },
  { name: 'Bank of America', logo: 'BANKOFAMERICA.svg', category: 'Processor', regions: ['North America'] },
  { name: 'TSYS', logo: 'TSYS.svg', category: 'Processor', regions: ['North America'] },
  { name: 'Adyen Platform', logo: 'ADYENPLATFORM.svg', category: 'Processor', regions: ['Global'] },
  { name: 'ACI', logo: 'ACI.svg', category: 'Processor', regions: ['Global'] },
  { name: 'Worldline', logo: 'WORLDLINE.svg', category: 'Processor', regions: ['Europe'] },
  { name: 'Paysafe', logo: 'PAYSAFE.svg', category: 'Processor', regions: ['Global'] },
  { name: 'Razorpay', logo: 'RAZORPAY.svg', category: 'Processor', regions: ['Asia Pacific'] },
  { name: 'Paystack', logo: 'PAYSTACK.svg', category: 'Processor', regions: ['Middle East & Africa'] },
  { name: 'Bambora APAC', logo: 'BAMBORAAPAC.svg', category: 'Processor', regions: ['Asia Pacific'] },
  { name: 'Fiserv EMEA', logo: 'FISERVEMEA.svg', category: 'Processor', regions: ['Europe', 'Middle East & Africa'] },
  { name: 'Fiserv IPG', logo: 'FISERVIPG.svg', category: 'Processor', regions: ['Global'] },
  { name: 'Worldpay Modular', logo: 'WORLDPAYMODULAR.svg', category: 'Processor', regions: ['Global'] },
  { name: 'Worldpay Vantiv', logo: 'WORLDPAYVANTIV.svg', category: 'Processor', regions: ['North America'] },
  { name: 'Barclaycard', logo: 'BARCLAYCARD.svg', category: 'Processor', regions: ['Europe'] },
  { name: 'Authipay', logo: 'AUTHIPAY.svg', category: 'Processor', regions: ['Europe'] },
  { name: 'Unzer', logo: 'UNZER.svg', category: 'Processor', regions: ['Europe'] },
  { name: 'MultiSafepay', logo: 'MULTISAFEPAY.svg', category: 'Processor', regions: ['Europe'] },
  { name: 'TrustPayments', logo: 'TRUSTPAYMENTS.svg', category: 'Processor', regions: ['Europe'] },
  { name: 'Fiuu', logo: 'FIUU.svg', category: 'Processor', regions: ['Asia Pacific'] },
  { name: 'Nomupay', logo: 'NOMUPAY.svg', category: 'Processor', regions: ['Europe', 'Asia Pacific'] },
  { name: 'GlobePay', logo: 'GLOBEPAY.svg', category: 'Processor', regions: ['Asia Pacific'] },
  { name: 'Finix', logo: 'FINIX.svg', category: 'Processor', regions: ['North America'] },
  { name: 'Celero', logo: 'CELERO.svg', category: 'Processor', regions: ['North America'] },
  { name: 'Revolv3', logo: 'REVOLV3.svg', category: 'Processor', regions: ['North America'] },
  { name: 'Zen', logo: 'ZEN.svg', category: 'Processor', regions: ['Europe'] },
  { name: 'FacilitaPay', logo: 'FACILITAPAY.svg', category: 'Processor', regions: ['Latin America'] },
  { name: 'NetsEllerPay', logo: 'NETSELLERPAY.svg', category: 'Processor', regions: ['Europe'] },
  { name: 'TrustPay', logo: 'TRUSTPAY.svg', category: 'Processor', regions: ['Europe'] },

  // ── Wallets ──
  { name: 'Apple Pay', logo: 'APPLE_PAY.svg', category: 'Wallet', regions: ['Global'] },
  { name: 'Google Pay', logo: 'GOOGLE_PAY.svg', category: 'Wallet', regions: ['Global'] },
  { name: 'Amazon Pay', logo: 'AMAZONPAY.svg', category: 'Wallet', regions: ['Global'] },
  { name: 'PayPal', logo: 'PAYPAL.svg', category: 'Wallet', regions: ['Global'] },
  { name: 'PayTM', logo: 'PAYTM.svg', category: 'Wallet', regions: ['Asia Pacific'] },
  { name: 'PhonePe', logo: 'PHONEPE.svg', category: 'Wallet', regions: ['Asia Pacific'] },

  // ── Bank Transfer ──
  { name: 'GoCardless', logo: 'GOCARDLESS.svg', category: 'Bank Transfer', regions: ['Europe'] },
  { name: 'TrueLayer', logo: 'TRUELAYER.svg', category: 'Bank Transfer', regions: ['Europe'] },
  { name: 'Plaid', logo: 'PLAID.svg', category: 'Bank Transfer', regions: ['North America'] },
  { name: 'Trustly', logo: 'TRUSTLY.svg', category: 'Bank Transfer', regions: ['Europe'] },
  { name: 'Volt', logo: 'VOLT.svg', category: 'Bank Transfer', regions: ['Europe'] },
  { name: 'Wise', logo: 'WISE.svg', category: 'Bank Transfer', regions: ['Global'] },
  { name: 'iDEAL', logo: 'IDEAL.svg', category: 'Bank Transfer', regions: ['Europe'] },
  { name: 'SEPA / Sofort', logo: 'SOFORT.svg', category: 'Bank Transfer', regions: ['Europe'] },
  { name: 'Giropay', logo: 'GIROPAY.svg', category: 'Bank Transfer', regions: ['Europe'] },
  { name: 'EPS', logo: 'EPS.svg', category: 'Bank Transfer', regions: ['Europe'] },
  { name: 'Token.io', logo: 'TOKENIO.svg', category: 'Bank Transfer', regions: ['Europe'] },
  { name: 'InesaPay', logo: 'INESPAY.svg', category: 'Bank Transfer', regions: ['Europe'] },
  { name: 'Dwolla', logo: 'DWOLLA.svg', category: 'Bank Transfer', regions: ['North America'] },

  // ── BNPL ──
  { name: 'Klarna', logo: 'KLARNA.svg', category: 'BNPL', regions: ['Global'] },
  { name: 'Affirm', logo: 'AFFIRM.svg', category: 'BNPL', regions: ['North America'] },
  { name: 'Afterpay', logo: 'AFTERPAY.svg', category: 'BNPL', regions: ['North America', 'Europe', 'Asia Pacific'] },

  // ── Fraud & Risk ──
  { name: 'Signifyd', logo: 'SIGNIFYD.svg', category: 'Fraud & Risk', regions: ['Global'] },
  { name: 'Riskified', logo: 'RISKIFIED.svg', category: 'Fraud & Risk', regions: ['Global'] },

  // ── 3DS ──
  { name: 'Netcetera', logo: 'NETCETERA.svg', category: '3DS', regions: ['Global'] },
  { name: 'Juspay 3DS Server', logo: 'JUSPAYTHREEDSSERVER.svg', category: '3DS', regions: ['Global'] },
  { name: 'ThreeDSecure.io', logo: 'THREEDSECUREIO.svg', category: '3DS', regions: ['Global'] },

  // ── Card Networks ──
  { name: 'Visa', logo: 'VISA.svg', category: 'Card Network', regions: ['Global'] },
  { name: 'Mastercard', logo: 'MASTERCARD.svg', category: 'Card Network', regions: ['Global'] },
  { name: 'American Express', logo: 'AMERICANEXPRESS.svg', category: 'Card Network', regions: ['Global'] },
  { name: 'Discover', logo: 'DISCOVER.svg', category: 'Card Network', regions: ['Global'] },
  { name: 'Diners Club', logo: 'DINERSCLUB.svg', category: 'Card Network', regions: ['Global'] },
  { name: 'JCB', logo: 'JCB.svg', category: 'Card Network', regions: ['Global'] },
  { name: 'UnionPay', logo: 'UNIONPAY.svg', category: 'Card Network', regions: ['Asia Pacific'] },
  { name: 'Interac', logo: 'INTERAC.svg', category: 'Card Network', regions: ['North America'] },
  { name: 'Cartes Bancaires', logo: 'CARTESBANCAIRES.svg', category: 'Card Network', regions: ['Europe'] },
];

const categories = ['All', 'Processor', 'Wallet', 'Bank Transfer', 'BNPL', 'Fraud & Risk', '3DS', 'Card Network'];
const regions = ['All Regions', 'Global', 'North America', 'Europe', 'Asia Pacific', 'Latin America', 'Middle East & Africa'];

const categoryIcons: Record<string, React.ReactNode> = {
  'All': <Globe size={14} />,
  'Processor': <CreditCard size={14} />,
  'Wallet': <Wallet size={14} />,
  'Bank Transfer': <Landmark size={14} />,
  'BNPL': <ShoppingBag size={14} />,
  'Fraud & Risk': <Shield size={14} />,
  '3DS': <Lock size={14} />,
  'Card Network': <Network size={14} />,
};

const categoryColors: Record<string, string> = {
  'Processor': 'bg-accent/10 text-accent',
  'Wallet': 'bg-emerald-50 text-emerald-600',
  'Bank Transfer': 'bg-amber-50 text-amber-700',
  'BNPL': 'bg-purple-50 text-purple-600',
  'Fraud & Risk': 'bg-rose-50 text-rose-600',
  '3DS': 'bg-sky-50 text-sky-600',
  'Card Network': 'bg-blue-50 text-blue-600',
};

const ConnectorsPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeRegion, setActiveRegion] = useState('All Regions');

  const filtered = useMemo(() => {
    return connectors.filter((c) => {
      const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === 'All' || c.category === activeCategory;
      const matchesRegion = activeRegion === 'All Regions' || c.regions.includes(activeRegion);
      return matchesSearch && matchesCategory && matchesRegion;
    });
  }, [search, activeCategory, activeRegion]);

  return (
    <div className="w-full relative bg-canvas min-h-screen">
      <Header />

      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-12 pb-24">
        {/* Page header */}
        <div className="mb-10">
          <h1 className="font-sans text-3xl md:text-4xl font-semibold tracking-tight text-obsidian leading-[1.1] mb-3">
            200+ Payment Connectors
          </h1>
          <p className="font-sans text-sm font-medium text-gray-500 leading-relaxed max-w-lg">
            Processors, wallets, banks, BNPL, fraud tools, and card networks. Global coverage, one integration.
          </p>
        </div>

        {/* Search */}
        <div className="mb-5">
          <div className="relative max-w-sm">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search connectors..."
              aria-label="Search connectors"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-border rounded-lg font-sans text-sm text-obsidian placeholder:text-gray-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-3 mb-6 pb-6 border-b border-border/60">
          {/* Category */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => {
              const count = cat === 'All' ? connectors.length : connectors.filter(c => c.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all duration-150 ${
                    activeCategory === cat
                      ? 'bg-accent text-white shadow-sm'
                      : 'bg-white border border-border/60 text-gray-500 hover:border-border hover:text-gray-700'
                  }`}
                >
                  {categoryIcons[cat]}
                  {cat === 'All' ? 'All' : cat}
                  <span className={activeCategory === cat ? 'text-white/60' : 'text-gray-300'}>{count}</span>
                </button>
              );
            })}
          </div>

          {/* Region */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mr-1">Region</span>
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all duration-150 ${
                  activeRegion === region
                    ? 'bg-obsidian text-white'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-white'
                }`}
              >
                {region === 'All Regions' ? 'All' : region}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="text-[11px] font-medium text-gray-400 mb-5">
          {filtered.length} connector{filtered.length !== 1 ? 's' : ''}
          {activeCategory !== 'All' ? ` in ${activeCategory}` : ''}
          {activeRegion !== 'All Regions' ? ` · ${activeRegion}` : ''}
          {search ? ` · "${search}"` : ''}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {filtered.map((connector) => (
              <div
                key={connector.name}
                className="group bg-white border border-border/40 rounded-xl p-4 transition-all duration-200 hover:border-border hover:shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 focus-within:ring-2 focus-within:ring-accent/20"
              >
                <div className="flex flex-col items-center text-center gap-2.5">
                  <div className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <img
                      src={`/connectors/${connector.logo}`}
                      alt={connector.name}
                      className="w-14 h-14 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-sans text-[12px] font-semibold text-obsidian leading-tight">
                    {connector.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="font-sans text-sm font-medium text-gray-400 mb-2">No connectors found</p>
            <button
              onClick={() => { setSearch(''); setActiveCategory('All'); setActiveRegion('All Regions'); }}
              className="text-xs font-medium text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-accent/20 rounded px-2 py-1"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-12 flex items-center justify-between py-6 border-t border-border/60">
          <p className="font-sans text-sm font-medium text-gray-500">
            Need a connector not listed? We integrate custom connectors in one week.
          </p>
          <a
            href="https://calendly.com/biz-betterswitch/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-accent text-white text-xs font-semibold px-5 py-2.5 rounded hover:bg-accent-hover transition-colors"
          >
            Request Integration
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ConnectorsPage;
