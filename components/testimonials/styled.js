import styled from "styled-components";
import { spacing, font, color, maxMedia } from "../designSystem";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 7rem 9rem 10rem 9rem;
  background-color: #f7f9f9;
  color: ${color.primaryTextCol};
  padding: ${spacing.XL}rem ${spacing.XXXL}rem;
  flex-direction: column;

  ${maxMedia.mobileLarge`
    padding: 1rem;
  `}

  ${maxMedia.tablet`
    padding: 0;
  `}

  ${maxMedia.tabletLarge`
    padding: 0;
   `}
`;

export const TestimonialsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 7rem 9rem 10rem 9rem;
  background-color: ${color.sectionBGlight};
  color: ${color.primaryTextCol};
  padding: ${spacing.XS}rem ${spacing.XXXL}rem;
  flex-direction: column;
  ${maxMedia.mobileLarge`
    padding: 1.6rem;
  `}

  ${maxMedia.tablet`
    padding: 0;
  `}
`;

export const Title = styled.div`
  justify-content: center;
  font-size: ${font.XXL}rem;
  ${maxMedia.mobileLarge`
    text-align: center;
  `}
  ${maxMedia.tablet`
    padding: 3rem;
  `}
`;

export const SubTitle = styled.p`
  align-self: center;
  ${maxMedia.mobileLarge`
    text-align: center;
    margin: 3.2rem;
  `}

  ${maxMedia.tablet`
    margin: 2rem;;
  `}
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  ${maxMedia.tablet`
    margin: 3.2rem;
  `}
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
  ${maxMedia.mobileLarge`
    flex-wrap: wrap;
  `}

  ${maxMedia.tablet`
    flex-wrap: wrap;
  `}
`;

export const TestimonialCardsContainer = styled.div`
  display: flex;
  justify-items: center;
  justify-content: space-evenly;
  margin-top: ${spacing.M}rem;
  margin-bottom: ${spacing.M}rem;
  align-items: baseline;
  ${maxMedia.mobileLarge`
    flex-wrap: wrap;
  `}

  ${maxMedia.tablet`
    padding: 3rem;
    flex-wrap: wrap;
  `}
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

    ${maxMedia.mobileLarge`
    max-width: ${spacing.XXXL}rem;
  `}
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

  ${maxMedia.mobileLarge`
    text-align: center;
    margin: 1.6rem;
  `}
`;
