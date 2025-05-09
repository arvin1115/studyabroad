import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaPhoneAlt, FaWhatsapp, FaClock, FaFacebookF, FaFacebookMessenger, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo/logo.png";

const LaptopLargeScreenNavbar = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [studyOpen, setStudyOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const slimH = 40;

  useEffect(() => {
    const onScroll = () => setShowHeader(window.scrollY <= 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="hidden lg:block fixed inset-x-0 z-50">
      {/* slim header */}
      {showHeader && (
        <div className="bg-[#F8F9FA] text-[#222222] text-sm px-8 py-2 shadow-md flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <FaPhoneAlt />
            <span>+8801978788141</span>
            <FaPhoneAlt />
            <span>+8801672941855</span>
          </div>
          <div className="flex items-center space-x-6">
            <FaClock />
            <span>Sat–Thu: 11 am–8 pm</span>
          </div>
          <div className="flex items-center space-x-4 text-xl">
            <a href="https://wa.me/8801672942855" className="hover:text-[#CDA000]">
              <FaWhatsapp />
            </a>
            <a href="https://m.me/yourpage" className="hover:text-[#CDA000]">
              <FaFacebookMessenger />
            </a>
            <a href="https://facebook.com" className="hover:text-[#CDA000]">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="hover:text-[#CDA000]">
              <FaTwitter />
            </a>
          </div>
        </div>
      )}

      {/* main navbar */}
      <header
        style={{ top: showHeader ? slimH : 0 }}
        className="absolute inset-x-0 bg-white text-[#222222] shadow-md transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-12 w-12 object-cover rounded-full" />
          </Link>
          <nav>
            <ul className="flex space-x-8 items-center">
              <li>
                <Link to="/" className="hover:text-[#CDA000]">
                  Home
                </Link>
              </li>

              {/* About Us */}
              <li onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)} className="relative">
                <div className="flex items-center hover:text-[#CDA000] cursor-pointer">
                  <Link to="/about-us">About Us</Link>
                  <FaChevronDown className="ml-1" />
                </div>
                {aboutOpen && (
                  <ul className="absolute top-full left-0 bg-white shadow-lg rounded py-2 w-48 z-50">
                    {[
                      ["#ceo", "Message from CEO"],
                      ["#team", "Our Team"],
                      ["#partners", "Our Partners"],
                      ["#gallery", "Image Gallery"],
                    ].map(([hash, label]) => (
                      <li key={hash} className="px-4 py-2">
                        <Link to={`/about-us${hash}`} className="hover:text-[#CDA000]">
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Study Destination */}
              <li onMouseEnter={() => setStudyOpen(true)} onMouseLeave={() => setStudyOpen(false)} className="relative">
                <div className="flex items-center hover:text-[#CDA000] cursor-pointer">
                  <Link to="/study-destination">Study Destination</Link>
                  <FaChevronDown className="ml-1" />
                </div>
                {studyOpen && (
                  <ul className="absolute top-full left-0 bg-white shadow-lg rounded py-2 w-56 z-50">
                    {[
                      ["Study in UK", "/study-destination/uk"],
                      ["Study in USA", "/study-destination/usa"],
                      ["Study in Australia", "/study-destination/australia"],
                      ["Study in Canada", "/study-destination/canada"],
                      ["Study in France", "/study-destination/france"],
                      ["Study in Malta", "/study-destination/malta"],
                      ["Study in Poland", "/study-destination/poland"],
                      ["Study in Hungary", "/study-destination/hungary"],
                      ["Study in Dubai", "/study-destination/dubai"],
                    ].map(([label, path]) => (
                      <li key={label} className="px-4 py-2">
                        <Link to={path} className="hover:text-[#CDA000]">
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Our Services */}
              <li onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)} className="relative">
                <div className="flex items-center hover:text-[#CDA000] cursor-pointer">
                  <Link to="/our-services">Our Services</Link>
                  <FaChevronDown className="ml-1" />
                </div>
                {servicesOpen && (
                  <ul className="absolute top-full left-0 bg-white shadow-lg rounded py-2 w-64 z-50">
                    {[
                      ["Free Counselling", "/our-services#free-counselling"],
                      ["IELTS & Online", "/our-services#ielts-english"],
                      ["University Admission", "/our-services#admission-support"],
                      ["Scholarship", "/our-services#scholarship-guidance"],
                      ["Visa Application", "/our-services#visa-assistance"],
                      ["Career Counselling", "/our-services#career-counselling"],
                      ["Bank Support", "/our-services#bank-support"],
                      ["Pre-Departure", "/our-services#pre-departure"],
                      ["Accommodation", "/our-services#accommodation"],
                    ].map(([name, path]) => (
                      <li key={name} className="px-4 py-2">
                        <Link to={path} className="hover:text-[#CDA000]">
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li>
                <Link to="/free-assessment" className="hover:text-[#CDA000]">
                  Free Assessment
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-[#CDA000]">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-[#CDA000]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default LaptopLargeScreenNavbar;
