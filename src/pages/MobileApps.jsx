import './ServicePage.css'

const MobileApps = () => {
  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="container">
          <h1 className="page-title">Mobile App Development</h1>
          <p className="page-subtitle">
            Native and cross-platform mobile applications for iOS and Android
          </p>
        </div>
      </section>

      <section className="service-content">
        <div className="container">
          <div className="service-details">
            <div className="service-main">
              <h2>Reach Your Users Anywhere</h2>
              <p>
                We create mobile applications that provide exceptional user experiences on both 
                iOS and Android platforms. Our apps are fast, intuitive, and designed to engage 
                your audience effectively.
              </p>

              <h3>Our Services</h3>
              <div className="expertise-grid">
                <div className="expertise-item">
                  <div className="expertise-icon">📱</div>
                  <h4>React Native</h4>
                  <p>Cross-platform development for iOS and Android</p>
                </div>
                <div className="expertise-item">
                  <div className="expertise-icon">🍎</div>
                  <h4>iOS Development</h4>
                  <p>Native iOS apps with Swift and SwiftUI</p>
                </div>
                <div className="expertise-item">
                  <div className="expertise-icon">🤖</div>
                  <h4>Android Development</h4>
                  <p>Native Android apps with Kotlin and Jetpack</p>
                </div>
                <div className="expertise-item">
                  <div className="expertise-icon">🚀</div>
                  <h4>App Store Deployment</h4>
                  <p>Complete deployment and publishing support</p>
                </div>
              </div>

              <h3>What We Build</h3>
              <ul className="service-list">
                <li>Consumer mobile applications</li>
                <li>Enterprise mobile solutions</li>
                <li>E-commerce mobile apps</li>
                <li>Social networking apps</li>
                <li>Fitness and health apps</li>
                <li>On-demand service apps</li>
              </ul>
            </div>

            <div className="service-sidebar">
              <div className="sidebar-card">
                <h3>Get Started</h3>
                <p>Have an app idea? Let's bring it to life on mobile platforms.</p>
                <a href="/contact" className="sidebar-button">Contact Us</a>
              </div>
              <div className="sidebar-card">
                <h3>Technologies</h3>
                <ul className="tech-list">
                  <li>React Native</li>
                  <li>Swift</li>
                  <li>Kotlin</li>
                  <li>Flutter</li>
                  <li>Firebase</li>
                  <li>GraphQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MobileApps

