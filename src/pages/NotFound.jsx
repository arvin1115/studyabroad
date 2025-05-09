import React from "react";
import { Link } from "react-router-dom";
import { FaRunning } from "react-icons/fa";

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-8">
    {/* Animated Running Icon */}
    <div className="text-red-500 mb-6 animate-bounce">
      <FaRunning size={80} />
    </div>

    {/* 404 Heading */}
    <h1 className="text-6xl sm:text-7xl font-extrabold text-gray-800">404</h1>
    <p className="mt-2 text-lg sm:text-2xl text-gray-600">Page Not Found</p>

    {/* Back to Home Button */}
    <Link
      to="/"
      className="mt-6 inline-block px-5 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
    >
      ← Back to Home
    </Link>
  </div>
);

export default NotFound;
