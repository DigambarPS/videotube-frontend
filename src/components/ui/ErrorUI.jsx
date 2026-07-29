import React from "react";

export default function ErrorUI({ message, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded shadow-lg relative max-w-sm w-full">
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">{message}</span>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-red-700 font-bold"
        >
          ✖
        </button>
      </div>
    </div>
  );
}