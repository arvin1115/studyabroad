// src/components/StudyDestination.jsx
import React, { useRef, useEffect } from "react";
import "flag-icons/css/flag-icons.min.css";
import { FaGraduationCap, FaClock, FaChartLine, FaChevronDown, FaChevronRight } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const countries = [
  {
    id: "uk",
    code: "gb",
    name: "United Kingdom",
    rate: 100,
    description: `The UK is home to centuries-old institutions like Oxford & Cambridge.
• Globally recognized degrees with lifelong alumni benefits
• Graduate Route: up to 2 years post-study work visa
• Multicultural campuses across London, Edinburgh, Manchester
• Access to £1.7 bn annual research funding`,
  },
  {
    id: "usa",
    code: "us",
    name: "United States",
    rate: 95,
    description: `The USA hosts more Top-100 universities than any other country.
• Flexible majors & minors encourage interdisciplinary study
• Optional Practical Training (OPT): 12–36 month internship
• Rich campus life in Boston, Silicon Valley, NYC
• Research labs driving AI, biotech, space exploration`,
  },
  {
    id: "australia",
    code: "au",
    name: "Australia",
    rate: 90,
    description: `Australia blends high teaching quality with lifestyle.
• 1–4 year post-study visas via Temporary Graduate visa
• Government scholarships such as Australia Awards
• Safe, English-speaking cities: Sydney, Melbourne, Brisbane
• Pathway diplomas and associate degrees leading to degrees`,
  },
  {
    id: "canada",
    code: "ca",
    name: "Canada",
    rate: 92,
    description: `Canada is celebrated for its welcoming policies.
• PGWP: 3-year work permit leading to PR
• Affordable tuition compared to UK/USA
• Top universities in Toronto, Vancouver, Montreal
• Express Entry points for STEM graduates`,
  },
  {
    id: "france",
    code: "fr",
    name: "France",
    rate: 90,
    description: `France offers rich culture and top research.
• Public university fees ~€300/year
• Prestigious Grandes Écoles with small cohorts
• English-taught Master's programs and MBAs
• Access to Erasmus+ exchanges across EU`,
  },
  {
    id: "malta",
    code: "mt",
    name: "Malta",
    rate: 88,
    description: `Malta combines Mediterranean charm with EU perks.
• English as an official language
• Affordable fees and living costs
• Internships in finance, gaming, tourism sectors
• Historic campuses in Valletta and Sliema`,
  },
  {
    id: "poland",
    code: "pl",
    name: "Poland",
    rate: 85,
    description: `Poland stands out in medicine & tech education.
• EU-recognized degrees at 50% lower cost
• English-medium MBBS and engineering programs
• Scholarship schemes like Ignacy Łukasiewicz
• Vibrant student cities: Warsaw, Kraków, Gdańsk`,
  },
  {
    id: "hungary",
    code: "hu",
    name: "Hungary",
    rate: 80,
    description: `Hungary is a hub for medical students.
• WHO- and EU-accredited Medicine & Dental programs
• Low tuition and living expenses
• Stipendium Hungaricum scholarship program
• Central location for exploring Europe`,
  },
  {
    id: "dubai",
    code: "ae",
    name: "Dubai",
    rate: 99,
    description: `Dubai hosts branch campuses of global universities.
• Zero income tax for students working part-time
• World-class facilities in Knowledge Village
• Internships with leading multinationals
• Nexus between East and West business networks`,
  },
];

const StudyDestination = () => {
  const sectionRefs = useRef({});
  const [statsRef, statsInView] = useInView({ threshold: 0.3 });
  const [ratesRef, ratesInView] = useInView({ threshold: 0.3 });

  // scroll to hash on mount
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && sectionRefs.current[hash]) {
      sectionRefs.current[hash].scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const marqueeFlags = [
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

  return (
    <div className="bg-white text-gray-800">
      {/* 1) Flag Marquee */}
      <div className="overflow-hidden whitespace-nowrap py-4 bg-gray-100">
        <div className="inline-block animate-marquee">
          {marqueeFlags.concat(marqueeFlags).map((code, i) => (
            <span key={i} className={`fi fi-${code} inline-block mx-4 text-4xl`} />
          ))}
        </div>
      </div>

      {/* 2) Premium Dual-Buttons */}
      <nav className="flex flex-wrap justify-center gap-4 my-8 px-4">
        {countries.map((c) => (
          <div key={c.id} className="flex flex-col sm:flex-row items-center gap-2">
            {/* scroll-to-section */}
            <button
              onClick={() => document.getElementById(c.id)?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-700 transition"
            >
              <span className={`fi fi-${c.code} text-xl`} />
              <span className="font-semibold">Discover {c.name}</span>
              <FaChevronDown className="ml-2" />
            </button>

            {/* route-to-page */}
            <Link
              to={`/study-destination/${c.id}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full shadow-lg hover:from-green-600 hover:to-teal-600 transition"
            >
              <span className={`fi fi-${c.code} text-xl`} />
              <span className="font-semibold">Embark on Your {c.name} Adventure</span>
              <FaChevronRight className="ml-2" />
            </Link>
          </div>
        ))}
      </nav>

      {/* 3) Top Counters */}
      <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-4 mb-12">
        {[
          { icon: <FaGraduationCap />, end: 1100, suf: "+", label: "Success Stories" },
          { icon: <FaClock />, end: 8, suf: "+", label: "Years Experience" },
          { icon: <FaChartLine />, end: 95, suf: "%", label: "Avg Visa Approval" },
        ].map((s, i) => (
          <div key={i} className="p-6 bg-gray-50 rounded-xl text-center shadow">
            <div className="text-5xl text-indigo-600 mb-3">{s.icon}</div>
            <div className="text-4xl font-bold text-gray-900">
              {statsInView ? <CountUp start={0} end={s.end} suffix={s.suf} duration={2} /> : "0"}
            </div>
            <h3 className="text-lg font-semibold mt-1">{s.label}</h3>
          </div>
        ))}
      </div>

      {/* 4) Country Sections */}
      {countries.map((c) => (
        <section id={c.id} key={c.id} ref={(el) => (sectionRefs.current[c.id] = el)} className="py-16 px-4 border-t">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <span className={`fi fi-${c.code} text-8xl shadow-lg`} />
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4">Why Study in {c.name}?</h3>
              <p className="whitespace-pre-line leading-relaxed text-gray-700">{c.description}</p>
              <div className="mt-6">
                <Link
                  to={`/study-destination/${c.id}`}
                  className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800"
                >
                  Learn More
                  <FaChevronRight />
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* 5) Visa Success Bars */}
      <section ref={ratesRef} className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Visa Success Rate by Country</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((c) => (
            <div key={c.id} className="p-4 bg-gray-50 rounded-xl shadow">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">{c.name}</span>
                <span className="font-bold text-gray-900">
                  {ratesInView ? <CountUp end={c.rate} suffix="%" duration={2} /> : "0%"}
                </span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="h-full bg-blue-600 rounded-full transition-all duration-[2000ms]"
                  style={{ width: `${ratesInView ? c.rate : 0}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StudyDestination;
