import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Awareness = () => {
  return (
    <div className="max-w-4xl">
      <Routes>
        <Route 
          index 
          element={
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-8">Awareness Programs</h1>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Medical Education Programs</h2>
                  <p className="text-gray-600">
                    Regular CME programs to educate healthcare professionals about the latest 
                    developments in Thalassemia and Sickle Cell disease management.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">National Conferences</h2>
                  <p className="text-gray-600">
                    Annual conferences bringing together experts, researchers, and healthcare providers 
                    to share knowledge and best practices.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Community Outreach</h2>
                  <p className="text-gray-600">
                    Awareness rallies and community events to educate the public about 
                    blood disorders and the importance of blood donation.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Awareness Rides</h2>
                  <p className="text-gray-600">
                    Annual bike rides to spread awareness about Thalassemia and Sickle Cell disease 
                    across different communities.
                  </p>
                </div>
              </div>
            </div>
          }
        />
        
        <Route path="cmes" element={<CMESection />} />
        <Route path="conferences" element={<ConferencesSection />} />
        <Route path="rallies" element={<RalliesSection />} />
        <Route path="bike-ride" element={<BikeRideSection />} />
      </Routes>
    </div>
  );
};

// Sub-components for each section
const CMESection = () => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 mb-8">Continuing Medical Education</h1>
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Upcoming CME Programs</h2>
        {/* Add upcoming CME program details */}
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Past Programs</h2>
        {/* Add past CME program details */}
      </div>
    </div>
  </div>
);

const ConferencesSection = () => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 mb-8">National Conferences</h1>
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Annual Conference 2024</h2>
        {/* Add conference details */}
      </div>
    </div>
  </div>
);

const RalliesSection = () => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 mb-8">Awareness Rallies</h1>
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Rallies</h2>
        {/* Add rally details */}
      </div>
    </div>
  </div>
);

const BikeRideSection = () => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 mb-8">Awareness Bike Ride</h1>
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Annual Bike Ride Event</h2>
        {/* Add bike ride event details */}
      </div>
    </div>
  </div>
);

export default Awareness;