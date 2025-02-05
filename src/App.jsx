// import React from 'react'
// import Navbar from './components/Navbar/Navbar'

// const App = () => {
//   return (
//     <div>

//       <Navbar/>
//     </div>
//   )
// }

// export default App
// App.jsx
// import React from 'react';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';

// const Home = () => (
//   <div className="p-6">
//     <h1 className="text-3xl font-bold mb-4">Index</h1>
//     <div className="space-y-4">
//       <Link to="/html" className="block text-blue-600 hover:text-blue-800 text-xl">
//         TSCS Overview
//       </Link>
//       <Link to="/css" className="block text-blue-600 hover:text-blue-800 text-xl">
//         Activities
//       </Link>
//       <Link to="/javascript" className="block text-blue-600 hover:text-blue-800 text-xl">
//         Visiotors
//       </Link>
//       <Link to="/react" className="block text-blue-600 hover:text-blue-800 text-xl">
//         Blood Donation camps
//       </Link>
//       <Link to="/html" className="block text-blue-600 hover:text-blue-800 text-xl">
//         Awareness Programs
//       </Link>
//     </div>
//   </div>
// );

// const HTMLPage = () => (
//   <div className="p-6">
//     <h1 className="text-3xl font-bold mb-4">HTML Basics</h1>
//     <p className="mb-4">Learn about HTML elements and structure.</p>
//     <Link to="/" className="text-blue-600 hover:text-blue-800">← Back to Home</Link>
//   </div>
// );

// const CSSPage = () => (
//   <div className="p-6">
//     <h1 className="text-3xl font-bold mb-4">CSS Fundamentals</h1>
//     <p className="mb-4">Explore CSS styling and layouts.</p>
//     <Link to="/" className="text-blue-600 hover:text-blue-800">← Back to Home</Link>
//   </div>
// );

// const JavaScriptPage = () => (
//   <div className="p-6">
//     <h1 className="text-3xl font-bold mb-4">JavaScript Essentials</h1>
//     <p className="mb-4">Discover JavaScript programming concepts.</p>
//     <Link to="/" className="text-blue-600 hover:text-blue-800">← Back to Home</Link>
//   </div>
// );

// const ReactPage = () => (
//   <div className="p-6">
//     <h1 className="text-3xl font-bold mb-4">React Framework</h1>
//     <p className="mb-4">Master React components and state management.</p>
//     <Link to="/" className="text-blue-600 hover:text-blue-800">← Back to Home</Link>
//   </div>
// );

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/html" element={<HTMLPage />} />
//           <Route path="/css" element={<CSSPage />} />
//           <Route path="/javascript" element={<JavaScriptPage />} />
//           <Route path="/react" element={<ReactPage />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { routes } from './routes';

const App = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <Layout>
                {route.element}
              </Layout>
            }
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;