import React from 'react';

import './styles/Header.css';

function Header({ title }) {
  return (
    <div className="header">
      <h2>{title}</h2>
    </div>
  );
}

export default Header;