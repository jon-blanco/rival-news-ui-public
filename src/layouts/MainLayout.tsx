import React, { ReactNode } from 'react';
import NewsBanner from '../components/NewsBanner';
import Footer from '../components/Footer';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NewsBanner />
      <div className="flex-grow flex justify-center items-center">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
