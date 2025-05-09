// src/pages/PrivacyPolicy.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaGlobe, FaShieldAlt, FaFileContract } from "react-icons/fa";
import "flag-icons/css/flag-icons.min.css";

const PrivacyPolicy = () => (
  <section className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10">
      {/* Animated Icon Header */}
      <div className="flex justify-center space-x-8 mb-8 animate-bounce">
        <FaGlobe className="text-5xl text-blue-600" />
        <FaShieldAlt className="text-5xl text-green-600" />
        <FaFileContract className="text-5xl text-yellow-600" />
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-4">Privacy Policy & Terms of Use</h1>

      {/* Back Button */}
      <div className="mb-6 text-center">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:underline">
          <FaArrowLeft className="mr-2" /> Back to Home
        </Link>
      </div>

      {/* Content Sections */}
      <article className="prose prose-lg text-gray-800 space-y-8">
        {/* Privacy Policy */}
        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to World Education Gateway! We value your privacy and are committed to protecting your personal information. This
            Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our platform.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <ul>
            <li>
              <strong>Personal Details:</strong> Name, email, phone number.
            </li>
            <li>
              <strong>Academic Records:</strong> Education history, qualifications.
            </li>
            <li>
              <strong>Usage Data:</strong> Cookies, analytics, IP address.
            </li>
            <li>
              <strong>Communications:</strong> Feedback and inquiry messages.
            </li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Data</h2>
          <p>
            We use your information to deliver tailored educational consultancy services, send updates, improve user experience, and
            meet legal obligations.
          </p>
        </section>

        <section>
          <h2>4. Data Sharing & Security</h2>
          <p>
            We never sell your personal data. We may share information with trusted partners under strict confidentiality agreements.
            We employ SSL encryption and secure servers to protect your data.
          </p>
        </section>

        <section>
          <h2>5. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal data. For requests, please contact us at{" "}
            <a href="mailto:worldeducationgateway@gmail.com" className="text-blue-600 hover:underline">
              worldeducationgateway@gmail.com
            </a>
            .
          </p>
        </section>

        {/* Terms of Use */}
        <section>
          <h2>Terms of Use</h2>
          <ol>
            <li>
              <strong>Acceptance:</strong> By using our site, you agree to these Terms and our Privacy Policy.
            </li>
            <li>
              <strong>Service:</strong> We provide consultancy for student visas and educational pathways.
            </li>
            <li>
              <strong>User Conduct:</strong> Provide accurate information and follow applicable laws.
            </li>
            <li>
              <strong>Intellectual Property:</strong> All site content is owned by World Education Gateway and protected by copyright.
            </li>
            <li>
              <strong>Limitation of Liability:</strong> We are not responsible for indirect damages.
            </li>
            <li>
              <strong>Governing Law:</strong> These Terms are governed by the laws of Bangladesh.
            </li>
          </ol>
        </section>

        <p className="text-center text-sm text-gray-500">Last updated: April 29, 2025</p>
      </article>
    </div>
  </section>
);

export default PrivacyPolicy;
