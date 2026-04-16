import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

const menuLinks = [
  { name: "Home", path: "/" },
  { name: "Cars", path: "/cars" },                
  { name: "My Bookings", path: "/my-bookings" },   
];


  return (
    <header className="sticky top-0 w-full z-50 glass">
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-4 max-w-7xl mx-auto">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={assets.logo} alt="logo" className="h-7 md:h-8 object-contain" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          {menuLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`transition-colors duration-300 hover:text-accent ${
                location.pathname === link.path
                  ? "text-accent font-semibold"
                  : "text-slate-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <div className="hidden lg:flex items-center text-sm gap-2 border border-slate-300 bg-white/50 px-4 py-1.5 rounded-full focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/20 transition-all">
            <input
              type="text"
              className="py-1 w-32 xl:w-48 bg-transparent outline-none text-slate-700 placeholder-slate-400"
              placeholder="Search cars..."
            />
            <img src={assets.search_icon} alt="search" className="h-4 opacity-60" />
          </div>

          <button
            onClick={() => navigate("/owner")}
            className="px-5 py-2 rounded-xl text-slate-700 font-medium hover:bg-slate-100 transition-colors"
          >
            Dashboard
          </button>

          <button
            onClick={() => setShowLogin(true)}
            className="px-6 py-2 rounded-xl bg-primary text-white font-medium hover:bg-primary-dull shadow-md shadow-primary/20 transition-all hover:-translate-y-0.5"
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer z-50"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          <img
            src={open ? assets.close_icon : assets.menu_icon}
            alt="menu"
            className="h-6 w-6"
          />
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {open && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-[80%] max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full bg-slate-50">
          <div className="p-6 pb-4 border-b border-slate-200 bg-white flex justify-between items-center">
            <img src={assets.logo} alt="logo" className="h-6" />
            <button onClick={() => setOpen(false)} className="p-2">
               <img src={assets.close_icon} alt="close" className="h-5 w-5 opacity-70" />
            </button>
          </div>

          <div className="flex flex-col gap-4 p-6 flex-grow bg-white">
            {menuLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`text-lg font-medium px-4 py-3 rounded-xl transition-colors ${
                  location.pathname === link.path ? "bg-accent/10 text-accent" : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="p-6 border-t border-slate-200 bg-slate-50 flex flex-col gap-3">
             <button
              onClick={() => {
                navigate("/owner");
                setOpen(false);
              }}
              className="w-full py-3 rounded-xl border border-slate-300 text-slate-700 font-medium hover:bg-slate-100 transition-colors"
            >
              Dashboard
            </button>

            <button
              onClick={() => {
                setShowLogin(true);
                setOpen(false);
              }}
              className="w-full py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary-dull shadow-md"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
