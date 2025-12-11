import './ServicePage.css'

const WebDevelopment = () => {
  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="container">
          <h1 className="page-title">Web Development</h1>
          <p className="page-subtitle">
            Custom web applications built with modern technologies and best practices
          </p>
        </div>
      </section>

      <section className="service-content">
        <div className="container">
          <div className="service-details">
            <div className="service-main">
              <h2>Transform Your Digital Presence</h2>
              <p>
                Our web development services help you create powerful, scalable, and user-friendly 
                web applications that drive business growth. We leverage cutting-edge technologies 
                to build solutions that are fast, secure, and optimized for performance.
              </p>

              <h3>Our Expertise</h3>
              <div className="expertise-grid">
                <div className="expertise-item">
                  <div className="expertise-icon">⚛️</div>
                  <h4>React & Next.js</h4>
                  <p>Modern frontend frameworks for dynamic user interfaces</p>
                </div>
                <div className="expertise-item">
                  <div className="expertise-icon">🟢</div>
                  <h4>Node.js Backend</h4>
                  <p>Scalable server-side solutions with Node.js</p>
                </div>
                <div className="expertise-item">
                  <div className="expertise-icon">🔌</div>
                  <h4>API Integration</h4>
                  <p>Seamless integration with third-party services</p>
                </div>
                <div className="expertise-item">
                  <div className="expertise-icon">⚡</div>
                  <h4>Performance Optimization</h4>
                  <p>Lightning-fast load times and smooth user experience</p>
                </div>
              </div>

              <h3>What We Deliver</h3>
              <ul className="service-list">
                <li>Responsive web applications that work on all devices</li>
                <li>E-commerce platforms with secure payment integration</li>
                <li>Content management systems (CMS)</li>
                <li>Progressive Web Apps (PWA)</li>
                <li>Custom web portals and dashboards</li>
                <li>API development and integration</li>
              </ul>
            </div>

            <div className="service-sidebar">
              <div className="sidebar-card">
                <h3>Get Started</h3>
                <p>Ready to build your web application? Let's discuss your project requirements.</p>
                <a href="/contact" className="sidebar-button">Contact Us</a>
              </div>
              <div className="sidebar-card">
                <h3>Technologies</h3>
                <ul className="tech-list">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Node.js</li>
                  <li>TypeScript</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WebDevelopment

