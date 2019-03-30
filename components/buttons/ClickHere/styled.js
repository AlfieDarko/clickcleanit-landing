import styled from "styled-components";
import { spacing, color, font } from "../../designSystem";

export const Button = styled.div`
  color: ${color.navbarCTAtext};
  display: inline-block;
  font-display: inherit;
  background-color: ${color.primaryCol};
  padding: ${spacing.XXS}rem ${spacing.XL}rem;
  margin: ${spacing.XXS}rem;
  border-radius: ${spacing.XXXXXS}rem;
`;

export const AltButton = styled.div`
  color: ${color.primaryCol};
  display: inline-block;
  font-display: inherit;
  background-color: ${font.altBtnBG};
  padding: ${spacing.XXS}rem ${spacing.XL}rem;
  margin: ${spacing.XS}rem;
  border: 2px solid ${color.primaryCol};
  border-radius: ${spacing.XXXXXS}rem;
  transition: all 0.3s ease 0s;

  :hover {
    color: white;
    background-color: ${color.primaryCol};
  }

  :active {
    transform: scale(0.9);
  }
`;
