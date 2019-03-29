import styled from "styled-components";
import { color, spacing, font } from "../designSystem";

export const BookingFormContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const BookingContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: space-between;
  background: #f7f9f9;
`;

export const OfferBox = styled.span`
  border-radius: 1rem;
  color: black;
  /* background-color: #2e4057; */
  font-size: ${font.M}rem;
  padding: ${spacing.M}rem;
  border: 2px solid black;
`;

export const OfferBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
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
`;

export const Title = styled.div`
  text-align: center;
  font-size: ${font.L}rem;
  margin-top: 6.4rem;
`;
