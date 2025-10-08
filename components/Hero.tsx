"use client";

import Link from "next/link";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Hero() {
  useScrollAnimation();

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-32 pb-12">
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
        <div className="inline-flex items-center glass rounded-full px-6 py-3 mb-8 animate-fadeInUp border border-gold/30">
          <span className="w-2 h-2 bg-gold rounded-full mr-3 animate-pulse"></span>
          <span className="text-gold font-semibold text-sm">FMCSA-Certified Training</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadeInUp font-heading" style={{ animationDelay: "0.1s" }}>
          Launch Your Trucking Career with<br />
          <span className="gradient-text">The Trucking Vault</span>
        </h1>

        {/* Tagline/Subheading */}
        <p className="text-base md:text-lg lg:text-xl mb-3 text-gold max-w-3xl mx-auto animate-fadeInUp leading-relaxed font-semibold" style={{ animationDelay: "0.15s" }}>
          FMCSA-Certified CDL Training &amp; Business School
        </p>
        
        <p className="text-base md:text-lg mb-8 text-gray-300 max-w-3xl mx-auto animate-fadeInUp leading-relaxed" style={{ animationDelay: "0.2s" }}>
          From CDL programs to dispatching &amp; business courses — we&apos;ll help you master the road, launch your career, and unlock high-paying opportunities in trucking.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp mb-10" style={{ animationDelay: "0.3s" }}>
          <Link href="/courses" className="btn-primary px-8 py-3">
            Enroll Now
          </Link>
          <a 
            href="https://wa.me/1234567890?text=Hi!%20I'd%20like%20to%20know%20more%20about%20The%20Trucking%20Vault's%20CDL%20training%20programs."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-8 py-3 inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Message Us on WhatsApp
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto animate-on-scroll">
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fadeInUp" style={{ animationDelay: "0.5s" }}>
        <div className="w-6 h-10 border-2 border-gold/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gold/60 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
