import React from "react";
import { Container, HeroTitleItem, HeroFormItem, HeroCTAbtn } from "./styled";
import DropdownSelector from "./selection/index";
import { bathroomOptions, bedroomOptions, cleaningType } from "./options";
import BookingForm from "../hero-booking-form/index";
const Hero = () => {
  return (
    <>
      <Container>
        <HeroTitleItem>We Clean. You Relax</HeroTitleItem>
        <HeroFormItem>
          <BookingForm />
        </HeroFormItem>
      </Container>
    </>
  );
};

export default Hero;
