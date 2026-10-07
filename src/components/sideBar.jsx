import React, { useState } from 'react'
import SidebarButton from './ui/SidebarButton'
import { FaHome, FaBars } from 'react-icons/fa'
import { MdSubscriptions } from "react-icons/md";
import { useAuth } from '../context/authContext';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const {user} = useAuth();
  return (
    <div className="flex">
      {/* Mobile toggle button */}
      <button 
        className="md:hidden p-2 text-white bg-gray-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div className={`
        fixed md:static top-0 left-0 h-screen md:h-auto 
        bg-gray-950 text-white p-2 gap-2 
        transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 
        w-48 lg:w-64
      `}>
        <SidebarButton label="Home" icon={FaHome} toPage="/Home"/>
        <hr className="border-gray-700"/>
        <SidebarButton label="Subscriptions" icon={MdSubscriptions} toPage={`/Subscriptions/${user?._id}`}/>
        <hr className="border-gray-700"/>
      </div>
    </div>
  )
}

export default SideBar
