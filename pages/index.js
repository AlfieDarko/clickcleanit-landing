import Link from "next/link";
import React from "react";
import NavBar from "../components/navbar";
import Hero from "../components/hero";
import WhyChooseUs from "../components/why-choose-us/index";
import HowWeWork from "../components/how-we-work";
import BulletCards from "../components/bullet-cards";
import Footer from "../components/footer";
import ScrollBtn from "../components/buttons/BackToTop";
import Testimonials from "../components/testimonials";
import BookUsHero from "../components/booking-hero";
import Sticky from "react-stickynode";
import BurgerMenu from "../components/navbar/burger-menu";
// import "../static/semantic/dist/semantic.css";

const Index = () => (
  <div id="app">
    <BurgerMenu outerContainerId={"app"} pageWrapId={"page-wrap"} />

    <Sticky enabled={true} top={0} innerZ={3}>
      {status => {
        if (status.status === Sticky.STATUS_FIXED) {
          return <NavBar isSticky={true} />;
        }
        if (status.status === Sticky.STATUS_ORIGINAL) {
          return <NavBar isSticky={false} />;
        }
      }}
    </Sticky>
    <ScrollBtn />

    <div id="page-wrap">
      <Hero />
      <HowWeWork />
      <WhyChooseUs />
      <BulletCards />
      <Testimonials />
      <BookUsHero />
      {/* <Footer /> */}
    </div>
  </div>
);

export default Index;
