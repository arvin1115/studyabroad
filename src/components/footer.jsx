// src/components/Footer.jsx
import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import logo from "../assets/logo/logo.png";

const Footer = () => {
  const { ref: topRef, inView: topVisible } = useInView({ threshold: 0.3, triggerOnce: false });
  const { ref: midRef, inView: midVisible } = useInView({ threshold: 0.3, triggerOnce: false });
  const { ref: botRef, inView: botVisible } = useInView({ threshold: 0.3, triggerOnce: false });

  const sectionClass = (visible) =>
    `${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} transition-all duration-700 ease-out`;

  return (
    <footer className="bg-[#011E3D] text-gray-200">
      {/* Top Grid */}
      <div
        ref={topRef}
        className={`max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ${sectionClass(
          topVisible
        )}`}
      >
        {/* Logo & Social */}
        <div className="flex flex-col items-center text-center">
          <img src={logo} alt="WEG Logo" className="h-14 mb-3" />
          <p className="italic text-sm text-gray-400">– From possibility to reality –</p>
          <div className="flex space-x-4 mt-4 text-2xl">
            {[FaFacebook, FaInstagram, FaTwitter, FaLinkedin].map((Icon, i) => (
              <a key={i} href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { to: "/about-us", label: "About Us" },
              { to: "/our-services", label: "Services" },
              { to: "/blogs", label: "Blog" },
              { to: "/privacy-policy", label: "Privacy Policy" },
            ].map((link, i) => (
              <li key={i}>
                <Link
                  to={link.to}
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Business Hours */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Business Hours</h3>
          <p className="flex items-center space-x-2 text-gray-400">
            <FaClock className="text-yellow-400" />
            <span>Sat–Thu: 11 am–8 pm</span>
          </p>
          <p className="flex items-center space-x-2 text-gray-400 mt-2">
            <FaClock className="text-yellow-400" />
            <span>Closed: Fridays & Public Holidays</span>
          </p>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Subscribe</h3>
          <p className="text-gray-400 text-sm mb-3">Get our latest news & offers</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 p-3 rounded-l-full bg-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none"
            />
            <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 rounded-r-full transition-colors">
              →
            </button>
          </div>
        </div>
      </div>

      <hr className="border-gray-700" />

      {/* Contact Info */}
      <div
        ref={midRef}
        className={`max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6 ${sectionClass(
          midVisible
        )}`}
      >
        {[
          {
            icon: <FaPhoneAlt className="text-yellow-400 text-2xl" />,
            label: "Call Us",
            value: "+8801978788141",
          },
          {
            icon: <FaEnvelope className="text-yellow-400 text-2xl" />,
            label: "Email Us",
            value: "worldeducationgateway@gmail.com",
          },
          {
            icon: <FaMapMarkerAlt className="text-yellow-400 text-2xl" />,
            label: "Location",
            value: (
              <>
                37/A, Sahara Center (4th floor),<br />
                VIP Road, Kakrail, Dhaka-1000
              </>
            ),
          },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center sm:items-start space-y-2">
            <div className="flex items-center space-x-3">
              {item.icon}
              <h4 className="text-white font-semibold">{item.label}</h4>
            </div>
            <p className="text-gray-400 text-center sm:text-left">{item.value}</p>
          </div>
        ))}
      </div>

      <hr className="border-gray-700" />

      {/* Bottom © */}
      <div
        ref={botRef}
        className={`text-center text-sm text-gray-500 py-6 ${sectionClass(botVisible)}`}
      >
        © {new Date().getFullYear()} World Education Gateway. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
