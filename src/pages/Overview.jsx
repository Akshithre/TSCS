import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Overview = () => {
  return (
    <div className="max-w-4xl bg-blue-50">
      <Routes>
        <Route 
          index 
          element={
            <div>
              <h1 className="text-3xl font-bold text-blue-900 mb-8">TSCS Overview</h1>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100 hover:bg-blue-50 transition-colors">
                  <h2 className="text-xl font-semibold text-blue-800 mb-4">Our Organization</h2>
                  <p className="text-blue-700">
                    The Thalassemia and Sickle Cell Society (TSCS) is a premier institution dedicated 
                    to the treatment and management of blood disorders. Our comprehensive approach 
                    combines medical excellence, research, and community service.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100 hover:bg-blue-50 transition-colors">
                  <h2 className="text-xl font-semibold text-blue-800 mb-4">Leadership</h2>
                  <p className="text-blue-700">
                    Our organization is guided by experienced professionals across medical, 
                    research, and administrative domains, ensuring excellence in patient care 
                    and organizational management.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100 hover:bg-blue-50 transition-colors">
                  <h2 className="text-xl font-semibold text-blue-800 mb-4">Infrastructure</h2>
                  <p className="text-blue-700">
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

const BoardMembers = () => {
  const members = [
    {
      name: "LATE DR. A.N. KRISHNA KUMARI",
      position: "FOUNDER PRESIDENT",
      bio: "To have all the services for Thalassemia under one roof."
    },
    {
      name: "LATE DR. HARIPRIYA RANGARAJAN",
      position: "CHIEF PATRON",
      bio: "Life's most important question is: What are we doing for the society?"
    },
    {
      name: "MR. NARESH RATHI",
      position: "CHIEF PATRON",
      bio: "I Believe: Very little is needed to make a happy life; it is all within yourself, in your way of thinking."
    },
    {
      name: "MR SHYAM LOYA",
      position: "CHIEF PATRON",
      bio: "I am happy to associate with society to contribute for the children suffering from Thalassemia and Sickle Cell Anemia."
    },
    {
      name: "MR. PRADEEP UPPALA",
      position: "CHIEF PATRON",
      bio: "I Believe: We are constituted so that simple acts of kindness, such as giving to charity or expressing gratitude, have a positive effect on our long-term on all the patients."
    },
    {
      name: "MR. CHANDRAKANT AGARWAL",
      position: "PRESIDENT",
      bio: "I Believe: We must value life and treasure each breath we take. We must also value each person and touch others lives every day."
    },
    {
      name: "MRS. RATNAVALI KOTTAPALLI",
      position: "VICE PRESIDENT",
      bio: "I Believe: A little thought and a little kindness are often worth more than a great deal of money."
    },
    {
      name: "DR. SUMAN JAIN",
      position: "SECRETARY & CEO",
      bio: "I Believe: If we all take care of one another and go the extra mile to help and work together, we all gain each one of us is lifted up."
    },
    {
      name: "MR. M A ALEEM BAIG",
      position: "JOINT SECRETARY",
      bio: "I Believe: Goodness is about character integrity, honesty, kindness, generosity, moral courage, and the like. More than anything else, it is about an act of care for other people."
    },
    {
      name: "MR. MANOJ RUPANI",
      position: "TREASURER",
      bio: "I Believe: My religion is very simple. It is all about kindness & care."
    },
    {
      name: "DR D VENKATA RAMANA",
      position: "EXECUTIVE MEMBER (FORMER PRESIDENT)",
      bio: "The best and most beautiful things in the world cannot be seen or even touched they must be felt with the heart."
    },
    {
      name: "MRS. RAMA VUPPALA",
      position: "TREASURER",
      bio: "I Believe: What you do for others makes more impact on your life than what you do for yourself."
    },
    {
      name: "DR. J RAJESHWAR",
      position: "ADVISORY MEMBER",
      bio: "I Believe: Here are the values that I stand for: kindness, compassion, treating people the way you want to be treated and helping those in need"
    },
    {
      name: "DR SHIRISHA RANI",
      position: "ADVISORY MEMBER",
      bio: "In the end, it's not the years in your life that count. It's the life in your years what you did to make a difference in others life."
    },
    {
      name: "Mr. Shivratan Agarwal",
      position: "Executive Member",
      bio: ""
    },
    {
      name: "Mr. Ritesh Devda",
      position: "Executive Member",
      bio: ""
    },
    {
      name: "Mr. Mohd Amin",
      position: "Executive Member",
      bio: ""
    },
    {
      name: "Mr. D. Srinigvas Rao",
      position: "Executive Member",
      bio: ""
    },
    {
      name: "Mr. Kanyalal Dodwani",
      position: "Executive Member",
      bio: ""
    },
    {
      name: "Mr. Surender Agarwal",
      position: "Executive Member",
      bio: ""
    },
    {
      name: "Mr. K. Kiran Kumar",
      position: "Executive Member",
      bio: ""
    },
    {
      name: "Mr. Rajesh Jain",
      position: "Executive Member",
      bio: ""
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 mb-12 text-center">Board Members</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-blue-100"
            >
              <h2 className="text-xl font-bold text-blue-800 mb-2">{member.name}</h2>
              <p className="text-blue-600 font-semibold mb-3">{member.position}</p>
              {member.bio && (
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Organogram = () => {
  return (
    <div className="w-full max-w-6xl mx-auto bg-blue-50 p-6">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Organizational Structure</h1>
      
      {/* Main container */}
      <div className="flex flex-col space-y-4">
        {/* Title box */}
        <div className="bg-blue-200 p-4 rounded-lg text-center font-semibold text-blue-900">
          Thalassemia and Sickle Cell Society (TSCS)
          <div className="text-sm">1998</div>
        </div>

        {/* Boxes container */}
        <div className="grid grid-cols-7 gap-4">
          {/* Box 1 */}
          <div className="col-span-1 bg-blue-100 p-4 rounded-lg text-sm hover:bg-blue-200 transition-colors">
            <div className="text-center text-blue-800">
              Kamala Hospital and Research Centre for Thalassemia and Sickle Cell patients (A unit of TSCS)
              <div className="mt-2 font-semibold">1998</div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="col-span-1 bg-blue-100 p-4 rounded-lg text-sm hover:bg-blue-200 transition-colors">
            <div className="text-center text-blue-800">
              Vuppala Venkaiah Memorial Blood Bank
              <div className="mt-2 font-semibold">2010</div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="col-span-1 bg-blue-100 p-4 rounded-lg text-sm hover:bg-blue-200 transition-colors">
            <div className="text-center text-blue-800">
              Vuppala Krishna Rao & Chandraka la Diagnostic Services
              <div className="mt-2 font-semibold">2011</div>
            </div>
          </div>

          {/* Box 4 */}
          <div className="col-span-1 bg-blue-100 p-4 rounded-lg text-sm hover:bg-blue-200 transition-colors">
            <div className="text-center text-blue-800">
              Kamala Bai Agarwal (Duke's) Diagnostic Laboratory
              <div className="mt-2 font-semibold">2020</div>
            </div>
          </div>

          {/* Box 5 */}
          <div className="col-span-1 bg-blue-100 p-4 rounded-lg text-sm hover:bg-blue-200 transition-colors">
            <div className="text-center text-blue-800">
              Kamala Hospital and Research Centre (Prema Bai Dakotiya Charitable and Memorial Society)
              <div className="mt-2 font-semibold">2020</div>
            </div>
          </div>

          {/* Box 6 */}
          <div className="col-span-1 bg-blue-100 p-4 rounded-lg text-sm hover:bg-blue-200 transition-colors">
            <div className="text-center text-blue-800">
              TSCS Khammam
              <div className="mt-2 font-semibold">2022</div>
            </div>
          </div>

          {/* Box 7 */}
          <div className="col-span-1 bg-blue-100 p-4 rounded-lg text-sm hover:bg-blue-200 transition-colors">
            <div className="text-center text-blue-800">
              Antinatal Screening Project - Mahabubnagar District & Medchl-Malkajgiri District
              <div className="mt-2 font-semibold">2024</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MedicalTeam = () => (
  <div className="bg-blue-50 p-6">
    <h1 className="text-3xl font-bold text-blue-900 mb-8">Medical Team</h1>
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">Our Specialists</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="p-3 rounded hover:bg-blue-50 transition-colors text-blue-700">Dr. SUMAN JAIN, MBBS, DCH, Paediatrician</div>
            <div className="p-3 rounded hover:bg-blue-50 transition-colors text-blue-700">Dr. SUJAI SUNEETHA, MBBS, DCP, Ph.D, Pathologist & Leprologist</div>
            <div className="p-3 rounded hover:bg-blue-50 transition-colors text-blue-700">Dr. K SAROJA, DHIM, Medical Officer</div>
            <div className="p-3 rounded hover:bg-blue-50 transition-colors text-blue-700">Dr. MOHD IQBAL MOINUDDIN, MBBS, Medical Officer</div>
            <div className="p-3 rounded hover:bg-blue-50 transition-colors text-blue-700">Dr. SARASWATHI SUSARLA, MBBS, MD (General Medicine)</div>
            <div className="p-3 rounded hover:bg-blue-50 transition-colors text-blue-700">Dr. SIRISHA KUSUMA BODDU, MBBS, MD, FRCPCH (UK) (Endocrinologist)</div>
            <div className="p-3 rounded hover:bg-blue-50 transition-colors text-blue-700">Dr. SIRISHA RANI, MBBS, MD, MRCPCH (Paed. Hematol Oncologist)</div>
            <div className="p-3 rounded hover:bg-blue-50 transition-colors text-blue-700">Dr. PARINITHA, MBBS, MD, MRCPCH, CCT (Paed. Hemato Oncologist)</div>
            <div className="p-3 rounded hover:bg-blue-50 transition-colors text-blue-700">Dr. RAMANA DANDAMUDI, MBBS, DCH, MRCP (Paed. Hemato Oncologist)</div>
            <div className="p-3 rounded hover:bg-blue-50 transition-colors text-blue-700">Dr. D M NAIK, MBBS, MD, Pathology (Pathologist)</div>
            <div className="p-3 rounded hover:bg-blue-50 transition-colors text-blue-700">Dr. A RAGHAVENDRA, MBBS, MD, FSCAI (Cardiologist)</div>
            <div className="p-3 rounded hover:bg-blue-50 transition-colors text-blue-700">Dr. B SWETHA, MBBS, MDRD (Radiologist)</div>
          </div>
          <div className="space-y-4">
            <div className="p-3 rounded hover:bg-blue-50 transition-colors text-blue-700">Dr. ANURADHA KULKARNI, MBBS, MS, Opthal (Ophthalmologist)</div>
            <div className="p-3 rounded hover:bg-blue-50 transition-colors text-blue-700">Prof. V R RAO, M.Sc, Ph.D, Genetic Epidemiology (Population)</div>
            <div className="p-3 rounded hover:bg-blue-50 transition-colors text-blue-700">Dr. V SANDHYA, MBBS, MD, FNB (Paediatric Hemato Oncologist)</div>
            <div className="p-3 rounded hover:bg-blue-50 transition-colors text-blue-700">Dr. B VARSHINI, MBBS, DNB, FNB (Paediatric Hemato Oncologist)</div>
            <div className="p-3 rounded hover:bg-blue-50 transition-colors text-blue-700">Dr. CH SAMPATH REDDY, MDS, FDS, RCPS, MFDS, RCS (Dentist)</div>
            <div className="p-3 rounded hover:bg-blue-50 transition-colors text-blue-700">Dr. LEENATHA REDDY, MBBS, MRCPCH (CCT) (Pediatric Adole. Endocrinologist)</div>
            <div className="p-3 rounded hover:bg-blue-50 transition-colors text-blue-700">Dr. PARTHA PAL, MBBS, MD, MRCP (UK), DNB (Gastro, ESEGH (UK))</div>
            <div className="p-3 rounded hover:bg-blue-50 transition-colors text-blue-700">Dr. PADMA G, M.Sc, Ph.D, Human Genetics</div>
            <div className="p-3 rounded hover:bg-blue-50 transition-colors text-blue-700">Dr MAMATHA R</div>
            <div className="p-3 rounded hover:bg-blue-50 transition-colors text-blue-700">Dr. PRADEEP NAIK, M.Sc, Ph.D, Bio-Chemistry</div>
            <div className="p-3 rounded hover:bg-blue-50 transition-colors text-blue-700">Cardiologist - Arogyasri</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ResearchTeam = () => {
  const teamMembers = [
    { id: 1, name: "Dr. SUMAN JAIN", credentials: "MBBS, DCH", role: "Pediatrician, Chief Medical Research Officer" },
    { id: 2, name: "Dr. SUJAI SUNEETHA", credentials: "MBBS, DCP, PhD", role: "Pathologist & Leprologist" },
    { id: 3, name: "Dr. K SAROJA", credentials: "BHMS, DHHM", role: "Medical Officer" },
    { id: 4, name: "Dr. MOHD IQBAL MOINUDDIN", credentials: "MBBS", role: "Medical Officer" },
    { id: 5, name: "Dr. SARASWATHI SUSARLA", credentials: "MBBS, MD", role: "General Medicine" },
    { id: 6, name: "Dr. SIRISHA RANI", credentials: "MBBS, MD, MRCPCH", role: "Paed. Hemato Oncologist" },
    { id: 7, name: "Dr. SIRISHA KUSUMA", credentials: "MBBS, MD Pediatrics (PGIMER), FRCPCH (UK)", role: "Endocrinologist" },
    { id: 8, name: "Dr. PARINITHA", credentials: "MBBS, MD, MRCPCH, CCT", role: "Paed. Hemato Oncologist" },
    { id: 9, name: "Dr. RAMANA DANDAMUDI", credentials: "MBBS, DCH, MRCP", role: "Paed. Hemato Oncologist" },
    { id: 10, name: "Dr. D M NAIK", credentials: "MBBS, MD", role: "Pathology (Pathologist)" },
    { id: 11, name: "Dr. A RAGHAVENDER GOUD", credentials: "MBBS, MD, FSCAI", role: "Cardiologist" },
    { id: 12, name: "Dr. B SWETHA", credentials: "MBBS, MDRD", role: "Radiologist" },
    { id: 13, name: "Dr. ANURADHA KULKARNI", credentials: "MBBS, MS", role: "Ophthal (Ophthalmologist)" },
    { id: 14, name: "Prof. V R RAO", credentials: "M.Sc, PhD", role: "Genetic Epidemiologist (Population)" },
    { id: 15, name: "Dr. G PADMA", credentials: "M.Sc, PhD Genetics", role: "Sr. Research Scientist" },
    { id: 16, name: "Dr. V SANDHYA", credentials: "MBBS, MD, FNB", role: "Paediatric Hemato Oncologist" },
    { id: 17, name: "Dr. B VARSHINI", credentials: "MBBS, DNB, FNB", role: "Paediatric Hemato Oncologist" },
    { id: 18, name: "Dr. MAMATHA", credentials: "PhD Genetics", role: "Scientist" },
    { id: 19, name: "Dr. PRADEEP NAIK", credentials: "M.Sc, PhD", role: "Bio-Chemistry" },
    { id: 20, name: "Dr. KURAPATI PRADEEP KUMAR", credentials: "MBBS, MD", role: "Paediatrician, Khammam" },
    { id: 21, name: "Dr. RUDRA GOTHAM NARESH", credentials: "MBBS, MD", role: "General Medicine, Khammam" },
    { id: 22, name: "Dr. RAJAKUMAR YADAV", credentials: "MBBS", role: "Medical Officer, Khammam" },
    { id: 23, name: "Dr. SANAULLA", credentials: "MBBS", role: "Medical Officer, Khammam" },
    { id: 24, name: "Dr. R VENUGOPAL", credentials: "MBBS, MD", role: "Radiologist, Khammam" },
    { id: 25, name: "Dr. CHARITHA SRANVANTHI BATTU", credentials: "MBBS, DNB", role: "Pathology, Khammam" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-blue-50">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Research Advisory Team</h1>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">Team Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="p-4 border rounded-md hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-medium text-blue-900">{member.name}</h3>
                <p className="text-sm text-blue-700">{member.credentials}</p>
                <p className="text-sm text-blue-600 mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const EthicalCommittee = () => (
  <div className="bg-blue-50 p-6">
    <h1 className="text-3xl font-bold text-blue-900 mb-8">Ethical Committee</h1>
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">Committee Members</h2>
        <ul className="space-y-4 text-blue-700">
          <li className="p-3 rounded hover:bg-blue-50 transition-colors">Patron Doctors</li>
          <li className="p-3 rounded hover:bg-blue-50 transition-colors">Advisory Members</li>
          <li className="p-3 rounded hover:bg-blue-50 transition-colors">Auditors</li>
          <li className="p-3 rounded hover:bg-blue-50 transition-colors">Banker</li>
        </ul>
      </div>
    </div>
  </div>
);

const Auditors = () => (
  <div className="bg-blue-50 p-6">
    <h1 className="text-3xl font-bold text-blue-900 mb-8">Auditors</h1>
    <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
      <h2 className="text-xl font-semibold text-blue-800 mb-4">Financial Oversight</h2>
      {/* Add auditor information */}
    </div>
  </div>
);

export default Overview;