import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  mainClassName?: string;
  showFooter?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  mainClassName = '',
  showFooter = true,
}) => {
  return (
    <div className="w-full relative bg-canvas min-h-screen">
      <Header />
      <main id="main-content" className={mainClassName}>
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
};

export default PageLayout;
