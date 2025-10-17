import { motion } from 'framer-motion';
import { 
  Calendar, 
  Users, 
  MapPin,
  Trophy,
  Star,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Elevate = () => {
  const eventDetails = {
    title: 'Elevate\'25',
    subtitle: 'Celebrating World Entrepreneurship Day',
    date: '21st August 2025',
    time: 'Special Initiative',
    location: 'DYPIU Campus',
    participants: 'Students & Faculty',
    category: 'Workshop',
    image: '/ELEVATE.jpeg',
    description: 'A special initiative dedicated to fostering entrepreneurial thinking, innovation, and leadership skills among students.',
    longDescription: 'On August 21, Dr. D. Y. Patil International University (DYPIU) proudly celebrated World Entrepreneurship Day with Elevate\'25, a special initiative dedicated to fostering entrepreneurial thinking, innovation, and leadership skills among students. The event was graced by distinguished industry leaders and university leadership.',
    highlights: [
      {
        title: 'Distinguished Keynote',
        description: 'Keynote address by distinguished industry leader Mr. Shailendra Goswami sharing valuable insights',
        icon: '🎤'
      },
      {
        title: 'Entrepreneurship Landscape',
        description: 'Deep insights into the evolving landscape of entrepreneurship and emerging market trends',
        icon: '🌟'
      },
      {
        title: 'Idea Transformation',
        description: 'Expert guidance on transforming innovative ideas into sustainable and scalable ventures',
        icon: '💡'
      },
      {
        title: 'Academic-Business Bridge',
        description: 'Bridging academic knowledge with real-world business practices and industry applications',
        icon: '🌉'
      },
      {
        title: 'Creative Exploration',
        description: 'Encouraging creative thinking and exploration of opportunities beyond conventional boundaries',
        icon: '🚀'
      },
      {
        title: 'Practical Innovation',
        description: 'Emphasis on innovation in practical settings and real-world implementation strategies',
        icon: '⚡'
      }
    ],

    guests: [
      { name: 'Dr. Manish Bhalla', role: 'Honorable Vice-Chancellor, DYPIU', image: '/Manish Bhalla.png' },
      { name: 'Dr. Prabhat Ranjan', role: 'Pro Vice-Chancellor, DYPIU', image: '/Prabhat Ranjan.png' },
      { name: 'Mr. Shailendra Goswami', role: 'Chief Guest & Industry Leader', image: null }
    ],
    outcomes: [
      {
        title: 'Business Model Refinement',
        description: 'Participating students refined their business models with expert guidance and structured frameworks',
        icon: '📊'
      },
      {
        title: 'Professional Development',
        description: 'Students gained professional insights and developed enhanced presentation and communication skills',
        icon: '🎯'
      },
      {
        title: 'Strategic Validation',
        description: 'Market validation strategies and techniques were implemented for better business understanding',
        icon: '✅'
      },
      {
        title: 'Industry Connections',
        description: 'Valuable mentor connections and industry networking opportunities were established',
        icon: '🤝'
      },
      {
        title: 'Ongoing Support',
        description: 'Follow-up support program initiated to continue nurturing entrepreneurial development',
        icon: '🔄'
      }
    ]
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              to="/events" 
              className="inline-flex items-center text-blue-400 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Events
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-blue-400 mb-4 tracking-widest font-mono text-sm">// ACCELERATION PROGRAM</p>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-space">
                  {eventDetails.title}
                </h1>
                <p className="text-2xl text-blue-100 mb-6 font-space">{eventDetails.subtitle}</p>
                <p className="text-xl text-blue-100 mb-8 font-body leading-relaxed">
                  {eventDetails.longDescription}
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="bg-white/10 backdrop-blur-lg px-4 py-2 rounded-lg flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-blue-400" />
                    <span className="text-white font-semibold">{eventDetails.date}</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-lg px-4 py-2 rounded-lg flex items-center">
                    <Users className="w-5 h-5 mr-2 text-blue-400" />
                    <span className="text-white font-semibold">{eventDetails.participants} Participants</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-lg px-4 py-2 rounded-lg flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-blue-400" />
                    <span className="text-white font-semibold">{eventDetails.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
                >
                  <img 
                    src={eventDetails.image} 
                    alt={eventDetails.title}
                    className="w-full h-64 object-contain rounded-2xl"
                  />
                  <div className="mt-6 text-center">
                    <div className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-full">
                      <Trophy className="w-4 h-4 mr-2" />
                      Event Completed Successfully
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-blue-600 mb-4 tracking-widest font-mono text-sm font-bold">// PROGRAM HIGHLIGHTS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space">
              Entrepreneurial <span className="text-blue-600">Excellence</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-body">
              World Entrepreneurship Day celebration featuring industry insights and leadership development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventDetails.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-3xl">{highlight.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-space">{highlight.title}</h3>
                <p className="text-gray-700 font-body leading-relaxed">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Distinguished Guests Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-blue-600 mb-4 tracking-widest font-mono text-sm font-bold">// DISTINGUISHED GUESTS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space">
              Event <span className="text-blue-600">Leadership</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {eventDetails.guests.map((guest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative mb-6">
                  {guest.image ? (
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-500 to-blue-500 shadow-lg">
                      <img
                        src={guest.image}
                        alt={guest.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <Star className="w-12 h-12 text-white" />
                    </div>
                  )}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-purple-500 rounded-full border-4 border-white flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-space">{guest.name}</h3>
                <p className="text-purple-600 font-semibold text-sm font-body leading-relaxed">{guest.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-blue-600 mb-4 tracking-widest font-mono text-sm font-bold">// PROGRAM OUTCOMES</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space">
              Measurable <span className="text-blue-600">Impact</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-body">
              Tangible results and achievements from the World Entrepreneurship Day celebration
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {eventDetails.outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 shadow-lg">
                      <span className="text-3xl">{outcome.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 font-space">{outcome.title}</h3>
                      <p className="text-gray-700 font-body leading-relaxed">{outcome.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Elevate;