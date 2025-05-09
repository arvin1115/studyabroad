// src/components/WhyChooseWEGPremium.jsx
import React, { useEffect, useRef, useState } from "react";
import {
  FaChalkboardTeacher,
  FaHandshake,
  FaHandsHelping,
  FaUniversity,
  FaLightbulb,
  FaHeart,
  FaCalendarAlt,
  FaGlobe,
  FaSchool,
  FaSmile,
  FaArrowRight,
} from "react-icons/fa";

const features = [
  {
    id: "exp",
    title: "EXPERIENCE",
    icon: <FaChalkboardTeacher size={32} className="text-blue-600" />,
    text: "Experience - all that matters! Having more than 8+ years of experience in education consultancy, NHP Education Consultants",
  },
  {
    id: "trans",
    title: "TRANSPARENCY",
    icon: <FaHandshake size={32} className="text-blue-600" />,
    text: "Straight Talk is Good Business! Our services are our commitments to you and we deliver what we commit. We do not chase the...",
  },
  {
    id: "past",
    title: "PASTORAL CARE",
    icon: <FaHandsHelping size={32} className="text-blue-600" />,
    text: "We look at the consultancy differently! We are highly clinical to take care of your problems and remain focused until we can...",
  },
  {
    id: "auth",
    title: "AUTHORIZED AGENT",
    icon: <FaUniversity size={32} className="text-blue-600" />,
    text: "Our excellent network with the Universities helps us to deliver superlative services to our students. We provide end to end...",
  },
  {
    id: "intel",
    title: "INTELLIGENCY AND SKILL",
    icon: <FaLightbulb size={32} className="text-blue-600" />,
    text: "Intelligency and Skill - Practical wisdom, trusted advice! Our success rate with visa applications and university admissions is one of the highest in...",
  },
  {
    id: "rel",
    title: "LONG TERM RELATIONSHIP",
    icon: <FaHeart size={32} className="text-blue-600" />,
    text: "Long Term Relationship - Business is our signature! At NHP, we are committed to provide much more than excellent education consultancy with us...",
  },
];

const stats = [
  { id: "s1", label: "Years of Experience", target: 8, suffix: "+", icon: <FaCalendarAlt size={28} className="text-blue-600" /> },
  { id: "s2", label: "Countries", target: 15, suffix: "", icon: <FaGlobe size={28} className="text-blue-600" /> },
  { id: "s3", label: "Universities", target: 100, suffix: "+", icon: <FaSchool size={28} className="text-blue-600" /> },
  { id: "s4", label: "Success Stories", target: 1100, suffix: "+", icon: <FaSmile size={28} className="text-blue-600" /> },
];

const WhyChooseWEGPremium = () => {
  const featuresRef = useRef(null);
  const statsRef = useRef(null);
  const [visibleFeatures, setVisibleFeatures] = useState({});
  const [counts, setCounts] = useState({ s1: 0, s2: 0, s3: 0, s4: 0 });

  // Animate features on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.dataset.id;
          setVisibleFeatures((prev) => ({ ...prev, [id]: entry.isIntersecting }));
        });
      },
      { threshold: 0.3 }
    );
    featuresRef.current.querySelectorAll(".feature-item").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Count-up stats on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.dataset.id;
          const stat = stats.find((s) => s.id === id);
          if (entry.isIntersecting && stat) {
            let start;
            const duration = 1500;
            const step = (timestamp) => {
              if (!start) start = timestamp;
              const progress = timestamp - start;
              const value = Math.min(Math.floor((progress / duration) * stat.target), stat.target);
              setCounts((prev) => ({ ...prev, [id]: value }));
              if (progress < duration) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.3 }
    );
    statsRef.current.querySelectorAll(".stat-item").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const animClass = (visible) => (visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6");

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Why Choose <span className="text-blue-600">WEG?</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
          Many feel lost when seeking the right guidance for their dreams, often leading to choices that miss the mark. At WEG, we turn
          confusion into clarity, helping you navigate toward smarter decisions and brighter futures.
        </p>

        {/* Features Grid */}
        <div ref={featuresRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {features.map((f) => (
            <div
              key={f.id}
              data-id={f.id}
              className={`feature-item bg-white p-6 rounded-lg shadow-lg transition-transform duration-500 ease-out transform hover:scale-105 ${animClass(
                visibleFeatures[f.id]
              )}`}
            >
              <div className="flex items-start space-x-4">
                <div>{f.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm flex items-center">
                    {f.text}
                    <FaArrowRight className="ml-2 text-blue-600 transition-transform duration-300 transform hover:translate-x-1" />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.id}
              data-id={s.id}
              className={`stat-item flex items-center space-x-3 p-4 sm:p-6 transition-transform duration-500 ease-out transform hover:scale-105 ${animClass(
                counts[s.id] > 0
              )}`}
            >
              <div>{s.icon}</div>
              <div>
                <div className="text-3xl font-bold text-gray-800">
                  {counts[s.id]}
                  {s.suffix}
                </div>
                <div className="text-sm text-gray-600">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseWEGPremium;
