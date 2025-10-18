import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  // Calculate approximate read time based on full content
  const words = blog.content.split(" ").length;
  const readTime = Math.ceil(words / 200); // 200 wpm

  return (
    <div className="border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 bg-white">
      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
        <p className="text-gray-500 mb-4">{blog.date} · {readTime} min read</p>

        {/* Show summary instead of full content */}
        <p className="text-gray-700 mb-4 line-clamp-3">{blog.summary}</p>

        <div className="flex flex-wrap mb-4">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="text-sm bg-gray-200 rounded-full px-2 py-1 mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          to={`/blog/${blog.id}`}
          className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
        >
          Read Blog
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
