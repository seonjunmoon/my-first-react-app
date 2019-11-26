import React from 'react';
import logo from '../logo.svg';

function Header() {
  return (
    <div className="Header">
        <img src={logo} className="Header-logo" alt="logo" />
    </div>
  );
}

export default Header;
