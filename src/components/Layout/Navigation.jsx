import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/tscs-logo.jpeg';
import { Menu, X } from 'lucide-react';

const Navigation = ({ toggleSidebar, isSidebarOpen }) => (
  <nav className="bg-blue-900 shadow-lg fixed w-full top-0 z-50">
    <div className="flex items-center">
      <button
        onClick={toggleSidebar}
        className="hover:bg-blue-100 focus:outline-none h-16 w-12 flex items-center justify-center"
      >
        {isSidebarOpen ? (
          <X className="h-6 w-6 text-red-600" />
        ) : (
          <Menu className="h-6 w-6 text-red-600" />
        )}
      </button>
      
      <div className="max-w-7xl mx-auto flex-1">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src={logo}
                alt="Thalassemia and Sickle Cell Society" 
                className="w-14 h-20 object-contain"
              />
              <span className="ml-2 text-xl font-semibold text-white">Thalassemia Sickle Cell Society Hyderabad</span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-red-600 font-medium">Home</Link>
            <Link to="/about" className="text-white hover:text-red-600 font-medium">About Us</Link>
            <Link to="/services" className="text-white hover:text-red-600 font-medium">Our Services</Link>
            <Link to="/activities" className="text-white hover:text-red-600 font-medium">Our Activities</Link>
            <Link to="/donations" className="text-white hover:text-red-600 font-medium">Donations</Link>
          </div>

          <div className="pr-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-semibold shadow-md transition-colors duration-200">
              DONATE
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;