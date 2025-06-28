import React from 'react';
import { GraduationCap, School, Calendar, MapPin, Award, BookOpen, Star, Sparkles } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "Jahangirnagar University",
      period: "2022–2023",
      type: "University Education",
      location: "Dhaka, Bangladesh",
      description: "Pursuing higher education with focus on academic excellence and research",
      icon: GraduationCap,
      gradient: "from-blue-600 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      achievements: ["Academic Excellence", "Research Focus", "IEEE Membership"]
    },
    {
      institution: "Government Sarada Sundori Mohila College",
      period: "HSC Batch 2022",
      type: "Higher Secondary Education",
      location: "Faridpur, Bangladesh",
      description: "Completed higher secondary education with outstanding academic performance",
      icon: School,
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      achievements: ["Outstanding Performance", "Leadership Skills", "Community Involvement"]
    }
  ];

  return (
    <section id="education" className="relative py-24 bg-gradient-to-br from-gray-50 via-blue-50/50 to-purple-50/50 overflow-hidden">
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
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-medium mb-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <GraduationCap className="w-4 h-4 animate-pulse" />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-semibold">Academic Journey</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            My <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">Education</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full shadow-lg"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            Building a strong foundation through quality education and continuous learning
          </p>
        </div>

        {/* Education Timeline - Simplified Layout */}
        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="relative"
            >
              {/* Content Card */}
              <div className={`group relative bg-gradient-to-br ${edu.bgGradient} rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50`}>
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                
                {/* Floating Particles */}
                <div className="absolute top-4 right-4 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce delay-200 transition-all duration-500"></div>
                
                <div className="relative">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                    <div className={`flex-shrink-0 p-4 bg-gradient-to-br ${edu.gradient} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <edu.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        {edu.institution}
                      </h3>
                      <span className={`inline-block px-4 py-2 bg-gradient-to-r ${edu.gradient} text-white text-sm font-semibold rounded-full shadow-md mb-4`}>
                        {edu.type}
                      </span>
                      
                      {/* Details */}
                      <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-blue-500" />
                          <span className="font-medium">{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-purple-500" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {edu.description}
                      </p>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-800 flex items-center gap-2 text-lg">
                      <Award className="w-5 h-5 text-amber-500" />
                      Key Highlights
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {edu.achievements.map((achievement, achIndex) => (
                        <span
                          key={achIndex}
                          className="px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-700 font-medium rounded-full border border-gray-200 hover:bg-white/90 hover:shadow-md transition-all duration-300"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-200">
            <BookOpen className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-gray-700 font-medium">Continuing the learning journey...</span>
            <Sparkles className="w-4 h-4 text-purple-500 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;