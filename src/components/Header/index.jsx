import React from 'react';

import './Header.scss';

function Header() {
  const menuOps = ['Home', 'Popular', 'Series', 'Profile'];

  return (
    <nav className="header">
      <div className="header-logo">
        <p className="header-logo-red">MOVIE</p>
        <p className="header-logo-white">DOM</p>
      </div>
      <ul className="header-menu">
        {
          menuOps.map((op) => (
            <li key={op}>{op}</li>
          ))
        }
      </ul>
    </nav>
  );
}

export default Header;
