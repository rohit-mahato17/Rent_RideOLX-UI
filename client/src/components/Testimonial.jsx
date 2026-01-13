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
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">

      <Title
        title="What Our Customers Say"
        subTitle="Discover why discerning travelers choose StayVenture for their luxury accommodations around the world."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500"
          >
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className="text-xl font-semibold">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-1 mt-4">
              {Array(5).fill(0).map((_, index) => (
                <img key={index} src={assets.star_icon} alt="star-icon" />
              ))}
            </div>

            <p className="text-gray-500 mt-4 font-light">
              {testimonial.testimonial}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
