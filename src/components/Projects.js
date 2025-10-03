import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Search, Filter } from 'lucide-react';
import './Projects.css';

// Sample projects - in a real app, this would come from an API or database
const sampleProjects = [
  {
    id: 1,
    title: 'Pacey School Solution',
    description: 'Full-stack Pacey School Solution application with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1739459365519-9d3978d884aa?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'fullstack',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com/bsonatunde/School-software-solution-dashboard',
    liveUrl: 'https://school-software-solution-dashboard.onrender.com/',
    featured: true
  },
  {
    id: 2,
    title: 'Bird Feather Game',
    description: 'Bird Feather application built with React Native. Features real-time synchronization and offline capabilities.',
    image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'mobile',
    technologies: ['React Native', 'Firebase', 'Redux'],
    githubUrl: 'https://github.com/bsonatunde',
    liveUrl: 'https://flappybirdgame-website-lr9s3gec0-bsonatundes-projects.vercel.app/',
    featured: false
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'Responsive portfolio website built with React and modern CSS. Features smooth animations and optimized performance.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
    category: 'frontend',
    technologies: ['React', 'Taiwind', 'Framer Motion'],
    githubUrl: 'https://github.com/bsonatunde/bsonatunde',
    liveUrl: 'https://bsonat.onrender.com/',
    featured: false
  },
  {
    id: 4,
    title: 'LIVE FOOTBALL SCORES',
    description: 'Frontend Live Football Scores application with React, Node.js. Built with React and integrated with Football APIs.',
    image: 'https://images.unsplash.com/photo-1486286701208-1d58e9338013?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'frontend',
    technologies: ['React', 'Chart.js', 'Football API'],
    githubUrl: 'https://github.com/bsonatunde/Livescorewebsite',
    liveUrl: 'https://livescorewebsite.vercel.app/',
    featured: true
  },
  {
    id: 5,
    title: 'Moniconverter',
    description: 'Full-stack Moniconverter  is converter tools for Pdf,Word,Images to text and so on with React, Node.js. Built with React.',
    image: 'https://media.istockphoto.com/id/1454549870/photo/file-icons-are-arranged-into-folders-concept-document-management-system-or-dms.jpg?s=1024x1024&w=is&k=20&c=jvhm1qPyHpYxXitMVOe4_6wom3pph6GAZx7hK34PMpc=',
    category: 'fullstack',
    technologies: ['React', 'Nodejs', 'OCR','API'],
    githubUrl: 'https://github.com/bsonatunde/Livescorewebsite',
    liveUrl: 'https://moniconverter.vercel.app//',
    featured: true
  }
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'fullstack', label: 'Full Stack' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'mobile', label: 'Mobile' },
    { value: 'backend', label: 'Backend' }
  ];

  useEffect(() => {
    // Load projects from localStorage or use sample data
    const storedProjects = localStorage.getItem('portfolioProjects');
    if (storedProjects) {
      const parsedProjects = JSON.parse(storedProjects);
      setProjects([...sampleProjects, ...parsedProjects]);
    } else {
      setProjects(sampleProjects);
    }
  }, []);

  useEffect(() => {
    let filtered = projects;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => 
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    setFilteredProjects(filtered);
  }, [projects, selectedCategory, searchTerm]);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            Explore my latest work and personal projects
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="projects-filters"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="search-box">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="category-filters">
            <Filter size={20} />
            {categories.map((category) => (
              <button
                key={category.value}
                className={`filter-btn ${selectedCategory === category.value ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.value)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={20} />
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            className="no-projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p>No projects found matching your criteria.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
