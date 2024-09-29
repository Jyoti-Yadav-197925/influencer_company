import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/side_bar/SideBar'; // Adjust the path based on your file structure
// import DashboardPage from './pages/Dashbord/InfluencerDashboard';
import DashNavbar from './components/NavBar/DashNav';
// import Request from './pages/Dashbord/Request.js';
// import Brand from './pages/Dashbord/Brand.js';
// import PortfolioBar from './pages/Dashbord/PortfolioBar.js';
// import Membership from './pages/Dashbord/InfluencerMembership.js';
// import About from './pages/Dashbord/About.js';
// import UploadWork from './pages/Dashbord/UploadWork.js';
// import ViewDetails from './pages/Dashbord/ViewDetails.js';
import { Outlet } from 'react-router-dom';
function SideBarRoute() {
  return (

    <div className="flex h-screen"> {/* Removed <Router> */}
      <Sidebar />
      <div className="flex-grow flex flex-col overflow-auto">
        <DashNavbar />
        <div className="flex-grow p-4 overflow-auto">
          <Outlet /> {/* Renders nested routes */}
        </div>
      </div>
    </div>
  );
}

export default SideBarRoute;
