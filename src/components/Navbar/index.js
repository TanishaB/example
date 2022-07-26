import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/About' activeStyle>
            About
          </NavLink>
          
          <NavLink to='/contactUs' activeStyle>
            Contact
          </NavLink>
          <NavLink to='/Login' activeStyle>
            Login
          </NavLink>
          <NavLink to='/Register' activeStyle>
            Register
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;