import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import {
  Calendar,
  Users,
  Star,
  Trophy
} from 'lucide-react';

const Events = () => {
  const location = useLocation();

  useEffect(() => {
    // If no hash, scroll to top immediately
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
    
    // Handle hash navigation on page load and navigation
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          // Add a delay to ensure page is fully rendered
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 500);
        }
      }
    };

    // Run immediately
    handleHashScroll();

    // Also run when location changes with additional delays
    const timer1 = setTimeout(handleHashScroll, 200);
    const timer2 = setTimeout(handleHashScroll, 500);
    const timer3 = setTimeout(handleHashScroll, 1000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [location]);

  const successfulEvents = [
    {
      id: 1,
      title: 'Inceptio\'25',
      date: '19th and 20th August 2025',
      time: 'Full Day Event',
      location: 'DYPIU Campus',
      description: 'Our flagship entrepreneurship event featuring startup pitches, workshops, and networking sessions.',
      category: 'Competition',
      participants: '200+',
      image: '/INCEPTIO.png',
      featured: true,
    },
    {
      id: 2,
      title: 'Elevate\'25',
      date: '21st August 2025',
      time: 'Full Day Event',
      location: 'DYPIU Campus',
      description: 'Startup acceleration and mentorship program designed to elevate student ventures to the next level.',
      category: 'Workshop',
      participants: '150+',
      image: '/ELEVATE.jpeg',
      featured: true,
    },
    {
      id: 3,
      title: 'SIH',
      date: '23rd and 24th September 2025',
      time: '48 Hour Hackathon',
      location: 'DYPIU Campus',
      description: 'Smart India Hackathon internal competition where students solve real-world problems through innovative solutions.',
      category: 'Hackathon',
      participants: '300+',
      image: '/SIH.png',
      featured: true,
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Flashing Banner */}
      <div 
        className="py-4 border-b-4 border-yellow-400 animate-pulse" 
        style={{ backgroundColor: '#000000' }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4">
            <span className="text-2xl md:text-3xl animate-bounce">🎉</span>
            <p 
              className="text-lg md:text-2xl font-bold text-center tracking-wide"
              style={{ color: '#FFFFFF' }}
            >
              REGISTRATIONS OPEN FOR FINBIZ'25 POWERED BY SURYA ELECTRONICS - <a href="/events/finbiz#registration-options" className="underline hover:text-yellow-400 transition-colors">CLICK HERE</a>
            </p>
            <span className="text-2xl md:text-3xl animate-bounce">🎉</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-blue-400 mb-4 tracking-widest font-mono text-sm">// SUCCESSFUL EVENTS</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-space">
              Our <span className="text-blue-400">Events</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 font-body">
              Discover our successful events, workshops, and competitions that have shaped the entrepreneurial journey at DYPIU
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full">
                <span className="text-white font-semibold font-space">Competitions</span>
              </div>
              <div className="bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full">
                <span className="text-white font-semibold font-space">Workshops</span>
              </div>
              <div className="bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full">
                <span className="text-white font-semibold font-space">Networking</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="upcoming-events" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-blue-600 mb-4 tracking-widest font-mono text-sm font-bold">// WHAT'S NEXT</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-body">
              Don't miss out on our exciting upcoming events and opportunities to grow your entrepreneurial journey
            </p>
          </motion.div>

          {/* FinBiz'25 Event Card */}
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col ring-2 ring-purple-500"
            >
              {/* Featured Badge */}
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-2">
                <span className="font-semibold flex items-center justify-center">
                  <Star className="w-4 h-4 mr-2" />
                  Upcoming Event
                </span>
              </div>

              {/* Content without image */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3">FinBiz'25 Powered by Surya Electronics</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-1">
                  An unprecedented entrepreneurship & trading conclave by E-Cell DYPIU in collaboration
                  with E-Cell IIT Bombay. Experience intensive learning and real-time competition in
                  this transformative 36-hour marathon.
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                    <span>8th & 9th November</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Trophy className="w-4 h-4 mr-2 text-blue-600" />
                    <span>36 Hours Event</span>
                  </div>
                </div>

                <Link
                  to="/events/finbiz"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center shadow-lg"
                >
                  <span className="font-bold text-sm">View Details</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Successful Events */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-blue-600 mb-4 tracking-widest font-mono text-sm font-bold">// OUR SUCCESS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space">
              Successful Events
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-body">
              Celebrating our achievements and the impact we've made in the entrepreneurial ecosystem
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successfulEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col ${event.featured ? 'ring-2 ring-purple-500' : ''
                  }`}
              >
                {event.featured && (
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-2">
                    <span className="font-semibold flex items-center justify-center">
                      <Star className="w-4 h-4 mr-2" />
                      Featured Event
                    </span>
                  </div>
                )}

                <div className="relative bg-gray-50 flex items-center justify-center p-6">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-auto object-contain max-h-64"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-1">{event.description}</p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Users className="w-4 h-4 mr-2 text-blue-600" />
                      <span>{event.participants} Participants</span>
                    </div>
                  </div>

                  <Link
                    to={`/events/${event.title.toLowerCase().replace("'", "").replace("25", "")}`}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center shadow-lg mt-auto"
                  >
                    <span className="font-bold text-sm">View Details</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;