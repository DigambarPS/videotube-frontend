import React from 'react'
import SidebarButton from './ui/sidebarButton'
import { FaHome } from 'react-icons/fa'

const SideBar = () => {
  return (
    <div className="flex flex-row md:flex-col 
                    w-full md:w-48 lg:w-64 
                    bg-gray-950 text-white p-2 md:p-4 gap-2">
      <SidebarButton label="Home" icon={FaHome} />
      <SidebarButton label="Trending" icon={FaHome} />
      <SidebarButton label="Subscriptions" icon={FaHome} />
    </div>
  )
}

export default SideBar
