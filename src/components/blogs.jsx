import React from "react";
import { FaRegCalendarAlt, FaUserAlt } from "react-icons/fa";

const sampleBlogs = [
  {
    title: "Study Abroad in 2025: Trends & Tips",
    author: "Admin",
    date: "April 28, 2025",
    excerpt:
      "Explore the latest trends in global education, popular destinations, and how to prepare effectively for studying abroad in 2025.",
    image: "https://source.unsplash.com/featured/?university,abroad",
  },
  {
    title: "Visa Interview Hacks: What You Must Know",
    author: "Team WEG",
    date: "April 22, 2025",
    excerpt: "Visa interviews can be nerve-wracking. Here are insider tips and practical advice to increase your chances of approval.",
    image: "https://source.unsplash.com/featured/?visa,passport",
  },
  {
    title: "Top Scholarships for Bangladeshi Students",
    author: "Scholarship Desk",
    date: "April 10, 2025",
    excerpt: "From Commonwealth to Erasmus Mundus, discover top scholarship programs and how to apply smartly.",
    image: "https://source.unsplash.com/featured/?scholarship,student",
  },
];

const Blogs = () => {
  return (
    <section className="min-h-screen py-16 px-4 sm:px-6 lg:px-20 bg-gray-50">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Our <span className="text-blue-600">Blogs</span>
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Stay updated with the latest insights and guidance for your global education journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {sampleBlogs.map((blog, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl"
          >
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{blog.title}</h2>
              <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
                <span className="flex items-center gap-1">
                  <FaUserAlt className="text-blue-600" /> {blog.author}
                </span>
                <span className="flex items-center gap-1">
                  <FaRegCalendarAlt className="text-green-600" /> {blog.date}
                </span>
              </div>
              <p className="text-gray-700 mb-4">{blog.excerpt}</p>
              <button className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
