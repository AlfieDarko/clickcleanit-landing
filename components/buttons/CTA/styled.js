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
  transition: all 0.3s ease 0s;

  :hover {
    border: 2px solid #ff4c40;
    background-color: #fff;
    color: #ff4c40;
  }

  :active {
    background-color: #fe8f90;
    background-color: #fff;
    transform: scale(0.9);
  }
`;
