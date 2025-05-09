// src/components/ChooseYourCountryPremium.jsx
import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import "flag-icons/css/flag-icons.min.css";

const countries = [
  {
    id: "uk",
    code: "gb",
    name: "Study in UK",
    description:
      "One of the main advantages of studying in the UK is exposure to diverse cultures, world-renowned universities, and a rich academic heritage that shapes global leaders.",
  },
  {
    id: "usa",
    code: "us",
    name: "Study in USA",
    description:
      "Studying in the USA offers access to cutting-edge research, flexible degree options, and a vibrant campus life that fosters innovation and leadership.",
  },
  {
    id: "australia",
    code: "au",
    name: "Study in Australia",
    description:
      "Australia combines high-quality education with a multicultural environment, affordable living, and strong support services for international students.",
  },
  {
    id: "canada",
    code: "ca",
    name: "Study in Canada",
    description:
      "Canada is popular for its welcoming communities, cost-effective tuition, and a pathways-focused system that leads to excellent work opportunities.",
  },
  {
    id: "france",
    code: "fr",
    name: "Study in France",
    description:
      "France boasts prestigious institutions, rich cultural experiences, and a strong focus on research, art, and technology for ambitious students.",
  },
  {
    id: "malta",
    code: "mt",
    name: "Study in Malta",
    description:
      "Malta provides an English-speaking Mediterranean environment, affordable fees, and personalized education experiences in a historic setting.",
  },
  {
    id: "poland",
    code: "pl",
    name: "Study in Poland",
    description:
      "Poland offers high academic standards, modern campuses, and low living costs, making it an attractive hub for international education.",
  },
  {
    id: "hungary",
    code: "hu",
    name: "Study in Hungary",
    description:
      "Hungary combines reputable universities with affordable tuition, robust scholarship options, and a central European location for global learners.",
  },
  {
    id: "dubai",
    code: "ae",
    name: "Study in Dubai",
    description:
      "Dubai offers globally accredited programs, state-of-the-art facilities, and unparalleled networking in a dynamic international business centre.",
  },
];

const AnimatedCountry = ({ country }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-6 transition-transform duration-700 ease-out hover:scale-105 hover:shadow-xl flex flex-col items-center shadow-md border border-gray-100 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {/* Flag */}
      <div className="flex justify-center items-center mb-4">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-gray-300 shadow-md flex items-center justify-center">
          <span className={`fi fi-${country.code}`} style={{ width: "100%", height: "100%" }} />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg md:text-xl font-semibold text-gray-800 text-center mb-2">
        {country.name}
      </h3>
      <hr className="w-16 border-t-2 border-blue-600 mb-4" />

      {/* Description */}
      <p className="text-gray-600 text-sm md:text-base text-center mb-6 leading-relaxed">
        {country.description}
      </p>

      {/* Learn More Link */}
      <Link
        to={`/study-destination/${country.id}`}
        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
      >
        Learn More
        <FaChevronRight className="ml-2" />
      </Link>
    </div>
  );
};

const ChooseYourCountryPremium = () => (
  <section className="py-16 bg-gray-50 px-4">
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Choose Your <span className="text-blue-600">Country</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
          At WEG, we pave your path to global opportunities by simplifying Student Visa applications,
          post-study work permits, and spouse visas across the UK, USA, Australia, Canada, France, Malta,
          Poland, Hungary, and Dubai. Transform your global journey into a seamless experience—your future
          awaits!
        </p>
      </div>

      {/* Grid of Countries */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {countries.map((c) => (
          <AnimatedCountry key={c.id} country={c} />
        ))}
      </div>
    </div>
  </section>
);

export default ChooseYourCountryPremium;
