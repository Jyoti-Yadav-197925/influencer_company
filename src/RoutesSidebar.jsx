import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/side_bar/SideBar'; // Adjusted paths if necessary
import DashboardPage from './pages/Dashbord/InfluencerDashboard';
import DashNavbar from './components/NavBar/DashNav';
import Request from './pages/Dashbord/Request';
import Brand from './pages/Dashbord/Brand';
import PortfolioBar from './pages/Dashbord/PortfolioBar';
import Membership from './pages/Dashbord/InfluencerMembership';
import About from './pages/Dashbord/About';
import UploadWork from './pages/Dashbord/UploadWork';

function SideBarRoute() {
  return (
    <Router>
      <div className="flex h-screen"> {/* Full screen height */}
        <Sidebar />
        <div className="flex-grow flex flex-col overflow-auto">
          <DashNavbar />
          <div className="flex-grow p-4 overflow-auto"> {/* Padding and height adjustment */}
            <Routes>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/request" element={<Request />} />
              <Route path="/brand" element={<Brand />} />
              <Route path="/portfolio" element={<PortfolioBar />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/about" element={<About />} />
              <Route path="/uploadwork" element={<UploadWork />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default SideBarRoute;
