// src/pages/Home.js
import React from 'react';
import './styles/Home.css';
import { Link } from 'react-router-dom';

function Home() {
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
          <article className="news-article">
            <img src="/images/news/front_cockpit_1.png" alt="T-38C Talon Model" className="news-image" />
            <h3>Cockpit 3D model completed</h3>
            <p>Our highly detailed 3D model of the T-38C cockpit has been completed. Built using over 300 reference photos and a 3D scan.</p>
            <Link to="/news/cockpit_model" className="news-link">Read More</Link>
          </article>
          <article className="news-article">
            <img src="/images/news/external_1.png" alt="T-38C Talon Model" className="news-image" />
            <h3>External Model Progress</h3>
            <p>Check out the progress of our external model, featuring the PMP engine intakes.</p>
            <Link to="/news/external_model" className="news-link">Read More</Link>
          </article>
          <article className="news-article">
            {/* <img src="/images/news/discord-growth.jpg" alt="Discord Community" className="news-image" /> */}
            <h3>Announcing our YouTube Channel</h3>
            <p>We're proud to announce our new YouTube channel, showcasing all of our progress.</p>
            <a href="https://www.youtube.com/@CaffeineSimulations" target="_blank" rel="noopener noreferrer" className="news-link">Watch Now</a>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Home;