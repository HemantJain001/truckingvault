"use client";

import { useState } from "react";
import Link from "next/link";
import { FaTruck, FaBus, FaArrowUp, FaCog, FaCertificate, FaClipboardList, FaBriefcase, FaCheck, FaClock, FaStar } from "react-icons/fa";

const courses = [
  {
    icon: <FaTruck className="text-4xl" />,
    title: "Class A CDL Training",
    description: "Train to drive combination vehicles like tractor-trailers and tankers.",
    features: [
      "FMCSA ELDT Compliant",
      "Theory + Behind-the-Wheel",
      "Includes Vehicle Inspection, Basic Controls, and Road Skills",
      "Job placement assistance available",
    ],
    duration: "3-6 weeks",
    idealFor: "Over-the-road (OTR), regional, and local truck driving jobs.",
    badge: "Most Popular",
    category: "CDL Training",
    color: "from-gold to-gold-light",
  },
  {
    icon: <FaBus className="text-4xl" />,
    title: "Class B CDL Training",
    description: "Operate straight trucks, buses, dump trucks, and more.",
    features: [
      "FMCSA ELDT Compliant",
      "Theory + Behind-the-Wheel",
      "Includes Pre-trip Inspection, Skills, and Road Test",
    ],
    duration: "2-4 weeks",
    idealFor: "Delivery drivers, school bus operators, and municipal jobs.",
    category: "CDL Training",
    color: "from-gold to-gold-light",
  },
  {
    icon: <FaArrowUp className="text-4xl" />,
    title: "CDL Upgrade: Class B to Class A",
    description: "Already have a Class B? Upgrade to Class A and expand your career.",
    features: [
      "Fast-track program",
      "Focused behind-the-wheel and skills training",
      "FMCSA ELDT Compliant",
    ],
    duration: "1-2 weeks",
    idealFor: "Save time and money while opening more opportunities.",
    category: "CDL Training",
    color: "from-gold to-gold-light",
  },
  {
    icon: <FaCog className="text-4xl" />,
    title: "CDL Restriction Removal",
    description: "Remove Automatic Transmission or Air Brake Restrictions.",
    features: [
      "Manual transmission training available",
      "Air brake endorsement training",
      "Custom one-on-one coaching",
    ],
    duration: "Flexible",
    idealFor: "Boost your earning potential and job flexibility.",
    category: "Specialized",
    color: "from-gold-light to-gold",
  },
  {
    icon: <FaCertificate className="text-4xl" />,
    title: "CDL Endorsement Courses",
    description: "Hazmat • Tanker • Doubles/Triples • Passenger",
    features: [
      "Online theory training for ELDT-required endorsements",
      "Includes practice tests",
      "Certificate of Completion provided",
    ],
    duration: "Self-paced",
    idealFor: "Add valuable credentials to your CDL.",
    category: "Endorsements",
    color: "from-gold-light to-gold",
  },
  {
    icon: <FaClipboardList className="text-4xl" />,
    title: "Dispatching Course",
    description: "Learn to run a dispatch business or start your own trucking company",
    features: [
      "Covers load boards, rate negotiation, carrier setup",
      "Ideal for aspiring dispatchers or owner-operators",
      "Includes bonus forms and scripts",
    ],
    duration: "4-6 weeks",
    idealFor: "Perfect side hustle or full-time career option.",
    badge: "Business",
    category: "Business",
    color: "from-amber-500 to-gold",
  },
  {
    icon: <FaBriefcase className="text-4xl" />,
    title: "Start Your Trucking Business Course",
    description: "From permits to profit, we&apos;ll teach you how to start your own trucking company.",
    features: [
      "Business formation (LLC, EIN, DOT/MC number)",
      "Insurance, compliance, IRP/IFTA, factoring",
      "Step-by-step startup blueprint",
    ],
    duration: "6-8 weeks",
    idealFor: "Turn your CDL into a business.",
    badge: "Business",
    category: "Business",
    color: "from-amber-500 to-gold",
  },
];

const categories = ["All Courses", "CDL Training", "Endorsements", "Specialized", "Business"];

