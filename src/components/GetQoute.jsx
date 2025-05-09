// src/components/GetQuote.jsx
import React, { useState, useRef, useEffect } from "react";
import { FaPaperPlane, FaUser, FaWhatsapp, FaEnvelope, FaGlobe } from "react-icons/fa";

// Google Apps Script Web App URL
const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbze0CI5qu5ECdfpTA9tQnbaPTyJZwEd9wSZ3b6zYmBOkg8lSvANIRS83akUncPS_wKZjg/exec";

export default function GetQuote() {
  const formRef = useRef();
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    try {
      const res = await fetch(WEB_APP_URL, {
        method: "POST",
        body: new URLSearchParams(formData),
      });
      const text = await res.text();
      setStatus({
        type: text === "Success" ? "success" : "error",
        message: text === "Success" ? "Get a Quote request submitted!" : "Submission failed. Please try again.",
      });
    } catch {
      setStatus({ type: "error", message: "Network error. Please try again." });
    }
    formRef.current.reset();
    setTimeout(() => setStatus(null), 5000);
  };

  useEffect(() => {
    console.log("Web App URL:", WEB_APP_URL);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-200 p-4">
      <div className="relative w-full max-w-md md:max-w-3xl bg-white/50 backdrop-blur-md border border-white/30 rounded-3xl shadow-2xl p-8">
        {/* Icon */}
        <div className="flex justify-center mb-6 animate-bounce">
          <FaPaperPlane className="text-6xl text-indigo-600" />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-4">
        Request Your <span className="text-indigo-600">Study Blueprint</span>
        </h2>

        {/* Status Message */}
        {status && (
          <div
            className={`
              mb-6 px-4 py-3 rounded-2xl text-center
              ${status.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
            `}
          >
            {status.message}
          </div>
        )}

        {/* Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          {/* Name & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-1 font-medium">
                <FaUser className="inline mr-2 text-gray-600" />
                Name*
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your Name"
                className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 mb-1 font-medium">
                Phone*
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="01XXXXXXXXX"
                className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Email & WhatsApp */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1 font-medium">
                <FaEnvelope className="inline mr-2 text-red-500" />
                Email*
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label htmlFor="whatsapp" className="block text-gray-700 mb-1 font-medium">
                <FaWhatsapp className="inline mr-2 text-green-500" />
                WhatsApp
              </label>
              <input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                placeholder="01XXXXXXXXX"
                className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Social Media Link */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label htmlFor="social_link" className="block text-gray-700 mb-1 font-medium">
                <FaGlobe className="inline mr-2 text-yellow-500" />
                Social Media Link
              </label>
              <input
                id="social_link"
                name="social_link"
                type="url"
                placeholder="https://yourprofile.com"
                className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-gray-700 mb-1 font-medium">
              <FaPaperPlane className="inline mr-2 text-blue-600" />
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your message..."
              className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 rounded-2xl text-lg shadow-lg transition-transform transform hover:scale-105"
          >
            Submit <FaPaperPlane />
          </button>
        </form>
      </div>
    </div>
  );
}
