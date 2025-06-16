import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo"><Link to="/" onClick={() => setIsOpen(false)}>Caffeine Simulations</Link></div>
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>

          <li className="navbar-item">
            <Link to="/mods" onClick={() => setIsOpen(false)}>Mods</Link>
          </li>
          <li className="navbar-item">
            <Link to="/news" onClick={() => setIsOpen(false)}>News</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about-us" onClick={() => setIsOpen(false)}>About Us</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact-us" onClick={() => setIsOpen(false)}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
