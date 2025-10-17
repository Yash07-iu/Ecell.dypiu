import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight,
  Play,
  Pause,
  Calendar,
  Users,
  Camera
} from 'lucide-react';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Ensure page starts from top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Generate array of all gallery images
  const galleryImages = [
    '/GALLERY/20250819_53540pmByGPSMapCamera.jpg',
    '/GALLERY/20250819_53716pmByGPSMapCamera.jpg',
    '/GALLERY/20250819_53758PMByGPSMapCamera.jpg',
    '/GALLERY/20250819_53800PMByGPSMapCamera.jpg',
    '/GALLERY/20250819_54505pmByGPSMapCamera.jpg',
    '/GALLERY/20250819_54541pmByGPSMapCamera.jpg',
    '/GALLERY/20250819_55141PMByGPSMapCamera.jpg',
    '/GALLERY/20250819_55146PMByGPSMapCamera.jpg',
    '/GALLERY/20250819_55658pmByGPSMapCamera.jpg',
    '/GALLERY/20250819_60444pmByGPSMapCamera.jpg',
    '/GALLERY/20250819_60614pmByGPSMapCamera.jpg',
    '/GALLERY/20250819_60656pmByGPSMapCamera.jpg',
    '/GALLERY/20250819_60729pmByGPSMapCamera.jpg',
    '/GALLERY/20250819_61300pmByGPSMapCamera.jpg',
    '/GALLERY/20250819_61310pmByGPSMapCamera.jpg',
    '/GALLERY/20250819_61940pmByGPSMapCamera.jpg',
    '/GALLERY/20250819_62018pmByGPSMapCamera.jpg',
    '/GALLERY/20250819_62155pmByGPSMapCamera.jpg',
    '/GALLERY/20250819_62157pmByGPSMapCamera.jpg',
    '/GALLERY/IMG_7238.JPG',
    '/GALLERY/IMG_7239.JPG',
    '/GALLERY/IMG_7240.JPG',
    '/GALLERY/IMG_7241.JPG',
    '/GALLERY/IMG_7242.JPG',
    '/GALLERY/IMG_7243.JPG',
    '/GALLERY/IMG_7244.JPG',
    '/GALLERY/IMG_7245.JPG',
    '/GALLERY/IMG_7246.JPG',
    '/GALLERY/IMG_7247.JPG',
    '/GALLERY/IMG_7248.JPG',
    '/GALLERY/IMG_7249.JPG',
    '/GALLERY/IMG_7250.JPG',
    '/GALLERY/IMG_7251.JPG',
    '/GALLERY/IMG_7252.JPG',
    '/GALLERY/IMG_7253.JPG',
    '/GALLERY/IMG_7254.JPG',
    '/GALLERY/IMG_7255.JPG',
    '/GALLERY/IMG_7256.JPG',
    '/GALLERY/IMG_7257.JPG',
    '/GALLERY/IMG_7258.JPG',
    '/GALLERY/IMG_7259.JPG',
    '/GALLERY/IMG_7264.JPG',
    '/GALLERY/IMG_7265.JPG',
    '/GALLERY/IMG_7266.JPG',
    '/GALLERY/IMG_7267.JPG',
    '/GALLERY/IMG_7268.JPG',
    '/GALLERY/IMG_7269.JPG',
    '/GALLERY/IMG_7270.JPG',
    '/GALLERY/IMG_7271.JPG',
    '/GALLERY/IMG_7272.JPG',
    '/GALLERY/IMG_7273.JPG',
    '/GALLERY/IMG_7274.JPG',
    '/GALLERY/IMG_7275.JPG',
    '/GALLERY/IMG_7276.JPG',
    '/GALLERY/IMG_7278.JPG',
    '/GALLERY/IMG_7279.JPG',
    '/GALLERY/IMG-20250822-WA0027.jpg',
    '/GALLERY/IMG-20250822-WA0028.jpg',
    '/GALLERY/IMG-20250822-WA0029.jpg',
    '/GALLERY/IMG-20250822-WA0030.jpg',
    '/GALLERY/IMG-20250822-WA0033.jpg',
    '/GALLERY/IMG-20250822-WA0035.jpg',
    '/GALLERY/IMG-20250822-WA0036.jpg',
    '/GALLERY/IMG-20250822-WA0038.jpg',
    '/GALLERY/IMG-20250822-WA0041.jpg'
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000); // Change image every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isPlaying, galleryImages.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      } else if (event.key === ' ') {
        event.preventDefault();
        togglePlayPause();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentIndex, isPlaying]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-blue-400 mb-4 tracking-widest font-mono text-sm">// OUR GALLERY</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-space">
              Our <span className="text-blue-400">Gallery</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 font-body">
              Capturing moments of innovation, learning, and growth at E-Cell DYPIU
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full flex items-center">
                <Camera className="w-5 h-5 mr-2 text-white" />
                <span className="text-white font-semibold">{galleryImages.length} Photos</span>
              </div>
              <div className="bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-white" />
                <span className="text-white font-semibold">E-Cell Events</span>
              </div>
              <div className="bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full flex items-center">
                <Users className="w-5 h-5 mr-2 text-white" />
                <span className="text-white font-semibold">DYPIU Community</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-blue-600 mb-4 tracking-widest font-mono text-sm font-bold">// MEMORIES</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space">
              Memories in <span className="text-blue-600">Motion</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-body">
              Explore our journey through these captured moments of innovation and collaboration
            </p>
          </motion.div>

          {/* Image Player */}
          <div className="relative w-full max-w-4xl mx-auto">
            {/* Player Container - Adaptive Size */}
            <div className="relative bg-black rounded-xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
              {/* Image Display Area */}
              <div className="relative bg-black p-4">
                <img
                  src={galleryImages[currentIndex]}
                  alt={`Gallery image ${currentIndex + 1}`}
                  className="w-full h-auto block mx-auto"
                  style={{ maxHeight: '70vh' }}
                />
              </div>

              {/* Side Navigation Buttons - Blue Gradient Style */}
              <button
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 shadow-xl z-20 border border-blue-400"
              >
                <ChevronLeft className="w-7 h-7 text-white stroke-2" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 shadow-xl z-20 border border-blue-400"
              >
                <ChevronRight className="w-7 h-7 text-white stroke-2" />
              </button>

              {/* Bottom Player Controls - Professional Style */}
              <div className="absolute bottom-0 left-0 right-0 bg-slate-900 bg-opacity-95 backdrop-blur-sm p-4 z-20 border-t border-slate-700">
                {/* Progress Bar */}
                <div className="w-full h-3 bg-slate-700 rounded-full mb-4 overflow-hidden shadow-inner">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full shadow-sm"
                    animate={{ width: `${((currentIndex + 1) / galleryImages.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Control Bar */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {/* Previous */}
                    <button
                      onClick={goToPrevious}
                      className="w-11 h-11 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 border border-blue-400 shadow-lg"
                    >
                      <ChevronLeft className="w-6 h-6 text-white stroke-2" />
                    </button>

                    {/* Play/Pause */}
                    <button
                      onClick={togglePlayPause}
                      className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 shadow-lg border border-blue-400"
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6 text-white stroke-2" />
                      ) : (
                        <Play className="w-6 h-6 ml-0.5 text-white stroke-2" />
                      )}
                    </button>

                    {/* Next */}
                    <button
                      onClick={goToNext}
                      className="w-11 h-11 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 border border-blue-400 shadow-lg"
                    >
                      <ChevronRight className="w-6 h-6 text-white stroke-2" />
                    </button>
                  </div>

                  {/* Image Info */}
                  <div className="flex items-center space-x-3">
                    <div className="text-white text-sm font-semibold bg-slate-800 px-4 py-2 rounded-lg border border-slate-600 shadow-sm">
                      {currentIndex + 1} / {galleryImages.length}
                    </div>
                    <div className={`text-white text-xs px-3 py-2 rounded-lg font-bold shadow-sm border ${
                      isPlaying 
                        ? 'bg-green-600 border-green-400' 
                        : 'bg-red-600 border-red-400'
                    }`}>
                      {isPlaying ? 'PLAYING' : 'PAUSED'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Player Info */}
            <div className="mt-4 text-center">
              <p className="text-gray-600 font-body text-sm">
                E-Cell DYPIU Gallery • Use arrow keys or hover to control • Auto-slideshow: {isPlaying ? 'ON' : 'OFF'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-blue-400 mb-4 tracking-widest font-mono text-sm font-bold">// JOIN THE STORY</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-space">
              Be Part of Our Story
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto font-body">
              Join E-Cell DYPIU and create memories that will last a lifetime. 
              Your journey starts here!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <JoinInfoPopover>
                <a
                  href="https://forms.gle/Jg2szi9CoK6sNbE97"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join Our Community — Join our mailing list"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Join Our Community
                </a>
              </JoinInfoPopover>
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Follow Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;