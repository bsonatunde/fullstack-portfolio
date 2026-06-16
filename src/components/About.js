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
    <section id="about" className="section about-section">
      <div className="container">
        <motion.div
          className="section-header"
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

        <div className="about-grid">
          <motion.div
            className="about-summary-card"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="about-tag">My Journey</div>
            <h3>Building modern web and mobile products with purpose</h3>
            <p>
              I'm Bolaji Onatunde, a passionate fullstack and mobile developer with expertise in creating modern web applications and mobile solutions. With a strong foundation in both frontend and backend technologies, I deliver exceptional user experiences and robust functionality.
            </p>
            <p>
              My expertise spans from frontend development with modern frameworks to backend API development, database design, and mobile app development. I believe in writing clean, maintainable code and creating user experiences that delight and engage users.
            </p>
            <p>
              When I'm not coding, I enjoy staying up-to-date with the latest technology trends, contributing to open-source projects, and collaborating with fellow developers to build amazing products.
            </p>

            <div className="about-highlights">
              <h4>What I Bring</h4>
              <ul>
                <li>Full-stack web development expertise</li>
                <li>Mobile app development (React Native, Flutter)</li>
                <li>Modern JavaScript frameworks and libraries</li>
                <li>Database design and optimization</li>
                <li>API development and integration</li>
                <li>Agile development methodologies</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="about-stats-panel"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="stats-card">
              <h4>Fast facts</h4>
              <p className="stats-description">
                A proven developer with experience across web, mobile, backend, and product delivery.
              </p>
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-block">
                    <div className="stat-icon">{stat.icon}</div>
                    <div>
                      <div className="stat-number">{stat.number}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
