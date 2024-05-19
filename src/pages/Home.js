import React from 'react';
import './styles/Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Caffeine Simulations</h1>
        <p>Your DCS T-38C Talon Developers</p>
        <Link to="/mods" className="cta-button">View Mods</Link>
        {/* <button className="cta-button">Get Started</button> */}
      </header>

      <section className="home-introduction">
        <h2>About Us</h2>
        <p>
          We are a team of casual developers and friends, commited to improving the milsim aspects of DCS World.
          through the development of the T-38C Talon and other projects. Our projects are mainly tailored to assist milsim squadron training pipelines.
        </p>
      </section>

      <section className="home-features">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <img src={`${process.env.PUBLIC_URL}/images/8th_VFW.png`} alt="Feature 1" className="feature-image" />
            <div className="feature-text">
              <h3>8th Virtual Fighter Wing</h3>
              <p>Our Mod team was formed to support the 8th Virtual Fighter wing's 90th Fighter Training Squadron</p>
              <p>For a casual Milsim squadron experience, join our <a href='https://discord.gg/wgtrmZZjdY'>discord</a></p>
            </div>
          </div>
          <div className="feature-item">
            {/* <img src={`${process.env.PUBLIC_URL}/images/feature2.jpg`} alt="Feature 2" className="feature-image" /> */}
            <div className="feature-text">
              <h3>Learning from the best</h3>
              <p>We are extremly grateful to have the support of several offical developers for DCS World. Through their help, we are hoping to produce more accurate flight models, and systems.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-news">
        <h2>Latest News</h2>
        <div className="news-item">
          <h3>News Title 1</h3>
          <p>Details about the latest news or update go here.</p>
        </div>
        <div className="news-item">
          <h3>News Title 2</h3>
          <p>Details about another important update go here.</p>
        </div>
      </section>

      <section className="home-video">
        <h2>Check Out Our Video</h2>
        <iframe 
          src="https://www.youtube.com/embed/videoseries?si=4PvQ4ZrKPIDV31i7&amp;list=PL830tAArJTMlSMiGbDG5m7TtfYgyC_cLi" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen>
        </iframe>
      </section>

      <section className="home-contact">
        <h2>Contact Us</h2>
        <p>If you have any questions or need further information, feel free to <a href="/contact-us">contact us</a>.</p>
      </section>
    </div>
  );
}

export default Home;
