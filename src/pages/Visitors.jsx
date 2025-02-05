import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Visitors = () => {
  return (
    <div className="max-w-4xl">
      <Routes>
        <Route 
          index 
          element={
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-8">Distinguished Visitors</h1>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Visitors</h2>
                  <p className="text-gray-600 mb-4">
                    TSCS Hyderabad has been honored to host numerous distinguished visitors 
                    from both India and abroad. These visits have helped strengthen our 
                    mission and expand our reach in serving the community.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* National Visitors Preview */}
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">National Visitors</h2>
                    <p className="text-gray-600 mb-4">
                      Prominent personalities from various fields across India who have 
                      supported our cause and visited our facilities.
                    </p>
                  </div>

                  {/* International Visitors Preview */}
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">International Visitors</h2>
                    <p className="text-gray-600 mb-4">
                      Medical professionals and dignitaries from around the world who have 
                      shown interest in our work and shared their expertise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          }
        />
        
        <Route path="national" element={<NationalVisitors />} />
        <Route path="international" element={<InternationalVisitors />} />
      </Routes>
    </div>
  );
};

const VisitorCard = ({ visitor }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">{visitor.name}</h3>
      <p className="text-red-600">{visitor.designation}</p>
      <p className="text-gray-600">{visitor.description}</p>
      <div className="text-sm text-gray-500">
        <p>Visited on: {visitor.visitDate}</p>
      </div>
    </div>
  </div>
);

const NationalVisitors = () => {
  const visitors = [
    {
      name: "Dr. Example Name",
      designation: "Director, National Institute of Health",
      description: "Visited our facilities and appreciated our comprehensive approach to patient care.",
      visitDate: "January 15, 2024"
    },
    // Add more national visitors here
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">National Visitors</h1>
      
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Dignitaries</h2>
          <p className="text-gray-600 mb-4">
            We are honored to have hosted various distinguished personalities from across India 
            who have shown keen interest in our work and supported our mission.
          </p>
        </div>

        <div className="grid gap-6">
          {visitors.map((visitor, index) => (
            <VisitorCard key={index} visitor={visitor} />
          ))}
        </div>
      </div>
    </div>
  );
};

const InternationalVisitors = () => {
  const visitors = [
    {
      name: "Prof. Sample Name",
      designation: "Thalassemia Research Center, International University",
      description: "Collaborated on research initiatives and shared insights on global best practices.",
      visitDate: "March 10, 2024"
    },
    // Add more international visitors here
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">International Visitors</h1>
      
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Global Collaborations</h2>
          <p className="text-gray-600 mb-4">
            Our international visitors bring valuable perspectives and help us establish 
            global connections in the field of Thalassemia and Sickle Cell disease management.
          </p>
        </div>

        <div className="grid gap-6">
          {visitors.map((visitor, index) => (
            <VisitorCard key={index} visitor={visitor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Visitors;