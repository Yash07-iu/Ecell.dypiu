import { motion } from 'framer-motion';
import { 
  Calendar, 
  Users, 
  MapPin,
  Trophy,
  Award,
  Star,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Inceptio = () => {
  const eventDetails = {
    title: 'Inceptio\'25',
    subtitle: 'Showcasing the Next Generation of Innovators',
    date: 'August 2025',
    time: 'Two Day Event',
    location: 'DYPIU Campus',
    participants: '21 Teams',
    category: 'Competition',
    image: '/INCEPTIO.png',
    description: 'A distinguished startup pitching competition, drawing inspiration from the dynamic, investor-style pitching approach of Shark Tank, designed to foster innovation, creativity, and entrepreneurial thinking among students.',
    longDescription: 'In August, the Entrepreneurship Cell (E-Cell) of Dr. D. Y. Patil International University (DYPIU), in collaboration with CIIE (Centre of Innovation and Incubation), successfully organized INCEPTIO 2025. This distinguished startup pitching competition provided participants the opportunity to present their ideas to a panel of experienced mentors and industry professionals, simulating a real-world entrepreneurial pitching environment.',
    highlights: [
      '21 student teams participated in the competition',
      'Grand Finale with 9 finalist teams',
      'Esteemed jury of accomplished industry professionals',
      'Real-world entrepreneurial pitching environment',
      'Platform to demonstrate entrepreneurial potential',
      'Networking opportunities with industry leaders'
    ],
    schedule: [
      {
        day: 'Day 1 - 19th August',
        events: [
          { time: '9:00 AM', activity: 'Registration & Welcome' },
          { time: '10:00 AM', activity: 'Opening Ceremony' },
          { time: '11:00 AM', activity: 'Keynote Speech by Industry Expert' },
          { time: '2:00 PM', activity: 'Startup Pitch Round 1' },
          { time: '4:00 PM', activity: 'Workshop: Business Model Canvas' },
          { time: '6:00 PM', activity: 'Networking Session' }
        ]
      },
      {
        day: 'Day 2 - 20th August',
        events: [
          { time: '9:00 AM', activity: 'Startup Pitch Finals' },
          { time: '11:00 AM', activity: 'Panel Discussion: Future of Entrepreneurship' },
          { time: '2:00 PM', activity: 'Mentorship Sessions' },
          { time: '4:00 PM', activity: 'Innovation Showcase' },
          { time: '5:30 PM', activity: 'Award Ceremony' },
          { time: '6:30 PM', activity: 'Closing & Networking' }
        ]
      }
    ],
    prizes: [
      { position: 'Winner', amount: '₹5,000', description: 'Ventura - Outstanding Innovation' },
      { position: '1st Runner-Up', amount: '₹3,000', description: 'Wheyvolution - Excellent Execution' },
      { position: '2nd Runner-Up (Tie)', amount: '₹2,000', description: 'Skyshift - Creative Solution' },
      { position: '2nd Runner-Up (Tie)', amount: '₹2,000', description: 'The Copilots - Technical Excellence' }
    ],
    judges: [
      { name: 'Mr. Santosh Ranjan', role: 'Industry Expert', image: '/Santosh Ranjan.png' },
      { name: 'Mr. Sanjay Jagtap', role: 'Industry Professional', image: '/Sanjay Jagtap.png' }
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
                <p className="text-blue-400 mb-4 tracking-widest font-mono text-sm">// FLAGSHIP EVENT</p>
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

      {/* Event Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-blue-600 mb-4 tracking-widest font-mono text-sm font-bold">// EVENT HIGHLIGHTS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space">
              What Made It <span className="text-blue-600">Special</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventDetails.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-800 font-body leading-relaxed">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Schedule */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-blue-600 mb-4 tracking-widest font-mono text-sm font-bold">// EVENT SCHEDULE</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space">
              Two Days of <span className="text-blue-600">Innovation</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {eventDetails.schedule.map((day, dayIndex) => (
              <motion.div
                key={dayIndex}
                initial={{ opacity: 0, x: dayIndex === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: dayIndex * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="bg-gradient-primary text-white p-6">
                  <h3 className="text-2xl font-bold font-space">{day.day}</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {day.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="flex items-start">
                        <div className="w-20 flex-shrink-0">
                          <span className="text-blue-600 font-semibold text-sm">{event.time}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-800 font-body">{event.activity}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Judges Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-blue-600 mb-4 tracking-widest font-mono text-sm font-bold">// EXPERT PANEL</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space">
              Our Distinguished <span className="text-blue-600">Judges</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {eventDetails.judges.map((judge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative mb-6">
                  <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-500 shadow-lg">
                    <img
                      src={judge.image}
                      alt={judge.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-full border-4 border-white flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-space">{judge.name}</h3>
                <p className="text-blue-600 font-semibold font-body">{judge.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-blue-600 mb-4 tracking-widest font-mono text-sm font-bold">// PRIZES & AWARDS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space">
              Recognition & <span className="text-blue-600">Rewards</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventDetails.prizes.map((prize, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-space">{prize.position}</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">{prize.amount}</p>
                <p className="text-gray-600 text-sm font-body">{prize.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inceptio;