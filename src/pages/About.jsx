import JoinInfoPopover from '../components/JoinInfoPopover';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Lightbulb,
  TrendingUp,
  Globe
} from 'lucide-react';

const About = () => {
  // Ensure page starts from top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We foster creative thinking and encourage innovative solutions to real-world problems.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and building strong entrepreneurial communities.',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'We are committed to continuous learning and personal development of our members.',
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'We strive to create positive change in society through entrepreneurial ventures.',
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Inceptio\'25',
      description: 'Successfully completed our flagship entrepreneurship event at DYPIU',
    },
    {
      icon: TrendingUp,
      title: 'Elevate\'25',
      description: 'Organized startup acceleration and mentorship program',
    },
    {
      icon: Lightbulb,
      title: 'SIH Internal',
      description: 'Conducted Smart India Hackathon internal competition at DYPIU',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-blue-400 mb-4 tracking-widest font-mono text-sm">// ABOUT US</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-space">
              About <span className="text-blue-400">E-Cell DYPIU</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto font-body">
              Empowering students to become successful entrepreneurs through innovation, 
              mentorship, and real-world experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <p className="text-blue-600 mb-4 tracking-widest font-mono text-sm font-bold">// OVERVIEW</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space">DYPIU Entrepreneurship Cell (E-Cell)</h2>
              <h3 className="text-2xl font-bold text-blue-600 mb-8 font-space">Empowering Innovation, Building Future Leaders</h3>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-8 text-xl leading-relaxed font-body text-center">
                A dynamic, student-led platform dedicated to cultivating entrepreneurship and innovation. Our mission is to inspire and support students to explore their entrepreneurial ambitions, develop their ideas, and build sustainable ventures.
              </p>

              <div className="mb-10">
                <h4 className="text-2xl font-bold text-gray-900 mb-6 font-space text-center">What We Do</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h5 className="font-bold text-blue-600 mb-3 font-space">Startup Pitches & Competitions</h5>
                    <p className="text-gray-700 font-body leading-relaxed">We organize pitch events where students showcase their startup ideas to investors and industry leaders.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h5 className="font-bold text-blue-600 mb-3 font-space">Workshops & Mentorship</h5>
                    <p className="text-gray-700 font-body leading-relaxed">We conduct hands-on workshops and connect students with experienced mentors to help refine their business models and strategies.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h5 className="font-bold text-blue-600 mb-3 font-space">Networking Opportunities</h5>
                    <p className="text-gray-700 font-body leading-relaxed">We create spaces for students to meet industry professionals, investors, and fellow entrepreneurs to foster collaboration and knowledge-sharing.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h5 className="font-bold text-blue-600 mb-3 font-space">Incubation & Acceleration</h5>
                    <p className="text-gray-700 font-body leading-relaxed">Through strategic partnerships with incubators and accelerators, we support startups in scaling and growth.</p>
                  </div>
                </div>
              </div>

              <div className="mb-10">
                <h4 className="text-2xl font-bold text-gray-900 mb-6 font-space text-center">Why E-Cell?</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-blue-50 rounded-xl">
                    <h5 className="text-xl font-bold text-blue-600 mb-3 font-space">Inspiration</h5>
                    <p className="text-gray-700 font-body leading-relaxed">We ignite a passion for innovation and problem-solving among students.</p>
                  </div>
                  <div className="text-center p-6 bg-blue-50 rounded-xl">
                    <h5 className="text-xl font-bold text-blue-600 mb-3 font-space">Growth</h5>
                    <p className="text-gray-700 font-body leading-relaxed">We provide the tools, resources, and networks to help student startups thrive.</p>
                  </div>
                  <div className="text-center p-6 bg-blue-50 rounded-xl">
                    <h5 className="text-xl font-bold text-blue-600 mb-3 font-space">Connection</h5>
                    <p className="text-gray-700 font-body leading-relaxed">We create an ecosystem where students, faculty, industry leaders, and investors collaborate to drive success.</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-xl leading-relaxed font-body text-center mb-12">
                Join us to connect, learn, and grow in a community of like-minded innovators. Follow our page for updates on upcoming events, workshops, and startup opportunities.
              </p>
            </div>

            {/* Team Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center"
            >
              <div className="w-full max-w-2xl h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/ecell-team-image.jpg" 
                  alt="E-Cell DYPIU Team"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-primary rounded-2xl items-center justify-center shadow-2xl hidden">
                  <div className="text-white text-center">
                    <Users className="w-24 h-24 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold font-space">E-Cell DYPIU Team</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-blue-600 mb-4 tracking-widest font-mono text-sm font-bold">// OUR PURPOSE</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space">
              Mission & <span className="text-blue-600">Vision</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 font-space">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed text-lg font-body">
                To cultivate an entrepreneurial mindset among students by providing 
                them with the necessary resources, mentorship, and platform to 
                transform their innovative ideas into successful ventures that 
                create value for society.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 font-space">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed text-lg font-body">
                To be recognized as the leading entrepreneurship cell that produces 
                successful entrepreneurs who contribute to economic growth and social 
                development, making DYPIU a hub of innovation and entrepreneurship.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-blue-600 mb-4 tracking-widest font-mono text-sm font-bold">// CORE PRINCIPLES</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space">
              Our <span className="text-blue-600">Values</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-body">
              The principles that guide our actions and shape our community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 rounded-xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-space">{value.title}</h3>
                <p className="text-gray-700 font-body leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-blue-400 mb-4 tracking-widest font-mono text-sm font-bold">// SUCCESS METRICS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-space">
              Our Achievements
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto font-body">
              Milestones that reflect our commitment to excellence and impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg p-8 rounded-xl text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 font-space">{achievement.title}</h3>
                </div>
                <p className="text-blue-100 font-body leading-relaxed">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-blue-600 mb-4 tracking-widest font-mono text-sm font-bold">// JOIN THE MOVEMENT</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space">
              Ready to Join Our Journey?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-body">
              Become part of a community that's shaping the future of entrepreneurship. 
              Your journey starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <JoinInfoPopover>
                <a
                  href="https://forms.gle/Jg2szi9CoK6sNbE97"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join E-Cell DYPIU — Join our mailing list"
                  className="bg-gradient-primary text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-space"
                >
                  Join E-Cell DYPIU
                </a>
              </JoinInfoPopover>
              <a
                href="/events"
                className="bg-gradient-primary text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-space"
              >
                View Events
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;