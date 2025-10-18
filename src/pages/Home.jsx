import React, { useState } from "react";
import { blogs as allBlogs } from "../data/blogs";
import BlogCard from "../components/BlogCard";

const BLOGS_PER_PAGE = 6;

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter blogs by search term (title or tags)
  const filteredBlogs = allBlogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  // Sort blogs based on selected order
  const sortedBlogs = [...filteredBlogs].sort((a, b) => {
    return sortOrder === "newest"
      ? new Date(b.date) - new Date(a.date)
      : new Date(a.date) - new Date(b.date);
  });

  // Pagination calculations
  const totalPages = Math.ceil(sortedBlogs.length / BLOGS_PER_PAGE);
  const indexOfLastBlog = currentPage * BLOGS_PER_PAGE;
  const indexOfFirstBlog = indexOfLastBlog - BLOGS_PER_PAGE;
  const currentBlogs = sortedBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header: Title + Search */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="mt-4">
          <h1 className="text-4xl font-bold text-center md:text-left">Reflections & Notes</h1>
          <p className="text-gray-500 pt-0">--a play on “reflection” and personal thoughts.</p>
        </div>
        <input
          type="text"
          placeholder="Search by title or tag..."
          className="border border-gray-600 rounded px-4 py-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* Sort Dropdown */}
      <div className="flex justify-start mb-6">
        <label className="mr-2 mt-1 font-medium">Sort By:</label>
        <select
          className="border rounded px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-400"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

      {/* Blog Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-min">
        {currentBlogs.length > 0 ? (
          currentBlogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
        ) : (
          <p className="col-span-full text-center text-gray-500 mt-10">
            No blogs found.
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10 space-x-2 flex-wrap">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-4 py-2 rounded mb-2 transition-colors duration-200 ${currentPage === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
                }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
