import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Overview = () => {
  return (
    <div className="max-w-4xl">
      <Routes>
        <Route 
          index 
          element={
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-8">TSCS Overview</h1>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Organization</h2>
                  <p className="text-gray-600">
                    The Thalassemia and Sickle Cell Society (TSCS) is a premier institution dedicated 
                    to the treatment and management of blood disorders. Our comprehensive approach 
                    combines medical excellence, research, and community service.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Leadership</h2>
                  <p className="text-gray-600">
                    Our organization is guided by experienced professionals across medical, 
                    research, and administrative domains, ensuring excellence in patient care 
                    and organizational management.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Infrastructure</h2>
                  <p className="text-gray-600">
                    State-of-the-art facilities equipped with modern medical equipment and 
                    supported by trained healthcare professionals to provide the best care 
                    for our patients.
                  </p>
                </div>
              </div>
            </div>
          }
        />
        
        <Route path="board-members" element={<BoardMembers />} />
        <Route path="organogram" element={<Organogram />} />
        <Route path="medical-team" element={<MedicalTeam />} />
        <Route path="research-team" element={<ResearchTeam />} />
        <Route path="ethical-committee" element={<EthicalCommittee />} />
        <Route path="auditors" element={<Auditors />} />
      </Routes>
    </div>
  );
};

// Sub-components for each section
const BoardMembers = () => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 mb-8">Board Members</h1>
    <div className="grid md:grid-cols-2 gap-6">
      {[
        {
          name: "Dr. Sample Name",
          position: "President",
          bio: "Over 20 years of experience in treating blood disorders."
        },
        // Add more board members here
      ].map((member, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h2>
          <p className="text-red-600 mb-2">{member.position}</p>
          <p className="text-gray-600">{member.bio}</p>
        </div>
      ))}
    </div>
  </div>
);

const Organogram = () => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 mb-8">Organizational Structure</h1>
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      {/* Add organizational chart here */}
    </div>
  </div>
);

const MedicalTeam = () => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 mb-8">Medical Team</h1>
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Specialists</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {/* Add medical team members here */}
        </div>
      </div>
    </div>
  </div>
);

const ResearchTeam = () => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 mb-8">Research Advisory Team</h1>
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Research Focus Areas</h2>
        {/* Add research focus areas */}
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Team Members</h2>
        {/* Add research team members */}
      </div>
    </div>
  </div>
);

const EthicalCommittee = () => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 mb-8">Ethical Committee</h1>
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Committee Members</h2>
        {/* Add ethical committee members */}
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Guidelines</h2>
        {/* Add ethical guidelines */}
      </div>
    </div>
  </div>
);

const Auditors = () => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 mb-8">Auditors</h1>
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Financial Oversight</h2>
      {/* Add auditor information */}
    </div>
  </div>
);

export default Overview;