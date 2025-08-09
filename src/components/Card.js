import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Card.css';

function LinkOrA({ to, children, ...rest }) {
  const isExternal = to && (to.startsWith('http://') || to.startsWith('https://'));
  return isExternal ? (
    <a href={to} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  ) : (
    <Link to={to} {...rest}>{children}</Link>
  );
}

export default function Card({ image, title, link, description }) {
  return (
    <div className="card">
      <LinkOrA to={link} className="card-link">
        <div className="card-media">
          <img src={image} alt={title} />
        </div>
        <div className="card-body">
          <div className="card-title">{title}</div>
          <div className="card-description">{description}</div>
        </div>
      </LinkOrA>

      {link && (
        <LinkOrA to={link} className="view-details-button">
          View Details
        </LinkOrA>
      )}
    </div>
  );
}
