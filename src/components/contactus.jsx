// src/pages/ContactUs.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa';
import ContactUsForm from '../components/ContactUsForm';

const ContactUs = () => (
  <section className="min-h-screen bg-gradient-to-b from-gray-100 to-white py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-5xl mx-auto space-y-12">

      {/* Back to Home */}
      <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
        <FaArrowLeft className="mr-2" /> Back to Home
      </Link>

      {/* Page Title */}
      <h1 className="text-5xl font-extrabold text-gray-900 text-center">
        Get in <span className="text-indigo-600">Touch</span> with Us
      </h1>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex items-start space-x-4">
          <FaPhone className="text-3xl text-indigo-600" />
          <div>
            <h2 className="font-semibold text-gray-800">Call Us</h2>
            <p className="text-gray-600">+8801672942855</p>
            <p className="text-gray-600">+8801978788141</p>

          </div>
        </div>
        <div className="flex items-start space-x-4">
          <FaEnvelope className="text-3xl text-green-600" />
          <div>
            <h2 className="font-semibold text-gray-800">Email Us</h2>
            <p className="text-gray-600">worldeducationgateway@gmail.com</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <FaMapMarkerAlt className="text-3xl text-red-600" />
          <div>
            <h2 className="font-semibold text-gray-800">Location</h2>
            <p className="text-gray-600">
              37/A, Sahara Center (4th floor),<br/>
              VIP Road, Kakrail, Dhaka-1000
            </p>
          </div>
        </div>
      </div>

      {/* Embedded Map */}
      <div className="rounded-3xl overflow-hidden shadow-lg">
        <iframe
          title="WEG Location"
          className="w-full h-64 sm:h-80"
          src="https://maps.google.com/maps?q=37%2FA%20Sahara%20Center%20(4th%20floor)%2C%20VIP%20Road%2C%20Kakrail%2C%20Dhaka-1000&t=&z=15&ie=UTF8&iwloc=&output=embed"
          allowFullScreen
          loading="lazy"
        />
      </div>

      {/* Why Contact WEG? */}
      <div className="bg-white rounded-3xl shadow-inner p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Contact WEG?</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {['Expert Guidance','Exceptional Support','Collaborative Approach','Innovative Solutions'].map(item => (
            <li key={item} className="flex items-center space-x-3">
              <FaCheckCircle className="text-indigo-600 w-6 h-6" />
              <span className="text-gray-700 font-medium text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Form Component */}
      <ContactUsForm />

      {/* Social Links */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Follow Us</h3>
        <div className="flex justify-center space-x-8 text-gray-600 text-3xl">
          <a href="#" className="hover:text-indigo-600 transition"><FaFacebookF /></a>
          <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
          <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
          <a href="#" className="hover:text-blue-700 transition"><FaLinkedinIn /></a>
        </div>
      </div>

    </div>
  </section>
);

export default ContactUs;
