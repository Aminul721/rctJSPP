import './ServicePage.css'

const UIUXDesign = () => {
  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="container">
          <h1 className="page-title">UI/UX Design</h1>
          <p className="page-subtitle">
            Beautiful, intuitive designs that provide exceptional user experiences
          </p>
        </div>
      </section>

      <section className="service-content">
        <div className="container">
          <div className="service-details">
            <div className="service-main">
              <h2>Design That Delights</h2>
              <p>
                Our UI/UX design team creates user-centered designs that are not only beautiful 
                but also functional and intuitive. We focus on understanding your users' needs 
                and creating experiences that exceed their expectations.
              </p>

              <h3>Our Design Process</h3>
              <div className="expertise-grid">
                <div className="expertise-item">
                  <div className="expertise-icon">🔍</div>
                  <h4>User Research</h4>
                  <p>Deep understanding of user needs and behaviors</p>
                </div>
                <div className="expertise-item">
                  <div className="expertise-icon">📐</div>
                  <h4>Wireframing</h4>
                  <p>Structural layouts and information architecture</p>
                </div>
                <div className="expertise-item">
                  <div className="expertise-icon">🎨</div>
                  <h4>Prototyping</h4>
                  <p>Interactive prototypes for testing and validation</p>
                </div>
                <div className="expertise-item">
                  <div className="expertise-icon">🎯</div>
                  <h4>Design Systems</h4>
                  <p>Consistent design language and components</p>
                </div>
              </div>

              <h3>What We Deliver</h3>
              <ul className="service-list">
                <li>User interface designs for web and mobile</li>
                <li>User experience research and strategy</li>
                <li>Interactive prototypes and mockups</li>
                <li>Design systems and style guides</li>
                <li>Usability testing and optimization</li>
                <li>Brand identity and visual design</li>
              </ul>
            </div>

            <div className="service-sidebar">
              <div className="sidebar-card">
                <h3>Get Started</h3>
                <p>Ready to improve your user experience? Let's design something amazing.</p>
                <a href="/contact" className="sidebar-button">Contact Us</a>
              </div>
              <div className="sidebar-card">
                <h3>Tools We Use</h3>
                <ul className="tech-list">
                  <li>Figma</li>
                  <li>Adobe XD</li>
                  <li>Sketch</li>
                  <li>InVision</li>
                  <li>Principle</li>
                  <li>Framer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UIUXDesign

