import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets';

const Testimonial = () => {

  const testimonials = [
    {
      name: "Emma Rodriguez",
      location: "Barcelona, Spain",
      image: assets.testimonial_image_1,
      testimonial:
        "Having rented cars from many providers, I can confidently say that my experience with RentRide was truly exceptional."
    },
    {
      name: "John Smith",
      location: "New York, USA",
      image: assets.testimonial_image_2,
      testimonial:
        "Among the many car rental services I’ve used, RentRide stands out for delivering an exceptional experience."
    },
    {
      name: "Ava Johnson",
      location: "Sydney, Australia",
      image: assets.testimonial_image_2,
      testimonial:
        "RentRide consistently delivers a smooth, reliable, and premium car rental experience."
    }
  ];

  return (
    <div className="py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full">

      <Title
        title="What Our Customers Say"
        subTitle="Discover why discerning travelers choose RentRide for their premium car rentals around the world."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16 w-full">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full"
          >
            <div className="flex items-center gap-4">
              <img
                className="w-14 h-14 rounded-full object-cover shadow-sm bg-slate-50"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className="text-lg font-bold text-slate-800">{testimonial.name}</p>
                <p className="text-accent text-sm font-medium">{testimonial.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-1 mt-6">
              {Array(5).fill(0).map((_, index) => (
                <img key={index} src={assets.star_icon} alt="star-icon" className="w-4 h-4 opacity-70" />
              ))}
            </div>

            <p className="text-slate-600 mt-4 leading-relaxed font-light">
              "{testimonial.testimonial}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
