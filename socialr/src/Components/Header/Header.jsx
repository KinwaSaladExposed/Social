import React from 'react';
import './Header.css';
import Logo from '../../img/DP_Logo.png';

function Header() {
  return (
    <div className="hd">
      <img src={Logo} className="LG"/>
    </div>
  );
}

export default Header;