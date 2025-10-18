import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Tag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogDetail3 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    '/blog/3/1ST.JPG',
    '/blog/3/2ND.JPG',
    '/blog/3/3RD.JPG',
    '/blog/3/4TH.png',
    '/blog/3/5TH.JPG',
    '/blog/3/6TH.JPG',
    '/blog/3/7TH.png',
    '/blog/3/8TH.png',
    '/blog/3/10.JPG'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const blog = {
    title: 'E-Cell DYPIU at Entrepreneurship Awareness Drive, Pune – A Step Toward a Stronger Startup Ecosystem',
    author: 'E-Cell DYPIU',
    date: 'October 1, 2025',
    readTime: '7 min read',
    tags: ['Awareness', 'Startup Ecosystem', 'Pune'],
    content: `In the journey of entrepreneurship, awareness and exposure are as essential as innovation and execution. Team E-Cell DYPIU had the privilege of being invited to the Entrepreneurship Awareness Drive (EAD) Pune 2025, hosted by VIT Pune's VEDC in collaboration with IIT Kharagpur — one of India's most influential platforms for fostering startup culture among students.

The event brought together some of the most dynamic Entrepreneurship Cells, mentors, and budding founders from across reputed institutions, creating an ecosystem buzzing with ideas, collaboration, and learning.

A Gathering of Vision and Ambition

The Entrepreneurship Awareness Drive (EAD) is a nationwide initiative by IIT Kharagpur that aims to inspire and educate young minds about the world of entrepreneurship. Each year, it connects aspiring founders, student innovators, and industry experts through a series of sessions, discussions, and networking opportunities.

This year, the Pune chapter, hosted by VIT's VEDC, witnessed an incredible confluence of ideas — where curiosity met experience, and students from across institutions came together to reimagine what entrepreneurship in India can look like.

From keynote sessions by successful founders to interactive discussions on startup ecosystems, funding, and innovation, the event served as a platform for collaboration and learning. The collective enthusiasm in the hall reflected one thing clearly — India's next generation of entrepreneurs is not waiting; they are building.

E-Cell DYPIU's Participation

Representing the innovative spirit of DYPIU, E-Cell DYPIU proudly participated in this remarkable gathering. Our team engaged with founders, mentors, and fellow E-Cell leaders to exchange perspectives on nurturing entrepreneurial mindsets at the college level.

We also shared our recent initiatives — including Illuminate and FinBiz'25 — highlighting how student-led events can bridge the gap between learning and real-world application. Through these discussions, our members gained valuable insights into the latest trends, challenges, and opportunities in India's startup ecosystem.

The interactions not only strengthened our understanding but also opened doors for potential collaborations with other institutions and networks under IIT Kharagpur's EAD initiative.

Building Networks, Creating Impact

The event was a reminder that the true strength of the startup community lies in its collaboration. Beyond individual projects and college initiatives, what truly drives growth is the shared mission to build together.

At EAD Pune, our team connected with representatives from various E-Cells across the city, learning how each institution is tackling the challenges of spreading entrepreneurial awareness. The sessions on innovation, leadership, and real-world execution gave our members actionable takeaways to implement in future E-Cell activities at DYPIU.

We believe these connections will pave the way for joint workshops, mentorship programs, and inter-college startup challenges — initiatives that strengthen the overall entrepreneurial landscape of Pune's student community.`
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link
          to="/blogs"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blogs
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-space leading-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 mb-8 pb-6 border-b border-gray-200">
            <div className="flex items-center text-gray-600">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="w-5 h-5 mr-2" />
              <span>{blog.readTime}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <User className="w-5 h-5 mr-2" />
              <span>{blog.author}</span>
            </div>
          </div>

          {/* Image Slider */}
          <div className="relative mb-8 rounded-xl overflow-hidden bg-gray-100 shadow-lg">
            <div className="relative bg-white p-4">
              <div className="relative w-full flex items-center justify-center" style={{ height: '500px' }}>
                <img
                  src={images[currentImageIndex]}
                  alt={`Event photo ${currentImageIndex + 1}`}
                  style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }}
                  className="object-contain"
                />
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-xs md:text-sm font-semibold z-10">
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex gap-2 p-3 md:p-4 overflow-x-auto bg-gray-50">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    idx === currentImageIndex ? 'border-blue-600 scale-105 shadow-md' : 'border-gray-300 opacity-70 hover:opacity-100 hover:border-blue-400'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            {blog.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-gray-700 mb-6 leading-relaxed font-body">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap gap-3">
              {blog.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold"
                >
                  <Tag className="w-4 h-4 mr-2" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default BlogDetail3;
