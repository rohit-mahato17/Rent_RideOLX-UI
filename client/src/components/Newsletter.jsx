import React from 'react'

const Newsletter = () => {
  return (
    <div className="flex justify-center px-4 my-24">
      
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
        
        <h1 className="text-2xl md:text-4xl font-semibold text-gray-800">
          Never Miss a Deal!
        </h1>

        <p className="text-gray-500 mt-3 mb-8 md:text-lg">
          Subscribe to receive the latest offers, new arrivals, and exclusive discounts directly in your inbox.
        </p>

        <form className="flex flex-col sm:flex-row items-center gap-4">
          
          <input
            type="email"
            required
            placeholder="Enter your email address"
            className="w-full px-4 h-12 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <button
            type="submit"
            className="h-12 px-8 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-all"
          >
            Subscribe
          </button>

        </form>

      </div>
    </div>
  )
}

export default Newsletter
