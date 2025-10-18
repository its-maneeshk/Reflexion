import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Reflexion</Link>
        <div>
          <Link to="/" className="px-4 hover:text-gray-300">Home</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
