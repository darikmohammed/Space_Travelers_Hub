import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../img/planet.png';
import './Nav.css';

const Nav = () => (
  <>
    <nav className="nav-menus">
      <Link to="/">
        <img src={logoImage} alt="logo" className="logo" />
      </Link>
      <ul>
        <Link to="/">
          <li>Rockets</li>
        </Link>
        <Link to="/missions">
          <li>Missions</li>
        </Link>
        <Link to="/myprofile">
          <li>My Profile</li>
        </Link>
      </ul>
    </nav>
  </>
);

export default Nav;
