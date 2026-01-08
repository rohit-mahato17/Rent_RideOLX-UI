import React, { useState } from "react";
import { assets } from "../assets/assets";

const cityList = ["Delhi", "Mumbai", "Bangalore", "Kolkata", "Chennai"];

const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState("");

  return (
    <div className="relative h-screen flex flex-col items-center justify-center gap-4 bg-gray-100 text-center overflow-hidden">

      {/* Background blur effects */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 relative z-10">
        Cars on <span className="text-blue-600">Rent</span>
      </h1>

      {/* Form */}
      <form className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-lg md:rounded-full w-full max-w-4xl bg-white shadow-lg relative z-10">

        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">

          {/* Pickup Location */}
          <div className="flex flex-col items-start gap-2">
            <select
              required
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="border rounded-md px-3 py-1 text-sm"
            >
              <option value="">Pickup Location</option>
              {cityList.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>

            <p className="px-1 text-sm text-gray-500">
              {pickupLocation ? pickupLocation : "Please select location"}
            </p>
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
              className="text-sm text-gray-500 border rounded-md px-2 py-1"
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
              className="text-sm text-gray-500 border rounded-md px-2 py-1"
              required
            />
          </div>
        </div>
      </form>

      {/* Description */}
      <p className="text-gray-500 max-w-xl relative z-10">
        Book premium cars at affordable prices. Comfort, style & safety — all in one ride.
      </p>

      {/* Car Image */}
      <img
        src={assets.main_car}
        alt="car"
        className="max-h-96 relative z-10 drop-shadow-2xl animate-float"
      />
    </div>
  );
};

export default Hero;
