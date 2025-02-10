import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';

const MenuItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-1">
      <div
        className={`flex items-center justify-between p-3 rounded-lg hover:bg-red-50 cursor-pointer transition-colors duration-200 ${
          isOpen ? 'bg-red-50' : ''
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-3">
          {item.icon}
          <span className="text-red-900 font-medium">{item.name}</span>
        </div>
        {item.subItems && (
          <span className="text-red-600">
            {isOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </span>
        )}
      </div>
      
      {isOpen && item.subItems && (
        <div className="ml-8 space-y-1">
          {item.subItems.map((subItem, index) => (
            <Link
              key={index}
              to={subItem.link}
              className="block p-2 text-sm text-red-700 hover:text-red-600 hover:bg-red-50 rounded transition-colors duration-200"
            >
              {subItem.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;