import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Tag, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogDetail2 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    '/blog/2/1ST  COEP.JPG',
    '/blog/2/2ND COEP.JPG',
    '/blog/2/3RD COEP.JPG',
    '/blog/2/4TH COEP.JPG',
    '/blog/2/5TH COEP.JPG',
    '/blog/2/6TH COEP.JPG'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
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
    title: 'E-Cell DYPIU at CEO Pune E-Cell Meetup: Uniting Entrepreneurial Minds Across Pune',
    author: 'E-Cell Team',
    date: 'September 27, 2025',
    readTime: '6 min read',
    tags: ['Meetup', 'Networking', 'CEO Pune'],
    content: `Entrepreneurship begins with collaboration — and when some of the brightest young innovators gather under one roof, powerful ideas take shape. Team E-Cell DYPIU was recently invited to the CEO Pune E-Cell Meetup, an exclusive convergence of Entrepreneurship Cells from leading institutions across Pune. The event served as a melting pot of ideas, strategies, and partnerships, all centered around one shared mission — strengthening the startup ecosystem among students.

A Gathering of Visionaries

The meetup brought together E-Cell representatives from renowned universities and colleges across Pune, creating an atmosphere buzzing with creativity and leadership. It wasn't just another networking event — it was a meaningful exchange of thoughts, experiences, and initiatives that each E-Cell has been driving in their campuses.

From discussions on how to foster entrepreneurial thinking at the grassroots level to exploring collaboration models for inter-college events and startup programs, the sessions reflected the enthusiasm and dedication of every participant. Each E-Cell brought its own perspective, adding value to the collective vision of nurturing innovation and entrepreneurship in the student community.

E-Cell DYPIU's Presence and Contribution

Representing DYPIU's spirit of innovation and collaboration, E-Cell DYPIU actively engaged in discussions, shared insights from its flagship events like Illuminate and FinBiz'25, and presented ideas on how joint initiatives between Pune E-Cells can amplify student opportunities.

Our representatives emphasized the importance of experiential learning — how workshops, startup challenges, and mentorship sessions play a crucial role in converting ideas into sustainable ventures. The interaction also opened doors for future partnerships with other E-Cells, aiming to co-create platforms where student founders can learn, compete, and grow together.

Learning, Collaboration, and Future Opportunities

The meetup wasn't only about showcasing what each E-Cell has achieved — it was about what we can build together. Through brainstorming sessions, idea exchanges, and panel discussions, the event highlighted the need for stronger collaboration channels between colleges.

Some of the key takeaways from the discussions included:

Establishing a Pune E-Cell Network for shared resources and event collaborations.

Initiating inter-college startup challenges to discover and support new ideas.

Hosting cross-campus speaker sessions to make entrepreneurial learning more accessible.

Building joint mentorship databases to connect student startups with the right guidance.

Each of these ideas aligns with E-Cell DYPIU's vision — to create an ecosystem that goes beyond boundaries and encourages young entrepreneurs to build, innovate, and impact.`
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

export default BlogDetail2;
