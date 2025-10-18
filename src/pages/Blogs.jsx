import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Lightbulb,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';
import JoinInfoPopover from '../components/JoinInfoPopover';

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: 'E-Cell DYPIU Blog: Where Ideas Meet Impact',
      excerpt: 'Discover how E-Cell DYPIU is transforming entrepreneurial dreams into reality through innovative programs, events, and community building.',
      author: 'E-Cell DYPIU',
      date: 'September 20, 2025',
      readTime: '5 min read',
      category: 'Entrepreneurship',
      tags: ['E-Cell', 'Innovation', 'Impact'],
      link: '/blogs/where-ideas-meet-impact'
    },
    {
      id: 2,
      title: 'E-Cell DYPIU at CEO Pune E-Cell Meetup: Uniting Entrepreneurial Minds Across Pune',
      excerpt: 'A collaborative gathering of Pune\'s brightest entrepreneurial minds, fostering connections and sharing innovative ideas across the city\'s startup ecosystem.',
      author: 'E-Cell Team',
      date: 'September 27, 2025',
      readTime: '6 min read',
      category: 'Events',
      tags: ['Meetup', 'Networking', 'CEO Pune'],
      link: '/blogs/ceo-pune-meetup'
    },
    {
      id: 3,
      title: 'E-Cell DYPIU at Entrepreneurship Awareness Drive, Pune – A Step Toward a Stronger Startup Ecosystem',
      excerpt: 'E-Cell DYPIU takes the lead in spreading entrepreneurship awareness across Pune, empowering aspiring entrepreneurs with knowledge and resources.',
      author: 'E-Cell DYPIU',
      date: 'October 1, 2025',
      readTime: '7 min read',
      category: 'Events',
      tags: ['Awareness', 'Startup Ecosystem', 'Pune'],
      link: '/blogs/entrepreneurship-awareness-drive'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-blue-400 mb-4 tracking-widest font-mono text-sm">// INSIGHTS & STORIES</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-space">E-Cell <span className="text-blue-400">Blogs</span></h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 font-body">Insights, stories, and knowledge from the entrepreneurial ecosystem at DYPIU</p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full flex items-center"><BookOpen className="w-5 h-5 mr-2 text-white" /><span className="text-white font-semibold">{blogPosts.length} Articles</span></div>
              <div className="bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full flex items-center"><TrendingUp className="w-5 h-5 mr-2 text-white" /><span className="text-white font-semibold">Entrepreneurship</span></div>
              <div className="bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full flex items-center"><Lightbulb className="w-5 h-5 mr-2 text-white" /><span className="text-white font-semibold">Innovation</span></div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <p className="text-blue-600 mb-4 tracking-widest font-mono text-sm font-bold">// LATEST POSTS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space">Featured <span className="text-blue-600">Articles</span></h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-body">Explore our collection of articles on entrepreneurship, innovation, and the startup ecosystem</p>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            {blogPosts.map((blog, index) => (
              <motion.div key={blog.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-space">{blog.title}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-600 text-sm space-x-6">
                    <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" /><span>{blog.date}</span></div>
                    <div className="flex items-center"><Clock className="w-4 h-4 mr-2" /><span>{blog.readTime}</span></div>
                  </div>
                  <Link
                    to={blog.link}
                    className="bg-gradient-primary text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-blue-400 mb-4 tracking-widest font-mono text-sm font-bold">// JOIN THE MOVEMENT</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-space">Stay Updated with E-Cell DYPIU</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto font-body">Subscribe to our newsletter and never miss insights, event updates, and opportunities from the entrepreneurial world.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <JoinInfoPopover>
                <a
                  href="https://forms.gle/Jg2szi9CoK6sNbE97"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join Our Community"
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center font-space"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Join Our Community
                </a>
              </JoinInfoPopover>
              <Link
                to="/events"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center font-space"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Explore Events
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
