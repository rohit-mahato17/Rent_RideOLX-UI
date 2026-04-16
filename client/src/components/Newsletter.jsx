import React from 'react'

const Newsletter = () => {
  return (
    <div className="flex justify-center px-4 my-20 md:my-28 max-w-7xl mx-auto w-full">
      
      <div className="w-full bg-primary text-white rounded-[32px] shadow-2xl p-8 md:p-16 text-center relative overflow-hidden">
        
        {/* Decorative background glow */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent opacity-20 blur-[100px] rounded-full"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-500 opacity-20 blur-[100px] rounded-full"></div>

        <div className="relative z-10 w-full max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Never Miss a <span className="text-accent text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Deal!</span>
          </h1>

          <p className="text-slate-300 mb-10 md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Subscribe to receive the latest offers, new arrivals, and exclusive discounts directly in your inbox. Experience premium travel content.
          </p>

          <form className="flex flex-col sm:flex-row items-center gap-4 max-w-xl mx-auto">
            
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="w-full px-6 h-14 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 outline-none focus:border-accent focus:bg-white/20 transition-all backdrop-blur-md"
            />

            <button
              type="submit"
              className="w-full sm:w-auto h-14 px-8 rounded-xl bg-accent text-white font-semibold hover:bg-accent-hover transition-all active:scale-95 whitespace-nowrap shadow-lg shadow-accent/20 cursor-pointer"
            >
              Subscribe Now
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Newsletter
