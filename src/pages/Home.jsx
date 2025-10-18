import { motion } from 'framer-motion';
import {
  ArrowRight,
  Users,
  Trophy,
  Lightbulb,
  Target,
  Rocket,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import JoinInfoPopover from '../components/JoinInfoPopover';

const Home = () => {

  const features = [
    {
      icon: Trophy,
      title: 'Startup Pitches & Competitions',
      description: 'We organize pitch events where students showcase their startup ideas to investors and industry leaders.',
    },
    {
      icon: Users,
      title: 'Workshops & Mentorship',
      description: 'We conduct hands-on workshops and connect students with experienced mentors to help refine their business models and strategies.',
    },
    {
      icon: Target,
      title: 'Networking Opportunities',
      description: 'We create spaces for students to meet industry professionals, investors, and fellow entrepreneurs to foster collaboration and knowledge-sharing.',
    },
    {
      icon: Rocket,
      title: 'Incubation & Acceleration',
      description: 'Through strategic partnerships with incubators and accelerators, we support startups in scaling and growth.',
    },
  ];



  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-cream/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(223,208,184,0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 border border-cream/20 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
              }}
              animate={{
                y: [null, -200],
                opacity: [0, 0.6, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: Math.random() * 8 + 5,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "linear"
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <p className="text-accent-mono text-blue-400 mb-4 tracking-widest">// INNOVATION STARTS HERE</p>
              <h1 className="text-hero text-white mb-4">
                E-Cell{' '}
                <span className="bg-gradient-vibrant bg-clip-text text-transparent font-black">
                  DYPIU
                </span>
              </h1>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px bg-accent flex-1 max-w-20"></div>
                <span className="text-accent-mono text-accent text-sm tracking-widest">EST. 2018</span>
                <div className="h-px bg-accent flex-1 max-w-20"></div>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-white mb-4 max-w-4xl mx-auto font-space font-medium leading-relaxed">
              Empowering the next generation of entrepreneurs at
              <span className="text-blue-400 font-bold"> D Y Patil International University</span>
            </p>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto font-body">
              Where innovation meets opportunity, and ideas transform into impactful ventures
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/about"
                className="group border-2 border-blue-400 text-blue-400 px-10 py-4 rounded-xl font-bold hover:bg-blue-400 hover:text-white transition-all duration-500 transform hover:scale-105 font-space tracking-wide relative overflow-hidden flex items-center justify-center"
              >
                <span className="relative z-10">Discover Our Mission</span>
                <ArrowRight className="ml-3 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </Link>
              <Link
                to="/events"
                className="group border-2 border-blue-400 text-blue-400 px-10 py-4 rounded-xl font-bold hover:bg-blue-400 hover:text-white transition-all duration-500 transform hover:scale-105 font-space tracking-wide relative overflow-hidden flex items-center justify-center"
              >
                <span className="relative z-10">Explore Events</span>
                <ArrowRight className="ml-3 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </Link>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 1 }}
              className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <div className="flex flex-col items-center text-blue-200">
                <span className="text-xs font-mono tracking-widest mb-2">SCROLL TO EXPLORE</span>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center"
                >
                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-1 h-3 bg-blue-400 rounded-full mt-2"
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

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

      {/* Why E-Cell Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-blue-600 mb-4 tracking-widest font-mono text-sm font-bold">// WHY CHOOSE US</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-space">Why E-Cell?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gray-50 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4 font-space">Inspiration</h3>
              <p className="text-gray-700 font-body leading-relaxed text-lg">We ignite a passion for innovation and problem-solving among students.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-50 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4 font-space">Growth</h3>
              <p className="text-gray-700 font-body leading-relaxed text-lg">We provide the tools, resources, and networks to help student startups thrive.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gray-50 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4 font-space">Connection</h3>
              <p className="text-gray-700 font-body leading-relaxed text-lg">We create an ecosystem where students, faculty, industry leaders, and investors collaborate to drive success.</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-gray-700 max-w-4xl mx-auto text-xl font-body leading-relaxed">
              Join us to connect, learn, and grow in a community of like-minded innovators. Follow our page for updates on upcoming events, workshops, and startup opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-blue-600 mb-4 tracking-widest font-mono text-sm font-bold">// WHAT WE OFFER</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space">
              What We <span className="text-blue-600">Offer</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-body">
              Discover the opportunities and resources available to help you build your entrepreneurial journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-space">{feature.title}</h3>
                <p className="text-gray-700 font-body leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
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
            <p className="text-blue-400 mb-4 tracking-widest font-mono text-sm font-bold">// JOIN THE MOVEMENT</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-space">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto font-body">
              Join our community of innovators and entrepreneurs. Let's build the future together.
            </p>
            <JoinInfoPopover>
              <a
                href="https://forms.gle/Jg2szi9CoK6sNbE97"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join E-Cell DYPIU — Join our mailing list"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center font-space"
              >
                Join E-Cell DYPIU
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </JoinInfoPopover>
          </motion.div>
        </div>
      </section>


    </div>
  );
};

export default Home;