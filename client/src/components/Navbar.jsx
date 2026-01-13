import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 py-4">

        {/* Logo */}
        <Link to="/">
          <img src={assets.logo} alt="logo" className="h-6" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          {menuLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`transition hover:text-primary ${
                location.pathname === link.path
                  ? "text-primary font-semibold"
                  : "text-gray-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Section */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
            <input
              type="text"
              className="py-1 w-40 bg-transparent outline-none"
              placeholder="Search..."
            />
            <img src={assets.search_icon} alt="search" className="h-4" />
          </div>

          <button
            onClick={() => navigate("/owner")}
            className="px-5 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            Dashboard
          </button>

          <button
            onClick={() => setShowLogin(true)}
            className="px-6 py-2 rounded-lg bg-primary text-white hover:bg-primary-dull"
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden cursor-pointer"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          <img
            src={open ? assets.close_icon : assets.menu_icon}
            alt="menu"
            className="h-6"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 right-0 h-screen w-full bg-white px-6 py-6 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6">
          {menuLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-gray-700"
            >
              {link.name}
            </Link>
          ))}

          <button
            onClick={() => navigate("/owner")}
            className="text-left font-medium"
          >
            Dashboard
          </button>

          <button
            onClick={() => {
              setShowLogin(true);
              setOpen(false);
            }}
            className="bg-primary text-white py-2 rounded-lg"
          >
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
