import React from 'react';
import './Nav.css'
import {NavLink} from 'react-router-dom'

function Nav() {
  return (
    <div className="nv">
      <NavLink to='/ct'>Profile</NavLink>
      <NavLink to='/da'>Message</NavLink>
      <NavLink to='/us'>Users</NavLink>
    </div>
  );
}

export default Nav;