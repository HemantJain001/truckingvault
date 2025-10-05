"use client";

export default function Founder() {
  return (
    <section id="about" className="section-padding relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,167,72,0.05)_0%,transparent_70%)]"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Founder Image */}
          <div className="w-full lg:w-1/2 animate-fade-in-up">
            <div className="relative h-80 lg:h-96 rounded-3xl overflow-hidden glass-card group">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-28 h-28 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shadow-subtle">
                    <svg className="w-14 h-14 text-dark" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <span className="text-gray-400">Founder Photo</span>
                </div>
              </div>
              {/* Decorative Border */}
              <div className="absolute inset-0 border-2 border-gold/20 rounded-3xl m-4"></div>
            </div>
          </div>

          {/* Founder Message */}
          <div className="w-full lg:w-1/2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="mb-6">
              <span className="text-gold font-semibold text-xs uppercase tracking-wider mb-3 block">Our Story</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-heading">
                Your Success is <span className="gradient-text">Our Mission</span>
              </h2>
            </div>

            <div className="space-y-4 text-gray-400 text-base leading-relaxed">
              <div className="glass-card p-4 border-l-4 border-gold">
                <p className="italic text-lg text-gold font-semibold">
                  "When you join The Trucking Vault, you become family..."
                </p>
              </div>
              
              <p>
                With over 15 years of experience in the trucking industry, I founded The Trucking Vault 
                to provide aspiring truck drivers with the highest quality training and support.
              </p>

              <p>
                I've been where you are—starting from scratch, learning the ropes, and building a 
                successful career in trucking. That's why I'm committed to giving you the tools, 
                knowledge, and confidence you need to thrive in this industry.
              </p>

              <p>
                At The Trucking Vault, we don't just train you for a license—we prepare you for a 
                rewarding career. Our personalized approach ensures that every student gets the 
                attention and guidance they deserve.
              </p>
            </div>

            <div className="mt-8">
              <div className="glass-card p-5 border-l-4 border-gold">
                <p className="text-xl font-bold text-white mb-1">John Doe</p>
                <p className="text-gold font-semibold mb-1">Founder & Lead Instructor</p>
                <p className="text-gray-400 text-sm">FMCSA-Certified CDL Instructor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
