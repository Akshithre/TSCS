import React from 'react';
import MenuItem from './MenuItem';
import { sidebarConfig } from './sidebarConfig';

const Sidebar = ({ isOpen }) => {
  return (
    <div 
      className={`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-white shadow-lg transition-transform duration-300 ease-in-out transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
      style={{ width: '16rem' }}
    >
      <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-blue-200 hover:[&::-webkit-scrollbar-thumb]:bg-blue-300">
        <div className="p-4 space-y-2">
          {sidebarConfig.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;