import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, X, Save, Image as ImageIcon, Link, Tag } from 'lucide-react';
import './ProjectUpload.css';

const ProjectUpload = () => {
  const [project, setProject] = useState({
    title: '',
    description: '',
    image: '',
    category: 'frontend',
    technologies: [],
    githubUrl: '',
    liveUrl: '',
    featured: false
  });
  
  const [techInput, setTechInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const categories = [
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'fullstack', label: 'Full Stack' },
    { value: 'mobile', label: 'Mobile' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProject(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const addTechnology = () => {
    if (techInput.trim() && !project.technologies.includes(techInput.trim())) {
      setProject(prev => ({
        ...prev,
        technologies: [...prev.technologies, techInput.trim()]
      }));
      setTechInput('');
    }
  };

  const removeTechnology = (techToRemove) => {
    setProject(prev => ({
      ...prev,
      technologies: prev.technologies.filter(tech => tech !== techToRemove)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Get existing projects from localStorage
      const existingProjects = JSON.parse(localStorage.getItem('portfolioProjects') || '[]');
      
      // Add new project with ID
      const newProject = {
        ...project,
        id: Date.now(), // Simple ID generation
        createdAt: new Date().toISOString()
      };
      
      const updatedProjects = [...existingProjects, newProject];
      
      // Save to localStorage
      localStorage.setItem('portfolioProjects', JSON.stringify(updatedProjects));
      
      setMessage('Project uploaded successfully!');
      
      // Reset form
      setProject({
        title: '',
        description: '',
        image: '',
        category: 'frontend',
        technologies: [],
        githubUrl: '',
        liveUrl: '',
        featured: false
      });
      
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Error uploading project. Please try again.');
      setTimeout(() => setMessage(''), 3000);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="upload-page">
      <div className="container">
        <motion.div
          className="upload-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Upload New Project</h1>
          <p>Add a new project to your portfolio</p>
        </motion.div>

        <motion.form
          className="upload-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {message && (
            <div className={`message ${message.includes('Error') ? 'error' : 'success'}`}>
              {message}
            </div>
          )}

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="title">Project Title *</label>
              <input
                type="text"
                id="title"
                name="title"
                value={project.title}
                onChange={handleInputChange}
                required
                placeholder="Enter project title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category *</label>
              <select
                id="category"
                name="category"
                value={project.category}
                onChange={handleInputChange}
                required
              >
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description *</label>
            <textarea
              id="description"
              name="description"
              value={project.description}
              onChange={handleInputChange}
              required
              rows={4}
              placeholder="Describe your project..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">
              <ImageIcon size={20} />
              Image URL
            </label>
            <input
              type="url"
              id="image"
              name="image"
              value={project.image}
              onChange={handleInputChange}
              placeholder="https://example.com/image.jpg"
            />
            {project.image && (
              <div className="image-preview">
                <img src={project.image} alt="Project preview" />
              </div>
            )}
          </div>

          <div className="form-group">
            <label>
              <Tag size={20} />
              Technologies
            </label>
            <div className="tech-input-wrapper">
              <input
                type="text"
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                placeholder="Enter technology (e.g., React, Node.js)"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTechnology())}
              />
              <button type="button" onClick={addTechnology} className="add-tech-btn">
                Add
              </button>
            </div>
            <div className="tech-tags">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                  <button
                    type="button"
                    onClick={() => removeTechnology(tech)}
                    className="remove-tech"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="githubUrl">
                <Link size={20} />
                GitHub URL
              </label>
              <input
                type="url"
                id="githubUrl"
                name="githubUrl"
                value={project.githubUrl}
                onChange={handleInputChange}
                placeholder="https://github.com/username/repo"
              />
            </div>

            <div className="form-group">
              <label htmlFor="liveUrl">
                <Link size={20} />
                Live Demo URL
              </label>
              <input
                type="url"
                id="liveUrl"
                name="liveUrl"
                value={project.liveUrl}
                onChange={handleInputChange}
                placeholder="https://your-project.com"
              />
            </div>
          </div>

          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="featured"
                checked={project.featured}
                onChange={handleInputChange}
              />
              <span className="checkmark"></span>
              Featured Project
            </label>
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Upload className="spinning" size={20} />
                Uploading...
              </>
            ) : (
              <>
                <Save size={20} />
                Save Project
              </>
            )}
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default ProjectUpload;
