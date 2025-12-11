import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
    const links = [
      { label: "Home", path: "/" },
      { label: "Services", path: "/services" },
      { label: "Contact", path: "/contact" },
      { label: "Portfolio", path: "/portfolio" },
      { label: "Blog", path: "/blog" },
    ];

    return (
      <div className="not-found-page">
        <section className="not-found-hero">
          <div className="not-found-container">
            <div className="code-404">404</div>
            <h1 className="page-title">Page Not Found</h1>
            <p className="page-subtitle">
              The page you are looking for doesn’t exist or has been moved.
            </p>
            <div className="not-found-actions">
              <Link to="/" className="btn-primary">
                Go Home
              </Link>
            </div>
          </div>
        </section>

        <section className="not-found-content">
          <div className="not-found-container">
            <h2 className="section-title">Explore Popular Pages</h2>
            <div className="link-grid">
              {links.map((l) => (
                <Link key={l.path} to={l.path} className="link-card">
                  <span className="link-label">{l.label}</span>
                  <span className="arrow">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
};

export default NotFound;
