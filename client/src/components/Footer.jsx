import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-gray-500">

      <div className="flex flex-wrap justify-between gap-8 pb-6 border-b border-gray-300">

        {/* LOGO & DESCRIPTION */}
        <div className="max-w-80">
          <img src={assets.logo} alt="logo" className="mb-4 h-6" />
          <p className="text-sm">
            RentrIide is a modern car rental platform designed to make your journeys smooth,
            reliable, and affordable. From daily rides to long trips, RentrIide offers a wide
            range of vehicles with transparent pricing, easy booking, and trusted service—so
            you can ride with confidence, anytime, anywhere.
          </p>

          <div className="flex items-center gap-3 mt-4">
            <a href="#"><img src={assets.facebook_logo} className="w-5 h-5" alt="facebook" /></a>
            <a href="#"><img src={assets.instagram_logo} className="w-5 h-5" alt="instagram" /></a>
            <a href="#"><img src={assets.twitter_logo} className="w-5 h-5" alt="twitter" /></a>
            <a href="#"><img src={assets.gmail_logo} className="w-5 h-5" alt="gmail" /></a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h2 className="text-base font-medium text-gray-800 uppercase">Quick Links</h2>
          <ul className="mt-3 flex flex-col gap-1.5 text-sm">
            <li><a href="#">Home</a></li>
            <li><a href="#">Browse Cars</a></li>
            <li><a href="#">List Your Car</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h2 className="text-base font-medium text-gray-800 uppercase">Resources</h2>
          <ul className="mt-3 flex flex-col gap-1.5 text-sm">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Insurance</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="text-base font-medium text-gray-800 uppercase">Contact</h2>
          <ul className="mt-3 flex flex-col gap-1.5 text-sm">
            <li>1234 Luxury Drive</li>
            <li>San Francisco, CA 94107</li>
            <li>+1 98614 54321</li>
            <li>info@example.com</li>
          </ul>
        </div>

      </div>

      <hr className="border-gray-300 mt-8" />

      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5 text-sm">
        <p>
          © {new Date().getFullYear()}{" "}
          <a href="https://prebuiltui.com" className="hover:underline">
            PrebuiltUI
          </a>. All rights reserved.
        </p>

        <ul className="flex items-center gap-4">
          <li><a href="#">Privacy</a></li>
          <li>|</li>
          <li><a href="#">Terms</a></li>
          <li>|</li>
          <li><a href="#">Sitemap</a></li>
        </ul>
      </div>

    </div>
  )
}

export default Footer
