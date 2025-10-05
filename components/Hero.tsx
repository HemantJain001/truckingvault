"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-DEFAULT via-dark-light to-dark-DEFAULT"></div>
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,167,72,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(212,167,72,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        {/* Glow Effects */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gold/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-gold/10 rounded-full blur-[120px]"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center glass rounded-full px-6 py-3 mb-8 animate-fade-in-up border border-gold/30">
          <span className="w-2 h-2 bg-gold rounded-full mr-3 animate-pulse"></span>
          <span className="text-gold font-semibold text-sm">FMCSA-Certified Training</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up font-heading" style={{ animationDelay: "0.1s" }}>
          Get Your CDL License with<br />
          <span className="gradient-text">Expert-Led Training</span>
        </h1>

        {/* Subheading */}
        <p className="text-base md:text-lg lg:text-xl mb-8 text-gray-300 max-w-3xl mx-auto animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
          Master the road, launch your career, and unlock high-paying opportunities with professional CDL training.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up mb-10" style={{ animationDelay: "0.3s" }}>
          <Link href="#enroll" className="btn-primary px-8 py-3">
            Enroll Now
          </Link>
          <Link href="#programs" className="btn-secondary px-8 py-3">
            View Programs
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          {[
            { number: "500+", label: "Graduates" },
            { number: "95%", label: "Pass Rate" },
            { number: "15+", label: "Years Experience" },
            { number: "100%", label: "Job Support" },
          ].map((stat, index) => (
            <div key={index} className="glass-card p-4">
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-1 font-heading">{stat.number}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gold/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gold/60 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
