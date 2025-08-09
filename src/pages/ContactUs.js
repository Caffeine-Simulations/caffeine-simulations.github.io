import React from 'react';
import './styles/ContactUs.css';
import Header from '../components/Header';

function ContactIcon({ name }) {
  const icons = {
    discord: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.317 4.369A19.791 19.791 0 0 0 16.558 3c-.2.36-.435.85-.597 1.23a18.3 18.3 0 0 0-7.923 0C7.877 3.85 7.641 3.36 7.44 3a19.793 19.793 0 0 0-3.76 1.37C.716 8.07-.453 12.6.147 17.07A19.94 19.94 0 0 0 6.087 19c.487-.66.92-1.37 1.29-2.12-.71-.27-1.39-.61-2.03-1.01.17-.12.34-.25.5-.38 3.94 1.84 8.21 1.84 12.11 0 .17.13.33.26.5.38-.64.4-1.32.74-2.03 1.01.37.75.8 1.46 1.29 2.12a19.91 19.91 0 0 0 5.94-1.94c.63-4.83-.81-9.31-3.36-12.58ZM9.3 14.38c-1.04 0-1.89-.96-1.89-2.14 0-1.19.84-2.15 1.89-2.15 1.06 0 1.9.96 1.9 2.15 0 1.18-.85 2.14-1.9 2.14Zm5.4 0c-1.05 0-1.9-.96-1.9-2.14 0-1.19.85-2.15 1.9-2.15s1.89.96 1.89 2.15c0 1.18-.84 2.14-1.9 2.14Z"/></svg>,
    email: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"/></svg>,
    youtube: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.4 3.5 12 3.5 12 3.5s-7.4 0-9.4.6A3 3 0 0 0 .5 6.2 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c2 .6 9.4.6 9.4.6s7.4 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.7 31.7 0 0 0 24 12a31.7 31.7 0 0 0-.5-5.8ZM9.75 15.02v-6l6 3-6 3Z"/></svg>,
    patreon: <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="14.5" cy="8.5" r="5.5" /><rect x="3" y="6" width="3" height="12" rx="1.5" /></svg>,
  };
  return <span className="contact-icon" aria-hidden="true">{icons[name]}</span>;
}

function ContactCard({ icon, title, href, children }) {
  return (
    <article className="contact-item">
      <header className="contact-item-header">
        <ContactIcon name={icon} />
        <h2>{title}</h2>
      </header>
      <p className="contact-item-body">
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
        ) : children}
      </p>
    </article>
  );
}

export default function ContactUs() {
  const email = 'caffeine.simulations@gmail.com';

  return (
    <div>
      <Header title="Contact Us" />
      <main className="contact-us" aria-labelledby="contact-heading">
        <h1 id="contact-heading" className="sr-only">Contact Caffeine Simulations</h1>

        <section className="contact-layout">
          {/* LEFT: 2x2 cards */}
          <div className="cards-grid">
            <ContactCard icon="discord" title="Discord" href="https://discord.gg/pVuxeRMxU3">
              Join our Discord
            </ContactCard>
            <ContactCard icon="email" title="Email">
              <a href={`mailto:${email}`}>{email}</a>
            </ContactCard>
            <ContactCard icon="youtube" title="YouTube" href="https://www.youtube.com/@caffeinesimulations">
              Subscribe to our channel
            </ContactCard>
            <ContactCard icon="patreon" title="Patreon" href="https://www.patreon.com/caffeinesimulations">
              Help us create more free mods
            </ContactCard>
          </div>

          {/* RIGHT: embed same total size as the 2x2 grid */}
          <article className="embed-card">
            <header className="contact-item-header">
              <h2>Join the Community</h2>
            </header>
            <div className="embed-wrap">
              <iframe
                title="Discord"
                src="https://discord.com/widget?id=1154491411425657016&theme=dark"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              />
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
