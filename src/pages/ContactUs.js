import React from 'react';
import './styles/ContactUs.css';
import Header from '../components/Header';

function ContactUs() {
  return (
    <div>
      <Header title="Contact Us" />
    <div className="contact-us">
      <div className="contact-info">
        <div className="contact-item">
          <h2>Discord</h2>
          <p>
            <a
              href="https://discord.gg/pVuxeRMxU3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join our Discord
            </a>
          </p>
        </div>
        <div className="contact-item">
          <h2>Email</h2>
          <p>
            <a href="mailto:caffeine.simulations@gmail.com">
                caffeine.simulations@gmail.com
            </a>
          </p>
        </div>
        <div className="contact-item">
          <h2>YouTube</h2>
          <p>
            <a
              href="https://www.youtube.com/@caffeinesimulations"
              target="_blank"
              rel="noopener noreferrer"
            >
              Subscribe to our YouTube channel
            </a>
          </p>
        </div>
        <div className="contact-item">
          <h2>Support us on Patreon</h2>
          <p>
            <a
              href="https://www.patreon.com/caffeinesimulations"
              target="_blank"
              rel="noopener noreferrer"
            >
              Help us create more free mods
            </a>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ContactUs;


