import './Blog.css'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: '10 Best Practices for React Development in 2024',
      excerpt: 'Discover the latest best practices and patterns for building modern React applications.',
      date: 'March 15, 2024',
      category: 'Development',
      image: '📝'
    },
    {
      id: 2,
      title: 'The Future of Mobile App Development',
      excerpt: 'Exploring emerging trends and technologies shaping the mobile app development landscape.',
      date: 'March 10, 2024',
      category: 'Mobile',
      image: '📱'
    },
    {
      id: 3,
      title: 'UI/UX Design Trends for 2024',
      excerpt: 'A comprehensive guide to the latest design trends that will dominate this year.',
      date: 'March 5, 2024',
      category: 'Design',
      image: '🎨'
    },
    {
      id: 4,
      title: 'Cloud Migration: A Complete Guide',
      excerpt: 'Everything you need to know about migrating your applications to the cloud.',
      date: 'February 28, 2024',
      category: 'Cloud',
      image: '☁️'
    },
    {
      id: 5,
      title: 'Security Best Practices for Web Applications',
      excerpt: 'Essential security measures every developer should implement in their web apps.',
      date: 'February 20, 2024',
      category: 'Security',
      image: '🔒'
    },
    {
      id: 6,
      title: 'Getting Started with TypeScript',
      excerpt: 'A beginner-friendly introduction to TypeScript and its benefits for JavaScript developers.',
      date: 'February 15, 2024',
      category: 'Development',
      image: '📘'
    }
  ]

  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="container">
          <h1 className="page-title">Our Blog</h1>
          <p className="page-subtitle">
            Insights, tutorials, and updates from our team
          </p>
        </div>
      </section>

      <section className="blog-content">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-image">{post.image}</div>
                <div className="blog-card-content">
                  <div className="blog-meta">
                    <span className="blog-category">{post.category}</span>
                    <span className="blog-date">{post.date}</span>
                  </div>
                  <h2 className="blog-card-title">{post.title}</h2>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <a href="#" className="blog-read-more">Read More →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog

