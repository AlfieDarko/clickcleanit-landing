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
  YoutubePanel
} from "./styled";
import BookingForm from "../hero-booking-form/index";
import UserForm from "../hero-booking-form/userform";
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
              </OfferBoxContent>
              <OfferBoxContent>
                <OfferBox>Weekly</OfferBox>
              </OfferBoxContent>
              <OfferBoxContent>
                <OfferBox>Bi-weekly</OfferBox>
              </OfferBoxContent>
            </OfferBoxRow>
            <HeroFormItem>
              <BookingForm />
            </HeroFormItem>
          </Panel>
          <YoutubePanel>
            <YouTubePlayer />
          </YoutubePanel>
        </OuterContainer>
      </Container>
    </>
  );
};

export default Hero;
