import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../images/assets/planet.svg';

const Header = () => (
  <ul className="">
    <li>
      <img src={planet} alt="logo" />
      <h1>Space Travelers&apos; Hub</h1>
    </li>
    <li className="">
      <NavLink to="/rocket">Rocket</NavLink>
      <NavLink to="/mission">Mission</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </li>
  </ul>
);

export default Header;
