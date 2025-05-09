// src/components/ContactUsForm.jsx
import React, { useState, useRef } from "react";
import { FaPaperPlane, FaUser, FaWhatsapp, FaEnvelope, FaGlobe } from "react-icons/fa";

const ContactUsForm = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', message: string }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus({ type: "success", message: data.message || "Message sent successfully!" });
      } else {
        setStatus({ type: "error", message: data.message || "Oops! Something went wrong." });
      }
    } catch {
      setStatus({ type: "error", message: "Network error. Please try again." });
    }

    // after 5 seconds, reset form and clear status
    setTimeout(() => {
      form.reset();
      setStatus(null);
    }, 5000);
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-2xl">
      <div className="flex justify-center mb-6">
        <FaPaperPlane className="text-6xl text-indigo-600 animate-bounce" />
      </div>
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
        Send Your <span className="text-indigo-600">Message</span>
      </h2>

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

      <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6">
        <input type="hidden" name="access_key" value="c8695d21-5c21-4055-b6fb-61afa6afcddf" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              <FaUser className="inline mr-2 text-gray-600" /> Name*
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="John Doe"
              className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              <FaWhatsapp className="inline mr-2 text-green-500" /> WhatsApp*
            </label>
            <input
              type="tel"
              name="whatsapp"
              required
              placeholder="+8801XXXXXXXXX"
              className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-1 font-medium">
            <FaEnvelope className="inline mr-2 text-red-500" /> Email*
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1 font-medium">
            <FaGlobe className="inline mr-2 text-yellow-500" /> social media link*
          </label>
          <input
            type="url"
            name="social media link"
            required
            placeholder="https://yourprofile.com"
            className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1 font-medium">
            <FaPaperPlane className="inline mr-2 text-blue-600" /> Message (optional)
          </label>
          <textarea
            name="message"
            rows="4"
            placeholder="Type your message..."
            className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-indigo-500 resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 rounded-2xl text-lg transition-transform transform hover:scale-105"
        >
          Submit <FaPaperPlane />
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;
