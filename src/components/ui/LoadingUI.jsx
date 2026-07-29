import React from "react";

export default function LoadingModal({ message = "Loading..." }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
        {/* Spinner */}
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid mb-4"></div>
        
        {/* Message */}
        <p className="text-gray-700 font-medium">{message}</p>
      </div>
    </div>
  );
}