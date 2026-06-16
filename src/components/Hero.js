import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <span className="hero-dot hero-dot-1" />
        <span className="hero-dot hero-dot-2" />
      </div>

      <div className="container">
        <div className="hero-inner">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-eyebrow">BSONAT</div>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Hi, I&apos;m <span>Bolaji Onatunde</span>
            </motion.h1>

            <motion.p
              className="hero-role"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              Fullstack & Mobile Developer at <span>BSONAT</span>
            </motion.p>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I build dependable digital products with clean code, intuitive interfaces, and a focus on real business results.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
            >
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </motion.div>

            <motion.div
              className="hero-social"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <a href="https://github.com/bsonatunde" target="_blank" rel="noopener noreferrer">
                <Github size={22} />
              </a>
              <a href="https://www.linkedin.com/in/bolaji-onatunde-b42130100/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={22} />
              </a>
              <a href="mailto:onatunde.samuel@gmail.com">
                <Mail size={22} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-photo-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <div className="hero-photo-frame">
              <img src={`${process.env.PUBLIC_URL}/picture.jpg`} alt="Bolaji Onatunde" className="hero-photo-image" />
            </div>
            <div className="hero-photo-caption">
              <span>Bolaji Onatunde</span>
              <small>Fullstack & Mobile Developer</small>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <a href="#about">
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
