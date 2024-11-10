'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { testimonials } from '@/constants';

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3); // default for large screens

  // Adjust slidesPerView based on window width
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1024) setSlidesPerView(3);
      else if (window.innerWidth >= 768) setSlidesPerView(2);
      else setSlidesPerView(1);
    };

    updateSlidesPerView(); // Set on initial render
    window.addEventListener('resize', updateSlidesPerView); // Update on resize

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  const nextSlide = () => {
    const totalSlides = Math.ceil(testimonials.length / slidesPerView);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    const totalSlides = Math.ceil(testimonials.length / slidesPerView);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const totalSlides = Math.ceil(testimonials.length / slidesPerView);

  return (
    <div>
      <div>
        <h1 className="text-center text-[34px] uppercase font-palanquin font-extrabold">Your Trust is Our Top Concern</h1>
        <div className="mt-4">
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
            {testimonials.map((testimonial) => (
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
            .map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-green-500' : 'bg-gray-400'}`}
                onClick={() => goToSlide(index)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
