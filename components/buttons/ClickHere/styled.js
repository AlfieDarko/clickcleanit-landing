import styled from "styled-components";
import { spacing, color, font } from "../../designSystem";

export const Button = styled.div`
  color: ${color.navbarCTAtext};
  display: inline-block;
  font-display: inherit;
  background-color: ${color.primaryDarkerCol};
  padding: ${spacing.XXS}rem ${spacing.XL}rem;
  margin: ${spacing.XXS}rem;
  border-radius: ${spacing.XXXXXS}rem;
`;

export const AltButton = styled.div`
  color: ${color.primaryDarkerCol};
  display: inline-block;
  font-display: inherit;
  background-color: ${font.altBtnBG};
  padding: ${spacing.XXS}rem ${spacing.XL}rem;
  margin: ${spacing.XS}rem;
  border: 2px solid ${color.primaryDarkerCol};
  border-radius: ${spacing.XXXXXS}rem;
`;
