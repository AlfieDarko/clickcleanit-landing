import styled from "styled-components";
import { spacing, font, color } from "../designSystem";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroTitleItem = styled.div`
  font-size: ${font.XXXL}rem;
  margin-top: ${spacing.XXXL}rem;
`;

export const HeroFormItem = styled.div`
  margin-top: ${spacing.L}rem;
  margin-bottom: ${spacing.L}rem;
  /* border: 1px solid black; */
`;

export const HeroCTAbtn = styled.div`
  padding: ${spacing.XXS}rem ${spacing.S}rem;
  margin-left: ${spacing.M}rem;
  display: inline-block;
  border-radius: ${spacing.XXXS}rem;
  background-color: #ff4c40;
  color: #fff;
  transition: all 0.3s ease 0s;

  :hover {
    background-color: #fff;
    color: #ff4c40;
  }

  :active {
    background-color: #fe8f90;
    background-color: #fff;

    transform: scale(0.9);
    /* transform: translateXY(3px, 3px); */
  }
`;

export const HeroStyled = styled.div`
  /* margin-bottom: 10rem; */
`;