export default function CoursesList() {
  const [selectedCategory, setSelectedCategory] = useState("All Courses");

  const filteredCourses = selectedCategory === "All Courses" 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <section className="section-padding relative overflow-hidden min-h-screen">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-DEFAULT via-dark-light to-dark-DEFAULT"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,167,72,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,167,72,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      <div className="absolute top-1/4 -left-48 w-[500px] h-[500px] bg-gold/8 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: "4s" }}></div>
      <div className="absolute bottom-1/4 -right-48 w-[500px] h-[500px] bg-gold/8 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: "6s" }}></div>

      <div className="container mx-auto relative z-10 px-4">
        {/* Enhanced Page Header */}
        <div className="text-center mb-12 pt-24">
          <div className="inline-flex items-center glass rounded-full px-6 py-3 mb-8 animate-fade-in-up border border-gold/30 shadow-subtle">
            <FaStar className="text-gold mr-2 text-sm" />
            <span className="text-gold font-bold text-xs uppercase tracking-wider">FMCSA ELDT Certified Programs</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Professional <span className="gradient-text">CDL Training</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Launch your trucking career with industry-leading training programs. From CDL certification to business courses, we&apos;ve got you covered.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-gold to-gold-light text-dark shadow-subtle"
                    : "glass border border-gold/20 text-gray-300 hover:border-gold/40 hover:text-gold"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          {[
            { number: "7", label: "Training Programs" },
            { number: "500+", label: "Graduates" },
            { number: "95%", label: "Pass Rate" },
            { number: "100%", label: "Job Support" },
          ].map((stat, index) => (
            <div key={index} className="glass-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-1 font-heading">{stat.number}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Enhanced Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Enhanced Card with Hover Effect */}
              <div className="relative h-full glass-card p-6 rounded-3xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,167,72,0.15)] border border-gold/10 hover:border-gold/30 overflow-hidden">
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                
                {/* Content Wrapper */}
                <div className="relative z-10">
                  {/* Top Section: Badge & Icon */}
                  <div className="flex items-start justify-between mb-5">
                    {/* Icon with Enhanced Gradient */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-dark shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {course.icon}
                    </div>
                    
                    {/* Badge */}
                    {course.badge && (
                      <div className="glass rounded-full px-3 py-1.5 text-xs font-bold text-gold border border-gold/40 shadow-subtle animate-pulse">
                        {course.badge}
                      </div>
                    )}
                  </div>

                  {/* Category Tag */}
                  <div className="inline-block mb-3">
                    <span className="text-xs font-semibold text-gold/70 uppercase tracking-wider">
                      {course.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 font-heading group-hover:text-gold transition-colors duration-300 leading-tight">
                    {course.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-2">
                    {course.description}
                  </p>

                  {/* Duration Badge */}
                  <div className="flex items-center gap-2 mb-4 glass-card px-3 py-2 rounded-lg border border-gold/10 w-fit">
                    <FaClock className="text-gold text-sm" />
                    <span className="text-xs font-semibold text-gray-300">{course.duration}</span>
                  </div>

                  {/* Features with Check Icons */}
                  <ul className="space-y-2.5 mb-5">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 group/item">
                        <div className="mt-0.5">
                          <FaCheck className="text-gold text-xs" />
                        </div>
                        <span className="text-gray-300 text-sm leading-snug group-hover/item:text-white transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Ideal For Section */}
                  <div className="relative mb-5 p-4 rounded-xl bg-gradient-to-r from-gold/10 to-transparent border-l-4 border-gold">
                    <p className="text-xs text-gold font-bold mb-1.5 uppercase tracking-wide">Perfect For:</p>
                    <p className="text-sm text-gray-200 leading-relaxed">{course.idealFor}</p>
                  </div>

                  {/* CTA Button with WhatsApp Link */}
                  <a
                    href="https://wa.me/1234567890?text=Hi%2C%20I'm%20interested%20in%20the%20Class%20A%20CDL%20Training%20course.%20Can%20you%20provide%20more%20details%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3.5 px-6 rounded-xl font-bold text-dark bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold transition-all duration-300 shadow-subtle hover:shadow-[0_0_20px_rgba(212,167,72,0.4)] transform hover:-translate-y-0.5 group/btn"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Message Us on WhatsApp
                      <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </a>
                </div>

                {/* Decorative Corner Element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/5 to-transparent rounded-bl-full opacity-50"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom CTA Section */}
        <div className="mt-20 relative">
          {/* Main CTA Card */}
          <div className="relative glass-card p-10 md:p-12 max-w-5xl mx-auto rounded-3xl border border-gold/20 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/5"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(212,167,72,0.15)_0%,transparent_70%)]"></div>
            
            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-gold-light mb-6 shadow-lg">
                <svg className="w-8 h-8 text-dark" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                </svg>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-white">
                Not Sure Which Course is <span className="gradient-text">Right for You?</span>
              </h2>
              
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Our expert advisors are here to help you choose the perfect training program tailored to your career goals and experience level.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/1234567890?text=Hi%2C%20I%20need%20help%20choosing%20the%20right%20CDL%20course.%20Can%20you%20assist%3F" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-dark bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(212,167,72,0.5)] transform hover:-translate-y-1 group"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Message Us on WhatsApp
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                
                <a 
                  href="tel:+1234567890" 
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-gold border-2 border-gold hover:bg-gold hover:text-dark transition-all duration-300 backdrop-blur-sm group"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us Today
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-10 pt-8 border-t border-gold/20">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center">
                    <FaStar className="text-gold text-2xl mb-2" />
                    <p className="text-sm text-gray-300 font-semibold">FMCSA Certified</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <svg className="w-6 h-6 text-gold mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                    </svg>
                    <p className="text-sm text-gray-300 font-semibold">Licensed & Insured</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <svg className="w-6 h-6 text-gold mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                    </svg>
                    <p className="text-sm text-gray-300 font-semibold">Expert Instructors</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
