import { motion } from 'framer-motion';
import {
    Calendar,
    Users,
    Trophy,
    Star,
    ArrowLeft,
    Brain,
    Timer
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SIH = () => {
    const eventDetails = {
        title: 'Smart India Hackathon 2025',
        subtitle: 'Internal Round',
        date: 'September 2025',
        time: 'Intensive Competition',
        location: 'DYPIU Campus',
        participants: '21 Teams',
        category: 'Hackathon',
        image: '/SIH.png',
        description: 'A prestigious national initiative aimed at fostering innovation and problem-solving among young technologists.',
        longDescription: 'Dr. D. Y. Patil International University (DYPIU) successfully organized the Internal Round of the Smart India Hackathon (SIH) 2025 — a prestigious national initiative aimed at fostering innovation and problem-solving among young technologists. The event provided a vibrant platform for students to present their innovative ideas and technological solutions addressing real-world challenges.',
        highlights: [
            {
                title: 'Student Participation',
                description: '21 student teams showcased exceptional creativity, teamwork, and technical acumen across diverse problem statements',
                icon: 'Users'
            },
            {
                title: 'Real-World Impact',
                description: 'Participants worked intensively to propose impactful solutions addressing genuine societal and industrial challenges',
                icon: 'Brain'
            },
            {
                title: 'Expert Evaluation',
                description: 'Comprehensive assessment by external panel of 5 industry experts ensuring transparent and rigorous evaluation',
                icon: 'Star'
            },
            {
                title: 'National Qualification',
                description: 'Top performing teams qualified to represent DYPIU at the Smart India Hackathon 2025 Grand Finale',
                icon: 'Trophy'
            },
            {
                title: 'Innovation Platform',
                description: 'Vibrant platform for students to present innovative technological solutions and foster problem-solving skills',
                icon: 'Code'
            },
            {
                title: 'Excellence Culture',
                description: 'Event reflects DYPIU\'s culture of excellence, practical innovation, and commitment to producing future-ready innovators',
                icon: 'Target'
            }
        ],

        problemStatements: [
            {
                category: 'Healthcare',
                title: 'Digital Health Monitoring System',
                description: 'Develop a comprehensive health monitoring solution for rural areas'
            },
            {
                category: 'Education',
                title: 'AI-Powered Learning Assistant',
                description: 'Create an intelligent tutoring system for personalized learning'
            },
            {
                category: 'Environment',
                title: 'Smart Waste Management',
                description: 'Design an IoT-based waste collection and recycling system'
            },
            {
                category: 'Agriculture',
                title: 'Precision Farming Solution',
                description: 'Build a data-driven platform for optimizing crop yields'
            }
        ],
        judges: [
            { name: 'Mr. Prasad Tarapure', role: 'Industry Expert', image: '/Php SIH Jury/Prasad Tarapure.png' },
            { name: 'Mr. Santosh Ranjan', role: 'Technology Specialist', image: '/Php SIH Jury/Santosh Ranjan.png' },
            { name: 'Ms. Megha Soneji', role: 'Innovation Consultant', image: '/Php SIH Jury/megha soneji.png' },
            { name: 'Mr. Vishal Pillai', role: 'Technical Advisor', image: '/Php SIH Jury/Vishal Pillai.png' },
            { name: 'Mr. Anand Karyekar', role: 'Business Development Expert', image: '/Php SIH Jury/Anand Karyekar.png' }
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
                                <p className="text-blue-400 mb-4 tracking-widest font-mono text-sm">// 48 HOUR HACKATHON</p>
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
                                        <Timer className="w-5 h-5 mr-2 text-blue-400" />
                                        <span className="text-white font-semibold">{eventDetails.time}</span>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-lg px-4 py-2 rounded-lg flex items-center">
                                        <Users className="w-5 h-5 mr-2 text-blue-400" />
                                        <span className="text-white font-semibold">{eventDetails.participants} Participants</span>
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

            {/* Hackathon Highlights */}
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
                            Innovation & <span className="text-blue-600">Excellence</span>
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto font-body">
                            The Internal Round brought together brilliant minds to showcase creativity, teamwork, and technical excellence
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0 * 0.1 }}
                            className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                                <span className="text-3xl">👥</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 font-space">Student Participation</h3>
                            <p className="text-gray-700 font-body leading-relaxed">21 student teams showcased exceptional creativity, teamwork, and technical acumen across diverse problem statements</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1 * 0.1 }}
                            className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                                <span className="text-3xl">🧠</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 font-space">Real-World Impact</h3>
                            <p className="text-gray-700 font-body leading-relaxed">Participants worked intensively to propose impactful solutions addressing genuine societal and industrial challenges</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 2 * 0.1 }}
                            className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                                <span className="text-3xl">⭐</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 font-space">Expert Evaluation</h3>
                            <p className="text-gray-700 font-body leading-relaxed">Comprehensive assessment by external panel of 5 industry experts ensuring transparent and rigorous evaluation</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 3 * 0.1 }}
                            className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                                <span className="text-3xl">🏆</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 font-space">National Qualification</h3>
                            <p className="text-gray-700 font-body leading-relaxed">Top performing teams qualified to represent DYPIU at the Smart India Hackathon 2025 Grand Finale</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 4 * 0.1 }}
                            className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                                <span className="text-3xl">💻</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 font-space">Innovation Platform</h3>
                            <p className="text-gray-700 font-body leading-relaxed">Vibrant platform for students to present innovative technological solutions and foster problem-solving skills</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 5 * 0.1 }}
                            className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                                <span className="text-3xl">🎯</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 font-space">Excellence Culture</h3>
                            <p className="text-gray-700 font-body leading-relaxed">Event reflects DYPIU's culture of excellence, practical innovation, and commitment to producing future-ready innovators</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Problem Statements */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <p className="text-blue-600 mb-4 tracking-widest font-mono text-sm font-bold">// PROBLEM STATEMENTS</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space">
                            Real-World <span className="text-blue-600">Challenges</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {eventDetails.problemStatements.map((problem, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                                        <Brain className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                                        {problem.category}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 font-space">{problem.title}</h3>
                                <p className="text-gray-600 font-body leading-relaxed">{problem.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Judges Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <p className="text-blue-600 mb-4 tracking-widest font-mono text-sm font-bold">// EXPERT PANEL</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space">
                            Our Esteemed <span className="text-blue-600">Judges</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {eventDetails.judges.map((judge, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="relative mb-6">
                                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-green-500 to-blue-500 shadow-lg">
                                        <img
                                            src={judge.image}
                                            alt={judge.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                                        <Star className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 font-space">{judge.name}</h3>
                                <p className="text-green-600 font-semibold font-body">{judge.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>




        </div>
    );
};

export default SIH;