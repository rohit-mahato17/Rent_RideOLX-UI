import React from "react";
import Title from "./Title";
import { dummyCarData, assets } from "../assets/assets";
import CarCard from "./CarCard";
import { useNavigate } from "react-router-dom";

const FeaturedSection = () => {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center py-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 max-w-[1400px] mx-auto w-full group">

      <Title
        title="Featured Vehicles"
        subTitle="Explore our selection of premium vehicles available for your next adventure."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16 w-full">
        {dummyCarData.slice(0, 6).map((car) => (
          <div key={car._id} className="w-full">
            <CarCard car={car} />
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          navigate("/cars");
          window.scrollTo(0, 0);
        }}
        className="flex items-center justify-center gap-2 px-8 py-3.5 border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 rounded-xl mt-16 transition-all duration-300 hover:shadow-md active:scale-95 cursor-pointer"
      >
        Explore all cars
        <img src={assets.arrow_icon} alt="arrow" className="w-4 opacity-70 ml-1 transition-transform group-hover:translate-x-1" />
      </button>

    </div>
  );
};

export default FeaturedSection;
