import styled from "styled-components";
import { spacing, font, color } from "../designSystem";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: white;
  color: ${color.primaryCol};
  padding: 8rem;
  flex-direction: column;
  padding: 0 20rem 8rem 20rem;
`;

export const TitleItem = styled.div`
  margin: ${spacing.M}rem;
`;

export const IconBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.025);
  width: 25%;
  background: ${color.primaryCol};
  color: white;
`;
export const ParagraphItem = styled.div``;

export const IconItem = styled.div`
  display: flex;
  justify-content: center;
  img {
    border-radius: 1rem;
    align-self: end;
    display: block;
    max-width: 100%;
  }
  /* margin: 4rem; */
`;

export const IconHeadlineItem = styled.div`
  align-self: center;
  font-size: ${font.XL}rem;
  margin: ${spacing.S}rem ${spacing.S}rem 0 ${spacing.S}rem;
`;

export const IconCopyItem = styled.div`
  align-self: center;
  font-size: ${font.M}rem;
  margin: ${spacing.M}rem;
  color: white;
`;

export const Title = styled.div`
  padding: ${spacing.L}rem;
  display: flex;
  flex-direction: column;
  align-self: center;

  div:nth-of-type(1) {
    /* font-weight: bold; */
    display: block;
    font-size: ${font.XXL}rem;
    color: ${color.primaryTextCol};
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const SubTitle = styled.div`
  color: ${color.primaryTextCol};
  align-self: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CTAContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: ${spacing.L}rem;
  text-align: center;
  color: ${color.primaryTextCol};
  div {
    align-self: center;
  }
`;
