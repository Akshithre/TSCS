import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Activities = () => {
  return (
    <div className="max-w-4xl">
      <Routes>
        <Route 
          index 
          element={
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Activities</h1>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Diagnostic Services</h2>
                  <p className="text-gray-600">
                    Comprehensive diagnostic facilities for Thalassemia and Sickle Cell disease, 
                    including genetic testing and regular health monitoring.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Transfusion Services</h2>
                  <p className="text-gray-600">
                    Regular blood transfusion services with modern facilities and careful monitoring 
                    of patients' health parameters.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Blood Bank</h2>
                  <p className="text-gray-600">
                    State-of-the-art blood bank facility ensuring safe and reliable blood supply 
                    for our patients.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Research Initiatives</h2>
                  <p className="text-gray-600">
                    Ongoing research projects and clinical studies aimed at improving treatment 
                    outcomes and patient care.
                  </p>
                </div>
              </div>
            </div>
          }
        />
        
        <Route path="diagnostic" element={<DiagnosticSection />} />
        <Route path="transfusion" element={<TransfusionSection />} />
        <Route path="blood-bank" element={<BloodBankSection />} />
        <Route path="research" element={<ResearchSection />} />
        <Route path="advanced-diagnostic" element={<AdvancedDiagnosticSection />} />
      </Routes>
    </div>
  );
};

// Sub-components for each section
const DiagnosticSection = () => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 mb-8">Diagnostic Services</h1>
    {/* Add specific diagnostic service content */}
  </div>
);

const TransfusionSection = () => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 mb-8">Transfusion Services</h1>
    {/* Add specific transfusion service content */}
  </div>
);

const BloodBankSection = () => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 mb-8">Blood Bank</h1>
    {/* Add specific blood bank content */}
  </div>
);

const ResearchSection = () => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 mb-8">Research</h1>
    {/* Add specific research content */}
  </div>
);

const AdvancedDiagnosticSection = () => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 mb-8">Advanced Diagnostic Services</h1>
    {/* Add specific advanced diagnostic content */}
  </div>
);

export default Activities;