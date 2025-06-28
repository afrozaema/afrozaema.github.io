import React from 'react';
import { Mail, MapPin, MessageCircle, Clock, Star, Sparkles } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "emaafroza0@gmail.com",
      description: "Best way to reach me",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Faridpur, Bangladesh",
      description: "Available for local meetups",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      description: "Usually much faster",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Animated Dots */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-32 right-32 w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-300 opacity-70"></div>
        <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-amber-400 rounded-full animate-bounce delay-700 opacity-50"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-bounce delay-1000 opacity-60"></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-pink-400 rounded-full animate-bounce delay-500 opacity-70"></div>
        <div className="absolute bottom-32 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-200 opacity-60"></div>
        
        {/* Floating Stars */}
        <Star className="absolute top-1/4 right-1/5 w-4 h-4 text-amber-400 animate-pulse opacity-60" />
        <Star className="absolute bottom-1/4 left-1/5 w-3 h-3 text-blue-400 animate-pulse delay-500 opacity-50" />
        
        {/* Sparkles */}
        <Sparkles className="absolute top-1/5 left-1/4 w-5 h-5 text-emerald-400 animate-pulse delay-300 opacity-40" />
        <Sparkles className="absolute bottom-1/5 right-1/4 w-4 h-4 text-pink-400 animate-pulse delay-700 opacity-50" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium mb-4 sm:mb-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <MessageCircle className="w-4 h-4 animate-pulse" />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Let's <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">Connect</span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full shadow-lg"></div>
          <p className="text-lg sm:text-xl text-gray-600 mt-4 sm:mt-6 max-w-3xl mx-auto px-4">
            "Let's grow, learn, and build together. I'm always excited to connect with like-minded individuals and explore new opportunities."
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information with Icons */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Contact Information</h3>
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300">
                  <div className={`p-2 sm:p-3 bg-gradient-to-r ${info.color} rounded-2xl shadow-lg flex-shrink-0`}>
                    <info.icon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 text-base sm:text-lg mb-1">{info.label}</p>
                    <p className="text-gray-700 font-medium mb-1 text-sm sm:text-base">{info.value}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Response Promise */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-6 sm:p-8 border border-blue-100">
            <div className="text-center">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Clock className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">Quick Response Guarantee</h4>
              <p className="text-gray-600 text-sm sm:text-base">
                I typically respond to messages within 24 hours. For urgent matters, feel free to mention it in your message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;