import { Link } from 'react-router-dom'
import './Layout.css'

const SimpleLayout = ({ children }) => {
    const currentYear = new Date().getFullYear()

    return (
        <div className="simple-layout">
            {/* Minimal Header */}
            <header className="simple-header">
                <div className="simple-header-container">
                    <Link to="/" className="simple-logo">
                        <span className="logo-text">YourBrand</span>
                    </Link>
                    <nav className="simple-nav">
                        <Link to="/">Home</Link>
                        <Link to="/contact">Contact</Link>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="simple-content">
                {children}
            </main>

            {/* Minimal Footer */}
            <footer className="simple-footer">
                <div className="simple-footer-container">
                    <p>&copy; {currentYear} YourBrand. All rights reserved.</p>
                    <div className="simple-footer-links">
                        <Link to="/privacy">Privacy</Link>
                        <span className="separator">|</span>
                        <Link to="/terms">Terms</Link>
                        <span className="separator">|</span>
                        <Link to="/cookies">Cookies</Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default SimpleLayout
