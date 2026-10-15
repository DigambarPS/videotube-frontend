import React, { useState } from 'react';
import SidebarButton from './ui/SidebarButton';
import { FaHome, FaBars, FaTimes } from 'react-icons/fa';
import { MdSubscriptions } from "react-icons/md";
import { useAuth } from '../context/authContext';

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user } = useAuth();

  return (
    <>
      {/* Mobile toggle button */}
      <button 
        className="md:hidden fixed top-3 left-3 z-50 p-2 text-white bg-gray-900 rounded-md shadow-md"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar Overlay for Mobile when open */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed md:static top-0 left-0 h-screen z-40
        bg-gray-950 text-white p-3 flex flex-col gap-2 
        transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 
        w-48 lg:w-64 shrink-0 border-r border-gray-800
      `}>
        {/* Spacer for mobile view so content isn't hidden under the absolute toggle if needed */}
        <div className="md:hidden h-10" />

        <SidebarButton label="Home" icon={FaHome} toPage="/Home" />
        
        <SidebarButton 
          label="Subscriptions" 
          icon={MdSubscriptions} 
          toPage={user?._id ? `/Subscriptions/${user._id}` : "/login"} 
        />
      </div>
    </>
  );
};

export default SideBar;