import styled from "styled-components";
import { spacing, font, color, maxMedia } from "../designSystem";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${color.offwhiteBG};
  padding: 0 ${spacing.XXXL}rem;

  ${maxMedia.mobileLarge`
    padding: 0;
  `}
  ${maxMedia.tablet`
    padding: 0;
  `}
  ${maxMedia.tabletLarge`
    padding: 0;
   `}
`;

export const TitleItem = styled.div`
  /* font-weight: 600; */
  font-size: ${font.XL}rem;
  align-self: center;
  max-width: ${spacing.XXXXXL}rem;
  margin: ${spacing.M}rem 0;
  ${maxMedia.mobileLarge`
    text-align: center;
    margin: 0 auto;
    padding: 3.2rem 0;
  `}
  ${maxMedia.tabletLarge`
    display: inline-block;
   `}
`;

export const ParagraphItem = styled.div`
  /* margin-right: 9rem; */
  /* width: 50rem; */
  align-self: center;
  font-size: ${font.M}rem;
  color: ${color.primaryTextCol};

  ${maxMedia.mobileLarge`
    text-align: center;
     p {
        margin: 3.2rem;
     }
  `}

  ${maxMedia.tablet`
    margin: 1.5rem;
    text-align: left;
  `}
`;

export const IconItem = styled.div``;

export const IconItemParagraph = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: ${spacing.L}rem 0;
  justify-content: flex-start;
  ${maxMedia.mobileLarge`
    flex-wrap: wrap;
    flex-direction: column-reverse;
    padding-top: 0;
  `}

  ${maxMedia.tablet`
    padding: 1rem;
  `}
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

  ${maxMedia.mobileLarge`
    text-align: center;
  `}
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
    ${maxMedia.mobileLarge`
    max-width: 100%;
    margin-bottom: 3.2rem;
  `}

    ${maxMedia.tablet`
    max-width: 100%;
  `}
  }

  ${maxMedia.tablet`
    justify-content: center;
  `}
  ${maxMedia.tabletLarge`
    justify-content: center;
  `}
`;

export const MiddleColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  img {
    max-width: 50%;
    ${maxMedia.mobileLarge`
      max-width: 100%;
    `}

    ${maxMedia.tablet`
      max-width: 100%;
    `}
  }

  ${maxMedia.tablet`
    justify-content: center;
  `}
  ${maxMedia.tabletLarge`
    justify-content: center;
  `}
`;
