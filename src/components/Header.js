import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../images/assets/planet.svg';

const Header = () => (
  <div className="nav_bar_container">
    <div className="logoflex">
      <img className="logo_img" src={planet} alt="logo" />
      <h1 className="logo_title montserrat-bold">Space Travelers&apos; Hub</h1>
    </div>
    <ul className="nav_links">
      <li className="montserrat-regular navLinkWrapper">
        <NavLink className="navLink" activeClassName="selected_link" to="/rocket">Rocket</NavLink>
      </li>
      <li className="montserrat-regular navLinkWrapper">
        <NavLink className="navLink" activeClassName="selected_link" to="/mission">Mission</NavLink>
      </li>
      <li className="montserrat-regular navLinkWrapper">
        |
      </li>
      <li className="montserrat-regular navLinkWrapper">
        <NavLink className="navLink" activeClassName="selected_link" to="/profile">Profile</NavLink>
      </li>
    </ul>
  </div>
);

export default Header;
