import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/tscs-logo.jpeg';

const Navigation = () => (
  <nav className="bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src={logo}
              alt="Thalassemia and Sickle Cell Society" 
              className="w-20 h-20 object-contain"
            />
            <span className="ml-2 text-xl font-semibold text-gray-800">TSCS Hyderabad</span>
          </Link>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-red-600">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-red-600">About Us</Link>
          <Link to="/services" className="text-gray-700 hover:text-red-600">Our Services</Link>
          <Link to="/activities" className="text-gray-700 hover:text-red-600">Our Activities</Link>
          <Link to="/donations" className="text-gray-700 hover:text-red-600">Donations</Link>
        </div>

        <div>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md">
            DONATE
          </button>
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;