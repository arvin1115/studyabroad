import React, { useState } from "react";

const LeaveComment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    comment: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate failure
    setError("Oops! Something went wrong. Please try again later.");

    // Remove error after 4 seconds
    setTimeout(() => {
      setError("");
    }, 4000);
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Leave a <span className="text-blue-600">Comment</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-lg">
          <textarea
            name="comment"
            rows="5"
            placeholder="Type your comment here..."
            value={formData.comment}
            onChange={handleChange}
            required
            className="w-full p-4 text-gray-800 placeholder-gray-400 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm md:text-base resize-none transition"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 text-sm md:text-base transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 text-sm md:text-base transition"
            />
          </div>

          <input
            type="text"
            name="website"
            placeholder="Website"
            value={formData.website}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 text-sm md:text-base transition"
          />

          <div className="flex items-start gap-3">
            <input type="checkbox" id="saveInfo" className="mt-1 accent-blue-600" />
            <label htmlFor="saveInfo" className="text-gray-600 text-sm">
              Save my name, email, and website in this browser for the next time I comment.
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-2xl text-lg transition duration-300 shadow-md"
          >
            Post Comment
          </button>

          {error && (
            <p className="text-red-600 text-center mt-4 font-medium text-sm md:text-base transition-opacity duration-300">{error}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default LeaveComment;
