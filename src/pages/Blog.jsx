import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "../data/blogs";

const Blog = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog)
    return <p className="text-center mt-10 text-gray-500 text-lg">Blog not found.</p>;

  return (
    <div className="container mx-auto px-16 py-10">
      {/* Main Image */}
      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-md mb-6"
        />
      )}

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">{blog.title}</h1>

      {/* Date */}
      <p className="text-sm text-gray-500 mb-6">Published on: {blog.date}</p>

      {/* Blog Content */}
      <div
        className="prose prose-sm sm:prose-lg max-w-full"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      {/* Tags */}
      {blog.tags.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs sm:text-sm bg-gray-200 rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Back Link */}
      <Link
        to="/"
        className="inline-block mt-8 text-blue-500 hover:underline"
      >
        ← Back to Home
      </Link>
    </div>
  );
};

export default Blog;
