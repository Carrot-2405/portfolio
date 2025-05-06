'use client';

import Header from './components/Header';
import { Award, Code, Mail, Github, Linkedin, Target, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';

const RobotText = () => {
  const titles = useMemo(() => [
    "AI Enthusiast",
    "Web Developer",
    "CBSE Winner",
    "Problem Solver",
    "Tech Innovator"
  ], []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const speed = isDeleting ? 50 : 150;

    if (!isDeleting && currentText === currentTitle) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timer = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(currentTitle.slice(0, currentText.length - 1));
      } else {
        setCurrentText(currentTitle.slice(0, currentText.length + 1));
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, titles]);

  return (
    <div className="relative flex items-center justify-center mb-8">
      {/* Speech Bubble */}
      <motion.div
        className="relative bg-gray-800 rounded-2xl p-4 shadow-lg mr-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-xl font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent min-w-[200px] text-center">
          {currentText}
          <motion.span
            className="inline-block w-1 h-5 bg-blue-400 ml-1"
            animate={{
              opacity: [1, 0],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
        {/* Speech bubble tail */}
        <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-gray-800 border-b-[10px] border-b-transparent" />
      </motion.div>

      {/* Robot */}
      <motion.div
        className="relative w-24 h-24"
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Robot head */}
        <motion.div
          className="absolute w-20 h-20 bg-gray-700 rounded-xl"
          animate={{
            rotate: isDeleting ? [-2, 2, -2] : 0,
          }}
          transition={{
            duration: 0.5,
            repeat: isDeleting ? Infinity : 0,
          }}
        >
          {/* Eyes */}
          <div className="absolute top-6 left-4 w-4 h-4 bg-blue-400 rounded-full" />
          <div className="absolute top-6 right-4 w-4 h-4 bg-blue-400 rounded-full" />
          {/* Mouth */}
          <motion.div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 w-8 h-2 bg-blue-400 rounded-full"
            animate={{
              scaleY: isDeleting ? [1, 0.5, 1] : 1,
            }}
            transition={{
              duration: 0.5,
              repeat: isDeleting ? Infinity : 0,
            }}
          />
        </motion.div>
        {/* Antenna */}
        <motion.div
          className="absolute -top-4 left-1/2 -translate-x-1/2 w-1 h-4 bg-gray-700"
          animate={{
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center"
        >
          <div className="relative">
            <RobotText />
            <motion.h1 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6"
            >
              <span className="animate-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-[length:200%_auto] bg-clip-text text-transparent">
                Jay Takle
              </span>
            </motion.h1>
          </div>
          <p className="text-xl text-gray-300 mb-8">
            AI & Machine Learning Enthusiast | CBSE Winner
          </p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:your.email@example.com"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Mail className="h-6 w-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              I am a passionate developer with a deep love for coding and artificial intelligence. My journey in technology 
              has been marked by significant achievements, including winning first place in CBSE competitions for my 
              innovative AI chatbot and machine learning projects. I find immense joy in creating intelligent solutions 
              and exploring the fascinating world of AI and machine learning.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My expertise spans across web development, AI implementation, and creating user-friendly interfaces. 
              I'm particularly interested in how AI can be leveraged to create better user experiences and solve 
              real-world problems. My goal is to combine my technical skills with my passion for innovation to 
              create meaningful digital solutions.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Personal Background Section */}
      <section id="background" className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-12">Personal Background</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-start mb-6">
                <Globe className="h-8 w-8 text-blue-400 mr-4 mt-1" />
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-white">Cultural Heritage</h3>
                  <p className="text-gray-300 leading-relaxed">
                    As a proud Maharashtrian from India, I bring a rich cultural perspective to my work. 
                    My Indian heritage has instilled in me values of hard work, perseverance, and a deep 
                    appreciation for both tradition and innovation. This cultural background has shaped my 
                    approach to problem-solving and my commitment to excellence in everything I do.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-start mb-6">
                <Code className="h-8 w-8 text-blue-400 mr-4 mt-1" />
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-white">Global Perspective</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Growing up in India's diverse and dynamic environment has given me a unique perspective 
                    on technology and innovation. I combine traditional Indian values with modern technological 
                    approaches, creating solutions that are both innovative and culturally aware. This blend of 
                    perspectives helps me bring fresh ideas to every project I undertake.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Career Goals Section */}
      <section id="career" className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-12">Career Goals</h2>
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
            <div className="flex items-start mb-6">
              <Target className="h-8 w-8 text-blue-400 mr-4 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-white">BlingxBeyond</h3>
                <p className="text-gray-300 leading-relaxed">
                  I aspire to join BlingxBeyond, a leading company in the bracelet industry, where I can contribute 
                  my web development and coding expertise. My goal is to help enhance their digital presence and 
                  create innovative solutions that improve their online platform and customer experience. I'm excited 
                  about the opportunity to work with a company that values creativity and innovation in the fashion 
                  technology space.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-12"
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center mb-4">
                <Code className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-2xl font-semibold text-white">AI Chatbot</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Developed an advanced AI chatbot using natural language processing and machine learning
                techniques. The project demonstrated practical applications of AI in real-world scenarios
                and won first place in the CBSE competition.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center mb-4">
                <Code className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-2xl font-semibold text-white">Machine Learning Project</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Created an innovative machine learning solution that showcased advanced data analysis
                and predictive modeling capabilities. This project contributed to winning the CBSE
                competition and demonstrated practical applications of ML in solving real-world problems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-12"
          >
            Achievements
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-start bg-gray-800 p-8 rounded-xl shadow-lg"
            >
              <Award className="h-8 w-8 text-yellow-400 mr-4 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-white">CBSE Competition Winner</h3>
                <p className="text-gray-300 leading-relaxed">
                  Secured first place in the CBSE competition for developing an innovative AI chatbot
                  and machine learning project, showcasing technical excellence and innovation.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-start bg-gray-800 p-8 rounded-xl shadow-lg"
            >
              <Award className="h-8 w-8 text-yellow-400 mr-4 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Technical Excellence</h3>
                <p className="text-gray-300 leading-relaxed">
                  Demonstrated exceptional skills in AI and machine learning, leading to recognition
                  and success in academic competitions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-8">Get in Touch</h2>
          <p className="text-gray-300 mb-8 text-lg">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:your.email@example.com"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Jay Takle. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
