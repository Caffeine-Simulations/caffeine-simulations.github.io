import React from 'react';
import './styles/ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <div className="contact-item">
          <h2>Discord</h2>
          <p><a href="https://discord.gg/example" target="_blank" rel="noopener noreferrer">Join our Discord</a></p>
        </div>
        <div className="contact-item">
          <h2>Email</h2>
          <p><a href="mailto:example@example.com">example@example.com</a></p>
        </div>
        <div className="contact-item">
          <h2>YouTube</h2>
          <p><a href="https://youtube.com/example" target="_blank" rel="noopener noreferrer">Visit our YouTube Channel</a></p>
        </div>
        {/* <!-- Add more contact items as needed --> */}
      </div>
    </div>
  );
}

export default ContactUs;
