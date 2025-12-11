import './ServicePage.css'

const Consulting = () => {
  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="container">
          <h1 className="page-title">Consulting Services</h1>
          <p className="page-subtitle">
            Strategic guidance to help your business make informed technology decisions
          </p>
        </div>
      </section>

      <section className="service-content">
        <div className="container">
          <div className="service-details">
            <div className="service-main">
              <h2>Expert Technology Consulting</h2>
              <p>
                Our consulting services help businesses navigate complex technology challenges 
                and make strategic decisions that drive growth. We provide expert guidance 
                on architecture, technology selection, and digital transformation.
              </p>

              <h3>Our Consulting Services</h3>
              <div className="expertise-grid">
                <div className="expertise-item">
                  <div className="expertise-icon">🏗️</div>
                  <h4>Architecture Consulting</h4>
                  <p>Design scalable and maintainable system architectures</p>
                </div>
                <div className="expertise-item">
                  <div className="expertise-icon">💼</div>
                  <h4>Digital Transformation</h4>
                  <p>Strategic planning for digital initiatives</p>
                </div>
                <div className="expertise-item">
                  <div className="expertise-icon">📊</div>
                  <h4>Technology Assessment</h4>
                  <p>Evaluate and recommend technology solutions</p>
                </div>
                <div className="expertise-item">
                  <div className="expertise-icon">🎯</div>
                  <h4>Process Optimization</h4>
                  <p>Improve development and operational processes</p>
                </div>
              </div>

              <h3>What We Offer</h3>
              <ul className="service-list">
                <li>Technology strategy and roadmap planning</li>
                <li>System architecture design and review</li>
                <li>Code reviews and quality assessments</li>
                <li>Performance optimization consulting</li>
                <li>Team training and knowledge transfer</li>
                <li>Project management and agile coaching</li>
              </ul>
            </div>

            <div className="service-sidebar">
              <div className="sidebar-card">
                <h3>Get Started</h3>
                <p>Need expert advice? Let's discuss how we can help your business.</p>
                <a href="/contact" className="sidebar-button">Contact Us</a>
              </div>
              <div className="sidebar-card">
                <h3>Focus Areas</h3>
                <ul className="tech-list">
                  <li>Cloud Architecture</li>
                  <li>Microservices</li>
                  <li>DevOps</li>
                  <li>Security</li>
                  <li>Scalability</li>
                  <li>Best Practices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Consulting

