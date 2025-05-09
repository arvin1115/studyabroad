import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo/logo.png";

const MobileSmallScreenNavbar = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [studyOpen, setStudyOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const slimH = 40;

  useEffect(() => {
    const onScroll = () => setShowHeader(window.scrollY <= 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const overlayTop = showHeader ? `${slimH + 52}px` : "52px";

  return (
    <div className="lg:hidden">
      {/* slim header */}
      {showHeader && (
        <div className="bg-[#F8F9FA] text-[#222222] text-sm px-4 py-2 shadow-md transition-all duration-300">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt />
              <span>+8801672942855</span>
            </div>
            <a href="https://wa.me/8801672942855" className="hover:text-[#CDA000]">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      )}

      {/* main navbar */}
      <header
        style={{ top: showHeader ? slimH : 0 }}
        className="fixed inset-x-0 z-40 bg-white text-[#222222] shadow-md transition-all duration-300"
      >
        <div className="px-3 py-2 flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10 w-10 object-cover rounded-full" />
          </Link>
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </header>

      {/* overlay menu */}
      {menuOpen && (
        <nav
          style={{ top: overlayTop }}
          className="fixed inset-x-0 bottom-0 bg-white text-[#222222] z-[9999] overflow-y-auto shadow-lg"
        >
          <div className="p-6">
            <div className="flex justify-end mb-4">
              <button onClick={() => setMenuOpen(false)} className="focus:outline-none">
                <FaTimes size={24} />
              </button>
            </div>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="block hover:text-[#CDA000]">
                  Home
                </Link>
              </li>

              {/* About Us */}
              <li>
                <div className="flex justify-between items-center">
                  <Link to="/about-us" className="hover:text-[#CDA000]">
                    About Us
                  </Link>
                  <button onClick={() => setAboutOpen(!aboutOpen)}>
                    <FaChevronDown className={aboutOpen ? "transform rotate-180 text-[#CDA000]" : "text-[#222222]"} />
                  </button>
                </div>
                {aboutOpen && (
                  <ul className="mt-2 ml-4 bg-gray-50 shadow rounded p-2 space-y-1">
                    <li>
                      <Link to="/about-us#ceo" className="block hover:text-[#CDA000]">
                        Message from CEO
                      </Link>
                    </li>
                    <li>
                      <Link to="/about-us#team" className="block hover:text-[#CDA000]">
                        Our Team
                      </Link>
                    </li>
                    <li>
                      <Link to="/about-us#partners" className="block hover:text-[#CDA000]">
                        Our Partners
                      </Link>
                    </li>
                    <li>
                      <Link to="/about-us#gallery" className="block hover:text-[#CDA000]">
                        Image Gallery
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Study Destination */}
              <li>
                <div className="flex justify-between items-center">
                  <Link to="/study-destination" className="hover:text-[#CDA000]">
                    Study Destination
                  </Link>
                  <button onClick={() => setStudyOpen(!studyOpen)}>
                    <FaChevronDown className={studyOpen ? "transform rotate-180 text-[#CDA000]" : "text-[#222222]"} />
                  </button>
                </div>
                {studyOpen && (
                  <ul className="mt-2 ml-4 bg-gray-50 shadow rounded p-2 space-y-1">
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
                      <li key={label}>
                        <Link to={path} className="block hover:text-[#CDA000]">
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Our Services */}
              <li>
                <div className="flex justify-between items-center">
                  <Link to="/our-services" className="hover:text-[#CDA000]">
                    Our Services
                  </Link>
                  <button onClick={() => setServicesOpen(!servicesOpen)}>
                    <FaChevronDown className={servicesOpen ? "transform rotate-180 text-[#CDA000]" : "text-[#222222]"} />
                  </button>
                </div>
                {servicesOpen && (
                  <ul className="mt-2 ml-4 bg-gray-50 shadow rounded p-2 space-y-1">
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
                      <li key={name}>
                        <Link to={path} className="block hover:text-[#CDA000]">
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li>
                <Link to="/free-assessment" className="block hover:text-[#CDA000]">
                  Free Assessment
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="block hover:text-[#CDA000]">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="block hover:text-[#CDA000]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </div>
  );
};

export default MobileSmallScreenNavbar;
