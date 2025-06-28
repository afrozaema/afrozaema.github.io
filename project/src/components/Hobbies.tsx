import React from 'react';
import { BookOpen, Tv, Plane, ShoppingBag, Coffee, Music, Camera, Palette, Star, Sparkles } from 'lucide-react';

const Hobbies = () => {
  const hobbies = [
    {
      category: "Reading & Literature",
      items: [
        { name: "Islamic Books", description: "Spiritual growth and knowledge" },
        { name: "Fiction & Stories", description: "Exploring different worlds and perspectives" }
      ],
      icon: BookOpen,
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50"
    },
    {
      category: "Entertainment",
      items: [
        { name: "Bikram Betal", description: "Classic Bengali supernatural series" },
        { name: "Tom & Jerry", description: "Timeless animated comedy" }
      ],
      icon: Tv,
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50"
    },
    {
      category: "Travel & Exploration",
      items: [
        { name: "Cultural Experiences", description: "Learning from diverse communities" },
        { name: "Adventure Seeking", description: "Discovering new places and perspectives" }
      ],
      icon: Plane,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      category: "Fashion & Style",
      items: [
        { name: "Personal Styling", description: "Expressing creativity through fashion" },
        { name: "Trend Research", description: "Staying updated with latest styles" }
      ],
      icon: ShoppingBag,
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50"
    }
  ];

  const personalInterests = [
    { name: "Photography", icon: Camera, description: "Capturing beautiful moments" },
    { name: "Creative Writing", icon: Palette, description: "Expressing thoughts through words" },
    { name: "Music", icon: Music, description: "Finding inspiration in melodies" },
    { name: "Coffee Culture", icon: Coffee, description: "Enjoying peaceful moments" }
  ];

  return (
    <section id="hobbies" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-amber-50/30 to-orange-50/30 overflow-hidden">
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
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 rounded-full text-sm font-medium mb-4 sm:mb-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <Palette className="w-4 h-4 animate-pulse" />
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent font-semibold">Personal Interests</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Hobbies & <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">Passions</span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full shadow-lg"></div>
          <p className="text-lg sm:text-xl text-gray-600 mt-4 sm:mt-6 max-w-3xl mx-auto px-4">
            Life beyond academics - the activities that bring joy, balance, and inspiration to my daily journey
          </p>
        </div>

        {/* Main Hobbies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${hobby.bgColor} rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50`}
            >
              {/* Animated Background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${hobby.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
              
              {/* Floating Particles */}
              <div className="absolute top-2 right-2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500"></div>
              <div className="absolute bottom-2 left-2 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce delay-200 transition-all duration-500"></div>
              
              <div className="relative">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6 sm:mb-8">
                  <div className={`p-3 sm:p-4 bg-gradient-to-r ${hobby.color} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <hobby.icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {hobby.category}
                  </h3>
                </div>

                {/* Items */}
                <div className="space-y-3 sm:space-y-4">
                  {hobby.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r ${hobby.color} rounded-full mt-1 sm:mt-2 flex-shrink-0`}></div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">{item.name}</h4>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Personal Interests Grid */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Other Interests
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">Additional activities that spark my creativity</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {personalInterests.map((interest, index) => (
              <div
                key={index}
                className="group text-center p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="inline-flex p-3 sm:p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-lg mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <interest.icon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">{interest.name}</h4>
                <p className="text-xs sm:text-sm text-gray-600">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center mt-12 sm:mt-16">
          <blockquote className="text-lg sm:text-xl lg:text-2xl font-light italic text-gray-700 max-w-3xl mx-auto px-4">
            "In every hobby lies a lesson, in every passion lies a purpose, and in every moment of joy lies the fuel for tomorrow's dreams."
          </blockquote>
          <p className="text-gray-500 mt-3 sm:mt-4 text-sm sm:text-base">— Personal Philosophy</p>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;