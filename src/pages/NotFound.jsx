import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-page">
      <section className="not-found-hero">
        <div className="not-found-container">
          <div className="code-404">404</div>
          <h1 className="page-title">Page Not Found</h1>
          <p className="page-subtitle">The page you are looking for doesn’t exist or has been moved.</p>
          <div className="not-found-actions">
            <Link to="/" className="btn-primary">Go Home</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
