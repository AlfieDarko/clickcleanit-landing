import styled from "styled-components";
import { spacing, font, color } from "../designSystem";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${color.offwhiteBG};
  padding: 0 ${spacing.XXXL}rem;
`;

export const TitleItem = styled.div`
  /* font-weight: 600; */
  font-size: ${font.XL}rem;
  align-self: center;
  max-width: ${spacing.XXXXXL}rem;
  margin: ${spacing.M}rem 0;
`;

export const ParagraphItem = styled.div`
  /* margin-right: 9rem; */
  width: 50rem;
  align-self: center;
  font-size: ${font.M}rem;
  color: ${color.primaryTextCol};
`;

export const IconItem = styled.div``;

export const IconItemParagraph = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: ${spacing.L}rem 0;
  justify-content: flex-start;
`;

export const LastWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${spacing.L}rem ${spacing.XXXL}rem;
  align-self: center;
  text-align: center;
`;
export const SexyLinebreak = styled.span`
  display: block;
  border: none;
  color: white;
  height: 1px;
  background: black;
  background: -webkit-gradient(
    radial,
    50% 50%,
    0,
    50% 50%,
    350,
    from(#999999),
    to(#f7f9f9)
  );
  p {
    text-align: center;
  }
`;

export const SubTitle = styled.div`
  align-self: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${spacing.L}rem;
`;

export const Title = styled.div`
  font-size: ${font.XXL}rem;

  display: flex;
  flex-direction: column;
  align-self: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: row;
  img {
    max-width: 50%;
  }
`;

export const MiddleColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  img {
    max-width: 50%;
  }
`;
