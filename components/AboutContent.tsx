"use client";

import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaAward, FaTruck, FaUsers } from "react-icons/fa";

const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & Lead Instructor",
    credentials: "FMCSA-Certified CDL Instructor",
    experience: "15+ years in trucking industry",
    image: "/team-founder.jpg",
    description: "With over 15 years of experience, John founded The Trucking Vault to provide the highest quality CDL training.",
  },
  {
    name: "Jane Smith",
    role: "Senior CDL Instructor",
    credentials: "Class A & B Certified",
    experience: "10+ years teaching experience",
    image: "/team-instructor-1.jpg",
    description: "Jane specializes in behind-the-wheel training and has helped hundreds of students pass their CDL tests.",
  },
  {
    name: "Mike Johnson",
    role: "Dispatch Training Specialist",
    credentials: "Former Fleet Manager",
    experience: "12+ years in logistics",
    image: "/team-instructor-2.jpg",
    description: "Mike brings real-world dispatch and business management expertise to our training programs.",
  },
];

const stats = [
  { icon: <FaUsers className="text-4xl" />, number: "500+", label: "Graduates" },
  { icon: <FaAward className="text-4xl" />, number: "95%", label: "Pass Rate" },
  { icon: <FaTruck className="text-4xl" />, number: "15+", label: "Years Experience" },
  { icon: <FaCheckCircle className="text-4xl" />, number: "100%", label: "Job Support" },
];

const whyChooseUs = [
  "FMCSA ELDT Compliant Training Programs",
  "Experienced and Certified Instructors",
  "Flexible Class Schedules (Weekday & Weekend)",
  "Modern Training Vehicles & Equipment",
  "Job Placement Assistance After Graduation",
  "Personalized One-on-One Coaching Available",
  "Affordable Payment Plans & Financing Options",
  "Comprehensive Theory & Behind-the-Wheel Training",
];

export default function AboutContent() {
  const whatsappNumber = "1234567890"; // Replace with actual WhatsApp number
  const whatsappMessage = encodeURIComponent("Hi! I'd like to know more about The Trucking Vault's CDL training programs.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-dark-DEFAULT via-dark-light to-dark-DEFAULT"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(212,167,72,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(212,167,72,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gold/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-gold/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center glass rounded-full px-6 py-2 mb-6 border border-gold/30">
            <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
            <span className="text-gold font-semibold text-xs uppercase tracking-wider">About Us</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-heading">
            Your Partner in <span className="gradient-text">Trucking Success</span>
          </h1>
          
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            Building careers, one driver at a time. Learn about our mission, meet our team, and discover why hundreds of students trust us with their CDL training.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding relative">
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="glass-card p-6 text-center group hover:border-gold/30 transition-all duration-300">
                <div className="text-gold mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1 font-heading">{stat.number}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story/Mission Section */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,167,72,0.05)_0%,transparent_70%)]"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-gold font-semibold text-xs uppercase tracking-wider mb-3 block">Our Story</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-heading">
                The <span className="gradient-text">Trucking Vault</span> Mission
              </h2>
            </div>

            <div className="glass-card p-8 mb-8">
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Founded over 15 years ago, The Trucking Vault was born from a simple vision: to provide aspiring truck drivers with the highest quality training and support they need to succeed in the trucking industry.
                </p>
                <p>
                  We understand that starting a new career can be challenging. That&apos;s why we&apos;ve built a training program that goes beyond just teaching you how to pass the CDL test. We prepare you for a rewarding, long-term career in trucking.
                </p>
                <p>
                  Our FMCSA ELDT-compliant programs combine comprehensive theory training with hands-on, behind-the-wheel practice. Every student receives personalized attention from our experienced instructors who have been where you are and know what it takes to succeed.
                </p>
                <p className="text-gold font-semibold italic">
                  &ldquo;When you join The Trucking Vault, you become family. Your success is our success.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding relative">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-10">
            <span className="text-gold font-semibold text-xs uppercase tracking-wider mb-3 block">Why Choose Us</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-heading">
              What Makes Us <span className="gradient-text">Different</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-start gap-3 glass-card p-4 group hover:border-gold/30 transition-all duration-300">
                  <FaCheckCircle className="text-gold text-lg mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-300 text-sm">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,167,72,0.05)_0%,transparent_70%)]"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-10">
            <span className="text-gold font-semibold text-xs uppercase tracking-wider mb-3 block">Our Team</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-heading">
              Meet Your <span className="gradient-text">Instructors</span>
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto">
              Learn from experienced professionals who are passionate about your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="card p-6 text-center group">
                {/* Photo Placeholder */}
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shadow-subtle overflow-hidden">
                  <svg className="w-16 h-16 text-dark" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 font-heading group-hover:text-gold transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-gold font-semibold text-sm mb-1">{member.role}</p>
                <p className="text-gray-400 text-xs mb-3">{member.credentials}</p>
                
                <div className="glass-card p-3 mb-3">
                  <p className="text-xs text-gold font-semibold mb-1">{member.experience}</p>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info & WhatsApp Section */}
      <section className="section-padding relative">
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-heading">
                Have Questions? <span className="gradient-text">Let&apos;s Talk!</span>
              </h2>
              <p className="text-gray-400 mb-8">
                Our team is here to help you every step of the way. Reach out for course information, enrollment details, or any questions about your trucking career.
              </p>

              {/* Contact Methods */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="glass-card p-4 hover:border-gold/30 transition-all duration-300 group">
                  <FaWhatsapp className="text-3xl text-gold mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-white font-semibold text-sm">WhatsApp</p>
                  <p className="text-gray-400 text-xs">Quick Response</p>
                </a>

                <a href="tel:+1234567890" className="glass-card p-4 hover:border-gold/30 transition-all duration-300 group">
                  <FaPhone className="text-3xl text-gold mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-white font-semibold text-sm">Call Us</p>
                  <p className="text-gray-400 text-xs">(123) 456-7890</p>
                </a>

                <a href="mailto:info@thetruckingvault.com" className="glass-card p-4 hover:border-gold/30 transition-all duration-300 group">
                  <FaEnvelope className="text-3xl text-gold mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-white font-semibold text-sm">Email Us</p>
                  <p className="text-gray-400 text-xs">info@thetruckingvault.com</p>
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  <FaWhatsapp className="mr-2 text-xl" />
                  Message Us on WhatsApp
                </a>
                <Link href="/courses" className="btn-secondary">
                  View Our Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
