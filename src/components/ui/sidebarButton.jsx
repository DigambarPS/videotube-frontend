import React from 'react';
import { Link } from 'react-router-dom';

const SidebarButton = ({ label, icon: Icon, toPage = "/" }) => {
  return (
    <Link to={toPage} className="w-full block">
      <div className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors text-gray-300 hover:text-white rounded-2xl">
        <Icon className="text-xl shrink-0" />
        <span className="font-medium text-sm">{label}</span>
      </div>
    </Link>
  );
};

export default SidebarButton;