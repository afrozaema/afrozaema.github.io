import React, { useState } from 'react';
import { Camera, Heart, Star, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      src: "https://avatars.githubusercontent.com/u/178381093?",
      title: "Professional Portrait",
      category: "Personal",
      description: "Capturing the essence of academic journey",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      src: "https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Reading Corner",
      category: "Books & Learning",
      description: "My peaceful space for Islamic literature and fiction",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      src: "https://images.pexels.com/photos/1434608/pexels-photo-1434608.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Study Sessions",
      category: "Academic Life",
      description: "Late night coding and data science exploration",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      src: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Travel Dreams",
      category: "Adventure",
      description: "Exploring new cultures and perspectives",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Tech Workspace",
      category: "Technology",
      description: "Where innovation meets inspiration",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      src: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Creative Moments",
      category: "Creativity",
      description: "Finding beauty in everyday moments",
      gradient: "from-rose-500 to-pink-500"
    }
  ];

  const categories = ["All", "Personal", "Books & Learning", "Academic Life", "Adventure", "Technology", "Creativity"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const newIndex = direction === 'prev' 
      ? (selectedImage - 1 + filteredItems.length) % filteredItems.length
      : (selectedImage + 1) % filteredItems.length;
    
    setSelectedImage(newIndex);
  };

  return (
    <section id="gallery" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-blue-50/50 to-purple-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 rounded-full text-sm font-medium mb-4 sm:mb-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <Camera className="w-4 h-4 animate-pulse" />
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent font-semibold">Visual Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            My <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">Gallery</span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full shadow-lg"></div>
          <p className="text-lg sm:text-xl text-gray-600 mt-4 sm:mt-6 max-w-3xl mx-auto px-4">
            Moments and memories that define my journey - from academic pursuits to personal passions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:text-blue-600 shadow-md hover:shadow-lg'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6`}>
                <div className="text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-xs sm:text-sm font-medium opacity-90 mb-1 sm:mb-2">{item.category}</p>
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm opacity-90">{item.description}</p>
                </div>
              </div>

              {/* Floating Icons */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-2">
                  <div className="p-1.5 sm:p-2 bg-white/20 backdrop-blur-sm rounded-full">
                    <Eye className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
                  </div>
                  <div className="p-1.5 sm:p-2 bg-white/20 backdrop-blur-sm rounded-full">
                    <Heart className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                <span className="px-2 sm:px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-full">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-2 sm:top-4 right-2 sm:right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300 z-10"
              >
                <X className="w-5 sm:w-6 h-5 sm:h-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
              >
                <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6" />
              </button>
              
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
              >
                <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6" />
              </button>

              {/* Image */}
              <img
                src={filteredItems[selectedImage].src}
                alt={filteredItems[selectedImage].title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
              />

              {/* Image Info */}
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-white">
                <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">{filteredItems[selectedImage].title}</h3>
                <p className="text-xs sm:text-sm opacity-90 mb-1">{filteredItems[selectedImage].category}</p>
                <p className="text-sm sm:text-base opacity-90">{filteredItems[selectedImage].description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
            <Camera className="w-4 sm:w-5 h-4 sm:h-5 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-gray-700 font-medium text-sm sm:text-base">More memories coming soon...</span>
            <Star className="w-3 sm:w-4 h-3 sm:h-4 text-amber-500 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;