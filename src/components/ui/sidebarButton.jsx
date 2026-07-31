import React from 'react'
import { Link } from 'react-router-dom'

const SidebarButton = ({ label, icon: Icon, toPage="/" }) => {
  return (
    <Link to={toPage} className="w-full">
      <div className="flex items-center gap-2 w-full">
        <Icon className="text-xl" />
        <span>{label}</span>
      </div>
    </Link>
  )
}

export default SidebarButton
