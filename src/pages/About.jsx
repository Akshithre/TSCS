import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">About TSCS Hyderabad</h1>
      
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-gray-600">
            The Thalassemia and Sickle Cell Society (TSCS) is a non-profit organization dedicated to the 
            treatment and management of Thalassemia and Sickle Cell disease. Our center in Hyderabad 
            serves as a comprehensive care facility for patients affected by these conditions.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To create a better future for individuals affected by Thalassemia and Sickle Cell disease 
            through comprehensive care, research, and community support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;