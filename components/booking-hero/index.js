import React from "react";
import BookingForm from "../hero-booking-form";
import {
  BookingContainer,
  OfferBox,
  OfferBoxOffer,
  OfferBoxRow,
  OfferBoxContent,
  BookingFormContainer,
  Title
} from "./styled";

const BookUsHero = () => {
  return (
    <BookingContainer>
      <Title>
        <b>Join our list of happy customers by booking your clean today!</b>
      </Title>
      <OfferBoxRow>
        <OfferBoxContent>
          <OfferBox>Just Once</OfferBox>
        </OfferBoxContent>
        <OfferBoxContent>
          <OfferBox>Monthly</OfferBox>
          <OfferBoxOffer>5% Off</OfferBoxOffer>
        </OfferBoxContent>
        <OfferBoxContent>
          <OfferBox>Bi-Weekly</OfferBox>
          <OfferBoxOffer>10% Off</OfferBoxOffer>
        </OfferBoxContent>
        <OfferBoxContent>
          <OfferBox>Weekly</OfferBox>
          <OfferBoxOffer>15% Off</OfferBoxOffer>
        </OfferBoxContent>
      </OfferBoxRow>
      <BookingFormContainer>
        <BookingForm />
      </BookingFormContainer>
    </BookingContainer>
  );
};

export default BookUsHero;
