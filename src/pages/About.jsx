import './About.css'

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">
            We are a team of passionate professionals dedicated to delivering excellence
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Founded with a vision to transform the digital landscape, YourBrand has been 
                at the forefront of innovation for over a decade. We combine creativity with 
                cutting-edge technology to deliver solutions that make a real difference.
              </p>
              <p>
                Our team of experts brings together diverse skills and experiences, working 
                collaboratively to solve complex challenges and create exceptional experiences 
                for our clients worldwide.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span>📊</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Innovation</h3>
              <p>We constantly push boundaries and explore new possibilities to stay ahead of the curve.</p>
            </div>
            <div className="value-card">
              <h3>Integrity</h3>
              <p>We build trust through transparency, honesty, and ethical business practices.</p>
            </div>
            <div className="value-card">
              <h3>Excellence</h3>
              <p>We strive for perfection in every project, ensuring the highest quality standards.</p>
            </div>
            <div className="value-card">
              <h3>Collaboration</h3>
              <p>We believe in the power of teamwork and working closely with our clients.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👤</div>
              <h3>John Doe</h3>
              <p className="member-role">CEO & Founder</p>
              <p className="member-bio">Visionary leader with 15+ years of experience</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👤</div>
              <h3>Jane Smith</h3>
              <p className="member-role">CTO</p>
              <p className="member-bio">Tech expert specializing in modern architectures</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👤</div>
              <h3>Mike Johnson</h3>
              <p className="member-role">Lead Designer</p>
              <p className="member-bio">Creative mind behind our stunning designs</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👤</div>
              <h3>Sarah Williams</h3>
              <p className="member-role">Head of Operations</p>
              <p className="member-bio">Ensuring smooth operations and client satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

