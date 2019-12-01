import React from 'react';
import { Link } from 'gatsby'


const NavLink = ({ children, to, activeStyling }) => {
  return (
    <Link className="navbar-item" activeStyle={activeStyling} to={to}>
      {children}
    </Link>
  );
};
 
export default NavLink;
