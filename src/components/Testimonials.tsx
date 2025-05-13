import React, { useState } from 'react';
import { Button } from '@mantine/core';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
const testimonials = [{
  name: 'James Mwangi',
  location: 'Trans-Nzoia County',
  image: 'https://randomuser.me/api/portraits/men/32.jpg',
  quote: "Before M-Shamba AI, I was selling my maize for 30 KES/kg to local middlemen. Now I'm getting 48 KES/kg directly from buyers in Nairobi. My income has increased by over 60%!",
  stars: 5
}, {
  name: 'Grace Wanjiku',
  location: 'Nakuru County',
  image: 'https://randomuser.me/api/portraits/women/44.jpg',
  quote: 'I love how easy it is to use. I just send a WhatsApp message and the AI finds buyers for my potatoes. The payments come directly to my M-Pesa, sometimes the same day!',
  stars: 5
}, {
  name: 'David Omondi',
  location: 'Kakamega County',
  image: 'https://randomuser.me/api/portraits/men/59.jpg',
  quote: "The price transparency is what I value most. Now I know the real market rates and can make informed decisions. I've already referred 3 other farmers from my village.",
  stars: 4
}];
export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextTestimonial = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  const currentTestimonial = testimonials[currentIndex];
  return <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Farmers Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from farmers who have increased their income with
            M-Shamba AI.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-green-50 rounded-xl p-6 md:p-8 shadow-md relative">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 flex flex-col items-center">
                <img src={currentTestimonial.image} alt={currentTestimonial.name} className="w-24 h-24 rounded-full border-4 border-green-200" />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">
                  {currentTestimonial.name}
                </h3>
                <p className="text-green-700">{currentTestimonial.location}</p>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className={i < currentTestimonial.stars ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'} />)}
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="h-full flex flex-col justify-center">
                  <blockquote className="text-lg md:text-xl italic text-gray-700">
                    "{currentTestimonial.quote}"
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-green-700' : 'bg-green-200'}`} aria-label={`Go to testimonial ${index + 1}`}></button>)}
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 left-2 md:-left-4">
              <Button variant="subtle" color="green" onClick={prevTestimonial} className="rounded-full h-10 w-10 p-0">
                <ChevronLeft size={20} />
              </Button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-2 md:-right-4">
              <Button variant="subtle" color="green" onClick={nextTestimonial} className="rounded-full h-10 w-10 p-0">
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
}