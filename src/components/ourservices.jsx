// src/components/OurServices.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaComments,
  FaGlobe,
  FaUniversity,
  FaAward,
  FaPassport,
  FaBriefcase,
  FaChartLine,
  FaHome,
  FaAngleDown,
  FaAngleUp,
  FaCalendarAlt,
  FaWhatsapp,
} from "react-icons/fa";
import "flag-icons/css/flag-icons.min.css";

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

const services = [
  {
    id: "free-counselling",
    title: "Free Counselling",
    icon: <FaComments className="text-indigo-600" />,
    subtitle: "Your Foundation for Success",
    process: [
      "Schedule Online: Pick a 30‑minute slot in seconds via our calendar.",
      "Pre‑Counsel Form: Share your background, goals, and budget.",
      "Personal Consultation: Speak one‑on‑one with a certified advisor, in‑person or virtual.",
      "Custom Action Plan: Receive a detailed PDF within 24 hours—program picks, timelines, next steps.",
      "Optional Follow‑Up: Book a 15‑minute check‑in to refine your plan.",
    ],
    benefits: [
      "No fees, no pressure—just expert insight",
      "Clear, step‑by‑step guidance on courses, scholarships, and visas",
      "Fast turnaround so you can move forward immediately",
    ],
  },
  {
    id: "ielts-english",
    title: "IELTS & English Prep",
    icon: <FaGlobe className="text-indigo-600" />,
    subtitle: "Achieve the Scores You Need",
    process: [
      "Diagnostic Assessment: Pinpoint strengths and gaps.",
      "Tailored Study Plan: 4–12 week curriculum across Listening, Reading, Writing, & Speaking.",
      "Live Strategy Sessions: Weekly small‑group workshops (max 6 students).",
      "Personalized Tutorials: Two private lessons per month.",
      "Timed Mock Exams: Full‑length tests with detailed feedback.",
      "24/7 Tutor Access: On‑demand support via our chat platform.",
    ],
    benefits: [
      "Flexible scheduling—mornings, afternoons, evenings",
      "Proven 85% success rate for target bands",
      "Unlimited access to 500+ practice resources",
    ],
  },
  {
    id: "admission-support",
    title: "University Admission",
    icon: <FaUniversity className="text-indigo-600" />,
    subtitle: "From Shortlist to Acceptance",
    process: [
      "Program Matching: Curate options based on your profile and goals.",
      "Eligibility Screening: Confirm GPA, test scores, and prerequisites.",
      "Document Development: SOP, essays, CV enhancement, recommendation coaching.",
      "Portal Management: Account setup, form completion, document uploads, payments.",
      "Offer Negotiation: Liaise with universities for fee waivers and scholarships.",
      "Decision Support: Compare offers, confirm deposits, and finalize acceptance.",
    ],
    benefits: [
      "Single point of contact for all your applications",
      "Average 2‑day turnaround per submission",
      "30% higher acceptance odds for our clients",
    ],
  },
  {
    id: "scholarship-guidance",
    title: "Scholarship Guidance",
    icon: <FaAward className="text-indigo-600" />,
    subtitle: "Secure the Funding You Deserve",
    process: [
      "Opportunity Audit: Identify global and university-specific scholarships.",
      "Deadline Tracker: Consolidate all dates and prerequisites in one calendar.",
      "Essay & Portfolio Coaching: Craft compelling narratives and presentations.",
      "Submission Management: Handle forms, uploads, and follow-up.",
      "Interview Prep & Appeals: Practice sessions and strategic reapplications.",
    ],
    benefits: [
      "Access to 1,000+ vetted opportunities",
      "Average award of USD 8,500 per student",
      "60% success rate in competitive pools",
    ],
  },
  {
    id: "visa-assistance",
    title: "Visa Application",
    icon: <FaPassport className="text-indigo-600" />,
    subtitle: "Smooth, Stress-Free Processing",
    process: [
      "Category Assessment: Select the correct visa type.",
      "Document Checklist: Compile academic, financial, and medical records.",
      "Form Filing: Complete e-visa applications error-free.",
      "Fee and Submission: Manage payments and portal filings.",
      "Appointment Booking: Schedule biometrics and embassy interviews.",
      "Mock Interview: Realistic Q&A and cultural coaching.",
      "Travel Briefing: Guidance on entry rules & logistics.",
    ],
    benefits: ["100% visa issuance rate among our clients", "Fast-track options for urgent cases"],
  },
  {
    id: "career-counselling",
    title: "Career Counselling",
    icon: <FaBriefcase className="text-indigo-600" />,
    subtitle: "Chart Your Professional Path",
    process: [
      "Comprehensive Audit: Skills testing, personality insights, market research.",
      "Career Blueprint: Identify growth sectors, salary benchmarks, and skill gaps.",
      "Upskilling Plan: Recommend courses, certifications, and language training.",
      "Job-Search Toolkit: CV/LinkedIn fine-tuning, cover-letter templates.",
      "Interview & Negotiation Coaching: Simulated interviews and salary tactics.",
      "Ongoing Placement Support: Access to recruiter networks.",
    ],
    benefits: ["90‑day money-back guarantee if no interview within 90 days", "Direct introductions to leading global employers"],
  },
  {
    id: "bank-support",
    title: "Bank Support",
    icon: <FaUniversity className="text-indigo-600" />,
    subtitle: "Secure Your Financial Foundations",
    process: [
      "Account Setup: NRE/NRO/KYC guidance and documentation help.",
      "Student Loan Consultancy: Compare lenders, interest rates, and moratoriums.",
      "Fee Remittance: SWIFT transfers, conversion, and real-time tracking.",
      "Account Management: Troubleshoot transfers and resolve disputes.",
    ],
    benefits: ["Exclusive preferential rates negotiated for you", "24/7 support desk for all remittance needs"],
  },
  {
    id: "pre-departure",
    title: "Pre-Departure Briefing",
    icon: <FaChartLine className="text-indigo-600" />,
    subtitle: "Step into Your New Life Prepared",
    process: [
      "Digital Handbook: Packing lists, checklists, and country guides.",
      "Interactive Webinar (2h): Cultural, academic & logistical prep.",
      "Live Q&A: Connect with alumni and expert advisors.",
      "Resource Library: On-demand videos, articles, and country briefs.",
    ],
    benefits: ["Holistic preparation for a smooth transition", "Downloadable resources for on-the-go reference"],
  },
  {
    id: "accommodation",
    title: "Accommodation Assistance",
    icon: <FaHome className="text-indigo-600" />,
    subtitle: "Find Your Home Away From Home",
    process: [
      "Needs Assessment: Define budget, location, and roommate preferences.",
      "Listing Selection: Hand-picked properties with virtual tours.",
      "Lease Support: Review contracts, negotiate deposits, and utilities.",
      "Move-In Coordination: Local orientation and emergency contacts.",
    ],
    benefits: ["Access to 200+ trusted properties in key study destinations", "100% secure booking—no payment without your approval"],
  },
];

const OurServices = () => {
  const [openIds, setOpenIds] = useState({});
  const toggle = (id) => setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="bg-white text-gray-800">
      {/* 1) Flag Marquee */}
      <div className="overflow-hidden whitespace-nowrap bg-gray-900 py-2">
        <div className="inline-block animate-marquee">
          {flags.concat(flags).map((code, i) => (
            <span key={i} className={`fi fi-${code} inline-block mx-2 text-2xl`} />
          ))}
        </div>
      </div>

      {/* 2) Quick Nav */}
      <nav className="bg-white shadow py-4">
        <ul className="flex overflow-x-auto space-x-4 px-4">
          {services.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="flex items-center gap-1 px-3 py-1 bg-blue-50 hover:bg-blue-100 rounded-full text-blue-600 font-medium whitespace-nowrap transition"
              >
                <FaAngleDown /> {s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* 3+) Service Sections */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
        <p className="text-center text-gray-600 mb-12">Guiding Your Ambitions, Realizing Your Potential</p>
        <p className="max-w-2xl mx-auto text-center text-lg text-gray‑700 mb-16">
          At World Education Gateway, we deliver comprehensive, end‑to‑finish support for every phase of your international education
          and career journey. From your very first consultation through to settling into your new home abroad, our dedicated experts
          ensure clarity, efficiency, and personalized guidance at every milestone.
        </p>

        {services.map((s) => {
          const isOpen = openIds[s.id];
          return (
            <div key={s.id} id={s.id} className="mb-12">
              <h2 className="text-2xl font-semibold mb-1 flex items-center gap-2">
                {s.icon} {s.title}
              </h2>
              <p className="text-blue-600 italic mb-4">{s.subtitle}</p>

              <ul className="list-disc list-inside space-y-2">
                {s.process.slice(0, isOpen ? s.process.length : 3).map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
              {s.process.length > 3 && (
                <button onClick={() => toggle(s.id)} className="mt-2 flex items-center text-blue-600 hover:underline">
                  {isOpen ? "Show Less" : "Read More"}
                  {isOpen ? <FaAngleUp className="ml-2" /> : <FaAngleDown className="ml-2" />}
                </button>
              )}

              <h3 className="mt-6 text-lg font-medium">Why It Matters</h3>
              <ul className="list-disc list-inside space-y-2 mt-2">
                {s.benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          );
        })}

        {/* CTA */}
        <div className="bg-blue-50 p-6 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-2">Ready to Take the Next Step?</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
            <Link
              to="/book-an-appointment"
              className="flex items-center justify-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              <FaCalendarAlt /> Book Your Free Counselling
            </Link>
            <a
              href="https://wa.me/8801978788141"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-100 transition"
            >
              <FaWhatsapp /> Chat Live with an Advisor
            </a>
          </div>
          <p className="text-sm text-gray-600">
            Or{" "}
            <Link to="/download-services-guide" className="underline">
              download our complete services guide
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
};

export default OurServices;
