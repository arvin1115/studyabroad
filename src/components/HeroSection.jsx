// src/components/HeroSection.jsx
import React, { useState, useEffect, useRef } from "react";
import "flag-icons/css/flag-icons.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// ৫০+ দেশের পতাকা কোড (আপনার প্রয়োজন মত বাড়াতে পারেন)
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

// মোট ১১টি স্লাইড: ১) Welcome, ২–১০) ৯টি দেশ, ১১) Team/Office
const slides = [
  {
    id: "welcome",
    src: "/src/assets/images/welcom.png", // TODO: আপনার Welcome ইমেজের পাথ দিন
    title: "Welcome to WEG",
    subtitle: "Your Gateway to Global Education",
  },
  {
    id: "uk",
    src: "/src/assets/images/uk.avif", // TODO: Study in UK ইমেজ পাথ
    title: "Study in UK",
    subtitle: "World-class Institutions & Rich Heritage",
  },
  {
    id: "usa",
    src: "/src/assets/images/usa.jpg", // TODO: Study in USA ইমেজ পাথ
    title: "Study in USA",
    subtitle: "Innovation, Research & Campus Life",
  },
  {
    id: "australia",
    src: "/src/assets/images/austrilia.jpeg",
    title: "Study in Australia",
    subtitle: "Quality Education & Vibrant Culture",
  },
  {
    id: "canada",
    src: "/src/assets/images/canada.jpeg",
    title: "Study in Canada",
    subtitle: "Welcoming Communities & Work Permits",
  },
  {
    id: "france",
    src: "/src/assets/images/france.jpeg",
    title: "Study in France",
    subtitle: "Academic Excellence & Cultural Flair",
  },
  {
    id: "malta",
    src: "/src/assets/images/malta.avif",
    title: "Study in Malta",
    subtitle: "Historic Campuses & EU Access",
  },
  {
    id: "poland",
    src: "/src/assets/images/polend.jpg",
    title: "Study in Poland",
    subtitle: "Affordable & High-Standard Programs",
  },
  {
    id: "hungary",
    src: "/src/assets/images/hungery.avif",
    title: "Study in Hungary",
    subtitle: "Top Medical & Engineering Degrees",
  },
  {
    id: "dubai",
    src: "/src/assets/images/dubai.jpeg",
    title: "Study in Dubai",
    subtitle: "Global Campuses & Networking Hub",
  },
  {
    id: "team",
    src: "/src/assets/images/office.png", // TODO: Team/Office ইমেজ পাথ
    title: "Meet Our Team",
    subtitle: "Expert Consultants at Your Service",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  // প্রতি ৬ সেকেন্ডে স্লাইড অটোমেটিক পরিবর্তন
  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCurrent((prev) => (prev + 1) % slides.length), 6000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const prevSlide = () => {
    clearTimeout(timeoutRef.current);
    setCurrent((current - 1 + slides.length) % slides.length);
  };
  const nextSlide = () => {
    clearTimeout(timeoutRef.current);
    setCurrent((current + 1) % slides.length);
  };

  return (
    <div className="relative bg-black text-white">
      {/* ১) ফ্ল্যাগ মারকুই */}
      <div className="overflow-hidden whitespace-nowrap bg-gray-900 py-2">
        <div className="inline-block animate-marquee">
          {flags.concat(flags).map((code, i) => (
            <span key={i} className={`fi fi-${code} inline-block mx-2 text-2xl`} />
          ))}
        </div>
      </div>

      {/* ২) কারোসল স্লাইডার */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh]">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === current ? "opacity-100 z-20" : "opacity-0 z-10 pointer-events-none"
            }`}
          >
            <img src={slide.src} alt={slide.title} className="w-full h-full object-cover" />
            {/* ওভারলে টেক্সট ও Get a Quote */}
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-4 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">{slide.title}</h2>
              <p className="text-lg sm:text-xl mb-6">{slide.subtitle}</p>
              <Link
                to="/get-quote" // TODO: /get-quote রাউট নিশ্চিত করুন
                className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
              >
                Get My Plan
              </Link>
            </div>
          </div>
        ))}

        {/* Prev / Next বাটন */}

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 p-2 rounded-full pointer-events-auto z-30 transition duration-300 ease-in-out"
        >
          <FaChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 p-2 rounded-full pointer-events-auto z-30 transition duration-300 ease-in-out"
        >
          <FaChevronRight size={24} />
        </button>
      </div>

      {/* ৩) ফিক্সড “Get a Free Quote” সেকশন */}
      <div className="bg-indigo-900 text-white text-center py-12 px-4">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">Schedule Your Exclusive Consultation</h3>
        <p className="max-w-xl mx-auto mb-6">
          Connect with our expert advisors for a complimentary, bespoke study-abroad planning session.
        </p>
        <Link
          to="/book-an-appointment" // TODO: /book-an-appointment রাউট নিশ্চিত করুন
          className="px-6 py-3 bg-white text-indigo-900 font-semibold rounded-full hover:bg-gray-200 transition"
        >
          Schedule Now
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
