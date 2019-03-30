import styled from "styled-components";
import { spacing, font, color } from "../designSystem";

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: ${spacing.XL}rem;
  align-items: center;
  background-color: ${color.primaryCol};
  color: ${color.navbarTextColor};
  padding: 0 ${spacing.XXXL}rem;
`;

export const NavItem = styled.div`
  margin: ${spacing.S}rem;
  font-size: ${font.M}rem;
  /* font-weight: bold; */
`;

export const CTAbtn = styled.div`
  font-weight: bold;
  color: ${color.navbarCTAtext};
  display: inline-block;
  font-display: inherit;
  background-color: ${color.navbarCTAbtn};
  padding: ${spacing.XXXXXS}rem ${spacing.XXS}rem ${spacing.XXXXXS}rem
    ${spacing.XXS}rem;
  margin: 0 auto;
  border-radius: ${spacing.XXXXXS}rem;
  /* border: 2px solid #4286f4; */
  transition: all 0.3s ease 0s;

  :hover {
    background-color: #fff;
    color: #ff4c40;
  }

  :active {
    background-color: #fe8f90;
    background-color: #fff;
    transform: scale(0.9);
  }
`;
