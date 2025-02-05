import React from 'react';
import Navigation from './Navigation';
import Sidebar from './Sidebar/Sidebar';

export const Layout = ({ children }) => (
  <div className="min-h-screen">
    <Navigation />
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8 bg-white">
        {children}
      </main>
    </div>
  </div>
);