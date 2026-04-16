import React, { useState } from 'react'
import Title from '../components/Title'
import CarCard from '../components/CarCard'
import { assets, dummyCarData } from '../assets/assets'

const Cars = () => {

  const [input, setInput] = useState('')

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Top Section */}
      <div className="flex flex-col items-center py-20 bg-slate-100/50 max-md:px-4 border-b border-slate-200">
        <Title 
          title="Available Cars" 
          subTitle="Browse our selection of premium vehicles available for your next adventure"
        />

        <div className="flex items-center bg-white px-5 mt-8 max-w-2xl w-[95%] sm:w-full h-14 rounded-full shadow-sm border border-slate-200 focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/20 transition-all">
          <img 
            src={assets.search_icon} 
            alt="search" 
            className="w-5 h-5 mr-3 opacity-60"
          />

          <input
            type="text"
            placeholder="Search by make, model, or features..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-full outline-none text-slate-700 placeholder-slate-400 bg-transparent"
          />

          <button className="ml-2 p-2 hover:bg-slate-100 rounded-full transition-colors">
            <img 
              src={assets.filter_icon} 
              alt="filter" 
              className="w-5 h-5 opacity-70"
            />
          </button>
        </div>
      </div>

      {/* Cars Grid */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 mt-12 pb-24 max-w-[1400px] mx-auto w-full">
        <div className="flex justify-between items-end mb-6 border-b border-slate-200 pb-4">
           <p className="text-slate-500 font-medium">Showing <span className="text-slate-800 font-bold">{dummyCarData.length}</span> Cars</p>
           <select className="bg-white border border-slate-200 text-slate-700 text-sm rounded-lg focus:ring-accent focus:border-accent block p-2 cursor-pointer outline-none">
             <option value="">Sort by: Recommended</option>
             <option value="price_low">Price: Low to High</option>
             <option value="price_high">Price: High to Low</option>
           </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full mt-8">
          {dummyCarData.map((car, index) => (
            <div key={index} className="w-full">
               <CarCard car={car} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 

export default Cars
