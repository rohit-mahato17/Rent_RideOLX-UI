import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-200 text-slate-500 mt-20">
      <div className="px-6 sm:px-10 md:px-16 lg:px-24 max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-12 border-b border-slate-200">
          
          {/* LOGO & DESCRIPTION */}
          <div className="flex flex-col items-start max-w-sm">
            <img src={assets.logo} alt="logo" className="mb-6 h-8 object-contain" />
            <p className="text-sm leading-relaxed text-slate-500">
              RentRide is a modern car rental platform designed to make your journeys smooth,
              reliable, and affordable. From daily rides to long trips, RentRide offers a wide
              range of vehicles with transparent pricing and trusted service.
            </p>
            
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-slate-100 transition-colors border border-slate-200">
                <img src={assets.facebook_logo} className="w-4 h-4 opacity-70" alt="facebook" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-slate-100 transition-colors border border-slate-200">
                <img src={assets.instagram_logo} className="w-4 h-4 opacity-70" alt="instagram" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-slate-100 transition-colors border border-slate-200">
                <img src={assets.twitter_logo} className="w-4 h-4 opacity-70" alt="twitter" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-slate-100 transition-colors border border-slate-200">
                <img src={assets.gmail_logo} className="w-4 h-4 opacity-70" alt="gmail" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Browse Cars</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">List Your Car</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-6">Resources</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Insurance</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-6">Contact</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-2">
                 <span className="text-slate-400">📍</span>
                 <span>1234 Luxury Drive<br/>San Francisco, CA 94107</span>
              </li>
              <li className="flex items-center gap-2 mt-2">
                 <span className="text-slate-400">📞</span>
                 <span>+1 98614 54321</span>
              </li>
              <li className="flex items-center gap-2 mt-2">
                 <span className="text-slate-400">✉️</span>
                 <a href="mailto:info@rentride.com" className="hover:text-accent transition-colors">info@rentride.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-between pt-8 text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-medium text-slate-700 hover:text-accent cursor-pointer transition-colors">
              RentRide
            </span>. All rights reserved.
          </p>

          <ul className="flex items-center gap-6">
            <li><a href="#" className="hover:text-accent transition-colors">Privacy</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Terms</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Sitemap</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}

export default Footer
