import './ServicePage.css'

const Support = () => {
  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="container">
          <h1 className="page-title">Support & Maintenance</h1>
          <p className="page-subtitle">
            Reliable support and maintenance services to keep your systems running smoothly
          </p>
        </div>
      </section>

      <section className="service-content">
        <div className="container">
          <div className="service-details">
            <div className="service-main">
              <h2>24/7 Support for Your Business</h2>
              <p>
                Our support and maintenance services ensure your applications and systems 
                remain secure, up-to-date, and performing optimally. We provide comprehensive 
                support to minimize downtime and maximize your business productivity.
              </p>

              <h3>Support Services</h3>
              <div className="expertise-grid">
                <div className="expertise-item">
                  <div className="expertise-icon">🛠️</div>
                  <h4>Technical Support</h4>
                  <p>Round-the-clock technical assistance</p>
                </div>
                <div className="expertise-item">
                  <div className="expertise-icon">🔄</div>
                  <h4>Maintenance</h4>
                  <p>Regular updates and system maintenance</p>
                </div>
                <div className="expertise-item">
                  <div className="expertise-icon">🐛</div>
                  <h4>Bug Fixes</h4>
                  <p>Quick resolution of issues and bugs</p>
                </div>
                <div className="expertise-item">
                  <div className="expertise-icon">📈</div>
                  <h4>Performance Monitoring</h4>
                  <p>Continuous monitoring and optimization</p>
                </div>
              </div>

              <h3>What We Provide</h3>
              <ul className="service-list">
                <li>24/7 technical support and monitoring</li>
                <li>Regular security updates and patches</li>
                <li>Performance optimization and tuning</li>
                <li>Backup and disaster recovery</li>
                <li>Feature enhancements and improvements</li>
                <li>Documentation and training</li>
              </ul>
            </div>

            <div className="service-sidebar">
              <div className="sidebar-card">
                <h3>Get Started</h3>
                <p>Need ongoing support? Let's discuss a support plan for your business.</p>
                <a href="/contact" className="sidebar-button">Contact Us</a>
              </div>
              <div className="sidebar-card">
                <h3>Support Plans</h3>
                <ul className="tech-list">
                  <li>Basic Support</li>
                  <li>Standard Support</li>
                  <li>Premium Support</li>
                  <li>Enterprise Support</li>
                  <li>Custom Plans</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Support

