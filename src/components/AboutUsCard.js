import React from 'react';
import PropTypes from 'prop-types';
import './styles/AboutUsCard.css';

/**
 * A simple card component displaying an image, name, role, and description.
 *
 * Props:
 * - imageSrc: URL of the image to display
 * - name: Person's name
 * - role: Person's role or title
 * - description: Short descriptive text
 */
export default function ProfileCard({ imageSrc, name, role, description }) {
  return (
    <div className="profile-card">
      <img src={imageSrc} alt={name} className="profile-card__image" />
      <div className="profile-card__content">
        <h2 className="profile-card__name">{name}</h2>
        <h3 className="profile-card__role">{role}</h3>
        <p className="profile-card__description">{description}</p>
      </div>
    </div>
  );
}

ProfileCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string,
  description: PropTypes.string,
};

ProfileCard.defaultProps = {
  role: '',
  description: '',
};
