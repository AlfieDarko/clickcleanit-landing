import React from "react";
import {
  Container,
  HeroTitleItem,
  Panel,
  HeroSubTitle,
  OuterContainer,
  YoutubePanel,
} from "./styled";

import BookingForm from "../hero-booking-form/index";
import OfferBoxComponent from "./offerbox";

const Hero = () => {
  return (
    <>
      <Container>
        <OuterContainer>
          <Panel>
            <HeroTitleItem>We Clean. You Relax</HeroTitleItem>
            <HeroSubTitle>
              Choose the number of bedrooms and bathrooms, see your price &
              schedule a clean in 60 seconds!
            </HeroSubTitle>
            <OfferBoxComponent />
            <div>
              <BookingForm />
            </div>
          </Panel>
          <YoutubePanel>
            <img src="/static/clipart/AUG_WET_FLOOR_04_EEZY.png" />
          </YoutubePanel>
        </OuterContainer>
      </Container>
    </>
  );
};

export default Hero;
