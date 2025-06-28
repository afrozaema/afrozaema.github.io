import React from 'react';
import { Brain, Users, BookOpen, Lightbulb, Globe, Target, Rocket, Heart, Star, Sparkles } from 'lucide-react';

const FutureGoals = () => {
  const goals = [
    {
      title: "Master AI & Machine Learning",
      description: "Deep dive into advanced algorithms, neural networks, and AI applications for social impact and innovation",
      icon: Brain,
      color: "from-blue-500 to-indigo-600",
      timeline: "2024-2026",
      priority: "High"
    },
    {
      title: "Empower Women in STEM",
      description: "Create mentorship programs and initiatives to inspire and support women in technology, especially in Faridpur",
      icon: Users,
      color: "from-purple-500 to-pink-600",
      timeline: "Ongoing",
      priority: "High"
    },
    {
      title: "Publish Meaningful Literature",
      description: "Write and publish Islamic literature and fiction books that inspire and educate readers worldwide",
      icon: BookOpen,
      color: "from-emerald-500 to-teal-600",
      timeline: "2025-2027",
      priority: "Medium"
    },
    {
      title: "Build Tech for Social Good",
      description: "Develop innovative technological solutions that address real-world problems and benefit communities",
      icon: Lightbulb,
      color: "from-amber-500 to-orange-600",
      timeline: "2024-2028",
      priority: "High"
    },
    {
      title: "Global Cultural Exploration",
      description: "Travel internationally to understand diverse cultures, languages, and perspectives for personal growth",
      icon: Globe,
      color: "from-cyan-500 to-blue-600",
      timeline: "2025-2030",
      priority: "Medium"
    },
    {
      title: "Lead Data Science Projects",
      description: "Spearhead impactful data science initiatives that drive decision-making and create positive change",
      icon: Target,
      color: "from-rose-500 to-red-600",
      timeline: "2026-2030",
      priority: "High"
    }
  ];

  return (
    <section id="goals" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">
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
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-medium mb-4 sm:mb-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <Rocket className="w-4 h-4 animate-pulse" />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-semibold">Future Aspirations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            My <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">Vision</span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full shadow-lg"></div>
          <p className="text-lg sm:text-xl text-gray-600 mt-4 sm:mt-6 max-w-3xl mx-auto px-4">
            Ambitious dreams that drive my daily actions and shape my long-term vision for creating meaningful impact
          </p>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
            >
              {/* Priority Badge */}
              <div className={`absolute top-3 sm:top-4 right-3 sm:right-4 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${
                goal.priority === 'High' 
                  ? 'bg-red-100 text-red-700' 
                  : 'bg-yellow-100 text-yellow-700'
              }`}>
                {goal.priority} Priority
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${goal.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
              
              {/* Floating Particles */}
              <div className="absolute top-2 right-2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500"></div>
              <div className="absolute bottom-2 left-2 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce delay-200 transition-all duration-500"></div>
              
              <div className="relative">
                {/* Icon */}
                <div className={`inline-flex p-3 sm:p-4 bg-gradient-to-br ${goal.color} rounded-2xl shadow-lg mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <goal.icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {goal.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                  {goal.description}
                </p>

                {/* Timeline */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <span className="text-sm text-gray-500 font-medium">Timeline</span>
                  <span className={`px-2 sm:px-3 py-1 bg-gradient-to-r ${goal.color} text-white text-xs sm:text-sm font-semibold rounded-full`}>
                    {goal.timeline}
                  </span>
                </div>
                
                {/* Progress Indicator */}
                <div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className={`h-2 bg-gradient-to-r ${goal.color} rounded-full transition-all duration-1000 group-hover:w-full`} style={{width: '15%'}}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 font-medium">Planning Phase</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
            <Heart className="w-4 sm:w-5 h-4 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-medium text-sm sm:text-base">Join me on this journey</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureGoals;