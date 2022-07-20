import React from 'react';
import { NavLink } from 'react-router-dom';
import logoImage from '../../img/planet.png';
import './Nav.css';

const Nav = () => (
  <>
    <nav className="nav-menus">
      <NavLink to="/" className="logo-link">
        <img src={logoImage} alt="logo" className="logo" />
        <h2>Space Travelers&apos; Hub</h2>
      </NavLink>

      <ul>
        <NavLink to="/">
          <li>Rockets</li>
        </NavLink>
        <NavLink to="/missions">
          <li>Missions</li>
        </NavLink>
        <NavLink to="/myprofile">
          <li>My Profile</li>
        </NavLink>
      </ul>
    </nav>
  </>
);

export default Nav;
