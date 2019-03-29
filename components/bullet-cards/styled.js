import styled from "styled-components";
import { spacing, font, color } from "../designSystem";

// background: #7b9a9a;
// color: #d7e1e1;

export const Container = styled.div`
  background: ${color.bulletCardContainerBG};
  display: flex;
  padding: 5rem;
  background: ${color.bulletContainerBG};
  color: ${color.bulletCardTitleColor};
  justify-content: center;
  flex-direction: column;
  align-content: center;
  padding: 0 ${spacing.XXXL}rem ${spacing.XL}rem ${spacing.XXXL}rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: ${spacing.L}rem;
`;

export const Title = styled.div`
  justify-content: center;
  font-size: ${font.XXL}rem;
  align-self: center;
`;

export const SubTitle = styled.p`
  align-self: center;
`;

export const ContentContainer = styled.div`
  justify-content: space-around;
  display: flex;
`;

export const ContentCard = styled.div`
  color: white;
  background: ${color.bulletCardBG};
  padding: 3rem;
  margin: 2rem;
  border-radius: 1rem;
  width: 70%;
  text-align: center;
`;

export const ContentColumn = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  max-width: 35%;
`;

export const IconWrapper = styled.div`
  display: flex;
  font-size: 1rem;
  justify-content: center;
`;

export const ParagraphWrapper = styled.div`
  display: flex;
  justify-content: center;

  p {
    text-align: center;
  }
`;

export const BulletTitle = styled.span`
  display: inline-block;
  font-weight: bold;
  margin: 1rem;
`;

export const CTAContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`;
