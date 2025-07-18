import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Card.css';

function Card({ image, title, link, description }) {
  const isExternal = link && (link.startsWith('http://') || link.startsWith('https://'));

  return (
    <div className="card">
      {isExternal ? (
        <a href={link} className="card-link" target="_blank" rel="noopener noreferrer">
          <div className="card-image-container">
            <img src={image} alt={title} className="card-image" />
          </div>
          <div className="card-content">
            <div className="card-title">{title}</div>
            <div className="card-description">{description}</div>
          </div>
        </a>
      ) : (
        <Link to={link} className="card-link">
          <div className="card-image-container">
            <img src={image} alt={title} className="card-image" />
          </div>
          <div className="card-content">
            <div className="card-title">{title}</div>
            <div className="card-description">{description}</div>
          </div>
        </Link>
      )}
      {isExternal ? (
        <a href={link} className="view-details-button" target="_blank" rel="noopener noreferrer">
          View Details
        </a>
      ) : (
        <Link to={link} className="view-details-button">
          View Details
        </Link>
      )}
    </div>
  );
}

export default Card;
