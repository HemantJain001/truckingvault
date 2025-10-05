"use client";

import Link from "next/link";
import { FaShippingFast, FaChartLine } from "react-icons/fa";

const courses = [
  {
    icon: <FaShippingFast className="text-5xl text-primary" />,
    title: "Freight Dispatching",
    description: "Learn the ins and outs of freight dispatching, from finding loads to negotiating rates and managing drivers.",
    points: [
      "Load board mastery",
      "Rate negotiation strategies",
      "Dispatch software training",
      "Customer relationship management",
      "Industry best practices",
    ],
  },
  {
    icon: <FaChartLine className="text-5xl text-primary" />,
    title: "Trucking Business Setup",
    description: "Start your own trucking company with expert guidance on business formation, compliance, and growth strategies.",
    points: [
      "Business entity formation",
      "DOT and MC authority",
      "Insurance and permits",
      "Accounting and bookkeeping",
      "Scaling your fleet",
    ],
  },
];

export default function Dispatch() {
  return (
    <section id="dispatch" className="section-padding relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/10 rounded-full blur-[120px]"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-gold font-semibold text-xs uppercase tracking-wider mb-3 block">Business Solutions</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-heading">
            Dispatch & <span className="gradient-text">Business Courses</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Take control of your career with our business and dispatch training programs
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="card p-6 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon */}
              <div className="mb-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shadow-subtle transition-all duration-300">
                  <div className="text-dark text-4xl">
                    {course.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold mb-3 font-heading group-hover:text-gold transition-colors duration-300">
                {course.title}
              </h3>
              <p className="text-gray-400 mb-5 leading-relaxed text-sm">
                {course.description}
              </p>

              {/* Points */}
              <ul className="space-y-3 mb-6">
                {course.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-4 group/item">
                    <span className="text-gold text-2xl mt-1 group-hover/item:scale-125 transition-transform duration-300">•</span>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">{point}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="#enroll"
                className="inline-flex items-center text-gold hover:text-dark hover:bg-gold font-bold py-3 px-8 rounded-xl transition-all duration-300 border border-gold/30 hover:border-gold"
              >
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
