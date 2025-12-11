import { Link } from 'react-router-dom'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      features: ['React & Next.js', 'Node.js Backend', 'API Integration', 'Performance Optimization'],
      link: '/web-development'
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['React Native', 'iOS Development', 'Android Development', 'App Store Deployment'],
      link: '/mobile-apps'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that provide exceptional user experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      link: '/ui-ux'
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions.',
      features: ['AWS & Azure', 'DevOps', 'CI/CD Pipelines', 'Monitoring & Analytics'],
      link: '/consulting'
    },
    {
      icon: '🔒',
      title: 'Security Consulting',
      description: 'Comprehensive security audits and implementation of best practices.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Data Protection'],
      link: '/consulting'
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights and business intelligence.',
      features: ['Data Visualization', 'Business Intelligence', 'Machine Learning', 'Reporting'],
      link: '/consulting'
    }
  ]

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">
            Comprehensive solutions to help your business thrive in the digital age
          </p>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <Link to={service.link} className="service-button">Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Discovery</h3>
              <p>We understand your needs, goals, and challenges</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Planning</h3>
              <p>We create a detailed roadmap and strategy</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Development</h3>
              <p>We build your solution with agile methodology</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Launch</h3>
              <p>We deploy and monitor your solution</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

