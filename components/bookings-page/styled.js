import styled from "styled-components";
import { color } from "components/designSystem";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr [col-end]);
  grid-template-rows: 40vh 10vh 2fr min-content;
  grid-row-gap: 3rem;
  grid-column-gap: 3rem;

  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(5, [col-start] 1fr [col-end]);
  }
`;

export const FullWidthBanner = styled.div`
  /* margin-top: 3rem; */
  /* background: ${color.bulletCardContainerBG}; */
  align-content: center;
  grid-column: 1 / -1;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(2, min-content);
  grid-column-gap: 1rem;

  @media only screen and (max-width: 800px) {
    grid-template-columns: minmax(150px, 1fr) minmax(150px, 1fr) minmax(
        150px,
        1fr
      );
    grid-template-rows: min-content min-content 50%;
  }

  @media only screen and (max-width: 512px) {
    grid-template-columns: repeat(2, [col-start] minmax(150px, 1fr) [col-end]);
  }
`;

export const SubHeading = styled.div`
  min-width: 100%;
`;

export const ShortWidthBanner = styled.div`
  /* background-color: green; */
  border: 1px solid black;
  grid-column: 4 / -4;
  grid-row: 2;
  display: flex;
  p {
    align-self: center;
    margin: auto;
  }
  @media only screen and (max-width: 800px) {
    grid-column: 1 / -1;
  }
`;

export const LeftPaymentContainer = styled.div`
  form {
    display: contents;
  }
  border: 1px solid black;
  /* background-color: lightgreen; */
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: min-content;
  grid-template-columns: repeat(8, 1fr);
  grid-row-gap: 3rem;
  grid-column: 4 / span 4;
  grid-row: 3;
  @media only screen and (max-width: 800px) {
    grid-column: 1 / -1;
  }
`;

export const RightSummaryContainer = styled.div`
  border: 1px solid black;

  /* background-color: green; */
  display: grid;
  grid-column: 8 / span 2;
  grid-template-rows: min-content;
  grid-row: 3;
  @media only screen and (max-width: 800px) {
    grid-row: 4;
    grid-column: 1 / -1;
  }
`;

export const HeaderBullet = styled.div`
  grid-column: ${props => props.start} / ${props => props.end};
  max-width: 120px;
  justify-self: center;
`;

export const FormSectionContainer = styled.div`
  grid-column: 1 / span 8;
`;

export const InputFormContainer = styled.div`
  display: grid;
  padding: 0 3rem 0 3rem;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(2, min-content);
  grid-row-gap: 3rem;

  div:nth-of-type(1) {
    align-self: center;
    grid-column: 2 / 3;
  }
  div:nth-of-type(2) {
    grid-column: 3 / 5;
  }

  div:nth-of-type(3) {
    align-self: center;
    grid-column: 6 / 7;
  }
  div:nth-of-type(4) {
    grid-column: 7 / 9;
  }
  div:nth-of-type(5) {
    align-self: center;
    grid-column: 2 / 3;
  }
  div:nth-of-type(6) {
    grid-column: 3 / 5;
  }
  div:nth-of-type(7) {
    align-self: center;
    grid-column: 6 / 7;
  }
  div:nth-of-type(8) {
    grid-column: 7 / 9;
  }
`;

export const DatePickerContainer = styled.div`
  display: grid;
  padding: 0 3rem 0 3rem;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(2, min-content);
  grid-row-gap: 3rem;

  div:nth-of-type(1) {
    align-self: center;
    grid-column: 1 / 5;
  }

  div:nth-of-type(2) {
    align-self: center;
    grid-column: 6 / 9;
    margin-top: 1rem;
  }
`;

export const OfferBoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 3rem;
  grid-template-rows: repeat(2, min-content);
  padding: 2rem;
`;

export const PayByCard = styled.div`
  grid-column-start: 3;
`;

export const PayByInvoice = styled.div`
  grid-column: 7;
`;

export const PayByContainer = styled.div`
  display: grid;
  padding: 0 3rem 0 3rem;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(2, min-content);
  grid-row-gap: 3rem;
`;

export const InputStyled = styled.input`
  padding: 1rem;
`;
