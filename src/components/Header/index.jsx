import React from 'react';
import Logo from '../Logo';
import './Header.scss';

function Header() {
  const menuOps = ['Home', 'Popular', 'Series', 'Profile'];

  return (
    <nav className="header">
      <Logo />
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
