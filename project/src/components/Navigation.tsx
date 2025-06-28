import React, { useState, useEffect } from 'react';
import { Menu, X, Download, GraduationCap, Brain, Target, Palette, Camera, MessageCircle, Sparkles } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      name: 'Education', 
      href: '#education',
      icon: GraduationCap,
      color: 'hover:text-blue-600',
      gradient: 'from-blue-500 to-indigo-500',
      bgHover: 'hover:bg-blue-50'
    },
    { 
      name: 'Skills', 
      href: '#skills',
      icon: Brain,
      color: 'hover:text-emerald-600',
      gradient: 'from-emerald-500 to-teal-500',
      bgHover: 'hover:bg-emerald-50'
    },
    { 
      name: 'Goals', 
      href: '#goals',
      icon: Target,
      color: 'hover:text-purple-600',
      gradient: 'from-purple-500 to-pink-500',
      bgHover: 'hover:bg-purple-50'
    },
    { 
      name: 'Hobbies', 
      href: '#hobbies',
      icon: Palette,
      color: 'hover:text-amber-600',
      gradient: 'from-amber-500 to-orange-500',
      bgHover: 'hover:bg-amber-50'
    },
    { 
      name: 'Gallery', 
      href: '#gallery',
      icon: Camera,
      color: 'hover:text-rose-600',
      gradient: 'from-rose-500 to-pink-500',
      bgHover: 'hover:bg-rose-50'
    },
    { 
      name: 'Contact', 
      href: '#contact',
      icon: MessageCircle,
      color: 'hover:text-cyan-600',
      gradient: 'from-cyan-500 to-blue-500',
      bgHover: 'hover:bg-cyan-50'
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Enhanced Logo with Beautiful Styling */}
          <div className="flex-shrink-0 group">
            <button 
              onClick={scrollToTop}
              className="relative flex items-center gap-2 py-2 px-3 sm:px-4 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50"
            >
              {/* Animated Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              
              {/* Sparkle Icon */}
              <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-blue-500 group-hover:text-purple-600 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
              
              {/* Name with Gradient and Animation */}
              <span className="relative text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:via-pink-600 group-hover:to-blue-600 transition-all duration-500">
                Afroza
                
                {/* Animated Underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 group-hover:w-full transition-all duration-500 rounded-full"></span>
                
                {/* Floating Dots Animation */}
                <span className="absolute -top-1 -right-1 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500"></span>
                <span className="absolute -top-2 right-2 w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-700 delay-200"></span>
              </span>
              
              {/* Subtle Badge */}
              <div className="absolute -top-2 -right-2 w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
            </button>
          </div>

          {/* iPad/Tablet Optimized Navigation - Show on medium screens and up */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative text-gray-700 ${item.color} font-medium transition-all duration-300 group py-2 px-3 rounded-lg ${item.bgHover} flex items-center gap-2 text-sm`}
              >
                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                {item.name}
                <span className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r ${item.gradient} group-hover:w-3/4 transition-all duration-300 rounded-full`}></span>
              </button>
            ))}
            
            {/* CV as compact menu item */}
            <button
              onClick={handleDownloadCV}
              className="relative text-gray-700 hover:text-indigo-600 font-medium transition-all duration-300 group py-2 px-3 rounded-lg hover:bg-indigo-50 flex items-center gap-2 text-sm"
            >
              <Download className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              CV
              <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
            </button>
          </div>

          {/* Mobile/Small Tablet menu button - Show on small and medium screens */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              {isOpen ? <X className="w-5 sm:w-6 h-5 sm:h-6" /> : <Menu className="w-5 sm:w-6 h-5 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile/Small Tablet Navigation - Optimized for iPad portrait mode */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 rounded-b-2xl shadow-xl">
            <div className="px-4 py-4 sm:py-6 space-y-1 sm:space-y-2 max-h-[70vh] overflow-y-auto">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left text-gray-700 ${item.color} font-medium transition-all duration-300 py-3 sm:py-4 px-4 sm:px-6 rounded-xl ${item.bgHover} group relative overflow-hidden flex items-center gap-4`}
                >
                  <item.icon className="w-5 sm:w-6 h-5 sm:h-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                  <span className="relative z-10 text-base sm:text-lg font-semibold">{item.name}</span>
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                </button>
              ))}
              
              {/* CV in mobile menu - Enhanced for iPad */}
              <button
                onClick={handleDownloadCV}
                className="block w-full text-left text-gray-700 hover:text-indigo-600 font-medium transition-all duration-300 py-3 sm:py-4 px-4 sm:px-6 rounded-xl hover:bg-indigo-50 group relative overflow-hidden flex items-center gap-4"
              >
                <Download className="w-5 sm:w-6 h-5 sm:h-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                <span className="relative z-10 text-base sm:text-lg font-semibold">Download CV</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;