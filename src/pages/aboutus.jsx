import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaUsers, FaQuoteLeft, FaEnvelope } from "react-icons/fa";

const AboutUs = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const ceoRef = useRef(null);
  const teamRef = useRef(null);
  const partnersRef = useRef(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    const hash = location.hash;
    const scrollToSection = (ref) => ref?.current?.scrollIntoView({ behavior: "smooth" });

    switch (hash) {
      case "#ceo":
        scrollToSection(ceoRef);
        break;
      case "#team":
        scrollToSection(teamRef);
        break;
      case "#partners":
        scrollToSection(partnersRef);
        break;
      case "#gallery":
        scrollToSection(galleryRef);
        break;
      default:
        break;
    }
  }, [location]);

  const handleCEOClick = () => {
    if (location.pathname === "/about-us") {
      navigate("/contact-us");
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-24 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-gray-900">
          About <span className="text-blue-600">Us</span>
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Welcome to <strong>World Education Gateway</strong> (WEG) — <em className="italic">your trusted partner</em> in international
          education and career consulting.
        </p>
      </div>

      {/* Who We Are */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            <strong>At WEG</strong>, we shape futures with care and strategy. We help students & professionals reach global academic
            goals through <span className="font-semibold text-blue-700">personalized guidance</span> and worldwide partnerships.
          </p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li>
              <FaUsers className="inline text-blue-600 mr-2" /> Study Abroad Consulting
            </li>
            <li>
              <FaUsers className="inline text-green-600 mr-2" /> Visa & Immigration Services
            </li>
            <li>
              <FaUsers className="inline text-yellow-600 mr-2" /> Career Counseling
            </li>
            <li>
              <FaUsers className="inline text-purple-600 mr-2" /> Partner Institution Support
            </li>
          </ul>
        </div>
        <div>
          {/* ✅ Who We Are Image - path below */}
          <img
            src="/src/assets/gallery/whoweare.jpeg" // Update path: D:/project/world/src/assets/gallery/whoweare.jpeg
            alt="Who We Are"
            className="w-full h-auto rounded-2xl shadow-lg object-contain"
          />
        </div>
      </div>

      {/* CEO Message */}
      <div ref={ceoRef} className="bg-white rounded-2xl shadow p-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Message from Our CEO</h2>
            <p className="text-gray-700 leading-relaxed">
              <FaQuoteLeft className="inline mr-2 text-blue-600" />
              <em>
                “Every student has the potential to change the world. At WEG, we give them the tools, mentorship, and opportunities to
                make that change happen.”
              </em>
            </p>
            <button onClick={handleCEOClick} className="mt-4 text-blue-600 hover:underline inline-flex items-center">
              <FaEnvelope className="mr-2" /> Contact the CEO
            </button>
          </div>
          {/* ✅ CEO Image - path below */}
          <img
            src="/src/assets/gallery/ceo.jpeg" // Update path: D:/project/world/src/assets/gallery/ceo.jpeg
            alt="CEO"
            className="w-48 h-48 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Our Team */}
      <div ref={teamRef} className="bg-white rounded-2xl shadow p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Murad Naser", title: "Founder & CEO", image: "team-1.jpg" },
            { name: "Sadia Afroz", title: "Senior Counselor", image: "team-2.jpg" },
            { name: "Hasan Jubayer", title: "Immigration Expert", image: "team-3.jpg" },
            { name: "Tithi Sultana", title: "Career Advisor", image: "team-4.jpg" },
          ].map((member, i) => (
            <div key={i} className="text-center space-y-2">
              {/* ✅ Team image path: /public/images/team-[1-4].jpg */}
              <img
                src={`/images/${member.image}`}
                alt={member.name}
                className="w-28 h-28 mx-auto rounded-full object-cover shadow-md"
              />
              <h3 className="text-gray-800 font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Partners */}
      <div ref={partnersRef} className="bg-white rounded-2xl shadow p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Partners</h2>
        <div className="overflow-hidden whitespace-nowrap relative">
          <div className="inline-block animate-marquee">
            {Array.from({ length: 50 }, (_, i) => (
              // ✅ Add your 50+ partner logos here
              <img
                key={i}
                src={`/images/partner/college-${i + 1}.png`} // You must add 50+ logos in /public/images/partner//images/partner/college png
                // Update path: D:/project/world/src/assets/gallery/img-1.jpeg to img-50.jpeg
                alt={`Partner ${i + 1}`}
                className="inline-block mx-4 w-20 h-20 object-contain rounded-full border"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div ref={galleryRef} className="bg-white rounded-2xl shadow p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Image Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 20 }, (_, i) => (
            <img
              key={i}
              src={`/src/assets/gallery/img${i + 1}.jpeg`} // Update path: D:/project/world/src/assets/gallery/img1.jpeg to img20.jpeg
              alt={`Gallery ${i + 1}`}
              className="w-full h-48 object-contain rounded-xl shadow-md"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
