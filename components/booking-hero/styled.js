import styled from "styled-components";
import { color, spacing, font, minMedia, maxMedia } from "../designSystem";

export const BookingFormContainer = styled.div`
  display: flex;
  justify-content: center;

  ${maxMedia.mobileLarge`
    flex-direction: column;
    margin: 6.2rem;
  `}
`;

export const BookingContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: space-between;
  background: ${color.offwhiteBG};
`;

export const OfferBox = styled.span`
  border-radius: 1rem;
  color: white;
  background-color: ${color.primaryCol};
  font-size: ${font.M}rem;
  padding: ${spacing.M}rem;
  border: 2px solid black;
  transition: all 0.3s ease 0s;
  border: none;
  :hover {
    background: #00b99fa1;
    color: #ffffffc9;
  }
`;

export const OfferBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${spacing.S}rem;
`;

export const OfferBoxOffer = styled.div`
  padding: 0;
  align-self: center;
  color: black;
`;

export const OfferBoxRow = styled.div`
  margin-top: ${spacing.S}rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  ${maxMedia.mobileLarge`
    flex-wrap: wrap;
  `}

`;

export const Title = styled.div`
  text-align: center;
  font-size: ${font.L}rem;
  margin-top: ${spacing.L}rem;
`;
