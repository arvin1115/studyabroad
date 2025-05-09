import React, { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCalendarAlt, FaPhoneAlt, FaWhatsapp, FaFacebookF, FaTwitter } from "react-icons/fa";
import "flag-icons/css/flag-icons.min.css";

// Replace with your 52 ISO country codes (alpha-2)
const flags = [
  "us",
  "gb",
  "ca",
  "au",
  "fr",
  "de",
  "it",
  "es",
  "pl",
  "hu",
  "mt",
  "ae",
  "in",
  "cn",
  "jp",
  "kr",
  "br",
  "nl",
  "se",
  "ch",
  "nz",
  "sg",
  "ie",
  "dk",
  "no",
  "fi",
  "pt",
  "gr",
  "cz",
  "ro",
  "bg",
  "hr",
  "sk",
  "si",
  "ee",
  "lv",
  "lt",
  "mx",
  "ar",
  "cl",
  "za",
  "eg",
  "tr",
  "ru",
  "ua",
  "my",
  "th",
  "vn",
  "ph",
  "pk",
];

const socialIcons = [
  <FaPhoneAlt className="text-white text-xl sm:text-2xl" key="phone" />,
  <FaWhatsapp className="text-green-400 text-xl sm:text-2xl" key="whatsapp" />,
  <FaFacebookF className="text-blue-500 text-xl sm:text-2xl" key="facebook" />,
  <FaTwitter className="text-blue-300 text-xl sm:text-2xl" key="twitter" />,
];

const Marquee = () => {
  const items = useMemo(() => {
    const arr = [];
    flags.forEach((code, i) => {
      arr.push(<span key={`flag-${i}`} className={`fi fi-${code} inline-block mx-2 sm:mx-4 text-xl sm:text-2xl shrink-0 `} />);
      arr.push(
        <span key={`icon-${i}`} className="inline-block mx-2 sm:mx-4 shrink-0">
          {socialIcons[i % socialIcons.length]}
        </span>
      );
    });
    return [...arr, ...arr];
  }, []);

  return (
    <div className="relative w-full h-8 sm:h-10 overflow-hidden bg-gray-900 flex items-center">
      {/* subtle center line */}
      <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 border-t border-gray-700"></div>
      <div className="absolute inset-0 flex flex-nowrap whitespace-nowrap animate-marquee items-center">{items}</div>
    </div>
  );
};

const BookAnAppointment = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!document.getElementById("calendly-script")) {
      const s = document.createElement("script");
      s.id = "calendly-script";
      s.src = "https://assets.calendly.com/assets/external/widget.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div className="flex flex-col h-screen bg-white overflow-hidden">
      {/* Top marquee */}
      <Marquee />

      {/* Header */}
      <header className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-4 border-b border-gray-200">
        <button onClick={() => navigate(-1)} className="flex items-center text-gray-600 hover:text-gray-900 transition mb-2 sm:mb-0">
          <FaArrowLeft size={20} />
          <span className="ml-2 font-medium text-base sm:text-lg">Back</span>
        </button>

        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
          <FaCalendarAlt className="text-indigo-600 text-xl sm:text-2xl" />
          <span className="text-gray-800 font-semibold text-base sm:text-lg">Book your slot or</span>
        </div>

        <h1 className="text-center text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-0">Schedule Your Consultation</h1>

        <div className="flex items-center space-x-3 sm:space-x-4">
          <a
            href="tel:+8801672942855"
            className="flex items-center px-2 sm:px-3 py-1 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition text-sm sm:text-base"
          >
            <FaPhoneAlt className="mr-1" /> Call Now
          </a>
          <a
            href="https://wa.me/8801672942855"
            target="_blank"
            rel="noreferrer"
            className="flex items-center px-2 sm:px-3 py-1 bg-green-500 text-white rounded-full hover:bg-green-600 transition text-sm sm:text-base"
          >
            <FaWhatsapp className="mr-1" /> WhatsApp
          </a>
        </div>
      </header>

      {/* Calendly widget */}
      <main className="flex-1">
        <div
          className="calendly-inline-widget w-full h-full min-w-[240px] sm:min-w-[320px]"
          data-url="https://calendly.com/arvinsadik575/30min?hide_gdpr_banner=1"
        />
      </main>

      {/* Bottom marquee */}
      <Marquee />

      {/* Keyframes */}
      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 20s linear infinite; }
      `}</style>
    </div>
  );
};

export default BookAnAppointment;
