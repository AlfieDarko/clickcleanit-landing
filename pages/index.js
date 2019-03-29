import Link from "next/link";
import React from "react";
import NavBar from "../components/navbar";
import Hero from "../components/hero";
import WhyChooseUs from "../components/why-choose-us/index";
import HowWeWork from "../components/how-we-work";
import BulletCards from "../components/bullet-cards";
import Footer from "../components/footer";
import SocialProof from "../components/socialproof-hero";
import Testimonials from "../components/testimonials";
import BookUsHero from "../components/booking-hero";
// import "../static/semantic/dist/semantic.css";
const Index = () => (
  <div>
    <NavBar />
    <Hero />
    <HowWeWork />
    <WhyChooseUs />
    <BulletCards />
    <Testimonials />
    {/* <SocialProof /> */}
    <BookUsHero />
    <Footer />
  </div>
);

export default Index;
