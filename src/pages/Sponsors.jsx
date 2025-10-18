import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sponsors = () => {
  const sponsors = [
    {
      name: 'Wet N Joy',
      logo: 'https://www.lonavala.wetnjoy.in/wp-content/uploads/2024/09/WetnJoy-Water-Park-and-Amusement-Park-Logo.png',
      website: 'https://www.lonavala.wetnjoy.in/'
    },
    {
      name: 'Surya Electronics',
      logo: '/logo.svg',
      website: 'https://www.suryaelectronics.in/'
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 mb-4 tracking-widest font-mono text-sm font-bold">// OUR PARTNERS</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space">
            Our <span className="text-blue-600">Sponsors</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-body">
            We're proud to partner with leading organizations that support entrepreneurship and innovation
          </p>
        </motion.div>

        <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap mb-16">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="w-64 h-32 flex items-center justify-center">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-primary rounded-lg items-center justify-center hidden">
                    <span className="text-lg font-bold text-white font-space">{sponsor.name}</span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-gray-700 mb-6 font-body text-lg">Interested in sponsoring our events and initiatives?</p>
          <Link
            to="/contact"
            className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center font-space"
          >
            Become a Sponsor
            <Star className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Sponsors;
