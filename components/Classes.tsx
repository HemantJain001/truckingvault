"use client";

import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const classes = [
  {
    title: "Class A CDL",
    description: "Get certified to drive combination vehicles weighing 26,001+ lbs, including tractor-trailers and tanker trucks.",
    features: [
      "Pre-trip inspection training",
      "Basic vehicle control exercises",
      "On-road driving instruction",
      "Endorsement preparation",
      "Job placement assistance",
    ],
    image: "/class-a.jpg",
  },
  {
    title: "Class B CDL",
    description: "Learn to operate single vehicles weighing 26,001+ lbs, such as buses, dump trucks, and delivery trucks.",
    features: [
      "Vehicle safety and inspection",
      "Backing and maneuvering",
      "City and highway driving",
      "Air brakes certification",
      "Career guidance",
    ],
    image: "/class-b.jpg",
  },
  {
    title: "CDL Endorsements",
    description: "Expand your opportunities with specialized endorsements for passenger transport, hazmat, tankers, and doubles/triples.",
    features: [
      "Passenger (P) endorsement",
      "Hazardous materials (H) endorsement",
      "Tanker (N) endorsement",
      "Doubles/Triples (T) endorsement",
      "School bus (S) endorsement",
    ],
    image: "/endorsements.jpg",
  },
];

export default function Classes() {
  return (
    <section id="classes" className="section-padding relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,167,72,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,167,72,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-gold font-semibold text-xs uppercase tracking-wider mb-3 block">Training Options</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-heading">
            CDL <span className="gradient-text">Training Classes</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Choose the CDL class that matches your career goals
          </p>
        </div>

        {/* Classes */}
        <div className="space-y-16">
          {classes.map((classItem, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative h-72 rounded-3xl overflow-hidden glass-card group">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shadow-subtle">
                        <span className="text-3xl text-dark font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-400 text-sm">Image: {classItem.title}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-heading">
                  <span className="gradient-text">{classItem.title}</span>
                </h3>
                <p className="text-base text-gray-400 mb-6 leading-relaxed">
                  {classItem.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {classItem.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4 group/item">
                      <div className="mt-1">
                        <FaCheckCircle className="text-gold text-lg transition-transform duration-300" />
                      </div>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="#enroll" className="btn-primary inline-flex items-center">
                  Enroll in {classItem.title}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
