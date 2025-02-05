import React from 'react';

const Home = () => (
  <div className="max-w-4xl">
    <h1 className="text-3xl font-bold text-gray-900 mb-8">Welcome to TSCS Hyderabad</h1>
    <div className="grid gap-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-600">
          Dedicated to serving the community through blood donation camps, awareness programs, and social services.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activities</h2>
        <div className="space-y-4">
          {/* Add your recent activities content here */}
        </div>
      </div>
    </div>
  </div>
);

export default Home;