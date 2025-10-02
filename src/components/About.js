import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, Coffee, Heart } from 'lucide-react';
import './About.css';

const About = () => {
  const stats = [
    { icon: <Award size={24} />, number: '3+', label: 'Years Experience' },
    { icon: <Coffee size={24} />, number: '50+', label: 'Projects Completed' },
    { icon: <Heart size={24} />, number: '100%', label: 'Client Satisfaction' },
    { icon: <User size={24} />, number: '20+', label: 'Happy Clients' }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate developer with expertise in both web and mobile technologies
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="about-card">
              <h3>My Journey</h3>
              <p>
                I'm Bolaji Onatunde, a passionate fullstack and mobile developer with expertise in creating 
                modern web applications and mobile solutions. With a strong foundation in both frontend and 
                backend technologies, I deliver exceptional user experiences and robust functionality.
              </p>
              <p>
                My expertise spans from frontend development with modern frameworks to backend API development, 
                database design, and mobile app development. I believe in writing clean, maintainable code and 
                creating user experiences that delight and engage users.
              </p>
              <p>
                When I'm not coding, I enjoy staying up-to-date with the latest technology trends, contributing 
                to open-source projects, and collaborating with fellow developers to build amazing products.
              </p>
              
              <div className="about-highlights">
                <h4>What I Bring:</h4>
                <ul>
                  <li>Full-stack web development expertise</li>
                  <li>Mobile app development (React Native, Flutter)</li>
                  <li>Modern JavaScript frameworks and libraries</li>
                  <li>Database design and optimization</li>
                  <li>API development and integration</li>
                  <li>Agile development methodologies</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
