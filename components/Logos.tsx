import React from 'react';

const Logos: React.FC = () => {
  return (
    <section className="border-y border-gray-200/60 py-16 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
        <p className="text-xs font-semibold text-gray-900 whitespace-nowrap md:w-auto w-full text-center md:text-left">
          TRUSTED BY
        </p>
        <div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-8 group opacity-60 group-hover:opacity-100 transition-opacity duration-500">
          <a href="https://dodopayments.com/" target="_blank" rel="noopener noreferrer" className="font-sans text-lg font-bold text-gray-900 tracking-tight hover:text-accent transition-colors cursor-pointer pointer-events-auto">dodopayments</a>
          <a href="https://www.vaultera.co/" target="_blank" rel="noopener noreferrer" className="font-sans text-lg font-bold text-gray-900 tracking-tight hover:text-accent transition-colors cursor-pointer pointer-events-auto">VAULTERA</a>
          <a href="https://pesaswap.com/info/#/" target="_blank" rel="noopener noreferrer" className="font-sans text-lg font-bold text-gray-900 tracking-tight hover:text-accent transition-colors cursor-pointer pointer-events-auto">PesaSwap</a>
          <a href="https://www.paycode.com/" target="_blank" rel="noopener noreferrer" className="font-mono text-lg font-bold text-gray-900 tracking-tight hover:text-accent transition-colors cursor-pointer pointer-events-auto">paycode</a>
        </div>
      </div>
    </section>
  );
};

export default Logos;
