import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom"

const CarCard = ({ car }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate()

  return (
    <div 
      onClick={() => { navigate(`/car-details/${car._id}`); scrollTo(0,0); }}
      className="group bg-white border border-borderColor/50 rounded-[20px] overflow-hidden 
                 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] 
                 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-full"
    >
      {/* Image Section */}
      <div className="relative h-56 sm:h-48 overflow-hidden bg-slate-50">
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Availability Badge */}
        {car.isAvailable && (
          <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-emerald-600 
                           px-3 py-1 rounded-full text-xs font-semibold tracking-wide shadow-sm">
            ● Available
          </span>
        )}

        {/* Price Tag */}
        <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md 
                        text-white px-4 py-2 rounded-xl shadow-lg border border-white/10">
          <span className="font-bold text-lg">
            {currency}{car.pricePerDay}
          </span>
          <span className="text-xs text-white/70 font-medium"> / day</span>
        </div>

        {/* Hover Overlay Feature */}
        <div className="absolute inset-0 bg-accent/10 flex items-center justify-center 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="px-6 py-2 text-sm bg-white text-slate-900 shadow-xl
                             rounded-full font-semibold hover:scale-105 transition-transform duration-300">
            View Details
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        
        {/* Title */}
        <div className="flex justify-between items-start mb-1">
           <h3 className="text-xl font-bold text-slate-800 tracking-tight leading-tight">
             {car.brand} {car.model}
           </h3>
        </div>

        <p className="text-sm text-slate-500 font-medium mb-4">
          {car.category} • {car.year}
        </p>

        {/* Specs */}
        <div className="mt-auto grid grid-cols-2 gap-y-3 pt-4 border-t border-slate-100 text-sm text-slate-600 font-medium">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
              <img src={assets.users_icon} alt="Seats" className="h-3.5 opacity-60" />
            </div>
            <span>{car.seating_capacity} Seats</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
               <img src={assets.fuel_icon} alt="Fuel" className="h-3.5 opacity-60" />
            </div>
            <span>{car.fuel_type}</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
               <img src={assets.car_icon} alt="Transmission" className="h-3.5 opacity-60" />
            </div>
            <span>{car.transmission}</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
               <img src={assets.location_icon} alt="Location" className="h-3.5 opacity-60" />
            </div>
            <span className="truncate" title={car.location}>{car.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
