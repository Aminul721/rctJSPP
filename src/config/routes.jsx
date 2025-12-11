import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Portfolio from '../pages/Portfolio'
import Contact from '../pages/Contact'
import WebDevelopment from '../pages/WebDevelopment'
import MobileApps from '../pages/MobileApps'
import UIUXDesign from '../pages/UIUXDesign'
import Consulting from '../pages/Consulting'
import Support from '../pages/Support'
import Blog from '../pages/Blog'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import TermsOfService from '../pages/TermsOfService'
import CookiePolicy from '../pages/CookiePolicy'
import NotFound from '../pages/NotFound'

// Import header components
import Header from '../components/Header'
import SimpleHeader from '../components/SimpleHeader'

// Import footer components
import Footer from '../components/Footer'
import SimpleFooter from '../components/SimpleFooter'

const routes = [
    {
        path: '/',
        element: Home,
        name: 'Home',
        header: Header,
        footer: Footer
    },
    {
        path: '/about',
        element: About,
        name: 'About',
        header: Header,
        footer: Footer
    },
    {
        path: '/services',
        element: Services,
        name: 'Services',
        header: Header,
        footer: Footer
    },
    {
        path: '/portfolio',
        element: Portfolio,
        name: 'Portfolio',
        header: Header,
        footer: Footer
    },
    {
        path: '/contact',
        element: Contact,
        name: 'Contact',
        header: Header,
        footer: Footer
    },
    {
        path: '/web-development',
        element: WebDevelopment,
        name: 'Web Development',
        header: Header,
        footer: Footer
    },
    {
        path: '/mobile-apps',
        element: MobileApps,
        name: 'Mobile Apps',
        header: Header,
        footer: Footer
    },
    {
        path: '/ui-ux',
        element: UIUXDesign,
        name: 'UI/UX Design',
        header: Header,
        footer: Footer
    },
    {
        path: '/consulting',
        element: Consulting,
        name: 'Consulting',
        header: Header,
        footer: Footer
    },
    {
        path: '/support',
        element: Support,
        name: 'Support',
        header: Header,
        footer: Footer
    },
    {
        path: '/blog',
        element: Blog,
        name: 'Blog',
        header: Header,
        footer: Footer
    },
    {
        path: '/privacy',
        element: PrivacyPolicy,
        name: 'Privacy Policy',
        header: SimpleHeader,
        footer: SimpleFooter
    },
    {
        path: '/terms',
        element: TermsOfService,
        name: 'Terms of Service',
        header: SimpleHeader,
        footer: SimpleFooter
    },
    {
        path: '/cookies',
        element: CookiePolicy,
        name: 'Cookie Policy',
        header: SimpleHeader,
        footer: SimpleFooter
    }
    ,
    {
        path: '*',
        element: NotFound,
        name: 'Not Found',
        
    }
]

export default routes
