import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import WorkSection from './Components/WorkSection';
import OverHaul from './Components/Pages/OverHaul'; // Import your new page component

// Custom component to conditionally render the header
function Layout({ children }) {
  const location = useLocation();

  // Define routes where the header should be displayed
  const showHeaderRoutes = ['/'];

  // Check if current route is in the list of routes to show the header
  const showHeader = showHeaderRoutes.includes(location.pathname);

  return (
    <>
      {showHeader && <Header />} {/* Render Header only on specified routes */}
      {children}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Define routes here */}
          <Route path="/" element={<WorkSection />} /> {/* Default Home Page */}
          <Route path="/OverHaul" element={<OverHaul />} /> {/* New Page */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
