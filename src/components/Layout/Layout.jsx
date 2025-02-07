import React, { useState } from 'react';
import Navigation from './Navigation';
import Sidebar from './Sidebar/Sidebar';

export const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen">
      <Navigation toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div className="flex pt-16">
        <Sidebar isOpen={isSidebarOpen} />
        <main 
          className={`flex-1 p-8 bg-white transition-all duration-300 ${
            isSidebarOpen ? 'ml-64' : 'ml-0'
          }`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;