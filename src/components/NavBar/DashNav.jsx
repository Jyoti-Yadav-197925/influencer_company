import React, { useState } from "react";
import { FaSearch, FaBell } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { profile_pic } from "../../assets";

const DashNavbar = () => {
  const [showMessages, setShowMessages] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const handleSearch = (e) => {
    // Handle search logic here
  };

  const handleToggleMessages = (e) => {
    e.stopPropagation();
    setShowMessages((prev) => !prev);
    if (showNotifications) setShowNotifications(false); // Close notifications if open
  };

  const handleToggleNotifications = (e) => {
    e.stopPropagation();
    setShowNotifications((prev) => !prev);
    if (showMessages) setShowMessages(false); // Close messages if open
  };

  // Prevent scrolling on the whole page when clicking dropdown
  const handleContainerClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={handleContainerClick}
      className="relative flex items-center flex-wrap justify-between bg-white p-4 shadow-md w-full"
    >
      {/* Search Bar */}
      <div className="flex items-center border rounded-full px-2 py-2 w-full max-w-md mx-auto mb-4 md:mb-0">
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow outline-none px-3 py-1 rounded-l-full text-sm md:text-base"
        />
        <button
          className="bg-teal-500 text-white p-2 rounded-r-full flex items-center justify-center"
          onClick={handleSearch}
        >
          <FaSearch className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>

      {/* User Profile and Notification/Messages */}
      <div className="flex items-center space-x-4">
        {/* Message Icon */}
        <button
          className="bg-teal-500 border-2 border-white text-white text-xl relative rounded-full p-2 flex items-center justify-center"
          onClick={handleToggleMessages}
        >
          <MdMessage />
          {showMessages && (
            <span className="absolute top-0 right-0 block h-2 w-2 bg-red-600 rounded-full"></span>
          )}
        </button>

        {/* Notification Icon */}
        <button
          className="bg-teal-500 border-2 border-white text-white text-xl relative rounded-full p-2 flex items-center justify-center"
          onClick={handleToggleNotifications}
        >
          <FaBell />
          {showNotifications && (
            <span className="absolute top-0 right-0 block h-2 w-2 bg-red-600 rounded-full"></span>
          )}
        </button>

        {/* User Profile */}
        <div className="flex items-center">
          <div className="text-right mr-3">
            <h4 className="text-sm font-semibold">Bonet Smith</h4>
            <p className="text-xs text-gray-500">Bonte@gmail.com</p>
          </div>
          <img
            src={profile_pic}
            alt="User Avatar"
            className="w-10 h-10 rounded-full border-2 border-gray-200"
          />
        </div>
      </div>

      {/* Message and Notification Dropdown Menus */}
      {showMessages && (
        <div className="absolute top-full right-0 bg-white shadow-md rounded-lg p-2 mt-2">
          {/* Message items */}
        </div>
      )}

      {showNotifications && (
        <div className="absolute top-full right-0 bg-white shadow-md rounded-lg p-2 mt-2">
          {/* Notification items */}
        </div>
      )}
    </div>
  );
};

export default DashNavbar;
