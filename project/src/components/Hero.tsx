import React from 'react';
import { Download, ArrowDown, Github, Linkedin, Facebook } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/afroza.ema.2024", color: "hover:text-blue-600" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-700" },
    { icon: Github, href: "#", color: "hover:text-gray-800" }
  ];

  const handleDownloadCV = async () => {
    try {
      // List of common PDF filenames to try
      const possibleFilenames = [
        'cv.pdf',
        'resume.pdf',
        'Afroza_Akter_Ema_CV.pdf',
        'demo-cv.pdf',
        'portfolio.pdf',
        'curriculum-vitae.pdf'
      ];

      let foundFile = null;
      
      // Try to find an existing PDF file
      for (const filename of possibleFilenames) {
        try {
          const response = await fetch(`/${filename}`, { method: 'HEAD' });
          if (response.ok) {
            foundFile = filename;
            break;
          }
        } catch (error) {
          // Continue to next filename
          continue;
        }
      }

      // If no predefined file found, try to get any PDF from a directory listing (fallback)
      if (!foundFile) {
        // As a fallback, use the most common name
        foundFile = 'cv.pdf';
      }

      // Create download link
      const link = document.createElement('a');
      link.href = `/${foundFile}`;
      link.download = foundFile;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
    } catch (error) {
      console.error('Error downloading CV:', error);
      // Fallback to a default filename
      const link = document.createElement('a');
      link.href = '/cv.pdf';
      link.download = 'CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50 pt-16 sm:pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 sm:w-56 lg:w-64 h-40 sm:h-56 lg:h-64 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-16 sm:top-20 right-8 sm:right-20 w-3 sm:w-4 h-3 sm:h-4 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 sm:bottom-32 left-8 sm:left-20 w-2 sm:w-3 h-2 sm:h-3 bg-purple-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-amber-400 rounded-full animate-bounce delay-700"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Image with Enhanced Spacing */}
        <div className="mb-8 sm:mb-12 lg:mb-16 py-4 sm:py-6 lg:py-8">
          <div className="relative inline-block">
            {/* Multiple Animated Rings for More Visual Impact */}
            <div className="absolute -inset-4 sm:-inset-6 lg:-inset-8 bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
            <div className="absolute -inset-3 sm:-inset-4 lg:-inset-6 bg-gradient-to-r from-blue-600 via-purple-600 to-amber-600 rounded-full blur-md opacity-50 animate-spin" style={{animationDuration: '12s'}}></div>
            <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r from-blue-700 via-purple-700 to-amber-700 rounded-full blur-sm opacity-70 animate-pulse delay-500"></div>
            
            {/* Profile Image - Responsive sizing */}
            <img
              src="https://avatars.githubusercontent.com/u/178381093?"
              alt="Afroza Akter Ema"
              className="relative w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full object-cover border-4 sm:border-6 lg:border-8 border-white shadow-2xl hover:scale-105 transition-transform duration-500"
            />
            
            {/* Enhanced Status Indicator - Responsive */}
            <div className="absolute bottom-2 sm:bottom-4 lg:bottom-6 right-2 sm:right-4 lg:right-6 w-4 sm:w-6 lg:w-8 h-4 sm:h-6 lg:h-8 bg-green-500 border-2 sm:border-3 lg:border-4 border-white rounded-full animate-pulse shadow-lg">
              <div className="absolute inset-0.5 sm:inset-1 bg-green-400 rounded-full animate-ping"></div>
            </div>

            {/* Floating Achievement Badges - Responsive */}
            <div className="absolute -top-2 sm:-top-3 lg:-top-4 -left-2 sm:-left-3 lg:-left-4 w-6 sm:w-8 lg:w-10 xl:w-12 h-6 sm:h-8 lg:h-10 xl:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg animate-bounce">
              🎓
            </div>
            <div className="absolute -top-1 sm:-top-2 -right-3 sm:-right-4 lg:-right-6 xl:-right-8 w-5 sm:w-6 lg:w-8 xl:w-10 h-5 sm:h-6 lg:h-8 xl:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg animate-bounce delay-300">
              ⚡
            </div>
            <div className="absolute -bottom-1 sm:-bottom-2 -left-2 sm:-left-3 lg:-left-4 xl:-left-6 w-5 sm:w-6 lg:w-8 xl:w-10 h-5 sm:h-6 lg:h-8 xl:h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg animate-bounce delay-700">
              📊
            </div>
          </div>
        </div>

        {/* Name with Enhanced Spacing - Responsive Typography */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-3 sm:mb-4 lg:mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Afroza Akter Ema
            </span>
          </h1>
        </div>
        
        {/* Tags with Enhanced Spacing - Responsive */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-12 px-2">
          <span className="px-3 sm:px-4 lg:px-6 xl:px-8 py-2 sm:py-3 lg:py-4 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl text-gray-700 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-blue-100 text-xs sm:text-sm lg:text-base">
            🎓 Student
          </span>
          <span className="px-3 sm:px-4 lg:px-6 xl:px-8 py-2 sm:py-3 lg:py-4 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl text-gray-700 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-purple-100 text-xs sm:text-sm lg:text-base">
            ⚡ IEEE Member
          </span>
          <span className="px-3 sm:px-4 lg:px-6 xl:px-8 py-2 sm:py-3 lg:py-4 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl text-gray-700 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-amber-100 text-xs sm:text-sm lg:text-base">
            📊 Future Data Scientist
          </span>
        </div>

        {/* Quote with Enhanced Spacing - Responsive */}
        <div className="mb-8 sm:mb-12 lg:mb-16 px-4">
          <blockquote className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-700 font-light italic leading-relaxed max-w-4xl mx-auto">
            "Driven by <span className="text-blue-600 font-medium">curiosity</span>, grounded in <span className="text-purple-600 font-medium">values</span>, and fueled by <span className="text-amber-600 font-medium">dreams</span>."
          </blockquote>
        </div>

        {/* Download Button - Responsive */}
        <div className="flex justify-center mb-8 sm:mb-12 lg:mb-16">
          <button 
            onClick={handleDownloadCV}
            className="group relative px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg sm:rounded-xl font-medium text-sm sm:text-base shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            <div className="flex items-center justify-center gap-2">
              <Download className="w-3.5 sm:w-4 h-3.5 sm:h-4 transition-transform group-hover:scale-110" />
              Download CV
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </button>
        </div>

        {/* Social Links with Enhanced Spacing - Responsive */}
        <div className="flex justify-center gap-3 sm:gap-4 lg:gap-6 xl:gap-8 mb-8 sm:mb-12 lg:mb-20">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-3 sm:p-4 lg:p-5 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl text-gray-600 ${social.color} shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 border border-gray-100`}
            >
              <social.icon className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 group-hover:scale-110 transition-transform duration-300" />
            </a>
          ))}
        </div>

        {/* Scroll Indicator with Enhanced Spacing - Responsive */}
        <div className="animate-bounce pb-4 sm:pb-6 lg:pb-8">
          <ArrowDown className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-gray-400 mx-auto mb-2 sm:mb-3" />
          <p className="text-sm sm:text-base lg:text-lg text-gray-500 font-medium px-4">Scroll to explore my journey</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;