import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Play, X } from 'lucide-react';

// Helper function to get video ID from YouTube URL
const getYouTubeId = (url) => {
  const regex = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^?&]+)/;
  const matches = url.match(regex);
  return matches ? matches[1] : null;
};

const VideoCard = ({ title, thumbnail, videoId, onClick }) => (
  <div 
    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer" 
    onClick={onClick}
  >
    <img 
      src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
      alt={title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="font-medium text-gray-900">{title}</h3>
    </div>
  </div>
);

const VideoModal = ({ videoId, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
    <div className="bg-white p-4 rounded-lg max-w-4xl w-full mx-4">
      <div className="flex justify-end mb-2">
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X className="h-6 w-6" />
        </button>
      </div>
      <div className="relative pt-[56.25%]">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  </div>
);

const DiagnosticServices = () => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 mb-8">Diagnostic Services</h1>
    <div className="grid md:grid-cols-2 gap-6">
      {[
        {
          name: "Complete Blood Count",
          type: "Primary Test",
          description: "Comprehensive analysis of different blood components including hemoglobin levels."
        },
        {
          name: "Hemoglobin Electrophoresis",
          type: "Specialized Test",
          description: "Gold standard test for diagnosis of thalassemia and other hemoglobin disorders."
        },
        {
          name: "Genetic Testing",
          type: "Advanced Diagnostic",
          description: "DNA analysis for specific thalassemia mutations and variants."
        },
        {
          name: "Iron Studies",
          type: "Monitoring Test",
          description: "Regular monitoring of iron levels in thalassemia patients."
        }
      ].map((service, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{service.name}</h2>
          <p className="text-red-600 mb-2">{service.type}</p>
          <p className="text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const TransfusionServices = () => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 mb-8">Transfusion Services</h1>
    <div className="grid md:grid-cols-2 gap-6">
      {[
        {
          name: "Regular Transfusion Program",
          type: "Core Service",
          description: "Scheduled blood transfusions for registered thalassemia patients."
        },
        {
          name: "Emergency Transfusion",
          type: "Critical Care",
          description: "24/7 emergency transfusion services for urgent cases."
        },
        {
          name: "Leukoreduced Blood Products",
          type: "Specialized Service",
          description: "Provision of filtered blood products to prevent transfusion reactions."
        },
        {
          name: "Cross-matching Services",
          type: "Essential Service",
          description: "Advanced blood typing and cross-matching for safe transfusions."
        }
      ].map((service, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{service.name}</h2>
          <p className="text-red-600 mb-2">{service.type}</p>
          <p className="text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const BloodBank = () => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 mb-8">Blood Bank</h1>
    <div className="grid md:grid-cols-2 gap-6">
      {[
        {
          name: "Component Separation Unit",
          type: "Core Facility",
          description: "State-of-the-art facility for blood component separation and storage."
        },
        {
          name: "Quality Control Lab",
          type: "Testing Facility",
          description: "Advanced laboratory for ensuring blood product safety and quality."
        },
        {
          name: "Storage Facility",
          type: "Infrastructure",
          description: "Modern storage units with 24/7 temperature monitoring and backup systems."
        },
        {
          name: "Mobile Collection Unit",
          type: "Outreach Service",
          description: "Fully equipped mobile units for conducting blood donation camps."
        }
      ].map((facility, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{facility.name}</h2>
          <p className="text-red-600 mb-2">{facility.type}</p>
          <p className="text-gray-600">{facility.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const Research = () => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 mb-8">Research Activities</h1>
    <div className="grid md:grid-cols-2 gap-6">
      {[
        {
          name: "Clinical Trials",
          type: "Active Research",
          description: "Ongoing trials for new treatment protocols and medications."
        },
        {
          name: "Genetic Studies",
          type: "Core Research",
          description: "Research on genetic aspects of thalassemia and sickle cell disease."
        },
        {
          name: "Treatment Optimization",
          type: "Clinical Research",
          description: "Studies focused on improving current treatment protocols."
        },
        {
          name: "Collaborative Research",
          type: "Partnership Program",
          description: "International collaborations with leading research institutions."
        }
      ].map((project, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{project.name}</h2>
          <p className="text-red-600 mb-2">{project.type}</p>
          <p className="text-gray-600">{project.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const AdvancedDiagnostic = () => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 mb-8">Advanced Diagnostic Services</h1>
    <div className="grid md:grid-cols-2 gap-6">
      {[
        {
          name: "Molecular Diagnostics",
          type: "Specialized Testing",
          description: "Advanced genetic testing using PCR and DNA sequencing techniques."
        },
        {
          name: "Prenatal Testing",
          type: "Critical Service",
          description: "Comprehensive prenatal diagnostic services for at-risk pregnancies."
        },
        {
          name: "NGS Analysis",
          type: "Advanced Technology",
          description: "Next-Generation Sequencing for detailed genetic analysis."
        },
        {
          name: "Specialized Imaging",
          type: "Diagnostic Imaging",
          description: "Advanced imaging services for complication monitoring."
        }
      ].map((service, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{service.name}</h2>
          <p className="text-red-600 mb-2">{service.type}</p>
          <p className="text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const Activities = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const videos = [
    { url: 'https://youtu.be/Viv20IOxA3s', title: 'Video Title 1' },
    { url: 'https://youtu.be/0CQ7UySpXkI', title: 'Video Title 2' },
    { url: 'https://youtu.be/e-e10G3g1ds', title: 'Video Title 3' },
    { url: 'https://youtu.be/gF-vzdwA5B0', title: 'Video Title 4' }
  ].map(video => ({ ...video, videoId: getYouTubeId(video.url) }));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Routes>
        <Route
          index
          element={
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Activities</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                  <VideoCard
                    key={video.videoId}
                    {...video}
                    onClick={() => setSelectedVideo(video.videoId)}
                  />
                ))}
              </div>
              {selectedVideo && (
                <VideoModal
                  videoId={selectedVideo}
                  onClose={() => setSelectedVideo(null)}
                />
              )}
            </div>
          }
        />
        <Route path="diagnostic" element={<DiagnosticServices />} />
        <Route path="transfusion" element={<TransfusionServices />} />
        <Route path="blood-bank" element={<BloodBank />} />
        <Route path="research" element={<Research />} />
        <Route path="advanced-diagnostic" element={<AdvancedDiagnostic />} />
      </Routes>
    </div>
  );
};

export default Activities;