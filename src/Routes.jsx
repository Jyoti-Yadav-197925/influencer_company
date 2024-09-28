import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landingpage/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import LoginInfluencer from "./pages/registration_page/Login";
import Sidebar from "./components/side_bar/SideBar";
import DashBoard from "./pages/Dashbord/DashBoard";

export default function Rout() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      children: [{ index: "/", element: <LandingPage /> }],
    },
    {
      path: "dashboard",
      element: (
        <div className="flex w-full">
          <Sidebar />
          <DashBoard />
        </div>
      ),
    },
    { path: "/logout", element: <LoginInfluencer /> },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
