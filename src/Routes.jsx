import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage/LandingPage";
// import NavBar from "./components/NavBar/NavBar";
import LoginInfluencer from "./pages/registration_page/Login";
import SignupInfluncer from "./pages/registration_page/Signup";
import SideBarRoute from "./RoutesSidebar";
import DashboardPage from "./pages/Dashbord/InfluencerDashboard";
import Request from "./pages/Dashbord/Request";
import Brand from "./pages/Dashbord/Brand";
import PortfolioBar from "./pages/Dashbord/PortfolioBar";
import InfluencerMembership from "./pages/Dashbord/InfluencerMembership";
import About from "./pages/Dashbord/About";
import FileUploadBox from "./pages/Dashbord/UploadWork";
import ViewDetails from "./pages/Dashbord/ViewDetails";
export default function Rout() {

  return (
    <Router> {/* Only Router here */}
    <Routes>
      <Route path="/" element={<LoginInfluencer />}>
        <Route index element={<LandingPage />} />
      </Route>
      <Route path="/signup" element={<SignupInfluncer />} />
      <Route path="/viewdetails" element={<ViewDetails />} />

      {/* Sidebar Layout Routes */}
      <Route path="/deshboard" element={<SideBarRoute />}>
        <Route index element={<DashboardPage />} />
        <Route path="request" element={<Request />} />
        <Route path="brand" element={<Brand />} />
        <Route path="portfolio" element={<PortfolioBar />} />
        <Route path="membership" element={<InfluencerMembership />} />
        <Route path="about" element={<About />} />
        <Route path="uploadwork" element={<FileUploadBox />} />
      </Route>
    </Routes>
  </Router>
  
  );
}
