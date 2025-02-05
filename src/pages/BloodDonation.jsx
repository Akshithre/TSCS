import React from 'react';
import { Routes, Route } from 'react-router-dom';

const BloodDonation = () => {
  return (
    <div className="max-w-4xl">
      <Routes>
        <Route 
          index 
          element={
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-8">Blood Donation Camps</h1>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Corporate Blood Drives</h2>
                  <p className="text-gray-600">
                    Partner with leading corporations to organize regular blood donation camps at 
                    their premises, making it convenient for employees to donate blood.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">College Camps</h2>
                  <p className="text-gray-600">
                    Regular blood donation drives at colleges and universities to engage young donors 
                    and create awareness about blood disorders among students.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Police Department Drives</h2>
                  <p className="text-gray-600">
                    Special blood donation camps organized in collaboration with the Police Department, 
                    showcasing their commitment to community service.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Camps</h2>
                  <div className="space-y-3">
                    {/* Placeholder for upcoming camps list */}
                  </div>
                </div>
              </div>
            </div>
          }
        />
        
        <Route path="corporates" element={<CorporateSection />} />
        <Route path="colleges" element={<CollegeSection />} />
        <Route path="police" element={<PoliceSection />} />
      </Routes>
    </div>
  );
};

// Sub-components for each section
const CorporateSection = () => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 mb-8">Corporate Blood Donation Drives</h1>
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Partner Corporations</h2>
        <div className="space-y-4">
          {/* Add list of corporate partners */}
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Schedule a Corporate Drive</h2>
        <p className="text-gray-600 mb-4">
          Interested in organizing a blood donation camp at your company? Contact us to schedule a drive.
        </p>
        {/* Add contact form or contact information */}
      </div>
    </div>
  </div>
);

const CollegeSection = () => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 mb-8">College Blood Donation Camps</h1>
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Participating Institutions</h2>
        <div className="space-y-4">
          {/* Add list of participating colleges */}
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Student Awareness Program</h2>
        <p className="text-gray-600">
          Details about our youth engagement and awareness initiatives in educational institutions.
        </p>
      </div>
    </div>
  </div>
);

const PoliceSection = () => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 mb-8">Police Department Blood Donation Drives</h1>
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Police Department Initiatives</h2>
        <p className="text-gray-600">
          Overview of our collaboration with various police departments and their contribution 
          to the blood donation cause.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Past Drives</h2>
        <div className="space-y-4">
          {/* Add list of past police department drives */}
        </div>
      </div>
    </div>
  </div>
);

export default BloodDonation;
