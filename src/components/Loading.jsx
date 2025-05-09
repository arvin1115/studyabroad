// File: src/components/Loading.jsx
import React from "react";
import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 px-4">
      <div className="flex flex-col items-center space-y-6">
        {/* Circle with spinning icon inside */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-blue-500 border-t-transparent animate-spin flex items-center justify-center shadow-xl">
          <FaSpinner className="text-blue-500 text-3xl sm:text-4xl" />
        </div>

        {/* Text */}
        <p className="text-blue-700 text-xl sm:text-2xl font-semibold tracking-wide animate-pulse">Loading, please wait...</p>
      </div>
    </div>
  );
};

export default Loading;
