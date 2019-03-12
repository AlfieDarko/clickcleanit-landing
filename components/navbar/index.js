import React from "react";
import { NavBarContainer, NavItem, CTAbtn } from "./styled";
const NavBar = () => {
  return (
    <>
      <NavBarContainer>
        <NavItem>Home</NavItem>
        <NavItem>Services</NavItem>
        <NavItem>FAQ's</NavItem>
        <NavItem>
          <CTAbtn>Book Now!</CTAbtn>
        </NavItem>
      </NavBarContainer>
    </>
  );
};

export default NavBar;
