import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock,
  MapPin,
  Trophy,
  Award,
  Star,
  TrendingUp,
  Target,
  Lightbulb,
  Users,
  DollarSign,
  BarChart3,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

const FinBiz = () => {
  const eventDetails = {
    title: 'FinBiz\'25',
    subtitle: 'Finance & Business Innovation Festival',
    date: '8th & 9th November 2025',
    time: '24+ Hour Marathon',
    location: 'DYPIU Campus',
    participants: 'Open for All',
    category: 'Finance & Trading Competition',
    description: 'A 24-hour flagship finance and business innovation festival designed to empower students with real-world trading experience, financial literacy, and strategic entrepreneurship skills. The event bridges the gap between market theory and hands-on finance practice.',
    highlights: [
      {
        title: 'Live Market Simulation',
        description: 'Experience real-time trading across equities, forex, and commodities using live simulation platforms',
        icon: 'TrendingUp'
      },
      {
        title: 'Expert Mentorship',
        description: 'Learn from industry leaders including experts from IIT Bombay and DYPIU\'s entrepreneurial ecosystem',
        icon: 'Users'
      },
      {
        title: 'Business Model Building',
        description: 'Develop scalable business models grounded in real financial logic and market dynamics',
        icon: 'Target'
      },
      {
        title: 'Strategic Innovation',
        description: 'Combine financial literacy with entrepreneurship through interactive workshops and live simulations',
        icon: 'Lightbulb'
      }
    ],
    zones: [
      {
        zone: 'Zone A',
        name: 'FinBiz Trading Arena',
        duration: '24+ Hours (Day 1 – Day 2)',
        focus: 'Live market simulation, fund management, algo-based trading strategies',
        description: 'Immersive exposure to trading across different markets with real-time analytics and strategy formulation'
      },
      {
        zone: 'Zone B',
        name: 'Illuminate Workshop Series',
        duration: '6 Hours (Day 1)',
        focus: 'Financial literacy, business model innovation, mentorship from IIT Bombay & DYPIU',
        description: 'Curated high-energy sessions for aspiring entrepreneurs who want to merge finance with innovation'
      }
    ],
    schedule: {
      day1Morning: [
        { time: '12:00 PM', event: 'Registration & Orientation' },
        { time: '1:00 PM', event: 'Opening Ceremony with IIT Bombay Keynote' },
        { time: '2:00 PM', event: 'Workshop 1: Financial Markets Decoded' },
        { time: '3:30 PM', event: 'Workshop 2: Mind of a Trader' },
        { time: '5:00 PM', event: 'Workshop 3: Hands-on with Algo & Strategy' },
      ],
      day1Night: [
        { time: '6:00 PM', event: 'TradeStorm Begins - Real-time Simulated Trading' },
        { time: '9:00 PM', event: 'Dynamic Market Rounds & Policy Shocks' },
        { time: '12:00 AM', event: 'Financial Trivia & Networking Lounge' },
        { time: '3:00 AM', event: 'Finance Unplugged Session' },
      ],
      day2: [
        { time: '6:00 AM', event: 'Morning Trading Rounds' },
        { time: '9:00 AM', event: 'Workshop 4: Entrepreneurial Finance & Fund Management' },
        { time: '12:00 PM', event: 'Final Portfolio Submission & Performance Review' },
        { time: '2:00 PM', event: 'Mock Investor Pitch Session' },
        { time: '4:00 PM', event: 'Final Investor Round & Jury Evaluation' },
        { time: '6:00 PM', event: 'Closing Ceremony & Awards Night' },
      ]
    },
    workshops: [
      'Financial Literacy 101 — Understanding capital flow and investment logic',
      'Building a Business on Market Trends',
      'Business Model Canvas Workshop',
      'Fund Management & Scaling',
      'Mentorship Talk — IIT Bombay & DYPIU leaders',
      'Pitch & Q&A Session'
    ],
    awards: [
      { title: 'Best Trading Strategist', icon: 'TrendingUp' },
      { title: 'Best Fund Management Model', icon: 'DollarSign' },
      { title: 'Best Financial Startup Pitch', icon: 'Award' }
    ]
  };

  const getIcon = (iconName) => {
    const icons = {
      TrendingUp: TrendingUp,
      Users: Users,
      Target: Target,
      Lightbulb: Lightbulb,
      DollarSign: DollarSign,
      Award: Award,
      BarChart3: BarChart3
    };
    return icons[iconName] || Star;
  };

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
              REGISTRATIONS OPEN FOR FINBIZ'25 - <a href="
              
              
              " className="underline hover:text-yellow-400 transition-colors">CLICK HERE</a>
            </p>
            <span className="text-2xl md:text-3xl animate-bounce">🎉</span>
          </div>
        </div>
      </div>

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
              className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Events
            </Link>

            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full mb-4">
                  <span className="font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-2" />
                    Upcoming Event
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-space">
                  {eventDetails.title}
                </h1>
                <p className="text-2xl text-blue-200 mb-6 font-space">{eventDetails.subtitle}</p>
                <p className="text-lg text-blue-100 mb-8 leading-relaxed font-body">
                  {eventDetails.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center text-blue-100">
                    <Calendar className="w-5 h-5 mr-3 text-blue-300" />
                    <div>
                      <p className="text-sm text-blue-300">Date</p>
                      <p className="font-semibold">{eventDetails.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-blue-100">
                    <Clock className="w-5 h-5 mr-3 text-blue-300" />
                    <div>
                      <p className="text-sm text-blue-300">Duration</p>
                      <p className="font-semibold">{eventDetails.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-blue-100">
                    <MapPin className="w-5 h-5 mr-3 text-blue-300" />
                    <div>
                      <p className="text-sm text-blue-300">Location</p>
                      <p className="font-semibold">{eventDetails.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-blue-100">
                    <Users className="w-5 h-5 mr-3 text-blue-300" />
                    <div>
                      <p className="text-sm text-blue-300">Participation</p>
                      <p className="font-semibold">{eventDetails.participants}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Registration */}
      <section id="registration" className="py-20 bg-gradient-primary scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience FinBiz'25?
            </h2>
            <p className="text-xl text-blue-100 mb-4">
              Join us for 24+ hours of immersive finance and business innovation
            </p>
            <p className="text-lg text-blue-200 font-semibold">Choose your registration option below</p>
          </div>

          <div id="registration-options" className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 scroll-mt-20">
            {/* Regular Card 1 */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 text-center">
                <div className="inline-block bg-white text-blue-600 px-4 py-2 rounded-full font-bold text-sm mb-3">
                  OPEN FOR FIRST 25
                </div>
                <h3 className="text-3xl font-bold mb-2">EARLY BIRD</h3>
                <p className="text-blue-100">Priority registration</p>
              </div>
              
              {/* Body */}
              <div className="p-8">
                {/* Pricing */}
                <div className="text-center mb-6">
                  <div className="mb-4">
                    <p className="text-2xl font-bold text-gray-900 mb-1">ILLUMINATE</p>
                    <p className="text-4xl font-bold text-blue-600">₹399</p>
                  </div>
                  <div className="border-t border-gray-300 pt-4">
                    <p className="text-2xl font-bold text-gray-900 mb-1">FINBIZ'25</p>
                    <p className="text-4xl font-bold text-blue-600">₹199</p>
                  </div>
                  <p className="text-gray-600 mt-4 text-sm"><span className="font-bold">Total = ₹598</span> (Available for all participants)</p>
                </div>
                
                {/* Features */}
                <div className="mb-8">
                  <div className="flex items-start mb-3">
                    <span className="text-blue-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700">Full event access</span>
                  </div>
                  <div className="flex items-start mb-3">
                    <span className="text-blue-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700">All meals & refreshments</span>
                  </div>
                  <div className="flex items-start mb-3">
                    <span className="text-blue-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700">Event materials</span>
                  </div>
                  <div className="flex items-start mb-3">
                    <span className="text-blue-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700">Certificate of participation</span>
                  </div>
                </div>
                
                {/* Button */}
                <a
                  href="https://forms.gle/drq8qsibpfX176CQ8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-4 px-6 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
                >
                  Register Now - Early Bird
                </a>
              </div>
            </div>

            {/* Regular Card 2 */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 text-center">
                <div className="inline-block bg-white text-blue-600 px-4 py-2 rounded-full font-bold text-sm mb-3">
                  OPEN FOR ALL
                </div>
                <h3 className="text-3xl font-bold mb-2">REGULAR</h3>
                <p className="text-blue-100">Standard registration</p>
              </div>
              
              {/* Body */}
              <div className="p-8">
                {/* Pricing */}
                <div className="text-center mb-6">
                  <div className="mb-4">
                    <p className="text-2xl font-bold text-gray-900 mb-1">ILLUMINATE</p>
                    <p className="text-4xl font-bold text-blue-600">₹499</p>
                  </div>
                  <div className="border-t border-gray-300 pt-4">
                    <p className="text-2xl font-bold text-gray-900 mb-1">FINBIZ'25</p>
                    <p className="text-4xl font-bold text-blue-600">₹299</p>
                  </div>
                  <p className="text-gray-600 mt-4 text-sm"><span className="font-bold">Total = ₹798</span> (Available for all participants)</p>
                </div>
                
                {/* Features */}
                <div className="mb-8">
                  <div className="flex items-start mb-3">
                    <span className="text-blue-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700">Full event access</span>
                  </div>
                  <div className="flex items-start mb-3">
                    <span className="text-blue-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700">All meals & refreshments</span>
                  </div>
                  <div className="flex items-start mb-3">
                    <span className="text-blue-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700">Event materials</span>
                  </div>
                  <div className="flex items-start mb-3">
                    <span className="text-blue-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700">Certificate of participation</span>
                  </div>
                </div>
                
                {/* Button */}
                <a
                  href="https://forms.gle/dLcbtygScXXdhgb69"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-4 px-6 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
                >
                  Register Now - Regular
                </a>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/events#upcoming-events"
              className="inline-block text-white hover:text-blue-200 transition-colors font-semibold"
            >
              ← Back to Events
            </Link>
          </div>
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
            <p className="text-blue-600 mb-4 tracking-widest font-mono text-sm font-bold">// KEY FEATURES</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space">
              Event <span className="text-blue-600">Highlights</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventDetails.highlights.map((highlight, index) => {
              const IconComponent = getIcon(highlight.icon);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-space">{highlight.title}</h3>
                  <p className="text-gray-700 font-body">{highlight.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Event Zones */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-blue-600 mb-4 tracking-widest font-mono text-sm font-bold">// STRUCTURE</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space">
              Event <span className="text-blue-600">Zones</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {eventDetails.zones.map((zone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-bold mr-4">
                    {zone.zone}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 font-space">{zone.name}</h3>
                    <div className="flex items-center text-gray-600 text-sm mb-2">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{zone.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <p className="text-sm font-semibold text-blue-800 mb-1">Focus Areas:</p>
                  <p className="text-gray-700 font-body">{zone.focus}</p>
                </div>
                <p className="text-gray-700 font-body leading-relaxed">{zone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-blue-600 mb-4 tracking-widest font-mono text-sm font-bold">// TIMELINE</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space">
              Event <span className="text-blue-600">Schedule</span>
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-xl p-6 max-h-[600px] overflow-y-auto"
              style={{ scrollbarWidth: 'thin' }}
            >
              {/* Day 1: Evening & Overnight */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-blue-500 text-gray-900">
                  DAY 1 – Evening & Overnight (6 PM – 6 AM)
                </h3>
                <div className="overflow-x-auto rounded-lg shadow-md">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs uppercase bg-gray-100">
                      <tr>
                        <th className="px-6 py-3 w-1/3 text-gray-700">Time</th>
                        <th className="px-6 py-3 text-gray-700">Activity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">6:00 PM – 6:30 PM</td>
                        <td className="px-6 py-4"><b>Team Formation & Role Assignment:</b> Teams finalize trader, analyst, and leader roles.</td>
                      </tr>
                      <tr className="bg-gray-50 border-b hover:bg-gray-100">
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">6:30 PM – 8:00 PM</td>
                        <td className="px-6 py-4"><b>Market Research & Portfolio Setup:</b> Analyze given data sets and design opening portfolios.</td>
                      </tr>
                      <tr className="bg-white border-b hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">8:00 PM – 9:00 PM</td>
                        <td className="px-6 py-4"><b>Dinner:</b> Buffet dinner break.</td>
                      </tr>
                      <tr className="bg-gray-50 border-b hover:bg-gray-100">
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">9:00 PM – 11:00 PM</td>
                        <td className="px-6 py-4"><b>Task 1 – Opening Market Simulation:</b> First live trading session.</td>
                      </tr>
                      <tr className="bg-white border-b hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">11:00 PM – 11:30 PM</td>
                        <td className="px-6 py-4"><b>Midnight Snack:</b> Refreshments & networking.</td>
                      </tr>
                      <tr className="bg-gray-50 border-b hover:bg-gray-100">
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">11:30 PM – 12:30 AM</td>
                        <td className="px-6 py-4"><b>Chill Beats / Open Mic Gig:</b> Relaxed musical session for engagement.</td>
                      </tr>
                      <tr className="bg-white border-b hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">12:30 AM – 2:30 AM</td>
                        <td className="px-6 py-4"><b>Task 2 – Volatility Round:</b> Simulated market shocks and adaptive trading.</td>
                      </tr>
                      <tr className="bg-gray-50 border-b hover:bg-gray-100">
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">2:30 AM – 3:00 AM</td>
                        <td className="px-6 py-4"><b>Finance Meme Hour:</b> Interactive fun & finance humor session.</td>
                      </tr>
                      <tr className="bg-white hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">3:00 AM – 6:00 AM</td>
                        <td className="px-6 py-4"><b>Night Work Sprint:</b> Teams refine reports, visuals, and analysis.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Day 2: Simulation, Pitch & Celebration */}
              <div>
                <h3 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-blue-500 text-gray-900">
                  DAY 2 – Simulation, Pitch & Celebration (6 AM – 8 PM)
                </h3>
                <div className="overflow-x-auto rounded-lg shadow-md">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs uppercase bg-gray-100">
                      <tr>
                        <th className="px-6 py-3 w-1/3 text-gray-700">Time</th>
                        <th className="px-6 py-3 text-gray-700">Activity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">6:00 AM – 7:00 AM</td>
                        <td className="px-6 py-4"><b>Breakfast:</b> Poha/Upma + Tea.</td>
                      </tr>
                      <tr className="bg-gray-50 border-b hover:bg-gray-100">
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">7:00 AM – 9:00 AM</td>
                        <td className="px-6 py-4"><b>Task 3 – News Impact Round:</b> Reaction to new financial data and policy updates.</td>
                      </tr>
                      <tr className="bg-white border-b hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">9:30 AM – 10:30 AM</td>
                        <td className="px-6 py-4"><b>Workshop 4 – Entrepreneurial Finance:</b> Linking trading insights to startup funding.</td>
                      </tr>
                      <tr className="bg-gray-50 border-b hover:bg-gray-100">
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">10:45 AM – 12:15 PM</td>
                        <td className="px-6 py-4"><b>Portfolio Finalization:</b> Teams compile their final performance and strategies.</td>
                      </tr>
                      <tr className="bg-white border-b hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">12:15 PM – 1:15 PM</td>
                        <td className="px-6 py-4"><b>Lunch:</b> Light thali or buffet.</td>
                      </tr>
                      <tr className="bg-gray-50 border-b hover:bg-gray-100">
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">1:15 PM – 2:00 PM</td>
                        <td className="px-6 py-4"><b>DJ / Finance Quiz:</b> Light entertainment and engagement activity.</td>
                      </tr>
                      <tr className="bg-white border-b hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">2:00 PM – 3:00 PM</td>
                        <td className="px-6 py-4"><b>Mock Pitch Session:</b> Teams practice their presentations.</td>
                      </tr>
                      <tr className="bg-gray-50 border-b hover:bg-gray-100">
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">3:00 PM – 5:30 PM</td>
                        <td className="px-6 py-4"><b>Final Pitch – Investor Round:</b> Jury evaluation and team presentations.</td>
                      </tr>
                      <tr className="bg-white border-b hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">5:30 PM – 6:00 PM</td>
                        <td className="px-6 py-4"><b>Student Band Performance:</b> Music set during jury deliberation.</td>
                      </tr>
                      <tr className="bg-gray-50 border-b hover:bg-gray-100">
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">6:00 PM – 7:00 PM</td>
                        <td className="px-6 py-4"><b>Closing Ceremony & Awards:</b> Results, speeches, and certificates.</td>
                      </tr>
                      <tr className="bg-white hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">7:00 PM – 8:00 PM</td>
                        <td className="px-6 py-4"><b>Wrap-Up & Group Photos:</b> Photos & closing celebration.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-blue-600 mb-4 tracking-widest font-mono text-sm font-bold">// Illuminate</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space">
              Workshop <span className="text-blue-600">Series</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-body">
              Curated sessions for aspiring entrepreneurs merging finance with innovation
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {eventDetails.workshops.map((workshop, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <p className="text-gray-800 font-body leading-relaxed">{workshop}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinBiz;
