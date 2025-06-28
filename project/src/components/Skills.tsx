import React from 'react';
import { BarChart3, Code, PenTool, Users, Brain, Database, Globe, Zap, Star, Sparkles } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      skills: [
        {
          name: "Data Science",
          level: "Learning",
          progress: 35,
          description: "Machine learning, statistics, and data visualization",
          icon: BarChart3,
          color: "from-blue-500 to-cyan-500"
        },
        {
          name: "Competitive Programming",
          level: "Intermediate",
          progress: 65,
          description: "Problem-solving with algorithmic thinking",
          icon: Code,
          color: "from-purple-500 to-pink-500"
        },
        {
          name: "Database Management",
          level: "Beginner",
          progress: 25,
          description: "SQL and database design principles",
          icon: Database,
          color: "from-emerald-500 to-teal-500"
        }
      ]
    },
    {
      title: "Professional Skills",
      skills: [
        {
          name: "Academic Writing",
          level: "Advanced",
          progress: 85,
          description: "Research methodology and documentation",
          icon: PenTool,
          color: "from-amber-500 to-orange-500"
        },
        {
          name: "IEEE Networking",
          level: "Active",
          progress: 70,
          description: "Professional development and collaboration",
          icon: Users,
          color: "from-indigo-500 to-purple-500"
        },
        {
          name: "Leadership",
          level: "Developing",
          progress: 60,
          description: "Team management and project coordination",
          icon: Zap,
          color: "from-rose-500 to-pink-500"
        }
      ]
    }
  ];

  const certifications = [
    { name: "IEEE Student Member", issuer: "IEEE", year: "2023" },
    { name: "Academic Excellence", issuer: "Jahangirnagar University", year: "2023" },
    { name: "Programming Fundamentals", issuer: "Online Course", year: "2022" }
  ];

  return (
    <section id="skills" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 overflow-hidden">
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
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-sm font-medium mb-4 sm:mb-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <Brain className="w-4 h-4 animate-pulse" />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-semibold">Skills & Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            My <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">Skills</span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full shadow-lg"></div>
          <p className="text-lg sm:text-xl text-gray-600 mt-4 sm:mt-6 max-w-2xl mx-auto px-4">
            Continuously developing technical and professional capabilities
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-12 sm:space-y-16 mb-12 sm:mb-16 lg:mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
                  >
                    {/* Hover Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                    
                    {/* Floating Particles */}
                    <div className="absolute top-2 right-2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500"></div>
                    <div className="absolute bottom-2 left-2 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce delay-200 transition-all duration-500"></div>
                    
                    <div className="relative">
                      {/* Icon */}
                      <div className={`inline-flex p-3 sm:p-4 bg-gradient-to-br ${skill.color} rounded-2xl shadow-lg mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <skill.icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                      </div>

                      {/* Content */}
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        {skill.name}
                      </h4>
                      
                      <p className={`text-sm font-semibold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent mb-3 sm:mb-4`}>
                        {skill.level}
                      </p>
                      
                      <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                        {skill.description}
                      </p>

                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-semibold text-gray-800">{skill.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                          <div 
                            className={`h-2 sm:h-3 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-6 sm:p-8 md:p-12">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Certifications & Achievements
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-center">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Globe className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">{cert.name}</h4>
                  <p className="text-gray-600 text-xs sm:text-sm mb-1">{cert.issuer}</p>
                  <p className="text-blue-600 font-semibold text-xs sm:text-sm">{cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;