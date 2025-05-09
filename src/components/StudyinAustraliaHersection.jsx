// src/components/HeroSection.jsx
import React, { useState, useEffect, useRef } from "react";
import "flag-icons/css/flag-icons.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// ৫০+ দেশের পতাকা কোড (প্রয়োজনমতো বাড়াতে পারেন)
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

// মোট ৫টি স্লাইড: ১) Welcome + ৪টি Country
const slides = [
  {
    id: "welcome",
    src: "/src/assets/images/france.jpeg", // (যেভাবে ছিল তেমনই)
    title: "Welcome to WEG",
    subtitle: "Your Gateway to Global Education",
  },
  {
    id: "<country>-1",
    src: "/src/assets/images/<country>1.jpg", // TODO: এখানে <country>1.jpg বসান
    title: "Study in Australia", // TODO: এখানে Country নাম বসান
    subtitle: "Discover top universities and courses",
  },
  {
    id: "<country>-2",
    src: "/src/assets/images/<country>2.jpg", // TODO: এখানে <country>2.jpg বসান
    title: "Study in Australia",
    subtitle: "Experience vibrant campus life",
  },
  {
    id: "<country>-3",
    src: "/src/assets/images/<country>3.jpg", // TODO: এখানে <country>3.jpg বসান
    title: "Study in Australia",
    subtitle: "Benefit from world-class research",
  },
  {
    id: "<country>-4",
    src: "/src/assets/images/<country>4.jpg", // TODO: এখানে <country>4.jpg বসান
    title: "Study in Australia",
    subtitle: "Unlock work opportunities abroad",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  // প্রতি ৬ সেকেন্ডে স্লাইড পরিবর্তন
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
            {/* ওভারলে টেক্সট ও বাটন */}
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-4 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">{slide.title}</h2>
              <p className="text-lg sm:text-xl mb-6">{slide.subtitle}</p>
              <Link
                to="/get-quote" // TODO: আপনার রাউট যদি আলাদা
                className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
              >
                Get My Plan {/* TODO: যদি ভিন্ন লেবেল চান */}
              </Link>
            </div>
          </div>
        ))}

        {/* Prev / Next বাটন */}
        <button
          onClick={prevSlide}
          className="pointer-events-auto z-30 absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 p-2 rounded-full transition duration-200 ease-out hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto z-30 absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 p-2 rounded-full transition duration-200 ease-out hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        >
          <FaChevronRight size={24} />
        </button>
      </div>

      {/* ৩) ফিক্সড CTA সেকশন */}
      <div className="bg-indigo-900 text-white text-center py-12 px-4">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">Schedule Your Consultation</h3>
        <p className="max-w-xl mx-auto mb-6">
          Book a complimentary session with our expert advisors to craft your personalized study abroad strategy.
        </p>
        <Link
          to="/book-an-appointment" // TODO: প্রয়োজনমতো রাউট
          className="px-6 py-3 bg-white text-indigo-900 font-semibold rounded-full hover:bg-gray-200 transition"
        >
          Book Consultation {/* TODO: লেবেল পরিবর্তন করতে পারেন */}
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
