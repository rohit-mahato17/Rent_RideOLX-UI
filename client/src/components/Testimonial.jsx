import React from 'react'

const Testimonial = () => {

     const testimonials = [
        { name: "Emma Rodriguez", location: "Barcelona Spain", image: "assets.testimonial_image_1", testimonial: "Having rented cars from many providers, I can confidently say that my experience with CarRental was truly exceptional." },
        { name: "Jhon Smith", location: "New York, USA", image: "assets.testimonial_image_2", testimonial: "Among the many car rental services I’ve used, CarRental stands out for delivering an exceptional experience." },
        { name: "Ava Johnson", location: "Sydney, Australia", image: "assets.testimonial_image_3", testimonial: "CarRental consistently delivers a smooth, reliable, and premium car rental experience." }
        
    ];

    return (
        <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
            
            <Title title="What Our Customers Say" subTitle="Discover why discerning travelers choose StayVenture for their luxury accommodations around the world."/>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
                {testimonials.map((testimonial,index) => (
                    <div key={indx} className="bg-white p-6 rounded-xl shadow max-w-xs">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="font-playfair text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.address}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                                <Star key={index} filled={testimonial.rating > index} />
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4">"{testimonial.review}"</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonial
