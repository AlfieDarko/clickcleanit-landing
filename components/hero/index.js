import React from "react";
import {
  Container,
  HeroTitleItem,
  HeroFormItem,
  Panel,
  HeroSubTitle,
  OfferBox,
  OfferBoxContent,
  OfferBoxRow,
  OuterContainer,
  YoutubeContainer,
  YoutubePanel,
  OfferBoxOffer
} from "./styled";

import BookingForm from "../hero-booking-form/index";
import YouTubePlayer from "./youtube";

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
            <OfferBoxRow>
              <OfferBoxContent>
                <OfferBox>Just Once</OfferBox>
              </OfferBoxContent>
              <OfferBoxContent>
                <OfferBox>Monthly</OfferBox>
                <OfferBoxOffer>5% Off!</OfferBoxOffer>
              </OfferBoxContent>
              <OfferBoxContent>
                <OfferBox>Bi-weekly</OfferBox>
                <OfferBoxOffer>10% Off</OfferBoxOffer>
              </OfferBoxContent>
              <OfferBoxContent>
                <OfferBox>Weekly</OfferBox>
                <OfferBoxOffer>15% Off</OfferBoxOffer>
              </OfferBoxContent>
            </OfferBoxRow>
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
