import React from 'react';
import { BookOpen, GraduationCap, Users, Globe, Sparkles, Heart, Target, Award, Star, Zap, Eye } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: BookOpen, label: "Passionate Reader", description: "Islamic & Fiction Literature", color: "from-emerald-500 to-teal-500" },
    { icon: GraduationCap, label: "Academic Excellence", description: "Jahangirnagar University", color: "from-blue-500 to-indigo-500" },
    { icon: Users, label: "Community Leader", description: "IEEE Active Member", color: "from-purple-500 to-pink-500" },
    { icon: Globe, label: "Global Vision", description: "Cultural Explorer", color: "from-amber-500 to-orange-500" },
    { icon: Target, label: "Goal-Oriented", description: "Data Science Aspirant", color: "from-red-500 to-rose-500" },
    { icon: Heart, label: "Value-Driven", description: "Islamic Principles", color: "from-cyan-500 to-blue-500" }
  ];

  const stats = [
    { number: "2022", label: "University Journey", icon: GraduationCap },
    { number: "IEEE", label: "Member", icon: Award },
    { number: "∞", label: "Learning", icon: BookOpen },
    { number: "100%", label: "Dedication", icon: Target }
  ];

  const scrollToEducation = () => {
    const element = document.querySelector('#education');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative py-24 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Animated Dots */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-32 right-32 w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-300 opacity-70"></div>
        <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-amber-400 rounded-full animate-bounce delay-700 opacity-50"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-bounce delay-1000 opacity-60"></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-pink-400 rounded-full animate-bounce delay-500 opacity-70"></div>
        <div className="absolute bottom-32 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-200 opacity-60"></div>
        <div className="absolute top-1/2 left-20 w-2 h-2 bg-rose-400 rounded-full animate-bounce delay-800 opacity-50"></div>
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-indigo-400 rounded-full animate-bounce delay-600 opacity-70"></div>
        
        {/* Floating Stars */}
        <Star className="absolute top-1/4 right-1/5 w-4 h-4 text-amber-400 animate-pulse opacity-60" />
        <Star className="absolute bottom-1/4 left-1/5 w-3 h-3 text-blue-400 animate-pulse delay-500 opacity-50" />
        <Star className="absolute top-1/3 left-1/2 w-2 h-2 text-purple-400 animate-pulse delay-1000 opacity-70" />
        
        {/* Sparkles */}
        <Sparkles className="absolute top-1/5 left-1/4 w-5 h-5 text-emerald-400 animate-pulse delay-300 opacity-40" />
        <Sparkles className="absolute bottom-1/5 right-1/4 w-4 h-4 text-pink-400 animate-pulse delay-700 opacity-50" />
        
        {/* Lightning Bolts */}
        <Zap className="absolute top-2/3 left-1/6 w-4 h-4 text-yellow-400 animate-pulse delay-400 opacity-60" />
        <Zap className="absolute top-1/6 right-1/6 w-3 h-3 text-cyan-400 animate-pulse delay-900 opacity-50" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-amber-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium mb-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">Get to know me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">Me</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full shadow-lg"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content with Colorful Text */}
          <div className="space-y-8">
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-gray-700">
                Hello! I'm <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Afroza Akter Ema</span>, a passionate student at 
                <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Jahangirnagar University</span> (2022–23) with an insatiable 
                curiosity for learning and a deep love for reading that spans from <span className="font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Islamic literature</span> to captivating <span className="font-semibold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">fiction</span>.
              </p>
              
              <p className="text-gray-700">
                My journey in <span className="font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">competitive programming</span> has taught me the art of problem-solving, while my academic pursuits 
                have ignited a burning passion for <span className="font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">data science</span>. I believe in the power of <span className="font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">technology</span> to create meaningful 
                change in our world.
              </p>

              <p className="text-gray-700">
                Guided by <span className="font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Islamic values</span> and driven by <span className="font-semibold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">dreams</span>, I'm committed to empowering <span className="font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">women in STEM</span>, particularly 
                in my hometown of <span className="font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Faridpur</span>. My vision extends beyond personal success to building bridges between 
                <span className="font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> technology</span> and <span className="font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">social impact</span>.
              </p>
            </div>

            {/* CTA Button with Functionality */}
            <div className="flex justify-center">
              <button 
                onClick={scrollToEducation}
                className="group relative px-8 py-4 border-2 border-transparent bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative z-10 flex items-center justify-center gap-2">
                  <Eye className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Explore My Journey
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Enhanced Highlights Grid */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group relative p-6 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 hover:border-transparent overflow-hidden"
              >
                {/* Animated Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                
                {/* Floating Particles */}
                <div className="absolute top-2 right-2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500"></div>
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce delay-200 transition-all duration-500"></div>
                
                <div className="relative text-center space-y-4">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${item.color} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{item.label}</h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fixed Stats Section with Proper Sizing */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="group text-center relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="inline-flex p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300 leading-tight">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;