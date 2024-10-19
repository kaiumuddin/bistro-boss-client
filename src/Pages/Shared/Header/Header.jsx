// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-primary text-white p-4 border-b border-black shadow-brutal fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold uppercase">
          <Link to="/" className="hover:text-secondary transition-colors">
            Bistro Boss
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-6">
          <Link to="/" className="hover:text-secondary transition-colors">
            Home
          </Link>
          <Link to="/menu" className="hover:text-secondary transition-colors">
            Menu
          </Link>
          <Link to="/about" className="hover:text-secondary transition-colors">
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-secondary transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
