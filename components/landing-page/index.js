import React from "react";
import Hero from "../hero";
import HowWeWork from "../how-we-work";
import WhyChooseUs from "../why-choose-us/index";
import BulletCards from "../bullet-cards";
import Testimonials from "../testimonials";
import BookUsHero from "../booking-hero";

const LandingPage = props => {
  return (
    <>
      <Hero />
      <HowWeWork />
      <WhyChooseUs />
      <BulletCards />
      <Testimonials />
      <BookUsHero />
    </>
  );
};

export default LandingPage;
