import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Play, X } from 'lucide-react';

const getYouTubeId = (url) => {
  const regex = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^?&]+)/;
  const matches = url.match(regex);
  return matches ? matches[1] : null;
};

const VideoCard = ({ title, thumbnail, videoId, onClick }) => (
  <div 
    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer border border-blue-100 hover:bg-blue-50 transition-colors" 
    onClick={onClick}
  >
    <img 
      src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
      alt={title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="font-medium text-blue-900">{title}</h3>
    </div>
  </div>
);

const VideoModal = ({ videoId, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
    <div className="bg-white p-4 rounded-lg max-w-4xl w-full mx-4">
      <div className="flex justify-end mb-2">
        <button onClick={onClose} className="text-blue-500 hover:text-blue-700">
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
  <div className="bg-blue-50 p-6">
    <h1 className="text-3xl font-bold text-blue-900 mb-8">Diagnostic Services</h1>
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">Laboratory Services</h2>
        <p className="text-blue-700 mb-4">
          Established in September 2011, our diagnostic services offer advanced technology and comprehensive testing facilities. Operating hours: 8:00 AM to 9:00 PM, all 365 days.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-blue-800">Available Services</h3>
            <ul className="space-y-2 text-blue-700">
              <li>• Biochemistry</li>
              <li>• Clinical Pathology</li>
              <li>• Hormonal Assay</li>
              <li>• Microbiology</li>
              <li>• Hematology</li>
              <li>• Histopathology</li>
              <li>• ECG & Clotting Factors</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-blue-800">Special Features</h3>
            <ul className="space-y-2 text-blue-700">
              <li>• Bedside sample collection within 5km radius</li>
              <li>• Advanced technology equipment</li>
              <li>• Qualitative and quantitative analysis</li>
              <li>• Affordable testing services</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AdvancedDiagnostic = () => (
  <div className="bg-blue-50 p-6">
    <h1 className="text-3xl font-bold text-blue-900 mb-8">Advanced Diagnostic Laboratory</h1>
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">Kamala Bai Agarwal (Duke's) Diagnostic Laboratory</h2>
        <p className="text-blue-700 mb-4">
          Established in 2020, providing advanced services to Thalassemia and Sickle Cell Anemia patients under one roof.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-blue-800 mb-2">Equipment</h3>
            <ul className="space-y-2 text-blue-700">
              <li>• Digital X-Ray</li>
              <li>• ECG</li>
              <li>• Ultra-Sound</li>
              <li>• 2D-ECHO cardiogram</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-blue-800 mb-2">Specialist Team</h3>
            <ul className="space-y-2 text-blue-700">
              <li>• Endocrinologist</li>
              <li>• Cardiologist</li>
              <li>• Paediatric Hemato Oncologist</li>
              <li>• Ophthalmologist</li>
              <li>• Dentist</li>
              <li>• Radiologist</li>
              <li>• Pathologist</li>
              <li>• Orthopedician</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TransfusionServices = () => (
  <div className="bg-blue-50 p-6">
    <h1 className="text-3xl font-bold text-blue-900 mb-8">Blood Transfusion Services</h1>
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">Transfusion Unit</h2>
        <p className="text-blue-700 mb-4">
          Our 50-bedded Blood Transfusion Unit serves approximately 60 patients daily, providing safe and quality blood transfusion services.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-blue-800 mb-2">Services</h3>
            <ul className="space-y-2 text-blue-700">
              <li>• Saline washed blood</li>
              <li>• ABO and Rh(D) compatible blood</li>
              <li>• Regular monitoring</li>
              <li>• Quality assurance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const BloodBank = () => (
  <div className="bg-blue-50 p-6">
    <h1 className="text-3xl font-bold text-blue-900 mb-8">Blood Bank</h1>
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">Vuppala Venkaiah Memorial Blood Centre</h2>
        <p className="text-blue-700 mb-4">
          Established in March 2010, our blood centre ensures safe blood supply for thalassemia patients and supports nearby hospitals.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-blue-800 mb-2">Key Features</h3>
            <ul className="space-y-2 text-blue-700">
              <li>• Voluntary donations from various organizations</li>
              <li>• High-quality component preparation</li>
              <li>• Supports over 1000 Thalassemia patients</li>
              <li>• Advanced blood safety measures</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Research = () => (
  <div className="bg-blue-50 p-6">
    <h1 className="text-3xl font-bold text-blue-900 mb-8">Research Activities</h1>
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">Research Focus</h2>
        <p className="text-blue-700 mb-4">
          Our research center focuses on comprehensive screening and understanding of thalassemia, sickle cell anemia, and other hemoglobinopathies.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-blue-800 mb-2">Current Projects</h3>
            <ul className="space-y-2 text-blue-700">
              <li>• Gene therapy techniques development</li>
              <li>• Modifier genes research</li>
              <li>• Iron overload studies</li>
              <li>• Clinical trials participation</li>
              <li>• DNA data bank maintenance</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-blue-800 mb-2">Collaborations</h3>
            <ul className="space-y-2 text-blue-700">
              <li>• Celgene corporation, USA</li>
              <li>• MedGenome Labs Ltd, Hyderabad</li>
              <li>• Institute of Genomics and Integrated Biology, New Delhi</li>
              <li>• Department of Hematology, Palermo, Italy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Activities = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const videos = [
    { url: 'https://youtu.be/Viv20IOxA3s', title: 'About Our Services' },
    { url: 'https://youtu.be/0CQ7UySpXkI', title: 'Research Initiatives' },
    { url: 'https://youtu.be/e-e10G3g1ds', title: 'Patient Care' },
    { url: 'https://youtu.be/gF-vzdwA5B0', title: 'Community Outreach' }
  ].map(video => ({ ...video, videoId: getYouTubeId(video.url) }));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-blue-50">
      <Routes>
        <Route
          index
          element={
            <div>
              <h1 className="text-3xl font-bold text-blue-900 mb-8">Our Activities</h1>
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
        <Route path="advanced-diagnostic" element={<AdvancedDiagnostic />} />
        <Route path="transfusion" element={<TransfusionServices />} />
        <Route path="blood-bank" element={<BloodBank />} />
        <Route path="research" element={<Research />} />
      </Routes>
    </div>
  );
};

export default Activities;