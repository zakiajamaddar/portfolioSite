
import React from 'react';
import {NavLink} from 'react-router-dom'


const Header = () => (
  <header>
    <h1>Portfolio</h1>

    <NavLink
      to="/"
      className={(navData) => (navData.isActive ? "is-active" : "none")}
      exact="true"
    > Home </NavLink>


    <NavLink
      to="/portfolio"
      className={(navData) => (navData.isActive ? "is-active" : "none")}
      exact="true"
    > Portfolio</NavLink>

    <NavLink
      to="/contact"
      className={(navData) => (navData.isActive ? "is-active" : "none")}
      exact="true"
    > Contact</NavLink>



      </header>
);

    export default Header;