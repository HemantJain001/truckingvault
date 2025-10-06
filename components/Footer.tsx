"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Contact", href: "#contact" },
  ];

  const programs = [
    { name: "Class A CDL", href: "/courses" },
    { name: "Class B CDL", href: "/courses" },
    { name: "CDL Endorsements", href: "/courses" },
    { name: "CDL Upgrades", href: "/courses" },
    { name: "Freight Dispatching", href: "/courses" },
    { name: "Trucking Business", href: "/courses" },
  ];

  const whatsappNumber = "1234567890";
  const whatsappMessage = encodeURIComponent("Hi! I'd like to know more about The Trucking Vault's CDL training programs.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const socialLinks = [
    { icon: <FaWhatsapp />, href: whatsappLink, label: "WhatsApp", external: true },
    { icon: <FaFacebookF />, href: "#", label: "Facebook", external: true },
    { icon: <FaInstagram />, href: "#", label: "Instagram", external: true },
    { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn", external: true },
  ];

  return (
    <footer id="contact" className="relative mt-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-light to-dark-DEFAULT"></div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold gradient-text mb-4 font-heading">The Trucking Vault</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              FMCSA-certified CDL training and trucking business school. Your partner in building a successful trucking career.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="glass w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-gold hover:text-dark text-gold border border-gold/20 hover:shadow-subtle"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h4 className="text-xl font-bold mb-6 text-white font-heading">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-gold mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-xl font-bold mb-6 text-white font-heading">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <Link
                    href={program.href}
                    className="text-gray-400 hover:text-gold transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-gold mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h4 className="text-xl font-bold mb-6 text-white font-heading">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold group-hover:text-dark transition-all duration-300">
                  <FaWhatsapp className="text-gold group-hover:text-dark" />
                </div>
                <div>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gold transition-colors">
                    Message on WhatsApp
                  </a>
                  <p className="text-sm text-gray-500">Quick Response</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold group-hover:text-dark transition-all duration-300">
                  <FaPhone className="text-gold group-hover:text-dark" />
                </div>
                <div>
                  <a href="tel:+15551234567" className="text-gray-300 hover:text-gold transition-colors">(555) 123-4567</a>
                  <p className="text-sm text-gray-500">Mon-Fri 8am-6pm</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold group-hover:text-dark transition-all duration-300">
                  <FaEnvelope className="text-gold group-hover:text-dark" />
                </div>
                <div>
                  <a href="mailto:info@truckingvault.com" className="text-gray-300 hover:text-gold transition-colors">
                    info@truckingvault.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold group-hover:text-dark transition-all duration-300">
                  <FaMapMarkerAlt className="text-gold group-hover:text-dark" />
                </div>
                <div>
                  <p className="text-gray-300">123 Trucking Lane</p>
                  <p className="text-gray-300">Your City, ST 12345</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold to-gold-light opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,167,72,0.2)_0%,transparent_70%)]"></div>
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center relative z-10">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-heading gradient-text">Ready to Start Your Trucking Career?</h3>
          <p className="text-lg md:text-xl mb-10 text-gray-400 max-w-2xl mx-auto">Join hundreds of successful graduates and transform your future today.</p>
          <Link href="#enroll" className="btn-primary text-lg px-12 py-5 inline-flex items-center">
            Enroll Now
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="glass-card rounded-none border-t border-gold/10 py-8">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
            <p>&copy; {currentYear} The Trucking Vault. All rights reserved.</p>
            <div className="flex gap-8">
              <Link href="#" className="hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-gold transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-gold transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
