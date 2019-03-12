import React from "react";
import { NavBarContainer, NavItem } from "./styled";
const NavBar = () => {
  return (
    <>
      <NavBarContainer>
        <NavItem>Home</NavItem>
        <NavItem>Services</NavItem>
        <NavItem>FAQ's</NavItem>
        <NavItem>Commercial</NavItem>
        <NavItem>Book Now!</NavItem>
      </NavBarContainer>
    </>
  );
};

export default NavBar;
