import React from 'react';
import MenuItem from './MenuItem';
import { sidebarConfig } from './sidebarConfig';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-50 min-h-screen p-4">
      <div className="space-y-2">
        {sidebarConfig.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;