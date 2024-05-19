import React from 'react';
import './styles/ProgressWheelCard.css';

function ProgressWheelCard({ color, percentage, title, description }) {
  const progressStyle = {
    '--progress-color': color,
    '--progress-percent': `${percentage}%`
  };

  return (
    <div className="progress-card">
      <div className="progress-wheel" style={progressStyle}>
        <span>{percentage}%</span>
      </div>
      <div className="progress-description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProgressWheelCard;
