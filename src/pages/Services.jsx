import React from 'react';

const Services = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Services</h1>

      <div className="space-y-8">
        {/* Medical Services */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Medical Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-medium text-gray-800">Diagnostic Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Complete Blood Count (CBC)</li>
                <li>• Hemoglobin Electrophoresis</li>
                <li>• Genetic Testing</li>
                <li>• Prenatal Screening</li>
                <li>• Iron Studies</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium text-gray-800">Treatment Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Regular Blood Transfusion</li>
                <li>• Iron Chelation Therapy</li>
                <li>• Growth Monitoring</li>
                <li>• Complications Management</li>
                <li>• Emergency Care</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Support Services */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Support Services</h2>
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-medium text-gray-800">Counseling Services</h3>
              <p className="text-gray-600">
                Our experienced counselors provide emotional support and guidance to patients 
                and families dealing with Thalassemia and Sickle Cell disease. Services include:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Genetic Counseling</li>
                <li>• Family Support Groups</li>
                <li>• Psychological Support</li>
                <li>• Educational Guidance</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium text-gray-800">Educational Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Patient Education Programs</li>
                <li>• Disease Management Workshops</li>
                <li>• Nutrition Counseling</li>
                <li>• Lifestyle Management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Blood Bank Services */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Blood Bank Services</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Our state-of-the-art blood bank facility ensures safe and reliable blood supply 
              for our patients. Services include:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Blood Collection and Storage</li>
              <li>• Component Separation</li>
              <li>• Cross-matching</li>
              <li>• Quality Control</li>
              <li>• Emergency Blood Supply</li>
            </ul>
          </div>
        </div>

        {/* Research and Development */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Research Programs</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              We actively participate in research to improve treatment outcomes:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Clinical Trials</li>
              <li>• Treatment Protocol Development</li>
              <li>• Collaborative Research Projects</li>
              <li>• Patient Data Analysis</li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Schedule an Appointment</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              For appointments and inquiries, please contact us:
            </p>
            <div className="space-y-2 text-gray-600">
              <p>• Phone: +91-XXXXXXXXXX</p>
              <p>• Email: appointments@tscs.org</p>
              <p>• Hours: Monday - Saturday, 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;