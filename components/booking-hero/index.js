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
import OfferBoxComponent from "./offerbox";
const BookUsHero = () => {
  return (
    <BookingContainer>
      <Title>
        <b>Join our list of happy customers by booking your clean today!</b>
      </Title>
      <OfferBoxComponent />
      <BookingFormContainer>
        <BookingForm />
      </BookingFormContainer>
    </BookingContainer>
  );
};

export default BookUsHero;
