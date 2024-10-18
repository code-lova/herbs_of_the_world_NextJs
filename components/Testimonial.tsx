'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { testimonials } from '@/constants';



const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonialsPerSlide = {
    sm: 1,
    md: 2,
    lg: 3,
  };

  const getSlidesPerView = (): number => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return testimonialsPerSlide.lg; // Large screens
      if (window.innerWidth >= 768) return testimonialsPerSlide.md;  // Medium screens
      return testimonialsPerSlide.sm; // Small screens
    }
    return testimonialsPerSlide.lg;
  };

  const nextSlide = () => {
    const totalSlides = Math.ceil(testimonials.length / getSlidesPerView());
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    const totalSlides = Math.ceil(testimonials.length / getSlidesPerView());
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const totalSlides = Math.ceil(testimonials.length / getSlidesPerView());

  return (
    <div>
      <div>
        <h1 className="text-center text-[34px] uppercase font-palanquin font-extrabold">Your Trust is Our Top Concern</h1>
        <div className="mt-4 ">
          <p className="mt-4 text-center mb-8 max-w-[300px] mx-auto">
            Suscipit tellus mauris a diam maecenas sed enim ut sem. Turpis egestas maecenas pharetra convallis posuere
          </p>
        </div>
      </div>

      {/* Slider Wrapper */}
      <div className="relative mb-12">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="flex-none w-full md:w-1/2 lg:w-1/3 px-2"
              >
                <Link
                  href="#"
                  className="flex flex-col text-center w-full h-[300px] rounded-lg shadow-lg shadow-green-200 p-6"
                >
                  <Image
                    src={testimonial.image}
                    alt="avatar"
                    className="rounded-full object-contain w-20 h-20 mx-auto mb-4"
                  />
                  <p className="mb-4">{'⭐'.repeat(testimonial.rating)}</p>
                  <p className="mb-4 sub_text line-clamp-2">{testimonial.review}</p>
                  <p className="heading_color font-bold text-base">{testimonial.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Previous and Next Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full"
        >
          &#10095;
        </button>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {Array(totalSlides)
            .fill(0)
            .map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full ${i === currentSlide ? 'bg-green-500' : 'bg-gray-400'}`}
                onClick={() => goToSlide(i)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
