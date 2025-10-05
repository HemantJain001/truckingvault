"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Michael Johnson",
    role: "Class A CDL Graduate",
    image: "/testimonial-1.jpg",
    quote: "The Trucking Vault changed my life! The instructors were patient, knowledgeable, and genuinely cared about my success. I passed my CDL test on the first try and landed a great job within two weeks.",
    rating: 5,
  },
  {
    name: "Sarah Martinez",
    role: "Dispatch Course Graduate",
    image: "/testimonial-2.jpg",
    quote: "The dispatch training was incredibly comprehensive. I learned everything from load boards to rate negotiation. Now I'm running my own successful dispatch business!",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Class B CDL Graduate",
    image: "/testimonial-3.jpg",
    quote: "Best decision I ever made. The hands-on training and personal attention made all the difference. I'm now driving for a reputable company and earning a great living.",
    rating: 5,
  },
  {
    name: "Lisa Rodriguez",
    role: "Trucking Business Owner",
    image: "/testimonial-4.jpg",
    quote: "The business course gave me the confidence and knowledge to start my own trucking company. The support didn't end after the course—they've been there every step of the way.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-DEFAULT via-dark-light to-dark-DEFAULT"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(212,167,72,0.15)_0%,transparent_70%)]"></div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-gold font-semibold text-xs uppercase tracking-wider mb-3 block">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-heading">
            Student <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Hear from our graduates who are now thriving in their trucking careers
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="glass-card p-6 md:p-10 shadow-subtle animate-fade-in-up">
            {/* Stars */}
            <div className="flex justify-center mb-5 gap-2">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <FaStar key={i} className="text-gold text-2xl" />
              ))}
            </div>

            {/* Quote Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shadow-subtle">
                <svg className="w-8 h-8 text-dark" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
              </div>
            </div>

            {/* Quote */}
            <p className="text-lg md:text-xl text-center mb-6 italic text-gray-300 leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </p>

            {/* Student Info */}
            <div className="flex flex-col items-center">
              {/* Photo Placeholder */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold to-gold-light mb-4 flex items-center justify-center shadow-subtle">
                <svg className="w-12 h-12 text-dark" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-1">{testimonials[currentIndex].name}</h4>
              <p className="text-gold font-semibold">{testimonials[currentIndex].role}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-16 glass p-4 rounded-full shadow-subtle hover:bg-gold hover:text-dark transition-all duration-300 border border-gold/30"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-xl" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-16 glass p-4 rounded-full shadow-subtle hover:bg-gold hover:text-dark transition-all duration-300 border border-gold/30"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-xl" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-12 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-gradient-to-r from-gold to-gold-light w-12 h-3 shadow-glow" 
                    : "bg-gray-600 hover:bg-gray-500 w-3 h-3"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
