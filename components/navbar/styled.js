import styled from "styled-components";
import { spacing, font, color, maxMedia, minMedia } from "../designSystem";

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  background-color: ${props =>
    props.isSticky ? `${color.offwhiteBG}` : `${color.primaryCol}`};
  color: ${props =>
    props.isSticky ? `${color.primaryTextCol}` : `${color.navbarTextColor}`};
  transition: all 0.5s ease 0s;

  box-shadow: ${props =>
    props.isSticky
      ? `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`
      : `none`};
  padding: 0 ${spacing.XXXL}rem;
  padding-right: ${spacing.XL}rem;
  align-items: center;
  ${maxMedia.mobileLarge`
    padding: 0 3rem;
    justify-content: flex-end;
    padding-right: 0;
  `}
`;

export const NavItem = styled.div`
  margin: ${spacing.S}rem;
  font-size: ${font.M}rem;
  ${maxMedia.tablet`
    display: ${props => (props.isHiddenOnMobile ? `none` : `initial`)}
  `}

  ${minMedia.tabletLarge`
    display: ${props => (props.isHiddenOnDesktop ? `none` : `initial`)}
  `}
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

export const NavSeperator = styled.div`
  display: flex;
`;

export const LogoText = styled.span`
  font-family: "Brandon Grotesque";
  font-weight: 700;
  font-size: ${font.L}rem;
  i {
    margin: 0 ${spacing.XXS}rem;
  }

  ${maxMedia.mobileLarge`
    font-size: 1.8rem;
    text-align: center;
    padding: 0;
    i {
      display: none;
    }
    
  `}
`;
