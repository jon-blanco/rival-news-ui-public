import React, { ReactNode } from 'react';
import NewsBanner from '../components/NewsBanner';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NewsBanner />
      <div className={`flex-grow flex justify-center items-center`}>
        {children}
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
