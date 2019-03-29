import styled from "styled-components";
import { spacing, color, font } from "../../designSystem";

export const Button = styled.div`
  color: ${color.navbarCTAtext};
  display: inline-block;
  font-display: inherit;
  background-color: ${color.navbarCTAbtn};
  padding: ${spacing.XXS}rem ${spacing.XL}rem;
  margin: ${spacing.XXS}rem;
  border-radius: ${spacing.XXXXXS}rem;
`;
