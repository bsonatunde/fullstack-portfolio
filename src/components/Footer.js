import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-branding">
          <div className="footer-logo">
            <span className="footer-logo-mark">B</span>
          </div>
          <p className="footer-copy">
            Crafted by Bolaji Onatunde with a focus on clean design, strong interactions, and reliable delivery.
          </p>
        </div>

        <div className="footer-links-group">
          <h4>Explore</h4>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact-group">
          <h4>Connect</h4>
          <a href="mailto:onatunde.samuel@gmail.com">onatunde.samuel@gmail.com</a>
          <div className="footer-social">
            <a href="https://github.com/bsonatunde" target="_blank" rel="noopener noreferrer" aria-label="Github">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/bolaji-onatunde-b42130100/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="mailto:onatunde.samuel@gmail.com" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} B. All rights reserved.</p>
        <p className="footer-love">
          Made with <Heart size={14} className="heart" /> for modern digital products.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
