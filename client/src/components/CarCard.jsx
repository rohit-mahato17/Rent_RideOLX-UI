import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom"

const CarCard = ({ car }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate()

  return (
    <div onClick = {()=> {navigate(`/car-details/${car._id}`); scrollTo(0,0)}}
    className="group bg-white border border-gray-200 rounded-2xl overflow-hidden 
                    shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer">

      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">

        <img
          src={car.image}
          alt="Car"
          className="w-full h-full object-cover transition-transform duration-700 
                     group-hover:scale-105"
        />

        {/* Classic Availability Badge */}
        {car.isAvailable && (
          <span className="absolute top-4 left-4 bg-emerald-600/90 
                           text-white px-4 py-1 rounded-full text-xs tracking-wide">
            Available
          </span>
        )}

        {/* Price Tag */}
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur 
                        text-gray-900 px-4 py-2 rounded-xl shadow">
          <span className="font-semibold text-lg">
            {currency}{car.pricePerDay}
          </span>
          <span className="text-xs text-gray-500"> / day</span>
        </div>

        {/* Hover Overlay Feature */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <button className="px-6 py-2 text-sm bg-white text-gray-900 
                             rounded-full font-medium hover:bg-gray-100">
            View Details
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Title */}
        <h3 className="text-lg font-semibold tracking-wide">
          {car.brand} {car.model}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          {car.category} • {car.year}
        </p>

        {/* Specs */}
        <div className="mt-5 grid grid-cols-2 gap-y-3 text-sm text-gray-600">

          <div className="flex items-center gap-2">
            <img src={assets.users_icon} alt="Seats" className="h-4 opacity-70" />
            <span>{car.seating_capacity} Seats</span>
          </div>

          <div className="flex items-center gap-2">
            <img src={assets.fuel_icon} alt="Fuel" className="h-4 opacity-70" />
            <span>{car.fuel_type}</span>
          </div>

          <div className="flex items-center gap-2">
            <img src={assets.car_icon} alt="Transmission" className="h-4 opacity-70" />
            <span>{car.transmission}</span>
          </div>

          <div className="flex items-center gap-2">
            <img src={assets.location_icon} alt="Location" className="h-4 opacity-70" />
            <span>{car.location}</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CarCard;
