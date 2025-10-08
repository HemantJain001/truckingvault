"use client";

import { useState } from 'react';
import Image from 'next/image';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTruck,
  FaUser,
  FaComment,
  FaPaperPlane
} from 'react-icons/fa';

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create WhatsApp message
    const message = `Hi! I'm interested in CDL training.
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}
Message: ${formData.message}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/1234567890?text=${encodedMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your CDL journey? Get in touch with our team for personalized guidance and support.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="glass rounded-2xl p-8 text-center animate-fadeInUp" style={{animationDelay: '0.1s'}}>
            <div className="w-16 h-16 bg-gradient-to-r from-gold to-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
              <FaPhone className="text-2xl text-black" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
            <p className="text-gray-300 mb-4">Speak with our admissions team</p>
            <a href="tel:+1234567890" className="text-gold hover:text-gold-light transition-colors">
              (123) 456-7890
            </a>
          </div>

          <div className="glass rounded-2xl p-8 text-center animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            <div className="w-16 h-16 bg-gradient-to-r from-gold to-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
              <FaEnvelope className="text-2xl text-black" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
            <p className="text-gray-300 mb-4">Get detailed information</p>
            <a href="mailto:info@truckingvault.com" className="text-gold hover:text-gold-light transition-colors">
              info@truckingvault.com
            </a>
          </div>

          <div className="glass rounded-2xl p-8 text-center animate-fadeInUp" style={{animationDelay: '0.3s'}}>
            <div className="w-16 h-16 bg-gradient-to-r from-gold to-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
              <FaWhatsapp className="text-2xl text-black" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
            <p className="text-gray-300 mb-4">Quick responses</p>
            <a href="https://wa.me/1234567890" className="text-gold hover:text-gold-light transition-colors">
              Chat with us
            </a>
          </div>
        </div>

        {/* Why Choose Us Section with Images */}
        <div className="mb-16 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">
            Why Choose The Trucking Vault?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass rounded-2xl overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=500&h=300&fit=crop"
                  alt="Professional CDL Instructors"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">Expert Instructors</h3>
                <p className="text-gray-300">Learn from certified professionals with decades of industry experience.</p>
              </div>
            </div>

            <div className="glass rounded-2xl overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1504681869696-d977211a5f4c?w=500&h=300&fit=crop"
                  alt="Modern Training Fleet"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">Modern Fleet</h3>
                <p className="text-gray-300">Train with the latest trucks and equipment used in the industry.</p>
              </div>
            </div>

            <div className="glass rounded-2xl overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop"
                  alt="Job Placement Support"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">Job Placement</h3>
                <p className="text-gray-300">Get connected with top employers through our extensive network.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="animate-fadeInUp" style={{animationDelay: '0.5s'}}>
            <div className="glass rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <FaTruck className="text-gold mr-3" />
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      <FaUser className="inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/30 border border-gold/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      <FaEnvelope className="inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/30 border border-gold/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      <FaPhone className="inline mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/30 border border-gold/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      <FaComment className="inline mr-2" />
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/30 border border-gold/30 rounded-lg text-white focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="Class A CDL Training">Class A CDL Training</option>
                      <option value="Class B CDL Training">Class B CDL Training</option>
                      <option value="Passenger Endorsement">Passenger Endorsement</option>
                      <option value="School Bus Endorsement">School Bus Endorsement</option>
                      <option value="Hazmat Endorsement">Hazmat Endorsement</option>
                      <option value="Refresher Course">Refresher Course</option>
                      <option value="Job Placement">Job Placement</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/30 border border-gold/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Tell us about your CDL training goals and any questions you have&#39;..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center"
                >
                  <FaPaperPlane className="mr-2" />
                  Send Message via WhatsApp
                </button>
              </form>
            </div>
          </div>

          {/* Location & Hours */}
          <div className="space-y-8">
            {/* Location */}
            <div className="glass rounded-2xl p-8 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <FaMapMarkerAlt className="text-gold mr-3" />
                Visit Our Training Facility
              </h3>
              
              <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1558618047-3c0c3c5e3c1c?w=600&h=400&fit=crop"
                  alt="Professional CDL Training Facility"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-bold">State-of-the-Art Facility</h4>
                  <p className="text-sm opacity-90">Modern training equipment & vehicles</p>
                </div>
              </div>
              
              <div className="space-y-3 text-gray-300">
                <p className="flex items-start">
                  <FaMapMarkerAlt className="text-gold mr-3 mt-1 flex-shrink-0" />
                  <span>
                    123 Training Center Drive<br />
                    Truck City, TC 12345<br />
                    United States
                  </span>
                </p>
                <p className="text-sm">
                  Our state-of-the-art facility features modern classrooms, 
                  extensive driving ranges, and a fleet of well-maintained training vehicles.
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="glass rounded-2xl p-8 animate-fadeInUp" style={{animationDelay: '0.7s'}}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <FaClock className="text-gold mr-3" />
                Business Hours
              </h3>
              
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between py-2 border-b border-gold/20">
                  <span>Monday - Friday</span>
                  <span className="text-gold">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gold/20">
                  <span>Saturday</span>
                  <span className="text-gold">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gold/20">
                  <span>Sunday</span>
                  <span className="text-gray-500">Closed</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gold/10 rounded-lg">
                <p className="text-sm text-gray-300">
                  <strong className="text-gold">Note:</strong> Evening and weekend classes 
                  available by appointment. Contact us to discuss flexible scheduling options.
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="glass rounded-2xl p-8 animate-fadeInUp" style={{animationDelay: '0.8s'}}>
              <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <FaFacebook className="text-xl text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                  <FaInstagram className="text-xl text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors">
                  <FaLinkedin className="text-xl text-white" />
                </a>
                <a href="https://wa.me/1234567890" className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                  <FaWhatsapp className="text-xl text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 animate-fadeInUp" style={{animationDelay: '0.9s'}}>
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass rounded-2xl p-6">
              <h4 className="text-xl font-bold text-white mb-3">How long does CDL training take?</h4>
              <p className="text-gray-300">
                Our comprehensive CDL training programs typically take 3-8 weeks depending on the 
                license type and your schedule preference.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-6">
              <h4 className="text-xl font-bold text-white mb-3">Do you offer financing options?</h4>
              <p className="text-gray-300">
                Yes! We offer flexible payment plans and work with various financing partners 
                to make CDL training affordable for everyone.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-6">
              <h4 className="text-xl font-bold text-white mb-3">What&#39;s included in the training?</h4>
              <p className="text-gray-300">
                All training includes classroom instruction, hands-on vehicle operation, 
                test preparation, and job placement assistance.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-6">
              <h4 className="text-xl font-bold text-white mb-3">Do you help with job placement?</h4>
              <p className="text-gray-300">
                Absolutely! We have partnerships with major trucking companies and provide 
                ongoing career support to all our graduates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}