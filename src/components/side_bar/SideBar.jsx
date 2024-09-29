

import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import { FaTachometerAlt, FaUser, FaGem, FaFolder, FaUsers, FaInfoCircle, FaUpload, FaCog } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="w-64 bg-gray-100 p-5 border-r-2 border-gray-200 shadow-lg flex flex-col justify-between h-full"> 
      <h2 className="text-xl font-bold mb-6 text-center">INFLUENCER</h2>
      <ul className="space-y-4">
        <li className="flex items-center">
          <NavLink 
            to='/deshboard' 
            className={({ isActive }) => `flex items-center p-2 w-full h-12 rounded-md ${isActive ? 'bg-gray-800 text-white' : 'hover:bg-gray-700 text-gray-800'}`}
          >
            <FaTachometerAlt className="mr-3" /> Dashboard
          </NavLink>
        </li>
        <li className="flex items-center">
          <NavLink 
            to='request' 
            className={({ isActive }) => `flex items-center p-2 w-full h-12 rounded-md ${isActive ? 'bg-gray-800 text-white' : 'hover:bg-gray-200 text-gray-800'}`}
          >
            <FaUser className="mr-3" /> Request
          </NavLink>
        </li>
        <li className="flex items-center">
          <NavLink 
            to='brand' 
            className={({ isActive }) => `flex items-center p-2 w-full h-12 rounded-md ${isActive ? 'bg-gray-800 text-white' : 'hover:bg-gray-200 text-gray-800'}`}
          >
            <FaGem className="mr-3" /> Brand
          </NavLink>
        </li>
        <li className="flex items-center">
          <NavLink 
            to='portfolio' 
            className={({ isActive }) => `flex items-center p-2 w-full h-12 rounded-md ${isActive ? 'bg-gray-800 text-white' : 'hover:bg-gray-200 text-gray-800'}`}
          >
            <FaFolder className="mr-3" /> Portfolio
          </NavLink>
        </li>
        <li className="flex items-center">
          <NavLink 
            to='membership' 
            className={({ isActive }) => `flex items-center p-2 w-full h-12 rounded-md ${isActive ? 'bg-gray-800 text-white' : 'hover:bg-gray-200 text-gray-800'}`}
          >
            <FaUsers className="mr-3" /> Membership
          </NavLink>
        </li>
        <li className="flex items-center">
          <NavLink 
            to='about' 
            className={({ isActive }) => `flex items-center p-2 w-full h-12 rounded-md ${isActive ? 'bg-gray-800 text-white' : 'hover:bg-gray-200 text-gray-800'}`}
          >
            <FaInfoCircle className="mr-3" /> About
          </NavLink>
        </li>
      </ul>
      <ul className="space-y-4">
        <li className="flex items-center">
          <NavLink 
            to='uploadwork' 
            className={({ isActive }) => `flex items-center p-2 w-full h-12 rounded-md ${isActive ? 'bg-gray-800 text-white' : 'hover:bg-gray-200 text-gray-800'}`}
          >
            <FaUpload className="mr-2" /> Upload work
          </NavLink>
        </li>
        <li className="flex items-center">
          <NavLink 
            to='setting' 
            className={({ isActive }) => `flex items-center p-2 w-full h-12 rounded-md ${isActive ? 'bg-gray-800 text-white' : 'hover:bg-gray-200 text-gray-800'}`}
          >
            <FaCog className="mr-3" /> Setting
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
