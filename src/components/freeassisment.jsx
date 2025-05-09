// src/pages/FreeAssessment.jsx
import React, { useState, useRef } from 'react';
import { FaClipboardList, FaUser, FaPhone, FaEnvelope, FaCheckCircle, FaPaperPlane } from 'react-icons/fa';

const FreeAssessment = () => {
  const [formData, setFormData] = useState({
    name: '', contact: '', email: '', ielts_yes_no: '', ielts_score: '',
    last_education: '', last_result: '', preferred_country: '', desired_subject: '',
    district: '', additional_info: ''
  });
  const [message, setMessage] = useState({ type: '', text: '' });
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'radio' ? value : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });
    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => form.append(key, value));

    try {
      const res = await fetch('https://getform.io/f/aroyrexb', {
        method: 'POST',
        body: form
      });
      if (res.ok) {
        setMessage({ type: 'success', text: 'Thank you! Your assessment request has been submitted.' });
        setFormData({
          name: '', contact: '', email: '', ielts_yes_no: '', ielts_score: '',
          last_education: '', last_result: '', preferred_country: '', desired_subject: '',
          district: '', additional_info: ''
        });
        formRef.current.reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      setMessage({ type: 'error', text: 'Oops! Something went wrong. Please try again later.' });
    }
    // hide message after 5s
    setTimeout(() => setMessage({ type: '', text: '' }), 5000);
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 sm:p-12">
        {/* Header */}
        <div className="flex flex-col items-center mb-8 animate-bounce">
          <FaClipboardList className="text-5xl text-blue-600 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Free Assessment Form
          </h2>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          {/* Name & Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                <FaUser className="inline mr-2 text-gray-600" /> Name*
              </label>
              <input
                type="text" name="name" required
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                <FaPhone className="inline mr-2 text-gray-600" /> Contact No*
              </label>
              <input
                type="tel" name="contact" required
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
                placeholder="+8801XXXXXXXXX"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              <FaEnvelope className="inline mr-2 text-gray-600" /> Email*
            </label>
            <input
              type="email" name="email" required
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
              placeholder="you@example.com"
            />
          </div>

          {/* IELTS Question */}
          <fieldset className="space-y-2">
            <legend className="text-gray-700 font-medium mb-1">
              <FaCheckCircle className="inline mr-2 text-gray-600" /> Have you appeared for IELTS?*
            </legend>
            <div className="flex space-x-6">
              <label className="inline-flex items-center">
                <input type="radio" name="ielts_yes_no" value="Yes" required className="form-radio text-blue-600" onChange={handleChange} />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="ielts_yes_no" value="No" required className="form-radio text-blue-600" onChange={handleChange} />
                <span className="ml-2">No</span>
              </label>
            </div>
          </fieldset>

          {/* IELTS Score */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">IELTS Score (if any):</label>
            <input
              type="text" name="ielts_score"
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
              placeholder="e.g. 7.5"
            />
          </div>

          {/* Education */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Last Education Completed*</label>
              <select name="last_education" required onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
              >
                <option value="">Select qualification</option>
                <option>Post Graduation</option>
                <option>Graduation</option>
                <option>Diploma</option>
                <option>A Level</option>
                <option>HSC</option>
                <option>O Level</option>
                <option>SSC</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Last Education Result*</label>
              <input
                type="text" name="last_result" required
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
                placeholder="GPA/Percentage"
              />
            </div>
          </div>

          {/* Country & Subject */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Preferred Country*</label>
              <input
                type="text" name="preferred_country" required
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
                placeholder="e.g. Canada, UK"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Desired Subject*</label>
              <input
                type="text" name="desired_subject" required
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
                placeholder="e.g. Computer Science"
              />
            </div>
          </div>

          {/* District & Additional Info */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Where Do You Live (District)*</label>
            <input
              type="text" name="district" required
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
              placeholder="Your district"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">If You Want to Add Anything</label>
            <textarea
              name="additional_info" rows="4"
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 resize-none"
              placeholder="Additional notes..."
            />
          </div>

          {/* Submit Button & Message */}
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-2xl text-lg transition duration-300"
          >
            <FaPaperPlane className="mr-2 animate-bounce" /> Submit
          </button>

          {message.text && (
            <div className={`mt-6 rounded-lg p-4 text-center ${message.type === 'success' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
              {message.text}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default FreeAssessment;
