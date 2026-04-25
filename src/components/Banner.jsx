import React from 'react'
import { assets } from "../assets/assets"

const Banner = () => {
  return (
    <div className="px-4 md:px-8 mt-24 max-w-7xl mx-auto">
         <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between px-6 sm:px-10 md:px-16 pt-10 md:pt-0 
             bg-gradient-to-br from-slate-900 via-[#1e3a8a] to-slate-900 
             rounded-[32px] overflow-hidden shadow-2xl shadow-[#1e3a8a]/20">

             <div className="text-white flex flex-col justify-center text-center md:text-left py-8 md:py-16 flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Do You Own a Luxury Car?</h2>
                  <p className="mt-4 text-slate-300 text-sm md:text-base max-w-md mx-auto md:mx-0">
                      Monetize your vehicle effortlessly by listing it on RentRide.
                  </p>
                  <p className="mt-2 text-slate-400 text-xs md:text-sm max-w-lg leading-relaxed mx-auto md:mx-0">
                      We take care of insurance, driver verification, and secure payments — so you can earn passive income, stress-free.
                  </p>

                  <button className="px-8 py-3 bg-white hover:bg-slate-50 transition-transform hover:scale-105 active:scale-95 text-slate-900 rounded-xl font-semibold mt-8 shadow-xl max-w-fit mx-auto md:mx-0 cursor-pointer">
                      List Your Car
                  </button>
             </div>

             <div className="flex-1 flex justify-center md:justify-end items-end w-full mt-6 md:mt-0">
                  <img src={assets.banner_car_image} alt="car" className="max-w-full md:max-w-lg object-contain w-[90%] md:w-auto h-auto translate-y-2 md:translate-y-6 lg:translate-x-4"/>
             </div>
        </div>
    </div>
  )
}

export default Banner
