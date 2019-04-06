import React from "react";
import {
  NavBarContainer,
  NavItem,
  CTAbtn,
  NavSeperator,
  LogoText
} from "./styled";
import BurgerMenu from "./burger-menu";
const NavBar = props => {
  // console.log("my props", props.handleStateChange);
  return (
    <>
      <NavBarContainer isSticky={props.isSticky}>
        <NavSeperator>
          <LogoText>
            CLICKCLEANIT
            <i class="fas fa-broom" />
          </LogoText>
        </NavSeperator>
        <NavSeperator>
          <NavItem isHiddenOnMobile={true}>Home</NavItem>
          <NavItem isHiddenOnMobile={true}>Services</NavItem>
          <NavItem isHiddenOnMobile={true}>FAQ's</NavItem>
          <NavItem>
            <CTAbtn>Book Now!</CTAbtn>
          </NavItem>
        </NavSeperator>
      </NavBarContainer>
    </>
  );
};

export default NavBar;
