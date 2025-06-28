import React from 'react';
import { Heart, ArrowUp, Mail, Github, Linkedin, Facebook, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Get current year automatically
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Goals', href: '#goals' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/afroza.ema.2024", name: "Facebook" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Github, href: "#", name: "GitHub" },
    { icon: Mail, href: "mailto:emaafroza0@gmail.com", name: "Email" }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "emaafroza0@gmail.com",
      color: "from-blue-400 to-purple-400"
    },
    {
      icon: MapPin,
      label: "Location", 
      value: "Faridpur, Bangladesh",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      color: "from-emerald-400 to-teal-400"
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Background Pattern - Fixed SVG syntax */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Afroza Akter Ema
              </h3>
              <p className="text-blue-200 text-lg mb-4 font-medium">
                Student | IEEE Member | Future Data Scientist
              </p>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Driven by curiosity, grounded in values, and fueled by dreams. 
                Building bridges between technology and social impact.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  title={social.name}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-blue-200">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-200 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info with Icons */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-purple-200">Get in Touch</h4>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`p-2 bg-gradient-to-r ${info.color} rounded-lg shadow-lg flex-shrink-0`}>
                    <info.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Crafted With Love */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-gray-300">Crafted with</span>
            <Heart className="w-5 h-5 text-red-400 animate-pulse" />
            <span className="text-gray-300">by</span>
            <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Afroza
            </span>
          </div>
        </div>

        {/* Bottom Section - Centered Copyright Only */}
        <div className="pt-8 border-t border-gray-700/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left flex-1">
              <p className="text-sm text-gray-300 font-medium text-center">
                © {currentYear} <span className="text-blue-200">Afroza Akter Ema</span>. All rights reserved.
              </p>
            </div>
            
            {/* Back to Top - Hidden only on small mobile (below sm), visible on tablet and up */}
            <button
              onClick={scrollToTop}
              className="hidden sm:flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 border border-white/20 group"
            >
              <ArrowUp className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;