import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Tag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogDetail1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blog = {
    title: 'E-Cell DYPIU Blog: Where Ideas Meet Impact',
    author: 'E-Cell DYPIU',
    date: 'September 20, 2025',
    readTime: '5 min read',
    tags: ['E-Cell', 'Innovation', 'Impact'],
    content: `Welcome to the E-Cell DYPIU Blog — a space where entrepreneurial energy meets powerful stories, insights, and innovation. This is more than just a collection of articles; it's a platform that celebrates curiosity, creativity, and the courage to build something meaningful from scratch. Every post here is designed to spark ideas, share real experiences, and help young minds turn inspiration into action.

Startup Stories and Insights

Every great business begins with an idea — but it's the journey that defines its success. In this section, we explore the stories behind student startups, campus ventures, and innovators who dared to think differently. From dorm rooms to digital boardrooms, discover how college students are shaping the startup ecosystem with bold ideas and fearless execution.

We also share practical insights on idea validation, building minimum viable products, pitching to investors, and surviving the rollercoaster of entrepreneurship. Whether you're dreaming of your first startup or already managing your second, this is where real-world lessons meet student ambition.`
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

export default BlogDetail1;
