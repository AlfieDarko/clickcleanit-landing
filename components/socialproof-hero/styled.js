import styled from "styled-components";
import { spacing, font, color } from "../designSystem";

export const Container = styled.div`
  display: flex;
  background: #f7f9f9;
  justify-content: center;
  padding: ${spacing.M}rem ${spacing.XXL}rem;
  color: #283044;
  border: 1px black solid;
`;

export const ProofCol = styled.div`
  margin: 0 ${spacing.L}rem;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

export const ProofRow = styled.div`
  display: flex;
`;

export const ProofText = styled.div`
  font-size: ${font.M}rem;
`;

export const ProofLogo = styled.div`
  display: flex;
  justify-content: center;
`;
