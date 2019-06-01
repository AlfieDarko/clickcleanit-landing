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
  background-color: ${props =>
    props.selected ? `#00f99fa9` : `${color.primaryCol}`};
  font-size: ${font.M}rem;
  padding: ${props =>
    props.noWidthPadding ? `${spacing.M}rem 0` : `${spacing.M}rem`};

  border: 2px solid black;
  transition: all 0.3s ease 0s;
  border: none;
  display: ${props => (props.displayBlock ? "block" : "initial")};
  :hover {
    background: #00f99fa9;
    color: #ffffffc9;
    cursor: pointer;
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
