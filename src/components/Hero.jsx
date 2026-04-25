import React, { useState } from "react";
import { assets } from "../assets/assets";

const cityList = ["Delhi", "Mumbai", "Bangalore", "Kolkata", "Chennai"];

const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState("");

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-6 md:gap-8 bg-slate-50 text-center overflow-hidden pt-10 pb-20 px-4 md:px-8">

      {/* Background blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-[80px] opacity-60 animate-pulse"></div>
      <div className="absolute top-1/2 right-[-10%] w-[500px] h-[500px] bg-indigo-300/20 rounded-full blur-[100px] opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 z-10 tracking-tight max-w-4xl leading-tight">
        Experience the Perfect <span className="text-accent">Ride</span>
      </h1>
      
      {/* Description */}
      <p className="text-slate-500 text-lg md:text-xl max-w-2xl z-10 mx-auto px-4 font-light">
        Book premium cars at affordable prices. Comfort, style, and safety — all in one ride.
      </p>

      {/* Form */}
      <form className="glass-card flex flex-col lg:flex-row items-center gap-4 lg:gap-6 p-4 md:p-6 rounded-2xl lg:rounded-full w-full max-w-5xl z-10 mt-4 md:mt-8">

        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 w-full lg:flex-1 pl-2">

          {/* Pickup Location */}
          <div className="flex flex-col items-start gap-1.5 w-full md:w-auto md:flex-1 relative">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">Location</label>
            <select
              required
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800
                         focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition hover:bg-slate-50 cursor-pointer appearance-none"
            >
              <option value="" disabled>Select your city...</option>
              {cityList.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="hidden md:block w-px h-10 bg-slate-200"></div>

          {/* Pickup Date */}
          <div className="flex flex-col items-start gap-1.5 w-full md:w-auto md:flex-1">
            <label htmlFor="pickup-date" className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">
              Pickup Date
            </label>
            <input
              type="date"
              id="pickup-date"
              min={new Date().toISOString().split("T")[0]}
              className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800
                         focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition hover:bg-slate-50"
              required
            />
          </div>

          <div className="hidden md:block w-px h-10 bg-slate-200"></div>

          {/* Return Date */}
          <div className="flex flex-col items-start gap-1.5 w-full md:w-auto md:flex-1">
            <label htmlFor="return-date" className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">
              Return Date
            </label>
            <input
              type="date"
              id="return-date"
              className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800
                         focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition hover:bg-slate-50"
              required
            />
          </div>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="flex items-center justify-center gap-2 w-full lg:w-auto px-8 py-4 lg:py-4 
                     bg-accent hover:bg-accent-hover active:scale-[0.98] 
                     text-white rounded-xl lg:rounded-full font-medium transition-all duration-300 
                     shadow-lg shadow-accent/30 mt-2 lg:mt-0"
        >
          <img
            src={assets.search_icon}
            alt="search"
            className="w-4 h-4 brightness-200"
          />
          Search Cars
        </button>
      </form>

      {/* Car Image */}
      <div className="relative w-full max-w-4xl mt-4 md:mt-12 z-10 flex justify-center">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[20%] bg-black/10 blur-xl rounded-full"></div>
        <img
          src={assets.main_car}
          alt="Sports Car"
          className="w-[90%] md:w-[80%] max-w-[800px] h-auto object-contain z-10 drop-shadow-2xl animate-float"
        />
      </div>
    </div>
  );
};

export default Hero;
