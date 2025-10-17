import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { 
  Mail, 
  MapPin, 
  Clock,
  Instagram,
  Linkedin
} from 'lucide-react';

const Contact = () => {
  // Ensure page starts from top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'ecell.dypiu@gmail.com',
      description: 'Send us an email anytime',
      link: 'mailto:ecell.dypiu@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'DYPIU Campus, Akurdi',
      description: 'Pune, Maharashtra 411044',
      link: 'https://maps.app.goo.gl/Hqh4zbbnfpexfRpc8'
    },
    {
      icon: Instagram,
      title: 'Follow Us',
      details: '@ecell.dypiu',
      description: 'Stay updated with our latest activities',
      link: 'https://www.instagram.com/ecell.dypiu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
    },
    {
      icon: Linkedin,
      title: 'Connect With Us',
      details: 'E-Cell DYPIU',
      description: 'Professional networking and updates',
      link: 'https://www.linkedin.com/company/ecell-dypiu/posts/?feedView=all'
    }
  ];



  const faqs = [
    {
      question: 'How can I join E-Cell DYPIU?',
      answer: 'You can join by filling out our membership form during recruitment drives or by contacting us directly.'
    },
    {
      question: 'Do I need prior business experience?',
      answer: 'No prior experience is required! We welcome students from all backgrounds who are passionate about entrepreneurship.'
    },
    {
      question: 'What events do you organize?',
      answer: 'We organize workshops, competitions, networking events, guest lectures, and our annual E-Summit.'
    },
    {
      question: 'Is there a membership fee?',
      answer: 'Basic membership is free for DYPIU students. Some premium events may have nominal participation fees.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-blue-400 mb-4 tracking-widest font-mono text-sm">// CONTACT US</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-space">
              Get in <span className="text-blue-400">Touch</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 font-body">
              Have questions? Want to join our community? We'd love to hear from you!
            </p>

          </motion.div>
        </div>
      </section>

      

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-blue-600 mb-4 tracking-widest font-mono text-sm font-bold">// REACH US</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space">
              Contact <span className="text-blue-600">Information</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-body">
              Multiple ways to reach us - choose what works best for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl text-center hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-space">{info.title}</h3>
                <p className="text-blue-600 font-semibold mb-2 font-space">{info.details}</p>
                <p className="text-gray-700 text-sm font-body">{info.description}</p>
                {info.link !== '#' && (
                  <a
                    href={info.link}
                    target={info.link.includes('instagram') || info.link.includes('linkedin') ? '_blank' : '_self'}
                    rel={info.link.includes('instagram') || info.link.includes('linkedin') ? 'noopener noreferrer' : ''}
                    className="inline-block mt-4 text-purple-600 hover:text-purple-700 font-semibold"
                  >
                    {info.link.includes('instagram') || info.link.includes('linkedin') ? 'Follow Us →' : 'Contact Now →'}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-blue-600 mb-4 tracking-widest font-mono text-sm font-bold">// LOCATION</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space">
              Find <span className="text-blue-600">Us</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-body">
              Visit us at our campus location
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white p-12 rounded-3xl shadow-2xl text-center">
              <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-8">
                <MapPin className="w-12 h-12 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-4 font-space">
                D. Y. Patil International University
              </h3>
              
              <p className="text-xl text-gray-600 mb-8 font-body leading-relaxed">
                Sector 29, Pradhikaran, Nigdi, Near Akurdi Railway Station,<br />
                Akurdi, Pune, Maharashtra 411044
              </p>
              
              <a
                href="https://maps.app.goo.gl/Hqh4zbbnfpexfRpc8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions
              </a>
              
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-600">ecell.dypiu@gmail.com</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Office Hours</h4>
                  <p className="text-gray-600">Mon-Fri: 9AM-6PM</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Campus</h4>
                  <p className="text-gray-600">DYPIU Akurdi</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-blue-600 mb-4 tracking-widest font-mono text-sm font-bold">// FAQ</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-body">
              Quick answers to common questions about E-Cell DYPIU
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-2xl hover:bg-gray-100 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-3 font-space">{faq.question}</h4>
                <p className="text-gray-700 font-body leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;