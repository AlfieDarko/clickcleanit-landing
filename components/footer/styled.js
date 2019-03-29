import styled from "styled-components";
import { spacing, font, color } from "../designSystem";

export const Container = styled.div`
  padding: ${spacing.M}rem ${spacing.XL}rem ${spacing.L}rem ${spacing.XL}rem;

  display: flex;
  justify-content: space-between;
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const RightContainer = styled.div`
  display: flex;
`;

export const SocIcon = styled.div`
  padding: ${spacing.XL}rem ${spacing.S}rem 0 ${spacing.S}rem;
`;

export const ItemColumn = styled.div`
  padding: ${spacing.XL}rem;
`;

export const ColTitle = styled.div`
  font-weight: bold;
  padding-bottom: ${spacing.M}rem;
  font-size: ${font.L}rem;
`;

export const ColLink = styled.div`
  font-size: ${font.M}rem;
`;
