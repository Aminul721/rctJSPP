import { useState } from 'react'
import './Portfolio.css'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      category: 'web',
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with advanced features',
      image: '🛒',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      category: 'mobile',
      title: 'Fitness App',
      description: 'Mobile app for tracking workouts and nutrition',
      image: '💪',
      tags: ['React Native', 'Firebase']
    },
    {
      id: 3,
      category: 'web',
      title: 'Corporate Website',
      description: 'Professional website for enterprise client',
      image: '🏢',
      tags: ['Next.js', 'TypeScript']
    },
    {
      id: 4,
      category: 'design',
      title: 'Brand Identity',
      description: 'Complete brand redesign and visual identity',
      image: '🎨',
      tags: ['UI/UX', 'Branding']
    },
    {
      id: 5,
      category: 'mobile',
      title: 'Social Media App',
      description: 'Social networking platform with real-time features',
      image: '📱',
      tags: ['React Native', 'GraphQL']
    },
    {
      id: 6,
      category: 'web',
      title: 'SaaS Dashboard',
      description: 'Analytics dashboard for SaaS platform',
      image: '📊',
      tags: ['React', 'D3.js', 'AWS']
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'design', label: 'Design' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="portfolio-page">
      <section className="portfolio-hero">
        <div className="container">
          <h1 className="page-title">Our Portfolio</h1>
          <p className="page-subtitle">
            Showcasing our best work and successful projects
          </p>
        </div>
      </section>

      <section className="portfolio-content">
        <div className="container">
          <div className="portfolio-filters">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="portfolio-item">
                <div className="portfolio-image">
                  <div className="image-placeholder">{project.image}</div>
                  <div className="portfolio-overlay">
                    <a href="#" className="portfolio-link">View Project</a>
                  </div>
                </div>
                <div className="portfolio-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="portfolio-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Team Members</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio

