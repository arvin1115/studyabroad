// src/components/HowWeWork.jsx
import React, { useEffect, useRef, useState } from "react";
import { FaGraduationCap, FaFileAlt, FaPaperPlane } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "STEP 1",
    icon: <FaGraduationCap size={36} className="text-blue-600" />,
    text: "Career Counselling - Course and Institution Selection - University Application",
  },
  {
    id: 2,
    title: "STEP 2",
    icon: <FaFileAlt size={36} className="text-blue-600" />,
    text: "Visa Documents Preparation - Interview Preparation - Visa Application",
  },
  {
    id: 3,
    title: "STEP 3",
    icon: <FaPaperPlane size={36} className="text-blue-600" />,
    text: "Accommodation Arrangement - Airport Pick Up - Pre-departure Orientation",
  },
];

const HowWeWork = () => {
  const containerRef = useRef(null);
  const [inView, setInView] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          const id = entry.target.dataset.id;
          setInView((prev) => ({ ...prev, [id]: entry.isIntersecting }));
        }),
      { threshold: 0.3 }
    );

    const items = containerRef.current.querySelectorAll(".step-item");
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-gray-100" ref={containerRef}>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-gray-800">
          How do we <span className="text-blue-600">work?</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          It is very easy to apply through NHP Education Consultants. It starts from career counseling and ends in pre-departure
          orientation.
        </p>
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1 bg-blue-600 w-1 h-full" />
          <div className="space-y-16">
            {steps.map((step) => (
              <div
                key={step.id}
                data-id={step.id}
                className={`step-item transition duration-700 ease-out transform \
                  ${inView[step.id] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              >
                <div className="flex flex-col sm:flex-row items-center">
                  {/* Badge on left */}
                  <div className="sm:w-1/2 flex justify-end mb-4 sm:mb-0">
                    <div className="bg-blue-600 text-white px-5 py-3 rounded-lg shadow-md text-sm font-semibold">{step.title}</div>
                  </div>
                  {/* Dot */}
                  <div className="w-0 flex items-center justify-center mx-4">
                    <div className="w-5 h-5 bg-white border-4 border-blue-600 rounded-full z-10" />
                  </div>
                  {/* Content card */}
                  <div className="sm:w-1/2 bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
                    <div className="flex-shrink-0">{step.icon}</div>
                    <p className="text-gray-700 text-base leading-relaxed">{step.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
