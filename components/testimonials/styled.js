import styled from "styled-components";
import { spacing, font, color } from "../designSystem";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 7rem 9rem 10rem 9rem;
  background-color: #f7f9f9;
  color: ${color.primaryTextCol};
  padding: ${spacing.XL}rem ${spacing.XXXL}rem;
  flex-direction: column;
`;

export const TestimonialsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 7rem 9rem 10rem 9rem;
  background-color: ${color.sectionBGlight};
  color: ${color.primaryTextCol};
  padding: ${spacing.XS}rem ${spacing.XXXL}rem;
  flex-direction: column;
`;

export const Title = styled.div`
  justify-content: center;
  font-size: ${font.XXL}rem;
`;

export const SubTitle = styled.p`
  align-self: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const TitleContainer2 = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${spacing.L}rem;
`;

export const ContentCardsContainer = styled.div`
  display: flex;
  justify-items: center;
  justify-content: center;
`;

export const TestimonialCardsContainer = styled.div`
  display: flex;
  justify-items: center;
  justify-content: space-evenly;
  margin-top: ${spacing.M}rem;
  margin-bottom: ${spacing.M}rem;
  align-items: baseline;
`;

export const ContentCard = styled.div`
  padding: ${spacing.S}rem ${spacing.L}rem;
  color: white;
  align-self: center;

  border-radius: 1rem;
  margin: ${spacing.S}rem;

  img {
    filter: grayscale(1);
    /* background-color: #f7f9f9;
    background-blend-mode: difference; */
    max-width: ${spacing.XL}rem;
  }
`;

export const TestimonialCard = styled.div``;

export const CTAContainer = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProofContainer = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${spacing.M}rem;
`;
