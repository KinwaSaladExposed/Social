import React from 'react';
import './Nav.css'
import {NavLink} from 'react-router-dom'
import DefaultPP from '../../img/DefaultPP.jpg'
import msgF from './msg'


const Nav=(props)=> {
  return (
    <div className="nv"> 
      <div className="Top">
        <NavLink to='/ct'>Profile</NavLink>
        <NavLink to='/da'>Message</NavLink>
        <NavLink to='/us'>Users</NavLink>
      </div>

      <div className="Bottom">
        <div className="F1 FD">
          <img src={DefaultPP} className="FPicture" />
          {props.FNames.map((e)=><msgF name={e.name} id={e.id} />)}
        </div>
        <div className="F2 FD">
          <img src={DefaultPP} className="FPicture" />
          <p>Ronald</p>
        </div>
        <div className="F3 FD">
          <img src={DefaultPP} className="FPicture" />
          <p>Frank</p>
        </div>
      </div>
    </div>
  );
}

export default Nav;