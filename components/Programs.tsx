"use client";

import Image from "next/image";
import Link from "next/link";
import { FaBook, FaTruck, FaHandshake, FaBriefcase } from "react-icons/fa";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const programs = [
  {
    icon: <FaBook className="text-4xl text-primary" />,
    title: "ELDT Theory",
    description: "Comprehensive online training covering all FMCSA-required theory topics for CDL certification.",
    image: "/eldt-theory.jpg",
    cta: "Learn More",
  },
  {
    icon: <FaTruck className="text-4xl text-primary" />,
    title: "CDL Road Test Prep",
    description: "Hands-on behind-the-wheel training with experienced instructors to ensure you pass your CDL test.",
    image: "/road-test.jpg",
    cta: "Start Training",
  },
  {
    icon: <FaHandshake className="text-4xl text-primary" />,
    title: "Student Support",
    description: "Personalized guidance and support throughout your journey, from enrollment to job placement.",
    image: "/student-support.jpg",
    cta: "Get Support",
  },
  {
    icon: <FaBriefcase className="text-4xl text-primary" />,
    title: "Dispatch & Business",
    description: "Learn freight dispatching and how to start your own trucking business successfully.",
    image: "/dispatch-business.jpg",
    cta: "Explore Courses",
  },
];

export default function Programs() {
  useScrollAnimation();
  
  return (
    <section id="programs" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 animate-on-scroll">
          <span className="text-gold font-semibold text-xs uppercase tracking-wider mb-3 block">What We Offer</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-heading">
            Our <span className="gradient-text">Programs</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-6">
            Comprehensive training programs designed to help you succeed in the trucking industry
          </p>
          <Link 
            href="/courses"
            className="inline-flex items-center text-gold hover:text-gold-light font-semibold text-sm transition-colors duration-300"
          >
            View All Courses
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="card p-5 flex flex-col group animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-4 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-dark text-2xl shadow-subtle">
                  {program.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-2 font-heading group-hover:text-gold transition-colors duration-300">
                {program.title}
              </h3>
              <p className="text-gray-400 mb-4 flex-grow text-sm leading-relaxed">{program.description}</p>

              {/* CTA Button */}
              <Link
                href="#enroll"
                className="inline-flex items-center justify-center text-gold hover:text-dark hover:bg-gold font-semibold py-3 px-6 rounded-xl transition-all duration-300 border border-gold/30 hover:border-gold group"
              >
                {program.cta}
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
