import React, { useState } from "react";
import { assets } from "../assets/assets";

const cityList = ["Delhi", "Mumbai", "Bangalore", "Kolkata", "Chennai"];

const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState("");

  return (
    <div className="relative h-screen flex flex-col items-center justify-center gap-4 bg-gray-100 text-center overflow-hidden">

      {/* Background blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-indigo-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 z-10">
        Cars on <span className="text-blue-600">Rent</span>
      </h1>

      {/* Form */}
      <form className="flex flex-col md:flex-row items-start md:items-center gap-6 p-3 rounded-xl md:rounded-full w-full max-w-4xl bg-white shadow-xl z-10">

        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:ml-6 w-full">

          {/* Pickup Location */}
          <div className="flex flex-col gap-1">
            <p className="px-1 text-xs text-gray-500">
              {pickupLocation ? "Selected location" : "Please select location"}
            </p>

            <select
              required
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm 
                         focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            >
              <option value="">Pickup Location</option>
              {cityList.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Pickup Date */}
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="pickup-date" className="text-sm font-medium">
              Pickup Date
            </label>
            <input
              type="date"
              id="pickup-date"
              min={new Date().toISOString().split("T")[0]}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm 
                         focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          {/* Return Date */}
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="return-date" className="text-sm font-medium">
              Return Date
            </label>
            <input
              type="date"
              id="return-date"
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm 
                         focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="flex items-center justify-center gap-2 px-10 py-3 
                     bg-blue-600 hover:bg-blue-700 active:scale-95 
                     text-white rounded-full transition-all duration-300 
                     shadow-md max-sm:w-full"
        >
          <img
            src={assets.search_icon}
            alt="search"
            className="w-4 h-4 brightness-200"
          />
          Search
        </button>
      </form>

      {/* Description */}
      <p className="text-gray-600 max-w-xl z-10">
        Book premium cars at affordable prices. Comfort, style & safety — all in one ride.
      </p>

      {/* Car Image */}
      <img
        src={assets.main_car}
        alt="car"
        className="max-h-80 z-10 drop-shadow-2xl animate-float"
      />
    </div>
  );
};

export default Hero;
