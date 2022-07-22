import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';
import logoImage from '../../img/planet.png';
import './Nav.css';

const Nav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <>
      <nav className="navigation">
        <NavLink to="/" className="logo-link">
          <img src={logoImage} alt="logo" className="logo" />
          <h2>Space Travelers&apos; Hub</h2>
        </NavLink>
        <div className={isNavExpanded
          ? 'navigation-menu expanded'
          : 'navigation-menu'}
        >
          <ul>
            <NavLink
              to="/"
              onClick={() => setIsNavExpanded(!isNavExpanded)}
            >
              <li>Rockets</li>
            </NavLink>
            <NavLink
              to="/missions"
              onClick={() => setIsNavExpanded(!isNavExpanded)}
            >
              <li>Missions</li>
            </NavLink>
            <NavLink
              to="/myprofile"
              onClick={() => setIsNavExpanded(!isNavExpanded)}
            >
              <li>My Profile</li>
            </NavLink>
          </ul>
        </div>
        <button
          type="button"
          className="hamburguer"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <BiMenuAltLeft className="hamburguer-icon" />
        </button>
      </nav>
    </>
  );
};

export default Nav;
