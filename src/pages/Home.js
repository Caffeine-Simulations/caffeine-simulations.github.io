// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import './styles/Home.css';
import { Link } from 'react-router-dom';

function Home() {
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/news/index.json`)
      .then(res => res.json())
      .then(all => {
        // take the first three entries (already sorted newest → oldest)
        setLatestNews(all.slice(0, 3));
      })
      .catch(err => console.error('Failed loading news index:', err));
  }, []);

  return (
    <div className="home-container">
      {/* Hero section */}
      <section className="hero">
        <h1>Welcome to Caffeine Simulations</h1>
        <p>Empowering innovation and collaboration in aerospace simulation.</p>
        <Link to="/about-us" className="cta-button">Learn More</Link>
      </section>

      {/* Feature cards */}
      <section className="features">
        <div className="feature-card">
          <h2>Mods</h2>
          <p>Explore our latest aircraft mods and updates.</p>
          <Link to="/mods" className="feature-link">View Mods</Link>
        </div>
        <div className="feature-card">
          <h2>Community</h2>
          <p>Join our forums and contribute to discussions.</p>
          <Link to="/contact-us" className="feature-link">Get in Touch</Link>
        </div>
        <div className="feature-card">
          <h2>Support Us</h2>
          <p>Learn how you can support our projects.</p>
          <Link to="/about-us" className="feature-link">Support</Link>
        </div>
      </section>

      {/* News section */}
      <section className="news">
        <h2>Latest News</h2>
        <div className="news-articles">
          {latestNews.map(article => (
            <article key={article.slug} className="news-article">
              {article.image && (
                <img
                  src={`${process.env.PUBLIC_URL}/news/images/${article.image}`}
                  alt={article.title}
                  className="news-image"
                />
              )}
              <h3>{article.title}</h3>
              <p>{article.summary}</p>
              <Link to={`/news/${article.slug}`} className="news-link">
                Read More
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
